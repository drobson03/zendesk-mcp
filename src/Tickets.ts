import { AiTool, AiToolkit, McpServer } from "@effect/ai";
import { NodeHttpClient, NodePath } from "@effect/platform-node";
import { Effect, Layer, pipe, Schema } from "effect";
import * as Generated from "./Generated.js";
import { ZendeskClient } from "./ZendeskClient.js";

const toolkit = AiToolkit.make(
  AiTool.make("show_ticket", {
    description: "Show ticket from Zendesk",
    parameters: {
      ticket_id: Schema.Int.annotations({
        description: "The ID of the ticket",
      }),
    },
    success: Generated.TicketResponse,
  })
    .annotate(AiTool.Readonly, true)
    .annotate(AiTool.Destructive, false),

  AiTool.make("list_comments", {
    description:
      "List the comments/updates/notes for a ticket, including internal notes. This is useful for understanding the history of a ticket.",
    parameters: {
      ticket_id: Schema.Int.annotations({
        description: "The ID of the ticket",
      }),
    },
    success: Schema.String.annotations({
      description:
        "Comments formatted as markdown with visibility indicators. This is useful for understanding the history of a ticket.",
    }),
  })
    .annotate(AiTool.Readonly, true)
    .annotate(AiTool.Destructive, false),
);

const ToolkitLayer = pipe(
  toolkit.toLayer(
    Effect.gen(function* () {
      const client = yield* ZendeskClient;

      return toolkit.of({
        show_ticket: Effect.fn(function* (params) {
          return yield* client.ShowTicket(params.ticket_id.toString(10));
        }),
        list_comments: Effect.fn(function* (params) {
          const response = yield* client.ListTicketComments(
            params.ticket_id.toString(10),
          );

          return (
            `Here are the comments for the ticket ${params.ticket_id}:\n\n` +
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
        }),
      });
    }),
  ),
  Layer.provide([NodeHttpClient.layerUndici, NodePath.layerPosix]),
);

export const TicketsTools = McpServer.toolkit(toolkit).pipe(
  Layer.provide(ToolkitLayer),
);
