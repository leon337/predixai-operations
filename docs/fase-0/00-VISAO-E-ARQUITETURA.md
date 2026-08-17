# Fase 0 — Visão do Produto e Arquitetura

## Status deste documento

Este arquivo preserva a visão de produto e o **registro da arquitetura local inicialmente explorada**.

A arquitetura executável vigente após o MVP-01 é definida pela [`ADR-002 — Arquitetura Vigente Pós-MVP-01`](../arquitetura/ADR-002-ARQUITETURA-VIGENTE-POS-MVP01.md), quando presente na `main`.

A topologia ASUS N43SM + FastAPI + PostgreSQL local descrita na seção histórica abaixo **não deve ser interpretada como stack atual obrigatória**.

## Problema

A operação precisa saber, com rastreabilidade:

- o que existe;
- onde está;
- quem movimentou;
- quem autorizou;
- em qual obra ou evento foi utilizado;
- o que retornou;
- o que está avariado, em manutenção, extraviado ou baixado;
- quando comprar ou substituir.

## Visão

O PredixAI Operations é uma plataforma de inteligência operacional. O Almoxarifado Inteligente é o primeiro módulo e valida a base que poderá ser reutilizada por Ferramentaria, Compras, Patrimônio, Manutenção, Frota, RH e outros módulos.

## Princípios duráveis

1. O banco é a fonte oficial da verdade operacional.
2. Nenhuma movimentação relevante é apagada.
3. Toda ação relevante possui autoria, data, contexto e auditoria.
4. A IA nunca é a única forma de operar o sistema.
5. A IA não executa ações críticas sem confirmação humana compatível com o risco.
6. O MVP valida o ciclo real antes da expansão arquitetural.
7. Recursos avançados devem ser previstos sem sobrecarregar a entrega corrente.
8. Decisões de arquitetura devem refletir evidência implementada, não apenas intenção histórica.

## Arquitetura vigente materializada

No estado pós-MVP-01, a base executável comprovada utiliza:

```text
Usuários desktop/mobile
        │
        ▼
Next.js + TypeScript
        │
        ├── Vercel
        │
        └── Supabase
            ├── PostgreSQL
            ├── Auth
            ├── RLS
            └── funções/migrations do MVP-01
```

Projeto Supabase reutilizado no MVP-01:

```text
potiguarbd
gotzykqvpgjzmzsyvufx
sa-east-1
```

Detalhes, limites e itens ainda não consolidados tecnicamente estão na ADR-002.

## Arquitetura local inicial — registro histórico

Na concepção original foi explorada a seguinte topologia:

```text
Celulares e computadores
          │
       Wi-Fi local
          │
     ASUS N43SM
 ┌─────────────────────────────┐
 │ Aplicação web/PWA           │
 │ FastAPI                     │
 │ PostgreSQL                  │
 │ Fotos e documentos          │
 │ QR Code e OCR               │
 │ Ollama / IA local           │
 │ Conector opcional de API    │
 └─────────────────────────────┘
```

Esse desenho permanece como histórico e possível referência futura. Ele **não** substitui a arquitetura materializada do MVP-01 e não autoriza migração para FastAPI, PostgreSQL local, Ollama ou operação offline.

## Estratégia de IA

### Nível 1 — regras e consultas determinísticas

- estoque mínimo;
- reservas;
- pendências;
- divergências;
- alertas;
- indicadores.

### Nível 2 — IA assistiva local ou controlada

- interpretar perguntas simples;
- transformar linguagem natural em filtros seguros;
- resumir dados;
- classificar descrições;
- sugerir atributos e categorias.

### Nível 3 — IA externa opcional

- análise complexa de documentos;
- OCR assistido;
- interpretação avançada de imagens;
- relatórios extensos.

## Limites da IA

A IA pode consultar por ferramentas internas controladas, mas não deve receber credenciais administrativas diretas nem autorização irrestrita para excluir, dar baixa, aprovar saída, alterar estoque, confirmar causa técnica, liberar patrimônio, autorizar manutenção ou modificar saldos.

## Estado do MVP-01

O MVP-01 já materializou uma fatia menor que a visão completa:

- autenticação e perfis básicos;
- cadastro/edição de materiais;
- entradas e saídas;
- saldo e bloqueio de saída superior ao saldo;
- estoque mínimo e alertas;
- histórico auditável;
- RLS/funções/migrations necessárias ao escopo;
- interface responsiva desktop/mobile.

Patrimônio completo, manutenção implementada, obras/eventos/romaneios completos, relatórios avançados e IA operacional continuam fora dessa entrega.

## Evolução

A evolução passa a seguir o Roadmap Mestre e novos gates específicos. Nenhum item futuro é autorizado apenas por aparecer nesta visão.
