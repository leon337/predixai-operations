# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=0.5.1
UPDATED_AT_UTC=2026-07-21T06:09:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_0_CONCEPCAO_E_MODELAGEM_DO_DOMINIO
ACTIVE_TASK=LEA-58
ACTIVE_PR=5
ACTIVE_BRANCH=docs/lea-58-rn-02-5-movimentacoes
ACTIVE_HEAD_REF=pull/5/head
ACTIVE_HEAD_SHA=RESOLVE_FROM_PR_METADATA
LAST_VERIFIED_HEAD=NONE_FOR_LEA_58
GITHUB_LINEAR_SYNC=PASS
REVIEW_DECISION=PENDING
IMPLEMENTATION_AUTHORIZED=NO
MERGE_AUTHORIZED=NO
BLOCKERS=REVIEW_AND_MERGE_OF_RN_02_5_REV1
NEXT_AUTHORIZED_ACTION=EXECUTAR_REVISAO_CRITICA_INDEPENDENTE_DO_PR_5
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

## Documento ativo

- RN-02.5 REV1 — Movimentações e Integridade do Estoque
- Estado: EM REVISÃO
- Baseline: NÃO
- Tarefa: LEA-58
- Pull Request: #5
- Branch: `docs/lea-58-rn-02-5-movimentacoes`
- Documento: `docs/fase-0/regras-negocio/RN-02.5-REV1-COMPLETA.md`

## Decisões críticas vigentes

1. GitHub é a fonte documental e técnica oficial.
2. Linear acompanha tarefas, aprovações, dependências e próxima ação.
3. Contexto do chat não substitui documento versionado.
4. Nenhuma movimentação histórica é apagada.
5. Estoque negativo é proibido.
6. Todo saldo pertence a Centro Operacional.
7. O Razão de Movimentações é a fonte de verdade do saldo.
8. Snapshots são derivados, reconstruíveis e conciliáveis.
9. Operação de Negócio e Lançamento de Movimentação são conceitos distintos.
10. Transferência coordena lançamentos de origem, trânsito e destino.
11. Entrada/Saída como operações são distintas de seus lançamentos.
12. Baixa Patrimonial e Baixa de Quantidade são distintas.
13. Correções usam compensação ou reversão, nunca edição do histórico.
14. IA não executa operação crítica sem confirmação humana.
15. Baseline e atualização deste arquivo integram o mesmo PR.

## Histórico recente

### LEA-57 concluída

- PR normativo: #3
- HEAD aprovado: `515d86c306778ed9cd4d1d48e308d5a4b3268bf3`
- Merge commit: `72b63e21703f9803eb141512817682948b85cf2b`
- PR de sincronização: #4
- Merge commit do estado: `4a68089a0280803464b99cdc1da06ce97cf40c6b`
- Resultado: RN-00 REV1 congelada como baseline

## LEA-58 em execução

### Escopo modelado

- Operação de Negócio e Lançamento de Movimentação;
- Entrada, Saída, Retorno e Transferência;
- Reserva, Separação, Conferência e Expedição;
- Inventário, Ajuste, Baixa, Cancelamento e Reversão;
- idempotência e integridade transacional;
- lotes, patrimônios e estoque em trânsito;
- responsabilidades, autorizações, divergências e auditoria;
- critérios de aceite.

### Limites

- nenhuma implementação de backend ou frontend;
- nenhum SQL ou migration;
- nenhuma integração real de IA;
- documentação e modelagem conceitual apenas.

## Próximas ações

1. executar revisão crítica independente do PR #5 no HEAD exato;
2. corrigir achados no mesmo branch;
3. executar reteste final;
4. somente com PASS e autorização explícita realizar merge;
5. encerrar LEA-58 e liberar a próxima etapa normativa.

## Regra de leitura do HEAD

O SHA do próprio commit não deve ser gravado autorreferencialmente. O agente deve resolver o HEAD pelo PR ativo e registrar separadamente o último HEAD integralmente revisado.
