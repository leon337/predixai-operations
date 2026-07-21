# RN-01 REV2.1 — Cadastro e Classificação de Materiais

## Status

- Estado: **APROVADA**
- Baseline: Fase 0
- Alteração futura: somente por nova revisão

## Objetivo

Definir a governança de identificação, classificação, rastreabilidade, edição, inativação e qualidade dos materiais do PredixAI Operations.

## Tipos de controle

Todo Material possui exatamente um tipo principal:

1. Consumível — controlado por quantidade.
2. Patrimonial — cada unidade possui identidade própria.
3. Mensurável — controlado por medida.
4. Kit — agrupamento operacional de componentes.

## Classificação

```text
Grupo
└── Categoria
    └── Subcategoria opcional
        └── Material
```

- Grupo e Categoria são obrigatórios.
- Classificações vinculadas a históricos não podem ser apagadas.
- Classificações podem ser inativadas.
- Alterações relevantes são versionadas.

## Campos mínimos

- nome padronizado;
- tipo de controle;
- grupo e categoria;
- unidade de medida;
- código interno único;
- situação cadastral;
- indicador de controle de estoque;
- autoria e data de cadastro.

## Identificadores

- Código interno automático, permanente e nunca reutilizado.
- UUID interno para APIs, sincronização e integrações.
- Código legado opcional e pesquisável.
- Código patrimonial individual para cada Patrimônio.
- QR Code contém apenas identificador interno seguro.
- Reimpressão não cria nova identidade e gera auditoria.

### Prefixos normativos iniciais

`MAT`, `PAT`, `CAT`, `GRP`, `SUB`, `FOR`, `USR`, `SET`, `LOC`, `ENT`, `SAI`, `TRF`, `INV`, `MAN`, `COM`, `COT`, `ROM`, `EVT`, `RSV`, `AUD`, `ANX`, `QR`, `BKP`.

## Unidades de medida

Cada Material possui uma unidade principal. Ela não pode ser alterada após movimentações, salvo processo formal de migração. Conversões futuras podem relacionar caixas, unidades, rolos, metros e outras medidas compatíveis.

## Estoque e reposição

- Estoque mínimo, máximo e ponto de reposição são configuráveis.
- Material físico controlado gera saldo; serviços e despesas não geram saldo.
- Localização padrão não substitui a posição física real derivada das movimentações.
- Estoque negativo no cadastro ou operação normal é proibido.

## Estados

### Situação cadastral

- ativo;
- inativo;
- bloqueado;
- descontinuado.

### Estado físico patrimonial

- novo;
- bom;
- regular;
- avariado;
- em manutenção;
- inutilizado;
- extraviado;
- baixado.

Situação cadastral e estado físico são conceitos independentes.

## Fotos, anexos e evidências

Materiais e Patrimônios podem possuir fotos e documentos. Evidências também podem ser vinculadas a entrada, saída, retorno, avaria, manutenção e baixa. Evidências históricas não devem ser substituídas.

## Duplicidade e qualidade

Antes de concluir o cadastro, o sistema verifica:

- código interno;
- código de barras;
- nome semelhante;
- marca, modelo e referência;
- número de série;
- descrição técnica.

Código duplicado é bloqueado. Nome semelhante gera alerta e exige decisão de usuário autorizado.

## Lotes

Materiais configurados para rastreabilidade por lote armazenam origem, fornecedor, nota fiscal, fabricação, validade, quantidade inicial e saldo remanescente. Movimentações preservam o lote. Lotes vencidos podem ser bloqueados.

## Fornecedores e preços

- Um Material pode possuir vários fornecedores.
- O vínculo guarda código comercial, prazo, homologação e condições.
- Preços formam histórico e não são sobrescritos.

## Pesquisa

A busca aceita nome, código oficial, código legado, patrimônio, QR Code, código de barras, marca, modelo, série, categoria, localização, sinônimo e tag. Diferenças simples de caixa, acentuação e espaços devem ser normalizadas.

## Sinônimos, tags e atributos

- Sinônimos facilitam busca e não substituem o nome oficial.
- Tags podem ser oficiais ou sugeridas por IA.
- Categorias podem definir atributos dinâmicos tipados e obrigatórios.

## Kits

- Componentes obrigatórios e opcionais.
- Quantidades previstas.
- Patrimônios mantêm identidade individual.
- Ausência de componente gera divergência.
- Composição é versionada.

## Vida útil e saúde

Materiais podem possuir vida útil por anos, horas ou ciclos. O índice de saúde patrimonial deve ser calculado por regras objetivas; a IA apenas explica ou sugere ações.

## Edição, inativação e exclusão

- Campos estruturais ficam protegidos após movimentações.
- Toda alteração relevante preserva valor anterior, valor novo, autor e motivo.
- Material com saldo, reserva, empréstimo ou manutenção não pode ser inativado normalmente.
- Registros com histórico não são excluídos.
- Cadastro criado por engano e sem vínculos só pode ser removido por administrador, preservando log.

## IA assistiva

A IA pode sugerir nome, descrição, categoria, unidade, tags, atributos e possíveis duplicidades. Não pode cadastrar, fundir, excluir ou alterar estoque autonomamente.

## Auditoria e versionamento

Toda ação registra usuário, data, sessão ou dispositivo, origem, registro afetado, valor anterior, valor posterior, justificativa e anexos quando aplicáveis. Alterações estruturais criam nova versão lógica.

## Critérios de aceite

A regra será considerada implementada quando o sistema conseguir cadastrar os quatro tipos de controle, gerar identificadores e QR Codes, detectar duplicidades, associar classificação e localização, registrar evidências, controlar permissões, versionar alterações, inativar sem perder histórico e pesquisar por todos os identificadores válidos.
