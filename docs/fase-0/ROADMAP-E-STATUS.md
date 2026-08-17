# PredixAI Operations — Roadmap e Status da Fase 0

## Status deste arquivo

**HISTÓRICO / ÍNDICE DE FASE 0**

Este documento deixou de ser o roadmap operacional principal. O roadmap vigente é:

- [`docs/roadmap/ROADMAP-MESTRE-EXECUTAVEL.md`](../roadmap/ROADMAP-MESTRE-EXECUTAVEL.md)

O estado canônico é:

- [`PROJECT_STATE.md`](../../PROJECT_STATE.md)

O histórico anterior deste arquivo permanece no Git para auditoria.

## Fase 0 — resultado consolidado

A Fase 0 produziu e congelou as seguintes baselines principais:

- RN-00 REV1 — PredixAI Domain Dictionary;
- RN-01 REV2.1 — Cadastro e Classificação de Materiais;
- RN-02.1 REV1 — Núcleo Organizacional;
- RN-02.2 REV1 — Usuários, Perfis, Permissões e Responsabilidades;
- RN-02.3 REV2 — Materiais, Catálogo, Atributos e Patrimônios;
- RN-02.4 REV3 — Estoques, Saldos, Localizações e Disponibilidade;
- RN-02.5 REV1 + errata — Movimentações e Integridade do Estoque;
- RN-02.6 REV1 + errata — Obras, Eventos e Romaneios;
- RN-02.7 REV1 — Manutenção e Ciclo de Vida Patrimonial;
- ADR-001 — decisão arquitetural histórica inicial;
- ADR-002 — arquitetura vigente pós-MVP-01, quando integrada;
- política permanente de checklist e próxima ação;
- histórico auditável da Fase 0.

A antiga sequência que tratava RN-02.5 em diante como ainda futura e atribuía RN-02.7 a Compras/Fornecedores está supersedida.

## Execução acelerada MVP-01

Durante a Fase 0 ocorreu uma execução acelerada explicitamente autorizada que materializou uma fatia vertical do produto:

- Next.js + TypeScript;
- Vercel;
- Supabase `potiguarbd`;
- autenticação e perfis básicos;
- materiais básicos;
- entradas/saídas;
- saldo, estoque mínimo e alertas;
- histórico auditável;
- RLS/funções/migrations do escopo MVP-01;
- interface responsiva desktop/mobile.

Essa execução antecipada **não significa que as fases técnicas completas posteriores tenham sido encerradas**.

## GOV-03 — saída formal da Fase 0

O encerramento formal é controlado por:

- GitHub Issue #27 — `GOV-03 — Checklist formal de encerramento da Fase 0`;
- branch `docs/gov-03-phase0-exit-checklist` durante a remediação;
- `docs/governanca/CHECKLIST-ENCERRAMENTO-FASE-0-2026-08-17.md`.

Critérios principais:

1. RN-02.7 integrada;
2. checklist formal aprovado;
3. arquitetura vigente e limites da etapa seguinte confirmados;
4. GitHub/Linear ou fallback auditável sincronizados;
5. nenhum novo escopo funcional implicitamente autorizado.

## Etapas posteriores

A sequência detalhada passa a ser definida exclusivamente pelo Roadmap Mestre. Em termos de capacidade ainda pendente, permanecem entre outras:

- infraestrutura/ambientes e recuperação completos;
- modelo físico completo do domínio;
- UX transversal para módulos futuros;
- patrimônio completo;
- transferências/inventário/ajustes completos;
- obras, eventos e romaneios implementados;
- manutenção patrimonial implementada;
- anexos/QR Code completos;
- relatórios avançados;
- IA operacional;
- qualidade/homologação do produto completo;
- produção controlada com evidência do provider.

## Política de aprovação

- GitHub é a fonte documental/técnica oficial;
- Linear é o controle operacional; quando o limite do workspace impedir nova issue, GitHub Issue/PR pode controlar o ciclo e uma issue Linear existente recebe a evidência;
- documento aprovado torna-se baseline somente após integração correspondente;
- alteração de baseline exige nova revisão;
- entregas usam branch e PR;
- novas implementações, SQL, migrations, mudanças de dados e produção exigem autorização própria.
