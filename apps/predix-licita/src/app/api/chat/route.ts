import { createAgentUIStreamResponse } from "ai";
import { z } from "zod";

import { predixAgent } from "@/lib/agent/predix-agent";

export const maxDuration = 60;

const requestSchema = z.object({
  messages: z.array(z.unknown()).min(1).max(60),
});

export async function POST(request: Request) {
  try {
    const body = requestSchema.parse(await request.json());
    return createAgentUIStreamResponse({
      agent: predixAgent,
      uiMessages: body.messages,
      abortSignal: request.signal,
    });
  } catch (error) {
    const message =
      error instanceof z.ZodError
        ? "Conversa inválida."
        : "Não foi possível iniciar a análise.";
    return Response.json({ error: message }, { status: 400 });
  }
}
