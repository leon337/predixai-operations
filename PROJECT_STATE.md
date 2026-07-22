# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=0.9.0
UPDATED_AT_UTC=2026-07-22T18:49:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_0_CONCEPCAO_E_MODELAGEM_DO_DOMINIO
PRIMARY_ACTIVE_TASK=LEA-117
GOVERNANCE_ACTIVE_TASK=LEA-134
INFRA_BLOCKED_TASK=LEA-122
ACTIVE_PR=RESOLVE_FROM_PR_METADATA
ACTIVE_BRANCH=docs/lea-134-checklist-roadmap
ACTIVE_HEAD_REF=docs/lea-134-checklist-roadmap
ACTIVE_HEAD_SHA=RESOLVE_FROM_PR_METADATA
LAST_VERIFIED_MAIN=1e01b21d35d8ff20f0200eb1160aca88a3525ab2
GITHUB_LINEAR_SYNC=IN_PROGRESS
REVIEW_DECISION=PENDING_REVIEW
IMPLEMENTATION_AUTHORIZED=FOUNDATION_ONLY
MERGE_AUTHORIZED=NO
SQL_AUTHORIZED=NO
MIGRATIONS_AUTHORIZED=NO
PRODUCTION_DEPLOY_AUTHORIZED=NO
SUPABASE_CONNECTED=NO
BLOCKERS=SUPABASE_FREE_PROJECT_LIMIT_AND_NOMINAL_PAUSE_DECISION
NEXT_AUTHORIZED_ACTION=REVIEW_GOVERNANCE_PR_AND_CONTINUE_RN_02_7_SUBTASK_LEA_138
```

## Identidade

- Produto: PredixAI Operations
- Primeiro módulo: Almoxarifado Inteligente
- Fonte documental e técnica oficial: GitHub
- Controle operacional: Linear
- Frontend base: Next.js com TypeScript
- Hospedagem inicial autorizada: Vercel Hobby para Preview

## Objetivo final

Construir um sistema operacional de almoxarifado inteligente, auditável e seguro, com controle de materiais, patrimônios, estoques, movimentações, obras, eventos, romaneios, manutenção e relatórios.

O sistema deve funcionar sem IA. A IA será camada assistiva, sem acesso irrestrito ao banco e sem autonomia para operações críticas.

## Políticas obrigatórias

- `docs/governanca/POLITICA-CHECKLIST-E-PROXIMA-ACAO.md`
- `docs/roadmap/ROADMAP-MESTRE-EXECUTAVEL.md`
- `docs/governanca/HISTORICO-AUDITAVEL-FASE-0.md`
- `docs/arquitetura/ADR-001-VERCEL-SUPABASE.md`

Toda resposta operacional deve terminar com checklist por estado, tarefas e subtarefas Linear, evidências GitHub e uma única ação sugerida.

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

## Fundação técnica concluída

### LEA-123

- PR: #10
- HEAD aprovado: `3da8a244cd076c2aeeb6c28d57296acc3b14e5fa`
- Merge commit: `3c7f1ff686e01d7b8198d540e8b455f5f37e2b79`
- Projeto Vercel: `prj_58FHK84iho6Dh24fPqq6HTGQy1ds`
- Deployment validado: `dpl_8w6CU3fR5XhQG71UgDBLw5CLXjem`
- Preview: `https://predixai-operations-pmypc9dur-predix-ai-br.vercel.app`
- Produção: não promovida

## Governança ativa

### LEA-134 — GOV-02

- LEA-135 — política de checklist e próxima ação: In Progress
- LEA-136 — roadmap mestre: In Progress
- LEA-137 — atualização de estado e rastreabilidade: In Progress
- Branch: `docs/lea-134-checklist-roadmap`
- Merge: não autorizado

## Documento normativo ativo

### LEA-117 — RN-02.7 Manutenção e Ciclo de Vida Patrimonial

- Estado: In Progress
- LEA-138 — entidades e ciclos de estado: In Progress
- LEA-139 — execução, peças, serviços, custos e garantias: Todo
- LEA-140 — falhas, reincidência e ciclo de vida: Todo
- LEA-141 — integração com RN-02.3, RN-02.5 e RN-02.6: Todo
- LEA-142 — revisão, remediação e baseline: Todo
- Implementação, SQL e migrations: não autorizados

## Infraestrutura

### Vercel

- Equipe: PREDIX AI BR
- Plano autorizado: Hobby, US$ 0/mês
- Projeto criado: sim
- Preview funcional: sim
- Produção autorizada: não

### Supabase — LEA-122

- Organização: leon337's Org
- Plano escolhido: Free, US$ 0/mês
- Projeto PredixAI Operations criado: não
- Bloqueio: dois projetos Free ativos
- Projetos ativos verificados:
  - `predixai-academy` — `bexwaglmhncvstjhwlfz`
  - `predixai-brand-site` — `vcmvdmxmkmekcurcfdze`
- LEA-143 — escolher nominalmente o projeto a pausar: In Progress
- LEA-144 — pausar o projeto autorizado: Todo, bloqueada pela LEA-143
- LEA-145 — criar `predixai-operations`: Todo, bloqueada pela LEA-144
- Nenhum projeto pode ser pausado por inferência
- SQL e migrations: não autorizados

## Decisões críticas vigentes

1. GitHub é a fonte documental e técnica oficial.
2. Linear acompanha tarefas, dependências e próximas ações.
3. Contexto do chat não substitui documento versionado.
4. Toda resposta operacional termina com checklist e ação sugerida.
5. Nenhuma tarefa é concluída sem evidência verificável.
6. A fundação Next.js está integrada; fluxos de domínio ainda não estão autorizados.
7. Somente Preview Deploy está autorizado na Vercel.
8. Produção permanece bloqueada.
9. Supabase depende de autorização nominal para pausar um projeto existente.
10. Nenhuma tabela, SQL ou migration de domínio está autorizada.
11. A RN-02.7 continua como frente normativa principal.
12. IA não executa operação crítica sem confirmação humana.

## Próximas ações autorizadas

1. revisar o PR da LEA-134;
2. continuar a LEA-138 e publicar a primeira versão da RN-02.7;
3. obter autorização nominal para pausar `predixai-academy` ou `predixai-brand-site`;
4. manter produção, SQL e migrations bloqueados.

## Regra de leitura do HEAD

O SHA do próprio commit não deve ser gravado autorreferencialmente. O agente deve resolver o HEAD pelo PR ativo e registrar separadamente o último HEAD integralmente validado.