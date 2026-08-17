# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=1.2.0
UPDATED_AT_UTC=2026-08-17T07:12:33Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=POST_PHASE0_TRANSITION
PHASE0_EXIT_STATUS=COMPLETED_GOV03_MERGED_AND_VERIFIED
DELIVERY_TRACK=MVP_01_ACCELERATED_IMPLEMENTATION_MERGED
ACTIVE_TASK=NONE
PRIMARY_ACTIVE_TASK=NONE
PRIMARY_ACTIVE_SUBTASK=NONE
GOVERNANCE_ACTIVE_TASK=NONE
CONTROL_GITHUB_ISSUE=27_COMPLETED
ACTIVE_PR=NONE
ACTIVE_BRANCH=NONE
ACTIVE_HEAD_SHA=NONE
LAST_VERIFIED_HEAD=2a09f58a2a55a7dbbc9b6a23ced48b5e7e827e6a
LAST_VERIFIED_HEAD_SEMANTICS=AUTHORIZED_PR28_HEAD
LAST_VERIFIED_MAIN=c2608693af2023acb05624fe35845db1d25758ad
LAST_VERIFIED_MAIN_SEMANTICS=GOV03_INTEGRATION_EVENT_SNAPSHOT_RESOLVE_CURRENT_MAIN_LIVE
ACTIVE_BASELINE=PHASE0_BASELINE_FROZEN
APPROVED_BASELINES=RN00_REV1;RN01_REV2_1;RN021_REV1;RN022_REV1;RN023_REV2;RN024_REV3;RN025_REV1_PLUS_ERRATA;RN026_REV1_PLUS_ERRATA;RN027_REV1;ADR002_POST_MVP01
GOV03_INITIAL_DECISION=FAIL_REMEDIABLE
GOV03_FINDINGS=GOV_03_F01_TO_F09
GOV03_REMEDIATION_STRATEGY=B_CONTROLLED_CONSOLIDATION
GOV03_CRITERIA=C01_TO_C20_PASS
GOV03_SUBSTANTIVE_HEAD=130e4ee4649d707b8521a53b9ae17a5f16e0d34a
GOV03_SUBSTANTIVE_CI_RUN=32004060411
GOV03_FINAL_PR_HEAD=2a09f58a2a55a7dbbc9b6a23ced48b5e7e827e6a
GOV03_FINAL_CI_RUN=32004213895
GOV03_FINAL_SECURITY_ARTIFACT=9279441855
GOV03_REVIEW_THREADS=0
GOV03_PR=28
GOV03_MAIN_COMMIT=c2608693af2023acb05624fe35845db1d25758ad
GOV03_ISSUE=27_COMPLETED
GOV03_LINEAR_SYNC=PASS_EVIDENCE_RECORDED_IN_LEA117
REVIEW_DECISION=PASS_MERGED_VERIFIED
GITHUB_LINEAR_SYNC=PASS_GOV03_COMPLETED
IMPLEMENTATION_AUTHORIZED=MVP01_SCOPE_COMPLETED_NO_FUTURE_SCOPE_AUTHORIZED
DOMAIN_SQL_AUTHORIZED=NO_NEW_DOMAIN_SQL
DATA_CHANGE_AUTHORIZED=NO
SUPABASE_CHANGE_AUTHORIZED=NO
PRODUCTION_CHANGE_AUTHORIZED=NO
MERGE_AUTHORIZED=NO_OPEN_MERGE_AUTHORIZATION
BLOCKERS=NONE_FOR_NEXT_SCOPE_SELECTION
KNOWN_PENDING=NEXT_SCOPE_SELECTION_AND_PRODUCTION_PROMOTION_NOT_TECHNICALLY_CONFIRMED
NEXT_AUTHORIZED_ACTION=SELECT_NEXT_SCOPE_FROM_ROADMAP
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

A Fase 0 — Concepção e Modelagem do Domínio foi encerrada pelo GOV-03 após:

- revisão inicial `FAIL_REMEDIABLE`;
- achados GOV-03-F01 a F09 registrados e remediados;
- critérios C01 a C20 em PASS;
- ADR-002 consolidada como arquitetura vigente pós-MVP-01;
- HEAD final do PR #28 validado com CI `32004213895` em SUCCESS e zero threads;
- HUMAN_GATE explícito de Leandro para o merge do PR #28;
- squash merge do PR #28;
- verificação pós-merge do `main` em `c2608693af2023acb05624fe35845db1d25758ad`;
- GitHub Issue #27 encerrado como `completed`;
- evidência pós-merge sincronizada na LEA-117.

O SHA acima é o snapshot auditável do evento de integração do GOV-03. Para o HEAD corrente da `main`, consultar o GitHub ao vivo.

## Baselines congeladas da Fase 0

- RN-00 REV1 — PredixAI Domain Dictionary;
- RN-01 REV2.1 — Cadastro e Classificação de Materiais;
- RN-02.1 REV1 — Núcleo Organizacional;
- RN-02.2 REV1 — Usuários, Perfis, Permissões e Responsabilidades;
- RN-02.3 REV2 — Materiais, Catálogo, Atributos e Patrimônios;
- RN-02.4 REV3 — Estoques, Saldos, Localizações e Disponibilidade;
- RN-02.5 REV1 + errata LEA-58 F01–F05 — Movimentações e Integridade do Estoque;
- RN-02.6 REV1 + errata LEA-64 F01–F05 — Obras, Eventos e Romaneios;
- RN-02.7 REV1 — Manutenção e Ciclo de Vida Patrimonial;
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
PRODUCTION_PROMOTION_AUTHORIZED=YES
PRODUCTION_PROMOTION_CONFIRMED=UNKNOWN_NO_PROVIDER_EVIDENCE_IN_REPOSITORY
```

Materializado no MVP-01: autenticação, perfis básicos, materiais, entradas, saídas, saldo, estoque mínimo, histórico, RLS/funções/migrations do escopo e interface responsiva.

Continuam fora desse escopo: patrimônio completo, manutenção implementada, obras/eventos/romaneios completos, transferências/inventário/ajustes completos, anexos/QR Code completos, relatórios avançados, IA operacional e modelo físico completo.

## Arquitetura vigente

A arquitetura materializada e consolidada pela ADR-002 é:

- Next.js + TypeScript;
- Vercel;
- Supabase `potiguarbd` para a fatia materializada;
- PostgreSQL/Auth/RLS/migrations e funções do escopo MVP-01.

A topologia ASUS N43SM + FastAPI + PostgreSQL local/Ollama permanece como exploração histórica, não como requisito atual obrigatório.

## Limites permanentes pós-Fase 0

O encerramento da Fase 0 **não autoriza automaticamente**:

- código funcional novo;
- SQL ou migrations;
- mudanças de RLS/Auth;
- alterações de dados reais;
- provisionamento ou mudança de Supabase;
- deploy/promoção em produção;
- operações destrutivas;
- mudança arquitetural relevante ou com custo.

Cada frente futura exige escopo e gate próprios conforme o risco.

## Próxima ação canônica

Nenhuma fase técnica foi selecionada automaticamente pelo encerramento da Fase 0.

A próxima ação é **selecionar explicitamente o próximo escopo a partir do Roadmap Mestre Executável**. Somente depois dessa escolha deve ser criado o controle operacional correspondente.