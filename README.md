# PredixAI Operations

Plataforma de inteligência operacional para almoxarifado, patrimônio, eventos, obras, manutenção e módulos empresariais integrados.

## Estado atual

A **Fase 0 — Concepção e Modelagem do Domínio está formalmente encerrada** pelo GOV-03.

Evidência principal:

- RN-00 a RN-02.7: baselines concluídas;
- ADR-002: arquitetura vigente pós-MVP-01 integrada;
- checklist GOV-03: C01–C20 PASS;
- PR #28: merged por squash após HUMAN_GATE explícito;
- HEAD autorizado do PR #28: `2a09f58a2a55a7dbbc9b6a23ced48b5e7e827e6a`;
- CI final do PR #28: `32004213895` — SUCCESS;
- artefato final: `9279441855`;
- review threads: 0;
- commit de integração do GOV-03 no `main`: `c2608693af2023acb05624fe35845db1d25758ad`;
- GitHub Issue #27: closed/completed;
- evidência pós-merge: sincronizada na LEA-117.

O SHA corrente da `main` deve sempre ser resolvido ao vivo; o SHA acima é o snapshot auditável do encerramento GOV-03.

**Nenhuma próxima fase ou implementação foi escolhida automaticamente.** A próxima decisão é selecionar explicitamente o próximo escopo no Roadmap Mestre.

## Arquitetura vigente

A arquitetura materializada pelo MVP-01 e consolidada pela ADR-002 usa:

- **Next.js + TypeScript**;
- **Vercel** para a aplicação web;
- **Supabase `potiguarbd`** (`gotzykqvpgjzmzsyvufx`) para a fatia de backend/dados já materializada;
- PostgreSQL, Auth, RLS, migrations e funções do escopo MVP-01.

A ADR-001 e a topologia ASUS N43SM/FastAPI/PostgreSQL/Ollama permanecem como histórico, não como stack obrigatória atual.

## MVP-01 — Almoxarifado Inteligente

Escopo materializado:

- autenticação por e-mail e senha;
- perfis `owner`, `operator` e `viewer`;
- cadastro e edição de materiais;
- entrada e saída de estoque;
- saldo atual e bloqueio de saída acima do saldo;
- estoque mínimo e alertas;
- histórico auditável de movimentações;
- RLS e funções transacionais do escopo;
- migrations versionadas do MVP-01;
- interface responsiva desktop/mobile;
- testes de estoque 6/6 PASS;
- testes de autorização 6/6 PASS;
- UAT desktop/mobile PASS.

## Fora do MVP-01

Ainda não devem ser tratados como implementados:

- patrimônio completo;
- manutenção patrimonial implementada;
- obras/eventos/romaneios completos;
- transferências, inventário e ajustes completos;
- anexos e QR Code completos;
- relatórios avançados;
- IA operacional;
- modelo físico completo;
- política completa de ambientes, backup/restore e produção controlada.

## Produção

A promoção do MVP-01 para produção recebeu autorização humana histórica, mas a promoção efetiva **não está tecnicamente comprovada no repositório**.

```text
PRODUCTION_PROMOTION_AUTHORIZED=YES
PRODUCTION_PROMOTION_CONFIRMED=UNKNOWN
```

Não declarar produção definitiva sem evidência atual do provider.

## Inicialização obrigatória

1. Ler [`PROJECT_STATE.md`](PROJECT_STATE.md).
2. Ler [`PREDIXAI_OPERATIONS_PROJECT_INSTRUCTIONS.md`](PREDIXAI_OPERATIONS_PROJECT_INSTRUCTIONS.md).
3. Verificar ao vivo `main`, PRs, Issues e CI antes de afirmar estado volátil.
4. Ler a [`ADR-002`](docs/arquitetura/ADR-002-ARQUITETURA-VIGENTE-POS-MVP01.md).
5. Consultar as baselines em [`docs/fase-0`](docs/fase-0).
6. Consultar o [`Roadmap Mestre`](docs/roadmap/ROADMAP-MESTRE-EXECUTAVEL.md).
7. Consultar o [`Checklist GOV-03`](docs/governanca/CHECKLIST-ENCERRAMENTO-FASE-0-2026-08-17.md) como registro auditável do encerramento.
8. Verificar o estado correspondente no Linear ou fallback auditável registrado.

## Documentação principal

- [Estado canônico](PROJECT_STATE.md)
- [Instruções oficiais](PREDIXAI_OPERATIONS_PROJECT_INSTRUCTIONS.md)
- [Visão e arquitetura](docs/fase-0/00-VISAO-E-ARQUITETURA.md)
- [ADR-002 — Arquitetura vigente](docs/arquitetura/ADR-002-ARQUITETURA-VIGENTE-POS-MVP01.md)
- [RN-00 — PredixAI Domain Dictionary](docs/fase-0/RN-00-PREDIXAI-DOMAIN-DICTIONARY.md)
- [RN-01 REV2.1](docs/fase-0/regras-negocio/RN-01-REV2.1-COMPLETA.md)
- [RN-02 — Índice conceitual](docs/fase-0/RN-02-MODELO-CONCEITUAL-DO-DOMINIO.md)
- [RN-02.7 REV1](docs/fase-0/regras-negocio/RN-02.7-REV1-COMPLETA.md)
- [Roadmap Mestre Executável](docs/roadmap/ROADMAP-MESTRE-EXECUTAVEL.md)
- [Checklist formal de encerramento da Fase 0](docs/governanca/CHECKLIST-ENCERRAMENTO-FASE-0-2026-08-17.md)

## Governança

GitHub é a fonte documental e técnica oficial. Linear é o controle operacional oficial; quando o workspace impedir nova issue, o fallback GitHub deve ser auditável e registrado no Linear existente.

Entregas normativas ou de implementação usam branch e Pull Request. Novas implementações, SQL, migrations, alterações de dados, mudanças de provider e produção exigem escopo e autorização próprios.