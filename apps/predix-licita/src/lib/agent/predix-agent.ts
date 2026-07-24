import {
  stepCountIs,
  ToolLoopAgent,
  tool,
  type InferAgentUIMessage,
} from "ai";
import { z } from "zod";

import { DEFAULT_PROFILE, type Opportunity } from "@/lib/domain";
import { searchOpenOpportunities } from "@/lib/pncp/client";
import { assessOpportunity } from "@/lib/scoring/assess";

import { AGENT_INSTRUCTIONS } from "./prompt";

const opportunitySchema = z.object({
  id: z.string(),
  controlNumber: z.string(),
  object: z.string(),
  organization: z.string(),
  city: z.string().nullable(),
  uf: z.string().nullable(),
  publishedAt: z.string().nullable(),
  closesAt: z.string().nullable(),
  estimatedValue: z.number().nullable(),
  modality: z.string().nullable(),
  sourceUrl: z.string().url(),
  sourceName: z.literal("PNCP"),
  collectedAt: z.string(),
});

export const predixAgent = new ToolLoopAgent({
  id: "predix-licita-grok",
  model: "xai/grok-4.5",
  instructions: AGENT_INSTRUCTIONS,
  stopWhen: stepCountIs(5),
  temperature: 0.2,
  tools: {
    buscarOportunidadesPncp: tool({
      description:
        "Busca oportunidades com propostas abertas na API oficial do PNCP. Use termos curtos e objetivos.",
      inputSchema: z.object({
        query: z
          .string()
          .max(120)
          .describe("Termos do objeto, como software, dados ou automação."),
        uf: z
          .string()
          .length(2)
          .optional()
          .describe("UF opcional em duas letras."),
        limit: z.number().int().min(1).max(12).default(6),
      }),
      execute: async ({ query, uf, limit }) =>
        searchOpenOpportunities({ query, uf, limit }),
    }),
    avaliarAderencia: tool({
      description:
        "Aplica regras determinísticas de aderência a uma oportunidade já localizada. O resultado não é probabilidade de vitória.",
      inputSchema: z.object({
        opportunity: opportunitySchema,
      }),
      execute: async ({ opportunity }) =>
        assessOpportunity(opportunity as Opportunity, DEFAULT_PROFILE),
    }),
  },
});

export type PredixAgentMessage = InferAgentUIMessage<typeof predixAgent>;
