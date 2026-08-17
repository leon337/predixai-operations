# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=1.2.4
UPDATED_AT_UTC=2026-08-17T08:17:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_1_RESIDUAL_INFRAESTRUTURA
PHASE0_EXIT_STATUS=COMPLETED_GOV03_MERGED_AND_VERIFIED
DELIVERY_TRACK=MVP_01_ACCELERATED_IMPLEMENTATION_MERGED
ACTIVE_TASK=INFRA_04_R3_R4_LOCAL_IMPLEMENTATION
PRIMARY_ACTIVE_TASK=INFRA_04
PRIMARY_ACTIVE_SUBTASK=R3_PASS_R4_BLOCKED_SCHEMA_BASELINE
GOVERNANCE_ACTIVE_TASK=NONE
CONTROL_GITHUB_ISSUE=30
ACTIVE_PR=32
ACTIVE_BRANCH=feat/infra-04-local-env-isolation
ACTIVE_HEAD_SHA=RESOLVE_FROM_PR_METADATA
LAST_VERIFIED_HEAD=824a83ef403fd36c1bbc9333ef074b9af5b68338
LAST_VERIFIED_HEAD_SEMANTICS=R3_TEST_SECURITY_BUILD_PASS_R4_REPRODUCIBILITY_BLOCKED_BY_F10
LAST_VERIFIED_MAIN=5260caeea80471c9c9be9c74795a57e8fafc8851
LAST_VERIFIED_MAIN_SEMANTICS=INFRA04_IMPLEMENTATION_BASELINE
ACTIVE_BASELINE=PHASE0_BASELINE_FROZEN_PLUS_ADR002
APPROVED_BASELINES=RN00_REV1;RN01_REV2_1;RN021_REV1;RN022_REV1;RN023_REV2;RN024_REV3;RN025_REV1_PLUS_ERRATA;RN026_REV1_PLUS_ERRATA;RN027_REV1;ADR002_POST_MVP01
INFRA04_SELECTION_HUMAN_GATE=APPROVED_OPTION_A
INFRA04_SEQUENCE_HUMAN_GATE=APPROVED_R1_TO_R7_WITH_PROVIDER_MUTATION_BLOCKED
INFRA04_R1_STATUS=READONLY_RECONCILIATION_COMPLETED_NO_CURRENT_VERCEL_PROJECT_EVIDENCE
INFRA04_R2_DECISION=OPTION_C_KEEP_POTIGUARBD_INACTIVE_BUILD_LOCAL_FIRST
INFRA04_R3_R4_HUMAN_GATE=AUTHORIZED_LOCAL_REPOSITORY_ONLY
INFRA04_R3_STATUS=PASS_IMPLEMENTED_AND_VALIDATED
INFRA04_R4_STATUS=BLOCKED_INFRA04_F10_MISSING_INITIAL_SCHEMA_MIGRATION
INFRA04_FINDINGS=INFRA_04_F01_TO_F10
INFRA04_F10=HIGH_MIGRATIONS_INCREMENTAL_SCHEMA_BASELINE_NOT_VERSIONED
INFRA04_DOC_AUDIT_PR=31_OPEN_DRAFT_UNMERGED
INFRA04_IMPLEMENTATION_PR=32_OPEN_DRAFT_UNMERGED
INFRA04_SUPABASE_PROJECT=potiguarbd
INFRA04_SUPABASE_STATUS=INACTIVE
INFRA04_REMOTE_PROVIDER_MUTATION=NONE_AUTHORIZED_NONE_EXECUTED
INFRA04_ENVIRONMENT_CONTRACT=PASS_NEXT_PUBLIC_SUPABASE_URL_AND_PUBLISHABLE_KEY_NO_REMOTE_HARDCODE
INFRA04_LOCAL_SUPABASE=CONFIG_AND_LAUNCHER_IMPLEMENTED_CLI_2_111_0
INFRA04_R3_VALIDATION_RUN=32009420428
INFRA04_R4_BLOCKING_RUN=32009174273
INFRA04_R4_BLOCKING_ERROR=SQLSTATE_42P01_PUBLIC_INVENTORY_ITEMS_DOES_NOT_EXIST
INFRA04_BACKUP_RESTORE=NOT_PROVEN_R5_PENDING
INFRA04_PRODUCTION_CONFIRMED=NO
REVIEW_DECISION=PARTIAL_PASS_R3_R4_BLOCKED_F10_NO_MERGE
GITHUB_LINEAR_SYNC=PASS_INFRA04_R3_R4_GATE_AND_F10_RECORDED_ISSUE30_AND_LEA121
IMPLEMENTATION_AUTHORIZED=YES_R3_R4_LOCAL_REPOSITORY_ONLY_NO_SCHEMA_BASELINE_SQL
DOMAIN_SQL_AUTHORIZED=NO_NEW_DOMAIN_SQL
LOCAL_MIGRATION_REPLAY_AUTHORIZED=YES_EXISTING_MIGRATIONS_ONLY
INITIAL_SCHEMA_MIGRATION_AUTHORIZED=NO
DATA_CHANGE_AUTHORIZED=NO_REMOTE_DATA_AND_NO_REAL_DATA
SUPABASE_CHANGE_AUTHORIZED=NO_REMOTE_PROVIDER_CHANGE_LOCAL_STACK_ONLY
VERCEL_CHANGE_AUTHORIZED=NO
PRODUCTION_CHANGE_AUTHORIZED=NO
COST_CHANGE_AUTHORIZED=NO
MERGE_AUTHORIZED=NO_FOR_PR31_AND_PR32_UNTIL_EXPLICIT_HUMAN_GATE
BLOCKERS=INFRA04_F10_MISSING_INITIAL_SCHEMA_MIGRATION_BLOCKS_R4
KNOWN_PENDING=R4_SCHEMA_BASELINE;R5_BACKUP_RESTORE;R6_CICD_ROLLBACK;R7_OBSERVABILITY;PRODUCTION_NOT_CONFIRMED
NEXT_AUTHORIZED_ACTION=REQUEST_HUMAN_GATE_FOR_INFRA04_F10_CONTROLLED_LOCAL_SCHEMA_BASELINE_RECONSTRUCTION
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

