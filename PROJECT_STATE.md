# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=0.4.0
UPDATED_AT_UTC=2026-07-21T04:41:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_0_CONCEPCAO_E_MODELAGEM_DO_DOMINIO
ACTIVE_TASK=LEA-58
ACTIVE_PR=NONE
ACTIVE_BRANCH=NONE
ACTIVE_HEAD_REF=main
ACTIVE_HEAD_SHA=72b63e21703f9803eb141512817682948b85cf2b
LAST_VERIFIED_HEAD=515d86c306778ed9cd4d1d48e308d5a4b3268bf3
GITHUB_LINEAR_SYNC=PASS
REVIEW_DECISION=LEA_57_PASS_AND_MERGED
IMPLEMENTATION_AUTHORIZED=NO
MERGE_AUTHORIZED=NO
BLOCKERS=NONE_FOR_LEA_58_MODELING
NEXT_AUTHORIZED_ACTION=MODELAR_RN_02_5_MOVIMENTACOES
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

- RN-00 REV1 — PredixAI Domain Dictionary
- RN-01 REV2.1 — Cadastro e classificação de materiais
- RN-02.1 REV1 — Núcleo organizacional
- RN-02.2 REV1 — Usuários, perfis, permissões e responsabilidades
- RN-02.3 REV2 — Materiais, catálogo opcional, atributos e patrimônios
- RN-02.4 REV3 — Estoques, saldos, localizações e WMS leve

## Documentos normativos integrais

- `docs/fase-0/RN-00-PREDIXAI-DOMAIN-DICTIONARY.md`
- `docs/fase-0/RN-00-REV1-ERRATA-LEA-57-F01-F04.md`
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
- Merge commit: `f302b854505e50496eddf0ba718723301b3bf915`
- Estado Linear: Done

## LEA-57 concluída

- PR: #3
- Revisão inicial: FAIL
- Achados corrigidos: LEA-57-F01 a LEA-57-F04
- Reteste final: PASS
- HEAD final aprovado: `515d86c306778ed9cd4d1d48e308d5a4b3268bf3`
- Merge commit: `72b63e21703f9803eb141512817682948b85cf2b`
- Estado Linear: Done
- Resultado: RN-00 REV1 congelada como baseline

## Tarefa ativa — LEA-58

### Objetivo

Modelar a RN-02.5 — Movimentações e Integridade do Estoque.

### Escopo autorizado

- Operações de Entrada, Saída, Retorno e Transferência;
- Reserva, Separação, Expedição e Recebimento;
- Inventário, Ajuste, Baixa e Reversão;
- Lançamentos imutáveis e correlação;
- origem, destino, lotes e patrimônios;
- cadeia de responsabilidade e autorizações;
- idempotência e integridade transacional;
- estoque em trânsito;
- critérios de aceite.

### Limites

- nenhuma implementação de backend ou frontend;
- nenhum SQL ou migration;
- nenhuma integração real de IA;
- modelagem conceitual e documentação apenas.

## Próxima ação

Iniciar a elaboração da RN-02.5 em branch e PR próprios, mantendo revisão crítica, reteste e autorização explícita antes de merge.
