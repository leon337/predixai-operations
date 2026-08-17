# INFRA-04 R6-A — Execução CI hardening + health/smoke + release evidence

Data: 2026-08-17

## Escopo autorizado

HUMAN_GATE de Leandro autorizou exclusivamente o GATE-R6-A em modo repo/local:

- corrigir trigger do CI para `main`;
- adicionar `concurrency`;
- manter permissões `contents: read`;
- criar `/api/health` não sensível;
- criar smoke local-only;
- gerar release evidence não sensível;
- manter o recovery drill R5-A;
- nenhum deploy, Preview remoto, provider mutation, branch protection, Production, SQL/migration nova, dado real ou custo.

## TDD RED

- commit: `36140803cfe1006962a7f7c86457d0d2ee84e0d9`;
- workflow run: `32042542270`;
- resultado: `FAIL_EXPECTED`;
- primeiro erro: `R6-A: pushes em main devem executar o CI`;
- contratos anteriores de ambiente/migrations/R5-A continuaram PASS antes da falha.

## GREEN substantivo

- commit: `61d9183528d515bdaeb3fb5204ce9875db60939e`;
- workflow run: `32042708924`;
- resultado: `SUCCESS`;
- artifact: `9292265345`;
- digest: `sha256:7f74adddf15a8338af8c1d034bfcc811f3bcccc02527ecfc3ba3254e53044740`.

Steps comprovados no GREEN:

- npm ci: PASS;
- lockfile unchanged: PASS;
- contratos automatizados: PASS;
- npm audit high/critical gate: PASS;
- build Next.js: PASS;
- local health smoke: PASS;
- release candidate evidence: PASS;
- recovery drill local R5-A: PASS;
- artifact upload: PASS.

## Release evidence inspecionada

O artifact real contém:

```json
{
  "git_sha": "61d9183528d515bdaeb3fb5204ce9875db60939e",
  "environment": "ci",
  "ci_run_id": "32042708924",
  "build": "PASS",
  "smoke": "PASS",
  "deployment_id": null,
  "deployment_url": null,
  "rollback_target": null
}
```

O log do servidor confirma bind somente em `127.0.0.1:3000` durante o smoke.

## Alterações funcionais do GATE-R6-A

- `.github/workflows/dependency-security.yml`
  - `push` corrigido para `main`;
  - PR continua em `main`;
  - `concurrency` + `cancel-in-progress`;
  - permissões continuam read-only;
  - build + smoke local + evidence + recovery R5-A;
  - nenhuma chamada Vercel/deploy/promote/rollback.
- `app/api/health/route.ts`
  - HTTP 200;
  - payload fixo `{status:"ok", service:"predixai-operations"}`;
  - nenhum acesso a env, sessão, Supabase ou dado de usuário.
- `scripts/smoke-local.mjs`
  - aceita apenas `http://127.0.0.1` ou `http://localhost` em `/api/health`;
  - rejeita alvo remoto;
  - valida status HTTP e payload.
- `scripts/release-evidence.mjs`
  - gera somente campos whitelisted;
  - deployment/rollback permanecem `null` no R6-A.
- contratos automatizados adicionados ao `npm test`.

## Estado

`GATE_R6_A_RESULT=PASS_REPO_LOCAL_AWAITING_PR38_MERGE_GATE`

`PROVIDER_MUTATION=NO`

`DEPLOY=NO`

`PRODUCTION=NO`

`MERGE_AUTHORIZED=NO`
