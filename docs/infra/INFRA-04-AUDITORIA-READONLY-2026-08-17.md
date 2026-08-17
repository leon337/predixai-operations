# INFRA-04 — Auditoria somente leitura de ambientes, recuperação e operação segura

**Data:** 2026-08-17  
**Controle:** GitHub Issue #30  
**Baseline de entrada:** `main=5260caeea80471c9c9be9c74795a57e8fafc8851`  
**Branch documental:** `docs/infra-04-readonly-audit`

## 1. Objetivo

Caracterizar o estado real de GitHub, Vercel e Supabase após o encerramento da Fase 0 e propor uma arquitetura operacional segura para a Fase 1 residual.

A auditoria é **somente leitura**. Ela não autoriza restore/pause, deploy, alteração de variáveis, criação de projeto, SQL, migration, mudança de dados, RLS/Auth, plano pago ou operação destrutiva.

## 2. Inventário factual

### 2.1 GitHub

- repositório: `leon337/predixai-operations`;
- `main` verificada no início: `5260caeea80471c9c9be9c74795a57e8fafc8851`;
- aplicação: Next.js + TypeScript;
- workflow versionado: somente `Dependency Security`;
- esse workflow executa `npm ci`, valida lockfile, registra dependency tree, executa `npm audit`, bloqueia High/Critical, faz build e publica artefato;
- não existe workflow versionado de deploy, smoke test pós-deploy ou rollback;
- `.gitignore` ignora `.env` e `.env.*` e permite `.env.example`, porém `.env.example` não está presente;
- existem duas migrations do MVP-01 em `supabase/migrations`.

### 2.2 Vercel

Conexão observada:

```text
TEAM=PREDIX AI BR
TEAM_ID=team_D45x1LavGkCy2ifRlrShm2WJ
LIST_PROJECTS=[]
HISTORICAL_PROJECT_ID=prj_58FHK84iho6Dh24fPqq6HTGQy1ds -> 404
PROJECT_SLUG=predixai-operations -> 404
```

Interpretação segura: a conexão atual **não consegue descobrir um projeto Vercel vigente do PredixAI Operations**. Isso não prova que o projeto foi definitivamente deletado; pode ter sido removido, transferido ou estar fora do escopo da conexão atual.

Consequência: Preview e Production atuais na Vercel não podem ser tecnicamente confirmados.

### 2.3 Supabase

Organização:

```text
ORG=leon337's Org
ORG_ID=lkjxqlllmbsovatsapfr
PLAN=free
```

Projeto utilizado pelo MVP-01:

```text
PROJECT=potiguarbd
PROJECT_REF=gotzykqvpgjzmzsyvufx
REGION=sa-east-1
STATUS=INACTIVE
POSTGRES=17.6.1.003
BRANCHES=0
EDGE_FUNCTIONS=0
RECENT_AUTH_LOGS=0
RECENT_POSTGRES_LOGS=0
SECURITY_ADVISOR_LINTS=0
PERFORMANCE_ADVISOR_LINTS=0
```

Projetos atualmente ativos na organização observada:

- `screen-assistant-saas` — `ACTIVE_HEALTHY`;
- `estoque-mercearia` — `ACTIVE_HEALTHY`.

Nenhum projeto foi pausado ou restaurado durante esta auditoria.

## 3. Binding atual da aplicação ao backend

`app/operations-app.tsx` referencia diretamente no bundle cliente:

- URL do `potiguarbd`;
- chave `anon`/publishable do projeto.

A chave `anon` é destinada a uso público e o achado **não** é classificado como vazamento de segredo administrativo.

O problema arquitetural é que a aplicação não possui um contrato de ambiente: qualquer build usa o mesmo endpoint Supabase por construção.

O frontend também usa REST/Auth diretamente e não possui `@supabase/supabase-js` como dependência. Isso é funcional, mas torna ainda mais importante que URL/chave publicável sejam parametrizadas por ambiente.

## 4. Controles positivos já existentes

As migrations do MVP-01 mostram:

- RLS habilitada para tabelas operacionais;
- privilégios `anon` revogados nas tabelas e RPC crítica;
- acesso de leitura limitado a usuário autenticado/membro;
- escrita limitada a `owner`/`operator` ativos;
- RPC de movimentação exige autenticação e perfil escritor;
- saída acima do saldo é bloqueada transacionalmente.

Portanto não existe, nesta revisão documental, evidência de banco operacional aberto para `anon`.

## 5. Achados

| ID | Severidade | Achado | Estado |
|---|---|---|---|
| INFRA-04-F01 | HIGH | projeto Vercel atual não é descoberto pela conexão | OPEN |
| INFRA-04-F02 | HIGH | `potiguarbd` está `INACTIVE` | OPEN |
| INFRA-04-F03 | HIGH | LOCAL/PREVIEW/PRODUCTION apontariam ao mesmo Supabase por hardcode | OPEN |
| INFRA-04-F04 | HIGH | Free Plan sem política própria de backup/restore testado | OPEN |
| INFRA-04-F05 | HIGH | capacidade Free ativa já ocupada por dois outros projetos | OPEN |
| INFRA-04-F06 | MEDIUM | contrato de variáveis (`.env.example`) não existe | OPEN |
| INFRA-04-F07 | MEDIUM | CI não cobre deploy, smoke test ou rollback | OPEN |
| INFRA-04-F08 | MEDIUM/HIGH | observabilidade insuficiente e produção não comprovada | OPEN |
| INFRA-04-F09 | MEDIUM | nenhum banco Preview/branch isolado comprovado | OPEN |

