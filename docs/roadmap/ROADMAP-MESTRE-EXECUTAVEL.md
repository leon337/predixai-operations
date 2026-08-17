# Roadmap Mestre Executável — PredixAI Operations

## Objetivo final

Entregar um sistema operacional de almoxarifado inteligente, auditável e seguro, com frontend web/mobile, backend de dados controlado, materiais, patrimônios, estoques, movimentações, obras, eventos, romaneios, manutenção e relatórios, preservando decisão humana em operações críticas.

## Regra de leitura

Este é o **único roadmap operacional mestre**.

`docs/fase-0/ROADMAP-E-STATUS.md` é histórico. Estados voláteis de `main`, PR, Issue, CI, provider e deploy devem ser verificados ao vivo.

## Estado consolidado — 2026-08-17

- Fase 0: **CONCLUÍDA — GOV-03 merged e verificado**;
- RN-00 a RN-02.7: baselines concluídas;
- ADR-002: arquitetura vigente pós-MVP integrada;
- MVP-01: concluído e integrado;
- SEC-02: concluída e integrada;
- Fase 1 residual: **ATIVA — INFRA-04**;
- controle: GitHub Issue #30 + fallback Linear LEA-121;
- R1: concluído em leitura;
- R2: Opção C vigente — `potiguarbd` permanece `INACTIVE`;
- R3: **MERGED/VERIFIED**;
- R4: **MERGED/VERIFIED**;
- F10: **MERGED/VERIFIED**;
- PR #32: merged por squash;
- commit de integração R3/R4/F10: `354e4d76ca89c5215a12058f7af418e275855cf5`;
- R5, R6 e R7: pendentes;
- produção: **não tecnicamente confirmada**.

## Execução acelerada — MVP-01

Em agosto de 2026 uma execução acelerada autorizada antecipou uma fatia vertical originalmente distribuída por fases técnicas posteriores.

### Entregue

- autenticação por e-mail e senha;
- perfis `owner`, `operator`, `viewer`;
- cadastro/edição de materiais;
- entradas e saídas;
- saldo atual;
- bloqueio de saída superior ao saldo;
- estoque mínimo e alertas;
- histórico auditável;
- RLS/funções/migrations do escopo;
- interface responsiva desktop/mobile;
- CI de dependências/build;
- UAT desktop/mobile.

O MVP-01 não encerra as fases técnicas completas e não libera automaticamente o restante do produto.

## Fase 0 — Domínio, governança e arquitetura suficiente

### Estado

`COMPLETED — GOV-03`

Baselines congeladas: RN-00 a RN-02.7, ADR-001 histórica, ADR-002 vigente e governança auditável.

Encerrar a Fase 0 não significa que todo o domínio esteja implementado.

## Fase 1 — Infraestrutura e ambientes completos

### Estado atual

`ACTIVE — INFRA-04`

Relatório consolidado:

`docs/infra/INFRA-04-AUDITORIA-READONLY-2026-08-17.md`

### R1 — Vercel

**READONLY COMPLETED.**

- equipe `PREDIX AI BR` sem projeto PredixAI Operations descoberto;
- Project ID histórico e slug retornaram 404;
- GitHub Deployments: 0;
- nenhuma recriação/reconexão executada.

F01 permanece aberto até reconciliação futura de provider.

### R2 — Supabase remoto

**OPTION C ACTIVE.**

- `potiguarbd` permanece `INACTIVE`;
- nenhum projeto ativo foi pausado;
- nenhum restore executado;
- nenhum plano/custo alterado.

F02/F05 permanecem dependentes de decisão futura de provider/capacidade.

### R3 — contrato de ambiente

**MERGED/VERIFIED no PR #32.**

