# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=1.2.1
UPDATED_AT_UTC=2026-08-17T07:33:17Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_1_RESIDUAL_INFRAESTRUTURA
PHASE0_EXIT_STATUS=COMPLETED_GOV03_MERGED_AND_VERIFIED
DELIVERY_TRACK=MVP_01_ACCELERATED_IMPLEMENTATION_MERGED
ACTIVE_TASK=INFRA_04_READONLY_AUDIT
PRIMARY_ACTIVE_TASK=INFRA_04_READONLY_AUDIT
PRIMARY_ACTIVE_SUBTASK=ENVIRONMENT_RECOVERY_OPERATIONAL_AUDIT
GOVERNANCE_ACTIVE_TASK=NONE
CONTROL_GITHUB_ISSUE=30
ACTIVE_PR=31
ACTIVE_BRANCH=docs/infra-04-readonly-audit
ACTIVE_HEAD_SHA=RESOLVE_FROM_PR_METADATA
LAST_VERIFIED_MAIN=5260caeea80471c9c9be9c74795a57e8fafc8851
LAST_VERIFIED_MAIN_SEMANTICS=INFRA04_ENTRY_BASELINE
ACTIVE_BASELINE=PHASE0_BASELINE_FROZEN_PLUS_ADR002
APPROVED_BASELINES=RN00_REV1;RN01_REV2_1;RN021_REV1;RN022_REV1;RN023_REV2;RN024_REV3;RN025_REV1_PLUS_ERRATA;RN026_REV1_PLUS_ERRATA;RN027_REV1;ADR002_POST_MVP01
INFRA04_SELECTION_HUMAN_GATE=APPROVED_OPTION_A
INFRA04_CONTROL=GITHUB_ISSUE_30_LINEAR_LIMIT_FALLBACK_RECORDED_IN_LEA121
INFRA04_AUDIT_DOCUMENT=docs/infra/INFRA-04-AUDITORIA-READONLY-2026-08-17.md
INFRA04_FINDINGS=INFRA_04_F01_TO_F09
INFRA04_AUDIT_STATUS=PASS_WITH_REMEDIATION_REQUIRED
INFRA04_VERCEL_PROJECT=NOT_DISCOVERABLE_IN_CURRENT_CONNECTION
INFRA04_SUPABASE_PROJECT=potiguarbd
INFRA04_SUPABASE_STATUS=INACTIVE
INFRA04_SUPABASE_PLAN=FREE
INFRA04_ENVIRONMENT_ISOLATION=NOT_IMPLEMENTED
INFRA04_BACKUP_RESTORE=NOT_PROVEN
INFRA04_PRODUCTION_CONFIRMED=NO
REVIEW_DECISION=PASS_WITH_REMEDIATION_REQUIRED_AWAITING_SEQUENCE_APPROVAL
GITHUB_LINEAR_SYNC=PASS_FALLBACK_ISSUE30_RECORDED_IN_LEA121
IMPLEMENTATION_AUTHORIZED=NO_NEW_IMPLEMENTATION_INFRA04_AUDIT_ONLY
DOMAIN_SQL_AUTHORIZED=NO_NEW_DOMAIN_SQL
DATA_CHANGE_AUTHORIZED=NO
SUPABASE_CHANGE_AUTHORIZED=NO
VERCEL_CHANGE_AUTHORIZED=NO
PRODUCTION_CHANGE_AUTHORIZED=NO
COST_CHANGE_AUTHORIZED=NO
MERGE_AUTHORIZED=NO_FOR_PR31_UNTIL_EXPLICIT_HUMAN_GATE
BLOCKERS=INFRA04_HIGH_FINDINGS_BEFORE_CRITICAL_DATA_EXPANSION_OR_PRODUCTION
KNOWN_PENDING=INFRA04_REMEDIATION_SEQUENCE_APPROVAL_AND_PRODUCTION_NOT_CONFIRMED
NEXT_AUTHORIZED_ACTION=REVIEW_AND_APPROVE_INFRA04_REMEDIATION_SEQUENCE_WITHOUT_PROVIDER_MUTATION
```

## Identidade e autoridade

- Produto: PredixAI Operations.
- Primeiro módulo operacional: Almoxarifado Inteligente.
- GitHub é a fonte documental e técnica oficial.
- Linear é o controle operacional; quando o workspace impedir nova issue, o fallback GitHub deve ser registrado em uma issue Linear relacionada.
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

A Fase 0 — Concepção e Modelagem do Domínio foi formalmente encerrada pelo GOV-03.

Resumo auditável:

- GOV-03-F01 a F09 remediados;
- C01 a C20 PASS;
- ADR-002 integrada;
- PR #28 merged/verificado;
- Issue #27 `closed/completed`;
- saneamento pós-merge PR #29 merged/verificado;
- `main` após PR #29: `5260caeea80471c9c9be9c74795a57e8fafc8851`.

Baselines congeladas:

- RN-00 REV1;
- RN-01 REV2.1;
- RN-02.1 REV1;
- RN-02.2 REV1;
- RN-02.3 REV2;
- RN-02.4 REV3;
- RN-02.5 REV1 + errata LEA-58;
- RN-02.6 REV1 + errata LEA-64;
- RN-02.7 REV1;
- ADR-002 — Arquitetura Vigente Pós-MVP-01;
- políticas e histórico auditável da Fase 0.

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

Continuam fora desse escopo: patrimônio completo, manutenção implementada, obras/eventos/romaneios completos, transferências/inventário/ajustes completos, anexos/QR Code completos, relatórios avançados, IA operacional e modelo físico completo.

## INFRA-04 — Fase 1 residual

Leandro selecionou explicitamente a **Opção A — Fase 1 residual / INFRA-04**.

Controle:

- GitHub Issue #30;
- branch `docs/infra-04-readonly-audit`;
- PR Draft #31;
- fallback Linear registrado na LEA-121;
- relatório `docs/infra/INFRA-04-AUDITORIA-READONLY-2026-08-17.md`.

### Estado factual observado

Vercel:

- equipe conectada `PREDIX AI BR`;
- nenhum projeto do produto é descoberto pela conexão atual;
- project ID histórico e slug do produto retornam 404;
- não afirmar deleção definitiva sem evidência adicional.

Supabase:

- organização `leon337's Org` no plano Free;
- `potiguarbd` está `INACTIVE`;
- dois outros projetos estão `ACTIVE_HEALTHY` no inventário observado;
- `potiguarbd` não possui branches nem Edge Functions;
- logs recentes Auth/Postgres vazios;
- advisors atuais sem lints reportados.

