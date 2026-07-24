"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Activity,
  Bell,
  Building,
  Database,
  Filter,
  Radar,
  Search,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

import { AgentPanel } from "@/components/agent-panel";
import { OpportunityCard } from "@/components/opportunity-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Opportunity } from "@/lib/domain";

type SearchState = {
  opportunities: Opportunity[];
  total: number;
  collectedAt: string | null;
};

const EMPTY_SEARCH: SearchState = {
  opportunities: [],
  total: 0,
  collectedAt: null,
};

export function RadarDashboard() {
  const [query, setQuery] = useState("software inteligência artificial");
  const [uf, setUf] = useState("");
  const [results, setResults] = useState<SearchState>(EMPTY_SEARCH);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const search = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearching(true);
    setSearchError(null);
    const params = new URLSearchParams({ q: query, uf, limit: "12" });

    try {
      const response = await fetch(`/api/opportunities?${params.toString()}`);
      const body = (await response.json()) as SearchState & { error?: string };
      if (!response.ok) throw new Error(body.error ?? "Busca indisponível.");
      setResults(body);
    } catch (error) {
      setResults(EMPTY_SEARCH);
      setSearchError(
        error instanceof Error ? error.message : "Falha ao consultar o PNCP.",
      );
    } finally {
      setSearching(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-xl bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/15">
              <Radar className="size-5" />
            </div>
            <div>
              <p className="font-semibold tracking-tight">Predix Licita</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300">
                Inteligência pública
              </p>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <Badge className="hidden border-white/10 bg-white/5 text-muted-foreground sm:flex">
              <Database className="mr-1 size-3" />
              PNCP oficial
            </Badge>
            <Button asChild size="sm" variant="outline">
              <Link href="/auth">
                <Building className="size-4" />
                Entrar
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-[1500px] px-4 py-8 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_32%),radial-gradient(circle_at_90%_15%,rgba(167,139,250,0.12),transparent_25%)] px-6 py-10 lg:px-10">
          <div className="relative max-w-3xl">
            <Badge className="mb-4 border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
              <Activity className="mr-1 size-3" />
              Radar nacional de oportunidades
            </Badge>
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              Do dado público à decisão{" "}
              <span className="text-cyan-300">explicável.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-pretty leading-7 text-muted-foreground">
              Encontre contratações abertas, filtre o ruído e entenda aderência,
              bloqueadores e próximos passos com evidências do PNCP.
            </p>
          </div>

          <form
            className="relative mt-8 grid gap-3 rounded-2xl border border-white/10 bg-background/75 p-3 shadow-2xl shadow-black/20 backdrop-blur md:grid-cols-[1fr_110px_auto]"
            onSubmit={search}
          >
            <label className="relative">
              <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
              <Input
                aria-label="Termos de busca"
                className="border-0 bg-transparent pl-9 shadow-none focus-visible:ring-0"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="software, dados, automação…"
                value={query}
              />
            </label>
            <label>
              <span className="sr-only">UF</span>
              <Input
                aria-label="UF"
                className="uppercase"
                maxLength={2}
                onChange={(event) =>
                  setUf(event.target.value.replace(/[^a-z]/gi, "").slice(0, 2))
                }
                placeholder="UF"
                value={uf}
              />
            </label>
            <Button disabled={searching} type="submit">
              <Filter className="size-4" />
              {searching ? "Consultando…" : "Buscar no PNCP"}
            </Button>
          </form>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Database,
              label: "Fonte",
              value: "PNCP",
              helper: "consulta pública oficial",
            },
            {
              icon: ShieldCheck,
              label: "Método",
              value: "Auditável",
              helper: "fonte, inferência e lacuna",
            },
            {
              icon: Bell,
              label: "Monitoramento",
              value: "15 min",
              helper: "janela de atualização do radar",
            },
          ].map((item) => (
            <div
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-card/45 p-4"
              key={item.label}
            >
              <div className="grid size-10 place-items-center rounded-xl bg-white/5 text-cyan-300">
                <item.icon className="size-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
                <p className="text-[11px] text-muted-foreground">
                  {item.helper}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-8 grid items-start gap-8 xl:grid-cols-[minmax(0,1.25fr)_minmax(420px,.75fr)]">
          <div>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                  Oportunidades abertas
                </p>
                <h2 className="mt-1 text-2xl font-semibold">
                  Radar de contratações
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <SlidersHorizontal className="size-4" />
                {results.collectedAt
                  ? `${results.opportunities.length} exibida(s)`
                  : "Faça a primeira busca"}
              </div>
            </div>

            {searchError && (
              <p className="mb-4 rounded-xl border border-red-300/20 bg-red-300/5 p-4 text-sm text-red-200">
                {searchError}
              </p>
            )}

            {results.opportunities.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {results.opportunities.map((opportunity) => (
                  <OpportunityCard
                    key={opportunity.id}
                    opportunity={opportunity}
                  />
                ))}
              </div>
            ) : (
              <div className="grid min-h-72 place-items-center rounded-2xl border border-dashed border-white/10 bg-card/25 p-8 text-center">
                <div className="max-w-sm">
                  <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <Search className="size-6" />
                  </div>
                  <h3 className="mt-4 font-semibold">
                    O radar está pronto para consultar
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Use termos específicos. O PNCP pode retornar zero itens
                    quando todos os termos precisam estar no objeto.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="xl:sticky xl:top-24">
            <AgentPanel />
          </div>
        </section>
      </div>
    </main>
  );
}
