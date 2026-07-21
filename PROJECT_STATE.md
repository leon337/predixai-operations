# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=0.5.2
UPDATED_AT_UTC=2026-07-21T06:15:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_0_CONCEPCAO_E_MODELAGEM_DO_DOMINIO
ACTIVE_TASK=LEA-58
ACTIVE_PR=5
ACTIVE_BRANCH=docs/lea-58-rn-02-5-movimentacoes
ACTIVE_HEAD_REF=pull/5/head
ACTIVE_HEAD_SHA=RESOLVE_FROM_PR_METADATA
LAST_VERIFIED_HEAD=1ffe82bf47de420e021dfdeb1c4f38e04c4c0b8d
GITHUB_LINEAR_SYNC=PASS
REVIEW_DECISION=FAIL_REMEDIATED_PENDING_RETEST
IMPLEMENTATION_AUTHORIZED=NO
MERGE_AUTHORIZED=NO
BLOCKERS=RETEST_LEA_58_F01_TO_F05
NEXT_AUTHORIZED_ACTION=EXECUTAR_RETESTE_INDEPENDENTE_DO_PR_5
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
- Estado: EM RETESTE
- Baseline: NÃO
- Tarefa: LEA-58
- Pull Request: #5
- Branch: `docs/lea-58-rn-02-5-movimentacoes`
- Documento principal: `docs/fase-0/regras-negocio/RN-02.5-REV1-COMPLETA.md`
- Complemento normativo: `docs/fase-0/regras-negocio/RN-02.5-REV1-ERRATA-LEA-58-F01-F05.md`

## Decisões críticas vigentes

1. GitHub é a fonte documental e técnica oficial.
2. Linear acompanha tarefas, aprovações, dependências e próxima ação.
3. Contexto do chat não substitui documento versionado.
4. Nenhuma movimentação histórica é apagada.
5. Estoque negativo é proibido.
6. Todo saldo pertence a Centro Operacional, inclusive em trânsito.
7. O Razão de Movimentações é a fonte de verdade do saldo.
8. Snapshots são derivados, reconstruíveis e conciliáveis.
9. Operação de Negócio e Lançamento de Movimentação são conceitos distintos.
10. Situação da Operação e Situação do Item da Operação são dimensões distintas.
11. Transferência coordena lançamentos de origem, trânsito e destino.
12. Saldo em trânsito reside em Centro Operacional de Trânsito.
13. Um Item da Operação pode ser atendido por múltiplas Alocações de Lote.
14. Reserva confirmada consome Saldo Disponível de forma atômica.
15. Entrada/Saída como operações são distintas de seus lançamentos.
16. Baixa Patrimonial e Baixa de Quantidade são distintas.
17. Reversão possui elegibilidade restrita; efeitos não reversíveis exigem Operação Compensatória.
18. Correções nunca editam ou apagam o histórico confirmado.
19. IA não executa operação crítica sem confirmação humana.
20. Baseline e atualização deste arquivo integram o mesmo PR.

## Histórico recente

### LEA-57 concluída

- PR normativo: #3
- HEAD aprovado: `515d86c306778ed9cd4d1d48e308d5a4b3268bf3`
- Merge commit: `72b63e21703f9803eb141512817682948b85cf2b`
- PR de sincronização: #4
- Merge commit do estado: `4a68089a0280803464b99cdc1da06ce97cf40c6b`
- Resultado: RN-00 REV1 congelada como baseline

## LEA-58 — revisão e remediação

### Revisão inicial

- HEAD revisado: `1ffe82bf47de420e021dfdeb1c4f38e04c4c0b8d`
- Decisão: FAIL
- Achados: LEA-58-F01 a LEA-58-F05

### Correções aplicadas

- F01: separação entre Situação da Operação e Situação do Item, com agregação definida;
- F02: entidade Alocação de Lote com suporte a múltiplos lotes por item;
- F03: Centro Operacional de Trânsito e custódia operacional definidos;
- F04: confirmação atômica e exclusividade concorrente de Reservas;
- F05: limites da Reversão e uso obrigatório de Operação Compensatória quando necessário.

## Próximas ações

1. resolver o novo HEAD do PR #5;
2. executar reteste independente dos achados F01–F05;
3. atualizar este estado com o resultado;
4. somente com PASS e autorização explícita realizar merge;
5. encerrar LEA-58 e liberar a próxima etapa normativa.

## Limites

- nenhuma implementação de backend ou frontend;
- nenhum SQL ou migration;
- nenhuma integração real de IA;
- documentação e modelagem conceitual apenas.

## Regra de leitura do HEAD

O SHA do próprio commit não deve ser gravado autorreferencialmente. O agente deve resolver o HEAD pelo PR ativo e registrar separadamente o último HEAD normativo integralmente revisado.
