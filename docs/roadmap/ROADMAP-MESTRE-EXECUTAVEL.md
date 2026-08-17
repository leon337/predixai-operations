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
- GOV-03: C01–C20 PASS;
- PR #28: merged por squash;
- commit do evento de encerramento no `main`: `c2608693af2023acb05624fe35845db1d25758ad`;
- GitHub Issue #27: closed/completed;
- evidência pós-merge: sincronizada na LEA-117;
- MVP-01: concluído e integrado;
- SEC-02: concluída e integrada;
- arquitetura materializada: Next.js + TypeScript + Vercel + Supabase `potiguarbd`;
- produção: autorização humana histórica existe, mas promoção efetiva permanece sem comprovação técnica no repositório;
- nenhuma nova implementação, SQL, migration, alteração de dados ou produção está autorizada de forma geral.

O commit acima é snapshot auditável do evento GOV-03. O HEAD corrente da `main` deve ser resolvido ao vivo.

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

### Baselines congeladas

- RN-00 REV1 — PredixAI Domain Dictionary;
- RN-01 REV2.1 — Cadastro e Classificação de Materiais;
- RN-02.1 REV1 — Núcleo Organizacional;
- RN-02.2 REV1 — Usuários, Perfis, Permissões e Responsabilidades;
- RN-02.3 REV2 — Materiais, Catálogo, Atributos e Patrimônios;
- RN-02.4 REV3 — Estoques, Saldos, Localizações e Disponibilidade;
- RN-02.5 REV1 + errata — Movimentações e Integridade do Estoque;
- RN-02.6 REV1 + errata — Obras, Eventos e Romaneios;
- RN-02.7 REV1 — Manutenção e Ciclo de Vida Patrimonial;
- histórico auditável e política de governança;
- ADR-001 como decisão arquitetural histórica;
- ADR-002 como arquitetura vigente pós-MVP-01.

### Critério de saída — resultado

1. RN-02.7 integrada — **PASS**;
2. checklist GOV-03 — **C01–C20 PASS**;
3. arquitetura e limites da etapa seguinte — **PASS / ADR-002**;
4. zero drift bloqueador conhecido no gate — **PASS**;
5. HUMAN_GATE e merge do GOV-03 — **PASS**;
6. verificação pós-merge e sincronização — **PASS**.

Documento auditável: `docs/governanca/CHECKLIST-ENCERRAMENTO-FASE-0-2026-08-17.md`.

## Regra pós-Fase 0

Encerrar a Fase 0 significa congelar uma baseline documental suficiente para avançar. **Não significa que todo o domínio esteja implementado.**

Nenhuma fase abaixo é selecionada automaticamente. A escolha do próximo escopo exige decisão explícita e novo controle operacional.

Não existe autorização automática para:

- código funcional novo;
- SQL/migrations;
- mudanças de RLS/Auth;
- alterações de dados reais;
- mudanças/provisionamento Supabase;
- deploy/promoção de produção;
- operações destrutivas;
- mudanças arquiteturais relevantes ou de custo.

## Fase 1 — Infraestrutura e ambientes completos

### Já materializado parcialmente

- base Next.js;
- Vercel utilizada;
- Supabase `potiguarbd` utilizado;
- Auth/RLS/migrations do MVP-01;
- CI de dependências/build.

### Pendente para a fase completa

- política real de LOCAL/PREVIEW/PRODUÇÃO;
- isolamento e risco de dados entre ambientes;
- secrets/variáveis por ambiente;
- backup, retenção e restore;
- teste de recuperação proporcional ao risco;
- confirmação técnica de produção por evidência do provider;
- observabilidade e rollback aplicáveis.

## Fase 2 — Modelo físico, dados e segurança completos

Já antecipado parcialmente pelo MVP-01: migrations, autenticação, perfis básicos, RLS, movimentações básicas e histórico.

Pendente:

- modelo físico do domínio completo;
- constraints e índices necessários;
- políticas RLS para módulos ampliados;
- auditoria transversal;
- seeds não sensíveis quando necessários;
- testes ampliados de autorização e integridade.

## Fase 3 — Experiência e estrutura completa da aplicação

Já antecipado parcialmente: layout autenticado, dashboard de estoque, navegação responsiva e UAT desktop/mobile do MVP-01.

Pendente:

- arquitetura de informação dos módulos ampliados;
- estados vazios/loading/error consistentes;
- acessibilidade transversal;
- design system consolidado;
- sessão e permissões em todos os módulos.

## Fase 4 — Operação ampliada

Capacidades pendentes principais:

1. empresas/unidades e responsabilidades completas;
2. catálogo e patrimônios completos;
3. localizações/WMS leve onde necessário;
4. transferências, inventário e ajustes;
5. Obras, Eventos e Romaneios;
6. Manutenção e Ciclo de Vida Patrimonial;
7. anexos, documentos e QR Code;
8. relatórios operacionais;
9. auditoria transversal.

As regras normativas da Fase 0 orientam essas implementações, mas não as autorizam.

## Fase 5 — Qualidade e homologação

Pendente:

- testes unitários/integração para escopo ampliado;
- testes RLS/permissões;
- E2E dos fluxos críticos;
- acessibilidade/mobile;
- desempenho;
- recuperação;
- homologação operacional controlada;
- plano de rollback.

A evidência do MVP-01 é válida somente para sua fatia entregue.

## Fase 6 — Produção controlada

Pendente:

- confirmar provider/plano/domínio aplicáveis;
- backup inicial e restore testado;
- observabilidade/alertas;
- release aprovada;
- promoção comprovada;
- operação assistida e critérios de rollback.

`PRODUCTION_PROMOTION_AUTHORIZED=YES` histórico não equivale a `PRODUCTION_PROMOTION_CONFIRMED=YES`.

## IA assistiva

IA é camada auxiliar e não recebe autoridade irrestrita para alterar estoque, dar baixa, aprovar saída, liberar patrimônio, confirmar movimentação/custódia ou executar ação destrutiva.

## Governança executável

Toda entrega relevante segue, quando aplicável:

`controle operacional → branch → PR → HEAD revisado → achados → remediação → reteste → CI → HUMAN_GATE → merge → verificação pós-merge → sincronização`

GitHub é a fonte documental/técnica. Linear é o controle operacional; quando o workspace impedir nova issue, GitHub Issue/PR pode controlar o ciclo com evidência registrada no Linear existente.

## Próxima transição

**Nenhuma frente técnica foi selecionada automaticamente.**

A próxima ação canônica é escolher explicitamente um próximo escopo entre as fases acima, definir seus limites e somente então abrir a tarefa/issue correspondente.