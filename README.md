# PredixAI Operations

Plataforma de inteligência operacional para almoxarifado, patrimônio, eventos, obras, manutenção e módulos empresariais integrados.

## Estado atual

A **RN-02.7 REV1 — Manutenção e Ciclo de Vida Patrimonial está concluída e integrada ao `main`**. A Fase 0 — Concepção e Modelagem do Domínio permanece aberta somente até o checklist formal de encerramento e a confirmação dos limites arquiteturais da etapa seguinte. Em paralelo, o **MVP-01 do Almoxarifado Inteligente já está incorporado ao `main`**.

Estado técnico resumido:

- MVP-01: merged no PR #18;
- `main` verificado após a integração da RN-02.7: `8fbd006a2b49f810adaf0d2d3f18b6be25421d6c`;
- autenticação, materiais, entradas, saídas, saldo, estoque mínimo, histórico, RLS e interface responsiva: implementados no escopo do MVP-01;
- Supabase utilizado pelo MVP-01: `potiguarbd` (`gotzykqvpgjzmzsyvufx`);
- UAT desktop: PASS;
- UAT móvel final: PASS;
- SEC-02 / Issue #22: remediada pelo PR #23 e integrada ao `main` com `nanoid@3.3.18`;
- workflow oficial do PR #23: PASS, com `npm audit` em 0 vulnerabilidades e build PASS;
- reconciliação documental pós-MVP-01: PR #21 merged; sincronização pós-merge PR #24 merged;
- RN-02.7: PR #13 merged por squash após HUMAN_GATE explícito de Leandro;
- HEAD autorizado do PR #13: `bf279b7ca395608fe6283bfadf7081b6d9e929c9`;
- commit da RN-02.7 no `main`: `8fbd006a2b49f810adaf0d2d3f18b6be25421d6c`;
- workflow final do PR #13: `Dependency Security` run `32000471638` — SUCCESS;
- LEA-117 e LEA-142: Done;
- promoção para produção: autorizada por Leandro em 2026-08-04, mas a promoção efetiva não está tecnicamente comprovada no repositório e não deve ser inferida.

Não há frente normativa RN-02.7 aberta. A próxima etapa de governança, após a sincronização documental pós-merge, é executar o **checklist formal de encerramento da Fase 0**. Isso não autoriza novas implementações, SQL ou migrations.

## Inicialização obrigatória

1. Leia [`PROJECT_STATE.md`](PROJECT_STATE.md).
2. Leia [`PREDIXAI_OPERATIONS_PROJECT_INSTRUCTIONS.md`](PREDIXAI_OPERATIONS_PROJECT_INSTRUCTIONS.md).
3. Verifique ao vivo `main`, PRs, Issues e CI antes de afirmar estado volátil.
4. Consulte o [`PREDIXAI_OPERATIONS_TRONCO_MULTICHAT.md`](PREDIXAI_OPERATIONS_TRONCO_MULTICHAT.md) apenas como histórico auxiliar.
5. Consulte as baselines em [`docs/fase-0`](docs/fase-0).
6. Consulte o roadmap em [`docs/roadmap/ROADMAP-MESTRE-EXECUTAVEL.md`](docs/roadmap/ROADMAP-MESTRE-EXECUTAVEL.md).
7. Verifique o estado correspondente no Linear.

## MVP operacional

- [Guia do MVP Online](docs/mvp/MVP-ONLINE-GUIA-DE-USO.md)

O MVP-01 não representa a conclusão do produto inteiro. Patrimônio completo, manutenção implementada, obras/eventos completos, romaneios completos, relatórios avançados e IA operacional permanecem fora dessa entrega.

## Segurança atual

A SEC-02 foi encerrada:

- Issue #22: Closed / Completed;
- PR #23: merged por squash;
- vulnerabilidade original: `nanoid@3.3.17` com severidade alta;
- correção integrada: `nanoid@3.3.18`;
- advisory: `GHSA-2v37-7h3g-55p8` / `CVE-2026-67213`;
- HEAD validado do PR #23: `e6d54340ceb71a2237cfb2260fc46a216246099e`;
- workflow `Dependency Security` run `31994973803`: SUCCESS;
- `npm ci`: PASS;
- lockfile imutável: PASS;
- `npm audit`: 0 vulnerabilidades;
- `npm run build`: PASS;
- commit de segurança no `main`: `e19da0f3e71b582d9422f65f0bf21cbb80885989`.

O gate de segurança não deve ser relaxado. Novos advisories devem ser tratados como estado volátil e revalidados quando houver decisão operacional dependente de segurança.

## Reconciliação pós-MVP-01

- PR #21: merged por squash;
- HEAD validado: `0794cdcd0294938e472b9cc8f5dfb12c14408dab`;
- workflow final: `31995301015` — SUCCESS;
- commit no `main`: `9e63129d5c0b138bc2d9b887e17545e839ba3844`;
- sincronização pós-merge: PR #24 merged em `0f92baa42baf3bae6c01458e698f8596a4c76760`;
- Linear: LEA-122/143/144/145 canceladas por supersessão do caminho antigo de criação de outro Supabase.

## RN-02.7 — baseline integrada

- LEA-117: Done;
- LEA-138: Done;
- LEA-139: Done / PASS;
- LEA-140: Done / PASS;
- LEA-141: Done / PASS;
- LEA-142: Done / PASS;
- PR #13: merged por squash;
- HEAD autorizado: `bf279b7ca395608fe6283bfadf7081b6d9e929c9`;
- commit no `main`: `8fbd006a2b49f810adaf0d2d3f18b6be25421d6c`;
- workflow final: `32000471638` — SUCCESS;
- documento canônico: [`RN-02.7-REV1-COMPLETA.md`](docs/fase-0/regras-negocio/RN-02.7-REV1-COMPLETA.md).

O cabeçalho processual pré-merge do documento canônico registra o gate em que ele foi validado. O estado operacional pós-merge é controlado pelo `PROJECT_STATE.md` e pela nota auditável de sincronização pós-merge.

## Documentação principal

- [Estado canônico](PROJECT_STATE.md)
- [Visão e arquitetura](docs/fase-0/00-VISAO-E-ARQUITETURA.md)
- [RN-00 — PredixAI Domain Dictionary](docs/fase-0/RN-00-PREDIXAI-DOMAIN-DICTIONARY.md)
- [RN-01 — Cadastro e classificação de materiais](docs/fase-0/RN-01-CADASTRO-E-CLASSIFICACAO-DE-MATERIAIS.md)
- [RN-02 — Modelo conceitual do domínio](docs/fase-0/RN-02-MODELO-CONCEITUAL-DO-DOMINIO.md)
- [RN-02.7 REV1 — Manutenção e Ciclo de Vida Patrimonial](docs/fase-0/regras-negocio/RN-02.7-REV1-COMPLETA.md)
- [Roadmap Mestre Executável](docs/roadmap/ROADMAP-MESTRE-EXECUTAVEL.md)
- [Reconciliação de estado de 2026-08-16](docs/governanca/RECONCILIACAO-ESTADO-2026-08-16.md)
- [Status pós-merge da RN-02.7](docs/governanca/STATUS-POS-MERGE-RN-02.7-2026-08-17.md)

## Governança

GitHub é a fonte documental e técnica oficial. Linear é o controle operacional. O contexto do chat não substitui documentos versionados.

Entregas normativas ou de implementação devem ocorrer por branch e Pull Request. Novas implementações, SQL ou migrations exigem escopo e autorização próprios; a autorização histórica do MVP-01 e a autorização de merge do PR #13 não constituem autorização geral para o restante do roadmap.