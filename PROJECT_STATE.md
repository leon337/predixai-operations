# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=1.0.0
UPDATED_AT_UTC=2026-08-16T08:27:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_0_CONCEPCAO_E_MODELAGEM_DO_DOMINIO
DELIVERY_TRACK=MVP_01_ACCELERATED_IMPLEMENTATION_MERGED
PRIMARY_ACTIVE_TASK=LEA-117
PRIMARY_ACTIVE_SUBTASK=LEA-141
GOVERNANCE_ACTIVE_TASK=RECONCILIACAO_ESTADO_2026_08_16
ACTIVE_NORMATIVE_PR=13
ACTIVE_NORMATIVE_BRANCH=docs/lea-117-rn-02-7-manutencao
ACTIVE_NORMATIVE_HEAD_REF=docs/lea-117-rn-02-7-manutencao
ACTIVE_NORMATIVE_HEAD_SHA=c122fa84e096d49ede3ccad805d0059a47f22ac6
LAST_VERIFIED_MAIN=5dfb29d345d30a32eac0da70ee1b94d9dd6127f8
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
IMPLEMENTATION_AUTHORIZED=MVP01_SCOPE_COMPLETED_FUTURE_SCOPE_REQUIRES_NEW_AUTHORIZATION
DOMAIN_SQL_AUTHORIZED=NO_NEW_DOMAIN_SQL
MERGE_AUTHORIZED=NO_FOR_PR13
GITHUB_LINEAR_SYNC=LINEAR_SUPERSESSION_APPLIED_PR21_PENDING_MERGE
RECONCILIATION_PR=21
BLOCKERS=RN_02_7_INCOMPLETE_AND_PRODUCTION_PROMOTION_NOT_TECHNICALLY_CONFIRMED
NEXT_AUTHORIZED_ACTION=REVIEW_PR_21_THEN_CONTINUE_LEA_141
```

## Identidade

- Produto: PredixAI Operations
- Primeiro módulo operacional: Almoxarifado Inteligente
- Fonte documental e técnica oficial: GitHub
- Controle operacional: Linear; quando o limite do workspace impedir nova issue, GitHub Issue/PR pode registrar o ciclo e o Linear existente recebe a evidência de sincronização.
- Frontend: Next.js com TypeScript
- Backend utilizado pelo MVP-01: Supabase `potiguarbd`
- Hospedagem utilizada: Vercel

## Objetivo final

Construir um sistema operacional de almoxarifado inteligente, auditável e seguro, com controle de materiais, patrimônios, estoques, movimentações, obras, eventos, romaneios, manutenção e relatórios.

O sistema deve funcionar sem IA. A IA é camada assistiva e não possui autorização irrestrita para operações críticas.

## Políticas obrigatórias

- `docs/governanca/POLITICA-CHECKLIST-E-PROXIMA-ACAO.md`
- `docs/roadmap/ROADMAP-MESTRE-EXECUTAVEL.md`
- `docs/governanca/HISTORICO-AUDITAVEL-FASE-0.md`
- `docs/arquitetura/ADR-001-VERCEL-SUPABASE.md`

Toda resposta operacional deve terminar com checklist por estado, tarefas e subtarefas Linear, evidências GitHub e uma única ação sugerida.

## Nota de reconciliação — 2026-08-16

O estado anterior, versão `0.9.1`, refletia corretamente o projeto em 2026-07-22, mas deixou de acompanhar uma execução acelerada iniciada em 2026-08-03.

A solicitação direta de Leandro originou o MVP-01 para colocar o Almoxarifado Inteligente online. O ciclo foi executado no GitHub Issue #17 e PR #18, incluindo autenticação, materiais, entradas, saídas, saldo, estoque mínimo, histórico, RLS, migrations e interface responsiva.

O PR #18 foi aprovado por Leandro e mesclado por squash no `main` em `5dfb29d345d30a32eac0da70ee1b94d9dd6127f8`. Portanto, não é mais verdadeiro afirmar que somente a fundação técnica está implementada ou que SQL/migrations nunca foram autorizados: eles foram autorizados e executados especificamente dentro do escopo do MVP-01.

Essa autorização histórica não constitui autorização geral para novas implementações, SQL ou migrations de domínio.

A reconciliação atual está registrada no PR Draft #21. O caminho Linear antigo de criação de um novo Supabase foi sincronizado como cancelado por supersessão.

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

- PR: #10
- HEAD aprovado: `3da8a244cd076c2aeeb6c28d57296acc3b14e5fa`
- Merge commit: `3c7f1ff686e01d7b8198d540e8b455f5f37e2b79`
- Projeto Vercel: `prj_58FHK84iho6Dh24fPqq6HTGQy1ds`

### MVP-01 — Almoxarifado Inteligente online

- GitHub Issue: #17 — concluída
- PR: #18 — merged
- HEAD aprovado: `5388b01883b9198b60be57c1e275cdd9c0d993d6`
- Commit no `main`: `5dfb29d345d30a32eac0da70ee1b94d9dd6127f8`
- UAT desktop: PASS
- UAT móvel final: PASS
- testes transacionais de estoque: 6/6 PASS
- testes de autorização: 6/6 PASS
- auditoria final registrada: 0 vulnerabilidades
- lockfile: versionado
- CI de segurança e build: integrado

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

## Frente normativa ativa

### LEA-117 — RN-02.7 Manutenção e Ciclo de Vida Patrimonial

- Estado Linear: In Progress
- PR Draft: #13
- Branch: `docs/lea-117-rn-02-7-manutencao`
- HEAD observado na reconciliação: `c122fa84e096d49ede3ccad805d0059a47f22ac6`
- LEA-138 — Done
- LEA-139 — Done
- LEA-140 — Done
- LEA-141 — Todo
- LEA-142 — Todo

O próximo trabalho normativo é a LEA-141. Nenhum merge do PR #13 está autorizado antes da LEA-142, revisão final, PASS e novo gate aplicável.

## Infraestrutura

### Vercel

- Equipe registrada: PREDIX AI BR
- Projeto: `prj_58FHK84iho6Dh24fPqq6HTGQy1ds`
- deployment seguro registrado no ciclo MVP-01: `dpl_GKJixBbe9irjqkVddsKPKQu6UmH7`
- estado registrado naquele gate: `READY`
- promoção para produção: autorizada por Leandro em 2026-08-04
- confirmação técnica de promoção: não comprovada no repositório; não deve ser inferida

### Supabase

O plano original da LEA-122 previa criar um projeto exclusivo chamado `predixai-operations`, mas o ciclo MVP-01 adotou uma solução diferente: reaproveitar o projeto existente `potiguarbd`.

- projeto: `potiguarbd`
- project ref: `gotzykqvpgjzmzsyvufx`
- região registrada: `sa-east-1`
- estado registrado durante o MVP-01: `ACTIVE_HEALTHY`
- Auth: utilizado pelo MVP-01
- RLS: aplicado ao escopo do MVP-01
- migrations: executadas e versionadas no PR #18

Estado Linear reconciliado em 2026-08-16:

- LEA-122 — Canceled;
- LEA-143 — Canceled;
- LEA-144 — Canceled;
- LEA-145 — Canceled.

Essas tarefas representam o caminho original superado pelo reaproveitamento do `potiguarbd` e não são bloqueio vigente para o MVP-01.

## Governança concluída

### LEA-134 — GOV-02

- PR: #12
- merge commit: `067dca8742f62638644950169df590fe9562aefd`
- LEA-135: Done
- LEA-136: Done
- LEA-137: Done

## Decisões críticas vigentes

1. GitHub é a fonte documental e técnica oficial.
2. Estado volátil de branch, PR, Issue, CI e deploy deve ser verificado ao vivo antes de afirmação operacional.
3. Linear acompanha tarefas e dependências; GitHub Issue/PR registra ciclos quando o limite do Linear impedir criação de novas issues.
4. Contexto do chat não substitui documento versionado.
5. Nenhuma tarefa é concluída sem evidência verificável.
6. O MVP-01 está incorporado ao `main`; isso não libera automaticamente o restante do roadmap.
7. Novas implementações, SQL e migrations exigem escopo e autorização próprios.
8. A autorização humana para promoção do MVP-01 existiu, mas a promoção efetiva para produção permanece `UNKNOWN` até evidência de provider.
9. A RN-02.7 permanece como frente normativa principal.
10. IA não executa operação crítica sem confirmação humana compatível com o risco.
11. Histórico antigo não deve ser apagado para corrigir drift; a correção deve ser auditável.

## Próximas ações autorizadas

1. revisar o PR #21 de reconciliação e integrá-lo somente após PASS e gate aplicável;
2. após a reconciliação, retomar LEA-141 no PR #13;
3. manter o merge do PR #13 bloqueado até LEA-142 + revisão final + autorização aplicável;
4. não declarar o MVP-01 em produção definitiva sem evidência técnica da Vercel.

## Regra de leitura de HEAD e provider

O SHA do próprio commit não deve ser gravado autorreferencialmente. Para PR ativo, resolver o HEAD ao vivo e registrar separadamente o último HEAD validado.

Deployment, promoção, saúde do provider e aliases são estados voláteis. Uma autorização humana ou um snapshot documental não substitui evidência atual do provider.
