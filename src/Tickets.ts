import type { HttpClient } from "@effect/platform";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Effect, type Layer, pipe } from "effect";
import z from "zod";
import { ZendeskClient } from "./ZendeskClient.js";

export const showTicket = Effect.fn("tickets.showTicket")(function* ({
  ticket_id,
}: {
  ticket_id: number;
}) {
  const client = yield* ZendeskClient;

  const response = yield* client.ShowTicket(ticket_id.toString(10));

  if (!response.ticket) {
    return `Ticket ${ticket_id} not found`;
  }

  return `Here is the ticket ${ticket_id}:\n\n${Object.entries(response.ticket)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n")}`;
});

export const listComments = Effect.fn("tickets.listComments")(function* ({
  ticket_id,
}: {
  ticket_id: number;
}) {
  const client = yield* ZendeskClient;

  const response = yield* client.ListTicketComments(ticket_id.toString(10));

  return (
    `Here are the comments for the ticket ${ticket_id}:\n\n` +
      response.comments
        ?.map((comment) => {
          const visibility = comment.public
            ? "**Public Comment**"
            : "**Internal Note**";
          const timestamp = comment.created_at
            ? new Date(comment.created_at).toLocaleString()
            : "Unknown time";
          const authorId = comment.author_id
            ? `Author ID: ${comment.author_id}`
            : "Unknown author";
          const body = comment.plain_body || "*No content*";

          return `${visibility} - ${timestamp} - ${authorId}\n\n${body}`;
        })
        .join("\n\n---\n\n") || "*No comments found*"
  );
});

export const registerTools = Effect.fn("tickets.registerTools")(function* (
  server: McpServer,
  layer: Layer.Layer<ZendeskClient | HttpClient.HttpClient, unknown, never>,
) {
  server.registerTool(
    "list-comments",
    {
      title: "List Comments",
      description:
        "List the comments/updates/notes for a ticket, including internal notes. This is useful for understanding the history of a ticket.",
      inputSchema: {
        ticket_id: z.number().int().min(1).describe("The ID of the ticket"),
      },
      annotations: {
        destructiveHint: false,
        readOnlyHint: true,
        title: "List Comments",
      },
    },
    async (params) => ({
      content: [
        {
          type: "text",
          text: await pipe(
            listComments(params),
            Effect.provide(layer),
            Effect.runPromise,
          ),
        },
      ],
    }),
  );

  server.registerTool(
    "show-ticket",
    {
      title: "Show Ticket",
      description: "Show a ticket",
      inputSchema: {
        ticket_id: z.number().int().min(1).describe("The ID of the ticket"),
      },
      annotations: {
        destructiveHint: false,
        readOnlyHint: true,
        title: "Show Ticket",
      },
    },
    async (params) => ({
      content: [
        {
          type: "text",
          text: await pipe(
            showTicket(params),
            Effect.provide(layer),
            Effect.runPromise,
          ),
        },
      ],
    }),
  );
});
