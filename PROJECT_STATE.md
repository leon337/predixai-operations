# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=1.2.3
UPDATED_AT_UTC=2026-08-17T08:08:44Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_1_RESIDUAL_INFRAESTRUTURA
PHASE0_EXIT_STATUS=COMPLETED_GOV03_MERGED_AND_VERIFIED
DELIVERY_TRACK=MVP_01_ACCELERATED_IMPLEMENTATION_MERGED
ACTIVE_TASK=INFRA_04_R3_R4_LOCAL_IMPLEMENTATION
PRIMARY_ACTIVE_TASK=INFRA_04
PRIMARY_ACTIVE_SUBTASK=R3_R4_ENVIRONMENT_CONTRACT_AND_LOCAL_SUPABASE
GOVERNANCE_ACTIVE_TASK=NONE
CONTROL_GITHUB_ISSUE=30
ACTIVE_PR=32
ACTIVE_BRANCH=feat/infra-04-local-env-isolation
ACTIVE_HEAD_SHA=RESOLVE_FROM_PR_METADATA
LAST_VERIFIED_HEAD=3d07acd36a5d8c1c29ca6073448a0f51a2988652
LAST_VERIFIED_HEAD_SEMANTICS=TDD_RED_CONFIRMED_ENVIRONMENT_CONTRACT_FAILS_BEFORE_IMPLEMENTATION
LAST_VERIFIED_MAIN=5260caeea80471c9c9be9c74795a57e8fafc8851
LAST_VERIFIED_MAIN_SEMANTICS=INFRA04_IMPLEMENTATION_BASELINE
ACTIVE_BASELINE=PHASE0_BASELINE_FROZEN_PLUS_ADR002
APPROVED_BASELINES=RN00_REV1;RN01_REV2_1;RN021_REV1;RN022_REV1;RN023_REV2;RN024_REV3;RN025_REV1_PLUS_ERRATA;RN026_REV1_PLUS_ERRATA;RN027_REV1;ADR002_POST_MVP01
INFRA04_SELECTION_HUMAN_GATE=APPROVED_OPTION_A
INFRA04_SEQUENCE_HUMAN_GATE=APPROVED_R1_TO_R7_WITH_PROVIDER_MUTATION_BLOCKED
INFRA04_R1_STATUS=READONLY_RECONCILIATION_COMPLETED_NO_CURRENT_VERCEL_PROJECT_EVIDENCE
INFRA04_R2_DECISION=OPTION_C_KEEP_POTIGUARBD_INACTIVE_BUILD_LOCAL_FIRST
INFRA04_R3_R4_HUMAN_GATE=AUTHORIZED_LOCAL_REPOSITORY_ONLY
INFRA04_R3_STATUS=IMPLEMENTATION_IN_PROGRESS
INFRA04_R4_STATUS=IMPLEMENTATION_IN_PROGRESS
INFRA04_DOC_AUDIT_PR=31_OPEN_DRAFT_UNMERGED
INFRA04_IMPLEMENTATION_PR=32_OPEN_DRAFT_UNMERGED
INFRA04_SUPABASE_PROJECT=potiguarbd
INFRA04_SUPABASE_STATUS=INACTIVE
INFRA04_REMOTE_PROVIDER_MUTATION=NONE_AUTHORIZED_NONE_EXECUTED
INFRA04_ENVIRONMENT_CONTRACT=IMPLEMENTING_NEXT_PUBLIC_SUPABASE_URL_AND_PUBLISHABLE_KEY
INFRA04_LOCAL_SUPABASE=IMPLEMENTING_PINNED_CLI_2_111_0_AND_CONFIG_TOML
INFRA04_BACKUP_RESTORE=NOT_PROVEN_R5_PENDING
INFRA04_PRODUCTION_CONFIRMED=NO
REVIEW_DECISION=IMPLEMENTATION_IN_PROGRESS_AWAITING_GREEN_VALIDATION
GITHUB_LINEAR_SYNC=PASS_INFRA04_R2_AND_R3_R4_GATES_RECORDED_WITH_ISSUE30_LINEAR_FALLBACK
IMPLEMENTATION_AUTHORIZED=YES_R3_R4_LOCAL_REPOSITORY_ONLY
DOMAIN_SQL_AUTHORIZED=NO_NEW_DOMAIN_SQL
LOCAL_MIGRATION_REPLAY_AUTHORIZED=YES_EXISTING_MIGRATIONS_ONLY
DATA_CHANGE_AUTHORIZED=NO_REMOTE_DATA_AND_NO_REAL_DATA
SUPABASE_CHANGE_AUTHORIZED=NO_REMOTE_PROVIDER_CHANGE_LOCAL_STACK_ONLY
VERCEL_CHANGE_AUTHORIZED=NO
PRODUCTION_CHANGE_AUTHORIZED=NO
COST_CHANGE_AUTHORIZED=NO
MERGE_AUTHORIZED=NO_FOR_PR31_AND_PR32_UNTIL_EXPLICIT_HUMAN_GATE
BLOCKERS=R3_R4_GREEN_VALIDATION_AND_INFRA04_HIGH_FINDINGS_BEFORE_PRODUCTION_OR_CRITICAL_DATA_EXPANSION
KNOWN_PENDING=R3_R4_VALIDATION;R5_BACKUP_RESTORE;R6_CICD_ROLLBACK;R7_OBSERVABILITY;PRODUCTION_NOT_CONFIRMED
NEXT_AUTHORIZED_ACTION=COMPLETE_R3_R4_LOCAL_IMPLEMENTATION_AND_VALIDATE_EXACT_PR32_HEAD
```

## Identidade e autoridade

- Produto: PredixAI Operations.
- Primeiro módulo operacional: Almoxarifado Inteligente.
- GitHub é a fonte documental e técnica oficial.
- Linear é o controle operacional; quando o workspace impedir nova issue, o fallback GitHub deve ser registrado no Linear existente.
- Estado volátil de branch, PR, Issue, CI, provider e deploy deve ser verificado ao vivo.

Ordem de precedência:

1. código e arquivos reais da branch padrão;
2. este `PROJECT_STATE.md`;
3. regra, plano ou missão ativa;
4. baselines normativas aprovadas;
5. Linear ou fallback operacional auditável;
6. resumos/histórico;
7. contexto do chat.

## Fase 0 — encerramento formal

A Fase 0 — Concepção e Modelagem do Domínio está formalmente encerrada pelo GOV-03.

Baselines congeladas:

- RN-00 REV1;
- RN-01 REV2.1;
- RN-02.1 REV1;
- RN-02.2 REV1;
- RN-02.3 REV2;
- RN-02.4 REV3;
- RN-02.5 REV1 + errata;
- RN-02.6 REV1 + errata;
- RN-02.7 REV1;
- ADR-002 — Arquitetura Vigente Pós-MVP-01.

A conclusão normativa de um domínio não significa que sua funcionalidade esteja implementada.

## MVP-01 — estado materializado

```text
MVP01_ISSUE=17
MVP01_PR=18
MVP01_MAIN_COMMIT=5dfb29d345d30a32eac0da70ee1b94d9dd6127f8
MVP01_STATUS=MERGED_UAT_DESKTOP_AND_MOBILE_PASS
SUPABASE_PROJECT=potiguarbd
SUPABASE_PROJECT_REF=gotzykqvpgjzmzsyvufx
SUPABASE_REGION=sa-east-1
PRODUCTION_PROMOTION_AUTHORIZED=YES_HISTORICAL
PRODUCTION_PROMOTION_CONFIRMED=NO_CURRENT_PROVIDER_EVIDENCE
```

Materializado: autenticação, perfis básicos, materiais, entradas, saídas, saldo, estoque mínimo, histórico, RLS/funções/migrations do escopo e interface responsiva.

## INFRA-04 — Fase 1 residual

Leandro selecionou explicitamente a Fase 1 residual e aprovou a sequência R1→R7.

Controle operacional:

- GitHub Issue #30;
- fallback Linear na LEA-121;
- PR #31 — auditoria/documentação, Draft, não mesclado;
- PR #32 — implementação R3/R4 local, Draft, não mesclado.

### R1 — Vercel somente leitura

Resultado observado:

- equipe conectada `PREDIX AI BR`;
- 0 projetos listados;
- Project ID histórico do produto retorna 404;
- slug `predixai-operations` retorna 404;
- GitHub Deployments do repositório = 0.

Conclusão segura: não existe evidência técnica atual para tratar Preview ou Production Vercel como acessíveis/existentes na conexão corrente. Isso não prova deleção definitiva.

### R2 — decisão humana

Leandro aprovou a Opção C:

- manter `potiguarbd` `INACTIVE`;
- não pausar `screen-assistant-saas`;
- não pausar `estoque-mercearia`;
- não restaurar `potiguarbd` nesta etapa;
- não alterar plano/custo;
- construir primeiro a base LOCAL isolada.

### R3/R4 — autorização atual

Autorizado exclusivamente no repositório/local:

- substituir URL/chave hardcoded por contrato de variáveis de ambiente;
- usar `NEXT_PUBLIC_SUPABASE_URL`;
- usar `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`;
- criar `.env.example` sem credenciais reais;
- criar `supabase/config.toml` local e sem vínculo remoto;
- fixar launcher local da Supabase CLI;
- reproduzir localmente somente as migrations já versionadas;
- adicionar testes/validações do contrato de ambiente;
- documentação de operação local.

Continuam bloqueados:

- Vercel remoto;
- Supabase remoto;
- pause/restore de projeto;
- mudança de plano/custo;
- deploy/promoção;
- produção;
- dados reais;
- SQL de domínio novo;
- migration de domínio nova;
- RLS/Auth remoto;
- operação destrutiva remota.

## TDD R3/R4

O contrato foi criado antes da implementação em `scripts/test-env-contract.mjs` e integrado ao workflow `Dependency Security`.

RED comprovado:

- run `32008551385`: FAILURE no passo `Validate environment contract`;
- run `32008652980`: FAILURE após alinhamento da variável para `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`;
- falha esperada causada pelo hardcode e pela ausência da configuração local antes do GREEN.

GREEN ainda precisa ser comprovado no HEAD final de implementação antes de qualquer decisão de merge.

## Arquitetura vigente

A arquitetura de produto permanece Next.js + TypeScript + Supabase, com Vercel historicamente usada, mas sem produção atual tecnicamente comprovada.

A INFRA-04 adiciona uma camada de desenvolvimento local isolado. Isso não promove o ambiente local a produção e não altera o papel remoto de `potiguarbd`.

## Próxima ação canônica

Completar o GREEN R3/R4, executar validação fresca de teste, build, segurança, diff, migrations preservadas e threads do PR #32. Somente após isso pode ser solicitado HUMAN_GATE de merge ou próximo gate INFRA-04.
