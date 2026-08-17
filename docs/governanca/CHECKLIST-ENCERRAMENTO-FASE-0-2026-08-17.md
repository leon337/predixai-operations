# GOV-03 — Checklist Formal de Encerramento da Fase 0

**Data:** 2026-08-17  
**Repositório:** `leon337/predixai-operations`  
**Issue de controle:** GitHub #27  
**PR de integração:** #28  
**Branch:** `docs/gov-03-phase0-exit-checklist`

## 1. Objetivo

Executar o gate formal de saída da Fase 0 — Concepção e Modelagem do Domínio, confirmando que as baselines, a governança, a arquitetura vigente e os limites da etapa seguinte estão coerentes e auditáveis.

Este checklist **não autoriza** implementação, SQL, migration, alteração de dados, mudança de Supabase, deploy ou produção.

## 2. Revisão inicial

```text
INITIAL_MAIN=a76f53a925d9587f9f7a83b1238f071c8416e9b6
INITIAL_PROJECT_STATE=1.0.9
INITIAL_DECISION=FAIL_REMEDIABLE
INITIAL_FINDINGS=GOV_03_F01_TO_F08
```

A revisão inicial confirmou a existência das baselines RN-00 a RN-02.7, mas encontrou fontes arquiteturais e de navegação em conflito.

## 3. Achados e remediação

### GOV-03-F01 — arquitetura local inicial apresentada como vigente

**Remediação:** `00-VISAO-E-ARQUITETURA.md` passou a separar explicitamente visão durável, arquitetura materializada e topologia local histórica.

**Estado:** `PASS`.

### GOV-03-F02 — ADR-001 com premissas superadas

**Remediação:** ADR-001 foi marcada como histórica/supersedida em parte; ADR-002 consolida o estado pós-MVP.

**Estado:** `PASS`.

### GOV-03-F03 — índice RN-02 obsoleto

**Remediação:** índice atualizado para RN-02.1→RN-02.7, removendo a numeração histórica conflitante de Compras/Fornecedores e Manutenção.

**Estado:** `PASS`.

### GOV-03-F04 — roadmap antigo concorrente

**Remediação:** `docs/fase-0/ROADMAP-E-STATUS.md` foi reclassificado como histórico e aponta o Roadmap Mestre como única fonte operacional de roadmap.

**Estado:** `PASS`.

### GOV-03-F05 — README/Roadmap Mestre com estado transitório encerrado

**Remediação:** README e Roadmap Mestre agora registram PRs #25/#26 concluídos e GOV-03 como gate atual.

**Estado:** `PASS`.

### GOV-03-F06 — cabeçalho processual pré-merge da RN-02.7

**Remediação:** as regras normativas da RN-02.7 foram preservadas sem reescrita. `PROJECT_STATE.md`, o índice RN-02 e `STATUS-POS-MERGE-RN-02.7-2026-08-17.md` definem explicitamente que `CANDIDATA À BASELINE` / `merge não autorizado` no cabeçalho são snapshot histórico do HEAD validado antes do merge. O estado operacional vigente é `BASELINE_MERGED`.

**Justificativa:** reescrever uma baseline consolidada de mais de 1.200 linhas somente para mudar metadados processuais elevaria o risco de alteração normativa acidental. A precedência documental e a trilha Git tornam a leitura atual determinística.

**Estado:** `PASS`.

### GOV-03-F07 — GitHub Issue #1 aberta apesar de RN-01 aprovada

**Remediação:** Issue #1 recebeu notas auditáveis e foi encerrada como `completed` em 2026-08-17. A RN-01 não foi alterada.

**Estado:** `PASS`.

### GOV-03-F08 — ausência de fonte única para arquitetura pós-MVP

**Remediação:** criação da `ADR-002-ARQUITETURA-VIGENTE-POS-MVP01.md`, definindo stack materializada, papel de Vercel/`potiguarbd`, limites de ambientes, backup/restore, produção e novos gates.

**Estado:** `PASS`.

### GOV-03-F09 — regressão criada durante a própria remediação

Na primeira compactação do `PROJECT_STATE.md`, campos mínimos exigidos por `PREDIXAI_OPERATIONS_PROJECT_INSTRUCTIONS.md` foram removidos acidentalmente.

**HEAD em que foi detectado:** `3cffcf6c0f32e081f3e1b0ee56fca57d4fb5d589`.

**CI desse HEAD:** `32003899554` — PASS técnico, mas insuficiente para decisão final.

**Remediação:** `PROJECT_STATE.md` v1.1.1 restaurou `ACTIVE_TASK`, `LAST_VERIFIED_HEAD`, `ACTIVE_BASELINE`, `APPROVED_BASELINES`, `GITHUB_LINEAR_SYNC`, `REVIEW_DECISION` e demais campos mínimos/compatíveis.

**HEAD substantivo retestado:** `130e4ee4649d707b8521a53b9ae17a5f16e0d34a`.

**Estado:** `PASS`.

## 4. Critérios formais de saída

