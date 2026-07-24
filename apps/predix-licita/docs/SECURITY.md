# Segurança

## Fronteiras

- O navegador nunca recebe chave administrativa do Supabase.
- Autorização server-side usa `getClaims()`.
- Todas as tabelas expostas têm RLS e políticas por `auth.uid()`.
- Usuários anônimos não recebem grants nas tabelas privadas.
- O endpoint de chat limita mensagens e passos do agente.
- O cliente do PNCP usa timeout, limite de página e cache curto.

## Ameaças tratadas

- **Prompt injection:** conteúdo externo é dado, nunca instrução.
- **Exfiltração entre contas:** RLS por proprietário em todas as entidades.
- **Redirecionamento aberto:** callback aceita apenas caminhos internos.
- **Custos descontrolados:** cinco passos por execução e buscas limitadas.
- **Fonte forjada:** URLs são construídas a partir do identificador PNCP quando
  os campos oficiais estão disponíveis.

## Operação

Após aplicar migrations, executar os advisors de segurança e performance do
Supabase. Em produção, manter logs sem conteúdo sensível e revisar retenção de
conversas antes de habilitar persistência integral.
