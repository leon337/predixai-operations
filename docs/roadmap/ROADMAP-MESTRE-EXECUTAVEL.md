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
- Fase 1 residual: **SELECIONADA EXPLICITAMENTE POR LEANDRO**;
- controle atual: GitHub Issue #30 / PR Draft #31;
- tarefa: `INFRA-04 — Consolidar ambientes, recuperação e operação segura`;
- auditoria atual: **somente leitura**;
- nenhuma alteração de provider, SQL, migration, dado, deploy, produção ou custo está autorizada.

Baseline de entrada da INFRA-04: `main=5260caeea80471c9c9be9c74795a57e8fafc8851`.

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

- RN-00 REV1;
- RN-01 REV2.1;
- RN-02.1 REV1;
- RN-02.2 REV1;
- RN-02.3 REV2;
- RN-02.4 REV3;
- RN-02.5 REV1 + errata;
- RN-02.6 REV1 + errata;
- RN-02.7 REV1;
- histórico auditável e política de governança;
- ADR-001 como decisão arquitetural histórica;
- ADR-002 como arquitetura vigente pós-MVP-01.

Critério de saída GOV-03: C01–C20 PASS, HUMAN_GATE/merge/verificação/sincronização PASS.

## Regra pós-Fase 0

Encerrar a Fase 0 significa congelar uma baseline documental suficiente para avançar. **Não significa que todo o domínio esteja implementado.**

Nenhuma nova implementação é liberada automaticamente.

## Fase 1 — Infraestrutura e ambientes completos

### Estado atual

`ACTIVE_SELECTION — INFRA-04 READONLY AUDIT`

Leandro selecionou explicitamente a Fase 1 residual como próximo escopo.

Controle:

- GitHub Issue #30;
- PR Draft #31;
- branch `docs/infra-04-readonly-audit`;
- fallback Linear registrado na LEA-121;
- relatório: `docs/infra/INFRA-04-AUDITORIA-READONLY-2026-08-17.md`.

### Já materializado parcialmente

- base Next.js;
- uso histórico de Vercel;
- Supabase `potiguarbd` utilizado pelo MVP-01;
- Auth/RLS/migrations do MVP-01;
- CI de dependências/build.

### Auditoria factual inicial INFRA-04

- projeto Vercel do produto não é descoberto pela conexão atual;
- `potiguarbd` está `INACTIVE`;
- organização Supabase observada está no plano Free;
- dois outros projetos Supabase estão ativos;
- URL/chave publishable do `potiguarbd` estão hardcoded no bundle cliente;
- `.env.example` não existe;
- nenhum isolamento LOCAL/PREVIEW/PRODUCTION está materializado;
- backup/restore testado não está comprovado;
- produção não está tecnicamente comprovada;
- CI não cobre deploy/smoke/rollback.

Achados: `INFRA-04-F01..F09`.

### Estratégia recomendada

**Etapa A — desenvolvimento seguro / produção bloqueada**

- LOCAL isolado;
- STAGING/RECOVERY remoto somente após gate de provider/capacidade;
- PRODUCTION bloqueada enquanto recuperação, isolamento, observabilidade e rollback não estiverem validados.

**Etapa B — produção controlada**

- LOCAL/PREVIEW/PRODUCTION separados ou mecanismo equivalente aprovado;
- backup/restore testado;
- promoção manual gated;
- rollback documentado e verificável.

### Pendente para a fase completa

- política real de LOCAL/PREVIEW/PRODUÇÃO;
- isolamento de dados;
- contrato de secrets/variáveis;
- backend local isolado/reproduzível;
- decisão de capacidade/planos Supabase;
- recuperação do `potiguarbd` somente após HUMAN_GATE;
- reconciliação/recriação Vercel somente após HUMAN_GATE;
- backup, retenção e restore testado;
- observabilidade;
- smoke test;
- rollback de aplicação e banco;
- confirmação técnica de produção.

### Gate atual

Permitido: leitura, documentação, análise, proposta e PR documental Draft.

Exige HUMAN_GATE separado:

- pause/restore Supabase;
- escolha de projeto a pausar;
- mudança de plano/custo;
- criação/transferência de projeto;
- criação/reconexão Vercel;
- deploy;
- variáveis/secrets;
- código/config executável;
- SQL/migrations/dados/RLS/Auth;
- produção;
- merge do PR #31.

## Fase 2 — Modelo físico, dados e segurança completos

Já antecipado parcialmente pelo MVP-01: migrations, autenticação, perfis básicos, RLS, movimentações básicas e histórico.

Pendente:

- modelo físico do domínio completo;
- constraints e índices necessários;
- políticas RLS para módulos ampliados;
- auditoria transversal;
- seeds não sensíveis quando necessários;
- testes ampliados de autorização e integridade.

**Dependência recomendada:** não ampliar dados críticos antes de resolver os achados HIGH da INFRA-04.

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

A Fase 1 residual já foi selecionada. A próxima ação é **revisar e aprovar a sequência de remediação INFRA-04 sem mutação de provider**, antes de qualquer gate para restore, Vercel, custos ou implementação.