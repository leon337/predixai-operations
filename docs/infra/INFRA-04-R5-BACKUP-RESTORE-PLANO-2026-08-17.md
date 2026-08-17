# INFRA-04 — R5 Backup e Restore

**Data:** 2026-08-17  
**Controle:** GitHub Issue #30 / fallback Linear LEA-121  
**Baseline de entrada:** `main=e6382b0abfe2d068eb56ca092de72e58f024f863`  
**PR:** #34 — `docs/infra-04-r5-backup-restore`  
**Política R5:** APROVADA POR HUMAN_GATE  
**GATE-R5-A:** AUTORIZADO E VALIDADO LOCALMENTE  
**Mutação de provider:** NÃO AUTORIZADA / NÃO EXECUTADA

## 1. Objetivo

Definir e provar progressivamente uma política verificável de backup e recuperação para o PredixAI Operations antes de qualquer declaração de produção controlada.

R5 separa quatro níveis de evidência:

1. reconstrução por Git + migrations;
2. backup/restore sintético local;
3. backup real autorizado + restore isolado;
4. recovery drill hospedado isolado.

Somente os níveis 1 e 2 estão atualmente provados.

## 2. Estado factual do provider

Leitura revalidada em 2026-08-17:

```text
PROJECT=potiguarbd
PROJECT_REF=gotzykqvpgjzmzsyvufx
REGION=sa-east-1
STATUS=INACTIVE
POSTGRES=17.6.1.003
ACTIVE_HEALTHY_PROJECTS_IN_ORG=2
```

Projetos ativos observados:

- `screen-assistant-saas`;
- `estoque-mercearia`.

Nenhum projeto foi pausado, restaurado ou modificado durante R5.

A disponibilidade concreta de backup/download/restore do `potiguarbd` inativo não é comprovada pela conexão atual e não deve ser presumida.

## 3. Política R5 aprovada

Arquitetura operacional:

```text
Git + migrations
      |
      v
backup lógico independente
roles + schema + data + migration/config inventory + manifest/checksums
      |
      v
cópia criptografada off-provider
      |
      v
restore isolado testado
      |
      v
recovery drill hospedado sob gate futuro
```

Retenção inicial aprovada como política do projeto:

```text
DAILY=7
WEEKLY=4
MONTHLY=3
PRE_CHANGE=MANDATORY_BEFORE_CRITICAL_REMOTE_CHANGE
CHECKSUM=SHA256
OFF_PROVIDER_COPY=REQUIRED
ENCRYPTION_AT_REST=REQUIRED
```

RPO/RTO aprovados para staging/piloto remoto futuro:

```text
RPO_TARGET <= 24h
RTO_TARGET <= 4h
```

Esses objetivos são política interna do projeto; não representam SLA do provider.

Direção de tier aprovada como arquitetura, sem autorizar custo:

- Free: desenvolvimento/piloto com risco explicitamente aceito;
- Pro + backup independente: recomendação mínima para futura produção controlada, sujeita a HUMAN_GATE de custo;
- PITR: somente se um requisito de negócio justificar RPO menor.

Produção permanece bloqueada.

## 4. Achados R5

| ID | Severidade | Achado | Estado após GATE-R5-A |
|---|---|---|---|
| R5-F01 | HIGH | Free não deve ser tratado como fonte garantida de Automatic Backups/PITR | OPEN — risco de tier/provider |
| R5-F02 | HIGH | `potiguarbd` INACTIVE sem restore/download concretamente comprovado | OPEN |
| R5-F03 | HIGH | não existe evidência de cópia real off-provider | OPEN |
| R5-F04 | HIGH | não existe restore de backup remoto real testado | OPEN |
| R5-F05 | MEDIUM | RPO/RTO sem decisão humana | **CLOSED — política aprovada** |
| R5-F06 | MEDIUM | objetos físicos do Storage exigem cobertura própria | OPEN quando Storage real existir/aplicar |
| R5-F07 | MEDIUM | recovery completo deve considerar migrations/Auth/config/Storage | PARTIAL — schema/dados public provados localmente |
| R5-F08 | MED/HIGH | drill hospedado exige capacidade/custo/gate | OPEN |
| R5-F09 | MEDIUM | helper inicial de restore não encaminhava SQL ao stdin do `psql` | **CLOSED — remediado e retestado** |

