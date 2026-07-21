# RN-01 REV2.1 — Cadastro e Classificação de Materiais

## Metadados

- Documento: RN-01
- Versão: REV2.1
- Estado: APROVADA
- Baseline: Fase 0
- Alteração: somente por nova revisão
- Escopo: governança do cadastro, identificação, classificação e rastreabilidade de materiais

## 1. Objetivo

Definir como Material, Patrimônio, Consumível, Material Mensurável e Kit são cadastrados, identificados, classificados, alterados, pesquisados, inativados e auditados.

## 2. Tipos de controle

**RN-01.001** Todo Material possui exatamente um tipo principal: Consumível, Patrimonial, Mensurável ou Kit.

**RN-01.002** Consumível é controlado por quantidade.

**RN-01.003** Patrimonial exige uma identidade individual para cada unidade física.

**RN-01.004** Mensurável é controlado por unidade de medida contínua ou fracionável.

**RN-01.005** Kit agrupa componentes sem eliminar a identidade e o controle individual deles.

## 3. Classificação

**RN-01.006** Todo Material pertence a uma Empresa.

**RN-01.007** Grupo e Categoria são obrigatórios.

**RN-01.008** Subcategoria é opcional.

**RN-01.009** Categoria pertence exatamente a um Grupo.

**RN-01.010** Subcategoria pertence exatamente a uma Categoria.

**RN-01.011** Classificação com vínculos históricos não pode ser excluída.

**RN-01.012** Classificações podem ser inativadas.

**RN-01.013** Materiais vinculados a classificação inativa permanecem consultáveis.

**RN-01.014** Mudança estrutural de classificação gera nova versão lógica.

## 4. Cadastro mínimo

**RN-01.015** São obrigatórios: nome, tipo de controle, Grupo, Categoria, unidade principal, código interno, situação cadastral, indicador de controle de estoque, Empresa, autor e data.

**RN-01.016** Nome deve seguir padrão claro: tipo + característica principal + medida, potência ou especificação relevante.

**RN-01.017** Nomes genéricos ou temporários devem gerar alerta de qualidade.

**RN-01.018** Descrição técnica, marca, modelo, fabricante, cor, dimensões, peso, referência comercial, NCM e observações são opcionais conforme categoria.

## 5. Identificadores

**RN-01.019** Todo registro possui UUID interno imutável.

**RN-01.020** Todo Material possui código oficial automático, único, permanente e não reutilizável.

**RN-01.021** Todo Patrimônio possui código individual automático, único, permanente e não reutilizável.

**RN-01.022** Código legado é opcional e pesquisável.

**RN-01.023** Código oficial não muda após movimentações.

**RN-01.024** Número de série, quando informado, é único na Empresa.

**RN-01.025** QR Code contém somente identificador interno seguro.

**RN-01.026** Reimpressão de QR Code não cria nova identidade.

**RN-01.027** Impressões e reimpressões são auditadas.

**RN-01.028** Prefixos iniciais: MAT, PAT, CAT, GRP, SUB, FOR, USR, SET, LOC, ENT, SAI, TRF, INV, MAN, COM, COT, ROM, EVT, RSV, AUD, ANX, QR e BKP.

## 6. Unidade de medida

**RN-01.029** Todo Material possui uma unidade principal.

**RN-01.030** A unidade principal não muda após movimentações, salvo migração formal e auditada.

**RN-01.031** Conversões só podem ocorrer entre unidades compatíveis.

**RN-01.032** Conversões devem informar fator, validade temporal e responsável pela aprovação.

## 7. Controle de estoque

**RN-01.033** Material físico controlado gera saldo; serviço, frete, mão de obra e despesa não geram saldo.

**RN-01.034** Estoque negativo é proibido em operação normal.

**RN-01.035** Estoque mínimo, máximo e ponto de reposição são opcionais e independentes.

**RN-01.036** Saldo igual ou inferior ao ponto de reposição gera alerta.

**RN-01.037** Localização padrão é sugestão cadastral e não substitui a posição física real.

## 8. Estado, situação e disponibilidade

**RN-01.038** Situação Cadastral admite: ativo, inativo, bloqueado e descontinuado.

**RN-01.039** Estado Físico admite: novo, bom, regular, avariado e inutilizado.

**RN-01.040** Situação Operacional admite: disponível, reservado, separado, em trânsito, em uso, em conferência, em manutenção, extraviado e baixado.

**RN-01.041** Disponibilidade indica se o item pode participar de nova operação.

**RN-01.042** Situação Cadastral, Estado Físico, Situação Operacional e Disponibilidade são dimensões independentes.

**RN-01.043** Patrimônio baixado não recebe movimentação normal.

**RN-01.044** Reversão de baixa exige processo formal, autorização, justificativa e auditoria.

## 9. Lotes e validade

**RN-01.045** Material pode exigir controle por lote.

**RN-01.046** Lote registra código, origem, fornecedor, nota fiscal, fabricação, validade, quantidade inicial e saldo remanescente.

**RN-01.047** Movimentação preserva o lote.

**RN-01.048** Lotes distintos não são misturados conceitualmente.

**RN-01.049** Lote vencido pode ser bloqueado para saída conforme política da categoria.

## 10. Fornecedores e preços

**RN-01.050** Um Material pode ter vários Fornecedores.

