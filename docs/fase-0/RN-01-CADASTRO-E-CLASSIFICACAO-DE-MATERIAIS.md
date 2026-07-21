# RN-01 REV2.1 — Cadastro e Classificação de Materiais

## Metadados

- Estado: **APROVADA**
- Baseline: Fase 0
- Natureza deste arquivo: resumo executivo
- Documento normativo integral: [`regras-negocio/RN-01-REV2.1-COMPLETA.md`](regras-negocio/RN-01-REV2.1-COMPLETA.md)
- Alteração futura: somente por nova revisão

## Objetivo

Definir a governança de identificação, classificação, rastreabilidade, edição, inativação e qualidade dos materiais do PredixAI Operations.

## Tipos de controle

Todo Material possui exatamente um tipo principal: Consumível, Patrimonial, Mensurável ou Kit.

## Classificação

```text
Grupo
└── Categoria
    └── Subcategoria opcional
        └── Material
```

Grupo e Categoria são obrigatórios. Classificações com histórico não são apagadas e alterações estruturais são versionadas.

## Identificadores

Código interno e código patrimonial são automáticos, únicos, permanentes e não reutilizáveis. Todo registro possui UUID interno. Código legado é opcional. QR Code contém somente identificador seguro e sua reimpressão gera auditoria.

## Estado, situação e disponibilidade

### Situação Cadastral

- ativo;
- inativo;
- bloqueado;
- descontinuado.

### Estado Físico

- novo;
- bom;
- regular;
- avariado;
- inutilizado.

### Situação Operacional

- disponível;
- reservado;
- separado;
- em trânsito;
- em uso;
- em conferência;
- em manutenção;
- extraviado;
- baixado.

### Disponibilidade

Indica se o item pode participar de uma nova operação. As quatro dimensões são independentes.

## Governança resumida

- estoque negativo é proibido;
- Material pode possuir Lotes, Patrimônios, Kits, sinônimos, tags e atributos;
- Material pode possuir vários Fornecedores;
- preços formam histórico imutável;
- evidências históricas não são substituídas;
- registros com histórico não são excluídos;
- IA somente sugere e nunca altera estoque ou cadastro autonomamente;
- toda alteração relevante é auditada e versionada.

## Autoridade normativa

Em qualquer conflito ou omissão, prevalece o documento integral com regras numeradas `RN-01.001` a `RN-01.099` e seus critérios de aceite.
