# RN-02 — Modelo Conceitual do Domínio

## Objetivo

Definir as entidades, relacionamentos, cardinalidades e regras de integridade do PredixAI Operations sem acoplar a documentação ao PostgreSQL ou a qualquer tecnologia específica.

## Blocos planejados

- RN-02.1 — Núcleo Organizacional — aprovada
- RN-02.2 — Usuários e Permissões — aprovada
- RN-02.3 — Materiais e Patrimônios — aprovada
- RN-02.4 — Estoques e Localizações — aprovada
- RN-02.5 — Movimentações — próxima
- RN-02.6 — Obras, Eventos e Romaneios
- RN-02.7 — Compras e Fornecedores
- RN-02.8 — Manutenção e Patrimônio
- RN-02.9 — Arquivos, Auditoria e Alertas
- RN-02.10 — Integridade Global

---

# RN-02.1 REV1 — Núcleo Organizacional

## Entidades

- Empresa
- Unidade
- Setor
- Obra
- Evento
- Centro Operacional

## Estrutura

```text
EMPRESA
├── UNIDADE
│   └── SETOR
├── OBRA
├── EVENTO
└── CENTRO OPERACIONAL
```

## Regras principais

- O sistema possui ao menos uma Empresa ativa.
- Toda Unidade pertence exatamente a uma Empresa.
- Todo Setor pertence exatamente a uma Unidade.
- Toda Obra e todo Evento pertencem exatamente a uma Empresa.
- Obra e Evento não são tipos de Unidade.
- Todo Centro Operacional pertence exatamente a uma Empresa.
- Centro Operacional pode estar associado a Unidade, Obra, Evento ou Veículo.
- Não pode estar associado simultaneamente a Obra e Evento.
- Todo saldo físico pertence a um Centro Operacional.
- Centro Operacional não pode ser encerrado com saldo diferente de zero.
- Estruturas inativas não recebem novas operações normais.
- Reabertura exige autorização, justificativa e auditoria.

## Tipos aprovados

### Unidade

- matriz;
- filial;
- galpão;
- base operacional;
- escritório.

### Centro Operacional

- almoxarifado;
- depósito;
- área externa;
- estoque de obra;
- estoque de evento;
- estoque móvel.

---

# RN-02.2 REV1 — Usuários, Perfis, Permissões e Responsabilidades

## Entidades e conceitos

- Usuário
- Perfil
- Permissão
- Política de autorização
- Delegação
- Responsabilidade
- Sessão
- Confirmação interna

## Modelo de acesso

O sistema usa RBAC combinado com Policy Engine:

- RBAC define quais ações o Perfil pode realizar.
- Policy Engine define em quais condições a ação pode ser executada.

## Estados do usuário

- ativo;
- afastado;
- férias;
- bloqueado;
- desligado.

Usuários desligados permanecem no histórico e não perdem vínculos com movimentações anteriores.

## Perfis iniciais

- Administrador
- Diretor
- Gestor
- Almoxarife
- Conferente
- Comprador
- Manutenção
- Motorista
- Solicitante
- Auditor
- Consulta

## Cadeia de responsabilidade

```text
Solicitante
→ Aprovador
→ Separador
→ Conferente
→ Transportador
→ Recebedor
→ Responsável Atual
```

A mesma pessoa pode exercer mais de uma função quando permitido, mas cada papel deve ser registrado separadamente.

## Regras principais

- Quem executa e quem autoriza são informações distintas.
- Delegações são temporárias, auditáveis e possuem período de validade.
- Operações críticas podem exigir senha, PIN ou outro fator de confirmação.
- Patrimônio pode possuir Responsável Atual.
- Responsabilidade compartilhada admite um responsável principal e auxiliares.
- A IA não é Usuário nem responsável legal pela ação.
- Ações assistidas por IA são registradas em nome do usuário que confirmou, com indicação da assistência.

---

# RN-02.3 REV2 — Materiais, Catálogo, Atributos e Patrimônios

## Estrutura conceitual

