#!/usr/bin/env node
import { FetchHttpClient } from "@effect/platform";
import { NodeRuntime } from "@effect/platform-node";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { Config, Effect, Layer } from "effect";
import * as packageJson from "../package.json";
import * as Tickets from "./Tickets";
import * as ZendeskClient from "./ZendeskClient";

const program = Effect.gen(function* () {
  const toolLayer = Layer.provideMerge(
    ZendeskClient.layerConfig({
      username: Config.redacted("ZENDESK_API_USERNAME"),
      password: Config.redacted("ZENDESK_API_PASSWORD"),
      apiUrl: Config.string("ZENDESK_API_URL"),
    }),
    FetchHttpClient.layer,
  );

  const server = new McpServer({
    name: "zendesk-mcp",
    version: packageJson.version,
    title: "Zendesk MCP Server",
  });

  const transport = new StdioServerTransport();

  yield* Tickets.registerTools(server, toolLayer);

  return yield* Effect.tryPromise(() => server.connect(transport));
});

NodeRuntime.runMain(program);
