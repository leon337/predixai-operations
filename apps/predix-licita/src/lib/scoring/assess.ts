import type {
  BusinessProfile,
  CompatibilityAssessment,
  Opportunity,
} from "@/lib/domain";

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("pt-BR");

const daysUntil = (isoDate: string | null, now: Date) => {
  if (!isoDate) return null;
  const closeDate = new Date(isoDate);
  if (Number.isNaN(closeDate.getTime())) return null;
  return Math.ceil((closeDate.getTime() - now.getTime()) / 86_400_000);
};

export function assessOpportunity(
  opportunity: Opportunity,
  profile: BusinessProfile,
  now = new Date(),
): CompatibilityAssessment {
  const strengths: string[] = [];
  const blockers: string[] = [];
  const unknowns: string[] = [
    "Habilitação jurídica, fiscal e trabalhista: não localizada no resumo do PNCP.",
    "Qualificação técnica detalhada: não localizada no resumo do PNCP.",
  ];
  let score = 10;

  const object = normalizeText(opportunity.object);
  const matchedCapabilities = profile.capabilities.filter((capability) =>
    object.includes(normalizeText(capability)),
  );
  if (matchedCapabilities.length > 0) {
    score += Math.min(35, 15 + matchedCapabilities.length * 5);
    strengths.push(
      `Objeto relacionado a: ${matchedCapabilities.slice(0, 3).join(", ")}.`,
    );
  } else {
    unknowns.push(
      "Não houve correspondência literal com as capacidades cadastradas; o edital precisa ser lido.",
    );
  }

  const locationMatches =
    profile.preferredUfs.length === 0 ||
    !opportunity.uf ||
    profile.preferredUfs.includes(opportunity.uf);
  if (profile.remoteDelivery || locationMatches) {
    score += 15;
    strengths.push(
      profile.remoteDelivery
        ? "Perfil admite entrega remota."
        : `Localidade ${opportunity.uf} está entre as regiões atendidas.`,
    );
  } else {
    blockers.push(
      `Localidade ${opportunity.uf ?? "não informada"} fora das regiões cadastradas.`,
    );
  }

  if (
    opportunity.estimatedValue !== null &&
    profile.maxContractValue !== null
  ) {
    if (opportunity.estimatedValue <= profile.maxContractValue) {
      score += 20;
      strengths.push("Valor estimado dentro da capacidade financeira cadastrada.");
    } else {
      blockers.push(
        "Valor estimado acima do limite operacional cadastrado; avaliar parceria ou capacidade adicional.",
      );
    }
  } else {
    unknowns.push(
      "Compatibilidade financeira não calculada por falta de valor ou limite cadastrado.",
    );
  }

  const remainingDays = daysUntil(opportunity.closesAt, now);
  if (remainingDays === null) {
    unknowns.push("Prazo final não localizado.");
  } else if (remainingDays < 0) {
    blockers.push("Prazo de proposta encerrado.");
  } else if (remainingDays < 4) {
    score += 5;
    blockers.push(`Prazo curto: ${remainingDays} dia(s) restante(s).`);
  } else {
    score += 15;
    strengths.push(`Prazo operacional de ${remainingDays} dia(s).`);
  }

  if (["mei", "me", "epp"].includes(profile.companySize)) {
    score += 5;
    unknowns.push(
      "Benefício para ME/EPP deve ser confirmado no edital; não inferido pelo porte.",
    );
  }

  score = Math.max(0, Math.min(100, score - blockers.length * 10));
  const classification =
    score >= 70 && blockers.length === 0
      ? "aderente"
      : score >= 50
        ? "regularizacao"
        : score >= 30
          ? "parceria"
          : "nao_aderente";

  return {
    score,
    classification,
    blockers,
    strengths,
    unknowns,
    evaluatedAt: now.toISOString(),
  };
}