## Fase 0 — estado congelado

A Fase 0 está formalmente encerrada pelo GOV-03. Permanecem congeladas RN-00 a RN-02.7 e ADR-002. Conclusão normativa não equivale a implementação automática.

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

## INFRA-04 — Fase 1 residual

Controle:

- GitHub Issue #30;
- fallback Linear na LEA-121;
- PR #31 — auditoria/documentação, Draft, não mesclado;
- PR #32 — implementação local R3/R4, Draft, não mesclado.

### R1 — Vercel somente leitura

Concluído no limite da conexão atual: equipe `PREDIX AI BR` com 0 projetos listados, Project ID histórico e slug do produto em 404 e 0 GitHub Deployments. Isso não prova deleção definitiva.

### R2 — decisão C

Leandro aprovou manter `potiguarbd` INACTIVE, sem pausar outros projetos e sem alterar plano/custo, priorizando ambiente local isolado.

### R3 — contrato de ambiente

Implementado na branch PR #32:

- URL remota hardcoded removida do frontend;
- JWT/anon legado hardcoded removido;
- `NEXT_PUBLIC_SUPABASE_URL`;
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`;
- chave publishable enviada em `apikey`;
- `Authorization: Bearer` usado somente quando existe JWT de usuário;
- `.env.example` aponta por padrão para `http://127.0.0.1:54321` e não contém ref remoto;
- teste de contrato integrado ao CI.

TDD:

- `32008551385` — RED esperado antes da implementação;
- `32008652980` — RED esperado após alinhar nomenclatura final da publishable key;
- falso positivo posterior do teste foi identificado e corrigido de forma auditável;
- `32009420428` — contrato, lockfile, dependency/security gate e build em PASS antes do check de R4.

Estado R3: `PASS_IMPLEMENTED_AND_VALIDATED`, ainda não integrado ao `main`.

### R4 — Supabase local isolado

Materializado na branch:

- `supabase/config.toml` com `project_id=predixai-operations-local` e endpoints locais;
- seed desabilitado;
- launcher `scripts/supabase-local.mjs` fixado em Supabase CLI `2.111.0`;
- launcher disponibiliza somente `start`, `status`, `db reset --local` e `stop`;
- documentação local em `docs/infra/INFRA-04-DESENVOLVIMENTO-LOCAL.md`.

#### INFRA-04-F10 — HIGH

O CI conseguiu iniciar a stack local e começou a aplicar as migrations existentes, mas a primeira migration falhou em:

```text
alter table public.inventory_items
```

com:

```text
SQLSTATE 42P01: relation public.inventory_items does not exist
```

Causa raiz confirmada:

- `20260803143000_mvp_inventory_online.sql` é incremental e pressupõe `inventory_items`, `inventory_moves` e `sectors` já existentes;
- `20260803145000_mvp_inventory_member_access.sql` cria `operations_members`, porém também pressupõe o schema anterior;
- não existe no conjunto atual de migrations uma migration inicial que crie esse schema-base.

Logo, o repositório ainda não consegue reconstruir o banco do zero somente com as migrations existentes.

O gate R3/R4 vigente proíbe criar migration-base ou alterar SQL de domínio. F10 não será remediado silenciosamente.

Estado R4: `BLOCKED_INFRA04_F10_MISSING_INITIAL_SCHEMA_MIGRATION`.

## Limites vigentes

Continuam não autorizados:

- qualquer mutação no Supabase remoto;
- restore/pause de `potiguarbd` ou outros projetos;
- alteração Vercel;
- plano/custo;
- deploy/produção;
- dados reais;
- nova migration de domínio, inclusive migration-base inicial;
- mudança RLS/Auth remota;
- operação destrutiva remota;
- merge dos PRs #31 e #32.

## Próxima ação canônica

Solicitar HUMAN_GATE específico para **INFRA-04-F10 — reconstrução controlada da migration-base inicial exclusivamente no repositório/local**, derivada das baselines aprovadas e do schema esperado pelo MVP, sem consultar ou alterar providers remotos e sem dados reais.
