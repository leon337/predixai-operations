# INFRA-04 — R5 Backup e Restore

**Data:** 2026-08-17  
**Controle:** GitHub Issue #30 / fallback Linear LEA-121  
**Baseline de entrada:** `main=e6382b0abfe2d068eb56ca092de72e58f024f863`  
**Escopo autorizado:** planejamento e análise somente leitura  
**Mutação de provider:** NÃO AUTORIZADA

## 1. Objetivo

Definir uma política verificável de backup e recuperação para o PredixAI Operations antes de qualquer declaração de produção controlada.

R5 não executa nesta etapa:

- restore do `potiguarbd`;
- pause de qualquer projeto;
- criação de projeto ou branch remota;
- alteração de plano/custo;
- download de dados reais;
- `db dump` contra ambiente remoto;
- escrita remota;
- teste destrutivo;
- deploy ou promoção de produção.

## 2. Estado factual verificado

### 2.1 Supabase atual

Conexão read-only verificada em 2026-08-17:

```text
PROJECT=potiguarbd
PROJECT_REF=gotzykqvpgjzmzsyvufx
REGION=sa-east-1
STATUS=INACTIVE
POSTGRES=17.6.1.003
```

Na mesma organização observada existem exatamente dois projetos `ACTIVE_HEALTHY`:

- `screen-assistant-saas`;
- `estoque-mercearia`.

Nenhum projeto foi pausado, restaurado ou modificado durante R5.

### 2.2 Capacidade do plano

Fontes oficiais Supabase verificadas em 2026-08-17:

- **Database Backups:** projetos Free não possuem backups automáticos incluídos; a recomendação oficial é exportar regularmente com `supabase db dump` e manter backups off-site;
- **Pricing:** Free possui limite de dois projetos ativos, pode pausar projetos após período de inatividade e não inclui Automatic Backups nem PITR;
- **Production Checklist:** Free pode sofrer pausa por baixa atividade e backups do banco não são disponibilizados como recurso normal do plano Free;
- **Backup and Restore using the CLI:** backup lógico pode ser separado em roles, schema e data e restaurado manualmente com `psql`;
- **Upgrading:** projetos pausados possuem janela limitada de restore pela plataforma; após a janela, o fluxo pode exigir recuperação por backup para novo projeto/local;
- **Database Backups:** backup de banco não restaura objetos físicos do Storage; objetos precisam de tratamento próprio.

A disponibilidade concreta de um arquivo de backup/download para o `potiguarbd` no Dashboard **não é verificável pela conexão atual** e não deve ser presumida.

## 3. Achados R5

| ID | Severidade | Achado | Estado |
|---|---|---|---|
| INFRA-04-R5-F01 | HIGH | plano Free não fornece Automatic Backups/PITR como garantia operacional | OPEN |
| INFRA-04-R5-F02 | HIGH | `potiguarbd` está INACTIVE e a disponibilidade real de restore/download não foi comprovada | OPEN |
| INFRA-04-R5-F03 | HIGH | não existe evidência de processo independente de backup off-provider | OPEN |
| INFRA-04-R5-F04 | HIGH | não existe evidência de restore real testado a partir de backup do ambiente remoto | OPEN |
| INFRA-04-R5-F05 | MEDIUM | RPO/RTO ainda não foram aprovados formalmente | OPEN |
| INFRA-04-R5-F06 | MEDIUM | backup de banco não cobre objetos físicos do Supabase Storage | OPEN |
| INFRA-04-R5-F07 | MEDIUM | restore lógico deve considerar histórico de migrations, Auth/Storage customizados, configurações e papéis | OPEN |
| INFRA-04-R5-F08 | MEDIUM/HIGH | teste hospedado de recuperação exigiria capacidade/projeto remoto e portanto novo HUMAN_GATE/custo quando aplicável | OPEN |

## 4. Princípio de recuperação

A recuperação não deve depender de uma única camada.

Arquitetura recomendada:

