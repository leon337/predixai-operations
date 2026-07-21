# RN-00 — Vocabulário Oficial / PredixAI Domain Dictionary

## Status

- Versão: 1.0 inicial
- Estado: baseline documental em construção
- Dependência: todas as regras, interfaces, APIs, banco, testes e agentes de IA

## Regra de governança

Todo termo normativo utilizado pelo projeto deve possuir definição única. Conceitos novos devem ser registrados neste dicionário antes de serem introduzidos em uma nova regra de negócio.

## Organização

### Empresa
Organização jurídica proprietária da operação e dos dados. Não significa Unidade, Obra ou Evento.

### Unidade
Estrutura permanente ou administrativa de uma Empresa, como matriz, filial, galpão, escritório ou base operacional. Obra e Evento não são tipos de Unidade.

### Setor
Divisão organizacional de uma Unidade, como Almoxarifado, Elétrica, Serralheria, Logística ou Administrativo.

### Centro Operacional
Local lógico responsável por administrar estoque. Pode representar almoxarifado, depósito, estoque de obra, estoque de evento ou estoque móvel. Todo saldo físico pertence a um Centro Operacional.

### Obra
Operação temporária vinculada à Empresa, com cliente, responsáveis, centro de custo e período próprios.

### Evento
Operação temporária destinada a montagem, realização e desmontagem de um evento. Pode possuir reservas, romaneios e Centros Operacionais temporários.

## Materiais

### Item de Catálogo
Representação técnica ou comercial de um produto existente no mercado, independente de a Empresa possuir estoque.

### Material
Cadastro operacional interno de um tipo de item controlado pela Empresa. Não representa uma unidade física individual.

### Patrimônio
Unidade física individual, rastreável e identificada, pertencente a um Material patrimonial.

### Consumível
Material controlado por quantidade e consumido durante a operação.

### Material Mensurável
Material controlado por medida, como metro, quilograma ou litro.

### Kit
Agrupamento operacional de componentes para separação, conferência e movimentação conjunta.

### Composição Técnica
Relação física ou funcional pai–filho. Não é equivalente a Kit.

### Lote
Conjunto rastreável de unidades de um mesmo Material, associado a origem, fornecedor, fabricação ou validade.

### Grupo
Nível superior da classificação de materiais.

### Categoria
Classificação intermediária vinculada a um Grupo.

### Subcategoria
Classificação específica e opcional vinculada a uma Categoria.

### Fabricante
Organização que fabrica o produto. Não significa Fornecedor.

### Marca
Identidade comercial sob a qual um produto é oferecido.

### Modelo
Versão comercial específica de um produto de determinada Marca.

### Fornecedor
Organização que comercializa ou fornece materiais e serviços para a Empresa.

### Compatibilidade
Capacidade de dois itens funcionarem em conjunto.

### Equivalência
Condição pela qual um item pode substituir outro total ou parcialmente.

## Armazenamento

### Localização
Área física hierárquica dentro de um Centro Operacional.

### Unidade de Armazenamento
Recipiente ou estrutura que contém materiais ou posições, como caixa, pallet, rack, armário, contêiner ou baú.

### Posição Física
Endereço exato no qual um saldo ou patrimônio está armazenado.

### Saldo
Quantidade resultante das movimentações para uma combinação de Material, Centro Operacional, localização, lote, estado e disponibilidade. Não é um campo isolado no Material.

### Ocupação
Estado espacial de uma posição ou unidade de armazenamento: livre, parcial, cheia, bloqueada ou reservada.

### Capacidade
Limite físico de peso, volume, quantidade ou tipo aceito por uma posição.

## Operação

### Movimentação
Registro imutável de uma alteração operacional ou física no estoque.

### Entrada
Movimentação que incorpora quantidade ou patrimônio a um Centro Operacional.

### Saída
Movimentação que retira o item da disponibilidade do Centro Operacional para uso, consumo, empréstimo, obra ou evento.

### Retorno
Movimentação que registra a devolução após uma saída.

### Transferência
Movimentação relacionada de origem e destino entre Centros Operacionais ou posições.

### Reserva
Comprometimento de quantidade ou patrimônio para uso futuro, sem saída física imediata.

### Separação
Confirmação de que o item reservado foi fisicamente preparado para expedição.

### Conferência
Validação física e documental de itens, quantidades, estados e responsáveis.

### Inventário
Processo de contagem física e comparação com o estado registrado.

### Ajuste
Movimentação autorizada que corrige divergência comprovada. Não apaga o histórico anterior.

### Baixa
Encerramento formal da vida operacional de um patrimônio ou saldo, mediante motivo e autorização.

### Romaneio
Processo operacional e documento que reúne os materiais destinados a uma obra ou evento, incluindo separação, carregamento, uso, retorno e divergências.

## Estado e disponibilidade

### Estado Físico
Condição material do item: novo, bom, regular, avariado ou inutilizado.

### Situação Operacional
Etapa atual do ciclo: disponível, reservado, separado, em trânsito, em uso, em conferência, em manutenção, extraviado ou baixado.

### Situação Cadastral
Condição administrativa do cadastro: ativo, inativo, bloqueado ou descontinuado.

### Disponibilidade
Indicação de que o item pode ou não ser utilizado em uma nova operação. É diferente de estado físico.

## Pessoas e responsabilidade

### Usuário
Pessoa autenticada e autorizada a operar o sistema.

### Perfil
Conjunto de permissões associado a uma função operacional.

### Permissão
Ação autorizada sobre um recurso.

### Policy Engine
Conjunto de condições de negócio que complementa o RBAC e decide quando uma ação permitida pode ser executada.

### Solicitante
Pessoa que solicita materiais ou operação.

### Aprovador
Pessoa autorizada a aprovar uma operação.

### Executor
Pessoa que efetivamente registra ou realiza a ação.

### Separador
Pessoa que prepara fisicamente os itens.

### Conferente
Pessoa que valida itens e quantidades.

### Transportador
Pessoa responsável pelo deslocamento.

### Recebedor
Pessoa que confirma o recebimento no destino.

### Responsável Atual
Pessoa principal sob cuja guarda está um patrimônio ou conjunto.

### Responsabilidade Compartilhada
Modelo com um responsável principal e responsáveis auxiliares.

## Inteligência e governança

### Sugestão de IA
Resultado não vinculante produzido por modelo de IA e sujeito a confirmação humana.

### Confiança Estimada
Indicador técnico da segurança estimada de uma sugestão. Não substitui validação humana.

### Evidência
Registro, documento, foto ou dado que sustenta uma decisão ou operação.

### Simulação
Cenário isolado que não altera dados reais.

### Digital Twin
Representação virtual sincronizada do ambiente operacional. Não substitui o estoque oficial.

### Auditoria
Registro de autoria, data, contexto, valores anteriores e posteriores, justificativa e evidências.

### Baseline
Versão aprovada e congelada de um documento normativo. Mudanças exigem nova revisão.
