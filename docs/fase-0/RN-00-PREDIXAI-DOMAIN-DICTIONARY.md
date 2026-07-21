# RN-00 REV1 — PredixAI Domain Dictionary

## Metadados

- Documento: RN-00
- Versão: REV1
- Estado: EM REVISÃO
- Baseline: não congelada
- Tarefa: LEA-57
- Dependências: RN-01 REV2.1, RN-02.1 REV1, RN-02.2 REV1, RN-02.3 REV2 e RN-02.4 REV3
- Escopo: vocabulário oficial da plataforma
- Alteração futura após aprovação: somente por nova revisão

## 1. Objetivo

Definir uma linguagem única para documentação, interface, APIs, banco de dados, testes, integrações e agentes de IA do PredixAI Operations.

Cada termo normativo deve possuir significado único. Termos próximos devem ter distinção explícita. Um conceito novo deve ser incluído neste dicionário antes de ser usado em nova regra de negócio.

## 2. Regras de governança semântica

**PDD-001** Um termo normativo possui uma definição oficial única.

**PDD-002** Sinônimos operacionais podem existir para pesquisa e interface, mas não substituem o termo oficial.

**PDD-003** Nomes de tabelas, eventos, comandos, APIs e classes devem derivar dos termos oficiais.

**PDD-004** Termos em inglês podem ser usados no código quando houver padrão técnico consolidado, mantendo correspondência documentada com o termo em português.

**PDD-005** Uma alteração de significado exige nova revisão do RN-00.

**PDD-006** Uma nova RN não pode redefinir silenciosamente termo já existente.

**PDD-007** Em conflito, prevalece a definição da baseline mais recente do RN-00, desde que compatível com as demais baselines aprovadas.

**PDD-008** Estado Físico, Situação Operacional, Situação Cadastral, Disponibilidade e Ocupação são dimensões distintas.

**PDD-009** Operação de negócio e Lançamento de Movimentação são conceitos distintos.

**PDD-010** O razão imutável de movimentações é a fonte de verdade do saldo; projeções e snapshots são derivados.

---

# 3. Organização

## Empresa

Organização jurídica proprietária da operação e dos dados. Não significa Unidade, Obra, Evento ou Centro Operacional.

## Unidade

Estrutura permanente ou administrativa de uma Empresa, como matriz, filial, galpão, escritório ou base operacional. Obra e Evento não são tipos de Unidade.

## Setor

Divisão organizacional de uma Unidade, como Almoxarifado, Elétrica, Serralheria, Logística ou Administrativo.

## Centro Operacional

Local lógico responsável por administrar estoque. Pode representar almoxarifado, depósito, estoque de obra, estoque de evento ou estoque móvel.

## Obra

Operação temporária vinculada à Empresa, com cliente, responsáveis, centro de custo e período próprios.

## Evento

Operação temporária destinada à montagem, realização e desmontagem de evento, podendo possuir reservas, romaneios e Centros Operacionais temporários.

## Cliente

Pessoa física ou jurídica para quem uma Obra, Evento, locação ou serviço é executado. Não significa Empresa proprietária do sistema.

## Centro de Custo

Classificação financeira e gerencial usada para atribuir custos e consumos a uma operação, unidade, obra ou evento.

## Veículo

Ativo móvel utilizado para transporte ou armazenagem temporária. Pode estar associado a um Centro Operacional do tipo estoque móvel.

---

# 4. Pessoas, acesso e responsabilidade

## Pessoa

Indivíduo relacionado à operação, autenticado ou não. Usuário é uma Pessoa com acesso ao sistema.

## Usuário

Pessoa autenticada e autorizada a operar o sistema.

## Perfil

Conjunto reutilizável de permissões associado a uma função operacional.

## Papel Operacional

Função exercida por uma Pessoa em uma operação específica, como Solicitante, Separador ou Conferente. Não é necessariamente um Perfil permanente.

## Permissão

Ação autorizada sobre um recurso, como consultar, criar, editar, aprovar ou inativar.

## RBAC

Modelo de controle de acesso no qual permissões são atribuídas a Perfis e Perfis são atribuídos a Usuários.

## Policy Engine

Conjunto de condições de negócio que complementa o RBAC e decide quando uma ação permitida pode ser executada.

## Delegação

Concessão temporária e auditável de responsabilidade ou autoridade de um Usuário para outro.

