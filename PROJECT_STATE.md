# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=1.2.5
UPDATED_AT_UTC=2026-08-17T09:08:35Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_1_RESIDUAL_INFRAESTRUTURA
PHASE0_EXIT_STATUS=COMPLETED_GOV03_MERGED_AND_VERIFIED
DELIVERY_TRACK=MVP_01_ACCELERATED_IMPLEMENTATION_MERGED
ACTIVE_TASK=INFRA_04_R3_R4_LOCAL_IMPLEMENTATION
PRIMARY_ACTIVE_TASK=INFRA_04
PRIMARY_ACTIVE_SUBTASK=R3_R4_PASS_F10_REMEDIATED_PENDING_FINAL_HEAD_RETEST
GOVERNANCE_ACTIVE_TASK=NONE
CONTROL_GITHUB_ISSUE=30
ACTIVE_PR=32
ACTIVE_BRANCH=feat/infra-04-local-env-isolation
ACTIVE_HEAD_SHA=RESOLVE_FROM_PR_METADATA
LAST_VERIFIED_HEAD=f2bec2275f7e02e6dbc6a3efd7605a8bf6cbe74c
LAST_VERIFIED_HEAD_SEMANTICS=F10_TDD_GREEN_FULL_CI_PASS_BEFORE_FINAL_STATE_SYNC
LAST_VERIFIED_MAIN=5260caeea80471c9c9be9c74795a57e8fafc8851
LAST_VERIFIED_MAIN_SEMANTICS=INFRA04_IMPLEMENTATION_BASELINE
ACTIVE_BASELINE=PHASE0_BASELINE_FROZEN_PLUS_ADR002
APPROVED_BASELINES=RN00_REV1;RN01_REV2_1;RN021_REV1;RN022_REV1;RN023_REV2;RN024_REV3;RN025_REV1_PLUS_ERRATA;RN026_REV1_PLUS_ERRATA;RN027_REV1;ADR002_POST_MVP01
INFRA04_SELECTION_HUMAN_GATE=APPROVED_OPTION_A
INFRA04_SEQUENCE_HUMAN_GATE=APPROVED_R1_TO_R7_WITH_PROVIDER_MUTATION_BLOCKED
INFRA04_R1_STATUS=READONLY_RECONCILIATION_COMPLETED_NO_CURRENT_VERCEL_PROJECT_EVIDENCE
INFRA04_R2_DECISION=OPTION_C_KEEP_POTIGUARBD_INACTIVE_BUILD_LOCAL_FIRST
INFRA04_R3_R4_HUMAN_GATE=AUTHORIZED_LOCAL_REPOSITORY_ONLY
INFRA04_F10_HUMAN_GATE=APPROVED_OPTION_A_MINIMAL_COMPATIBILITY_BASELINE_LOCAL_ONLY
INFRA04_R3_STATUS=PASS_IMPLEMENTED_AND_VALIDATED
INFRA04_R4_STATUS=PASS_LOCAL_REPRODUCIBILITY_VALIDATED_ON_SUBSTANTIVE_HEAD
INFRA04_FINDINGS=INFRA_04_F01_TO_F10
INFRA04_F10=REMEDIATED_MINIMAL_SCHEMA_BASELINE_VERSIONED_LOCAL_ONLY
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
INFRA04_F10_RED_RUN=32013264506
INFRA04_F10_GREEN_RUN=32013369612
INFRA04_F10_GREEN_ARTIFACT=9282661880
INFRA04_F10_GREEN_ARTIFACT_DIGEST=sha256:b37b5e352416a3fbb0ac724902dce368b7ea8c0fd70212249f6a89c2b3ef89c9
INFRA04_BACKUP_RESTORE=NOT_PROVEN_R5_PENDING
INFRA04_PRODUCTION_CONFIRMED=NO
REVIEW_DECISION=PENDING_FINAL_HEAD_RETEST_AFTER_F10_STATE_SYNC_NO_MERGE
GITHUB_LINEAR_SYNC=PENDING_F10_FINAL_EVIDENCE_AFTER_FINAL_RETEST
IMPLEMENTATION_AUTHORIZED=YES_R3_R4_F10_LOCAL_REPOSITORY_ONLY
DOMAIN_SQL_AUTHORIZED=YES_F10_MINIMAL_INITIAL_SCHEMA_MIGRATION_ONLY_NO_OTHER_DOMAIN_SQL
LOCAL_MIGRATION_REPLAY_AUTHORIZED=YES_VERSIONED_CHAIN_LOCAL_ONLY
INITIAL_SCHEMA_MIGRATION_AUTHORIZED=YES_F10_MINIMAL_BASELINE_LOCAL_ONLY
DATA_CHANGE_AUTHORIZED=NO_REMOTE_DATA_AND_NO_REAL_DATA
SUPABASE_CHANGE_AUTHORIZED=NO_REMOTE_PROVIDER_CHANGE_LOCAL_STACK_ONLY
VERCEL_CHANGE_AUTHORIZED=NO
PRODUCTION_CHANGE_AUTHORIZED=NO
COST_CHANGE_AUTHORIZED=NO
MERGE_AUTHORIZED=NO_FOR_PR31_AND_PR32_UNTIL_EXPLICIT_HUMAN_GATE
BLOCKERS=NONE_FOR_R4_TECHNICAL_REPRODUCIBILITY_FINAL_HEAD_RETEST_PENDING
KNOWN_PENDING=FINAL_PR32_HEAD_RETEST;R5_BACKUP_RESTORE;R6_CICD_ROLLBACK;R7_OBSERVABILITY;PRODUCTION_NOT_CONFIRMED
NEXT_AUTHORIZED_ACTION=RUN_FINAL_RETEST_AND_REVIEW_EXACT_PR32_HEAD
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
- PR #32 — implementação local R3/R4/F10, Draft, não mesclado.

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

