# ADR-001 — Estratégia Inicial de Vercel e Supabase

## Status

**HISTÓRICA — SUPERSEDIDA EM PARTE PELA ADR-002**

Esta ADR registra a estratégia de infraestrutura aprovada no início técnico do PredixAI Operations. Algumas premissas factuais foram superadas pela execução autorizada do MVP-01.

A decisão arquitetural vigente pós-MVP é a [`ADR-002 — Arquitetura Vigente Pós-MVP-01`](ADR-002-ARQUITETURA-VIGENTE-POS-MVP01.md), quando presente na `main`.

O conteúdo integral anterior desta ADR permanece preservado no histórico Git.

## Contexto histórico

Quando esta decisão foi elaborada:

- o projeto estava na Fase 0 documental;
- ainda não havia aplicação executável integrada;
- Next.js + TypeScript era a preferência para o frontend;
- Vercel era a plataforma proposta para previews/produção;
- Supabase era a plataforma proposta para PostgreSQL, Auth, Storage e RLS;
- a criação de tabelas de domínio ainda estava bloqueada;
- reutilizar um projeto Supabase existente havia sido rejeitado naquele momento.

Posteriormente, o MVP-01 materializou uma solução diferente em pontos relevantes:

- aplicação Next.js/TypeScript passou a existir;
- Vercel passou a ser utilizada;
- o projeto Supabase existente `potiguarbd` (`gotzykqvpgjzmzsyvufx`) foi reutilizado;
- migrations, Auth e RLS foram aplicadas ao escopo do MVP-01.

Esses fatos são reconciliados pela ADR-002.

## Princípios da ADR-001 que continuam válidos

### Frontend e hospedagem

- aplicação web mobile-first;
- Next.js com TypeScript como base materializada;
- PRs de implementação sujeitos a build/CI e Preview quando aplicável;
- integração na `main` não deve ser confundida com promoção tecnicamente comprovada em produção.

### Secrets

- secrets nunca entram no GitHub;
- credenciais administrativas ficam fora do cliente;
- chaves e variáveis respeitam menor privilégio;
- exposição de credencial exige rotação.

### Banco e migrations

- migrations devem ser versionadas;
- mudanças relevantes de banco exigem revisão e evidência;
- SQL/migrations novas não são autorizadas por esta ADR nem pelo encerramento da Fase 0;
- operação manual excepcional deve ser formalmente documentada.

### Backups e recuperação

Antes da maturidade de produção devem ser definidos, de forma compatível com o provider/plano real:

- mecanismo de backup;
- retenção;
- restauração;
- teste de restore;
- responsabilidade operacional.

### Portabilidade

O domínio não deve depender de mecanismos que impeçam exportação e recuperação dos dados PostgreSQL de forma razoável.

## Premissas explicitamente superadas

A ADR-002 supersede as seguintes afirmações históricas:

1. inexistência de aplicação executável;
2. inexistência de projeto Vercel utilizado pelo produto;
3. rejeição definitiva à reutilização de Supabase existente;
4. inexistência de migrations/tabelas de domínio no escopo do MVP-01;
5. separação LOCAL/PREVIEW/PRODUÇÃO como fato já implementado.

## Regra de leitura

Para decisões atuais, consultar na ordem:

1. código e arquivos reais da `main`;
2. `PROJECT_STATE.md`;
3. ADR-002;
4. Roadmap Mestre;
5. esta ADR como histórico e fonte dos princípios ainda não superados.

Nenhuma implementação, SQL, migration, deploy ou mudança de provider é autorizada por este documento.
