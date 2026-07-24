import type { Opportunity } from "@/lib/domain";

const PNCP_API_BASE = "https://pncp.gov.br/api/consulta/v1";
const REQUEST_TIMEOUT_MS = 12_000;
const PAGE_SIZE = 50;

type PncpRecord = {
  numeroControlePNCP?: string;
  objetoCompra?: string;
  processo?: string;
  modalidadeNome?: string;
  dataPublicacaoPncp?: string;
  dataEncerramentoProposta?: string;
  valorTotalEstimado?: number;
  linkSistemaOrigem?: string;
  anoCompra?: number;
  sequencialCompra?: number;
  orgaoEntidade?: {
    cnpj?: string;
    razaoSocial?: string;
  };
  unidadeOrgao?: {
    municipioNome?: string;
    ufSigla?: string;
  };
};

type PncpResponse = {
  data?: PncpRecord[];
  totalRegistros?: number;
  totalPaginas?: number;
  numeroPagina?: number;
};

export type OpportunitySearch = {
  query?: string;
  uf?: string;
  limit?: number;
  closingThrough?: string;
};

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("pt-BR");

const formatPncpDate = (date: Date) => {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}${month}${day}`;
};

const officialOpportunityUrl = (record: PncpRecord) => {
  const cnpj = record.orgaoEntidade?.cnpj?.replace(/\D/g, "");
  if (cnpj && record.anoCompra && record.sequencialCompra) {
    return `https://pncp.gov.br/app/editais/${cnpj}/${record.anoCompra}/${record.sequencialCompra}`;
  }
  return record.linkSistemaOrigem ?? "https://pncp.gov.br/app/editais";
};

export const normalizePncpRecord = (
  record: PncpRecord,
  collectedAt = new Date().toISOString(),
): Opportunity => ({
  id:
    record.numeroControlePNCP ??
    `${record.orgaoEntidade?.cnpj ?? "sem-cnpj"}-${record.anoCompra ?? "sem-ano"}-${record.sequencialCompra ?? "sem-sequencial"}`,
  controlNumber: record.numeroControlePNCP ?? "Não informado",
  object: record.objetoCompra?.trim() || "Objeto não informado",
  organization: record.orgaoEntidade?.razaoSocial?.trim() || "Órgão não informado",
  city: record.unidadeOrgao?.municipioNome?.trim() || null,
  uf: record.unidadeOrgao?.ufSigla?.trim().toUpperCase() || null,
  publishedAt: record.dataPublicacaoPncp ?? null,
  closesAt: record.dataEncerramentoProposta ?? null,
  estimatedValue:
    typeof record.valorTotalEstimado === "number"
      ? record.valorTotalEstimado
      : null,
  modality: record.modalidadeNome?.trim() || null,
  sourceUrl: officialOpportunityUrl(record),
  sourceName: "PNCP",
  collectedAt,
});

const getClosingDate = (value?: string) => {
  if (!value) {
    const date = new Date();
    date.setUTCDate(date.getUTCDate() + 30);
    return formatPncpDate(date);
  }

  const date = new Date(`${value}T23:59:59Z`);
  if (Number.isNaN(date.getTime())) {
    throw new Error("Data final inválida.");
  }
  return formatPncpDate(date);
};

export async function searchOpenOpportunities({
  query = "",
  uf = "",
  limit = 12,
  closingThrough,
}: OpportunitySearch): Promise<{
  opportunities: Opportunity[];
  total: number;
  collectedAt: string;
}> {
  const safeLimit = Math.min(Math.max(limit, 1), PAGE_SIZE);
  const params = new URLSearchParams({
    dataFinal: getClosingDate(closingThrough),
    pagina: "1",
    tamanhoPagina: String(PAGE_SIZE),
  });
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(
      `${PNCP_API_BASE}/contratacoes/proposta?${params.toString()}`,
      {
        headers: { Accept: "application/json" },
        signal: controller.signal,
        next: { revalidate: 900 },
      },
    );

    if (!response.ok) {
      throw new Error(`PNCP respondeu com status ${response.status}.`);
    }

    const body = (await response.json()) as PncpResponse;
    const collectedAt = new Date().toISOString();
    const terms = normalizeText(query)
      .split(/\s+/)
      .filter((term) => term.length >= 2);
    const normalizedUf = uf.trim().toUpperCase();

    const opportunities = (body.data ?? [])
      .map((record) => normalizePncpRecord(record, collectedAt))
      .filter((opportunity) => {
        const searchable = normalizeText(
          `${opportunity.object} ${opportunity.organization} ${opportunity.modality ?? ""}`,
        );
        const matchesQuery =
          terms.length === 0 || terms.every((term) => searchable.includes(term));
        const matchesUf = !normalizedUf || opportunity.uf === normalizedUf;
        return matchesQuery && matchesUf;
      })
      .slice(0, safeLimit);

    return {
      opportunities,
      total: body.totalRegistros ?? opportunities.length,
      collectedAt,
    };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("O PNCP demorou demais para responder. Tente novamente.");
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}
