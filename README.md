# PredixAI Operations

Plataforma de inteligência operacional para almoxarifado, patrimônio, eventos, obras, manutenção e módulos empresariais integrados.

## Estado atual

O projeto está no **gate formal de encerramento da Fase 0 — Concepção e Modelagem do Domínio (GOV-03)**.

Estado consolidado:

- RN-00 a RN-02.7: baselines concluídas;
- RN-02.7 REV1 — Manutenção e Ciclo de Vida Patrimonial: integrada pelo PR #13;
- LEA-117 e LEA-138..142: concluídas;
- sincronizações pós-merge da RN-02.7: PRs #25 e #26 concluídos;
- MVP-01 do Almoxarifado Inteligente: integrado ao `main`;
- SEC-02: remediada e integrada;
- GitHub Issue #27: controla o checklist formal de saída da Fase 0;
- nenhuma implementação futura, SQL, migration, alteração de dados ou produção é autorizada automaticamente por esse gate.

O SHA atual deve ser resolvido ao vivo no GitHub; snapshots documentais não substituem essa verificação.

## Arquitetura vigente

A arquitetura materializada pelo MVP-01 usa:

- **Next.js + TypeScript**;
- **Vercel** para a aplicação web;
- **Supabase** para a fatia de backend/dados do MVP-01;
- projeto Supabase reutilizado: `potiguarbd`;
- project ref: `gotzykqvpgjzmzsyvufx`;
- Auth, RLS e migrations no escopo do MVP-01.

A decisão arquitetural consolidada do estado pós-MVP é:

- [`ADR-002 — Arquitetura Vigente Pós-MVP-01`](docs/arquitetura/ADR-002-ARQUITETURA-VIGENTE-POS-MVP01.md)

A ADR-001 e a arquitetura local ASUS/FastAPI/PostgreSQL permanecem como histórico, não como stack atual obrigatória.

## MVP-01 — Almoxarifado Inteligente

Escopo já materializado:

- autenticação por e-mail e senha;
- membros/perfis `owner`, `operator` e `viewer`;
- cadastro e edição de materiais;
- entrada e saída de estoque;
- saldo atual e bloqueio de saída acima do saldo;
- estoque mínimo e alertas;
- histórico auditável de movimentações;
- RLS e funções transacionais do escopo;
- migrations versionadas do MVP-01;
- interface responsiva desktop/mobile;
- CI de dependências/build.

Evidências principais:

- GitHub Issue #17;
- PR #18;
- commit do MVP no `main`: `5dfb29d345d30a32eac0da70ee1b94d9dd6127f8`;
- UAT desktop: PASS;
- UAT móvel: PASS;
- testes de estoque: 6/6 PASS;
- testes de autorização: 6/6 PASS.

## Fora do MVP-01

Ainda não devem ser tratados como implementados:

- patrimônio completo;
- manutenção patrimonial implementada;
- obras/eventos/romaneios completos;
- transferências, inventário e ajustes completos;
- anexos e QR Code completos;
- relatórios avançados;
- IA operacional;
- modelo físico do domínio completo;
- política completa de ambientes, backup/restore e produção controlada.

## Produção

A promoção do MVP-01 para produção recebeu autorização humana histórica, mas **a promoção efetiva não está tecnicamente comprovada no repositório**.

Logo:

```text
PRODUCTION_PROMOTION_AUTHORIZED=YES
PRODUCTION_PROMOTION_CONFIRMED=UNKNOWN
```

Não declarar produção definitiva sem evidência atual do provider.

## Inicialização obrigatória

1. Ler [`PROJECT_STATE.md`](PROJECT_STATE.md).
2. Ler [`PREDIXAI_OPERATIONS_PROJECT_INSTRUCTIONS.md`](PREDIXAI_OPERATIONS_PROJECT_INSTRUCTIONS.md).
3. Verificar ao vivo `main`, PRs, Issues e CI antes de afirmar estado volátil.
4. Ler a [`ADR-002`](docs/arquitetura/ADR-002-ARQUITETURA-VIGENTE-POS-MVP01.md) para arquitetura atual.
5. Consultar as baselines em [`docs/fase-0`](docs/fase-0).
6. Consultar o [`Roadmap Mestre`](docs/roadmap/ROADMAP-MESTRE-EXECUTAVEL.md).
7. Consultar o [`Checklist GOV-03`](docs/governanca/CHECKLIST-ENCERRAMENTO-FASE-0-2026-08-17.md) enquanto a Fase 0 estiver no gate de saída.
8. Verificar o estado correspondente no Linear ou o fallback auditável registrado.

## Documentação principal

- [Estado canônico](PROJECT_STATE.md)
- [Instruções oficiais](PREDIXAI_OPERATIONS_PROJECT_INSTRUCTIONS.md)
- [Visão e arquitetura](docs/fase-0/00-VISAO-E-ARQUITETURA.md)
- [ADR-002 — Arquitetura vigente](docs/arquitetura/ADR-002-ARQUITETURA-VIGENTE-POS-MVP01.md)
- [RN-00 — PredixAI Domain Dictionary](docs/fase-0/RN-00-PREDIXAI-DOMAIN-DICTIONARY.md)
- [RN-01 REV2.1](docs/fase-0/regras-negocio/RN-01-REV2.1-COMPLETA.md)
- [RN-02 — Índice conceitual atualizado](docs/fase-0/RN-02-MODELO-CONCEITUAL-DO-DOMINIO.md)
- [RN-02.7 REV1](docs/fase-0/regras-negocio/RN-02.7-REV1-COMPLETA.md)
- [Roadmap Mestre Executável](docs/roadmap/ROADMAP-MESTRE-EXECUTAVEL.md)
- [Checklist formal de encerramento da Fase 0](docs/governanca/CHECKLIST-ENCERRAMENTO-FASE-0-2026-08-17.md)

## Governança

GitHub é a fonte documental e técnica oficial. Linear é o controle operacional oficial. Quando o workspace Linear impedir nova issue, um GitHub Issue/PR pode controlar o ciclo e uma issue Linear existente deve receber a evidência correspondente.

Entregas normativas ou de implementação usam branch e Pull Request. Novas implementações, SQL, migrations, alterações de dados, mudanças de provider e produção exigem escopo e autorização próprios.
