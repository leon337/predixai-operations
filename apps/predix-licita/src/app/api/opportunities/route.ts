import { z } from "zod";

import { searchOpenOpportunities } from "@/lib/pncp/client";

const searchSchema = z.object({
  query: z.string().max(120).default("software"),
  uf: z
    .string()
    .trim()
    .toUpperCase()
    .refine((value) => value === "" || /^[A-Z]{2}$/.test(value), "UF inválida")
    .default(""),
  limit: z.coerce.number().int().min(1).max(20).default(12),
});

export async function GET(request: Request) {
  const url = new URL(request.url);
  const parsed = searchSchema.safeParse({
    query: url.searchParams.get("q") ?? "software",
    uf: url.searchParams.get("uf") ?? "",
    limit: url.searchParams.get("limit") ?? "12",
  });

  if (!parsed.success) {
    return Response.json(
      { error: parsed.error.issues[0]?.message ?? "Busca inválida." },
      { status: 400 },
    );
  }

  try {
    const result = await searchOpenOpportunities(parsed.data);
    return Response.json(result);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Falha ao consultar o PNCP.";
    return Response.json({ error: message }, { status: 502 });
  }
}
