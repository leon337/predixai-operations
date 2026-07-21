# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=0.3.0
UPDATED_AT_UTC=2026-07-21T02:15:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_0_CONCEPCAO_E_MODELAGEM_DO_DOMINIO
ACTIVE_TASK=LEA-57
ACTIVE_PR=PENDING_CREATION
ACTIVE_BRANCH=docs/lea-57-rn-00-domain-dictionary
ACTIVE_HEAD_REF=refs/heads/docs/lea-57-rn-00-domain-dictionary
ACTIVE_HEAD_SHA=RESOLVE_FROM_BRANCH_METADATA
LAST_VERIFIED_HEAD=NONE_FOR_LEA_57
GITHUB_LINEAR_SYNC=PASS
REVIEW_DECISION=PENDING
IMPLEMENTATION_AUTHORIZED=NO
MERGE_AUTHORIZED=NO
BLOCKERS=REVIEW_AND_MERGE_OF_RN_00_REV1
NEXT_AUTHORIZED_ACTION=ABRIR_PR_DRAFT_E_EXECUTAR_REVISAO_CRITICA_DA_RN_00_REV1
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

## Documento ativo

- RN-00 REV1 — PredixAI Domain Dictionary
- Estado: EM REVISÃO
- Baseline: NÃO
- Tarefa: LEA-57
- Branch: `docs/lea-57-rn-00-domain-dictionary`

## Documentos normativos integrais

- `docs/fase-0/regras-negocio/RN-01-REV2.1-COMPLETA.md`
- `docs/fase-0/regras-negocio/RN-02.1-REV1-COMPLETA.md`
- `docs/fase-0/regras-negocio/RN-02.2-REV1-COMPLETA.md`
- `docs/fase-0/regras-negocio/RN-02.3-REV2-COMPLETA.md`
- `docs/fase-0/regras-negocio/RN-02.4-REV3-COMPLETA.md`
- `docs/fase-0/RN-00-PREDIXAI-DOMAIN-DICTIONARY.md`

## Decisões críticas

1. GitHub é a fonte documental e técnica oficial.
2. Linear acompanha tarefas, aprovações, dependências e próxima ação.
3. Contexto do chat não substitui documento versionado.
4. Nenhuma movimentação histórica é apagada.
5. Estoque negativo é proibido.
6. Todo saldo pertence a Centro Operacional.
7. O razão imutável de movimentações é a fonte de verdade do saldo.
8. Snapshot de saldo, quando existir, deve ser reconstruível e conciliável.
9. Estado Físico, Situação Operacional, Situação Cadastral, Disponibilidade e Ocupação são dimensões distintas.
10. Material pode existir sem Item de Catálogo.
11. Transferência é Operação de Negócio coordenadora de Lançamentos de Movimentação imutáveis.
12. Devolução é o ato físico; Retorno é a operação registrada.
13. Usuário, Perfil, Papel Operacional e Responsabilidade são conceitos distintos.
14. IA sugere, consulta e resume; não executa operação crítica sem confirmação.
15. Baseline e atualização deste arquivo devem integrar o mesmo PR.

## LEA-56 concluída

- PR: #2
- Reteste final: PASS
- HEAD revisado: `63535faf33e14bc43e147adeba2a5e26bd486a9f`
- Merge commit: `f302b854505e50496eddf0ba718723301b3bf915`
- Estado Linear: Done

## LEA-57 em execução

### Objetivo

Consolidar o vocabulário oficial, eliminar ambiguidades e estabelecer governança semântica para documentação, código, banco, APIs, interface, testes e IA.

### Entrega atual

- RN-00 elevada para REV1;
- regras de governança semântica numeradas;
- aproximadamente 140 termos oficiais organizados por domínio;
- termos ambíguos e proibidos explicitados;
- critérios de aceite definidos;
- separação entre Operação de Negócio e Lançamento de Movimentação;
- separação entre dimensões de estado;
- separação entre Material, Patrimônio e Item de Catálogo;
- separação entre Usuário, Perfil, Papel Operacional e Responsabilidade.

## Próximas ações

1. abrir PR Draft da LEA-57;
2. executar revisão crítica independente no HEAD exato;
3. corrigir achados no mesmo branch;
4. executar reteste final;
5. somente com PASS e autorização explícita realizar merge;
6. encerrar LEA-57;
7. liberar LEA-58 — RN-02.5 Movimentações.

## Fora do escopo

- implementação de backend ou frontend;
- SQL, migrations ou tabelas físicas;
- integração real com IA externa;
- Digital Twin funcional;
- RFID, NFC ou BLE;
- hospedagem em produção.

## Regra de leitura do HEAD

O SHA do próprio commit não pode ser gravado autorreferencialmente dentro deste arquivo. O agente deve resolver o HEAD consultando a branch ou o PR ativo. `LAST_VERIFIED_HEAD` só deve ser atualizado após revisão concluída sobre um SHA exato.