```text
GRUPO
└── CATEGORIA
    └── SUBCATEGORIA
        └── ITEM DE CATÁLOGO
            └── MATERIAL DA EMPRESA
                ├── PATRIMÔNIO
                ├── LOTE
                ├── ATRIBUTOS
                ├── TAGS
                ├── SINÔNIMOS
                └── FORNECEDORES
```

## Separações essenciais

- Item de Catálogo guarda dados técnicos e comerciais gerais.
- Material guarda dados operacionais internos da Empresa.
- Patrimônio representa unidade física individual.
- Fabricante, Marca e Fornecedor são entidades distintas.
- Compatibilidade significa funcionar em conjunto.
- Equivalência significa poder substituir.
- Kit é agrupamento operacional.
- Composição Técnica é relação física ou funcional pai–filho.

## Regras principais

- Um Item de Catálogo pode existir sem estoque.
- Vínculo Material–Catálogo é opcional no MVP.
- Um Material possui exatamente um tipo principal de controle.
- Patrimônio pertence exatamente a um Material patrimonial.
- Número de série é único na Empresa quando informado.
- Estado físico e situação operacional são independentes.
- Lotes permanecem identificados nas movimentações.
- Compatibilidades e equivalências exigem confirmação técnica.
- A IA pode sugerir, mas não homologar.
- Ciclos em composições pai–filho são proibidos.
- Alterações estruturais criam novas versões.
- Movimentações históricas continuam vinculadas ao estado válido na época.

## Escopo

### MVP

- material;
- classificação;
- unidade;
- patrimônio;
- lote;
- atributos;
- kit;
- fornecedor;
- fotos;
- sinônimos;
- tags.

### Pós-MVP

- catálogo global;
- importação de fabricantes;
- compatibilidades avançadas;
- equivalências avançadas;
- compartilhamento entre empresas.

---

# RN-02.4 REV3 — Estoques, Saldos e Localizações

## Estrutura

```text
EMPRESA
→ CENTRO OPERACIONAL
→ LOCALIZAÇÃO
→ UNIDADE DE ARMAZENAMENTO
→ POSIÇÃO FÍSICA
→ SALDO OU PATRIMÔNIO
```

## Composição do saldo

O saldo pertence à combinação de:

- Material;
- Centro Operacional;
- Localização ou Posição Física;
- Lote, quando aplicável;
- Estado;
- Disponibilidade.

O mesmo Material pode possuir saldos simultâneos em diferentes posições, lotes, estados ou disponibilidades.

## Situações operacionais de estoque

- disponível;
- reservado;
- separado;
- em conferência;
- em transferência;
- em manutenção;
- bloqueado;
- extraviado;
- avariado;
- baixado.

## Regras principais

- Estoque negativo é proibido.
- Reserva não representa saída física.
- Separação confirma preparação física, ainda sem saída.
- Transferência cria origem, trânsito e destino correlacionados.
- Estoque em trânsito não está disponível na origem nem no destino.
- Inventário gera contagem, divergência, conferência e eventual Ajuste.
- Ajuste exige motivo, responsável, autorização e auditoria.
- Patrimônio não pode estar em duas posições ou saídas ativas simultaneamente.
- Localização inativa não recebe materiais.
- Unidade de Armazenamento móvel carrega suas posições internas.
- Posições podem possuir capacidade de peso, volume, quantidade ou tipo.
- Capacidade será informativa no MVP e poderá ser bloqueante depois.
- Posições e localizações podem possuir QR Code próprio.

## Mapa e Digital Twin

O mapa lógico é opcional e pode relacionar coordenadas às posições. O Digital Twin será uma evolução futura, isolada do estoque oficial. Simulações não alteram dados reais. A IA pode sugerir reorganização, mas não movimentar materiais.

## Tecnologias futuras previstas

- código de barras;
- RFID;
- NFC;
- BLE;
- mapa de calor;
- simulação logística.

---

# Integridade consolidada

1. Registros com histórico não são apagados.
2. Identificadores não são reutilizados.
3. Todo saldo possui Empresa e Centro Operacional.
4. Todo patrimônio possui exatamente uma posição operacional válida por vez.
5. Operações críticas são auditadas.
6. IA não substitui aprovação humana.
7. Alterações futuras em blocos aprovados exigem nova revisão.
