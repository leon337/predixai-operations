# RN-02 — Modelo Conceitual do Domínio

## Metadados

- Estado: **BASELINES RN-02.1 A RN-02.7 APROVADAS**
- Fase: Fase 0 — Concepção e Modelagem do Domínio
- Natureza deste arquivo: índice e resumo executivo
- Autoridade: os documentos normativos integrais em `docs/fase-0/regras-negocio/` prevalecem sobre este índice.

## Baselines normativas integrais

1. [RN-02.1 REV1 — Núcleo Organizacional](regras-negocio/RN-02.1-REV1-COMPLETA.md)
2. [RN-02.2 REV1 — Usuários, Perfis, Permissões e Responsabilidades](regras-negocio/RN-02.2-REV1-COMPLETA.md)
3. [RN-02.3 REV2 — Materiais, Catálogo, Atributos e Patrimônios](regras-negocio/RN-02.3-REV2-COMPLETA.md)
4. [RN-02.4 REV3 — Estoques, Saldos, Localizações e Disponibilidade](regras-negocio/RN-02.4-REV3-COMPLETA.md)
5. [RN-02.5 REV1 — Movimentações e Integridade do Estoque](regras-negocio/RN-02.5-REV1-COMPLETA.md)
   - [Errata LEA-58 F01–F05](regras-negocio/RN-02.5-REV1-ERRATA-LEA-58-F01-F05.md)
6. [RN-02.6 REV1 — Obras, Eventos e Romaneios](regras-negocio/RN-02.6-REV1-COMPLETA.md)
   - [Errata LEA-64 F01–F05](regras-negocio/RN-02.6-REV1-ERRATA-LEA-64-F01-F05.md)
7. [RN-02.7 REV1 — Manutenção e Ciclo de Vida Patrimonial](regras-negocio/RN-02.7-REV1-COMPLETA.md)

A numeração histórica que atribuía RN-02.7 a Compras/Fornecedores e RN-02.8 a Manutenção está **supersedida**. Não deve ser reutilizada.

Domínios futuros ainda não congelados não recebem numeração definitiva por este índice.

## RN-02.1 — Estrutura organizacional

```text
EMPRESA
├── UNIDADE
│   └── SETOR
├── OBRA
├── EVENTO
└── CENTRO OPERACIONAL
    └── LOCALIZAÇÕES E SALDOS
```

Obra e Evento não são tipos de Unidade. Todo saldo pertence a um Centro Operacional. Centro Operacional não pode ser encerrado com saldo incompatível com o processo definido.

## RN-02.2 — Acesso e responsabilidades

O sistema combina papéis e políticas de autorização. Executor, Aprovador, Separador, Conferente, Transportador, Recebedor e Responsável Atual são responsabilidades distintas e auditáveis. IA não é Usuário nem autora legal da ação.

## RN-02.3 — Materiais e patrimônios

```text
GRUPO 1:N CATEGORIA 1:N SUBCATEGORIA
                        │
                        └── MATERIAL
                              ├── vínculo opcional → ITEM DE CATÁLOGO
                              ├── PATRIMÔNIO
                              ├── LOTE
                              ├── ATRIBUTOS
                              ├── TAGS
                              ├── SINÔNIMOS
                              └── FORNECEDORES
```

Material pode existir sem Item de Catálogo. Fabricante, Marca, Modelo e Fornecedor são distintos. Compatibilidade e Equivalência exigem homologação humana.

## RN-02.4 — Estoques e posições

```text
EMPRESA
→ CENTRO OPERACIONAL
→ LOCALIZAÇÃO
→ UNIDADE DE ARMAZENAMENTO
→ POSIÇÃO FÍSICA
→ SALDO OU PATRIMÔNIO
```

Estado Físico, Situação Operacional e Disponibilidade são dimensões independentes.

## RN-02.5 — Movimentações e integridade

O razão de movimentações é a fonte de verdade do estoque. Movimentos confirmados não são reescritos; correções usam reversão ou operação compensatória auditável. Transferência é uma operação coordenadora com origem, trânsito e destino, sujeita às regras completas e à errata vigente.

## RN-02.6 — Obras, Eventos e Romaneios

Obra/Evento e Romaneio possuem autoridade própria de processo e documentação. Romaneio não substitui movimentação de estoque. Estados de documento, versão, item e logística são distintos, com vínculos granulares e reconciliação por item/patrimônio.

## RN-02.7 — Manutenção e Ciclo de Vida Patrimonial

A RN-02.7 define manutenção preventiva/corretiva/preditiva, ordens e execução, custos/garantias, falhas e causa, indisponibilidade/restrições, retorno ao uso e decisões de ciclo de vida, integrando-se às autoridades de identidade patrimonial, estoque/custódia e Obras/Eventos/Romaneios.

A conclusão normativa da RN-02.7 **não significa implementação funcional do módulo de manutenção**.

## Integridade consolidada

1. registros com histórico não são apagados;
2. identificadores não são reutilizados;
3. estoque negativo é proibido;
4. mudanças de saldo/custódia respeitam operações auditáveis;
5. Patrimônio possui uma única realidade operacional válida por vez, conforme as autoridades normativas aplicáveis;
6. estados físicos, operacionais e disponibilidade não devem ser misturados;
7. IA não substitui aprovação humana em operação crítica;
8. alterações futuras de baseline exigem nova revisão;
9. documentos integrais e suas erratas prevalecem sobre este resumo.

## Situação da Fase 0

As baselines RN-02.1 a RN-02.7 estão concluídas. O encerramento formal da Fase 0 é controlado pelo GOV-03 e pelo documento `docs/governanca/CHECKLIST-ENCERRAMENTO-FASE-0-2026-08-17.md`.

Nenhuma nova implementação, SQL, migration ou deploy é autorizado por este índice.
