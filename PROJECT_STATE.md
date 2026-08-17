# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=1.0.2
UPDATED_AT_UTC=2026-08-17T05:00:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_0_CONCEPCAO_E_MODELAGEM_DO_DOMINIO
DELIVERY_TRACK=MVP_01_ACCELERATED_IMPLEMENTATION_MERGED
PRIMARY_ACTIVE_TASK=LEA-117
PRIMARY_ACTIVE_SUBTASK=LEA-141
GOVERNANCE_ACTIVE_TASK=NONE
ACTIVE_NORMATIVE_PR=13
ACTIVE_NORMATIVE_BRANCH=docs/lea-117-rn-02-7-manutencao
ACTIVE_NORMATIVE_HEAD_REF=docs/lea-117-rn-02-7-manutencao
ACTIVE_NORMATIVE_HEAD_SHA=c122fa84e096d49ede3ccad805d0059a47f22ac6
LAST_VERIFIED_MAIN=9e63129d5c0b138bc2d9b887e17545e839ba3844
MVP01_ISSUE=17
MVP01_PR=18
MVP01_APPROVED_HEAD=5388b01883b9198b60be57c1e275cdd9c0d993d6
MVP01_MAIN_COMMIT=5dfb29d345d30a32eac0da70ee1b94d9dd6127f8
MVP01_STATUS=MERGED_UAT_DESKTOP_AND_MOBILE_PASS
SUPABASE_PROJECT=potiguarbd
SUPABASE_PROJECT_REF=gotzykqvpgjzmzsyvufx
SUPABASE_USAGE=MVP01_REUSED_EXISTING_PROJECT
PRODUCTION_PROMOTION_AUTHORIZED=YES
PRODUCTION_PROMOTION_CONFIRMED=UNKNOWN_NO_PROVIDER_EVIDENCE_IN_REPOSITORY
SECURITY_LAST_ISSUE=22
SECURITY_LAST_PR=23
SECURITY_LAST_VALIDATED_HEAD=e6d54340ceb71a2237cfb2260fc46a216246099e
SECURITY_MAIN_COMMIT=e19da0f3e71b582d9422f65f0bf21cbb80885989
SECURITY_STATUS=PASS_SEC_02_MERGED_NANOID_3_3_18
SECURITY_ADVISORY=GHSA-2v37-7h3g-55p8
RECONCILIATION_PR=21
RECONCILIATION_VALIDATED_HEAD=0794cdcd0294938e472b9cc8f5dfb12c14408dab
RECONCILIATION_MAIN_COMMIT=9e63129d5c0b138bc2d9b887e17545e839ba3844
RECONCILIATION_REVIEW_DECISION=PASS_AND_MERGED
IMPLEMENTATION_AUTHORIZED=MVP01_SCOPE_COMPLETED_FUTURE_SCOPE_REQUIRES_NEW_AUTHORIZATION
DOMAIN_SQL_AUTHORIZED=NO_NEW_DOMAIN_SQL
MERGE_AUTHORIZED=NO_FOR_PR13_UNTIL_LEA142_REVIEW_PASS_AND_HUMAN_GATE
GITHUB_LINEAR_SYNC=PASS_RECONCILIATION_MERGED_LEA141_NEXT
BLOCKERS=NONE_FOR_LEA_141
KNOWN_PENDING=RN_02_7_INCOMPLETE_AND_PRODUCTION_PROMOTION_NOT_TECHNICALLY_CONFIRMED
NEXT_AUTHORIZED_ACTION=EXECUTE_LEA_141_ON_PR13
```

## Identidade

- Produto: PredixAI Operations.
- Primeiro módulo operacional: Almoxarifado Inteligente.
- Fonte documental e técnica oficial: GitHub.
- Controle operacional: Linear; quando o limite do workspace impedir nova issue, GitHub Issue/PR pode registrar o ciclo e o Linear existente recebe a evidência de sincronização.
- Frontend: Next.js com TypeScript.
- Backend utilizado pelo MVP-01: Supabase `potiguarbd`.
- Hospedagem utilizada: Vercel.

## Objetivo final

Construir um sistema operacional de almoxarifado inteligente, auditável e seguro, com controle de materiais, patrimônios, estoques, movimentações, obras, eventos, romaneios, manutenção e relatórios.

O sistema deve funcionar sem IA. A IA é camada assistiva e não possui autorização irrestrita para operações críticas.

## Políticas obrigatórias

- `docs/governanca/POLITICA-CHECKLIST-E-PROXIMA-ACAO.md`
- `docs/roadmap/ROADMAP-MESTRE-EXECUTAVEL.md`
- `docs/governanca/HISTORICO-AUDITAVEL-FASE-0.md`
- `docs/arquitetura/ADR-001-VERCEL-SUPABASE.md`

Toda resposta operacional deve terminar com checklist por estado, tarefas e subtarefas Linear, evidências GitHub e uma única ação sugerida.

## Nota de reconciliação — 2026-08-16/17

O estado anterior, versão `0.9.1`, refletia corretamente o projeto em 2026-07-22, mas deixou de acompanhar uma execução acelerada iniciada em 2026-08-03.

A solicitação direta de Leandro originou o MVP-01 para colocar o Almoxarifado Inteligente online. O ciclo foi executado no GitHub Issue #17 e PR #18, incluindo autenticação, materiais, entradas, saídas, saldo, estoque mínimo, histórico, RLS, migrations e interface responsiva.

O PR #18 foi aprovado por Leandro e mesclado por squash no `main` em `5dfb29d345d30a32eac0da70ee1b94d9dd6127f8`. Essa autorização histórica não constitui autorização geral para novas implementações, SQL ou migrations de domínio.

Durante o primeiro reteste do PR #21, o workflow `Dependency Security` detectou uma vulnerabilidade alta em `nanoid@3.3.17`, registrada como SEC-02 / Issue #22. A remediação foi executada no PR #23, validada pelo workflow oficial no HEAD `e6d54340ceb71a2237cfb2260fc46a216246099e` com `npm ci`, lockfile imutável, auditoria e build em PASS. O PR #23 foi autorizado por Leandro e mesclado por squash no `main` em `e19da0f3e71b582d9422f65f0bf21cbb80885989`; a Issue #22 foi fechada automaticamente como concluída.

O PR #21 foi então retestado no HEAD `0794cdcd0294938e472b9cc8f5dfb12c14408dab` sobre o `main` pós-SEC-02. O workflow `Dependency Security` run `31995301015` terminou em SUCCESS, sem threads pendentes. Após HUMAN_GATE de Leandro, o PR #21 foi mesclado por squash e produziu `9e63129d5c0b138bc2d9b887e17545e839ba3844` no `main`.

A verificação pós-merge identificou somente um drift documental: campos transitórios do gate do próprio PR #21 ainda constavam no `PROJECT_STATE.md`, README, roadmap e relatório de reconciliação. Esta sincronização pós-merge corrige esses campos sem alterar código funcional, SQL, migrations ou dados.

## Baselines normativas aprovadas

- RN-00 REV1 — PredixAI Domain Dictionary
- RN-01 REV2.1 — Cadastro e classificação de materiais
- RN-02.1 REV1 — Núcleo organizacional
- RN-02.2 REV1 — Usuários, perfis, permissões e responsabilidades
- RN-02.3 REV2 — Materiais, catálogo opcional, atributos e patrimônios
- RN-02.4 REV3 — Estoques, saldos, localizações e WMS leve
- RN-02.5 REV1 — Movimentações e Integridade do Estoque
- RN-02.6 REV1 — Obras, Eventos e Romaneios
- ADR-001 — Estratégia Vercel e Supabase
- Histórico Auditável da Fase 0
- GOV-02 — Checklist permanente e roadmap executável

A RN-02.7 ainda não é baseline concluída.

## Estado técnico implementado

### Fundação Next.js — LEA-123

- PR: #10.
- HEAD aprovado: `3da8a244cd076c2aeeb6c28d57296acc3b14e5fa`.
- Merge commit: `3c7f1ff686e01d7b8198d540e8b455f5f37e2b79`.
- Projeto Vercel: `prj_58FHK84iho6Dh24fPqq6HTGQy1ds`.

### MVP-01 — Almoxarifado Inteligente online

- GitHub Issue: #17 — concluída.
- PR: #18 — merged.
- HEAD aprovado: `5388b01883b9198b60be57c1e275cdd9c0d993d6`.
- Commit MVP no `main`: `5dfb29d345d30a32eac0da70ee1b94d9dd6127f8`.
- UAT desktop: PASS.
- UAT móvel final: PASS.
- Testes transacionais de estoque: 6/6 PASS.
- Testes de autorização: 6/6 PASS.
- Lockfile: versionado.
- CI de segurança e build: integrado.

Escopo implementado:

- autenticação por e-mail e senha;
- membros e perfis `owner`, `operator` e `viewer`;
- cadastro e edição de materiais;
- entrada e saída de estoque;
- saldo calculado pelo histórico;
- bloqueio de saída acima do saldo;
- estoque mínimo e alertas;
- histórico auditável de movimentações;
- interface responsiva desktop/mobile;
- RLS e funções transacionais;
- migrations necessárias ao MVP-01.

Fora do MVP-01:

- patrimônio completo;
- manutenção;
- obras e eventos completos;
- romaneios completos;
- relatórios avançados;
- IA operacional.

## Segurança atual

### SEC-02 — remediada e integrada

- GitHub Issue #22 — Closed / Completed.
- PR #23 — merged por squash.
- Vulnerabilidade original: `nanoid@3.3.17`, high.
- Advisory: `GHSA-2v37-7h3g-55p8` / `CVE-2026-67213`.
- Correção: `nanoid@3.3.18` no `package-lock.json`.
- HEAD validado do PR #23: `e6d54340ceb71a2237cfb2260fc46a216246099e`.
- Workflow `Dependency Security` run `31994973803`: SUCCESS.
- `npm ci`: PASS.
- Lockfile inalterado após instalação: PASS.
- `npm audit`: 0 vulnerabilidades.
- Gate High/Critical: PASS.
- `npm run build`: PASS.
- Commit integrado ao `main`: `e19da0f3e71b582d9422f65f0bf21cbb80885989`.
- `main` verificado contém `nanoid@3.3.18`.

O workflow permanente é acionado por Pull Request; não existe evidência de run separado por `push` no `main`. A validação pós-integração distingue o CI verde do PR #23 da verificação direta do conteúdo efetivamente mesclado no `main`.

## Frente normativa ativa

### LEA-117 — RN-02.7 Manutenção e Ciclo de Vida Patrimonial

- Estado Linear: In Progress.
- PR Draft: #13.
- Branch: `docs/lea-117-rn-02-7-manutencao`.
- HEAD verificado em 2026-08-17: `c122fa84e096d49ede3ccad805d0059a47f22ac6`.
- LEA-138 — Done.
- LEA-139 — Done.
- LEA-140 — Done.
- LEA-141 — Todo; próxima subtarefa normativa.
- LEA-142 — Todo; bloqueada por LEA-141.

A reconciliação já está integrada. O próximo trabalho normativo é a LEA-141. Nenhum merge do PR #13 está autorizado antes da LEA-142, revisão final, PASS e novo HUMAN_GATE aplicável.

## Infraestrutura

### Vercel

- Equipe registrada: PREDIX AI BR.
- Projeto: `prj_58FHK84iho6Dh24fPqq6HTGQy1ds`.
- Deployment seguro registrado no ciclo MVP-01: `dpl_GKJixBbe9irjqkVddsKPKQu6UmH7`.
- Estado registrado naquele gate: `READY`.
- Promoção para produção: autorizada por Leandro em 2026-08-04.
- Confirmação técnica de promoção: não comprovada no repositório; não deve ser inferida.

### Supabase

O plano original da LEA-122 previa criar um projeto exclusivo chamado `predixai-operations`, mas o ciclo MVP-01 adotou uma solução diferente: reaproveitar o projeto existente `potiguarbd`.

- projeto: `potiguarbd`;
- project ref: `gotzykqvpgjzmzsyvufx`;
- região registrada: `sa-east-1`;
- estado registrado durante o MVP-01: `ACTIVE_HEALTHY`;
- Auth: utilizado pelo MVP-01;
- RLS: aplicado ao escopo do MVP-01;
- migrations: executadas e versionadas no PR #18.

Estado Linear reconciliado em 2026-08-16:

- LEA-122 — Canceled;
- LEA-143 — Canceled;
- LEA-144 — Canceled;
- LEA-145 — Canceled.

Essas tarefas representam o caminho original superado pelo reaproveitamento do `potiguarbd` e não são bloqueio vigente para o MVP-01.

## Governança concluída

### LEA-134 — GOV-02

- PR: #12.
- Merge commit: `067dca8742f62638644950169df590fe9562aefd`.
- LEA-135: Done.
- LEA-136: Done.
- LEA-137: Done.

### Reconciliação pós-MVP-01

- PR: #21 — merged por squash.
- HEAD validado: `0794cdcd0294938e472b9cc8f5dfb12c14408dab`.
- Workflow final: `Dependency Security` run `31995301015` — SUCCESS.
- Commit no `main`: `9e63129d5c0b138bc2d9b887e17545e839ba3844`.
- Decisão: PASS + HUMAN_GATE + MERGED.

## Decisões críticas vigentes

1. GitHub é a fonte documental e técnica oficial.
2. Estado volátil de branch, PR, Issue, CI e deploy deve ser verificado ao vivo antes de afirmação operacional.
3. Linear acompanha tarefas e dependências; GitHub Issue/PR registra ciclos quando o limite do Linear impedir criação de novas issues.
4. Contexto do chat não substitui documento versionado.
5. Nenhuma tarefa é concluída sem evidência verificável.
6. O MVP-01 está incorporado ao `main`; isso não libera automaticamente o restante do roadmap.
7. Novas implementações, SQL e migrations exigem escopo e autorização próprios.
8. A autorização humana para promoção do MVP-01 existiu, mas a promoção efetiva para produção permanece `UNKNOWN` até evidência de provider.
9. Vulnerabilidade alta conhecida bloqueia PASS até remediação e reteste; SEC-02 já cumpriu esse ciclo e está encerrada.
10. A RN-02.7 permanece como frente normativa principal; LEA-141 é a próxima subtarefa.
11. IA não executa operação crítica sem confirmação humana compatível com o risco.
12. Histórico antigo não deve ser apagado para corrigir drift; a correção deve ser auditável.

## Próximas ações autorizadas

1. executar LEA-141 no PR #13, resolvendo o HEAD ao vivo antes da primeira alteração;
2. após LEA-141, executar LEA-142 com revisão crítica, remediação, reteste e preparação da baseline;
3. manter o merge do PR #13 bloqueado até LEA-142 + PASS + autorização explícita;
4. não declarar o MVP-01 em produção definitiva sem evidência técnica da Vercel;
5. tratar futuras implementações, SQL e migrations como novos escopos sujeitos a autorização própria.

## Regra de leitura de HEAD e provider

O SHA do próprio commit não deve ser gravado autorreferencialmente. Para PR ativo, resolver o HEAD ao vivo e registrar separadamente o último HEAD validado.

Deployment, promoção, saúde do provider, advisories e aliases são estados voláteis. Uma autorização humana ou um snapshot documental não substitui evidência atual do provider ou dos gates de segurança.