# Fase 0 — Visão do Produto e Arquitetura Inicial

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

O PredixAI Operations será uma plataforma de inteligência operacional. O Almoxarifado Inteligente será o primeiro módulo e validará a base que futuramente poderá ser reutilizada por Ferramentaria, Compras, Patrimônio, Manutenção, Frota, RH e outros módulos.

## Princípios

1. O banco é a fonte oficial da verdade operacional.
2. Nenhuma movimentação relevante é apagada.
3. Toda ação possui autoria, data, contexto e auditoria.
4. A IA nunca é a única forma de operar o sistema.
5. A IA não executa ações críticas sem confirmação humana.
6. O sistema deve funcionar localmente e sem internet.
7. O MVP deve validar o ciclo real antes da expansão arquitetural.
8. Recursos avançados devem ser previstos sem sobrecarregar o MVP.

## Arquitetura inicial

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

## Estratégia de IA

### Nível 1 — Regras e consultas determinísticas

- estoque mínimo;
- reservas;
- pendências;
- divergências;
- alertas;
- indicadores.

### Nível 2 — IA local

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

A IA pode consultar por ferramentas internas controladas, mas não deve receber credenciais diretas do banco nem autorização irrestrita para excluir, dar baixa, aprovar saída ou modificar saldos.

## MVP inicial

- autenticação e perfis;
- cadastro de materiais;
- categorias e unidades;
- centros operacionais e localizações;
- entrada, saída, retorno e transferência;
- patrimônio e QR Code;
- histórico e auditoria;
- dashboard básico;
- backup.

## Evolução

- MVP 2: obras, eventos, reservas e romaneios;
- MVP 3: chat interno e pesquisa em linguagem natural;
- MVP 4: previsão de reposição e análise de perdas;
- versões futuras: WMS leve, mapa lógico, Digital Twin, RFID/NFC e otimização assistida.
