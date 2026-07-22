# Roadmap Mestre Executável — PredixAI Operations

## Objetivo final

Entregar um sistema operacional de almoxarifado inteligente, auditável e seguro, com frontend web/mobile, backend Supabase, controle de materiais, patrimônios, estoques, movimentações, obras, eventos, romaneios, manutenção e relatórios, preservando decisão humana em operações críticas.

## Fase 0 — Domínio e governança

### Concluído
- RN-00 a RN-02.6;
- histórico auditável;
- ADR Vercel/Supabase;
- base Next.js e Preview Vercel;
- política de checklist e roadmap.

### Em andamento
- LEA-117 — RN-02.7 Manutenção e Ciclo de Vida Patrimonial.

### Critério de saída
- RN-02.7 integrada;
- checklist de encerramento da Fase 0 aprovado;
- MVP congelado;
- arquitetura e limites de implementação confirmados.

## Fase 1 — Fundação de infraestrutura

### Tarefas principais
- LEA-122 — provisionar projeto Supabase;
- configurar ambientes local, preview e produção;
- política de secrets e variáveis;
- CI mínimo de build, typecheck e lint;
- estratégia de backups e recuperação.

### Critério de saída
- Supabase criado e saudável;
- nenhum segredo no GitHub;
- Preview Vercel reproduzível;
- produção ainda bloqueada.

## Fase 2 — Modelo de dados e segurança

### Tarefas principais
- modelo entidade-relacionamento;
- migrations versionadas;
- autenticação;
- usuários, perfis e permissões;
- Row Level Security;
- auditoria e trilha de eventos;
- seed mínimo não sensível.

### Critério de saída
- migrations revisadas;
- políticas RLS testadas;
- ambiente de desenvolvimento funcional;
- nenhuma promoção automática para produção.

## Fase 3 — Estrutura real da aplicação

### Tarefas principais
- layout autenticado;
- navegação mobile-first;
- dashboard operacional;
- estados vazios, carregamento e erro;
- design system e acessibilidade;
- tratamento de sessão.

### Critério de saída
- navegação completa em Preview;
- autenticação funcional;
- nenhum módulo crítico liberado sem permissões.

## Fase 4 — MVP operacional

### Sequência recomendada
1. empresas, unidades, usuários e perfis;
2. materiais, catálogo e patrimônios;
3. estoques e localizações;
4. entradas, saídas e transferências;
5. inventário e ajustes;
6. obras, eventos e romaneios;
7. manutenção patrimonial;
8. anexos, QR Code e auditoria.

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

### Critério de saída
- zero bloqueador crítico aberto;
- plano de rollback aprovado;
- checklist de produção aprovado.

## Fase 6 — Produção controlada

### Tarefas principais
- escolher plano Vercel adequado ao uso comercial;
- escolher plano Supabase adequado a disponibilidade e backup;
- configurar domínio, observabilidade e alertas;
- executar backup inicial;
- promover release aprovada;
- acompanhar operação assistida.

### Critério de saída
- produção explicitamente autorizada;
- monitoramento ativo;
- suporte e contingência documentados.

## Fase 7 — Evolução

- relatórios e indicadores avançados;
- automações assistivas;
- IA com escopo restrito e confirmação humana;
- integrações externas;
- RFID, Digital Twin e manutenção preditiva;
- otimização logística.

## Gates permanentes

- nenhuma tarefa Done sem evidência;
- nenhuma integração na main sem PR;
- nenhuma operação destrutiva sem autorização nominal;
- nenhum SQL ou migration antes da tarefa correspondente;
- nenhuma produção sem gate próprio;
- toda etapa deve atualizar Linear, GitHub e `PROJECT_STATE.md` quando alterar o estado oficial.