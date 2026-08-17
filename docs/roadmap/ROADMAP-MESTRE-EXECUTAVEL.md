# Roadmap Mestre Executável — PredixAI Operations

## Objetivo final

Entregar um sistema operacional de almoxarifado inteligente, auditável e seguro, com frontend web/mobile, backend Supabase, controle de materiais, patrimônios, estoques, movimentações, obras, eventos, romaneios, manutenção e relatórios, preservando decisão humana em operações críticas.

## Leitura obrigatória do roadmap

Este roadmap descreve a sequência arquitetural planejada. Em agosto de 2026 ocorreu uma **execução acelerada autorizada**, denominada MVP-01, que implementou antecipadamente uma fatia vertical de funcionalidades originalmente distribuídas entre as Fases 1 a 4.

Isso não significa que as Fases 1 a 4 estejam concluídas integralmente. Significa apenas que existe uma fatia operacional já integrada ao `main`.

Snapshot reconciliado em 2026-08-17:

- `main`: `e19da0f3e71b582d9422f65f0bf21cbb80885989`;
- MVP-01: GitHub Issue #17 concluída;
- PR #18: merged;
- UAT desktop: PASS;
- UAT móvel final: PASS;
- Supabase utilizado: `potiguarbd`;
- SEC-02 / Issue #22: remediada e concluída;
- PR #23: merged, com `nanoid@3.3.18` integrado;
- workflow de segurança do PR #23: PASS, `npm audit` 0 vulnerabilidades e build PASS;
- promoção para produção: autorizada, porém não tecnicamente confirmada no repositório;
- RN-02.7: ainda em andamento no PR #13;
- reconciliação: PR #21 pendente de novo reteste e HUMAN_GATE.

## Fase 0 — Domínio e governança

### Concluído

- RN-00 a RN-02.6;
- histórico auditável;
- ADR Vercel/Supabase;
- base Next.js e Preview Vercel;
- política de checklist e roadmap;
- LEA-138 — RN-02.7 entidades e ciclo de estados;
- LEA-139 — execução, peças, serviços, custos e garantias;
- LEA-140 — falhas, reincidência e decisões de ciclo de vida.

### Em andamento

- LEA-117 — RN-02.7 Manutenção e Ciclo de Vida Patrimonial;
- LEA-141 — integração com RN-02.3, RN-02.5 e RN-02.6;
- PR #21 — reconciliação documental pós-MVP-01 e pós-SEC-02.

### Pendente

- LEA-142 — revisão crítica final, remediação, reteste e congelamento da baseline.

### Critério de saída

- RN-02.7 integrada;
- checklist de encerramento da Fase 0 aprovado;
- arquitetura e limites das próximas implementações confirmados.

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
- manutenção patrimonial;
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

## Próxima sequência canônica após a reconciliação

1. retestar o PR #21 contra o `main` atual e exigir PASS do gate;
2. solicitar HUMAN_GATE antes do merge do PR #21;
3. após integração da reconciliação, retomar LEA-141 no PR #13;
4. executar LEA-142 com revisão crítica sobre HEAD exato;
5. solicitar novo gate antes de merge do PR #13;
6. tratar futuras implementações como novos escopos autorizados, sem herdar automaticamente a autorização do MVP-01.

## Gates permanentes

- nenhuma tarefa Done sem evidência;
- nenhuma integração na `main` sem PR;
- nenhuma operação destrutiva sem autoridade compatível com o risco;
- novas migrations/SQL exigem escopo autorizado;
- autorização para produção não equivale a confirmação de deploy;
- vulnerabilidades High/Critical bloqueiam integração até remediação e reteste;
- toda etapa deve atualizar Linear, GitHub e `PROJECT_STATE.md` quando alterar o estado oficial;
- snapshots de provider e auditorias históricas não substituem verificação atual quando a decisão depende do estado presente.
