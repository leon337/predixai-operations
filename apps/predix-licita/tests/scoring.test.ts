import { describe, expect, it } from "vitest";

import { DEFAULT_PROFILE, type Opportunity } from "@/lib/domain";
import { assessOpportunity } from "@/lib/scoring/assess";

const opportunity: Opportunity = {
  id: "1",
  controlNumber: "1-1-2026",
  object: "Contratação de desenvolvimento de software e automação",
  organization: "Órgão Teste",
  city: "Recife",
  uf: "PE",
  publishedAt: "2026-07-20T10:00:00Z",
  closesAt: "2026-08-10T18:00:00Z",
  estimatedValue: 120_000,
  modality: "Pregão eletrônico",
  sourceUrl: "https://pncp.gov.br/app/editais",
  sourceName: "PNCP",
  collectedAt: "2026-07-23T12:00:00Z",
};

describe("assessOpportunity", () => {
  it("classifica uma oportunidade aderente sem prometer resultado", () => {
    const result = assessOpportunity(
      opportunity,
      DEFAULT_PROFILE,
      new Date("2026-07-23T12:00:00Z"),
    );

    expect(result.classification).toBe("aderente");
    expect(result.score).toBeGreaterThanOrEqual(70);
    expect(result.blockers).toEqual([]);
    expect(result.unknowns).toContain(
      "Habilitação jurídica, fiscal e trabalhista: não localizada no resumo do PNCP.",
    );
  });

  it("marca prazo encerrado como bloqueador", () => {
    const result = assessOpportunity(
      { ...opportunity, closesAt: "2026-07-01T18:00:00Z" },
      DEFAULT_PROFILE,
      new Date("2026-07-23T12:00:00Z"),
    );

    expect(result.blockers).toContain("Prazo de proposta encerrado.");
    expect(result.classification).not.toBe("aderente");
  });
});
