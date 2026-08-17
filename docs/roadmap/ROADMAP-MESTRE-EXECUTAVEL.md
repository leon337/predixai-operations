# Roadmap Mestre Executável — PredixAI Operations

## Objetivo final

Entregar um sistema operacional de almoxarifado inteligente, auditável e seguro, com frontend web/mobile, backend de dados controlado, materiais, patrimônios, estoques, movimentações, obras, eventos, romaneios, manutenção e relatórios, preservando decisão humana em operações críticas.

## Regra de leitura

Este é o **único roadmap operacional mestre**.

O arquivo `docs/fase-0/ROADMAP-E-STATUS.md` é histórico e não deve comandar execução.

Estados voláteis de `main`, PR, Issue, CI, provider e deploy devem ser verificados ao vivo.

## Estado consolidado em 2026-08-17

- Fase 0: **em gate formal de saída — GOV-03**;
- RN-00 a RN-02.7: baselines concluídas;
- RN-02.7 REV1: integrada pelo PR #13;
- MVP-01: concluído e integrado;
- SEC-02: concluída e integrada;
- PRs #21/#24: reconciliação pós-MVP concluída;
- PRs #25/#26: sincronização pós-RN-02.7 concluída;
- arquitetura executável materializada: Next.js + TypeScript + Vercel + Supabase;
- Supabase utilizado pelo MVP-01: `potiguarbd` (`gotzykqvpgjzmzsyvufx`);
- arquitetura vigente pós-MVP: ADR-002, quando integrada;
- produção: autorização humana histórica existe, mas promoção efetiva permanece sem comprovação técnica no repositório;
- nenhuma nova implementação, SQL, migration, alteração de dados ou produção está autorizada de forma geral.

## Execução acelerada — MVP-01

Em agosto de 2026 ocorreu uma execução acelerada autorizada que antecipou uma fatia vertical originalmente distribuída por fases técnicas posteriores.

### Entregue

- autenticação por e-mail e senha;
- membros/perfis `owner`, `operator`, `viewer`;
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

### Não implica

O MVP-01 não encerra automaticamente as fases técnicas completas e não libera o restante do produto.

## Fase 0 — Domínio, governança e arquitetura suficiente

### Estado

`GOV-03 — GATE FORMAL DE SAÍDA`

### Baselines concluídas

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
- ADR-002 como consolidação arquitetural pós-MVP quando integrada.

### Critério de saída

1. RN-02.7 integrada — **ATENDIDO**;
2. checklist formal GOV-03 aprovado — **EM RETESTE**;
3. arquitetura e limites da etapa seguinte confirmados — **ADR-002 EM CONSOLIDAÇÃO**;
4. zero drift bloqueador conhecido entre fontes de alta autoridade — **EM RETESTE**;
5. merge GOV-03 mediante HUMAN_GATE separado — **PENDENTE**.

### Documento de gate

`docs/governanca/CHECKLIST-ENCERRAMENTO-FASE-0-2026-08-17.md`

## Limites pós-Fase 0

Encerrar a Fase 0 significa congelar uma baseline documental suficiente para avançar. Não significa que todo o domínio esteja implementado.

Após a saída da Fase 0, cada frente futura deve ter escopo próprio e respeitar gates de risco.

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

- consolidar política real de LOCAL/PREVIEW/PRODUÇÃO;
- verificar isolamento e risco de dados entre ambientes;
- consolidar secrets/variáveis por ambiente;
- definir backup, retenção e restore;
- testar recuperação proporcional ao risco;
- confirmar tecnicamente produção somente com evidência do provider;
- documentar observabilidade e rollback aplicáveis.

### Critério de saída

- infraestrutura alvo e ambientes documentados com evidência;
- secrets protegidos;
- backup/recovery definidos e testáveis;
- preview reproduzível;
- produção declarada apenas quando comprovada.

## Fase 2 — Modelo físico, dados e segurança completos

### Já antecipado parcialmente

- migrations do MVP-01;
- autenticação;
- perfis básicos;
- RLS do escopo;
- movimentações básicas e histórico.

### Pendente

- modelo físico do domínio completo;
- constraints/índices necessários;
- políticas RLS para todos os módulos aplicáveis;
- auditoria transversal;
- seed mínimo não sensível quando necessário;
- testes de autorização e integridade do domínio ampliado.

### Critério de saída

- migrations completas do escopo autorizado revisadas;
- RLS testada;
- integridade e auditoria verificadas;
- nenhuma alteração de dados sem gate correspondente.

## Fase 3 — Experiência e estrutura completa da aplicação

### Já antecipado parcialmente

- layout autenticado funcional;
- dashboard de estoque;
- navegação responsiva;
- desktop/mobile validados no MVP-01.

### Pendente

- arquitetura de informação dos módulos ampliados;
- estados vazios/loading/error consistentes;
- acessibilidade transversal;
- design system consolidado;
- tratamento de sessão e permissões em todos os módulos.

## Fase 4 — Operação ampliada

### Capacidades pendentes principais

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

### Pendente

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

### Pendente

- confirmar provider/plano/domínio aplicáveis;
- backup inicial e restore testado;
- observabilidade/alertas;
- release aprovada;
- promoção comprovada;
- operação assistida e critérios de rollback.

### Regra permanente

`PRODUCTION_PROMOTION_AUTHORIZED=YES` histórico não equivale a `PRODUCTION_PROMOTION_CONFIRMED=YES`.

## IA assistiva

IA é camada auxiliar. O produto deve continuar operável sem IA.

IA não recebe autoridade irrestrita para:

- alterar estoque;
- dar baixa patrimonial;
- aprovar saída;
- alterar causa/resultado técnico crítico;
- liberar patrimônio para uso;
- confirmar movimentação/custódia;
- executar ação destrutiva.

## Governança executável

Toda entrega relevante segue, quando aplicável:

`controle operacional → branch → PR → HEAD revisado → achados → remediação → reteste → CI → HUMAN_GATE → merge → verificação pós-merge → sincronização`

GitHub é a fonte documental/técnica. Linear é o controle operacional; quando o limite do workspace impedir nova issue, GitHub Issue/PR pode controlar o ciclo e uma issue Linear existente recebe a evidência.

## Próxima transição

Enquanto GOV-03 não estiver integrado, a única transição permitida é concluir o gate de saída da Fase 0.

Depois do merge verificado do GOV-03, a próxima frente deve ser escolhida e autorizada explicitamente a partir das fases técnicas acima. Nenhum escopo funcional é escolhido automaticamente por este roadmap.
