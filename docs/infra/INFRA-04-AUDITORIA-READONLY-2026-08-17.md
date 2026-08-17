# INFRA-04 — Auditoria somente leitura de ambientes, recuperação e operação segura

**Data:** 2026-08-17  
**Controle:** GitHub Issue #30  
**Baseline de entrada:** `main=5260caeea80471c9c9be9c74795a57e8fafc8851`  
**Estado pós-remediação local:** `main=354e4d76ca89c5215a12058f7af418e275855cf5`

## 1. Objetivo

Caracterizar o estado real de GitHub, Vercel e Supabase após o encerramento da Fase 0, registrar os achados INFRA-04 e preservar a sequência R1→R7 aprovada.

A auditoria inicial foi somente leitura. Alterações posteriores em R3/R4/F10 ocorreram apenas no repositório/local, mediante HUMAN_GATE específico, sem mutação de providers remotos ou dados reais.

## 2. Inventário factual inicial

### GitHub

- aplicação: Next.js + TypeScript;
- workflow inicial: `Dependency Security`;
- não havia workflow versionado de deploy, smoke pós-deploy ou rollback;
- `.env.example` não existia;
- existiam duas migrations incrementais do MVP-01.

### Vercel

```text
TEAM=PREDIX AI BR
TEAM_ID=team_D45x1LavGkCy2ifRlrShm2WJ
LIST_PROJECTS=[]
HISTORICAL_PROJECT_ID=prj_58FHK84iho6Dh24fPqq6HTGQy1ds -> 404
PROJECT_SLUG=predixai-operations -> 404
GITHUB_DEPLOYMENTS=0
```

Conclusão segura: a conexão atual não comprova um projeto Vercel vigente do PredixAI Operations. Isso não prova deleção definitiva.

### Supabase

```text
ORG=leon337's Org
ORG_ID=lkjxqlllmbsovatsapfr
PLAN=free
PROJECT=potiguarbd
PROJECT_REF=gotzykqvpgjzmzsyvufx
REGION=sa-east-1
STATUS=INACTIVE
BRANCHES=0
EDGE_FUNCTIONS=0
```

Projetos observados como ativos:

- `screen-assistant-saas`;
- `estoque-mercearia`.

Nenhum projeto foi pausado, restaurado ou alterado durante a INFRA-04 até esta consolidação.

## 3. Achados

| ID | Severidade | Achado | Estado pós-PR #32 |
|---|---|---|---|
| INFRA-04-F01 | HIGH | projeto Vercel atual não descoberto pela conexão | OPEN |
| INFRA-04-F02 | HIGH | `potiguarbd` `INACTIVE` | OPEN por decisão R2=C |
| INFRA-04-F03 | HIGH | hardcode acoplava ambientes ao mesmo backend | REMEDIATED no PR #32 |
| INFRA-04-F04 | HIGH | backup/restore próprio não comprovado | OPEN — R5 |
| INFRA-04-F05 | HIGH | capacidade Free ocupada por dois projetos ativos | OPEN / provider gated |
| INFRA-04-F06 | MEDIUM | contrato de ambiente ausente | REMEDIATED no PR #32 |
| INFRA-04-F07 | MEDIUM | ausência de deploy/smoke/rollback | OPEN — R6 |
| INFRA-04-F08 | MEDIUM/HIGH | observabilidade/produção não comprovadas | OPEN — R7 |
| INFRA-04-F09 | MEDIUM | ausência de ambiente de desenvolvimento isolado | REMEDIATED localmente no PR #32 |
| INFRA-04-F10 | HIGH | cadeia de migrations não reconstruía schema do zero | REMEDIATED no PR #32 |

## 4. Decisões humanas

- INFRA-04 selecionada como Fase 1 residual;
- sequência R1→R7 aprovada sem mutação automática de provider;
- R2: Opção C aprovada — manter `potiguarbd` inativo e construir local primeiro;
- R3/R4 autorizados somente no repositório/local;
- F10: Opção A aprovada — baseline mínima de compatibilidade.

