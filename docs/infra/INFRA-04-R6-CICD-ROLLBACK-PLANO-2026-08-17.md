# INFRA-04 R6 — CI/CD e Rollback — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** estabelecer um caminho auditável de CI → Preview → promoção manual → verificação → rollback, mantendo Production bloqueada até provider, R5 remoto e R7 estarem suficientemente comprovados.

**Architecture:** o pipeline será dividido em gates independentes. CI local/repositório permanece totalmente separado de CD/provider. Preview só poderá existir depois de um destino remoto explicitamente reconciliado; Production nunca será acionada automaticamente por merge. Rollback de aplicação e recuperação de banco serão tratados como mecanismos distintos.

**Tech Stack:** GitHub Actions, Next.js 16, Node.js 22, Supabase CLI 2.111.0, Vercel como direção histórica de hosting ainda não reconciliada.

## Global Constraints

- GitHub `main` em 2026-08-17: `82dcbe2b461d0aa5389a75b57c7f0bb49728ff4b`.
- Somente planejamento/auditoria read-only está autorizado nesta rodada.
- Nenhum deploy, Preview remoto, Production, Vercel mutation, secret, branch protection mutation, Supabase remoto, SQL remoto, dado real ou custo está autorizado.
- `potiguarbd` permanece `INACTIVE`.
- R5-B/C/D permanecem gates independentes e não autorizados.
- R7 permanece pendente.
- Merge desta documentação exigirá HUMAN_GATE próprio.

---

## Auditoria read-only

### Evidência atual

1. Existe apenas um workflow: `.github/workflows/dependency-security.yml`.
2. O workflow roda em PR para `main` e em push apenas para a branch histórica `feat/mvp-01-online-almoxarifado`.
3. O workflow cobre `npm ci`, lockfile, testes, dependency tree, `npm audit`, build e recovery drill local R5-A.
4. Não existe workflow versionado de deploy, Preview, Production, smoke pós-deploy ou rollback.
5. `package.json` não possui scripts de deploy, smoke remoto ou rollback.
6. A equipe Vercel conectada `team_D45x1LavGkCy2ifRlrShm2WJ` lista 0 projetos.
7. O repositório possui 0 GitHub Deployment records.
8. `main` está `protected=false`, sem required status checks.
9. Não existe endpoint `/api/health` ou contrato equivalente versionado.
10. A cadeia de migrations possui três migrations forward-only; não existe mecanismo versionado de down/rollback de banco.

### Achados R6

#### R6-F01 — HIGH — CD não existe
Não existe pipeline versionado que produza ou registre Preview/Production.

#### R6-F02 — HIGH — destino de deploy não está comprovado
A conexão Vercel atual retorna 0 projetos e o GitHub não possui Deployment records. Production continua `NO/UNKNOWN`.

#### R6-F03 — HIGH — rollback de aplicação não está operacionalizado
Não existe registro canônico de deployment anterior, comando manual versionado, critério de seleção do target ou teste de rollback.

#### R6-F04 — HIGH — smoke pós-deploy não existe
Não existe health endpoint/contrato mínimo que permita provar que uma implantação está saudável antes de promoção.

#### R6-F05 — HIGH — rollback de banco não pode ser tratado como rollback automático
As migrations atuais são forward-only. Reverter aplicação e reverter banco são operações diferentes. Um CD futuro não poderá executar rollback automático de schema/dados.

#### R6-F06 — MEDIUM/HIGH — `main` não exige checks
`main` está sem branch protection/required status checks. O CI gera evidência, mas não é tecnicamente obrigatório no GitHub.

#### R6-F07 — MEDIUM — trigger de push está preso a branch histórica
O workflow atual não valida automaticamente cada novo commit já integrado em `main`.

#### R6-F08 — MEDIUM — não há release evidence padronizada
Não existe manifesto versionado por entrega contendo `git_sha`, environment, deployment ID/URL, CI run, smoke result, actor, timestamp e rollback target.

## Decisão arquitetural proposta

```text
PR
  -> CI obrigatório no HEAD exato
  -> merge HUMAN_GATE
  -> main verificada
  -> [quando provider existir] Preview isolado
  -> smoke/health
  -> evidência de release
  -> HUMAN_GATE de promoção
  -> Production
  -> smoke pós-promoção
  -> observabilidade R7
  -> rollback manual para deployment anterior se necessário
```

