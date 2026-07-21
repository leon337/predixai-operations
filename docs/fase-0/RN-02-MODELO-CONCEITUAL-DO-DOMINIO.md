# RN-02 — Modelo Conceitual do Domínio

## Metadados

- Estado: PARCIALMENTE APROVADO
- Blocos aprovados: RN-02.1 a RN-02.4
- Próximo bloco: RN-02.5 — Movimentações
- Natureza deste arquivo: índice e resumo executivo

## Documentos normativos integrais

- [RN-02.1 REV1 — Núcleo Organizacional](regras-negocio/RN-02.1-REV1-COMPLETA.md)
- [RN-02.2 REV1 — Usuários, Perfis, Permissões e Responsabilidades](regras-negocio/RN-02.2-REV1-COMPLETA.md)
- [RN-02.3 REV2 — Materiais, Catálogo, Atributos e Patrimônios](regras-negocio/RN-02.3-REV2-COMPLETA.md)
- [RN-02.4 REV3 — Estoques, Saldos, Localizações e Disponibilidade](regras-negocio/RN-02.4-REV3-COMPLETA.md)

## Blocos planejados

1. RN-02.1 — Núcleo Organizacional — aprovada
2. RN-02.2 — Usuários e Permissões — aprovada
3. RN-02.3 — Materiais e Patrimônios — aprovada
4. RN-02.4 — Estoques e Localizações — aprovada
5. RN-02.5 — Movimentações — bloqueada até consolidação do RN-00/PDD
6. RN-02.6 — Obras, Eventos e Romaneios
7. RN-02.7 — Compras e Fornecedores
8. RN-02.8 — Manutenção e Patrimônio
9. RN-02.9 — Arquivos, Auditoria e Alertas
10. RN-02.10 — Integridade Global

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

Obra e Evento não são tipos de Unidade. Todo saldo pertence a um Centro Operacional. Centro Operacional não pode ser encerrado com saldo.

## RN-02.2 — Acesso e responsabilidades

O sistema combina RBAC com Policy Engine. Executor, Aprovador, Separador, Conferente, Transportador, Recebedor e Responsável Atual são papéis distintos e auditáveis. IA não é Usuário nem autora legal da ação.

## RN-02.3 — Materiais e catálogo

Modelo corrigido:

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

## RN-02.4 — Estoque e posições

```text
EMPRESA
→ CENTRO OPERACIONAL
→ LOCALIZAÇÃO
→ UNIDADE DE ARMAZENAMENTO
→ POSIÇÃO FÍSICA
→ SALDO OU PATRIMÔNIO
```

Estado Físico, Situação Operacional e Disponibilidade são dimensões independentes. O razão imutável de Movimentações é a fonte de verdade; snapshot de saldo pode existir apenas como projeção reconstruível e conciliável.

## Transferência: definição provisória obrigatória

Transferência é uma **operação de negócio coordenadora**, não um lançamento único. Ela correlaciona lançamentos imutáveis de origem, trânsito e destino:

```text
TRANSFERÊNCIA TRF-XXXX
├── baixa/saída confirmada da origem
├── entrada no estado em trânsito
├── saída do trânsito
└── entrada confirmada no destino
```

A modelagem detalhada, idempotência, falhas parciais e reversões formais serão consolidadas na RN-02.5.

## Integridade consolidada

1. registros com histórico não são apagados;
2. identificadores não são reutilizados;
3. todo saldo possui Empresa e Centro Operacional;
4. Patrimônio possui uma única posição operacional válida por vez;
5. estoque negativo é proibido;
6. snapshot de saldo deve ser reconstruível pelo razão;
7. IA não substitui aprovação humana;
8. alteração futura de bloco aprovado exige nova revisão.

## Autoridade normativa

Os documentos completos em `docs/fase-0/regras-negocio/` prevalecem sobre este resumo.
