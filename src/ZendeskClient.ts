/**
 * @since 1.0.0
 */

import * as HttpClient from "@effect/platform/HttpClient";
import * as HttpClientRequest from "@effect/platform/HttpClientRequest";
import * as Config from "effect/Config";
import type { ConfigError } from "effect/ConfigError";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import { identity } from "effect/Function";
import * as Layer from "effect/Layer";
import type * as Redacted from "effect/Redacted";
import * as Generated from "./Generated.js";

/**
 * @since 1.0.0
 * @category Context
 */
export class ZendeskClient extends Context.Tag("zendesk-mcp/ZendeskClient")<
  ZendeskClient,
  Generated.Client
>() {}

/**
 * @since 1.0.0
 * @category Constructors
 */
export const make = (options: {
  /**
   * The user to use to communicate with the Zendesk API.
   */
  readonly username: Redacted.Redacted;
  /**
   * The password to use to communicate with the Zendesk API.
   */
  readonly password: Redacted.Redacted;
  /**
   * The URL to use to communicate with the Zendesk API.
   */
  readonly apiUrl: string;
  /**
   * A method which can be used to transform the underlying `HttpClient` which
   * will be used to communicate with the Zendesk API.
   */
  readonly transformClient?:
    | ((client: HttpClient.HttpClient) => HttpClient.HttpClient)
    | undefined;
}): Effect.Effect<Generated.Client, never, HttpClient.HttpClient> =>
  Effect.gen(function* () {
    const httpClient = (yield* HttpClient.HttpClient).pipe(
      HttpClient.mapRequest((request) =>
        request.pipe(
          HttpClientRequest.prependUrl(options.apiUrl),
          HttpClientRequest.basicAuth(options.username, options.password),
          HttpClientRequest.acceptJson,
        ),
      ),
      options.transformClient ? options.transformClient : identity,
    );

    const client = Generated.make(httpClient);

    return ZendeskClient.of(client);
  });

/**
 * @since 1.0.0
 * @category Layers
 */
export const layer = (options: {
  /**
   * The user to use to communicate with the Zendesk API.
   */
  readonly username: Redacted.Redacted;
  /**
   * The password to use to communicate with the Zendesk API.
   */
  readonly password: Redacted.Redacted;
  /**
   * The URL to use to communicate with the Zendesk API.
   */
  readonly apiUrl: string;
  /**
   * A method which can be used to transform the underlying `HttpClient` which
   * will be used to communicate with the Zendesk API.
   */
  readonly transformClient?:
    | ((client: HttpClient.HttpClient) => HttpClient.HttpClient)
    | undefined;
}): Layer.Layer<ZendeskClient, never, HttpClient.HttpClient> =>
  Layer.effect(ZendeskClient, make(options));

/**
 * @since 1.0.0
 * @category Layers
 */
export const layerConfig = (options: {
  /**
   * The user to use to communicate with the Zendesk API.
   */
  readonly username: Config.Config<Redacted.Redacted>;
  /**
   * The password to use to communicate with the Zendesk API.
   */
  readonly password: Config.Config<Redacted.Redacted>;
  /**
   * The URL to use to communicate with the Zendesk API.
   */
  readonly apiUrl: Config.Config<string>;
  /**
   * A method which can be used to transform the underlying `HttpClient` which
   * will be used to communicate with the Zendesk API.
   */
  readonly transformClient?:
    | ((client: HttpClient.HttpClient) => HttpClient.HttpClient)
    | undefined;
}): Layer.Layer<ZendeskClient, ConfigError, HttpClient.HttpClient> => {
  const { transformClient, ...configs } = options;
  return Config.all(configs).pipe(
    Effect.flatMap((configs) => make({ ...configs, transformClient })),
    Layer.effect(ZendeskClient),
  );
};
