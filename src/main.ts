import { McpServer } from "@effect/ai";
import {
  NodeHttpServer,
  NodeRuntime,
  NodeSink,
  NodeStream,
} from "@effect/platform-node";
import { Config, Layer, Logger } from "effect";
import { TicketsTools } from "./Tickets";
import * as ZendeskClient from "./ZendeskClient";
import { FetchHttpClient, HttpRouter } from "@effect/platform";
import { createServer } from "node:http";
import { parseArgs } from "node:util";

const { values } = parseArgs({
  options: {
    transport: {
      type: "string",
      default: "stdio",
    },
  },
});

const transport =
  values.transport === "http" || values.transport === "stdio"
    ? values.transport
    : "stdio";

const createMcpServerLayer = (transportType: "stdio" | "http") => {
  if (transportType === "http") {
    return McpServer.layerHttp({
      name: "zendesk-mcp",
      version: "1.0.0",
      path: "/mcp",
    });
  }

  return McpServer.layerStdio({
    name: "zendesk-mcp",
    version: "1.0.0",
    stdin: NodeStream.stdin,
    stdout: NodeSink.stdout,
  });
};

const baseLayer = Layer.mergeAll(TicketsTools).pipe(
  Layer.provide(createMcpServerLayer(transport)),
  Layer.provide(Logger.add(Logger.prettyLogger({ stderr: true }))),
  Layer.provide(
    ZendeskClient.layerConfig({
      username: Config.redacted("ZENDESK_API_USERNAME"),
      password: Config.redacted("ZENDESK_API_PASSWORD"),
      apiUrl: Config.string("ZENDESK_API_URL"),
    }),
  ),
  Layer.provide(FetchHttpClient.layer),
);

const finalLayer =
  transport === "http"
    ? baseLayer.pipe(
        Layer.provide(HttpRouter.Default.serve()),
        Layer.provide(NodeHttpServer.layer(createServer, { port: 3000 })),
      )
    : baseLayer;

finalLayer.pipe(Layer.launch, NodeRuntime.runMain);