Estado R3: `PASS_IMPLEMENTED_AND_VALIDATED`, ainda não integrado ao `main`.

### R4 — Supabase local isolado

Materializado na branch:

- `supabase/config.toml` com `project_id=predixai-operations-local` e endpoints locais;
- seed desabilitado;
- launcher `scripts/supabase-local.mjs` fixado em Supabase CLI `2.111.0`;
- launcher disponibiliza somente `start`, `status`, `db reset --local` e `stop`;
- documentação local em `docs/infra/INFRA-04-DESENVOLVIMENTO-LOCAL.md`.

### INFRA-04-F10 — migration-base inicial

A falha original de R4 foi reproduzida no CI com `SQLSTATE 42P01` porque a primeira migration histórica era incremental e pressupunha `inventory_items`, `inventory_moves` e `sectors` já existentes.

Leandro aprovou a **Opção A — baseline mínima de compatibilidade**, limitada ao repositório/local, sem consultar ou alterar providers remotos e sem dados reais.

Ciclo TDD:

1. `scripts/test-migration-baseline.mjs` foi criado antes do SQL;
2. CI RED `32013264506` falhou exatamente pela ausência de `20260803140000_mvp_inventory_schema_base.sql`;
3. foi criada somente a migration-base mínima do schema já materializado pelo MVP;
4. as migrations históricas `20260803143000_mvp_inventory_online.sql` e `20260803145000_mvp_inventory_member_access.sql` não foram reescritas;
5. CI GREEN `32013369612` passou por lockfile, contratos, dependency/security gate, build e `db reset --local` completo;
6. artefato `9282661880`, digest `sha256:b37b5e352416a3fbb0ac724902dce368b7ea8c0fd70212249f6a89c2b3ef89c9`.

A migration-base cria somente:

- `public.sectors`;
- `public.inventory_items`;
- `public.inventory_moves`;
- relacionamentos mínimos já exigidos pelo MVP.

Ela não materializa o modelo completo RN-02.1–RN-02.5 e não duplica autoria, RLS, funções, saldo ou membros das migrations subsequentes.

Estado substantivo de R4/F10: `PASS_LOCAL_REPRODUCIBILITY_VALIDATED_ON_SUBSTANTIVE_HEAD`.

A sincronização deste `PROJECT_STATE.md` exige novo reteste do HEAD exato antes de qualquer decisão final.

## Limites vigentes

Continuam não autorizados:

- qualquer mutação no Supabase remoto;
- restore/pause de `potiguarbd` ou outros projetos;
- alteração Vercel;
- plano/custo;
- deploy/produção;
- dados reais;
- qualquer SQL/migration além da migration-base mínima F10 já autorizada;
- mudança RLS/Auth remota;
- operação destrutiva remota;
- merge dos PRs #31 e #32.

## Próxima ação canônica

Executar reteste final e revisão do HEAD exato do PR #32. Merge permanece sujeito a HUMAN_GATE separado de Leandro.
