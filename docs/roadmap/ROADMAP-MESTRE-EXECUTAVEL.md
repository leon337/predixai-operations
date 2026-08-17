# Roadmap Mestre Executável — PredixAI Operations

## Objetivo final

Entregar um sistema operacional de almoxarifado inteligente, auditável e seguro, com frontend web/mobile, backend Supabase, controle de materiais, patrimônios, estoques, movimentações, obras, eventos, romaneios, manutenção e relatórios, preservando decisão humana em operações críticas.

## Leitura obrigatória do roadmap

Este roadmap descreve a sequência arquitetural planejada. Em agosto de 2026 ocorreu uma **execução acelerada autorizada**, denominada MVP-01, que implementou antecipadamente uma fatia vertical de funcionalidades originalmente distribuídas entre as Fases 1 a 4.

Isso não significa que as Fases 1 a 4 estejam concluídas integralmente. Significa apenas que existe uma fatia operacional já integrada ao `main`.

Snapshot reconciliado em 2026-08-17:

- `main` verificado após a integração da RN-02.7: `8fbd006a2b49f810adaf0d2d3f18b6be25421d6c`;
- MVP-01: GitHub Issue #17 concluída;
- PR #18: merged;
- UAT desktop: PASS;
- UAT móvel final: PASS;
- Supabase utilizado: `potiguarbd`;
- SEC-02 / Issue #22: remediada e concluída;
- PR #23: merged, com `nanoid@3.3.18` integrado;
- workflow de segurança do PR #23: PASS, `npm audit` 0 vulnerabilidades e build PASS;
- reconciliação documental PR #21: retestada, autorizada e merged por squash;
- sincronização pós-reconciliação PR #24: merged;
- RN-02.7 REV1: concluída e integrada pelo PR #13;
- LEA-117: Done;
- LEA-138 a LEA-142: Done;
- workflow final do PR #13: `32000471638` — SUCCESS;
- promoção para produção: autorizada, porém não tecnicamente confirmada no repositório;
- próxima etapa de governança: sincronização documental pós-merge e checklist formal de encerramento da Fase 0.

## Fase 0 — Domínio e governança

### Concluído

- RN-00 a RN-02.7;
- histórico auditável;
- ADR Vercel/Supabase;
- base Next.js e Preview Vercel;
- política de checklist e roadmap;
- reconciliação documental pós-MVP-01 — PR #21 merged;
- sincronização pós-reconciliação — PR #24 merged;
- LEA-138 — RN-02.7 entidades e ciclo de estados;
- LEA-139 — execução, peças, serviços, custos e garantias;
- LEA-140 — falhas, reincidência e decisões de ciclo de vida;
- LEA-141 — integração com RN-02.3, RN-02.5 e RN-02.6;
- LEA-142 — revisão crítica final, remediação, reteste e consolidação;
- LEA-117 — RN-02.7 Manutenção e Ciclo de Vida Patrimonial — Done;
- PR #13 — merged por squash no `main` em `8fbd006a2b49f810adaf0d2d3f18b6be25421d6c`.

### Em andamento

- sincronização documental pós-merge do PR #13 em PR próprio.

### Próxima etapa

- executar o checklist formal de encerramento da Fase 0;
- confirmar arquitetura e limites autorizáveis da etapa seguinte antes de qualquer nova implementação.

### Pendente para saída formal da Fase 0

- checklist de encerramento da Fase 0 aprovado;
- arquitetura e limites das próximas implementações confirmados.

### Critério de saída

- RN-02.7 integrada — **ATENDIDO**;
- checklist de encerramento da Fase 0 aprovado — **PENDENTE**;
- arquitetura e limites das próximas implementações confirmados — **PENDENTE**.

## Entrega acelerada — MVP-01 Almoxarifado Inteligente

### Estado

`CONCLUÍDO E INTEGRADO AO MAIN`

### Evidência principal

- GitHub Issue #17;
- PR #18;
- HEAD aprovado: `5388b01883b9198b60be57c1e275cdd9c0d993d6`;
- commit do MVP no `main`: `5dfb29d345d30a32eac0da70ee1b94d9dd6127f8`.

### Escopo entregue

- autenticação por e-mail e senha;
- membros e perfis `owner`, `operator` e `viewer`;
- cadastro e edição de materiais;
- entradas e saídas;
- saldo atual;
- estoque mínimo e alertas;
- bloqueio de saída superior ao saldo;
- histórico auditável;
- RLS e funções transacionais;
- migrations do escopo MVP-01;
- interface responsiva desktop/mobile;
- lockfile e CI de auditoria/build.

### Validação registrada

- testes de estoque: 6/6 PASS;
- testes de autorização: 6/6 PASS;
- UAT desktop: PASS;
- UAT móvel final: PASS;
- segurança de dependências no gate de 2026-08-04: 0 vulnerabilidades naquele momento;
- SEC-02 descoberta posteriormente e remediada no PR #23;
- segurança do PR #23 em 2026-08-17: 0 vulnerabilidades, build PASS.

### Limites