**RN-01.051** O vínculo Material–Fornecedor registra código comercial, marca ofertada, prazo, homologação, condição e observações.

**RN-01.052** Histórico de preços é imutável; o último preço não substitui registros anteriores.

**RN-01.053** Fabricante, Marca e Fornecedor são conceitos distintos.

## 11. Sinônimos, tags e atributos

**RN-01.054** Sinônimo facilita pesquisa e não substitui o nome oficial.

**RN-01.055** Tags podem ser oficiais, livres ou sugeridas pela IA.

**RN-01.056** Sugestão de tag por IA exige confirmação humana.

**RN-01.057** Categoria ou Subcategoria pode definir atributos dinâmicos.

**RN-01.058** Atributo possui tipo, obrigatoriedade, unidade, domínio de valores e regra de validação.

**RN-01.059** Valor de atributo pode pertencer ao Material ou ao Patrimônio.

## 12. Patrimônios

**RN-01.060** Patrimônio pertence exatamente a um Material patrimonial.

**RN-01.061** Um Material patrimonial pode possuir vários Patrimônios.

**RN-01.062** Patrimônio mantém código, UUID, série, estado físico, situação operacional, disponibilidade, responsável atual e posição.

**RN-01.063** Um Patrimônio não pode estar em duas posições, saídas ativas ou responsáveis principais simultaneamente.

## 13. Kits e composição

**RN-01.064** Kit possui componentes obrigatórios e opcionais.

**RN-01.065** Cada componente possui quantidade prevista.

**RN-01.066** Componente patrimonial mantém identidade individual.

**RN-01.067** Ausência de componente obrigatório gera divergência.

**RN-01.068** Composição de Kit é versionada.

**RN-01.069** Desmontagem de Kit exige permissão e auditoria.

## 14. Fotos, anexos e evidências

**RN-01.070** Material pode possuir uma foto principal e fotos adicionais.

**RN-01.071** Patrimônio pode possuir fotos próprias.

**RN-01.072** Evidências podem ser vinculadas a entrada, saída, retorno, avaria, manutenção, inventário e baixa.

**RN-01.073** Evidência histórica não é sobrescrita.

**RN-01.074** Todo anexo registra origem, autor, data, tipo e vínculo.

## 15. Duplicidade e qualidade

**RN-01.075** Código oficial duplicado é bloqueado.

**RN-01.076** Código de barras duplicado é bloqueado ou exige exceção formal conforme o tipo.

**RN-01.077** Nome semelhante gera alerta, não bloqueio automático.

**RN-01.078** Verificação de duplicidade considera nome, código, código de barras, marca, modelo, referência, série, sinônimo e descrição.

**RN-01.079** IA pode sugerir possível duplicidade, mas não fundir cadastros.

## 16. Pesquisa

**RN-01.080** Pesquisa aceita nome, código oficial, código legado, Patrimônio, QR Code, código de barras, marca, modelo, série, classificação, posição, sinônimo e tag.

**RN-01.081** Pesquisa normaliza caixa, acentos e espaços simples.

## 17. Edição, inativação e exclusão

**RN-01.082** Campos estruturais ficam protegidos após movimentações.

**RN-01.083** Alteração relevante registra valor anterior, novo valor, autor, data e motivo.

**RN-01.084** Material com saldo, reserva, empréstimo, saída ativa ou manutenção não pode ser inativado normalmente.

**RN-01.085** Registro com histórico não pode ser excluído fisicamente.

**RN-01.086** Cadastro criado por engano e sem vínculos pode ser removido por Administrador, preservando log de exclusão.

**RN-01.087** Reativação exige justificativa e auditoria.

## 18. Permissões mínimas

**RN-01.088** Consulta exige usuário autorizado.

**RN-01.089** Cadastro e edição comum exigem Almoxarife ou Gestor.

**RN-01.090** Alteração estrutural, inativação e reativação exigem Gestor.

**RN-01.091** Exclusão excepcional e alteração de código legado exigem Administrador.

**RN-01.092** Impressão de QR Code exige Almoxarife; reimpressão é auditada.

## 19. IA assistiva

**RN-01.093** IA pode sugerir nome, descrição, categoria, unidade, atributos, tags, sinônimos e vínculos de catálogo.

**RN-01.094** IA não pode cadastrar, fundir, excluir, homologar equivalência ou alterar estoque autonomamente.

**RN-01.095** Sugestão de IA registra modelo, data, confiança estimada, dados de origem e decisão humana.

## 20. Auditoria e versionamento

**RN-01.096** Toda ação registra usuário, data, sessão ou dispositivo, origem, registro afetado e justificativa quando exigida.

**RN-01.097** Alteração estrutural cria nova versão lógica.

**RN-01.098** Versões anteriores são somente leitura.

**RN-01.099** Identificadores nunca são reutilizados.

## 21. Critérios de aceite

A RN-01 é considerada implementada quando o sistema:

1. cadastra os quatro tipos de controle;
2. gera códigos e UUIDs únicos;
3. gera e reimprime QR Codes com auditoria;
4. detecta duplicidades;
5. controla classificação e atributos dinâmicos;
6. registra Patrimônios, Lotes e Kits;
7. preserva evidências e histórico de preços;
8. aplica permissões;
9. protege campos estruturais;
10. inativa sem apagar histórico;
11. pesquisa por todos os identificadores;
12. mantém auditoria e versionamento.