### Regra crítica de dados

```text
APPLICATION ROLLBACK != DATABASE ROLLBACK
```

- aplicação: pode retornar a deployment previamente validada;
- banco: não terá `down migration` automática por padrão;
- alteração destrutiva de banco exige backup pré-change R5, migration compatível/expand-contract ou recovery plan próprio;
- se uma migration remota já tiver sido aplicada, o rollback da aplicação só é permitido se a versão anterior continuar compatível com o schema atual;
- qualquer restore remoto permanece sob R5-C/HUMAN_GATE.

## Gates planejados

### GATE-R6-A — Repo-only CI hardening + smoke local
Pode ser a primeira implementação futura, sem provider.

Escopo candidato:
- corrigir triggers do workflow;
- adicionar `concurrency`;
- criar health endpoint não sensível;
- criar smoke test local;
- gerar manifesto de evidência de release candidato;
- manter recovery drill R5-A;
- nenhum deploy.

### GATE-R6-B — GitHub enforcement
Gate remoto separado.

Escopo candidato:
- ativar branch protection/ruleset;
- exigir check do workflow no PR;
- impedir bypass acidental de `main` conforme capacidade do plano/repo.

Nenhuma mutation GitHub deste tipo está autorizada agora.

### GATE-R6-C — Preview remoto isolado
Só depois de destino de provider explicitamente reconciliado.

Requisitos mínimos:
- project ID/slug conhecido;
- environment Preview conhecido;
- variáveis Preview separadas;
- backend Preview isolado ou explicitamente aprovado;
- deployment ID/URL registrado;
- smoke PASS;
- nenhum tráfego Production.

### GATE-R6-D — promoção manual
Só após R5/R7 necessários e HUMAN_GATE específico.

Fluxo proposto em Vercel, se esse provider for confirmado:

```bash
vercel inspect <preview-url>
vercel curl /api/health --deployment <preview-url>
vercel promote <preview-url> --yes
vercel promote status
```

Production não será acionada automaticamente em `push main`.

### GATE-R6-E — rollback drill
Primeiro em Preview/staging isolado.

Se Vercel for confirmado, direção operacional:

```bash
vercel rollback <deployment-id-or-url>
```

O target deve ser uma deployment previamente registrada como saudável.

### GATE-R6-F — banco/recovery coupling
Nenhum rollback automático de banco.

Pré-condições para mudança remota de schema:
- backup pre-change segundo R5;
- compatibilidade da aplicação anterior documentada;
- migration analisada para backward compatibility;
- recovery isolado quando o risco exigir;
- HUMAN_GATE próprio para SQL/dados/restore.

---

### Task 1: CI hardening repo-only

**Files:**
- Modify: `.github/workflows/dependency-security.yml`
- Create: `scripts/test-ci-contract.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: workflow atual, `npm test`, build e R5-A recovery.
- Produces: CI determinístico para PR/main sem executar CD.

- [ ] **Step 1: escrever contrato RED para triggers, permissões e ausência de deploy automático**

Contrato deve exigir:

```js
assert.match(workflow, /pull_request:/);
assert.match(workflow, /branches:\s*\n\s*- main/);
assert.match(workflow, /concurrency:/);
assert.doesNotMatch(workflow, /vercel\s+(deploy|promote|rollback)/);
```

- [ ] **Step 2: executar `node scripts/test-ci-contract.mjs` e confirmar FAIL antes da mudança**

- [ ] **Step 3: corrigir workflow com o mínimo necessário**

Direção esperada:

```yaml
on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

