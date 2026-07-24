"use client";

import { useState } from "react";
import {
  Bookmark,
  Building2,
  CalendarClock,
  ExternalLink,
  MapPin,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { Opportunity } from "@/lib/domain";

const formatCurrency = (value: number | null) =>
  value === null
    ? "Valor não informado"
    : new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 0,
      }).format(value);

const formatDate = (value: string | null) => {
  if (!value) return "Prazo não informado";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Prazo não informado";
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
};

export function OpportunityCard({
  opportunity,
}: {
  opportunity: Opportunity;
}) {
  const [saveStatus, setSaveStatus] = useState<
    "idle" | "saving" | "saved" | "error"
  >("idle");

  const save = async () => {
    setSaveStatus("saving");
    const response = await fetch("/api/saved", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pncpControlNumber: opportunity.controlNumber,
        sourceUrl: opportunity.sourceUrl,
        object: opportunity.object,
        organization: opportunity.organization,
        snapshot: opportunity,
      }),
    });
    setSaveStatus(response.ok ? "saved" : "error");
  };

  return (
    <Card className="group flex h-full flex-col border-white/10 bg-card/65 transition hover:-translate-y-0.5 hover:border-cyan-300/25">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <Badge className="border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
            {opportunity.modality ?? "Modalidade não informada"}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {opportunity.controlNumber}
          </span>
        </div>
        <h3 className="line-clamp-3 text-base font-semibold leading-6">
          {opportunity.object}
        </h3>
      </CardHeader>
      <CardContent className="flex-1 space-y-3 text-sm text-muted-foreground">
        <p className="flex items-start gap-2">
          <Building2 className="mt-0.5 size-4 shrink-0 text-cyan-300" />
          {opportunity.organization}
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="size-4 shrink-0 text-cyan-300" />
          {[opportunity.city, opportunity.uf].filter(Boolean).join(" · ") ||
            "Local não informado"}
        </p>
        <p className="flex items-center gap-2">
          <CalendarClock className="size-4 shrink-0 text-cyan-300" />
          Encerra em {formatDate(opportunity.closesAt)}
        </p>
        <p className="font-medium text-foreground">
          {formatCurrency(opportunity.estimatedValue)}
        </p>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-2">
        <Button
          disabled={saveStatus === "saving" || saveStatus === "saved"}
          onClick={save}
          size="sm"
          type="button"
          variant="outline"
        >
          <Bookmark className="size-4" />
          {saveStatus === "saved"
            ? "Salva"
            : saveStatus === "error"
              ? "Entrar para salvar"
              : saveStatus === "saving"
                ? "Salvando"
                : "Salvar"}
        </Button>
        <Button asChild size="sm">
          <a href={opportunity.sourceUrl} rel="noreferrer" target="_blank">
            PNCP
            <ExternalLink className="size-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
