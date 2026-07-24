import { describe, expect, it } from "vitest";

import { normalizePncpRecord } from "@/lib/pncp/client";

describe("normalizePncpRecord", () => {
  it("normaliza registro e cria URL oficial do PNCP", () => {
    const result = normalizePncpRecord(
      {
        numeroControlePNCP: "12345678000199-1-000001/2026",
        objetoCompra: "Serviços de software",
        anoCompra: 2026,
        sequencialCompra: 1,
        orgaoEntidade: {
          cnpj: "12.345.678/0001-99",
          razaoSocial: "Órgão Teste",
        },
        unidadeOrgao: { municipioNome: "Recife", ufSigla: "pe" },
      },
      "2026-07-23T12:00:00Z",
    );

    expect(result.uf).toBe("PE");
    expect(result.sourceUrl).toBe(
      "https://pncp.gov.br/app/editais/12345678000199/2026/1",
    );
    expect(result.sourceName).toBe("PNCP");
  });
});
