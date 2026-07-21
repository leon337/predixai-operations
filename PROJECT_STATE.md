# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=0.3.2
UPDATED_AT_UTC=2026-07-21T02:30:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_0_CONCEPCAO_E_MODELAGEM_DO_DOMINIO
ACTIVE_TASK=LEA-57
ACTIVE_PR=3
ACTIVE_BRANCH=docs/lea-57-rn-00-domain-dictionary
ACTIVE_HEAD_REF=pull/3/head
ACTIVE_HEAD_SHA=RESOLVE_FROM_PR_METADATA
LAST_VERIFIED_HEAD=59a808af816d19982bc7b4fd215d0d14aea0feba
GITHUB_LINEAR_SYNC=PASS
REVIEW_DECISION=PENDING_RETEST
IMPLEMENTATION_AUTHORIZED=NO
MERGE_AUTHORIZED=NO
BLOCKERS=RETEST_LEA_57_F01_F04
NEXT_AUTHORIZED_ACTION=EXECUTAR_RETESTE_INDEPENDENTE_NO_HEAD_EXATO_DO_PR_3
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
- Pull Request: #3
- Branch: `docs/lea-57-rn-00-domain-dictionary`
- Complemento normativo: `docs/fase-0/RN-00-REV1-ERRATA-LEA-57-F01-F04.md`

## Documentos normativos integrais

- `docs/fase-0/regras-negocio/RN-01-REV2.1-COMPLETA.md`
- `docs/fase-0/regras-negocio/RN-02.1-REV1-COMPLETA.md`
- `docs/fase-0/regras-negocio/RN-02.2-REV1-COMPLETA.md`
- `docs/fase-0/regras-negocio/RN-02.3-REV2-COMPLETA.md`
- `docs/fase-0/regras-negocio/RN-02.4-REV3-COMPLETA.md`
- `docs/fase-0/RN-00-PREDIXAI-DOMAIN-DICTIONARY.md`
- `docs/fase-0/RN-00-REV1-ERRATA-LEA-57-F01-F04.md`

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
12. Operação de Entrada e Lançamento de Entrada são conceitos distintos.
13. Operação de Saída e Lançamento de Saída são conceitos distintos.
14. Baixa Patrimonial e Baixa de Quantidade são conceitos distintos.
15. Inativação preserva histórico; Exclusão Física é excepcional e restrita a registro sem vínculos.
16. Cada Situação Operacional possui definição e aplicabilidade mínima.
17. Devolução é o ato físico; Retorno é a operação registrada.
18. Usuário, Perfil, Papel Operacional e Responsabilidade são conceitos distintos.
19. IA sugere, consulta e resume; não executa operação crítica sem confirmação.
20. Baseline e atualização deste arquivo devem integrar o mesmo PR.

## LEA-56 concluída

- PR: #2
- Reteste final: PASS
- HEAD revisado: `63535faf33e14bc43e147adeba2a5e26bd486a9f`
- Merge commit: `f302b854505e50496eddf0ba718723301b3bf915`
- Estado Linear: Done

## LEA-57 em execução

### Revisão inicial

- HEAD revisado: `59a808af816d19982bc7b4fd215d0d14aea0feba`
- Decisão: FAIL
- Achados: LEA-57-F01 a LEA-57-F04

### Remediações aplicadas

- F01: Operação e Lançamento de Entrada/Saída separados.
- F02: Baixa Patrimonial e Baixa de Quantidade separadas.
- F03: Inativação, Reativação e Exclusão Física definidas.
- F04: estados operacionais definidos individualmente com matriz mínima de aplicabilidade.
- Documento de remediação publicado no mesmo branch e com precedência normativa explícita.

## Próximas ações

1. resolver o HEAD atual do PR #3;
2. executar reteste independente dos achados F01–F04;
3. registrar PASS ou FAIL no GitHub e Linear;
4. somente com PASS solicitar autorização explícita de merge;
5. após merge, encerrar LEA-57;
6. liberar LEA-58 — RN-02.5 Movimentações.

## Fora do escopo

- implementação de backend ou frontend;
- SQL, migrations ou tabelas físicas;
- integração real com IA externa;
- Digital Twin funcional;
- RFID, NFC ou BLE;
- hospedagem em produção.

## Regra de leitura do HEAD

O SHA do próprio commit não pode ser gravado autorreferencialmente dentro deste arquivo. O agente deve resolver o HEAD consultando `pull/3/head`. `LAST_VERIFIED_HEAD` só deve ser atualizado após revisão concluída sobre um SHA exato.
