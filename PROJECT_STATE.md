# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=1.0.8
UPDATED_AT_UTC=2026-08-17T06:22:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_0_CONCEPCAO_E_MODELAGEM_DO_DOMINIO
DELIVERY_TRACK=MVP_01_ACCELERATED_IMPLEMENTATION_MERGED
PRIMARY_ACTIVE_TASK=NONE
PRIMARY_ACTIVE_SUBTASK=NONE
GOVERNANCE_ACTIVE_TASK=POST_MERGE_SYNC_PR13
ACTIVE_NORMATIVE_PR=NONE
ACTIVE_NORMATIVE_BRANCH=NONE
ACTIVE_NORMATIVE_HEAD_REF=NONE
ACTIVE_NORMATIVE_HEAD_SHA=NONE
ACTIVE_NORMATIVE_HEAD_SEMANTICS=RN_02_7_BASELINE_INTEGRATED_TO_MAIN
LAST_VERIFIED_MAIN=8fbd006a2b49f810adaf0d2d3f18b6be25421d6c
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
RN027_PR=13
RN027_AUTHORIZED_HEAD=bf279b7ca395608fe6283bfadf7081b6d9e929c9
RN027_MAIN_COMMIT=8fbd006a2b49f810adaf0d2d3f18b6be25421d6c
RN027_STATUS=BASELINE_MERGED
LEA117_STATUS=DONE
LEA141_STATUS=PASS_DONE
LEA141_VALIDATED_HEAD=138fbbefd747f3b2accbfe28c93ea3951e225d11
LEA141_FINAL_CI_RUN=31998921544
LEA142_STATUS=PASS_DONE
LEA142_INITIAL_REVIEW_HEAD=3e91752a41930494661039e4a1ef3567892c2990
LEA142_INITIAL_REVIEW_DECISION=FAIL_REMEDIABLE
LEA142_FINDINGS=LEA_142_F01_TO_F08
LEA142_BASELINE=docs/fase-0/regras-negocio/RN-02.7-REV1-COMPLETA.md
LEA142_FIRST_CONSOLIDATION_HEAD=f9adf3b062111d7da30a708a3473cacc05e0f0ca
LEA142_SUBSTANTIVE_RETEST_HEAD=d14bfc3fe202a04c27f6ead81a7efa9d6e57d06c
LEA142_SUBSTANTIVE_REVIEW_DECISION=PASS
LEA142_SUBSTANTIVE_CI_RUN=32000249139
LEA142_SECURITY_ARTIFACT=9278131677
LEA142_FINAL_PR_HEAD=bf279b7ca395608fe6283bfadf7081b6d9e929c9
LEA142_FINAL_CI_RUN=32000471638
LEA142_FINAL_SECURITY_ARTIFACT=9278204797
LEA142_LINEAR_STATUS=DONE
IMPLEMENTATION_AUTHORIZED=MVP01_SCOPE_COMPLETED_FUTURE_SCOPE_REQUIRES_NEW_AUTHORIZATION
DOMAIN_SQL_AUTHORIZED=NO_NEW_DOMAIN_SQL
MERGE_AUTHORIZED=PR13_AUTHORIZED_AND_MERGED_NO_OTHER_MERGE_AUTHORIZATION
GITHUB_LINEAR_SYNC=PASS_LEA117_DONE_PR13_MERGED_POST_MERGE_DOC_SYNC_PENDING
BLOCKERS=NONE_FOR_PHASE0_EXIT_REVIEW_AFTER_POST_MERGE_SYNC
KNOWN_PENDING=POST_MERGE_DOC_SYNC_AND_PHASE0_EXIT_CHECKLIST_AND_PRODUCTION_PROMOTION_NOT_TECHNICALLY_CONFIRMED
NEXT_AUTHORIZED_ACTION=VALIDATE_POST_MERGE_SYNC_PR13_THEN_REQUEST_HUMAN_GATE
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

A verificação pós-merge identificou drift documental nos campos transitórios da própria reconciliação. O PR #24 corrigiu esse estado, passou no CI, recebeu HUMAN_GATE de Leandro e foi mesclado por squash no `main` em `0f92baa42baf3bae6c01458e698f8596a4c76760`.

A LEA-117 foi concluída pelas subtarefas LEA-138 a LEA-142. Após revisão final `FAIL_REMEDIABLE`, remediação dos achados LEA-142-F01..F08 e reteste PASS, Leandro autorizou explicitamente o merge do PR #13. O PR foi mesclado por squash no `main` em `8fbd006a2b49f810adaf0d2d3f18b6be25421d6c`. A verificação pós-merge confirmou o PR fechado/merged e a RN-02.7 presente no `main`.

## Baselines normativas aprovadas

- RN-00 REV1 — PredixAI Domain Dictionary
- RN-01 REV2.1 — Cadastro e classificação de materiais
- RN-02.1 REV1 — Núcleo organizacional
- RN-02.2 REV1 — Usuários, perfis, permissões e responsabilidades
- RN-02.3 REV2 — Materiais, catálogo opcional, atributos e patrimônios
- RN-02.4 REV3 — Estoques, saldos, localizações e WMS leve
- RN-02.5 REV1 — Movimentações e Integridade do Estoque
- RN-02.6 REV1 — Obras, Eventos e Romaneios
- RN-02.7 REV1 — Manutenção e Ciclo de Vida Patrimonial
- ADR-001 — Estratégia Vercel e Supabase
- Histórico Auditável da Fase 0
- GOV-02 — Checklist permanente e roadmap executável

