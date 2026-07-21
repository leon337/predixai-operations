# PredixAI Operations — Tronco Multichat

## Propósito

Preservar a continuidade conceitual entre chats sem depender da memória temporária da conversa.

## Linha do tempo consolidada

### Origem da ideia

Criar um aplicativo de almoxarifado para a operação da Potiguar, inicialmente executado localmente em notebook Linux, acessível por celulares na rede e preparado para evoluir para uma plataforma comercial da PredixAI.

### Direção de produto

O projeto deixou de ser apenas um controle de estoque e passou a ser concebido como uma plataforma de inteligência operacional com módulos futuros de:

- almoxarifado;
- ferramentaria;
- compras;
- patrimônio;
- manutenção;
- frota;
- obras e eventos;
- romaneios;
- inteligência operacional.

### Estratégia de IA

Foi definida uma arquitetura híbrida:

- sistema e banco locais;
- IA local pequena para consultas simples;
- API externa apenas como reforço ou contingência;
- funcionamento integral sem IA;
- proibição de acesso irrestrito da IA ao banco;
- confirmação humana para operações críticas.

### Estratégia de produto

A construção deve começar pelo módulo real de Almoxarifado. Componentes reutilizáveis serão extraídos depois para formar o PredixAI Operations Core. Isso evita construir um framework abstrato antes de validar os processos reais.

### Regras aprovadas

- RN-01 REV2.1: governança completa do cadastro e classificação de materiais.
- RN-02.1 REV1: empresa, unidade, setor, obra e centro operacional.
- RN-02.2 REV1: RBAC, Policy Engine, responsabilidade, delegação e cadeia operacional.
- RN-02.3 REV2: catálogo técnico, material interno, patrimônio, lote, kit, atributos, fabricante, marca, modelo, compatibilidade e equivalência.
- RN-02.4 REV3: saldos multicamada, localizações, unidades de armazenamento, posições físicas, capacidades, mapas e preparação para Digital Twin.
- RN-00/PDD: governança semântica aprovada para construção.

## Estado atual

A Fase 0 permanece em andamento. A documentação consolidada está sendo versionada no GitHub e controlada no Linear. Não há autorização de implementação.

## Próximas etapas

1. Construir o RN-00/PDD.
2. Modelar RN-02.5 — Movimentações.
3. Continuar RN-02.6 a RN-02.10.
4. Fechar fluxos operacionais.
5. Definir fluxo de telas, navegação e identidade visual.
6. Encerrar formalmente a Fase 0.
7. Iniciar a especificação funcional e somente depois a implementação.

## Regra de continuidade

Toda nova sessão deve começar pelo `PROJECT_STATE.md`, usar este tronco apenas como contexto histórico e nunca substituir baselines aprovadas por resumos de chat.
