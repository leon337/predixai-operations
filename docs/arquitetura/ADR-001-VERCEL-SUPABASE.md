# ADR-001 — Estratégia Inicial de Vercel e Supabase

## Status

PROPOSTA PARA APROVAÇÃO

## Contexto

O PredixAI Operations está na Fase 0 de concepção e modelagem. O repositório ainda não contém aplicação executável. A equipe Vercel `PREDIX AI BR` está conectada e não possui projeto para este produto. A organização Supabase `leon337's Org` está conectada e não possui projeto específico chamado PredixAI Operations.

## Decisão proposta

### 1. Frontend e Vercel

- adotar aplicação web mobile-first/PWA;
- framework preferencial: Next.js com TypeScript;
- hospedar previews e produção na Vercel;
- cada pull request de implementação deverá gerar Preview Deploy;
- `main` será a origem de produção após gate explícito;
- nenhuma publicação funcional ocorrerá durante a Fase 0 documental.

### 2. Supabase

Utilizar Supabase como plataforma gerenciada para:

- PostgreSQL;
- autenticação;
- Storage para imagens e documentos;
- políticas RLS;
- logs e recursos auxiliares compatíveis com o plano contratado.

Realtime e Edge Functions não são obrigatórios no MVP e dependerão de necessidade comprovada.

### 3. Ambientes

```text
LOCAL
→ desenvolvimento no Linux Mint

PREVIEW
→ Vercel por pull request
→ projeto Supabase de desenvolvimento ou ambiente isolado aprovado

PRODUÇÃO
→ Vercel ligada à main
→ projeto Supabase de produção separado
```

Não será permitido compartilhar tabelas de produção com testes ou previews.

### 4. Região

Região preferencial do Supabase: `sa-east-1`, por proximidade com a operação brasileira e alinhamento com os projetos existentes da organização.

### 5. Secrets

- secrets nunca entram no GitHub;
- `NEXT_PUBLIC_SUPABASE_URL` e chave pública anon podem ser variáveis públicas controladas;
- service role e segredos administrativos ficam apenas em ambientes de servidor autorizados;
- chaves devem ser separadas por ambiente;
- rotação será obrigatória em caso de exposição.

### 6. Banco e migrations

- nenhuma tabela de domínio será criada antes do encerramento da Fase 0 e autorização explícita;
- migrations deverão ser versionadas no GitHub;
- mudanças manuais de produção serão proibidas, salvo procedimento emergencial documentado;
- cada migration deverá possuir revisão, rollback ou estratégia compensatória e evidência de aplicação.

### 7. Backups e recuperação

Antes de produção deverão ser definidos:

- capacidade de backup do plano Supabase escolhido;
- periodicidade de exportação adicional;
- teste de restauração;
- política de retenção;
- responsáveis pelo procedimento.

### 8. Coexistência local e nuvem

A aplicação poderá continuar operando localmente durante o desenvolvimento. A nuvem será usada para previews, testes compartilhados e produção futura. O domínio não poderá depender exclusivamente de recursos proprietários que impeçam exportação dos dados PostgreSQL.

## Alternativas consideradas

1. Reutilizar projeto Supabase existente: rejeitado por misturar produtos e permissões.
2. Criar Supabase imediatamente com tabelas: rejeitado enquanto SQL e migrations permanecem bloqueados.
3. Criar projeto Vercel vazio: rejeitado por não existir aplicação executável.
4. Manter tudo apenas local: rejeitado como estratégia permanente, mas aceito durante a Fase 0 e início técnico.

## Custos e gate de provisionamento

O provisionamento só poderá ocorrer após:

1. confirmação do plano Supabase e eventual custo mensal;
2. confirmação do plano Vercel aplicável à equipe;
3. autorização explícita do responsável;
4. criação de tarefas separadas de provisionamento;
5. definição dos nomes oficiais dos ambientes.

## Checklist de provisionamento futuro

### Supabase

- [ ] confirmar organização;
- [ ] confirmar nome do projeto;
- [ ] confirmar região;
- [ ] confirmar plano e custo;
- [ ] gerar senha forte fora do repositório;
- [ ] criar projeto sem tabelas de domínio;
- [ ] configurar owners e acesso mínimo;
- [ ] documentar URL e identificadores não secretos;
- [ ] registrar política de backup;
- [ ] criar tarefa de migrations somente após autorização.

### Vercel

- [ ] confirmar equipe;
- [ ] criar base executável do frontend;
- [ ] conectar repositório;
- [ ] definir root directory;
- [ ] cadastrar variáveis por ambiente;
- [ ] executar primeiro Preview Deploy;
- [ ] validar logs e rollback;
- [ ] manter produção bloqueada até aprovação.

## Consequências

- separação clara entre documentação, infraestrutura e implementação;
- menor risco de mistura de dados;
- previews rastreáveis por PR;
- custos e recursos externos condicionados a aprovação;
- migrations adiadas até o domínio estar suficientemente congelado.

## Critério de aceite da LEA-121

A LEA-121 estará concluída quando esta ADR for revisada e integrada, os custos forem verificados e as tarefas de provisionamento forem criadas, permanecendo bloqueadas até autorização explícita.