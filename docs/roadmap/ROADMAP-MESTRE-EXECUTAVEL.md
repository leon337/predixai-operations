# Roadmap Mestre Executável — PredixAI Operations

## Objetivo final

Entregar um sistema operacional de almoxarifado inteligente, auditável e seguro, com frontend web/mobile, backend de dados controlado e evolução progressiva dos módulos de materiais, patrimônios, estoques, movimentações, obras, eventos, romaneios, manutenção e relatórios.

## Regra de leitura

Este é o roadmap operacional mestre. Estados voláteis de `main`, PR, Issue, CI, provider e deploy devem ser verificados ao vivo.

## Estado consolidado — 2026-08-17

- Fase 0: **CONCLUÍDA — GOV-03**;
- RN-00 a RN-02.7: baselines congeladas;
- ADR-002: vigente;
- MVP-01: integrado;
- SEC-02: integrada;
- Fase 1 residual: **ATIVA — INFRA-04**;
- controle: GitHub Issue #30 + fallback Linear LEA-121;
- R1: leitura concluída;
- R2: Opção C vigente — `potiguarbd` permanece `INACTIVE`;
- R3: **MERGED/VERIFIED**;
- R4: **MERGED/VERIFIED**;
- F10: **MERGED/VERIFIED**;
- R5: política + GATE-R5-A **MERGED/VERIFIED LOCAL/SINTÉTICO**; R5-B/C/D continuam separados;
- R6: **PLANNING/READONLY ACTIVE — IMPLEMENTATION NOT AUTHORIZED**;
- R7: pendente;
- produção: **BLOCKED / não tecnicamente confirmada**.

Baseline da `main` na abertura do R6: `82dcbe2b461d0aa5389a75b57c7f0bb49728ff4b`.

## Fase 0 — Domínio, governança e arquitetura suficiente

`COMPLETED — GOV-03`.

Baselines: RN-00 a RN-02.7, ADR-001 histórica, ADR-002 vigente e governança auditável.

Encerrar Fase 0 não significa que todo o domínio esteja implementado.

## MVP-01 — fatia materializada

Já entregue:

- autenticação por e-mail/senha;
- `owner`, `operator`, `viewer`;
- materiais;
- entradas/saídas;
- saldo atual;
- bloqueio de saída acima do saldo;
- estoque mínimo;
- histórico;
- RLS/funções/migrations do MVP;
- UI responsiva;
- CI e UAT desktop/mobile.

Produção atual continua não comprovada tecnicamente.

## Fase 1 — Infraestrutura e ambientes completos

### R1 — Vercel

**READONLY COMPLETED / TARGET STILL NOT DISCOVERED.**

A equipe conectada continua listando 0 projetos em 2026-08-17. Criação/reconexão continua sujeita a HUMAN_GATE.

### R2 — Supabase remoto

**OPTION C ACTIVE.**

- `potiguarbd` = `INACTIVE`;
- nenhum projeto ativo foi pausado;
- nenhum restore remoto executado;
- nenhum plano/custo alterado;
- dois outros projetos da organização foram observados `ACTIVE_HEALTHY`.

### R3 — contrato de ambiente

**MERGED/VERIFIED — PR #32.**

- URL/chave remota hardcoded removidas;
- variáveis por ambiente;
- `.env.example` local;
- contrato automatizado.

### R4 — Supabase local isolado

**MERGED/VERIFIED — PR #32.**

- `supabase/config.toml` local;
- Supabase CLI `2.111.0` fixada;
- `start/status/db reset --local/stop`;
- CI reconstrói o banco local.

### F10 — migration-base

**MERGED/VERIFIED — PR #32.**

Migration-base mínima tornou a cadeia de migrations reproduzível do zero sem reescrever as migrations históricas.

Integração R3/R4/F10: `354e4d76ca89c5215a12058f7af418e275855cf5`.

### R5 — Backup e Restore

**POLICY APPROVED / GATE-R5-A MERGED VERIFIED LOCAL SYNTHETIC / REMOTE GATES PENDING.**

Documento canônico:

`docs/infra/INFRA-04-R5-BACKUP-RESTORE-PLANO-2026-08-17.md`

Integração R5-A: `d9f71dd28321fb4e89dd05da8cce35f62c4ee219`.

#### Política aprovada

```text
backup lógico independente
-> SHA-256
-> cópia criptografada off-provider
-> restore isolado
-> recovery drill remoto sob gate futuro
```

Retenção:

```text
7 daily + 4 weekly + 3 monthly + pre-change
```

Targets de staging/piloto:

```text
RPO <= 24h
RTO <= 4h
```

Direção de tier:

- Free: desenvolvimento/piloto com risco aceito;
- Pro + backup independente: recomendação mínima para futura produção controlada, sujeita a gate de custo;
- PITR: somente se requisito de RPO justificar.

#### GATE-R5-A — resultado

