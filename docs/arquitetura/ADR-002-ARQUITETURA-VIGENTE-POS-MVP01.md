# ADR-002 — Arquitetura Vigente Pós-MVP-01

## Status

**DECISÃO APROVADA PARA CONSOLIDAÇÃO — VIGÊNCIA DETERMINADA PELA PRESENÇA DESTE DOCUMENTO NA `main`**

Esta ADR foi produzida no GOV-03 — Checklist Formal de Encerramento da Fase 0. Ela consolida o estado arquitetural materializado após o MVP-01 e supersede somente as premissas factuais da ADR-001 que se tornaram obsoletas.

A ADR-001 permanece no repositório como registro histórico da decisão inicial.

## 1. Contexto atual

O PredixAI Operations deixou de ser apenas uma concepção documental. O MVP-01 materializou uma fatia vertical executável e integrada ao repositório oficial.

Estado comprovado no início do GOV-03:

- frontend: Next.js com TypeScript;
- runtime web: React;
- hospedagem utilizada: Vercel;
- backend/plataforma de dados utilizada pelo MVP-01: Supabase;
- projeto Supabase efetivamente reutilizado: `potiguarbd`;
- project ref: `gotzykqvpgjzmzsyvufx`;
- região registrada: `sa-east-1`;
- autenticação e RLS aplicadas ao escopo do MVP-01;
- migrations do MVP-01 versionadas no GitHub;
- CI de dependências e build presente;
- UAT desktop e mobile do MVP-01 em PASS;
- promoção para produção autorizada historicamente, porém não tecnicamente confirmada no repositório.

## 2. Decisão arquitetural vigente

### 2.1 Aplicação

A base executável vigente do PredixAI Operations é uma aplicação web **Next.js + TypeScript**.

O frontend deve permanecer mobile-first e responsivo. PWA, recursos offline avançados, cliente nativo e execução local completa podem ser avaliados futuramente, mas não são premissas obrigatórias da arquitetura já materializada.

### 2.2 Hospedagem

A Vercel é a plataforma de hospedagem adotada para a aplicação Next.js no estado materializado do MVP-01.

Regras:

- PRs de implementação devem continuar sujeitos a build/CI e, quando aplicável, Preview Deploy;
- `main` é a referência de integração, mas integração em `main` não equivale automaticamente a promoção comprovada em produção;
- produção somente pode ser declarada quando houver evidência técnica do provider;
- mudanças de domínio, alias, observabilidade, plano, custos ou estratégia de produção exigem ciclo próprio quando materialmente relevantes.

### 2.3 Banco, autenticação e serviços de dados

O Supabase é a plataforma de dados vigente do MVP-01.

O projeto efetivamente utilizado é:

```text
SUPABASE_PROJECT=potiguarbd
SUPABASE_PROJECT_REF=gotzykqvpgjzmzsyvufx
REGION=sa-east-1
```

A decisão histórica da ADR-001 de não reutilizar projeto existente foi superada pela execução autorizada do MVP-01. O reaproveitamento de `potiguarbd` é, portanto, um fato arquitetural vigente para a fatia já implementada.

Isso **não** significa que todo o domínio futuro deva obrigatoriamente compartilhar a mesma estrutura lógica, schema, políticas ou estratégia de ambientes. Qualquer expansão relevante deve avaliar isolamento, custos, segurança e migração antes de alterar a arquitetura vigente.

### 2.4 Persistência e migrations

Para o escopo já implementado:

- migrations do MVP-01 existem e são versionadas;
- alterações futuras de banco devem continuar versionadas;
- operações destrutivas, SQL novo, migrations novas e mudanças reais de dados exigem escopo e autorização próprios;
- mudanças manuais de produção não devem substituir migrations auditáveis, salvo incidente formal documentado.

A conclusão da Fase 0 documental **não autoriza automaticamente** novas tabelas, colunas, funções, triggers, políticas RLS, seeds ou alterações de dados.

### 2.5 Secrets

Continuam válidos os princípios duráveis da ADR-001:

- secrets e chaves privadas nunca entram no GitHub;
- credenciais administrativas permanecem fora do cliente;
- variáveis devem respeitar o menor privilégio;
- exposição de credencial exige rotação e registro do incidente.

### 2.6 Ambientes

