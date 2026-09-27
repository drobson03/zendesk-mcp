#!/usr/bin/env node
import { NodeRuntime, NodeStdio } from "@effect/platform-node";
import { Config, Effect, Layer, Logger } from "effect";
import { McpProtocol, McpServer } from "effect/unstable/ai";
import { FetchHttpClient } from "effect/unstable/http";
import * as packageJson from "../package.json";
import * as Tickets from "./Tickets.js";
import * as ZendeskClient from "./ZendeskClient.js";

const clientLayer = ZendeskClient.layerConfig({
  username: Config.Redacted("ZENDESK_API_USERNAME"),
  password: Config.Redacted("ZENDESK_API_PASSWORD"),
  apiUrl: Config.String("ZENDESK_API_URL"),
}).pipe(Layer.provide(FetchHttpClient.layer));

const serverLayer = McpServer.layerStdio({
  name: "zendesk-mcp",
  version: packageJson.version,
  protocols: [
    McpProtocol.v2025_11_25,
    McpProtocol.v2025_06_18,
    McpProtocol.v2025_03_26,
    McpProtocol.v2024_11_05,
  ],
}).pipe(Layer.provide(NodeStdio.layer));

Tickets.layer.pipe(
  Layer.provide(clientLayer),
  Layer.provideMerge(serverLayer),
  Layer.launch,
  Effect.tapCause(Effect.logError),
  Effect.provideService(Logger.LogToStderr, true),
  NodeRuntime.runMain({ disableErrorReporting: true }),
);
