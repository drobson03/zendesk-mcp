import { Context, Effect, Layer, Schema } from "effect";
import { McpSchema, McpServer } from "effect/unstable/ai";
import { ZendeskClient } from "./ZendeskClient.js";

export const showTicket = Effect.fn("tickets.showTicket")(function* ({
  ticket_id,
}: {
  ticket_id: number;
}) {
  const client = yield* ZendeskClient;

  const response = yield* client.ShowTicket(ticket_id.toString(10), undefined);

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

  const response = yield* client.ListTicketComments(
    ticket_id.toString(10),
    undefined,
  );

  const comments = response.comments ?? [];
  if (comments.length === 0) {
    return "*No comments found*";
  }

  return `Here are the comments for the ticket ${ticket_id}:\n\n${comments
    .map((comment) => {
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
    .join("\n\n---\n\n")}`;
});

const parameters = Schema.Struct({
  ticket_id: Schema.Int.check(Schema.isGreaterThanOrEqualTo(1)).annotate({
    description: "The ID of the ticket",
  }),
});

// Register directly to preserve plain-text MCP results. In rc.117 the Toolkit
// adapter JSON-encodes string results (including quotes and escaped newlines).
export const layer = Layer.effectDiscard(
  Effect.gen(function* () {
    const server = yield* McpServer.McpServer;
    const client = yield* ZendeskClient;
    const inputSchema = Schema.toJsonSchemaDocument(parameters).schema;
    const decode = Schema.decodeUnknownEffect(parameters);

    for (const definition of [
      {
        name: "list-comments",
        title: "List Comments",
        description:
          "List the comments/updates/notes for a ticket, including internal notes. This is useful for understanding the history of a ticket.",
        handler: listComments,
        errorMessage: "Unable to list ticket comments from Zendesk.",
      },
      {
        name: "show-ticket",
        title: "Show Ticket",
        description: "Show a ticket",
        handler: showTicket,
        errorMessage: "Unable to retrieve the ticket from Zendesk.",
      },
    ]) {
      yield* server.addTool({
        tool: new McpSchema.Tool({
          name: definition.name,
          title: definition.title,
          description: definition.description,
          inputSchema,
          annotations: {
            title: definition.title,
            readOnlyHint: true,
            destructiveHint: false,
          },
        }),
        annotations: Context.empty(),
        handle: (payload) =>
          decode(payload).pipe(
            Effect.mapError(
              (error) =>
                new McpSchema.InvalidParams({ message: error.message }),
            ),
            Effect.flatMap((params) =>
              definition.handler(params).pipe(
                Effect.provideService(ZendeskClient, client),
                Effect.map(
                  (text) =>
                    new McpSchema.CallToolResult({
                      content: [{ type: "text", text }],
                    }),
                ),
                Effect.catch(() =>
                  Effect.succeed(
                    new McpSchema.CallToolResult({
                      isError: true,
                      content: [
                        { type: "text", text: definition.errorMessage },
                      ],
                    }),
                  ),
                ),
              ),
            ),
          ),
      });
    }
  }),
).pipe(Layer.provide(McpServer.McpServer.layer));
