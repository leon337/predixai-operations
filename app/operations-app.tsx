"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/+$/, "") ?? "";
const SUPABASE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "";
const SESSION_KEY = "predixai-operations-session-v1";

type Session = {
  access_token: string;
  refresh_token: string;
  expires_in?: number;
  user?: { id?: string; email?: string };
};

type StockItem = {
  id: string;
  code: string | null;
  name: string;
  category: string | null;
  min_qty: number | string | null;
  unit: string | null;
  location: string | null;
  created_at: string;
  updated_at: string;
  current_qty: number | string;
  movement_count: number | string;
};

type Sector = { id: string; name: string };

type Movement = {
  id: string;
  date: string;
  type: "entrada" | "saída";
  qty_decimal: number | string;
  unit_cost_decimal: number | string | null;
  reason: string | null;
  created_at: string;
  inventory_items: { name: string; code: string | null; unit: string | null } | null;
  sectors: { name: string } | null;
};

type Tab = "estoque" | "movimentar" | "materiais" | "historico";
type AuthMode = "entrar" | "criar";

type ItemForm = {
  id?: string;
  code: string;
  name: string;
  category: string;
  min_qty: string;
  unit: string;
  location: string;
};

type MoveForm = {
  item_id: string;
  type: "entrada" | "saída";
  qty: string;
  unit_cost: string;
  reason: string;
  sector_id: string;
};

const emptyItemForm: ItemForm = {
  code: "",
  name: "",
  category: "",
  min_qty: "0",
  unit: "un",
  location: "",
};

const emptyMoveForm: MoveForm = {
  item_id: "",
  type: "entrada",
  qty: "",
  unit_cost: "",
  reason: "",
  sector_id: "",
};

function numeric(value: number | string | null | undefined): number {
  const result = Number(value ?? 0);
  return Number.isFinite(result) ? result : 0;
}

function formatQuantity(value: number | string, unit?: string | null): string {
  const amount = numeric(value).toLocaleString("pt-BR", { maximumFractionDigits: 3 });
  return unit ? `${amount} ${unit}` : amount;
}

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(value));
}

function parseResponseBody(text: string): unknown {
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function errorMessage(body: unknown, fallback: string): string {
  if (typeof body === "string" && body.trim()) return body;
  if (body && typeof body === "object") {
    const candidate = body as Record<string, unknown>;
    for (const key of ["message", "error_description", "msg", "hint", "details", "error"]) {
      if (typeof candidate[key] === "string" && candidate[key]) return candidate[key] as string;
    }
  }
  return fallback;
}

function assertSupabaseConfiguration(): void {
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    throw new Error(
      "Configuração Supabase ausente. Defina NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY no ambiente.",
    );
  }
}

async function supabaseRequest<T>(
  path: string,
  options: RequestInit = {},
  token?: string,
): Promise<T> {
  assertSupabaseConfiguration();

  const headers = new Headers(options.headers);
  headers.set("apikey", SUPABASE_PUBLISHABLE_KEY);
  if (token) headers.set("Authorization", `Bearer ${token}`);
  else headers.delete("Authorization");
  if (options.body && !headers.has("Content-Type")) headers.set("Content-Type", "application/json");

  const response = await fetch(`${SUPABASE_URL}${path}`, { ...options, headers });
  const text = await response.text();
  const body = parseResponseBody(text);

  if (!response.ok) {
    throw new Error(errorMessage(body, `Falha na operação (${response.status}).`));
  }

  return body as T;
}

function saveSession(session: Session | null): void {
  if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  else localStorage.removeItem(SESSION_KEY);
}

function readSession(): Session | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as Session) : null;
  } catch {
    localStorage.removeItem(SESSION_KEY);
    return null;
  }
}