## Sessão

Período autenticado de uso do sistema, associado a Usuário, dispositivo, data, hora e contexto de acesso.

## Solicitante

Pessoa que inicia uma solicitação de material, reserva, serviço ou operação.

## Aprovador

Pessoa autorizada a aprovar uma solicitação ou operação.

## Executor

Pessoa que registra ou realiza uma ação operacional.

## Separador

Pessoa que prepara fisicamente os itens para uma saída, transferência ou romaneio.

## Conferente

Pessoa que valida itens, quantidades, estados, evidências e documentos.

## Transportador

Pessoa ou organização responsável pelo deslocamento físico dos itens.

## Recebedor

Pessoa que confirma o recebimento dos itens no destino.

## Responsável Atual

Pessoa principal sob cuja guarda está um Patrimônio, Kit ou conjunto operacional.

## Responsável Auxiliar

Pessoa que compartilha a guarda operacional sem substituir o Responsável Atual principal.

## Responsabilidade Compartilhada

Modelo de guarda com um Responsável Atual principal e um ou mais Responsáveis Auxiliares.

## Autorização

Decisão explícita que permite a execução de uma ação sujeita a controle.

## Confirmação Interna

Validação adicional de identidade ou intenção, por senha, PIN, biometria ou mecanismo equivalente.

---

# 5. Materiais e catálogo

## Item de Catálogo

Representação técnica ou comercial de um produto existente no mercado, independentemente de a Empresa possuir estoque. O vínculo com Material é opcional.

## Material

Cadastro operacional interno de um tipo de item controlado pela Empresa. Não representa uma unidade física individual.

## Consumível

Material controlado por quantidade e consumido total ou parcialmente durante a operação.

## Material Patrimonial

Material cujo controle exige identidade individual para cada unidade física.

## Material Mensurável

Material controlado por medida contínua ou fracionável, como metro, quilograma ou litro.

## Kit

Agrupamento operacional de componentes para reserva, separação, conferência e movimentação conjunta.

## Componente de Kit

Material ou Patrimônio previsto na composição de um Kit.

## Composição de Kit

Relação versionada que define componentes, quantidades, obrigatoriedade e substituições permitidas de um Kit.

## Composição Técnica

Relação física ou funcional pai–filho entre itens. Não significa Kit, Compatibilidade ou Equivalência.

## Patrimônio

Unidade física individual, rastreável e identificada, pertencente a um Material Patrimonial.

## Lote

Conjunto rastreável de unidades de um mesmo Material, associado a origem, fornecedor, fabricação, validade ou nota fiscal.

## Grupo

Nível superior da classificação de materiais.

## Categoria

Classificação intermediária vinculada a um Grupo.

## Subcategoria

Classificação específica e opcional vinculada a uma Categoria.

## Unidade de Medida

Padrão usado para quantificar um Material, como unidade, metro, quilograma ou litro.

## Conversão de Unidade

Relação controlada entre unidades compatíveis, como uma caixa equivalente a determinada quantidade de unidades.

## Atributo

Característica técnica ou operacional configurável de um Material, Patrimônio ou Item de Catálogo.

## Definição de Atributo

Regra que determina nome, tipo, obrigatoriedade e opções válidas de um Atributo.

## Valor de Atributo

Valor concreto atribuído a um Material, Patrimônio ou Item de Catálogo segundo uma Definição de Atributo.

## Fabricante

Organização que fabrica o produto. Não significa Marca ou Fornecedor.

## Marca

Identidade comercial sob a qual um produto é oferecido.

## Modelo

Versão comercial específica de um produto de determinada Marca.

## Fornecedor

Organização que comercializa ou fornece materiais ou serviços para a Empresa.

## Fornecedor Homologado

Fornecedor autorizado pela Empresa para determinado Material, categoria ou tipo de compra.

## Código Interno

Identificador legível, permanente e único de um registro no contexto definido.

## UUID

Identificador técnico universal usado internamente para integrações, APIs e sincronização.

## Código Legado

Identificador anterior preservado para pesquisa e migração, sem substituir o Código Interno oficial.

## Código de Barras

Identificador legível por scanner, associado a Material, embalagem, lote ou unidade conforme regra específica.

## QR Code

Representação visual de identificador interno seguro. Não deve conter diretamente dados sensíveis ou toda a ficha do item.

## Sinônimo

