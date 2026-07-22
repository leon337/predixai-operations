# Histórico Auditável — PredixAI Operations

## 1. Objetivo

Consolidar a cadeia de evidência da Fase 0, tornando cada decisão reconstruível a partir de GitHub e Linear, sem depender do histórico de chats.

## 2. Fontes oficiais

1. GitHub: documentos normativos, branches, commits, revisões, retestes e merges.
2. Linear: tarefas, estados, dependências, comentários e próximas ações.
3. `PROJECT_STATE.md`: ponto de entrada do estado operacional atual.

## 3. Cadeia mínima obrigatória

```text
REGRA OU DECISÃO
→ TAREFA LINEAR
→ BRANCH
→ PULL REQUEST
→ HEAD REVISADO
→ DECISÃO DE REVISÃO
→ ACHADOS
→ HEAD DE REMEDIAÇÃO
→ RETESTE
→ AUTORIZAÇÃO EXPLÍCITA
→ MERGE COMMIT
→ ESTADO LINEAR
→ PROJECT_STATE
```

## 4. Linha do tempo consolidada

| Etapa | Linear | PR | Branch | HEAD aprovado | Merge commit | Resultado |
|---|---|---:|---|---|---|---|
| Baseline documental e memória persistente | LEA-56 | #2 | `docs/fase-0-memory-baseline` | `63535faf33e14bc43e147adeba2a5e26bd486a9f` | `f302b854505e50496eddf0ba718723301b3bf915` | Baseline inicial aprovada |
| PredixAI Domain Dictionary | LEA-57 | #3 | `docs/lea-57-rn-00-domain-dictionary` | `515d86c306778ed9cd4d1d48e308d5a4b3268bf3` | `72b63e21703f9803eb141512817682948b85cf2b` | RN-00 REV1 aprovada |
| Sincronização pós RN-00 | LEA-57 | #4 | `docs/post-merge-lea-57-state` | `5953aee36acd5acad58f8183569d1016d2fe8fd3` | `4a68089a0280803464b99cdc1da06ce97cf40c6b` | Estado persistente atualizado |
| Movimentações e integridade | LEA-58 | #5 | `docs/lea-58-rn-02-5-movimentacoes` | `3ad4d57e64d84e4aa3d79b9ebfafacb45d35dcab` | `87395724d23e26926758efd67650f3b76dcf8d84` | RN-02.5 REV1 aprovada |
| Obras, eventos e romaneios | LEA-64 | #6 | `docs/lea-64-rn-02-6-obras-eventos-romaneios` | `ab160f4fd9784d0164dd81e72e7c72f78432029d` | `5924e6f66440c3ac07a45732b48a8e0043e1784c` | RN-02.6 REV1 aprovada |
| Sincronização pós RN-02.6 | LEA-64 | #7 | `docs/sync-state-after-rn-02-6` | `40a05768fc18a77b5acc81318fa22687594580f1` | `d968d7ce9b262eca53bbbd8fba5c43736278052e` | LEA-117 ativada |

## 5. Revisões e retestes relevantes

### LEA-57

- revisão inicial: FAIL;
- achados: F01 a F04;
- remediação: errata normativa;
- reteste: PASS;
- merge somente após autorização explícita.

### LEA-58

- revisão inicial: FAIL;
- achados: F01 a F05;
- HEAD normativo retestado: `bd823a2d77dec123a72eeda9957de2bb6407284c`;
- reteste: PASS;
- merge somente após autorização explícita.

### LEA-64

- revisão inicial: FAIL;
- achados: F01 a F05;
- HEAD normativo retestado: `e2e31df655d814a64f5bf7adea2bf59141b3c655`;
- reteste: PASS;
- merge somente após autorização explícita.

## 6. Baselines vigentes

- RN-00 REV1;
- RN-01 REV2.1;
- RN-02.1 REV1;
- RN-02.2 REV1;
- RN-02.3 REV2;
- RN-02.4 REV3;
- RN-02.5 REV1;
- RN-02.6 REV1.

## 7. Tarefas ativas

- LEA-117 — RN-02.7 Manutenção e Ciclo de Vida Patrimonial;
- LEA-120 — consolidação deste histórico;
- LEA-121 — estratégia Vercel e Supabase.

## 8. Lacunas identificadas

1. PRs #2 a #7 não possuem campo único estruturado contendo todos os IDs cruzados.
2. Alguns merges exigiram PR posterior de sincronização de estado.
3. O projeto Linear ainda precisa refletir continuamente a fase realmente ativa.
4. Vercel e Supabase ainda não possuem recursos específicos do PredixAI Operations.

Essas lacunas não invalidam as baselines existentes, mas devem ser prevenidas nas próximas etapas.

## 9. Regra permanente de auditoria

Toda tarefa futura deve registrar:

- objetivo e escopo;
- dependências;
- branch e PR;
- SHA revisado;
- parecer inicial;
- achados numerados;
- SHA de remediação;
- resultado do reteste;
- autorização explícita de merge;
- merge commit;
- estado final no Linear;
- atualização do `PROJECT_STATE.md`;
- vínculos cruzados entre GitHub e Linear.

## 10. Critério de encerramento da LEA-120

A LEA-120 estará concluída quando este documento for revisado, integrado e vinculado ao Linear, sem alterar nenhuma regra de negócio.