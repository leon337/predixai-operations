import { z } from "zod";

import { createSupabaseServerClient } from "@/lib/supabase/server";

const savedSchema = z.object({
  pncpControlNumber: z.string().min(1).max(180),
  sourceUrl: z.string().url(),
  object: z.string().min(1).max(8_000),
  organization: z.string().min(1).max(500),
  snapshot: z.record(z.string(), z.unknown()),
});

export async function POST(request: Request) {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return Response.json(
      { error: "Supabase ainda não configurado neste ambiente." },
      { status: 503 },
    );
  }

  const { data: claimsData, error: claimsError } =
    await supabase.auth.getClaims();
  const userId = claimsData?.claims?.sub;
  if (claimsError || !userId) {
    return Response.json({ error: "Faça login para salvar." }, { status: 401 });
  }

  const parsed = savedSchema.safeParse(await request.json());
  if (!parsed.success) {
    return Response.json({ error: "Oportunidade inválida." }, { status: 400 });
  }

  const { error } = await supabase.from("saved_opportunities").upsert(
    {
      user_id: userId,
      pncp_control_number: parsed.data.pncpControlNumber,
      source_url: parsed.data.sourceUrl,
      object: parsed.data.object,
      organization: parsed.data.organization,
      snapshot: parsed.data.snapshot,
    },
    { onConflict: "user_id,pncp_control_number" },
  );

  if (error) {
    return Response.json(
      { error: "Não foi possível salvar a oportunidade." },
      { status: 500 },
    );
  }
  return Response.json({ saved: true }, { status: 201 });
}