export default function OperationsApp() {
  const [session, setSession] = useState<Session | null>(null);
  const [booting, setBooting] = useState(true);
  const [authMode, setAuthMode] = useState<AuthMode>("entrar");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authBusy, setAuthBusy] = useState(false);
  const [tab, setTab] = useState<Tab>("estoque");
  const [items, setItems] = useState<StockItem[]>([]);
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [movements, setMovements] = useState<Movement[]>([]);
  const [search, setSearch] = useState("");
  const [itemForm, setItemForm] = useState<ItemForm>(emptyItemForm);
  const [moveForm, setMoveForm] = useState<MoveForm>(emptyMoveForm);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<{ type: "success" | "error" | "info"; text: string } | null>(null);

  const token = session?.access_token;

  const filteredItems = useMemo(() => {
    const term = search.trim().toLocaleLowerCase("pt-BR");
    if (!term) return items;
    return items.filter((item) =>
      [item.name, item.code, item.category, item.location]
        .filter(Boolean)
        .some((value) => String(value).toLocaleLowerCase("pt-BR").includes(term)),
    );
  }, [items, search]);

  const selectedMoveItem = useMemo(
    () => items.find((item) => item.id === moveForm.item_id) ?? null,
    [items, moveForm.item_id],
  );

  const lowStockCount = useMemo(
    () => items.filter((item) => numeric(item.current_qty) <= numeric(item.min_qty)).length,
    [items],
  );

  const zeroStockCount = useMemo(
    () => items.filter((item) => numeric(item.current_qty) === 0).length,
    [items],
  );

  useEffect(() => {
    let active = true;

    async function bootstrap() {
      const stored = readSession();
      if (!stored?.access_token) {
        if (active) setBooting(false);
        return;
      }

      try {
        const user = await supabaseRequest<{ id?: string; email?: string }>(
          "/auth/v1/user",
          {},
          stored.access_token,
        );
        const validSession = { ...stored, user };
        saveSession(validSession);
        if (active) setSession(validSession);
      } catch {
        try {
          const refreshed = await supabaseRequest<Session>(
            "/auth/v1/token?grant_type=refresh_token",
            {
              method: "POST",
              body: JSON.stringify({ refresh_token: stored.refresh_token }),
            },
          );
          saveSession(refreshed);
          if (active) setSession(refreshed);
        } catch {
          saveSession(null);
        }
      } finally {
        if (active) setBooting(false);
      }
    }

    void bootstrap();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (token) void loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  async function loadData(): Promise<void> {
    if (!token) return;
    setBusy(true);
    try {
      const [stockRows, sectorRows, moveRows] = await Promise.all([
        supabaseRequest<StockItem[]>(
          "/rest/v1/inventory_balances?select=*&order=name.asc",
          {},
          token,
        ),
        supabaseRequest<Sector[]>("/rest/v1/sectors?select=id,name&order=name.asc", {}, token),
        supabaseRequest<Movement[]>(
          "/rest/v1/inventory_moves?select=id,date,type,qty_decimal,unit_cost_decimal,reason,created_at,inventory_items(name,code,unit),sectors(name)&order=created_at.desc&limit=100",
          {},
          token,
        ),
      ]);
      setItems(stockRows);
      setSectors(sectorRows);
      setMovements(moveRows);
    } catch (error) {
      setNotice({ type: "error", text: error instanceof Error ? error.message : "Falha ao carregar dados." });
    } finally {
      setBusy(false);
    }
  }

  async function handleAuth(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setNotice(null);

    if (!authEmail.trim() || authPassword.length < 6) {
      setNotice({ type: "error", text: "Informe um e-mail válido e uma senha com pelo menos 6 caracteres." });
      return;
    }

    setAuthBusy(true);
    try {
      if (authMode === "criar") {
        const result = await supabaseRequest<Session & { user?: { email?: string } }>(
          "/auth/v1/signup",
          {
            method: "POST",
            body: JSON.stringify({ email: authEmail.trim(), password: authPassword }),
          },
        );

        if (result.access_token) {
          saveSession(result);
          setSession(result);
          setNotice({ type: "success", text: "Conta criada. Acesso liberado." });
        } else {
          setAuthMode("entrar");
          setNotice({
            type: "info",
            text: "Conta criada. Confirme o e-mail recebido e depois entre no sistema.",
          });
        }
      } else {
        const result = await supabaseRequest<Session>(
          "/auth/v1/token?grant_type=password",
          {
            method: "POST",
            body: JSON.stringify({ email: authEmail.trim(), password: authPassword }),
          },
        );
        saveSession(result);
        setSession(result);
        setNotice({ type: "success", text: "Acesso realizado com sucesso." });
      }
      setAuthPassword("");
    } catch (error) {
      setNotice({ type: "error", text: error instanceof Error ? error.message : "Falha na autenticação." });
    } finally {
      setAuthBusy(false);
    }
  }

  async function logout(): Promise<void> {
    try {
      if (token) await supabaseRequest("/auth/v1/logout", { method: "POST" }, token);
    } catch {
      // A sessão local deve ser encerrada mesmo se o servidor já a tiver invalidado.
    }
    saveSession(null);
    setSession(null);
    setItems([]);
    setMovements([]);
    setSectors([]);
    setTab("estoque");
    setNotice(null);
  }

  async function handleItemSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (!token) return;

    const minQty = Number(itemForm.min_qty || 0);
    if (!itemForm.name.trim() || minQty < 0) {
      setNotice({ type: "error", text: "Informe o nome do material e um estoque mínimo válido." });
      return;
    }

    setBusy(true);
    setNotice(null);
    const payload = {
      code: itemForm.code.trim() || null,
      name: itemForm.name.trim(),
      category: itemForm.category.trim() || null,
      min_qty: minQty,
      unit: itemForm.unit.trim() || "un",
      location: itemForm.location.trim() || null,
    };

    try {
      if (itemForm.id) {
        await supabaseRequest(
          `/rest/v1/inventory_items?id=eq.${encodeURIComponent(itemForm.id)}`,
          {
            method: "PATCH",
            headers: { Prefer: "return=representation" },
            body: JSON.stringify(payload),
          },
          token,
        );
        setNotice({ type: "success", text: "Material atualizado." });
      } else {
        await supabaseRequest(
          "/rest/v1/inventory_items",
          {
            method: "POST",
            headers: { Prefer: "return=representation" },
            body: JSON.stringify(payload),
          },
          token,
        );
        setNotice({ type: "success", text: "Material cadastrado." });
      }
      setItemForm(emptyItemForm);
      await loadData();
      setTab("estoque");
    } catch (error) {
      setNotice({ type: "error", text: error instanceof Error ? error.message : "Falha ao salvar material." });
    } finally {
      setBusy(false);
    }
  }

  function editItem(item: StockItem): void {
    setItemForm({
      id: item.id,
      code: item.code ?? "",
      name: item.name,
      category: item.category ?? "",
      min_qty: String(numeric(item.min_qty)),
      unit: item.unit ?? "un",
      location: item.location ?? "",
    });
    setTab("materiais");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startMovement(item: StockItem, type: "entrada" | "saída"): void {
    setMoveForm({ ...emptyMoveForm, item_id: item.id, type });
    setTab("movimentar");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleMoveSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (!token) return;

    const qty = Number(moveForm.qty);
    const unitCost = moveForm.unit_cost ? Number(moveForm.unit_cost.replace(",", ".")) : null;
    if (!moveForm.item_id || !Number.isFinite(qty) || qty <= 0) {
      setNotice({ type: "error", text: "Selecione um material e informe uma quantidade maior que zero." });
      return;
    }

    setBusy(true);
    setNotice(null);
    try {
      await supabaseRequest(
        "/rest/v1/rpc/register_inventory_move",
        {
          method: "POST",
          body: JSON.stringify({
            p_item_id: moveForm.item_id,
            p_type: moveForm.type,
            p_qty: qty,
            p_unit_cost: unitCost,
            p_reason: moveForm.reason.trim() || null,
            p_sector_id: moveForm.sector_id || null,
            p_employee_id: null,
            p_doc_url: null,
          }),
        },
        token,
      );
      setNotice({
        type: "success",
        text: moveForm.type === "entrada" ? "Entrada registrada." : "Saída registrada.",
      });
      setMoveForm(emptyMoveForm);
      await loadData();
      setTab("estoque");
    } catch (error) {
      setNotice({ type: "error", text: error instanceof Error ? error.message : "Falha ao registrar movimentação." });
    } finally {
      setBusy(false);
    }
  }

  if (booting) {
    return (
      <main className="centerScreen">
        <div className="spinner" aria-label="Carregando" />
        <p>Validando acesso…</p>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="authShell">
        <section className="authBrand">
          <p className="eyebrow">PredixAI Operations</p>
          <h1>Almoxarifado Inteligente</h1>
          <p>
            Controle materiais, entradas, saídas, saldo e estoque mínimo em uma aplicação online.
          </p>
          <div className="featureList">
            <span>✓ Movimentações auditáveis</span>
            <span>✓ Bloqueio de saldo negativo</span>
            <span>✓ Uso no celular e computador</span>
          </div>
        </section>

        <section className="authCard" aria-labelledby="auth-title">
          <div className="segmented" role="tablist" aria-label="Modo de autenticação">
            <button
              type="button"
              className={authMode === "entrar" ? "active" : ""}
              onClick={() => setAuthMode("entrar")}
            >
              Entrar
            </button>
            <button
              type="button"
              className={authMode === "criar" ? "active" : ""}
              onClick={() => setAuthMode("criar")}
            >
              Criar conta
            </button>
          </div>
          <h2 id="auth-title">{authMode === "entrar" ? "Acessar o sistema" : "Primeiro acesso"}</h2>
          <p className="muted">
            {authMode === "entrar"
              ? "Use o e-mail e a senha cadastrados."
              : "Cadastre o responsável que utilizará o almoxarifado."}
          </p>

          {notice && <div className={`notice ${notice.type}`}>{notice.text}</div>}

          <form className="stackForm" onSubmit={handleAuth}>
            <label>
              E-mail
              <input
                type="email"
                value={authEmail}
                onChange={(event) => setAuthEmail(event.target.value)}
                autoComplete="email"
                required
              />
            </label>
            <label>
              Senha
              <input
                type="password"
                value={authPassword}
                onChange={(event) => setAuthPassword(event.target.value)}
                autoComplete={authMode === "entrar" ? "current-password" : "new-password"}
                minLength={6}
                required
              />
            </label>
            <button className="primaryButton" type="submit" disabled={authBusy}>
              {authBusy ? "Processando…" : authMode === "entrar" ? "Entrar" : "Criar conta"}
            </button>
          </form>
        </section>
      </main>
    );
  }

  return (
    <main className="appShell">
      <header className="topbar">
        <div>
          <p className="eyebrow">PredixAI Operations</p>
          <strong>Almoxarifado Inteligente</strong>
        </div>
        <div className="userArea">
          <span>{session.user?.email ?? authEmail}</span>
          <button type="button" className="ghostButton" onClick={() => void logout()}>
            Sair
          </button>
        </div>
      </header>

      <section className="dashboardHero">
        <div>
          <span className="badge">MVP online</span>
          <h1>Visão do estoque</h1>
          <p>Acompanhe os materiais e registre movimentações sem perder o histórico.</p>
        </div>
        <button type="button" className="primaryButton compact" onClick={() => setTab("movimentar")}>
          + Nova movimentação
        </button>
      </section>

      <section className="metricGrid" aria-label="Resumo do almoxarifado">
        <article className="metricCard">
          <span>Materiais</span>
          <strong>{items.length}</strong>
        </article>
        <article className="metricCard warning">
          <span>No mínimo ou abaixo</span>
          <strong>{lowStockCount}</strong>
        </article>
        <article className="metricCard danger">
          <span>Sem estoque</span>
          <strong>{zeroStockCount}</strong>
        </article>
        <article className="metricCard">
          <span>Movimentações</span>
          <strong>{movements.length}</strong>
        </article>
      </section>

      <nav className="tabNav" aria-label="Seções do sistema">
        {(
          [
            ["estoque", "Estoque"],
            ["movimentar", "Movimentar"],
            ["materiais", "Materiais"],
            ["historico", "Histórico"],
          ] as [Tab, string][]
        ).map(([value, label]) => (
          <button
            type="button"
            key={value}
            className={tab === value ? "active" : ""}
            onClick={() => setTab(value)}
          >
            {label}
          </button>
        ))}
      </nav>

      {notice && <div className={`notice appNotice ${notice.type}`}>{notice.text}</div>}

      {tab === "estoque" && (
        <section className="contentPanel">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Saldo atual</p>
              <h2>Materiais em estoque</h2>
            </div>
            <div className="toolbar">
              <input
                className="searchInput"
                type="search"
                placeholder="Buscar material, código ou local…"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <button type="button" className="ghostButton" onClick={() => void loadData()} disabled={busy}>
                Atualizar
              </button>
            </div>
          </div>

          {filteredItems.length === 0 ? (
            <div className="emptyState">
              <strong>Nenhum material encontrado.</strong>
              <p>Cadastre o primeiro material para começar o controle.</p>
              <button type="button" className="primaryButton compact" onClick={() => setTab("materiais")}>
                Cadastrar material
              </button>
            </div>
          ) : (
            <div className="stockGrid">
              {filteredItems.map((item) => {
                const balance = numeric(item.current_qty);
                const minimum = numeric(item.min_qty);
                const status = balance === 0 ? "danger" : balance <= minimum ? "warning" : "ok";
                return (
                  <article className="stockCard" key={item.id}>
                    <div className="stockCardTop">
                      <div>
                        <span className="itemCode">{item.code || "Sem código"}</span>
                        <h3>{item.name}</h3>
                        <p>{[item.category, item.location].filter(Boolean).join(" · ") || "Sem classificação"}</p>
                      </div>
                      <span className={`statusPill ${status}`}>
                        {status === "danger" ? "Sem estoque" : status === "warning" ? "Estoque baixo" : "Normal"}
                      </span>
                    </div>
                    <div className="balanceRow">
                      <div>
                        <span>Saldo</span>
                        <strong>{formatQuantity(item.current_qty, item.unit)}</strong>
                      </div>
                      <div>
                        <span>Mínimo</span>
                        <strong>{formatQuantity(item.min_qty ?? 0, item.unit)}</strong>
                      </div>
                    </div>
                    <div className="cardActions">
                      <button type="button" onClick={() => startMovement(item, "entrada")}>+ Entrada</button>
                      <button type="button" onClick={() => startMovement(item, "saída")}>− Saída</button>
                      <button type="button" onClick={() => editItem(item)}>Editar</button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      )}

      {tab === "movimentar" && (
        <section className="contentPanel formPanel">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Operação de estoque</p>
              <h2>Registrar movimentação</h2>
            </div>
          </div>

          <form className="formGrid" onSubmit={handleMoveSubmit}>
            <label className="spanTwo">
              Material
              <select
                value={moveForm.item_id}
                onChange={(event) => setMoveForm((current) => ({ ...current, item_id: event.target.value }))}
                required
              >
                <option value="">Selecione…</option>
                {items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.code ? `${item.code} — ` : ""}{item.name} ({formatQuantity(item.current_qty, item.unit)})
                  </option>
                ))}
              </select>
            </label>
            <label>
              Tipo
              <select
                value={moveForm.type}
                onChange={(event) =>
                  setMoveForm((current) => ({ ...current, type: event.target.value as "entrada" | "saída" }))
                }
              >
                <option value="entrada">Entrada</option>
                <option value="saída">Saída</option>
              </select>
            </label>
            <label>
              Quantidade
              <input
                type="number"
                min="0.001"
                step="0.001"
                value={moveForm.qty}
                onChange={(event) => setMoveForm((current) => ({ ...current, qty: event.target.value }))}
                required
              />
            </label>
            <label>
              Custo unitário (opcional)
              <input
                type="number"
                min="0"
                step="0.01"
                value={moveForm.unit_cost}
                onChange={(event) => setMoveForm((current) => ({ ...current, unit_cost: event.target.value }))}
              />
            </label>
            <label>
              Setor / destino
              <select
                value={moveForm.sector_id}
                onChange={(event) => setMoveForm((current) => ({ ...current, sector_id: event.target.value }))}
              >
                <option value="">Não informado</option>
                {sectors.map((sector) => (
                  <option key={sector.id} value={sector.id}>{sector.name}</option>
                ))}
              </select>
            </label>
            <label className="spanTwo">
              Motivo / observação
              <textarea
                rows={3}
                value={moveForm.reason}
                onChange={(event) => setMoveForm((current) => ({ ...current, reason: event.target.value }))}
                placeholder="Ex.: compra do fornecedor, retirada para obra, ajuste de inventário…"
              />
            </label>

            {selectedMoveItem && (
              <div className="balancePreview spanTwo">
                <span>Saldo disponível</span>
                <strong>{formatQuantity(selectedMoveItem.current_qty, selectedMoveItem.unit)}</strong>
                {moveForm.type === "saída" && numeric(moveForm.qty) > numeric(selectedMoveItem.current_qty) && (
                  <small>A quantidade informada ultrapassa o saldo e será recusada.</small>
                )}
              </div>
            )}

            <div className="formActions spanTwo">
              <button type="button" className="ghostButton" onClick={() => setMoveForm(emptyMoveForm)}>
                Limpar
              </button>
              <button type="submit" className="primaryButton" disabled={busy || items.length === 0}>
                {busy ? "Registrando…" : "Confirmar movimentação"}
              </button>
            </div>
          </form>
        </section>
      )}

      {tab === "materiais" && (
        <section className="contentPanel formPanel">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Cadastro mestre</p>
              <h2>{itemForm.id ? "Editar material" : "Novo material"}</h2>
            </div>
          </div>

          <form className="formGrid" onSubmit={handleItemSubmit}>
            <label>
              Código
              <input
                value={itemForm.code}
                onChange={(event) => setItemForm((current) => ({ ...current, code: event.target.value }))}
                placeholder="Ex.: MAT-001"
              />
            </label>
            <label>
              Nome do material
              <input
                value={itemForm.name}
                onChange={(event) => setItemForm((current) => ({ ...current, name: event.target.value }))}
                required
              />
            </label>
            <label>
              Categoria
              <input
                value={itemForm.category}
                onChange={(event) => setItemForm((current) => ({ ...current, category: event.target.value }))}
                placeholder="Ex.: Serralharia"
              />
            </label>
            <label>
              Unidade
              <input
                value={itemForm.unit}
                onChange={(event) => setItemForm((current) => ({ ...current, unit: event.target.value }))}
                placeholder="un, kg, m, caixa…"
                required
              />
            </label>
            <label>
              Estoque mínimo
              <input
                type="number"
                min="0"
                step="0.001"
                value={itemForm.min_qty}
                onChange={(event) => setItemForm((current) => ({ ...current, min_qty: event.target.value }))}
              />
            </label>
            <label>
              Localização
              <input
                value={itemForm.location}
                onChange={(event) => setItemForm((current) => ({ ...current, location: event.target.value }))}
                placeholder="Ex.: Prateleira A2"
              />
            </label>
            <div className="formActions spanTwo">
              {itemForm.id && (
                <button type="button" className="ghostButton" onClick={() => setItemForm(emptyItemForm)}>
                  Cancelar edição
                </button>
              )}
              <button type="submit" className="primaryButton" disabled={busy}>
                {busy ? "Salvando…" : itemForm.id ? "Salvar alterações" : "Cadastrar material"}
              </button>
            </div>
          </form>
        </section>
      )}

      {tab === "historico" && (
        <section className="contentPanel">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Rastreabilidade</p>
              <h2>Últimas movimentações</h2>
            </div>
            <button type="button" className="ghostButton" onClick={() => void loadData()} disabled={busy}>
              Atualizar
            </button>
          </div>

          {movements.length === 0 ? (
            <div className="emptyState">
              <strong>Nenhuma movimentação registrada.</strong>
              <p>As entradas e saídas aparecerão aqui.</p>
            </div>
          ) : (
            <div className="tableWrap">
              <table>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Tipo</th>
                    <th>Material</th>
                    <th>Quantidade</th>
                    <th>Setor</th>
                    <th>Motivo</th>
                  </tr>
                </thead>
                <tbody>
                  {movements.map((movement) => (
                    <tr key={movement.id}>
                      <td>{formatDate(movement.created_at)}</td>
                      <td><span className={`moveType ${movement.type}`}>{movement.type}</span></td>
                      <td>
                        <strong>{movement.inventory_items?.name ?? "Material removido"}</strong>
                        <small>{movement.inventory_items?.code ?? ""}</small>
                      </td>
                      <td>{formatQuantity(movement.qty_decimal, movement.inventory_items?.unit)}</td>
                      <td>{movement.sectors?.name ?? "—"}</td>
                      <td>{movement.reason ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      <footer className="appFooter">
        <span>PredixAI Operations · MVP</span>
        <span>Dados protegidos por autenticação e RLS</span>
      </footer>
    </main>
  );
}
