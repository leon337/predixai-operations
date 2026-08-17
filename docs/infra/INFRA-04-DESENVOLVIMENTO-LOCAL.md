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

O `supabase start` aplica as migrations versionadas em `supabase/migrations/` ao banco local. Nenhuma migration de domínio nova foi adicionada pela INFRA-04 R3/R4.

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

Para destruir e recriar **somente o banco local** a partir das migrations existentes:

```bash
node scripts/supabase-local.mjs reset
```

O launcher traduz esse comando para `supabase db reset --local`.

Seed permanece desabilitado no `supabase/config.toml` até existir seed não sensível explicitamente aprovado.

## Executar a aplicação

```bash
npm run dev
```

A aplicação passa a usar exclusivamente as variáveis `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.

## Verificações

Contrato estático:

```bash
npm test
```

Build:

```bash
npm run build
```

## Estado remoto

Durante R3/R4:

- `potiguarbd` deve permanecer `INACTIVE`;
- nenhum projeto Supabase ativo deve ser pausado;
- nenhuma configuração Vercel deve ser criada ou alterada;
- produção permanece bloqueada.