## 6. Restrição econômica/operacional atual

A organização Supabase está no plano Free. O estado observado já possui dois projetos ativos e mantém `potiguarbd` inativo.

Logo, **nenhum plano de remediação pode presumir que basta restaurar `potiguarbd`**. Uma ação futura deverá primeiro obter HUMAN_GATE para uma das alternativas compatíveis com o provider, por exemplo:

1. pausar explicitamente um projeto ativo escolhido pelo humano e liberar capacidade para `potiguarbd`;
2. alterar plano/custo mediante autorização explícita;
3. manter `potiguarbd` inativo e trabalhar apenas em infraestrutura/local até nova decisão.

Esta auditoria não escolhe nem executa nenhuma dessas ações.

## 7. Arquitetura operacional recomendada

### Etapa A — desenvolvimento seguro, produção bloqueada

```text
LOCAL
  Next.js local
      |
      +-- Supabase local/isolado (alvo a materializar)

STAGING / RECOVERY
  Vercel Preview (a recriar/confirmar futuramente)
      |
      +-- Supabase remoto explicitamente escolhido para staging

PRODUCTION
  BLOCKED / NOT CONFIGURED UNTIL GATE
```

Princípios:

- desenvolvimento local não deve usar dados reais por padrão;
- Preview não deve ser tratado como produção;
- `potiguarbd` só recebe um papel (`staging`, `recovery` ou `production`) após decisão explícita;
- produção permanece bloqueada enquanto backup/restore, isolamento, observabilidade e rollback não forem validados.

### Etapa B — produção controlada

Somente depois da Etapa A:

```text
LOCAL -> ambiente local isolado
PREVIEW -> ambiente remoto de teste isolado ou mecanismo equivalente aprovado
PRODUCTION -> projeto/ambiente explicitamente aprovado e comprovado
```

A forma de obter o isolamento remoto (projeto dedicado, branch do provider, outra estratégia) depende de custo e capacidade e exige HUMAN_GATE quando alterar provider/plano.

## 8. Plano de remediação proposto

### R1 — Reconciliar Vercel

Somente leitura primeiro:

- confirmar se o projeto histórico foi removido ou transferido;
- identificar eventual projeto Vercel vigente fora do escopo atual da conexão.

Se nenhum existir, **criar/reconectar projeto Vercel** será ação externa futura sujeita a HUMAN_GATE.

### R2 — Definir papel e recuperação do `potiguarbd`

Antes de restore:

- decidir qual capacidade Free pode ser usada ou se haverá mudança de plano;
- definir papel do projeto após restore;
- definir procedimento de backup antes de ampliar dados críticos.

Restore/pause/plano continuam bloqueados até HUMAN_GATE.

### R3 — Introduzir contrato de ambiente

Mudança futura de código/configuração:

- remover URL e chave publishable hardcoded;
- usar variáveis documentadas por ambiente;
- criar `.env.example` somente com nomes/placeholders;
- separar explicitamente LOCAL/PREVIEW/PRODUCTION.

Exige autorização de implementação.

### R4 — Materializar desenvolvimento local isolado

- definir Supabase CLI/local ou mecanismo equivalente;
- migrations reproduzíveis;
- seed não sensível quando necessário;
- nenhum dado real por padrão.

Exige autorização de implementação de infraestrutura local.

### R5 — Backup e restore

Antes de tratar qualquer remoto como produção:

- método de backup aplicável ao plano escolhido;
- retenção;
- responsável;
- armazenamento off-site adequado;
- procedimento de restore;
- teste de restauração não destrutivo em ambiente isolado.

### R6 — CI/CD e rollback

- preservar security/build gate atual;
- adicionar smoke test adequado;
- Preview somente após ambiente definido;
- promoção para produção manual e explicitamente gated;
- rollback de aplicação e banco documentados separadamente.

### R7 — Observabilidade

- erros e logs por ambiente;
- critério de saúde;
- retenção conforme capacidade/plano;
- evidência mínima antes de declarar produção.

## 9. Gates necessários

### Permitido sem novo HUMAN_GATE nesta auditoria

- leitura de metadados;
- documentação;
- análise de riscos;
- proposta de arquitetura;
- criação de Issue/branch/PR documental sem merge.

### Exige HUMAN_GATE separado

- pause/restore de qualquer Supabase;
- escolha de qual projeto ativo pausar;
- alteração de plano/custo;
- criação/transferência de projeto;
- recriação/conexão de projeto Vercel;
- deploy/promoção;
- mudança de variáveis/secrets;
- código/configuração funcional;
- SQL/migration;
- alteração de dados;
- teste destrutivo;
- merge de PR documental.

## 10. Decisão da auditoria

```text
AUDIT_STATUS=PASS_WITH_REMEDIATION_REQUIRED
PRODUCTION_CONFIRMED=NO
VERCEL_PRODUCT_PROJECT=NOT_DISCOVERABLE_IN_CURRENT_CONNECTION
SUPABASE_POTIGUARBD=INACTIVE
ENVIRONMENT_ISOLATION=NOT_IMPLEMENTED
BACKUP_RESTORE=NOT_PROVEN
NEXT_GATE=APPROVE_REMEDIATION_SEQUENCE_WITHOUT_PROVIDER_MUTATION
```

O projeto pode avançar no planejamento da Fase 1 residual, mas **não deve avançar para expansão de dados críticos ou produção controlada** antes da remediação dos achados HIGH.