O MVP-01 não libera automaticamente as demais funcionalidades do produto e não altera a necessidade de novos gates para futuras implementações, SQL, migrations ou produção.

## Segurança transversal — SEC-02

### Estado

`CONCLUÍDA E INTEGRADA AO MAIN`

### Evidência

- Issue #22 — Closed / Completed;
- PR #23 — merged por squash;
- vulnerabilidade original: `nanoid@3.3.17` / High;
- correção: `nanoid@3.3.18`;
- HEAD validado: `e6d54340ceb71a2237cfb2260fc46a216246099e`;
- workflow `Dependency Security` run `31994973803`: SUCCESS;
- `npm ci`: PASS;
- lockfile imutável: PASS;
- `npm audit`: 0 vulnerabilidades;
- build: PASS;
- commit integrado: `e19da0f3e71b582d9422f65f0bf21cbb80885989`.

### Regra

Resultados de auditoria são temporais. Um PASS histórico não substitui uma nova verificação quando advisories ou dependências mudarem.

## Reconciliação documental pós-MVP-01

### Estado

`CONCLUÍDA E INTEGRADA AO MAIN`

### Evidência

- PR #21 — merged por squash;
- HEAD validado: `0794cdcd0294938e472b9cc8f5dfb12c14408dab`;
- merge virtual validado sobre o `main` pós-SEC-02;
- workflow `Dependency Security` run `31995301015`: SUCCESS;
- `npm ci`: PASS;
- auditoria e gate High/Critical: PASS;
- build: PASS;
- quatro arquivos Markdown no diff;
- review threads pendentes: zero;
- commit integrado no `main`: `9e63129d5c0b138bc2d9b887e17545e839ba3844`;
- PR #24 de sincronização pós-merge integrado em `0f92baa42baf3bae6c01458e698f8596a4c76760`.

### Resultado

O estado canônico reconhece simultaneamente:

- Fase 0 com todas as baselines RN-00 a RN-02.7 integradas, mas ainda aguardando checklist formal de saída;
- MVP-01 já integrado;
- SEC-02 resolvida;
- caminho Supabase antigo cancelado por supersessão;
- produção autorizada, porém ainda sem confirmação técnica de promoção;
- RN-02.7 integrada pelo PR #13 e LEA-117 concluída.

## RN-02.7 — Manutenção e Ciclo de Vida Patrimonial

### Estado

`CONCLUÍDA E INTEGRADA AO MAIN`

### Evidência

- tarefa principal: LEA-117 — Done;
- LEA-138 — Done;
- LEA-139 — Done / PASS;
- LEA-140 — Done / PASS;
- LEA-141 — Done / PASS;
- LEA-142 — Done / PASS;
- revisão inicial LEA-142: `FAIL_REMEDIABLE` sobre `3e91752a41930494661039e4a1ef3567892c2990`;
- achados LEA-142-F01..F08: remediados;
- HEAD substantivo final: `d14bfc3fe202a04c27f6ead81a7efa9d6e57d06c`;
- HEAD final autorizado: `bf279b7ca395608fe6283bfadf7081b6d9e929c9`;
- workflow final `Dependency Security` run `32000471638`: SUCCESS;
- artefato final: `9278204797`;
- PR #13: merged por squash após HUMAN_GATE explícito de Leandro;
- commit integrado: `8fbd006a2b49f810adaf0d2d3f18b6be25421d6c`;
- documento canônico: `docs/fase-0/regras-negocio/RN-02.7-REV1-COMPLETA.md`.

### Limite

A conclusão da baseline RN-02.7 não significa que o módulo de manutenção esteja implementado. Implementação, SQL, migrations e integrações reais continuam sujeitos a escopo e autorização próprios.

## Fase 1 — Fundação de infraestrutura

### Planejado originalmente

- LEA-122 — provisionar projeto Supabase exclusivo;
- configurar ambientes local, preview e produção;
- política de secrets e variáveis;
- CI mínimo de build, typecheck e lint;
- estratégia de backups e recuperação.

### Estado após MVP-01

- Vercel: utilizado e validado em preview;
- CI de dependências/build: materializado para o MVP-01;
- Supabase exclusivo novo: **não criado**;
- decisão operacional aplicada: reutilização do `potiguarbd` (`gotzykqvpgjzmzsyvufx`);
- LEA-122/143/144/145: caminho original superado e formalmente cancelado por supersessão em 2026-08-16;
- política completa de ambientes, backups e recuperação: ainda não concluída para o produto inteiro.

### Critério de saída da fase completa

- infraestrutura alvo formalmente consolidada;
- nenhum segredo no GitHub;
- Preview Vercel reproduzível;
- política de backup e recuperação definida;
- produção tecnicamente confirmada somente quando houver evidência do provider.

## Fase 2 — Modelo de dados e segurança

### Tarefas principais

- modelo entidade-relacionamento completo;
- migrations versionadas do domínio completo;
- autenticação;
- usuários, perfis e permissões;
- Row Level Security;
- auditoria e trilha de eventos;
- seed mínimo não sensível.

### Parcialmente antecipado pelo MVP-01