Aplicação:

- URL e chave publishable/anon do `potiguarbd` estão hardcoded no bundle cliente;
- `.env.example` não existe;
- não existe isolamento materializado LOCAL/PREVIEW/PRODUCTION;
- workflow atual cobre security/build, não deploy/smoke/rollback.

### Controles positivos

As migrations do MVP preservam RLS, revogam acesso `anon` às tabelas operacionais e limitam escrita a membros `owner/operator`. O risco prioritário desta rodada é ambiente, continuidade e recuperação — não há evidência documental de tabela operacional aberta para `anon`.

### Achados

- F01 HIGH — projeto Vercel não descoberto;
- F02 HIGH — `potiguarbd` inativo;
- F03 HIGH — ambientes acoplados ao mesmo backend por hardcode;
- F04 HIGH — backup/restore não comprovado no Free Plan;
- F05 HIGH — capacidade Free ativa já ocupada;
- F06 MEDIUM — contrato de variáveis não versionado;
- F07 MEDIUM — CI/CD sem deploy/smoke/rollback;
- F08 MEDIUM/HIGH — observabilidade insuficiente e produção não comprovada;
- F09 MEDIUM — nenhum banco Preview/branch isolado comprovado.

## Arquitetura operacional proposta

A recomendação da auditoria é trabalhar em duas etapas.

### Etapa A — desenvolvimento seguro / produção bloqueada

```text
LOCAL -> Next.js + backend local isolado
STAGING/RECOVERY -> remoto explicitamente escolhido após gate
PRODUCTION -> BLOCKED até recuperação, isolamento, observabilidade e rollback validados
```

### Etapa B — produção controlada

Somente depois da Etapa A, definir LOCAL/PREVIEW/PRODUCTION separados ou mecanismo equivalente aprovado, com backup/restore testado e promoção manual gated.

A forma de obter ambiente remoto isolado pode afetar capacidade/custo e não foi autorizada nesta auditoria.

## Limites obrigatórios da etapa atual

A autorização INFRA-04 atual permite somente leitura, documentação e planejamento.

Continuam exigindo HUMAN_GATE específico:

- pause/restore de qualquer projeto Supabase;
- escolha de projeto a pausar;
- alteração de plano/custo;
- criação/transferência de projeto;
- criação/reconexão de projeto Vercel;
- deploy/promoção;
- alteração de variáveis/secrets;
- código/configuração executável;
- SQL/migrations;
- mudança de dados ou RLS/Auth;
- operação destrutiva;
- merge do PR #31.

## Próxima ação canônica

Revisar e aprovar a **sequência de remediação INFRA-04**, mantendo providers sem mutação até o próximo HUMAN_GATE.