```text
CAMADA 1 — REPOSITÓRIO
migrations + config + código + documentação
          |
          v
CAMADA 2 — BACKUP LÓGICO INDEPENDENTE
roles + schema + data + migration history + manifest/checksums
          |
          v
CAMADA 3 — CÓPIA OFF-PROVIDER
arquivo criptografado fora do projeto Supabase de origem
          |
          v
CAMADA 4 — RESTORE TESTADO
ambiente local isolado -> posteriormente ambiente remoto isolado aprovado
```

Backups de provider, quando disponíveis em plano pago, são uma camada adicional e não substituem a cópia independente.

## 5. Conteúdo mínimo de um backup lógico

Quando houver autorização futura para exportar um ambiente remoto real, o bundle mínimo deverá conter:

1. `roles.sql` — papéis exportáveis;
2. `schema.sql` — schema do banco;
3. `data.sql` — dados;
4. histórico `supabase_migrations`, quando necessário para preservar a linha de migrations;
5. manifesto do backup contendo:
   - projeto/ref de origem;
   - timestamp UTC;
   - versão Postgres;
   - versão Supabase CLI;
   - método de conexão utilizado;
   - arquivos incluídos;
   - SHA-256 de cada arquivo;
   - classificação do conteúdo;
6. inventário de configurações não cobertas apenas pelo dump;
7. inventário separado de Storage, caso existam buckets/objetos reais.

Nenhuma senha, connection string completa, service key ou segredo pode ser versionado no GitHub.

## 6. Retenção proposta — ainda não aprovada como política de produção

Para uma primeira operação de baixo volume, propõe-se como baseline interna:

```text
DAILY=7
WEEKLY=4
MONTHLY=3
PRE_CHANGE=MANDATORY_BEFORE_CRITICAL_REMOTE_CHANGE
CHECKSUM=SHA256
OFF_PROVIDER_COPY=REQUIRED
ENCRYPTION_AT_REST=REQUIRED
```

Essa retenção é uma proposta operacional do projeto, não uma garantia do Supabase.

A política deverá ser reavaliada quando volume, criticidade, requisitos legais ou custo mudarem.

## 7. RPO/RTO propostos

Ainda exigem aprovação humana antes de serem tratados como compromisso operacional.

### Desenvolvimento local

- dado real: proibido por padrão;
- fonte de reconstrução: Git + migrations;
- RPO de dados reais: não aplicável;
- objetivo de reconstrução local: até 30 minutos em ambiente preparado.

### Staging/piloto remoto futuro

Proposta:

```text
RPO_TARGET <= 24h
RTO_TARGET <= 4h
```

Isso pressupõe pelo menos um backup lógico diário off-provider e restore previamente testado.

### Produção futura

Produção permanece **BLOCKED** até decisão explícita de risco/tier.

Opções:

#### Opção A — Free + backup lógico independente

- custo mínimo;
- backup lógico sob responsabilidade do projeto;
- projeto sujeito a limites/pausa do Free;
- sem Automatic Backups e sem PITR incluídos;
- aceitável para desenvolvimento/piloto somente se o risco for explicitamente aceito;
- **não recomendada como baseline de produção controlada**.

#### Opção B — Pro + backup independente

- backup diário do provider com retenção publicada de 7 dias;
- projetos do plano pago não dependem da política de pausa por inatividade do Free;
- manter backup lógico independente off-provider continua recomendado;
- **recomendação mínima atual para produção controlada**, sujeita a HUMAN_GATE de custo.

#### Opção C — Pro + PITR + backup independente

- indicada quando RPO de aproximadamente um dia é insuficiente;
- PITR é add-on pago e permite recuperação com granularidade muito menor;
- não há justificativa atual para ativar PITR antes de existir requisito de negócio correspondente;
- qualquer ativação exige gate de custo próprio.

## 8. Plano de restore em estágios

### R5-T1 — reconstrução pelo repositório

Estado: **JÁ PROVADO em R4/F10**.

O CI consegue reconstruir o Supabase local do zero pelas migrations versionadas.

