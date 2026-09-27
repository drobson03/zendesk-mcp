// biome-ignore-all lint/nursery/noAwaitInLoop: requests intentionally verify sequential protocol behavior
// biome-ignore-all lint/performance/useTopLevelRegex: assertions keep expected output next to the request
// biome-ignore-all lint/suspicious/noMisplacedAssertion: startServer is a shared test fixture
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { createServer } from "node:http";
import { createInterface } from "node:readline";
import test from "node:test";

async function startServer(t, protocolVersion = "2025-11-25") {
  const requests = [];
  const api = createServer((request, response) => {
    requests.push({
      url: request.url,
      authorization: request.headers.authorization,
    });
    response.setHeader("content-type", "application/json");
    if (request.url === "/api/v2/tickets/500") {
      response
        .writeHead(500)
        .end(JSON.stringify({ error: "private upstream details" }));
    } else if (request.url === "/api/v2/tickets/501") {
      response.end(JSON.stringify({ ticket: { id: "invalid" } }));
    } else if (request.url === "/api/v2/tickets/404") {
      response.end(JSON.stringify({}));
    } else if (request.url === "/api/v2/tickets/42/comments") {
      response.end(
        JSON.stringify({
          comments: [
            { id: 1, public: true, author_id: 123, plain_body: "Public reply" },
            {
              id: 2,
              public: false,
              author_id: 456,
              plain_body: "Internal note",
            },
          ],
        }),
      );
    } else if (request.url?.endsWith("/comments")) {
      response.end(JSON.stringify({ comments: [] }));
    } else {
      response.end(
        JSON.stringify({ ticket: { id: 42, subject: "Test ticket" } }),
      );
    }
  });
  api.listen(0, "127.0.0.1");
  await once(api, "listening");
  const child = spawn(process.execPath, ["dist/main.js"], {
    env: {
      ...process.env,
      ZENDESK_API_USERNAME: "test@example.com/token",
      ZENDESK_API_PASSWORD: "test-token",
      ZENDESK_API_URL: `http://127.0.0.1:${api.address().port}`,
    },
    stdio: ["pipe", "pipe", "pipe"],
  });
  let stderr = "";
  child.stderr.on("data", (chunk) => {
    stderr += chunk;
  });
  const pending = new Map();
  let nextId = 0;
  const lines = createInterface({ input: child.stdout });
  lines.on("line", (line) => {
    // Any logging on stdout fails this test: stdout is reserved for JSON-RPC.
    const message = JSON.parse(line);
    pending.get(message.id)?.(message);
    pending.delete(message.id);
  });
  t.after(async () => {
    child.kill("SIGTERM");
    if (child.exitCode === null && child.signalCode === null) {
      await once(child, "exit");
    }
    lines.close();
    api.closeAllConnections();
    await new Promise((resolve) => api.close(resolve));
  });
  function request(method, params) {
    const id = ++nextId;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(
        () => reject(new Error(`Timed out: ${method}\n${stderr}`)),
        10_000,
      );
      pending.set(id, (message) => {
        clearTimeout(timer);
        resolve(message);
      });
      child.stdin.write(
        `${JSON.stringify({ jsonrpc: "2.0", id, method, params })}\n`,
      );
    });
  }
  const init = await request("initialize", {
    protocolVersion,
    capabilities: {},
    clientInfo: { name: "test", version: "1" },
  });
  assert.equal(init.result.protocolVersion, protocolVersion);
  assert.equal(init.result.serverInfo.name, "zendesk-mcp");
  child.stdin.write(
    `${JSON.stringify({ jsonrpc: "2.0", method: "notifications/initialized" })}\n`,
  );
  return { request, requests };
}

test(
  "stdio tools preserve discovery, validation, results, and errors",
  { timeout: 30_000 },
  async (t) => {
    const { request, requests } = await startServer(t);
    const listed = await request("tools/list", {});
    assert.deepEqual(listed.result.tools.map((tool) => tool.name).sort(), [
      "list-comments",
      "show-ticket",
    ]);
    for (const tool of listed.result.tools) {
      assert.equal(tool.annotations.readOnlyHint, true);
      assert.equal(tool.annotations.destructiveHint, false);
      assert.ok(tool.title);
      assert.equal(tool.inputSchema.type, "object");
      assert.deepEqual(tool.inputSchema.required, ["ticket_id"]);
      assert.equal(tool.inputSchema.properties.ticket_id.minimum, 1);
    }
    for (const args of [
      {},
      { ticket_id: 0 },
      { ticket_id: -1 },
      { ticket_id: 1.5 },
      { ticket_id: "42" },
    ]) {
      const result = await request("tools/call", {
        name: "show-ticket",
        arguments: args,
      });
      assert.equal(
        result.result?.isError,
        true,
        JSON.stringify({ args, result }),
      );
    }
    assert.equal(requests.length, 0);
    const call = (name, ticket_id) =>
      request("tools/call", { name, arguments: { ticket_id } });
    const ticket = await call("show-ticket", 42);
    assert.equal(
      ticket.result.content[0].text,
      "Here is the ticket 42:\n\nid: 42\nsubject: Test ticket",
    );
    assert.equal(
      requests[0].authorization,
      `Basic ${Buffer.from("test@example.com/token:test-token").toString("base64")}`,
    );
    const comments = await call("list-comments", 42);
    assert.match(
      comments.result.content[0].text,
      /\*\*Public Comment\*\*[\s\S]*Public reply/,
    );
    assert.match(
      comments.result.content[0].text,
      /\*\*Internal Note\*\*[\s\S]*Internal note/,
    );
    assert.equal(
      (await call("list-comments", 43)).result.content[0].text,
      "*No comments found*",
    );
    assert.equal(
      (await call("show-ticket", 404)).result.content[0].text,
      "Ticket 404 not found",
    );
    for (const id of [500, 501]) {
      const result = await call("show-ticket", id);
      assert.equal(result.result.isError, true);
      assert.equal(
        result.result.content[0].text,
        "Unable to retrieve the ticket from Zendesk.",
      );
    }
    assert.ok(
      (await request("tools/call", { name: "unknown", arguments: {} })).error,
    );
  },
);

for (const protocol of ["2025-06-18", "2025-03-26", "2024-11-05"]) {
  test(`supports MCP ${protocol}`, { timeout: 15_000 }, async (t) => {
    const { request } = await startServer(t, protocol);
    assert.equal((await request("tools/list", {})).result.tools.length, 2);
    const result = await request("tools/call", {
      name: "show-ticket",
      arguments: { ticket_id: 42 },
    });
    assert.match(result.result.content[0].text, /^Here is the ticket 42:/);
  });
}

test(
  "missing configuration fails on stderr without corrupting stdout",
  { timeout: 15_000 },
  async () => {
    const env = { ...process.env };
    for (const key of [
      "ZENDESK_API_USERNAME",
      "ZENDESK_API_PASSWORD",
      "ZENDESK_API_URL",
    ]) {
      delete env[key];
    }
    const child = spawn(process.execPath, ["dist/main.js"], {
      env,
      stdio: ["pipe", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    const [code] = await once(child, "exit");
    assert.notEqual(code, 0);
    assert.equal(stdout, "");
    assert.match(stderr, /ZENDESK_API_/);
  },
);
