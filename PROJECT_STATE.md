# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=1.1.1
UPDATED_AT_UTC=2026-08-17T07:01:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_0_CONCEPCAO_E_MODELAGEM_DO_DOMINIO
PHASE_GATE=GOV_03_FORMAL_EXIT_REVIEW
DELIVERY_TRACK=MVP_01_ACCELERATED_IMPLEMENTATION_MERGED
ACTIVE_TASK=GOV_03_PHASE0_EXIT_CHECKLIST
PRIMARY_ACTIVE_TASK=GOV_03_PHASE0_EXIT_CHECKLIST
PRIMARY_ACTIVE_SUBTASK=REMEDIATE_AND_RETEST_GOV03_F01_TO_F09
GOVERNANCE_ACTIVE_TASK=GOV_03_PHASE0_EXIT_CHECKLIST
CONTROL_GITHUB_ISSUE=27
ACTIVE_PR=28
ACTIVE_BRANCH=docs/gov-03-phase0-exit-checklist
ACTIVE_HEAD_SHA=RESOLVE_FROM_PR_METADATA
LAST_VERIFIED_HEAD=3cffcf6c0f32e081f3e1b0ee56fca57d4fb5d589
LAST_VERIFIED_HEAD_SEMANTICS=FIRST_GOV03_REMEDIATION_HEAD_REVIEWED_BEFORE_F09_FIX
LAST_VERIFIED_MAIN=a76f53a925d9587f9f7a83b1238f071c8416e9b6
LAST_VERIFIED_MAIN_SEMANTICS=SNAPSHOT_BEFORE_GOV03_PR28
ACTIVE_BASELINE=PHASE0_GOV03_EXIT_CANDIDATE
APPROVED_BASELINES=RN00_REV1;RN01_REV2_1;RN021_REV1;RN022_REV1;RN023_REV2;RN024_REV3;RN025_REV1_PLUS_ERRATA;RN026_REV1_PLUS_ERRATA;RN027_REV1
INITIAL_GOV03_REVIEW_HEAD=a76f53a925d9587f9f7a83b1238f071c8416e9b6
INITIAL_GOV03_DECISION=FAIL_REMEDIABLE
GOV03_FINDINGS=GOV_03_F01_TO_F09
GOV03_REMEDIATION_STRATEGY=B_CONTROLLED_CONSOLIDATION
GOV03_DESIGN_HUMAN_GATE=APPROVED
GOV03_FIRST_REMEDIATION_HEAD=3cffcf6c0f32e081f3e1b0ee56fca57d4fb5d589
GOV03_FIRST_REMEDIATION_CI_RUN=32003899554
GOV03_FIRST_REMEDIATION_CI=PASS
GOV03_F09_STATUS=REMEDIATED_PENDING_RETEST
GOV03_FINAL_RETEST=PENDING_AFTER_F09_REMEDIATION
GOV03_CI=PENDING_FINAL_HEAD
GOV03_REVIEW_THREADS=PENDING_FINAL_CHECK
GOV03_FINAL_DECISION=PENDING_RETEST
REVIEW_DECISION=PENDING_RETEST_AFTER_F09_REMEDIATION
PHASE0_EXIT_STATUS=IN_PROGRESS
GITHUB_LINEAR_SYNC=PASS_FALLBACK_GITHUB_ISSUE_27_WITH_EVIDENCE_IN_LEA117
IMPLEMENTATION_AUTHORIZED=MVP01_SCOPE_COMPLETED_FUTURE_SCOPE_REQUIRES_NEW_AUTHORIZATION
DOMAIN_SQL_AUTHORIZED=NO_NEW_DOMAIN_SQL
DATA_CHANGE_AUTHORIZED=NO
SUPABASE_CHANGE_AUTHORIZED=NO
PRODUCTION_CHANGE_AUTHORIZED=NO
MERGE_AUTHORIZED=NO_FOR_PR28_UNTIL_EXPLICIT_HUMAN_GATE
BLOCKERS=FINAL_RETEST_CI_AND_HUMAN_GATE_FOR_PR28
KNOWN_PENDING=GOV03_FINAL_RETEST_AND_PRODUCTION_PROMOTION_NOT_TECHNICALLY_CONFIRMED
NEXT_AUTHORIZED_ACTION=RETEST_GOV03_PR28_HEAD_AFTER_F09_FIX
```

## Identidade

- Produto: PredixAI Operations.
- Primeiro módulo operacional: Almoxarifado Inteligente.
- Repositório oficial: `leon337/predixai-operations`.
- GitHub: fonte documental e técnica oficial.
- Linear: controle operacional oficial; quando o limite do workspace impedir nova issue, GitHub Issue/PR pode controlar o ciclo e uma issue Linear existente recebe a evidência de sincronização.
- Frontend materializado: Next.js com TypeScript.
- Backend/plataforma de dados utilizada no MVP-01: Supabase.
- Hospedagem utilizada: Vercel.

## Autoridade documental

Ordem de precedência:

1. código e arquivos reais da branch padrão;
2. este `PROJECT_STATE.md`;
3. regra/plano/missão ativa;
4. baselines normativas aprovadas;
5. Linear ou fallback operacional auditável;
6. resumos/histórico;
7. contexto do chat.

Estado volátil de branch, PR, Issue, CI, provider ou deploy deve ser verificado ao vivo.

## Políticas obrigatórias

- `PREDIXAI_OPERATIONS_PROJECT_INSTRUCTIONS.md`;
- `docs/governanca/POLITICA-CHECKLIST-E-PROXIMA-ACAO.md`;
- `docs/roadmap/ROADMAP-MESTRE-EXECUTAVEL.md`;
- `docs/governanca/HISTORICO-AUDITAVEL-FASE-0.md`;
- `docs/arquitetura/ADR-002-ARQUITETURA-VIGENTE-POS-MVP01.md` quando integrada.

Toda resposta operacional deve terminar com checklist de estado/controle/evidência e uma única próxima ação sugerida.

## Objetivo final

Construir um sistema operacional de almoxarifado inteligente, auditável e seguro, cobrindo materiais, patrimônios, estoques, movimentações, obras, eventos, romaneios, manutenção e relatórios.

O sistema deve continuar operável sem IA. IA é camada assistiva e não recebe autoridade irrestrita para operações críticas.

## Baselines da Fase 0

- RN-00 REV1 — PredixAI Domain Dictionary;
- RN-01 REV2.1 — Cadastro e Classificação de Materiais;
- RN-02.1 REV1 — Núcleo Organizacional;
- RN-02.2 REV1 — Usuários, Perfis, Permissões e Responsabilidades;
- RN-02.3 REV2 — Materiais, Catálogo, Atributos e Patrimônios;
- RN-02.4 REV3 — Estoques, Saldos, Localizações e Disponibilidade;
- RN-02.5 REV1 + errata LEA-58 F01–F05 — Movimentações e Integridade do Estoque;
- RN-02.6 REV1 + errata LEA-64 F01–F05 — Obras, Eventos e Romaneios;
- RN-02.7 REV1 — Manutenção e Ciclo de Vida Patrimonial;
- política permanente de checklist e próxima ação;
- histórico auditável da Fase 0;
- ADR-001 — decisão arquitetural histórica inicial;
- ADR-002 — arquitetura vigente pós-MVP-01, em consolidação no GOV-03.

## RN-02.7 — estado consolidado

```text
RN027_PR=13
RN027_AUTHORIZED_HEAD=bf279b7ca395608fe6283bfadf7081b6d9e929c9
RN027_MAIN_COMMIT=8fbd006a2b49f810adaf0d2d3f18b6be25421d6c
RN027_STATUS=BASELINE_MERGED
LEA117_STATUS=DONE
LEA142_STATUS=PASS_DONE
LEA142_FINAL_CI_RUN=32000471638
LEA142_FINAL_SECURITY_ARTIFACT=9278204797
```

A RN-02.7 é baseline vigente. Seu cabeçalho processual pré-merge registra o instante da revisão e deve ser lido como snapshot histórico; o estado atual é controlado pelo GitHub real, por este arquivo e pelo registro pós-merge.

A conclusão normativa da RN-02.7 não significa que manutenção patrimonial esteja implementada.

## Sincronizações pós-RN-02.7

### PR #25

```text
HEAD=2c79656cb87f0cd83f491d9141ed7d31d782a696
CI_RUN=32001611306
ARTIFACT=9278583724
MAIN_COMMIT=21d3dc83d1436ce40adfde49288e9d53c8b7f63a
STATUS=MERGED
```

### PR #26

```text
HEAD=c337a71256e6472053e8eb412aec779357327972
CI_RUN=32002194191
ARTIFACT=9278775965
MAIN_COMMIT=a76f53a925d9587f9f7a83b1238f071c8416e9b6
STATUS=MERGED
```

A sequência de sincronizações pós-RN-02.7 está encerrada.

## MVP-01 — estado técnico implementado

```text
MVP01_ISSUE=17
MVP01_PR=18
MVP01_APPROVED_HEAD=5388b01883b9198b60be57c1e275cdd9c0d993d6
MVP01_MAIN_COMMIT=5dfb29d345d30a32eac0da70ee1b94d9dd6127f8
MVP01_STATUS=MERGED_UAT_DESKTOP_AND_MOBILE_PASS
SUPABASE_PROJECT=potiguarbd
SUPABASE_PROJECT_REF=gotzykqvpgjzmzsyvufx
SUPABASE_REGION=sa-east-1
SUPABASE_USAGE=MVP01_REUSED_EXISTING_PROJECT
PRODUCTION_PROMOTION_AUTHORIZED=YES
PRODUCTION_PROMOTION_CONFIRMED=UNKNOWN_NO_PROVIDER_EVIDENCE_IN_REPOSITORY
```

Implementado no escopo MVP-01:

- autenticação por e-mail e senha;
- membros/perfis `owner`, `operator`, `viewer`;
- materiais básicos;
- entrada e saída;
- saldo atual e bloqueio de saída superior ao saldo;
- estoque mínimo e alertas;
- histórico auditável de movimentações;
- RLS/funções/migrations necessárias ao MVP-01;
- interface responsiva desktop/mobile;
- testes de estoque 6/6 PASS;
- testes de autorização 6/6 PASS;
- UAT desktop/mobile PASS.

Fora do MVP-01:

- patrimônio completo;
- manutenção implementada;
- obras/eventos/romaneios completos;
- transferências/inventário/ajustes completos;
- anexos/QR Code completos;
- relatórios avançados;
- IA operacional;
- modelo físico completo;
- política completa de ambientes, backup/restore e produção controlada.

## Segurança transversal

```text
SECURITY_LAST_ISSUE=22
SECURITY_LAST_PR=23
SECURITY_LAST_VALIDATED_HEAD=e6d54340ceb71a2237cfb2260fc46a216246099e
SECURITY_MAIN_COMMIT=e19da0f3e71b582d9422f65f0bf21cbb80885989
SECURITY_STATUS=PASS_SEC_02_MERGED_NANOID_3_3_18
SECURITY_ADVISORY=GHSA-2v37-7h3g-55p8
```

Resultados de auditoria são temporais e devem ser revalidados quando uma decisão depender do estado atual das dependências.

## Arquitetura vigente — GOV-03

A consolidação aprovada para o GOV-03 adota como arquitetura materializada atual:

- Next.js + TypeScript;
- Vercel;
- Supabase `potiguarbd` para o escopo materializado;
- Auth, RLS e migrations versionadas no escopo MVP-01.

A topologia ASUS N43SM + FastAPI + PostgreSQL local/Ollama permanece como exploração histórica e não é requisito atual obrigatório.

ADR-002 define os limites pós-MVP e supersede as premissas factuais obsoletas da ADR-001 sem apagar seu histórico.

## GOV-03 — Checklist formal de saída

Controle:

- GitHub Issue #27;
- PR #28;
- branch `docs/gov-03-phase0-exit-checklist`;
- checklist `docs/governanca/CHECKLIST-ENCERRAMENTO-FASE-0-2026-08-17.md`.

A criação de uma nova issue Linear para GOV-03 foi tentada e recusada por limite do workspace. O fallback previsto na governança foi aplicado e a evidência foi registrada na LEA-117.

Revisão inicial:

```text
HEAD=a76f53a925d9587f9f7a83b1238f071c8416e9b6
DECISION=FAIL_REMEDIABLE
FINDINGS=F01_F02_F03_F04_F05_F06_F07_F08
```

Primeira remediação:

```text
HEAD=3cffcf6c0f32e081f3e1b0ee56fca57d4fb5d589
CI_RUN=32003899554
CI=PASS
REVIEW_THREADS=0
NEW_FINDING=GOV_03_F09
DECISION=FAIL_REMEDIABLE_FOR_METADATA_MINIMUM
```

Remediação escolhida por Leandro:

```text
STRATEGY=B_CONTROLLED_CONSOLIDATION
DESIGN_GATE=APPROVED
MERGE_GATE=NOT_GRANTED
```

F07 foi reconciliado fechando a GitHub Issue #1 como `completed`, com nota auditável; a RN-01 não foi alterada.

F09 foi registrado antes da correção e consistia na remoção acidental de campos mínimos exigidos pelas instruções oficiais durante a compactação do `PROJECT_STATE.md`. Esta versão restaura esses campos; o resultado depende do reteste do novo HEAD.

## Critério de saída da Fase 0

A Fase 0 só pode ser declarada encerrada quando:

1. RN-02.7 estiver integrada — atendido;
2. checklist GOV-03 estiver em PASS no HEAD final;
3. ADR-002 e limites da etapa seguinte estiverem coerentes;
4. CI do PR #28 estiver verde no HEAD final;
5. não houver thread bloqueadora;
6. houver HUMAN_GATE explícito para merge do PR #28;
7. o merge for verificado na `main`;
8. GitHub e Linear/fallback estiverem sincronizados.

## Limites permanentes

O encerramento documental da Fase 0 **não concede autorização geral** para o roadmap futuro.

Exigem escopo/gate próprios conforme o risco:

- código funcional novo;
- SQL;
- migrations;
- alterações de dados reais;
- mudanças de RLS/Auth;
- provisionamento ou alteração de Supabase;
- deploy/promoção em produção;
- operações destrutivas;
- mudanças arquiteturais relevantes ou de custo.

## Próxima ação canônica

Retestar o HEAD exato do PR #28 após a correção GOV-03-F09, verificar diff, CI e threads, registrar decisão final do GOV-03 e solicitar HUMAN_GATE separado somente se o resultado for PASS.
