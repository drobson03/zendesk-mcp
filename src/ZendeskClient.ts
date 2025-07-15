/**
 * @since 0.0.0
 */

import { AiError } from "@effect/ai/AiError";
import * as HttpClient from "@effect/platform/HttpClient";
import * as HttpClientError from "@effect/platform/HttpClientError";
import * as HttpClientRequest from "@effect/platform/HttpClientRequest";
import * as Config from "effect/Config";
import type { ConfigError } from "effect/ConfigError";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import { identity } from "effect/Function";
import * as Layer from "effect/Layer";
import * as ParseResult from "effect/ParseResult";
import type * as Redacted from "effect/Redacted";
import * as Generated from "./Generated.js";

/**
 * @since 0.0.0
 * @category Types
 */
export type WrappedClient = {
  readonly [K in keyof Generated.Client]: Generated.Client[K] extends (
    ...args: infer Args
  ) => Effect.Effect<infer A, unknown, infer R>
    ? (...args: Args) => Effect.Effect<A, AiError, R>
    : Generated.Client[K];
};

/**
 * @since 0.0.0
 * @category Context
 */
export class ZendeskClient extends Context.Tag("zendesk-mcp/ZendeskClient")<
  ZendeskClient,
  WrappedClient
>() {}

/**
 * @since 0.0.0
 * @category Utilities
 */
const wrapWithAiError = <A, E, R>(
  effect: Effect.Effect<A, E, R>,
  method: string,
): Effect.Effect<A, AiError, R> =>
  Effect.mapError(effect, (cause) => {
    if (HttpClientError.isHttpClientError(cause)) {
      return new AiError({
        module: "ZendeskClient",
        method,
        description: `HTTP Client Error: ${cause.message}`,
        cause,
      });
    }
    if (ParseResult.isParseError(cause)) {
      return new AiError({
        module: "ZendeskClient",
        method,
        description: `Parse Error: ${cause.message}`,
        cause,
      });
    }
    return new AiError({
      module: "ZendeskClient",
      method,
      description: `Unknown Error: ${String(cause)}`,
      cause,
    });
  });

/**
 * @since 0.0.0
 * @category Utilities
 */
const wrapClient = (client: Generated.Client): WrappedClient => {
  return new Proxy(client, {
    get(target, prop, receiver) {
      const originalMethod = Reflect.get(target, prop, receiver);

      // Only wrap methods that return Effect
      if (
        typeof originalMethod === "function" &&
        typeof prop === "string" &&
        prop !== "httpClient"
      ) {
        return (...args: unknown[]) => {
          const result = originalMethod.apply(target, args);
          if (Effect.isEffect(result)) {
            return wrapWithAiError(result, prop);
          }

          return result;
        };
      }

      return originalMethod;
    },
  }) as unknown as WrappedClient;
};

/**
 * @since 0.0.0
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
}): Effect.Effect<WrappedClient, never, HttpClient.HttpClient> =>
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
    const wrappedClient = wrapClient(client);

    return ZendeskClient.of(wrappedClient);
  });

/**
 * @since 0.0.0
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
