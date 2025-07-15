import { McpServer } from "@effect/ai";
import { NodeHttpServer, NodeRuntime } from "@effect/platform-node";
import { Config, Layer, Logger } from "effect";
import { TicketsTools } from "./Tickets";
import * as ZendeskClient from "./ZendeskClient";
import { FetchHttpClient, HttpRouter } from "@effect/platform";
import { createServer } from "node:http";

Layer.mergeAll(TicketsTools, HttpRouter.Default.serve()).pipe(
  // Provide the MCP server implementation
  Layer.provide(
    McpServer.layerHttp({
      name: "zendesk-mcp",
      version: "1.0.0",
      path: "/mcp",
    }),
  ),
  Layer.provide(Logger.add(Logger.prettyLogger({ stderr: true }))),
  Layer.provide(
    ZendeskClient.layerConfig({
      username: Config.redacted("ZENDESK_API_USERNAME"),
      password: Config.redacted("ZENDESK_API_PASSWORD"),
      apiUrl: Config.string("ZENDESK_API_URL"),
    }),
  ),
  Layer.provide(FetchHttpClient.layer),
  Layer.provide(NodeHttpServer.layer(createServer, { port: 3000 })),
  Layer.launch,
  NodeRuntime.runMain,
);
