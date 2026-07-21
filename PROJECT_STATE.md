# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=0.6.0
UPDATED_AT_UTC=2026-07-21T08:05:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_0_CONCEPCAO_E_MODELAGEM_DO_DOMINIO
ACTIVE_TASK=LEA-64
ACTIVE_PR=PENDING_CREATION
ACTIVE_BRANCH=docs/lea-64-rn-02-6-obras-eventos-romaneios
ACTIVE_HEAD_REF=docs/lea-64-rn-02-6-obras-eventos-romaneios
ACTIVE_HEAD_SHA=RESOLVE_FROM_PR_METADATA
LAST_VERIFIED_HEAD=NONE_FOR_LEA_64
GITHUB_LINEAR_SYNC=PASS
REVIEW_DECISION=PENDING
IMPLEMENTATION_AUTHORIZED=NO
MERGE_AUTHORIZED=NO
SQL_AUTHORIZED=NO
MIGRATIONS_AUTHORIZED=NO
BLOCKERS=REVIEW_AND_MERGE_OF_RN_02_6_REV1
NEXT_AUTHORIZED_ACTION=ABRIR_PR_DRAFT_E_EXECUTAR_REVISAO_CRITICA
```

## Identidade

- Produto: PredixAI Operations
- Primeiro módulo: Almoxarifado Inteligente
- Estado do código: não iniciado
- Fonte documental oficial: GitHub
- Controle operacional: Linear

## Objetivo

Construir uma plataforma de inteligência operacional, inicialmente executada em notebook Linux como servidor local, para controlar materiais, patrimônios, estoques, localizações, movimentações, obras, eventos, romaneios, manutenção e auditoria.

O sistema deve funcionar sem IA. A IA é camada assistiva, sem acesso irrestrito ao banco e sem autonomia para operações críticas.

## Baselines aprovadas

- RN-00 REV1 — PredixAI Domain Dictionary
- RN-01 REV2.1 — Cadastro e classificação de materiais
- RN-02.1 REV1 — Núcleo organizacional
- RN-02.2 REV1 — Usuários, perfis, permissões e responsabilidades
- RN-02.3 REV2 — Materiais, catálogo opcional, atributos e patrimônios
- RN-02.4 REV3 — Estoques, saldos, localizações e WMS leve
- RN-02.5 REV1 — Movimentações e Integridade do Estoque

## LEA-58 concluída

- PR: #5
- HEAD aprovado: `3ad4d57e64d84e4aa3d79b9ebfafacb45d35dcab`
- Merge commit: `87395724d23e26926758efd67650f3b76dcf8d84`
- Reteste: PASS
- Linear: Done
- Resultado: RN-02.5 REV1 congelada como baseline

## Documento ativo

- RN-02.6 REV1 — Obras, Eventos e Romaneios
- Estado: EM ELABORAÇÃO
- Baseline: NÃO
- Tarefa: LEA-64
- Branch: `docs/lea-64-rn-02-6-obras-eventos-romaneios`
- Documento: `docs/fase-0/regras-negocio/RN-02.6-REV1-COMPLETA.md`

## Escopo da LEA-64

- Obras, Eventos e Centros Operacionais associados;
- Demanda Operacional e itens planejados;
- Reservas vinculadas ao planejamento;
- Romaneio e versionamento imutável;
- separação, conferência, expedição e transporte;
- recebimento total, parcial ou com divergência;
- uso, guarda, retorno e devolução;
- perdas, avarias e pendências;
- encerramento operacional e administrativo;
- integração conceitual com RN-02.5;
- responsabilidades, autorizações e IA assistiva.

## Decisões críticas vigentes

1. GitHub é a fonte documental e técnica oficial.
2. Linear acompanha tarefas, dependências e próxima ação.
3. Contexto do chat não substitui documento versionado.
4. O Razão de Movimentações é a fonte oficial do saldo.
5. Romaneio é documento versionado e não substitui Operação de Negócio.
6. Planejamento não altera saldo; Reserva confirmada compromete Saldo Disponível.
7. Versão aprovada de Romaneio é imutável.
8. Expedição, Recebimento e Retorno exigem Operações de Negócio confirmadas.
9. Obra ou Evento não pode ser encerrado com saldo sem destinação formal.
10. IA não executa operação crítica sem confirmação humana.
11. Baseline e atualização deste arquivo integram o mesmo PR.

## Próximas ações

1. abrir PR Draft da RN-02.6 REV1;
2. executar revisão crítica independente no HEAD exato;
3. corrigir achados no mesmo branch;
4. executar reteste final;
5. somente com PASS e autorização explícita realizar merge;
6. encerrar LEA-64 e liberar a próxima etapa normativa.

## Limites

- nenhuma implementação de backend ou frontend;
- nenhum SQL ou migration;
- nenhuma integração real de IA;
- documentação e modelagem conceitual apenas.

## Regra de leitura do HEAD

O SHA do próprio commit não deve ser gravado autorreferencialmente. O agente deve resolver o HEAD pelo PR ativo e registrar separadamente o último HEAD integralmente revisado.