## 5. R1 — reconciliação Vercel

Concluída em modo somente leitura no limite da conexão disponível. Nenhuma recriação, reconexão ou deploy foi executado.

## 6. R2 — papel do `potiguarbd`

Decisão vigente:

- manter `potiguarbd` `INACTIVE`;
- não pausar outros projetos;
- não alterar plano/custo;
- não restaurar o projeto nesta etapa;
- priorizar infraestrutura local isolada.

## 7. R3 — contrato de ambiente

Integrado no PR #32:

- `NEXT_PUBLIC_SUPABASE_URL`;
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`;
- remoção do endpoint remoto e chave legada hardcoded;
- `.env.example` local sem credenciais reais;
- teste automatizado de contrato.

## 8. R4 — ambiente local isolado

Integrado no PR #32:

- `supabase/config.toml` local;
- `project_id=predixai-operations-local`;
- launcher `scripts/supabase-local.mjs` com CLI `2.111.0`;
- operações apenas locais: `start`, `status`, `db reset --local`, `stop`;
- seed desabilitado;
- CI executa reconstrução local.

## 9. INFRA-04-F10 — baseline mínima

A primeira migration histórica começava alterando tabelas que não eram criadas por nenhuma migration anterior versionada.

TDD:

- RED: CI `32013264506` — ausência da migration-base detectada;
- GREEN: CI `32013369612` — cadeia completa local passou;
- reteste: CI `32013813496` — SUCCESS;
- HEAD final pré-merge: `70f0bc94e47acba46859eb0c6f2095bfb7c9ee6f`;
- CI final: `32014358913` — SUCCESS;
- artefato final: `9283021725`;
- digest: `sha256:8f6565cef195be3b730ad89cb74c3b19e7221dce9f097f804b38476b6cf52215`.

Migration adicionada:

`20260803140000_mvp_inventory_schema_base.sql`

Ela cria somente `sectors`, `inventory_items`, `inventory_moves` e relacionamentos mínimos já exigidos pelo MVP. Não materializa o modelo completo da Fase 0.

As duas migrations históricas permaneceram inalteradas.

## 10. Integração do PR #32

HUMAN_GATE de merge concedido por Leandro.

- método: squash;
- HEAD autorizado: `70f0bc94e47acba46859eb0c6f2095bfb7c9ee6f`;
- merge commit em `main`: `354e4d76ca89c5215a12058f7af418e275855cf5`;
- PR #32: merged/closed;
- 11 arquivos integrados;
- nenhuma mutação remota em Vercel/Supabase;
- nenhum custo, deploy, produção ou dado real alterado.

## 11. Próximos blocos da sequência aprovada

### R5 — Backup e restore

Pendente. Deve definir método, retenção, responsável, cópia off-site e teste de restauração não destrutivo. Qualquer ação remota exige gate próprio.

### R6 — CI/CD e rollback

Pendente. Deve tratar smoke test, promoção manual, rollback de aplicação e banco e separação clara entre preview/produção.

### R7 — Observabilidade

Pendente. Deve definir logs, erro/saúde, retenção e evidência mínima antes de qualquer declaração de produção.

## 12. Limites vigentes

Continuam sem autorização automática:

- restore/pause de Supabase;
- escolha de projeto a pausar;
- mudança de plano/custo;
- criação/transferência de projeto;
- reconexão/recriação Vercel;
- deploy/promoção;
- secrets/variáveis remotas;
- SQL/migrations adicionais;
- dados reais;
- RLS/Auth remoto;
- produção;
- operação destrutiva.

## 13. Estado consolidado

```text
R1=READONLY_COMPLETED
R2=OPTION_C_ACTIVE
R3=MERGED_VERIFIED
R4=MERGED_VERIFIED
F10=MERGED_VERIFIED
R5=PENDING
R6=PENDING
R7=PENDING
PRODUCTION_CONFIRMED=NO
```