Termo alternativo usado para pesquisa. Não substitui o nome oficial do Material.

## Tag

Marcador reutilizável usado para classificação transversal, busca e relatórios.

## Compatibilidade

Capacidade de dois itens funcionarem em conjunto.

## Equivalência

Condição pela qual um item pode substituir outro total ou parcialmente.

## Obsolescência

Condição em que um produto permanece conhecido, mas está tecnicamente ultrapassado.

## Descontinuação

Condição em que um produto deixou de ser produzido ou comercializado regularmente.

## Vida Útil

Período, quantidade de ciclos ou horas de uso esperados antes de substituição ou revisão.

## Índice de Saúde

Indicador calculado por regras objetivas para representar a condição operacional de um Patrimônio.

---

# 6. Armazenamento e estoque

## Localização

Área física hierárquica dentro de um Centro Operacional.

## Unidade de Armazenamento

Recipiente ou estrutura que contém materiais ou posições, como caixa, pallet, rack, armário, contêiner ou baú.

## Posição Física

Endereço exato no qual um saldo ou Patrimônio está armazenado.

## Endereçamento

Sistema de identificação hierárquica de Localizações, Unidades de Armazenamento e Posições Físicas.

## Saldo

Quantidade derivada do razão de movimentações para uma combinação de Material, Centro Operacional, posição, lote e dimensões operacionais aplicáveis.

## Saldo Disponível

Parcela do Saldo que pode participar de nova operação.

## Saldo Reservado

Parcela do Saldo comprometida por uma Reserva, ainda sem saída física concluída.

## Saldo em Trânsito

Parcela do Saldo deslocada da origem e ainda não confirmada no destino.

## Razão de Movimentações

Conjunto cronológico e imutável de Lançamentos de Movimentação que constitui a fonte de verdade do estoque.

## Snapshot de Saldo

Projeção materializada usada para desempenho, obrigatoriamente reconstruível e conciliável com o Razão de Movimentações.

## Conciliação de Saldo

Processo de comparação entre razão, snapshot, contagem física e demais evidências para detectar divergências.

## Capacidade

Limite físico de peso, volume, quantidade ou tipo aceito por uma posição ou unidade de armazenamento.

## Ocupação

Condição espacial de uma posição ou unidade de armazenamento: livre, parcial, cheia, bloqueada ou reservada.

## Estoque Negativo

Condição em que uma operação produziria quantidade inferior a zero. É proibida na operação normal.

## Estoque em Trânsito

Estado intermediário controlado durante Transferência, indisponível na origem e no destino até confirmação.

## Estoque Móvel

Estoque associado a veículo, contêiner ou unidade móvel representada por Centro Operacional próprio.

## Mapa Lógico

Representação simplificada das áreas, localizações e posições de um Centro Operacional.

## Digital Twin

Representação virtual sincronizada do ambiente operacional. Não substitui o estoque oficial.

---

# 7. Estados e condições

## Estado Físico

Condição material do item: novo, bom, regular, avariado ou inutilizado.

## Situação Operacional

Etapa atual do ciclo operacional, como disponível, reservado, separado, em trânsito, em uso, em conferência, em manutenção, extraviado ou baixado.

## Situação Cadastral

Condição administrativa do cadastro: ativo, inativo, bloqueado ou descontinuado.

## Disponibilidade

Indicação de que um item ou quantidade pode ou não participar de nova operação.

## Bloqueio Operacional

Impedimento temporário de movimentar ou utilizar item, posição, lote ou cadastro, sem apagar o registro.

## Avaria

Dano físico identificado que reduz ou impede o uso normal.

## Extravio

Situação em que a localização ou posse do item não pode ser confirmada.

## Baixado

Situação operacional final após processo formal de Baixa.

## Em Manutenção

Situação operacional em que o item está indisponível por intervenção técnica.

---

# 8. Operações de estoque

## Operação de Negócio

Processo coordenador com identidade própria, participantes, estado e regras, podendo gerar vários Lançamentos de Movimentação.

## Lançamento de Movimentação

Registro imutável de alteração quantitativa, física ou operacional do estoque. Não é sinônimo de Operação de Negócio.

## Movimentação

Termo geral para um Lançamento de Movimentação. Quando houver ambiguidade, deve-se usar o termo completo.

## Entrada

