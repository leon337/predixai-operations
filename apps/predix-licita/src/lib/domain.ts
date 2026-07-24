export type Opportunity = {
  id: string;
  controlNumber: string;
  object: string;
  organization: string;
  city: string | null;
  uf: string | null;
  publishedAt: string | null;
  closesAt: string | null;
  estimatedValue: number | null;
  modality: string | null;
  sourceUrl: string;
  sourceName: "PNCP";
  collectedAt: string;
};

export type BusinessProfile = {
  capabilities: string[];
  preferredUfs: string[];
  maxContractValue: number | null;
  remoteDelivery: boolean;
  companySize: "mei" | "me" | "epp" | "other";
};

export type CompatibilityClass =
  | "aderente"
  | "regularizacao"
  | "parceria"
  | "nao_aderente";

export type CompatibilityAssessment = {
  score: number;
  classification: CompatibilityClass;
  blockers: string[];
  strengths: string[];
  unknowns: string[];
  evaluatedAt: string;
};

export const DEFAULT_PROFILE: BusinessProfile = {
  capabilities: [
    "desenvolvimento de software",
    "inteligência artificial",
    "automação",
    "dados",
    "sites",
    "aplicativos",
  ],
  preferredUfs: [],
  maxContractValue: 250_000,
  remoteDelivery: true,
  companySize: "me",
};