| Critério | Resultado | Evidência resumida |
|---|---|---|
| C01 — RN-00 presente/adotada | PASS | baseline no `main` |
| C02 — RN-01 REV2.1 aprovada | PASS | baseline + Issue #1 reconciliada |
| C03 — RN-02.1 REV1 | PASS | baseline presente |
| C04 — RN-02.2 REV1 | PASS | baseline presente |
| C05 — RN-02.3 REV2 | PASS | baseline presente |
| C06 — RN-02.4 REV3 | PASS | baseline presente |
| C07 — RN-02.5 REV1 + errata | PASS | baseline + errata presentes |
| C08 — RN-02.6 REV1 + errata | PASS | baseline + errata presentes |
| C09 — RN-02.7 REV1 vigente | PASS | PR #13 merged / LEA-117 Done |
| C10 — GitHub/Linear auditáveis | PASS | GitHub oficial + fallback Issue #27 registrado na LEA-117 |
| C11 — arquitetura vigente confirmada | PASS | ADR-002 |
| C12 — baseline ≠ implementação | PASS | ADR-002, README, roadmap e estado distinguem escopos |
| C13 — sem autorização implícita | PASS | limites explícitos em todas as fontes novas |
| C14 — SQL/migrations/dados com gate próprio | PASS | ADR-002 + PROJECT_STATE |
| C15 — produção exige evidência provider | PASS | `PRODUCTION_PROMOTION_CONFIRMED=UNKNOWN` preservado |
| C16 — backup/restore reconhecido como pendência técnica | PASS | ADR-002 / Fase 1 |
| C17 — navegação não usa roadmap antigo | PASS | roadmap antigo marcado histórico; Mestre vigente |
| C18 — pendência histórica falsa conhecida reconciliada | PASS | Issue #1 closed/completed |
| C19 — HEAD substantivo retestado | PASS | `130e4ee...`, CI `32004060411` |
| C20 — merge exige HUMAN_GATE separado | PASS | PR #28 permanece Draft e `MERGE_AUTHORIZED=NO` |

## 5. Arquitetura e limites confirmados

A arquitetura materializada vigente é:

```text
Next.js + TypeScript
        │
        ├── Vercel
        └── Supabase potiguarbd
            ├── PostgreSQL
            ├── Auth
            ├── RLS
            └── migrations/funções do MVP-01
```

A arquitetura local ASUS N43SM/FastAPI/PostgreSQL/Ollama é histórica e pode ser reavaliada futuramente, mas não é requisito atual obrigatório.

Ainda não estão concluídos para o produto inteiro:

- política completa de ambientes;
- backup/retenção/restore testado;
- produção tecnicamente confirmada;
- modelo físico completo;
- patrimônio/manutenção/obras/eventos/romaneios completos;
- IA operacional.

## 6. Limites da etapa seguinte

O encerramento da Fase 0 permite avançar para **seleção e planejamento do próximo escopo**, não concede autorização geral de implementação.

Exigem autorização própria conforme o risco:

- código funcional novo;
- SQL e migrations;
- mudanças de RLS/Auth;
- alterações de dados reais;
- provisionamento ou alteração de Supabase;
- deploy/promoção para produção;
- operações destrutivas;
- mudança arquitetural relevante/custo.

## 7. Reteste substantivo

```text
FINAL_SUBSTANTIVE_RETEST_HEAD=130e4ee4649d707b8521a53b9ae17a5f16e0d34a
DEPENDENCY_SECURITY_RUN=32004060411
DEPENDENCY_SECURITY_ARTIFACT=9279392534
NPM_CI=PASS
LOCKFILE_UNCHANGED=PASS
DEPENDENCY_TREE=PASS
AUDIT=PASS
HIGH_CRITICAL_GATE=PASS
BUILD=PASS
EVIDENCE_UPLOAD=PASS
REVIEW_THREADS=0
CRITERIA=C01_TO_C20_PASS
FINAL_DECISION=PASS_AWAITING_HUMAN_GATE
MERGE_AUTHORIZED=NO
```

## 8. Estado da Fase 0

A revisão documental/técnica necessária para o encerramento está em **PASS**, porém a Fase 0 ainda não é declarada integrada/encerrada enquanto o PR #28 não receber HUMAN_GATE específico, for mesclado e o `main` pós-merge não for verificado.

Portanto:

```text
PHASE0_EXIT_REVIEW=PASS
PHASE0_EXIT_INTEGRATION=PENDING_HUMAN_GATE
```

## 9. Regra de integração

Antes do merge:

1. resolver o HEAD final do PR ao vivo;
2. confirmar que mudanças posteriores ao HEAD substantivo são apenas estado/checklist;
3. exigir CI verde no HEAD final;
4. exigir zero thread bloqueadora;
5. obter HUMAN_GATE explícito para o PR #28.

Após o merge:

1. verificar `main`;
2. fechar Issue #27 como completed;
3. sincronizar a evidência no Linear/fallback;
4. só então declarar formalmente a Fase 0 encerrada e iniciar seleção do próximo escopo.