Operação ou lançamento que incorpora quantidade ou Patrimônio a um Centro Operacional.

## Saída

Operação ou lançamento que retira item da disponibilidade de um Centro Operacional para uso, consumo, empréstimo, obra ou evento.

## Retorno

Operação que registra a devolução de item anteriormente retirado.

## Devolução

Ato físico e documental de entregar item de volta. O Retorno é o registro operacional correspondente.

## Transferência

Operação de negócio que coordena lançamentos imutáveis de origem, trânsito e destino entre Centros Operacionais ou posições.

## Reserva

Comprometimento de quantidade ou Patrimônio para uso futuro, sem saída física imediata.

## Separação

Confirmação de que item reservado ou solicitado foi fisicamente preparado para expedição.

## Expedição

Etapa de liberação física dos itens após separação e conferência.

## Recebimento

Etapa de confirmação física e documental de itens que chegam a um destino.

## Conferência

Validação física e documental de itens, quantidades, estados, responsáveis e evidências.

## Inventário

Processo controlado de contagem física e comparação com o estado registrado.

## Contagem

Registro da quantidade ou presença física observada durante Inventário.

## Divergência

Diferença entre estado esperado e estado observado.

## Ajuste

Lançamento autorizado que corrige divergência comprovada sem apagar o histórico anterior.

## Baixa

Operação formal que encerra a vida operacional de Patrimônio ou quantidade, mediante motivo, autorização e auditoria.

## Reversão

Operação excepcional que desfaz efeito lógico permitido por regra, por novos lançamentos compensatórios, sem apagar registros anteriores.

## Cancelamento

Encerramento de operação ainda não concluída, preservando histórico e efeitos já confirmados.

## Romaneio

Processo e documento que reúne materiais destinados a Obra ou Evento, incluindo reserva, separação, carregamento, uso, retorno e divergências.

## Solicitação de Material

Pedido formal de quantidade ou Patrimônio para finalidade definida.

## Empréstimo

Saída temporária com obrigação de Retorno e responsabilidade de guarda.

## Consumo

Saída definitiva de Material Consumível para utilização operacional.

## Correlação

Identificador ou relação que conecta lançamentos pertencentes à mesma Operação de Negócio.

## Idempotência

Propriedade que impede duplicação de efeito quando a mesma solicitação técnica é processada mais de uma vez.

---

# 9. Compras e fornecimento

## Cotação

Processo de coleta e comparação de propostas de fornecedores.

## Proposta de Fornecedor

Oferta comercial apresentada por Fornecedor para itens e condições definidos.

## Compra

Operação autorizada de aquisição de materiais ou serviços.

## Item de Compra

Linha de uma Compra que especifica Material, quantidade, unidade, preço e condições.

## Pedido de Compra

Documento formal enviado ao Fornecedor após aprovação da Compra.

## Nota Fiscal

Documento fiscal relacionado à aquisição, devolução ou movimentação legal de bens.

## Recebimento de Compra

Processo de conferir e incorporar itens adquiridos, vinculando Compra, Nota Fiscal, Lote e evidências.

## Histórico de Preço

Sequência temporal de preços registrados, sem sobrescrever valores anteriores.

## Custo Médio

Indicador calculado segundo política contábil ou gerencial futura. Não deve ser confundido com último preço.

---

# 10. Manutenção e ciclo patrimonial

## Manutenção

Intervenção técnica destinada a conservar, reparar, inspecionar ou recuperar um Patrimônio.

## Ordem de Manutenção

Operação formal que planeja, autoriza e registra uma Manutenção.

## Manutenção Preventiva

Intervenção programada para reduzir probabilidade de falha.

## Manutenção Corretiva

Intervenção realizada após falha ou avaria identificada.

## Inspeção

Verificação técnica ou operacional sem necessidade obrigatória de reparo.

## Falha

Condição em que um item não cumpre função esperada.

## Peça de Reposição

Material utilizado para substituir componente durante Manutenção.

## Histórico de Manutenção

Linha temporal imutável das intervenções realizadas em um Patrimônio.

---

# 11. Arquivos, evidências e auditoria

## Anexo

Arquivo vinculado a registro ou operação, com autoria, data, tipo e origem.

## Fotografia

Imagem usada como identificação visual ou Evidência.

## Evidência

Registro, documento, fotografia ou dado que sustenta decisão, conferência ou operação.

## Evidência Histórica