Isso prova infraestrutura/migrations, mas **não prova recuperação de dados reais**.

### R5-T2 — restore lógico local com dados de teste

Objetivo futuro:

1. gerar bundle lógico de uma base sintética/local;
2. destruir apenas a instância local de teste;
3. restaurar o bundle em uma instância local limpa;
4. validar schema, linhas e invariantes do MVP;
5. medir tempo de recuperação.

Exige autorização de implementação local específica antes de criar automação/scripts adicionais.

### R5-T3 — restore local de backup remoto real

Objetivo futuro:

1. obter backup real autorizado;
2. armazená-lo temporariamente de forma segura;
3. restaurar em ambiente local isolado;
4. validar somente métricas/invariantes necessárias;
5. eliminar cópias temporárias conforme política.

Exige HUMAN_GATE porque envolve dados reais, credenciais/backup remoto e tratamento de informação potencialmente sensível.

### R5-T4 — recovery drill hospedado

Objetivo futuro:

Restaurar em projeto remoto **novo e isolado**, sem substituir o ambiente de origem.

Exige HUMAN_GATE separado para:

- capacidade de projeto;
- custo quando houver;
- criação de projeto/branch;
- secrets;
- envio de backup/dados;
- limpeza posterior.

Nunca realizar o primeiro teste de restore diretamente sobre produção.

## 9. Critérios de aceitação de R5

R5 só pode ser declarado `PASS` quando houver evidência de todos os itens aplicáveis:

- [ ] política de backup aprovada;
- [ ] RPO/RTO aprovados;
- [ ] método de exportação definido e reproduzível;
- [ ] backup real ou representativo gerado sob gate adequado;
- [ ] checksums registrados;
- [ ] cópia off-provider comprovada;
- [ ] restore em ambiente isolado concluído;
- [ ] schema validado;
- [ ] histórico de migrations validado;
- [ ] contagens/consistência dos dados validadas;
- [ ] invariantes de estoque críticas validadas;
- [ ] Auth/configurações aplicáveis verificadas;
- [ ] Storage coberto separadamente quando aplicável;
- [ ] RTO medido;
- [ ] procedimento de incidente documentado;
- [ ] nenhum teste destrutivo executado contra produção.

## 10. Gates futuros

### GATE-R5-A — implementação local do teste de backup/restore sintético

Permitiria somente código/scripts/testes locais, sem dados reais e sem provider remoto.

### GATE-R5-B — acesso/exportação de backup remoto real

Necessário antes de qualquer `db dump`, download de backup, uso de credenciais reais ou tratamento de dados do `potiguarbd`.

Se o projeto precisar ser restaurado/ativado para permitir exportação, isso exige gate de mutação adicional.

### GATE-R5-C — projeto remoto isolado para recovery drill

Necessário para criar/usar um alvo hospedado de recuperação.

### GATE-R5-D — decisão de plano/tier de produção

Necessário para qualquer mudança Free -> Pro ou ativação de PITR/add-on.

## 11. Decisão recomendada nesta etapa

```text
R5_PLANNING=PASS_WITH_IMPLEMENTATION_GATES_REQUIRED
CURRENT_REMOTE=KEEP_POTIGUARBD_INACTIVE
CURRENT_TIER=FREE_OBSERVED
AUTOMATIC_BACKUPS=NOT_INCLUDED_IN_FREE
PITR=NOT_INCLUDED_IN_FREE
PROVIDER_BACKUP_AVAILABILITY_FOR_INACTIVE_PROJECT=NOT_VERIFIED
PRODUCTION=BLOCKED
RECOMMENDED_NEXT_GATE=GATE_R5_A_LOCAL_SYNTHETIC_BACKUP_RESTORE_TEST_ONLY
```

A melhor próxima redução de risco é provar o ciclo **backup lógico -> destruição local controlada -> restore local -> validação**, exclusivamente com dados sintéticos. Isso testa o procedimento sem expor dados reais, sem alterar provider e sem custo.
