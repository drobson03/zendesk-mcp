#!/usr/bin/env node
import { McpServer } from "@effect/ai";
import {
  NodeHttpServer,
  NodeRuntime,
  NodeSink,
  NodeStream,
} from "@effect/platform-node";
import { Config, Layer } from "effect";
import { TicketsTools } from "./Tickets";
import * as ZendeskClient from "./ZendeskClient";
import { FetchHttpClient, HttpRouter, HttpServer } from "@effect/platform";
import { createServer } from "node:http";
import { parseArgs } from "node:util";
import * as packageJson from "../package.json";

const { values } = parseArgs({
  options: {
    transport: {
      type: "string",
      default: "http",
    },
  },
});

const mcpServerLayer =
  values.transport === "stdio"
    ? McpServer.layerStdio({
        name: "zendesk-mcp",
        version: packageJson.version,
        stdin: NodeStream.stdin,
        stdout: NodeSink.stdout,
      })
    : McpServer.layerHttp({
        name: "zendesk-mcp",
        version: packageJson.version,
        path: "/mcp",
      });

const baseLayer = Layer.mergeAll(TicketsTools).pipe(
  Layer.provide(
    ZendeskClient.layerConfig({
      username: Config.redacted("ZENDESK_API_USERNAME"),
      password: Config.redacted("ZENDESK_API_PASSWORD"),
      apiUrl: Config.string("ZENDESK_API_URL"),
    }),
  ),
  Layer.provide(FetchHttpClient.layer),
);

const finalLayer = (
  values.transport === "http"
    ? baseLayer.pipe(
        Layer.provide(HttpRouter.Default.serve()),
        HttpServer.withLogAddress,
        Layer.provide(NodeHttpServer.layer(createServer, { port: 3000 })),
      )
    : baseLayer
).pipe(Layer.provide(mcpServerLayer));

finalLayer.pipe(Layer.launch, NodeRuntime.runMain);
