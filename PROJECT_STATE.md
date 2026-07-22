# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=0.8.0
UPDATED_AT_UTC=2026-07-22T17:30:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_0_CONCEPCAO_E_MODELAGEM_DO_DOMINIO
ACTIVE_TASK=LEA-117
ACTIVE_PR=NONE
ACTIVE_BRANCH=NONE
ACTIVE_HEAD_REF=main
ACTIVE_HEAD_SHA=3c7f1ff686e01d7b8198d540e8b455f5f37e2b79
LAST_VERIFIED_HEAD=3da8a244cd076c2aeeb6c28d57296acc3b14e5fa
GITHUB_LINEAR_SYNC=PASS
REVIEW_DECISION=LEA_123_PASS_AND_MERGED
IMPLEMENTATION_AUTHORIZED=FOUNDATION_ONLY
MERGE_AUTHORIZED=NO
SQL_AUTHORIZED=NO
MIGRATIONS_AUTHORIZED=NO
PRODUCTION_DEPLOY_AUTHORIZED=NO
SUPABASE_CONNECTED=NO
BLOCKERS=SUPABASE_FREE_PROJECT_LIMIT
NEXT_AUTHORIZED_ACTION=CONTINUAR_RN_02_7_E_RESOLVER_CAPACIDADE_SUPABASE
```

## Identidade

- Produto: PredixAI Operations
- Primeiro módulo: Almoxarifado Inteligente
- Fonte documental e técnica oficial: GitHub
- Controle operacional: Linear
- Frontend base: Next.js com TypeScript
- Hospedagem inicial autorizada: Vercel Hobby para Preview

## Objetivo

Construir uma plataforma de inteligência operacional para controlar materiais, patrimônios, estoques, localizações, movimentações, obras, eventos, romaneios, manutenção e auditoria.

O sistema deve funcionar sem IA. A IA será camada assistiva, sem acesso irrestrito ao banco e sem autonomia para operações críticas.

## Baselines aprovadas

- RN-00 REV1 — PredixAI Domain Dictionary
- RN-01 REV2.1 — Cadastro e classificação de materiais
- RN-02.1 REV1 — Núcleo organizacional
- RN-02.2 REV1 — Usuários, perfis, permissões e responsabilidades
- RN-02.3 REV2 — Materiais, catálogo opcional, atributos e patrimônios
- RN-02.4 REV3 — Estoques, saldos, localizações e WMS leve
- RN-02.5 REV1 — Movimentações e Integridade do Estoque
- RN-02.6 REV1 — Obras, Eventos e Romaneios
- ADR-001 — Estratégia Vercel e Supabase
- Histórico Auditável da Fase 0

## LEA-123 concluída

- PR: #10
- HEAD aprovado: `3da8a244cd076c2aeeb6c28d57296acc3b14e5fa`
- Merge commit: `3c7f1ff686e01d7b8198d540e8b455f5f37e2b79`
- Resultado: PASS com Preview Vercel validado
- Projeto Vercel: `prj_58FHK84iho6Dh24fPqq6HTGQy1ds`
- Deployment validado: `dpl_8w6CU3fR5XhQG71UgDBLw5CLXjem`
- Preview: `https://predixai-operations-pmypc9dur-predix-ai-br.vercel.app`
- Produção: não promovida
- Supabase: não conectado
- Linear: Done

## Documento normativo ativo

- RN-02.7 REV1 — Manutenção e Ciclo de Vida Patrimonial
- Tarefa: LEA-117
- Estado: In Progress
- Pull Request: nenhum

## Infraestrutura

### Vercel

- Equipe: PREDIX AI BR
- Plano autorizado: Hobby, US$ 0/mês
- Projeto criado: sim
- Preview funcional: sim
- Produção autorizada: não

### Supabase

- Organização: leon337's Org
- Plano escolhido: Free, US$ 0/mês
- Projeto PredixAI Operations criado: não
- Bloqueio: limite de dois projetos Free ativos
- SQL e migrations: não autorizados

## Decisões críticas vigentes

1. GitHub é a fonte documental e técnica oficial.
2. Linear acompanha tarefas, dependências e próximas ações.
3. Contexto do chat não substitui documento versionado.
4. A fundação Next.js está autorizada e integrada; fluxos de domínio ainda não estão autorizados.
5. Somente Preview Deploy está autorizado na Vercel.
6. Produção permanece bloqueada.
7. Supabase não será conectado antes da liberação de capacidade e de tarefa específica.
8. Nenhuma tabela, SQL ou migration de domínio está autorizada.
9. A RN-02.7 continua ativa e não foi interrompida.
10. IA não executa operação crítica sem confirmação humana.

## Próximas ações

1. continuar a LEA-117 e modelar a RN-02.7;
2. decidir qual projeto Supabase Free será pausado ou escolher plano pago;
3. após liberar capacidade, executar a LEA-122 sem criar tabelas de domínio;
4. manter produção, SQL e migrations bloqueados;
5. registrar toda mudança futura no GitHub e no Linear.

## Limites

- nenhuma promoção para produção;
- nenhum banco de dados conectado;
- nenhum SQL ou migration;
- nenhum fluxo operacional real;
- nenhuma integração real de IA.

## Regra de leitura do HEAD

O SHA do próprio commit não deve ser gravado autorreferencialmente. O agente deve resolver o HEAD pela `main` e registrar separadamente o último HEAD integralmente validado.