concurrency:
  group: ci-${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

permissions:
  contents: read
```

- [ ] **Step 4: rodar `npm test`, `npm run build` e recovery local; todos devem PASS**

- [ ] **Step 5: commit isolado e revisão exata do HEAD**

### Task 2: Health e smoke local

**Files:**
- Create: `app/api/health/route.ts`
- Create: `scripts/smoke-local.mjs`
- Create: `scripts/test-smoke-contract.mjs`
- Modify: `package.json`

**Interfaces:**
- Produces: endpoint não sensível e smoke reutilizável por Preview futuro.

- [ ] **Step 1: contrato RED exigindo resposta sem secrets**

Resposta alvo:

```json
{"status":"ok","service":"predixai-operations"}
```

Nunca incluir URL/chave Supabase, commit secret, env dump ou dados de usuário.

- [ ] **Step 2: implementar `GET /api/health` com HTTP 200**
- [ ] **Step 3: smoke local deve falhar para status != 200 ou payload inválido**
- [ ] **Step 4: executar servidor local de teste e confirmar PASS**
- [ ] **Step 5: integrar smoke ao CI sem qualquer chamada remota**

### Task 3: Release evidence contract

**Files:**
- Create: `scripts/release-evidence.mjs`
- Create: `scripts/test-release-evidence-contract.mjs`
- Modify: `.gitignore`
- Modify: `.github/workflows/dependency-security.yml`

**Interfaces:**
- Produces artifact JSON não sensível.

Formato mínimo:

```json
{
  "git_sha":"<sha>",
  "environment":"ci",
  "ci_run_id":"<run>",
  "build":"PASS",
  "smoke":"PASS",
  "deployment_id":null,
  "deployment_url":null,
  "rollback_target":null
}
```

- [ ] **Step 1: RED para campos obrigatórios e proibição de secrets**
- [ ] **Step 2: gerar manifesto CI local**
- [ ] **Step 3: incluir manifesto no artifact**
- [ ] **Step 4: confirmar artifact e SHA do HEAD**

### Task 4: Branch protection — gate remoto separado

**Files:**
- Documentation only until HUMAN_GATE.

- [ ] **Step 1: revalidar live `main.protected` e checks disponíveis**
- [ ] **Step 2: propor ruleset/branch protection exata**
- [ ] **Step 3: obter HUMAN_GATE antes de qualquer mutation GitHub**
- [ ] **Step 4: após autorização, exigir o check validado e testar PR descartável**

### Task 5: Preview CD — somente após provider reconciliado

**Files candidate:**
- Create: `.github/workflows/preview-deploy.yml`
- Create: `scripts/smoke-remote.mjs`
- Create: `scripts/test-preview-deploy-contract.mjs`

- [ ] **Step 1: confirmar project/team IDs e ambiente remoto isolado**
- [ ] **Step 2: contrato RED deve proibir target Production**
- [ ] **Step 3: criar Preview somente após HUMAN_GATE de provider**
- [ ] **Step 4: registrar deployment ID/URL e executar smoke**
- [ ] **Step 5: publicar evidence sem secrets**

### Task 6: Promoção e rollback manual

**Files candidate:**
- Create: `.github/workflows/promote-production.yml`
- Create: `.github/workflows/rollback-production.yml`
- Create: `scripts/test-production-gates-contract.mjs`

- [ ] **Step 1: workflows devem usar `workflow_dispatch`, nunca `push`**
- [ ] **Step 2: exigir deployment alvo explícito**
- [ ] **Step 3: promoção deve consumir somente Preview previamente validado**
- [ ] **Step 4: rollback deve exigir target anterior explícito + justificativa**
- [ ] **Step 5: smoke pós-operação e evidence obrigatórios**

Nenhuma dessas ações pode ser implementada/executada antes dos gates R5/R7/provider/Production correspondentes.

## Critérios de saída do R6

R6 só poderá ser marcado `COMPLETED` quando houver evidência de:

1. CI obrigatório/efetivamente protegido para `main`;
2. build + smoke determinísticos;
3. Preview isolado comprovado;
4. release evidence por deployment;
5. promoção manual gated comprovada em ambiente permitido;
6. rollback de aplicação ensaiado em alvo isolado;
7. política de compatibilidade de banco aplicada;
8. nenhuma automação capaz de promover Production implicitamente;
9. integração com R7 para verificar erro/saúde após promoção;
10. HUMAN_GATE de Production separado.

## Resultado desta rodada

`R6_AUDIT_STATUS=PASS_WITH_REMEDIATION_REQUIRED`

`R6_IMPLEMENTATION_AUTHORIZED=NO`

`PROVIDER_MUTATION_AUTHORIZED=NO`

`PRODUCTION_AUTHORIZED=NO`