## 5. GATE-R5-A — escopo autorizado

HUMAN_GATE de Leandro autorizou exclusivamente:

- Supabase local já versionado;
- dados sintéticos/não sensíveis;
- geração de backup lógico local;
- destruição controlada somente do schema `public` local;
- restore no mesmo Postgres local;
- testes, CI, checksums e documentação.

Continuaram proibidos:

- `potiguarbd` ou qualquer Supabase remoto;
- credenciais/dados reais;
- restore/pause remoto;
- projeto/branch remota;
- plano/custo/PITR;
- Vercel/deploy/produção;
- SQL/migrations de domínio adicionais;
- destruição remota.

Autorização registrada antes da implementação:

- GitHub Issue #30: comentário `5315460569`;
- Linear LEA-121: comentário `0019c6e0-7082-4f08-9d23-2d8a7374dd93`.

## 6. Implementação local

Arquivos de execução:

- `scripts/test-local-backup-restore-contract.mjs`;
- `scripts/supabase-local-recovery.mjs`;
- `.github/workflows/dependency-security.yml`;
- `.gitignore` para `r5-recovery-evidence/`;
- `package.json` integra o contrato ao `npm test`.

### Proteções contra alvo remoto

O contrato automatizado exige:

- Supabase CLI fixada em `2.111.0`;
- `supabase db dump` com `--local` explícito;
- export de roles/schema/data;
- schema do drill limitado a `public`;
- dados via `--data-only --use-copy`;
- restore via `psql` no container `supabase_db_predixai-operations-local`;
- marcador sintético `R5_SYNTHETIC_2026`;
- SHA-256 do bundle.

O teste rejeita padrões remotos como `--linked`, `--db-url`, `project-ref`, ref/hostname do `potiguarbd` e `SUPABASE_DB_URL`.

## 7. TDD e depuração

### RED de contrato

HEAD:

`493ac3e131683c2c11f0fb7e46eec7ad7120902e`

CI:

`32025588744` — FAILURE esperada.

Falha exata:

```text
GATE-R5-A: recovery script ausente: scripts/supabase-local-recovery.mjs
```

Isso provou que o teste capturava a ausência da implementação antes do código.

### Primeira integração — achado R5-F09

HEAD:

`0a1445ca7b13bab8bcd40149f3596a62f18892fd`

CI:

`32025751982` — FAILURE no recovery drill.

O backup local foi gerado e o schema `public` foi destruído corretamente, porém a validação pós-restore encontrou:

```text
ERROR: relation "public.sectors" does not exist
```

Causa raiz: `spawnSync` usava `stdio: "inherit"` ao mesmo tempo em que recebia `input`; portanto, o SQL de `schema.sql`/`data.sql` não era encaminhado ao stdin do `psql`. O processo terminava sem erro, mas não restaurava nada.

Remediação mínima:

- quando há `input`, stdin passa a ser `pipe`;
- stdout/stderr permanecem herdados;
- nenhuma outra lógica do drill foi alterada.

### GREEN final substantivo

HEAD:

`c965e02836aaed9e8020d600b7f15a38ca4128ac`

CI:

`32026196294` — **SUCCESS**.

Passaram:

- `npm ci`;
- lockfile unchanged;
- contratos R3/F10/R5-A;
- dependency/security gate, 0 vulnerabilidades High/Critical;
- build Next.js;
- reconstrução Supabase local;
- geração dos três dumps locais;
- destruição controlada do schema `public`;
- restore do schema;
- restore dos dados sintéticos;
- validação do saldo/invariantes;
- upload da evidência.

Artifact:

`9287251450`

Digest do artifact:

`sha256:df04c8a58bb4027a92d941fb790b9eefd518d45ca9a64beec3ebd7e3f88988af`

## 8. Evidência do recovery drill

`validation.json` confirmou:

```text
scope=LOCAL_SYNTHETIC_ONLY
marker=R5_SYNTHETIC_2026
before=1|1|1|7
afterDestroy=ABSENT
afterRestore=1|1|1|7
result=PASS
```