- migrations versionadas: sim, apenas para o escopo MVP-01;
- autenticação: sim, no MVP-01;
- membros/perfis básicos: sim, no MVP-01;
- RLS: sim, no MVP-01;
- trilha de movimentações: sim, no MVP-01.

O modelo físico do domínio completo continua pendente e não deve ser confundido com a fatia implementada.

### Critério de saída

- migrations do domínio completo revisadas;
- políticas RLS testadas em todos os módulos aplicáveis;
- ambiente de desenvolvimento funcional;
- segurança e auditoria verificadas para o escopo completo.

## Fase 3 — Estrutura real da aplicação

### Tarefas principais

- layout autenticado;
- navegação mobile-first;
- dashboard operacional;
- estados vazios, carregamento e erro;
- design system e acessibilidade;
- tratamento de sessão.

### Parcialmente antecipado pelo MVP-01

- layout autenticado funcional;
- navegação responsiva;
- dashboard operacional do estoque;
- experiência desktop/mobile validada.

A cobertura de UX ainda não é considerada completa para todos os módulos futuros.

### Critério de saída

- navegação completa em Preview;
- autenticação funcional;
- nenhum módulo crítico liberado sem permissões;
- acessibilidade e estados transversais validados no produto completo.

## Fase 4 — MVP operacional ampliado

### Sequência planejada

1. empresas, unidades, usuários e perfis;
2. materiais, catálogo e patrimônios;
3. estoques e localizações;
4. entradas, saídas e transferências;
5. inventário e ajustes;
6. obras, eventos e romaneios;
7. manutenção patrimonial;
8. anexos, QR Code e auditoria.

### Já entregue na fatia MVP-01

- autenticação e acesso de membros;
- materiais básicos;
- estoque básico;
- entradas e saídas;
- histórico;
- estoque mínimo e alertas.

### Ainda pendente no MVP ampliado

- empresas/unidades completas;
- catálogo e patrimônios completos;
- transferências, inventário e ajustes completos;
- obras, eventos e romaneios;
- manutenção patrimonial implementada;
- anexos e QR Code completos;
- auditoria transversal completa.

### Critério de saída

- fluxos principais testáveis ponta a ponta;
- regras das baselines aplicadas;
- permissões e auditoria verificadas.

## Fase 5 — Qualidade e homologação

### Tarefas principais

- testes unitários e de integração;
- testes de permissões e RLS;
- testes E2E dos fluxos críticos;
- testes mobile e acessibilidade;
- desempenho e recuperação;
- homologação com usuários reais em ambiente controlado.

### Evidência antecipada existente

O MVP-01 já possui UAT desktop/mobile e testes específicos de estoque/autorização. Essa evidência é válida para o MVP-01, mas não substitui a homologação do produto completo.

### Critério de saída

- zero bloqueador crítico aberto;
- plano de rollback aprovado;
- checklist de produção aprovado.

## Fase 6 — Produção controlada

### Tarefas principais

- escolher planos adequados ao uso real;
- configurar domínio, observabilidade e alertas;
- executar backup inicial;
- promover release aprovada;
- acompanhar operação assistida.

### Estado do MVP-01

Leandro autorizou merge e promoção em 2026-08-04. O merge foi comprovado. A interface disponível naquele ciclo não permitiu comprovar a operação de promoção da Vercel, e o deployment registrado permaneceu com `target: null` no último registro auditável.

Logo:

`PRODUCTION_PROMOTION_AUTHORIZED=YES`

`PRODUCTION_PROMOTION_CONFIRMED=UNKNOWN`

Nenhuma documentação deve converter autorização em confirmação técnica sem nova evidência do provider.

### Critério de saída

- produção tecnicamente confirmada;
- monitoramento ativo;
- suporte e contingência documentados.

## Fase 7 — Evolução

- relatórios e indicadores avançados;
- automações assistivas;
- IA com escopo restrito e confirmação humana;
- integrações externas;
- RFID, Digital Twin e manutenção preditiva;
- otimização logística.

## Próxima sequência canônica

1. validar a sincronização documental pós-merge do PR #13 em branch/PR próprio;
2. solicitar HUMAN_GATE separado antes de integrar essa sincronização documental;
3. após a sincronização, executar o checklist formal de encerramento da Fase 0;
4. confirmar arquitetura, escopo e limites da etapa seguinte antes de autorizar qualquer nova implementação, SQL ou migration;
5. tratar a promoção de produção como não confirmada até existir evidência atual do provider.

## Gates permanentes

- nenhuma tarefa Done sem evidência;
- nenhuma integração na `main` sem PR;
- nenhuma operação destrutiva sem autoridade compatível com o risco;
- novas migrations/SQL exigem escopo autorizado;
- autorização para produção não equivale a confirmação de deploy;
- vulnerabilidades High/Critical bloqueiam integração até remediação e reteste;
- toda etapa deve atualizar Linear, GitHub e `PROJECT_STATE.md` quando alterar o estado oficial;
- snapshots de provider e auditorias históricas não substituem verificação atual quando a decisão depende do estado presente.