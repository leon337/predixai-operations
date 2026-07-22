# PROJECT_STATE — PredixAI Operations

## Metadados de estado

```text
STATE_VERSION=0.7.0
UPDATED_AT_UTC=2026-07-22T08:00:00Z
REPOSITORY=leon337/predixai-operations
CURRENT_PHASE=FASE_0_CONCEPCAO_E_MODELAGEM_DO_DOMINIO
ACTIVE_TASK=LEA-117
ACTIVE_PR=NONE
ACTIVE_BRANCH=NONE
ACTIVE_HEAD_REF=main
ACTIVE_HEAD_SHA=5924e6f66440c3ac07a45732b48a8e0043e1784c
LAST_VERIFIED_HEAD=ab160f4fd9784d0164dd81e72e7c72f78432029d
GITHUB_LINEAR_SYNC=PASS
REVIEW_DECISION=RN_02_6_PASS_AND_MERGED
IMPLEMENTATION_AUTHORIZED=NO
MERGE_AUTHORIZED=NO
SQL_AUTHORIZED=NO
MIGRATIONS_AUTHORIZED=NO
BLOCKERS=NONE_FOR_RN_02_7_MODELING
NEXT_AUTHORIZED_ACTION=MODELAR_RN_02_7_MANUTENCAO_E_CICLO_DE_VIDA_PATRIMONIAL
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
- RN-02.6 REV1 — Obras, Eventos e Romaneios

## LEA-64 concluída

- PR: #6
- HEAD aprovado: `ab160f4fd9784d0164dd81e72e7c72f78432029d`
- Merge commit: `5924e6f66440c3ac07a45732b48a8e0043e1784c`
- Reteste: PASS
- Linear: Done
- Resultado: RN-02.6 REV1 congelada como baseline

## Documento ativo

- RN-02.7 REV1 — Manutenção e Ciclo de Vida Patrimonial
- Estado: NÃO INICIADA
- Baseline: NÃO
- Tarefa: LEA-117
- Pull Request: nenhum
- Implementação, SQL e migrations: não autorizados

## Escopo da LEA-117

- Plano de Manutenção;
- Ordem de Serviço;
- manutenção preventiva, corretiva e preditiva;
- inspeções e checklists;
- abertura, triagem, aprovação e execução;
- bloqueio e indisponibilidade do Patrimônio;
- peças, materiais e serviços aplicados;
- técnicos, responsáveis e fornecedores;
- garantias e documentos técnicos;
- falhas, causas, reincidências e histórico;
- retorno ao uso, inutilização e Baixa Patrimonial;
- integração com RN-02.3, RN-02.5 e RN-02.6.

## Decisões críticas vigentes

1. GitHub é a fonte documental e técnica oficial.
2. Linear acompanha tarefas, dependências e próxima ação.
3. Contexto do chat não substitui documento versionado.
4. O Razão de Movimentações é a fonte oficial do saldo.
5. Romaneio é documento versionado e não substitui Operação de Negócio.
6. Todo Romaneio pertence exatamente a uma Obra ou a um Evento.
7. Versão aprovada de Romaneio é imutável.
8. Expedição, Recebimento e Retorno exigem Operações de Negócio confirmadas.
9. Obra ou Evento não pode ser encerrado com Pendência Logística Bloqueadora.
10. Pendência Administrativa pode sobreviver ao encerramento somente mediante aceite formal.
11. IA não executa operação crítica sem confirmação humana.
12. Implementação, SQL e migrations permanecem bloqueados durante a Fase 0.

## Próximas ações

1. criar branch exclusiva para a RN-02.7;
2. publicar a primeira versão normativa;
3. abrir PR Draft;
4. executar revisão crítica independente;
5. corrigir achados e executar reteste;
6. somente com PASS e autorização explícita realizar merge.

## Limites

- nenhuma implementação de backend ou frontend;
- nenhum SQL ou migration;
- nenhuma integração real de IA;
- documentação e modelagem conceitual apenas.

## Regra de leitura do HEAD

O SHA do próprio commit não deve ser gravado autorreferencialmente. O agente deve resolver o HEAD pelo PR ativo e registrar separadamente o último HEAD integralmente revisado.