- RED `32025588744` — recovery script ausente;
- integração inicial `32025751982` — encontrou F09 no stdin do `psql`;
- remediação mínima aplicada;
- GREEN `32026196294` — SUCCESS;
- HEAD final pré-merge `6716eb3da2fc3eb4de7d8589046aa7d542b21a78`;
- CI final `32027547854` — SUCCESS;
- merge verificado em `d9f71dd28321fb4e89dd05da8cce35f62c4ee219`.

Validação:

```text
before=1|1|1|7
afterDestroy=ABSENT
afterRestore=1|1|1|7
```

Isso não comprova backup/restore remoto real, Auth remoto, Storage físico real, cópia off-provider real, recovery hospedado, RTO real ou produção.

#### Gates R5 seguintes

- **R5-B:** acesso/exportação de backup remoto real;
- **R5-C:** recovery drill em alvo remoto novo/isolado;
- **R5-D:** decisão de plano/tier/custo.

Todos exigem HUMAN_GATE próprio.

### R6 — CI/CD e rollback

**PLANNING/READONLY ACTIVE — IMPLEMENTATION NOT AUTHORIZED.**

Documento canônico de planejamento:

`docs/infra/INFRA-04-R6-CICD-ROLLBACK-PLANO-2026-08-17.md`

Auditoria read-only encontrou:

- apenas um workflow CI versionado;
- nenhum workflow de deploy/Preview/Production/rollback;
- 0 GitHub Deployment records;
- equipe Vercel conectada com 0 projetos descobertos;
- `main` sem branch protection/required status checks;
- nenhum health endpoint/smoke remoto;
- migrations forward-only, sem mecanismo automático de down migration;
- trigger de push do CI ainda aponta para branch histórica `feat/mvp-01-online-almoxarifado`.

Arquitetura proposta:

```text
PR
-> CI HEAD exato
-> HUMAN_GATE merge
-> main verificada
-> Preview isolado somente após provider reconciliado
-> smoke/health
-> release evidence
-> HUMAN_GATE promoção
-> Production
-> smoke + R7
-> rollback manual de aplicação se necessário
```

Regra crítica:

```text
APPLICATION ROLLBACK != DATABASE ROLLBACK
```

Gates planejados:

- **R6-A:** CI hardening + health/smoke + release evidence somente repo/local;
- **R6-B:** branch protection/required checks — mutation GitHub separada;
- **R6-C:** Preview remoto isolado — somente após provider reconciliado;
- **R6-D:** promoção manual — Production gate separado;
- **R6-E:** rollback drill primeiro em Preview/staging isolado;
- **R6-F:** coupling com banco/recovery — sem rollback automático de schema/dados.

Nenhum gate R6 de implementação ou provider está autorizado nesta rodada.

### R7 — Observabilidade

**PENDING.**

Pendente: logs/erros por ambiente, saúde, retenção e evidência mínima antes de produção.

### Critério de saída da Fase 1

Fase 1 só encerra quando R5–R7 estiverem suficientemente validados, riscos HIGH tratados/aceitos e produção possuir estado técnico inequívoco.

## Fase 2 — Modelo físico, dados e segurança completos

Já antecipado parcialmente pelo MVP-01. Pendente: domínio ampliado, constraints/índices, RLS ampliada, auditoria transversal, seeds não sensíveis e testes de autorização/integridade.

## Fase 3 — Experiência completa

Pendente: arquitetura de informação ampliada, loading/error, acessibilidade, design system e permissões transversais.

## Fase 4 — Operação ampliada

Pendente: empresas/unidades completas, patrimônios, localizações/WMS, transferências/inventário/ajustes, obras/eventos/romaneios, manutenção, anexos/QR, relatórios e auditoria transversal.

## Fase 5 — Qualidade e homologação

Pendente: testes ampliados, RLS/permissões, E2E, acessibilidade/mobile, desempenho, recuperação, homologação e rollback.

## Fase 6 — Produção controlada

Pendente:

- provider/plano/domínio confirmados;
- backup remoto real e restore isolado comprovados;
- observabilidade/alertas;
- release aprovada;
- promoção comprovada;
- operação assistida e critérios de rollback.

Autorização histórica de promoção não equivale a produção tecnicamente confirmada.

## IA assistiva

IA é camada auxiliar e não recebe autoridade irrestrita para executar operações críticas ou destrutivas.

## Governança executável

`controle operacional → branch → PR → HEAD revisado → achados → remediação → reteste → CI → HUMAN_GATE → merge → verificação pós-merge → sincronização`

## Próxima transição

Concluir a validação documental do planejamento R6. Se o plano permanecer consistente, a próxima decisão humana deve escolher explicitamente se autoriza ou não o **GATE-R6-A — CI hardening + health/smoke + release evidence somente repo/local**. R6-B/C/D/E/F e toda mutação remota continuam separados.