Evidência preservada no contexto temporal da operação e que não deve ser substituída por arquivo mais recente.

## Auditoria

Registro de autoria, data, contexto, valores anteriores e posteriores, justificativa e evidências.

## Log Técnico

Registro operacional de eventos do software. Não substitui Auditoria de negócio.

## Trilha de Auditoria

Sequência ordenada de registros que permite reconstruir ações e alterações.

## Versionamento

Preservação de versões sucessivas de cadastro, composição ou documento normativo.

## Baseline

Versão aprovada e congelada de documento normativo. Mudanças exigem nova revisão.

## Revisão

Nova versão proposta de documento ou regra, sujeita a análise e aprovação.

## Justificativa

Motivo formal registrado para ação excepcional, ajuste, bloqueio ou alteração relevante.

---

# 12. Inteligência artificial e automação

## IA Assistiva

Camada que sugere, interpreta, consulta e resume sem autonomia para executar operação crítica.

## Sugestão de IA

Resultado não vinculante produzido por modelo de IA e sujeito a confirmação humana.

## Confiança Estimada

Indicador técnico da segurança estimada de uma sugestão. Não substitui validação humana.

## Modelo Local

Modelo de IA executado na infraestrutura da Empresa, sem depender obrigatoriamente de serviço externo.

## Modelo Externo

Modelo de IA acessado por API ou serviço de terceiros.

## Roteamento de IA

Decisão sobre qual modelo ou mecanismo deve atender uma solicitação.

## Ação Assistida por IA

Ação confirmada por Usuário após receber sugestão de IA, registrada em nome do Usuário e marcada como assistida.

## Ferramenta de IA

Função controlada disponibilizada ao modelo para consulta ou proposta de ação.

## Simulação

Cenário isolado que não altera dados reais.

## Recomendação

Sugestão baseada em regras, dados ou IA, sem efeito operacional automático.

## Aprovação Humana

Confirmação explícita de Usuário autorizado antes de ação crítica.

---

# 13. Termos proibidos ou ambíguos

## Item

Termo genérico permitido apenas em linguagem informal ou quando o tipo específico já estiver claro. Em regra normativa, preferir Material, Patrimônio, Item de Catálogo, Item de Compra ou Componente.

## Produto

Termo comercial genérico. Em modelagem, usar Item de Catálogo ou Material conforme o contexto.

## Estoque

Pode significar domínio, conjunto de saldos ou local operacional. O texto deve especificar Saldo, Centro Operacional ou Estoque em Trânsito quando necessário.

## Estado

Não deve ser usado isoladamente quando houver risco de confusão. Especificar Estado Físico, Situação Operacional, Situação Cadastral ou Ocupação.

## Responsável

Deve ser qualificado como Responsável Atual, Aprovador, Executor, Transportador ou outro Papel Operacional.

## Exclusão

Para registros históricos, o termo correto é Inativação, Cancelamento ou Baixa. Exclusão física só se aplica a registro sem vínculos e conforme regra expressa.

## Devolução e Retorno

Devolução é o ato físico; Retorno é a operação registrada no sistema.

## Transferência e Movimentação

Transferência é Operação de Negócio; Movimentações são lançamentos correlacionados produzidos por ela.

---

# 14. Critérios de aceite da RN-00

A RN-00 será considerada pronta para baseline quando:

1. todos os termos usados nas baselines atuais estiverem definidos;
2. termos próximos possuírem distinção explícita;
3. não houver conflito com RN-01 e RN-02.1 a RN-02.4;
4. Transferência, Movimentação e Lançamento estiverem semanticamente separados;
5. Estado Físico, Situação Operacional, Situação Cadastral, Disponibilidade e Ocupação estiverem separados;
6. Material, Patrimônio e Item de Catálogo estiverem separados;
7. Usuário, Perfil, Papel Operacional e Responsabilidade estiverem separados;
8. regras de inclusão e alteração de termos estiverem definidas;
9. o documento passar por revisão crítica independente;
10. a aprovação e o merge forem registrados no GitHub e Linear.

## Status proposto

```text
DOCUMENTO=RN-00
VERSAO=REV1
ESTADO=EM_REVISAO
BASELINE=NO
TERMOS_OFICIAIS=APROXIMADAMENTE_140
NEXT_ACTION=REVISAO_CRITICA_INDEPENDENTE
```