A RN-02.7 REV1 está integrada ao `main` no commit `8fbd006a2b49f810adaf0d2d3f18b6be25421d6c`. A Fase 0 permanece aberta apenas até o checklist formal de encerramento e a confirmação dos limites arquiteturais da etapa seguinte.

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
- manutenção implementada;
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

## Frente normativa concluída

### LEA-117 — RN-02.7 Manutenção e Ciclo de Vida Patrimonial

- Estado Linear: Done.
- PR #13: merged por squash.
- HEAD autorizado para merge: `bf279b7ca395608fe6283bfadf7081b6d9e929c9`.
- Commit integrado ao `main`: `8fbd006a2b49f810adaf0d2d3f18b6be25421d6c`.
- Documento canônico: `docs/fase-0/regras-negocio/RN-02.7-REV1-COMPLETA.md`.
- LEA-138 — Done.
- LEA-139 — Done / PASS.
- LEA-140 — Done / PASS.
- LEA-141 — Done / PASS.
- LEA-142 — Done / PASS.
- Workflow final do HEAD autorizado: `Dependency Security` run `32000471638` — SUCCESS.
- Artefato final: `9278204797`.
- Review threads no gate de merge: 0.

### LEA-141 — integração normativa concluída

- Complemento: `docs/fase-0/regras-negocio/RN-02.7-LEA-141-INTEGRACOES-NORMATIVAS.md`.
- HEAD inicialmente revisado: `4e06009217c8c7bd64bccc199eb50db11370f7f9`.
- Decisão inicial: `FAIL_REMEDIABLE`.
- Achados: LEA-141-F01 a LEA-141-F04.
- HEAD remediado: `950d47ab886536c8aa3576505ed59ca321e25177`.
- HEAD final validado: `138fbbefd747f3b2accbfe28c93ea3951e225d11`.
- Workflow final `Dependency Security` run `31998921544`: SUCCESS.
- Critérios de aceite: 17/17 atendidos.
- Linear: Done.
- Decisão final: PASS.

### LEA-142 — revisão final concluída

- Linear: Done.
- HEAD inicialmente revisado: `3e91752a41930494661039e4a1ef3567892c2990`.
- Decisão inicial: `FAIL_REMEDIABLE`.
- Achados: LEA-142-F01 a F08.
- Primeiro commit de consolidação: `f9adf3b062111d7da30a708a3473cacc05e0f0ca`.
- F08: completude/autossuficiência da fonte canônica.
- HEAD substantivo final: `d14bfc3fe202a04c27f6ead81a7efa9d6e57d06c`.
- Decisão do reteste substantivo: PASS.
- Workflow substantivo: `Dependency Security` run `32000249139` — SUCCESS.
- Artefato substantivo: `9278131677`.
- HEAD final autorizado: `bf279b7ca395608fe6283bfadf7081b6d9e929c9`.
- Workflow final: `32000471638` — SUCCESS.
- Artefato final: `9278204797`.
- Merge commit: `8fbd006a2b49f810adaf0d2d3f18b6be25421d6c`.

A LEA-142 está encerrada e a RN-02.7 é baseline vigente. O cabeçalho processual pré-merge do documento canônico permanece como evidência do gate em que o arquivo foi validado; o status operacional pós-merge é registrado em `PROJECT_STATE.md` e no documento de sincronização pós-merge.

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
- Sincronização pós-merge: PR #24 — merged por squash em `0f92baa42baf3bae6c01458e698f8596a4c76760`.
- Decisão: PASS + HUMAN_GATE + MERGED.

### Integração da RN-02.7

- PR #13 — merged por squash após HUMAN_GATE explícito.
- HEAD autorizado: `bf279b7ca395608fe6283bfadf7081b6d9e929c9`.
- Commit no `main`: `8fbd006a2b49f810adaf0d2d3f18b6be25421d6c`.
- LEA-117 — Done.
- LEA-142 — Done / PASS.
- Sincronização documental pós-merge: em PR separado, sem autorização de merge herdada.

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
10. A RN-02.7 REV1 está integrada ao `main` e é baseline normativa vigente.
11. A conclusão normativa da RN-02.7 não autoriza implementação de manutenção, SQL ou migrations.
12. IA não executa operação crítica sem confirmação humana compatível com o risco.
13. Histórico antigo não deve ser apagado para corrigir drift; a correção deve ser auditável.

## Próximas ações autorizadas

1. validar a sincronização documental pós-merge do PR #13 em branch/PR próprio;
2. solicitar HUMAN_GATE separado antes de mesclar essa sincronização documental;
3. após a sincronização, executar o checklist formal de encerramento da Fase 0 e confirmar os limites arquiteturais da etapa seguinte;
4. não declarar MVP-01 em produção definitiva sem evidência técnica da Vercel;
5. tratar futuras implementações, SQL e migrations como novos escopos sujeitos a autorização própria.

## Regra de leitura de HEAD e provider

O SHA do próprio commit não deve ser gravado autorreferencialmente. Para PR ativo, resolver o HEAD ao vivo e registrar separadamente o último HEAD substantivo validado.

Deployment, promoção, saúde do provider, advisories e aliases são estados voláteis. Uma autorização humana ou um snapshot documental não substitui evidência atual do provider ou dos gates de segurança.