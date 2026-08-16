# PredixAI Operations

Plataforma de inteligência operacional para almoxarifado, patrimônio, eventos, obras, manutenção e módulos empresariais integrados.

## Estado atual

O projeto continua com a **Fase 0 — Concepção e Modelagem do Domínio** aberta porque a RN-02.7 ainda não foi concluída. Em paralelo, houve uma entrega acelerada autorizada: o **MVP-01 do Almoxarifado Inteligente já está incorporado ao `main`**.

Estado técnico resumido:

- MVP-01: merged no PR #18;
- `main` verificado na reconciliação: `5dfb29d345d30a32eac0da70ee1b94d9dd6127f8`;
- autenticação, materiais, entradas, saídas, saldo, estoque mínimo, histórico, RLS e interface responsiva: implementados no escopo do MVP-01;
- Supabase utilizado pelo MVP-01: `potiguarbd` (`gotzykqvpgjzmzsyvufx`);
- UAT desktop: PASS;
- UAT móvel final: PASS;
- segurança de dependências no gate final do MVP-01: 0 vulnerabilidades registradas;
- promoção para produção: autorizada por Leandro em 2026-08-04, mas a promoção efetiva não está tecnicamente comprovada no repositório e não deve ser inferida.

A frente normativa ativa permanece a **LEA-117 — RN-02.7 Manutenção e Ciclo de Vida Patrimonial**, no PR Draft #13. LEA-138, LEA-139 e LEA-140 estão concluídas; LEA-141 e LEA-142 permanecem pendentes.

## Inicialização obrigatória

1. Leia [`PROJECT_STATE.md`](PROJECT_STATE.md).
2. Leia [`PREDIXAI_OPERATIONS_PROJECT_INSTRUCTIONS.md`](PREDIXAI_OPERATIONS_PROJECT_INSTRUCTIONS.md).
3. Verifique ao vivo `main`, PRs e Issues antes de afirmar estado volátil.
4. Consulte o [`PREDIXAI_OPERATIONS_TRONCO_MULTICHAT.md`](PREDIXAI_OPERATIONS_TRONCO_MULTICHAT.md) apenas como histórico auxiliar.
5. Consulte as baselines em [`docs/fase-0`](docs/fase-0).
6. Consulte o roadmap em [`docs/roadmap/ROADMAP-MESTRE-EXECUTAVEL.md`](docs/roadmap/ROADMAP-MESTRE-EXECUTAVEL.md).
7. Verifique o estado correspondente no Linear.

## MVP operacional

- [Guia do MVP Online](docs/mvp/MVP-ONLINE-GUIA-DE-USO.md)

O MVP-01 não representa a conclusão do produto inteiro. Patrimônio completo, manutenção, obras/eventos completos, romaneios completos, relatórios avançados e IA operacional permanecem fora dessa entrega.

## Documentação principal

- [Estado canônico](PROJECT_STATE.md)
- [Visão e arquitetura](docs/fase-0/00-VISAO-E-ARQUITETURA.md)
- [RN-00 — PredixAI Domain Dictionary](docs/fase-0/RN-00-PREDIXAI-DOMAIN-DICTIONARY.md)
- [RN-01 — Cadastro e classificação de materiais](docs/fase-0/RN-01-CADASTRO-E-CLASSIFICACAO-DE-MATERIAIS.md)
- [RN-02 — Modelo conceitual do domínio](docs/fase-0/RN-02-MODELO-CONCEITUAL-DO-DOMINIO.md)
- [Roadmap Mestre Executável](docs/roadmap/ROADMAP-MESTRE-EXECUTAVEL.md)
- [Reconciliação de estado de 2026-08-16](docs/governanca/RECONCILIACAO-ESTADO-2026-08-16.md)

## Governança

GitHub é a fonte documental e técnica oficial. Linear é o controle operacional. O contexto do chat não substitui documentos versionados.

Entregas normativas ou de implementação devem ocorrer por branch e Pull Request. Novas implementações, SQL ou migrations exigem escopo e autorização próprios; a autorização histórica do MVP-01 não constitui autorização geral para o restante do roadmap.
