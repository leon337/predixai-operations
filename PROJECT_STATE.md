# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=0.6.1
UPDATED_AT_UTC=2026-07-21T10:40:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_0_CONCEPCAO_E_MODELAGEM_DO_DOMINIO
ACTIVE_TASK=LEA-64
ACTIVE_PR=6
ACTIVE_BRANCH=docs/lea-64-rn-02-6-obras-eventos-romaneios
ACTIVE_HEAD_REF=pull/6/head
ACTIVE_HEAD_SHA=RESOLVE_FROM_PR_METADATA
LAST_VERIFIED_HEAD=e4cb7dfef104bd06a8fd60d57f22eaf6fa4e2de7
GITHUB_LINEAR_SYNC=PASS
REVIEW_DECISION=FAIL_REMEDIATED_PENDING_RETEST
IMPLEMENTATION_AUTHORIZED=NO
MERGE_AUTHORIZED=NO
SQL_AUTHORIZED=NO
MIGRATIONS_AUTHORIZED=NO
BLOCKERS=RETEST_LEA_64_F01_TO_F05
NEXT_AUTHORIZED_ACTION=EXECUTAR_RETESTE_INDEPENDENTE_DO_PR_6
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
- Estado: EM RETESTE
- Baseline: NÃO
- Tarefa: LEA-64
- Pull Request: #6
- Branch: `docs/lea-64-rn-02-6-obras-eventos-romaneios`
- Documento principal: `docs/fase-0/regras-negocio/RN-02.6-REV1-COMPLETA.md`
- Complemento normativo: `docs/fase-0/regras-negocio/RN-02.6-REV1-ERRATA-LEA-64-F01-F05.md`

## Revisão e remediação da LEA-64

### Revisão inicial

- HEAD revisado: `e4cb7dfef104bd06a8fd60d57f22eaf6fa4e2de7`
- Decisão: FAIL
- Achados: LEA-64-F01 a LEA-64-F05

### Correções aplicadas

- F01: Romaneio pertence exclusivamente a Obra ou Evento;
- F02: Situação Documental, Situação da Versão e Situação Operacional do Item foram separadas;
- F03: Vínculo Logístico passou a correlacionar versão, item, quantidade, lotes, patrimônios e Operação de Negócio;
- F04: fórmulas de reconciliação foram definidas sem dupla contagem;
- F05: Pendências Logísticas Bloqueadoras foram separadas das Pendências Administrativas Não Bloqueadoras.

## Decisões críticas vigentes

1. GitHub é a fonte documental e técnica oficial.
2. Linear acompanha tarefas, dependências e próxima ação.
3. Contexto do chat não substitui documento versionado.
4. O Razão de Movimentações é a fonte oficial do saldo.
5. Romaneio é documento versionado e não substitui Operação de Negócio.
6. Todo Romaneio pertence exatamente a uma Obra ou a um Evento.
7. Planejamento não altera saldo; Reserva confirmada compromete Saldo Disponível.
8. Versão aprovada de Romaneio é imutável.
9. Situação documental, situação da versão e situação operacional do item são independentes.
10. Expedição, Recebimento e Retorno exigem Operações de Negócio confirmadas e vínculos granulares.
11. Quantidades derivadas devem ser conciliáveis com a RN-02.5 sem dupla contagem.
12. Obra ou Evento não pode ser encerrado com Pendência Logística Bloqueadora.
13. Pendência Administrativa pode sobreviver ao encerramento apenas mediante aceite formal.
14. IA não executa operação crítica sem confirmação humana.
15. Baseline e atualização deste arquivo integram o mesmo PR.

## Próximas ações

1. resolver o novo HEAD do PR #6;
2. executar reteste independente dos achados F01–F05;
3. atualizar este estado com o resultado;
4. somente com PASS e autorização explícita realizar merge;
5. encerrar LEA-64 e liberar a próxima etapa normativa.

## Limites

- nenhuma implementação de backend ou frontend;
- nenhum SQL ou migration;
- nenhuma integração real de IA;
- documentação e modelagem conceitual apenas.

## Regra de leitura do HEAD

O SHA do próprio commit não deve ser gravado autorreferencialmente. O agente deve resolver o HEAD pelo PR ativo e registrar separadamente o último HEAD normativo integralmente revisado.
