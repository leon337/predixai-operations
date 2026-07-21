# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=0.2.1
UPDATED_AT_UTC=2026-07-21T02:05:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_0_CONCEPCAO_E_MODELAGEM_DO_DOMINIO
ACTIVE_TASK=LEA-56
ACTIVE_PR=2
ACTIVE_BRANCH=docs/fase-0-memory-baseline
ACTIVE_HEAD_REF=pull/2/head
ACTIVE_HEAD_SHA=RESOLVE_FROM_PR_METADATA
LAST_VERIFIED_HEAD=adf088ad943adba28dc4497e3d83cc5147fa1357
GITHUB_LINEAR_SYNC=PASS
REVIEW_DECISION=PASS_PENDING_MERGE_AUTHORIZATION
IMPLEMENTATION_AUTHORIZED=NO
MERGE_AUTHORIZED=NO
BLOCKERS=MERGE_AUTHORIZATION_REQUIRED
NEXT_AUTHORIZED_ACTION=OBTER_AUTORIZACAO_EXPLICITA_DE_MERGE_DO_PR_2
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

## Reteste LEA-56

- Primeiro HEAD revisado: `339ecdf150829a7b7438b42710a3cc52c062d7e1`
- Decisão inicial: FAIL
- Achados: LEA-56-F01 a LEA-56-F07
- HEAD de remediação testado: `adf088ad943adba28dc4497e3d83cc5147fa1357`
- Resultado do reteste: PASS
- F01: documentos normativos completos e numerados publicados
- F02: Estado Físico separado de Situação Operacional
- F03: vínculo Material–Item de Catálogo explicitamente opcional
- F04: metadados operacionais adicionados ao estado
- F05: RN-00 removida das baselines e marcada em construção
- F06: Transferência definida como operação coordenadora
- F07: baseline e estado obrigatórios no mesmo PR

## Próximas ações

1. verificar o HEAD final gerado pela atualização deste estado;
2. obter autorização explícita para merge do PR #2;
3. após o merge, encerrar LEA-56;
4. liberar LEA-57;
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

O SHA do próprio commit não pode ser gravado autorreferencialmente dentro deste arquivo. O agente deve resolver `ACTIVE_HEAD_SHA` consultando `pull/2/head`. `LAST_VERIFIED_HEAD` registra o último HEAD completo revisado antes desta atualização de estado; o parecer final no PR e no Linear deve registrar o HEAD exato atual.
