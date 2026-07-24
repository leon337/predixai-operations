# Predix Licita

MVP de inteligência para contratações públicas brasileiras. O produto consulta
o PNCP, normaliza oportunidades, aplica regras determinísticas de aderência e
usa o Grok 4.5 para explicar fontes, inferências, lacunas e próximos passos.

## Stack

- Next.js 16 e React 19
- AI SDK 6, AI Elements e Vercel AI Gateway (`xai/grok-4.5`)
- Supabase Auth/Postgres com Row Level Security
- API pública oficial do PNCP

## Executar

1. Copie `.env.example` para `.env.local`.
2. Preencha `AI_GATEWAY_API_KEY` para desenvolvimento local.
3. Preencha as variáveis públicas do Supabase quando o projeto estiver criado.
4. Execute `npm run dev`.

Sem Supabase, a busca pública e o agente continuam disponíveis; login e
salvamento exibem o estado de configuração pendente.

## Verificação

```bash
npm run check
```

O agente não produz probabilidade de vitória. O score representa aderência
operacional e exige revisão humana do edital completo.
