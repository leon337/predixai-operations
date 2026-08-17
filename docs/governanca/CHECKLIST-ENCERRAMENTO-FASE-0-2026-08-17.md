# GOV-03 — Checklist Formal de Encerramento da Fase 0

**Data:** 2026-08-17  
**Repositório:** `leon337/predixai-operations`  
**Issue de controle:** GitHub #27  
**Branch de remediação:** `docs/gov-03-phase0-exit-checklist`

## 1. Objetivo

Executar o gate formal de saída da Fase 0 — Concepção e Modelagem do Domínio, confirmando que as baselines de domínio, a governança, a arquitetura vigente e os limites da etapa seguinte estão coerentes e auditáveis.

Este checklist não autoriza implementação, SQL, migration, alteração de dados, mudança de Supabase, deploy ou produção.

## 2. Base de revisão inicial

```text
INITIAL_MAIN=a76f53a925d9587f9f7a83b1238f071c8416e9b6
INITIAL_PROJECT_STATE=1.0.9
INITIAL_DECISION=FAIL_REMEDIABLE
FINDINGS=GOV_03_F01_TO_F08
```

A revisão inicial confirmou que as baselines RN-00 a RN-02.7 existiam, mas identificou divergências de arquitetura, navegação e estado processual que impediam o PASS formal.

## 3. Achados da revisão inicial

### GOV-03-F01 — arquitetura inicial apresentada como vigente

`docs/fase-0/00-VISAO-E-ARQUITETURA.md` ainda apresentava ASUS N43SM + FastAPI + PostgreSQL local/offline como arquitetura principal, em conflito com a aplicação Next.js/Vercel/Supabase materializada.

### GOV-03-F02 — ADR-001 com premissas superadas

ADR-001 ainda dizia `PROPOSTA PARA APROVAÇÃO`, afirmava não existir aplicação executável/projeto Vercel e rejeitava reutilizar Supabase existente.

### GOV-03-F03 — índice RN-02 obsoleto

O índice ainda parava em RN-02.4 e atribuía números/temas incompatíveis com RN-02.5, RN-02.6 e RN-02.7 vigentes.

### GOV-03-F04 — roadmap antigo concorrente

`docs/fase-0/ROADMAP-E-STATUS.md` continuava aparentando ser roadmap operacional vigente, com sequência já superada.

### GOV-03-F05 — README/Roadmap Mestre com estado transitório

Fontes de navegação ainda mencionavam sincronização pós-PR #13 como pendente depois dos PRs #25 e #26.

### GOV-03-F06 — metadados pré-merge dentro da RN-02.7

O cabeçalho processual da RN-02.7 preservava o estado em que o arquivo foi validado antes do merge, embora a baseline já estivesse integrada.

### GOV-03-F07 — Issue #1 aberta apesar da RN-01 aprovada

O backlog do GitHub aparentava uma pendência inexistente.

### GOV-03-F08 — ausência de decisão arquitetural pós-MVP única

Era necessário inferir arquitetura e limites combinando várias fontes; o critério de saída exige confirmação explícita.

## 4. Estratégia de remediação aprovada

Leandro aprovou a alternativa **B — Consolidação controlada**.

Princípios da remediação:

- não apagar histórico;
- manter ADR-001 e arquitetura local inicial como registros históricos;
- criar ADR-002 como decisão arquitetural pós-MVP;
- atualizar fontes de navegação de alta visibilidade;
- preservar byte a byte as regras normativas da RN-02.7 sempre que possível;
- tratar o cabeçalho processual pré-merge da RN-02.7 como snapshot histórico, já que Git e a trilha de revisão preservam o contexto;
- manter novas implementações e operações externas bloqueadas por gates próprios.

## 5. Critérios formais de saída

### C01 — RN-00 presente e adotada

Estado alvo: `PASS`.

### C02 — RN-01 REV2.1 presente e aprovada

Estado alvo: `PASS`.

### C03 — RN-02.1 REV1 presente e aprovada

Estado alvo: `PASS`.

### C04 — RN-02.2 REV1 presente e aprovada

Estado alvo: `PASS`.

### C05 — RN-02.3 REV2 presente e aprovada

Estado alvo: `PASS`.

### C06 — RN-02.4 REV3 presente e aprovada

Estado alvo: `PASS`.

### C07 — RN-02.5 REV1 + errata presentes e aprovadas

Estado alvo: `PASS`.

### C08 — RN-02.6 REV1 + errata presentes e aprovadas

Estado alvo: `PASS`.

### C09 — RN-02.7 REV1 integrada e vigente

Estado alvo: `PASS`.

### C10 — GitHub como fonte documental/técnica e Linear como controle operacional

Estado alvo: `PASS`, com fallback documentado para GitHub Issue quando o workspace Linear impedir nova issue.

### C11 — arquitetura vigente confirmada

Estado alvo: `PASS` após ADR-002 e reconciliação das fontes históricas.

### C12 — separação entre baseline normativa e funcionalidade implementada

Estado alvo: `PASS`.

### C13 — nenhuma autorização implícita de implementação

Estado alvo: `PASS`.

### C14 — SQL/migrations/alterações de dados continuam sujeitos a autorização própria

Estado alvo: `PASS`.

### C15 — produção não é declarada sem evidência técnica do provider

Estado alvo: `PASS`.

### C16 — política de backup/restore reconhecida como requisito técnico posterior

Estado alvo: `PASS`; a política completa não precisa estar implementada para fechar a fase documental, mas não pode ser ocultada nem considerada concluída.

### C17 — fontes de navegação não induzem ao roadmap antigo

Estado alvo: `PASS`.

### C18 — backlog da Fase 0 não contém pendência histórica falsa conhecida

Estado alvo: `PASS` após reconciliação da Issue #1.

### C19 — remediação validada no HEAD exato do PR

Estado alvo: `PASS` após revisão do diff, CI e reteste.

### C20 — merge condicionado a HUMAN_GATE separado

Estado alvo: `PASS` antes do merge; nenhum HUMAN_GATE de desenho equivale a autorização de integração.

## 6. Limites da etapa seguinte

Após a Fase 0, o projeto pode avançar para planejamento/execução das frentes técnicas do roadmap, mas cada frente deve declarar escopo e riscos.

Não existe autorização geral para:

- implementar patrimônio completo;
- implementar manutenção;
- implementar obras/eventos/romaneios;
- criar modelo físico completo;
- criar SQL/migrations novas;
- alterar dados reais ou RLS;
- provisionar/mudar recursos Supabase;
- promover produção;
- realizar operação destrutiva.

## 7. Resultado do reteste

```text
FINAL_RETEST_HEAD=RESOLVE_FROM_PR_METADATA
CI=REQUIRED
REVIEW_THREADS=REQUIRED_ZERO_BLOCKING
FINAL_DECISION=PENDING_RETEST
MERGE_AUTHORIZED=NO
```

Este bloco deve ser atualizado no mesmo PR depois do reteste do HEAD final.

## 8. Regra de encerramento

A Fase 0 somente poderá ser declarada formalmente encerrada quando:

1. C01–C20 estiverem em PASS;
2. o PR de GOV-03 tiver CI verde e zero thread bloqueadora;
3. o HEAD exato tiver sido revisado;
4. houver HUMAN_GATE explícito para o merge;
5. o merge for verificado na `main`;
6. GitHub e Linear/fallback estiverem sincronizados.
