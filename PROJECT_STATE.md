# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=0.2.0
UPDATED_AT_UTC=2026-07-21T02:00:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_0_CONCEPCAO_E_MODELAGEM_DO_DOMINIO
ACTIVE_TASK=LEA-56
ACTIVE_PR=2
ACTIVE_BRANCH=docs/fase-0-memory-baseline
ACTIVE_HEAD_REF=pull/2/head
ACTIVE_HEAD_SHA=RESOLVE_FROM_PR_METADATA
LAST_VERIFIED_HEAD=339ecdf150829a7b7438b42710a3cc52c062d7e1
GITHUB_LINEAR_SYNC=PASS
REVIEW_DECISION=PENDING_RETEST
IMPLEMENTATION_AUTHORIZED=NO
MERGE_AUTHORIZED=NO
BLOCKERS=RETEST_LEA-56_F01_F07
NEXT_AUTHORIZED_ACTION=EXECUTAR_RETESTE_INDEPENDENTE_NO_HEAD_EXATO
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

## Infraestrutura inicial prevista

- servidor: ASUS N43SM com Linux Mint;
- backend: Python + FastAPI;
- banco: PostgreSQL;
- frontend: aplicação web mobile-first/PWA;
- IA local: Ollama com modelo pequeno quantizado;
- IA externa: conector opcional e contingencial;
- operação inicial: rede local, com evolução futura para nuvem.

## Baselines aprovadas

- RN-01 REV2.1 — Cadastro e classificação de materiais
- RN-02.1 REV1 — Núcleo organizacional
- RN-02.2 REV1 — Usuários, perfis, permissões e responsabilidades
- RN-02.3 REV2 — Materiais, catálogo opcional, atributos e patrimônios
- RN-02.4 REV3 — Estoques, saldos, localizações e WMS leve

## Documento adotado, ainda não congelado

- RN-00/PDD — vocabulário oficial em construção
- Tarefa de consolidação: LEA-57
- `RN-00_BASELINE=NO`

## Documentos normativos integrais

- `docs/fase-0/regras-negocio/RN-01-REV2.1-COMPLETA.md`
- `docs/fase-0/regras-negocio/RN-02.1-REV1-COMPLETA.md`
- `docs/fase-0/regras-negocio/RN-02.2-REV1-COMPLETA.md`
- `docs/fase-0/regras-negocio/RN-02.3-REV2-COMPLETA.md`
- `docs/fase-0/regras-negocio/RN-02.4-REV3-COMPLETA.md`

## Decisões críticas

1. GitHub é a fonte documental e técnica oficial.
2. Linear acompanha tarefas, aprovações, dependências e próxima ação.
3. Contexto do chat não substitui documento versionado.
4. Nenhuma movimentação histórica é apagada.
5. Estoque negativo é proibido.
6. Todo saldo pertence a Centro Operacional.
7. O razão imutável de movimentações é a fonte de verdade do saldo.
8. Snapshot de saldo, quando existir, deve ser reconstruível e conciliável.
9. Estado Físico, Situação Operacional, Situação Cadastral e Disponibilidade são dimensões distintas.
10. Material pode existir sem Item de Catálogo.
11. Transferência é operação coordenadora de lançamentos imutáveis de origem, trânsito e destino.
12. IA sugere, consulta e resume; não executa operação crítica sem confirmação.
13. Baseline e atualização deste arquivo devem integrar o mesmo PR.

## Estado da revisão LEA-56

- Primeiro HEAD revisado: `339ecdf150829a7b7438b42710a3cc52c062d7e1`
- Decisão anterior: FAIL
- Achados: LEA-56-F01 a LEA-56-F07
- Remediações: aplicadas no mesmo branch
- Reteste: pendente sobre o HEAD exato a ser resolvido pela metadata do PR

## Próximas ações

1. executar reteste independente de F01–F07 no HEAD exato;
2. registrar PASS ou FAIL no PR #2 e LEA-56;
3. somente com PASS considerar merge, mantendo necessidade de autorização explícita;
4. após merge e encerramento da LEA-56, liberar LEA-57;
5. concluir RN-00/PDD;
6. depois liberar RN-02.5.

## Fora do escopo

- implementação de backend ou frontend;
- SQL, migrations ou tabelas físicas;
- integração real com IA externa;
- Digital Twin funcional;
- RFID, NFC ou BLE;
- hospedagem em produção.

## Regra de leitura do HEAD

O SHA do próprio commit não pode ser gravado autorreferencialmente dentro deste arquivo. O agente deve resolver `ACTIVE_HEAD_SHA` consultando `pull/2/head`. `LAST_VERIFIED_HEAD` só muda depois de uma revisão concluída sobre SHA exato.