- URL/chave hardcoded removidas;
- `NEXT_PUBLIC_SUPABASE_URL`;
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`;
- `.env.example` local;
- contrato automatizado no CI.

F03 e F06 remediados para a camada local/repositório.

### R4 — ambiente local isolado

**MERGED/VERIFIED no PR #32.**

- `supabase/config.toml` local;
- launcher Supabase CLI `2.111.0`;
- `start`, `status`, `db reset --local`, `stop`;
- seed desabilitado;
- CI valida reconstrução local.

F09 remediado localmente.

### F10 — cadeia de migrations

**MERGED/VERIFIED no PR #32.**

A cadeia histórica não reconstruía o banco do zero. Foi adicionada uma migration-base mínima, por TDD, sem alterar as duas migrations históricas do MVP.

Validação final pré-merge:

- HEAD `70f0bc94e47acba46859eb0c6f2095bfb7c9ee6f`;
- CI `32014358913` — SUCCESS;
- artefato `9283021725`;
- 0 review threads.

Integração:

- squash merge `354e4d76ca89c5215a12058f7af418e275855cf5`.

### R5 — Backup e restore

**PENDING.**

Definir antes de qualquer produção controlada:

- método de backup compatível com provider/plano;
- retenção;
- responsável;
- cópia off-site;
- procedimento de restore;
- teste de restauração não destrutivo em ambiente isolado.

Qualquer mutação remota exige HUMAN_GATE próprio.

### R6 — CI/CD e rollback

**PENDING.**

- smoke test;
- preview controlado;
- promoção manual gated;
- rollback de aplicação;
- rollback de banco;
- evidência de recuperação.

### R7 — Observabilidade

**PENDING.**

- erros/logs por ambiente;
- critério de saúde;
- retenção;
- evidência mínima antes de declarar produção.

### Critério de saída da Fase 1

A Fase 1 só pode ser encerrada quando R5–R7 estiverem suficientemente validados, riscos HIGH remanescentes tratados ou explicitamente aceitos e produção tiver estado técnico inequívoco.

## Fase 2 — Modelo físico, dados e segurança completos

Já antecipado parcialmente pelo MVP-01: migrations, autenticação, perfis básicos, RLS, movimentações básicas e histórico.

Pendente:

- modelo físico do domínio completo;
- constraints e índices necessários;
- políticas RLS para módulos ampliados;
- auditoria transversal;
- seeds não sensíveis quando necessários;
- testes ampliados de autorização e integridade.

**Dependência:** não ampliar dados críticos antes de R5 e dos riscos HIGH aplicáveis da INFRA-04.

## Fase 3 — Experiência e estrutura completa da aplicação

Já antecipado parcialmente: layout autenticado, dashboard de estoque, navegação responsiva e UAT desktop/mobile do MVP-01.

Pendente: arquitetura de informação ampliada, estados loading/error, acessibilidade, design system e permissões transversais.

## Fase 4 — Operação ampliada

Pendente: empresas/unidades completas, patrimônios, localizações/WMS, transferências/inventário/ajustes, obras/eventos/romaneios, manutenção, anexos/QR Code, relatórios e auditoria transversal.

## Fase 5 — Qualidade e homologação

Pendente: testes ampliados, RLS/permissões, E2E críticos, acessibilidade/mobile, desempenho, recuperação, homologação e rollback.

## Fase 6 — Produção controlada

Pendente:

- provider/plano/domínio confirmados;
- backup inicial e restore testado;
- observabilidade/alertas;
- release aprovada;
- promoção comprovada;
- operação assistida e critérios de rollback.

Autorização histórica de promoção não equivale a produção tecnicamente confirmada.

## IA assistiva

IA é camada auxiliar e não recebe autoridade irrestrita para alterar estoque, dar baixa, aprovar saída, liberar patrimônio, confirmar movimentação/custódia ou executar ação destrutiva.

## Governança executável

Toda entrega relevante segue, quando aplicável:

`controle operacional → branch → PR → HEAD revisado → achados → remediação → reteste → CI → HUMAN_GATE → merge → verificação pós-merge → sincronização`

GitHub é a fonte documental/técnica. Linear é o controle operacional; quando o workspace impedir nova issue, GitHub Issue/PR pode controlar o ciclo com evidência registrada no Linear existente.

## Próxima transição

A próxima frente da sequência INFRA-04 é **R5 — Backup e Restore**. Planejamento e leitura podem avançar dentro da sequência aprovada; qualquer alteração em provider, plano, dados ou ambiente remoto continua sujeita a HUMAN_GATE específico.
