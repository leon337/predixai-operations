# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=1.2.2
UPDATED_AT_UTC=2026-08-17T07:50:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_1_RESIDUAL_INFRAESTRUTURA
PHASE0_EXIT_STATUS=COMPLETED_GOV03_MERGED_AND_VERIFIED
DELIVERY_TRACK=MVP_01_ACCELERATED_IMPLEMENTATION_MERGED
ACTIVE_TASK=INFRA_04_REMEDIATION_GATING
PRIMARY_ACTIVE_TASK=INFRA_04_REMEDIATION_GATING
PRIMARY_ACTIVE_SUBTASK=R2_OPTION_C_APPROVED_AWAITING_R3_R4_IMPLEMENTATION_GATE
GOVERNANCE_ACTIVE_TASK=NONE
CONTROL_GITHUB_ISSUE=30
ACTIVE_PR=31
ACTIVE_BRANCH=docs/infra-04-readonly-audit
ACTIVE_HEAD_SHA=RESOLVE_FROM_PR_METADATA
LAST_VERIFIED_HEAD=5afa469324c65b8f5daf1bef1b68540c148ea96e
LAST_VERIFIED_HEAD_SEMANTICS=INFRA04_AUDIT_HEAD_BEFORE_R2_STATE_COMMIT
LAST_VERIFIED_MAIN=5260caeea80471c9c9be9c74795a57e8fafc8851
LAST_VERIFIED_MAIN_SEMANTICS=INFRA04_ENTRY_BASELINE
ACTIVE_BASELINE=PHASE0_BASELINE_FROZEN_PLUS_ADR002
APPROVED_BASELINES=RN00_REV1;RN01_REV2_1;RN021_REV1;RN022_REV1;RN023_REV2;RN024_REV3;RN025_REV1_PLUS_ERRATA;RN026_REV1_PLUS_ERRATA;RN027_REV1;ADR002_POST_MVP01
INFRA04_SELECTION_HUMAN_GATE=APPROVED_OPTION_A
INFRA04_REMEDIATION_SEQUENCE=R1_TO_R7_APPROVED_WITHOUT_PROVIDER_MUTATION
INFRA04_R1_STATUS=READONLY_RECONCILIATION_COMPLETE_NO_CURRENT_VERCEL_EVIDENCE
INFRA04_R2_DECISION=OPTION_C_KEEP_POTIGUARBD_INACTIVE_BUILD_LOCAL_FIRST
INFRA04_CONTROL=GITHUB_ISSUE_30_LINEAR_LIMIT_FALLBACK_RECORDED_IN_LEA121
INFRA04_AUDIT_DOCUMENT=docs/infra/INFRA-04-AUDITORIA-READONLY-2026-08-17.md
INFRA04_FINDINGS=INFRA_04_F01_TO_F09
INFRA04_AUDIT_STATUS=PASS_WITH_REMEDIATION_REQUIRED
INFRA04_VERCEL_PROJECT=NOT_ACCESSIBLE_OR_DISCOVERABLE_IN_CURRENT_CONNECTION
INFRA04_GITHUB_DEPLOYMENTS=ZERO
INFRA04_SUPABASE_PROJECT=potiguarbd
INFRA04_SUPABASE_STATUS=INACTIVE_KEEP_INACTIVE_PER_R2_OPTION_C
INFRA04_SUPABASE_PLAN=FREE
INFRA04_ENVIRONMENT_ISOLATION=NOT_IMPLEMENTED
INFRA04_BACKUP_RESTORE=NOT_PROVEN
INFRA04_PRODUCTION_CONFIRMED=NO
REVIEW_DECISION=PASS_WITH_REMEDIATION_REQUIRED_SEQUENCE_AND_R2_APPROVED
GITHUB_LINEAR_SYNC=PASS_FALLBACK_ISSUE30_RECORDED_IN_LEA121
IMPLEMENTATION_AUTHORIZED=NO_R3_R4_IMPLEMENTATION_AWAITING_EXPLICIT_HUMAN_GATE
DOMAIN_SQL_AUTHORIZED=NO_NEW_DOMAIN_SQL
DATA_CHANGE_AUTHORIZED=NO
SUPABASE_CHANGE_AUTHORIZED=NO_REMOTE_PROVIDER_CHANGE
VERCEL_CHANGE_AUTHORIZED=NO
PRODUCTION_CHANGE_AUTHORIZED=NO
COST_CHANGE_AUTHORIZED=NO
MERGE_AUTHORIZED=NO_FOR_PR31_UNTIL_EXPLICIT_HUMAN_GATE
BLOCKERS=R3_R4_IMPLEMENTATION_GATE_AND_INFRA04_HIGH_FINDINGS_BEFORE_CRITICAL_DATA_EXPANSION_OR_PRODUCTION
KNOWN_PENDING=R3_R4_LOCAL_IMPLEMENTATION_GATE;R5_R7_LATER_GATES;PRODUCTION_NOT_CONFIRMED
NEXT_AUTHORIZED_ACTION=REQUEST_EXPLICIT_R3_R4_LOCAL_REPOSITORY_IMPLEMENTATION_GATE
```

## Identidade e autoridade

- Produto: PredixAI Operations.
- Primeiro módulo operacional: Almoxarifado Inteligente.
- GitHub é a fonte documental e técnica oficial.
- Linear é o controle operacional; quando o workspace impedir nova issue, GitHub Issue/PR controla o ciclo com evidência registrada em uma issue Linear relacionada.
- Estado volátil de branch, PR, Issue, CI, provider e deploy deve ser verificado ao vivo.

Ordem de precedência:

1. código e arquivos reais da branch padrão;
2. este `PROJECT_STATE.md`;
3. regra, plano ou missão ativa;
4. baselines normativas aprovadas;
5. Linear ou fallback operacional auditável;
6. resumos/histórico;
7. contexto do chat.

## Fase 0 — baseline congelada

A Fase 0 foi formalmente encerrada pelo GOV-03 e saneada pelo PR #29.

Baselines aprovadas: RN-00 REV1; RN-01 REV2.1; RN-02.1 REV1; RN-02.2 REV1; RN-02.3 REV2; RN-02.4 REV3; RN-02.5 REV1 + errata; RN-02.6 REV1 + errata; RN-02.7 REV1; ADR-002.

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

Leandro selecionou explicitamente a Fase 1 residual / INFRA-04 e aprovou a sequência R1→R7 sem mutação de providers.

Controle:

- GitHub Issue #30;
- branch `docs/infra-04-readonly-audit`;
- PR Draft #31;
- fallback Linear registrado na LEA-121;
- relatório `docs/infra/INFRA-04-AUDITORIA-READONLY-2026-08-17.md`.

### R1 — reconciliação Vercel em leitura

Resultado:

- equipe conectada: `PREDIX AI BR`;
- listagem atual: 0 projetos;
- Project ID histórico: 404;
- slug `predixai-operations`: 404;
- GitHub Deployments do repositório: 0 registros.

Conclusão segura: não existe evidência técnica atual que permita tratar Preview ou Production Vercel do produto como acessíveis/existentes na conexão corrente. Isso não prova deleção definitiva.

### R2 — decisão de capacidade e recuperação

Leandro aprovou a **Opção C**:

- manter `potiguarbd` `INACTIVE`;
- não pausar `screen-assistant-saas`;
- não pausar `estoque-mercearia`;
- não restaurar `potiguarbd` nesta etapa;
- não alterar plano ou custo;
- preparar primeiro o ambiente LOCAL isolado.

Essa decisão não autoriza implementação de R3/R4 por si só.

### R3/R4 — próximo gate proposto

O próximo HUMAN_GATE deve ser específico para implementação somente no repositório/local:

- substituir URL/chave publishable hardcoded por contrato de variáveis de ambiente;
- criar `.env.example` apenas com nomes/placeholders, sem segredos;
- materializar configuração de desenvolvimento Supabase local/isolado;
- usar somente as migrations já existentes no sandbox local para reproduzir o MVP;
- permitir seed somente não sensível, se tecnicamente necessário e versionado;
- adicionar validações/testes necessários ao contrato de ambiente.

Continuam fora desse gate e exigem autorizações próprias:

- qualquer mudança em Vercel;
- pause/restore/criação/alteração de Supabase remoto;
- mudança de plano/custo;
- deploy ou promoção;
- produção;
- dados reais;
- SQL de domínio novo;
- migration de domínio nova;
- mudança de RLS/Auth remoto;
- operação destrutiva.

## Achados INFRA-04 ainda abertos

- F01 HIGH — projeto Vercel atual não acessível/descoberto;
- F02 HIGH — `potiguarbd` inativo, agora mantido assim deliberadamente por R2=C;
- F03 HIGH — builds acoplados ao mesmo backend por hardcode;
- F04 HIGH — backup/restore não comprovado;
- F05 HIGH — capacidade Free ativa ocupada;
- F06 MEDIUM — contrato de variáveis não versionado;
- F07 MEDIUM — CI/CD sem deploy/smoke/rollback;
- F08 MEDIUM/HIGH — observabilidade insuficiente e produção não comprovada;
- F09 MEDIUM — nenhum ambiente Preview remoto isolado comprovado.

## Próxima ação canônica

Solicitar autorização explícita para **R3/R4 — implementação local/repositório**, mantendo todos os providers remotos sem mutação.