Interpretação:

- 1 setor sintético existia antes do backup;
- 1 material sintético existia antes do backup;
- 1 movimento de entrada sintético existia antes do backup;
- saldo calculado era 7;
- após destruição, a tabela alvo estava ausente;
- após restore, setor/material/movimento/saldo voltaram exatamente ao esperado.

Checksums do bundle:

```text
roles.sql  = 168a95a9c745af5ed4679751f90419ac9dc434240a213b03e32a06d5664c2308
schema.sql = 679e9afac6bdc02be513ab6a3dac2948e04ee22c4490f547f35e60c117bbb40e
data.sql   = 449afb08f15ec7bd8b4d4f7fe1d22f47e7f593fea64b111a81e4b11176995654
```

Os mesmos hashes permaneceram após o restore.

`roles.sql` foi capturado/checksummed, mas não reaplicado no drill local porque o stack Supabase local já provisiona os papéis de plataforma. O restore testado neste gate é deliberadamente o schema/dados da aplicação.

## 9. O que GATE-R5-A prova e o que não prova

### Provado

- método de dump lógico local reproduzível;
- proteção contra alvo remoto no script;
- schema `public` pode ser reconstruído pelo dump;
- dados sintéticos podem ser restaurados;
- saldo derivado do MVP reaparece corretamente;
- checksums do bundle podem ser gerados e verificados;
- CI consegue repetir o drill do zero.

### Não provado

- backup real do `potiguarbd`;
- disponibilidade de restore/download do projeto inativo;
- cópia criptografada off-provider real;
- restore de dados reais;
- recuperação completa de Auth;
- recuperação de objetos físicos do Storage;
- recovery drill em projeto remoto isolado;
- RTO de staging/produção;
- tier de produção;
- produção.

## 10. Critérios R5 após GATE-R5-A

- [x] política de backup aprovada;
- [x] RPO/RTO de staging/piloto aprovados como targets;
- [x] método lógico representativo definido e reproduzível localmente;
- [x] backup representativo sintético gerado;
- [x] checksums registrados;
- [ ] cópia off-provider real comprovada;
- [x] restore sintético em ambiente local isolado concluído;
- [x] schema `public` validado;
- [ ] histórico remoto de migrations recuperado a partir de backup real;
- [x] contagens e consistência sintéticas validadas;
- [x] invariante de saldo do MVP validada;
- [ ] Auth/configurações remotas aplicáveis verificadas;
- [ ] Storage real coberto quando aplicável;
- [ ] RTO de ambiente hospedado medido;
- [ ] procedimento operacional de incidente finalizado;
- [x] nenhum teste destrutivo executado contra produção/remoto.

R5 **não está completamente encerrado**. GATE-R5-A está PASS, mas os gates de dados/provider permanecem.

## 11. Gates seguintes

### GATE-R5-B — backup remoto real

Necessário antes de qualquer `db dump`, download de backup, uso de credenciais reais ou tratamento de dados do `potiguarbd`.

Se o projeto precisar ser restaurado/ativado para permitir exportação, a mutação requer autorização separada.

### GATE-R5-C — recovery drill remoto isolado

Necessário para criar/usar alvo hospedado de recuperação. Deve incluir capacidade, custo quando aplicável, secrets, dados e limpeza.

### GATE-R5-D — tier de produção

Necessário para qualquer alteração Free → Pro ou PITR/add-on.

## 12. Estado recomendado após GATE-R5-A

```text
R5_POLICY=APPROVED
GATE_R5_A=PASS_LOCAL_SYNTHETIC
REAL_REMOTE_BACKUP=NOT_AUTHORIZED_NOT_PROVEN
OFF_PROVIDER_REAL_COPY=NOT_PROVEN
REMOTE_RESTORE=NOT_AUTHORIZED_NOT_PROVEN
PRODUCTION=BLOCKED
NEXT_DECISION=INTEGRATE_PR34_OR_AUTHORIZE_SEPARATE_R5_B_SCOPE
```

O menor próximo passo de governança é integrar o trabalho local já validado antes de abrir qualquer acesso a dados/provider remoto.