O projeto possui evidência de desenvolvimento/preview e uso real de Vercel/Supabase no MVP-01, mas a separação completa LOCAL/PREVIEW/PRODUÇÃO descrita originalmente na ADR-001 **não está comprovada como arquitetura final implementada**.

Até nova decisão:

- não inferir que existe isolamento completo de dados entre preview e produção;
- não declarar produção definitiva sem evidência do provider;
- não criar novo projeto Supabase ou duplicar ambientes sem escopo e autorização específicos;
- mudanças de estratégia de ambientes devem ser tratadas em ADR ou tarefa própria quando alterarem risco, custo ou operação.

### 2.7 Backup e recuperação

A política completa de backup, retenção, restore testado e disaster recovery do produto inteiro ainda não está concluída.

Antes de produção controlada definitiva ou expansão de dados críticos deve existir, no mínimo:

- definição do mecanismo de backup aplicável ao plano real;
- retenção definida;
- responsável operacional;
- procedimento de restauração;
- evidência de teste de restauração proporcional ao risco.

A ausência dessa política não invalida a baseline de domínio da Fase 0; ela permanece requisito para as etapas técnicas posteriores e para maturidade de produção.

## 3. Arquitetura local inicial

A arquitetura descrita em `docs/fase-0/00-VISAO-E-ARQUITETURA.md` com ASUS N43SM, FastAPI, PostgreSQL local, Ollama e operação offline representa a **exploração arquitetural inicial** do projeto.

Ela não é a topologia executável vigente do MVP-01.

Elementos locais/offline podem voltar a ser considerados futuramente, mas exigirão nova decisão arquitetural e não devem ser assumidos por agentes como requisito já aprovado para a base atual.

## 4. Separação entre baseline normativa e implementação

A Fase 0 congela regras de domínio e decisões de governança/arquitetura suficientes para orientar a próxima etapa.

Ela não afirma que todas essas regras já estão implementadas.

Materializado no MVP-01:

- autenticação por e-mail/senha;
- membros e perfis básicos;
- materiais básicos;
- entradas e saídas;
- saldo e bloqueio de saída superior ao saldo;
- estoque mínimo e alertas;
- histórico de movimentações;
- RLS/funções/migrations necessárias ao MVP-01;
- interface responsiva desktop/mobile.

Ainda fora da implementação completa:

- patrimônio completo;
- manutenção patrimonial implementada;
- obras, eventos e romaneios completos;
- transferências, inventário e ajustes completos;
- anexos/QR Code completos;
- relatórios avançados;
- IA operacional;
- modelo físico de todo o domínio;
- política completa de ambientes, backup, restore e produção controlada.

## 5. Limites autorizáveis da etapa seguinte

O encerramento da Fase 0 autoriza apenas **planejar e propor** a próxima execução de acordo com o roadmap.

Não existe autorização geral para implementar o restante do produto.

Cada frente futura deve declarar explicitamente seu escopo e, conforme o risco, obter autorização própria antes de executar:

- código funcional novo;
- SQL;
- migrations;
- alterações de dados reais;
- mudanças de RLS ou autenticação;
- provisionamento ou mudança de recursos Supabase;
- deploy/promoção para produção;
- operações destrutivas;
- mudanças relevantes de arquitetura ou custos.

## 6. Relação com ADR-001

A ADR-001 permanece válida como histórico e continua fonte dos princípios que não foram superados, especialmente secrets, migrations auditáveis, portabilidade dos dados e necessidade de backup/recuperação.

São explicitamente superadas pela ADR-002 as seguintes premissas da ADR-001:

1. “o repositório ainda não contém aplicação executável”;
2. “não existe projeto Vercel para o produto”;
3. “reutilizar Supabase existente foi rejeitado”;
4. “nenhuma tabela/migration de domínio existe”;
5. a separação de ambientes descrita como arquitetura futura não pode ser tratada como fato já implementado.

## 7. Critério de vigência

A autoridade desta ADR depende de sua integração na branch padrão.

Enquanto estiver somente em branch/PR, ela é uma decisão aprovada para consolidação. Quando presente na `main`, passa a ser a referência arquitetural vigente junto de `PROJECT_STATE.md` e do Roadmap Mestre.

Nenhum merge é autorizado por esta ADR.
