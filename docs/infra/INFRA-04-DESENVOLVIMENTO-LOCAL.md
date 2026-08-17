# INFRA-04 — Desenvolvimento local isolado

## Objetivo

Executar o PredixAI Operations contra um Supabase **local e isolado**, sem usar `potiguarbd` ou qualquer outro projeto remoto por padrão.

Este procedimento pertence aos gates R3/R4 da INFRA-04.

## Limites

Este fluxo não executa:

- `supabase link`;
- `supabase db push`;
- comandos `--linked`;
- restore/pause de projeto remoto;
- mudança de plano/custo;
- deploy Vercel;
- dados reais.

O launcher `scripts/supabase-local.mjs` oferece apenas `start`, `status`, `reset` local e `stop`.

## Pré-requisitos

- Node.js 20+ para a Supabase CLI via `npx`;
- Docker ou runtime compatível em execução;
- dependências da aplicação instaladas com `npm ci`.

A versão do Supabase CLI usada pelo launcher está fixada em `2.111.0`.

## Inicialização

```bash
npm ci
node scripts/supabase-local.mjs start
```

O `supabase start` aplica as migrations versionadas em `supabase/migrations/` ao banco local.

## INFRA-04-F10 — migration-base mínima do MVP

A auditoria de reprodutibilidade detectou que as duas migrations históricas do MVP eram incrementais e pressupunham `public.sectors`, `public.inventory_items` e `public.inventory_moves` já existentes.

Com HUMAN_GATE específico de Leandro para a **Opção A — baseline mínima de compatibilidade**, foi adicionada:

```text
20260803140000_mvp_inventory_schema_base.sql
```

Ela cria somente o schema-base já materializado pelo MVP-01:

- `public.sectors`;
- `public.inventory_items`;
- `public.inventory_moves`;
- FK `inventory_moves.item_id -> inventory_items.id`;
- FK opcional `inventory_moves.sector_id -> sectors.id`.

Ela **não** implementa o modelo completo da Fase 0 e não duplica RLS, autoria, funções, saldo ou controle de membros. Essas regras permanecem nas migrations históricas subsequentes:

1. `20260803143000_mvp_inventory_online.sql`;
2. `20260803145000_mvp_inventory_member_access.sql`.

O contrato automatizado está em `scripts/test-migration-baseline.mjs` e é executado por `npm test`.

TDD registrado:

- RED: CI `32013264506` falhou exatamente por ausência da migration-base;
- GREEN: CI `32013369612` aplicou o contrato, build/security e `db reset --local` com sucesso no HEAD `f2bec2275f7e02e6dbc6a3efd7605a8bf6cbe74c`.

## Configuração da aplicação

Copie o contrato de ambiente:

```bash
cp .env.example .env.local
```

Depois obtenha a chave **Publishable** local:

```bash
node scripts/supabase-local.mjs status
```

Edite somente `.env.local` e substitua:

```text
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_local_from_supabase_status
```

pelo valor Publishable exibido pelo Supabase local.

O endpoint local esperado permanece:

```text
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
```

`.env.local` é ignorado pelo Git e não deve ser commitado.

## Reprodutibilidade do banco local

Para destruir e recriar **somente o banco local** a partir da cadeia versionada de migrations:

```bash
node scripts/supabase-local.mjs reset
```

O launcher traduz esse comando para `supabase db reset --local`.

A reconstrução esperada aplica, em ordem, a migration-base F10 e as duas migrations históricas do MVP.

Seed permanece desabilitado no `supabase/config.toml` até existir seed não sensível explicitamente aprovado.

## Executar a aplicação

```bash
npm run dev
```

A aplicação passa a usar exclusivamente as variáveis `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.

## Verificações

Contratos estáticos, incluindo ambiente e migration-base:

```bash
npm test
```

Build:

```bash
npm run build
```

Reprodutibilidade local:

```bash
node scripts/supabase-local.mjs start
node scripts/supabase-local.mjs status
node scripts/supabase-local.mjs reset
node scripts/supabase-local.mjs stop
```

## Estado remoto

Durante R3/R4/F10:

- `potiguarbd` deve permanecer `INACTIVE`;
- nenhum projeto Supabase ativo deve ser pausado;
- nenhuma configuração Vercel deve ser criada ou alterada;
- produção permanece bloqueada.
