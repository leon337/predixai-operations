# RN-00 REV1 — Errata normativa LEA-57-F01 a F04

## Metadados

- Documento principal: `RN-00-PREDIXAI-DOMAIN-DICTIONARY.md`
- Versão: REV1
- Estado: EM REVISÃO
- Tarefa: LEA-57
- Natureza: complemento normativo integrante da RN-00 REV1
- Precedência: em caso de conflito, esta errata prevalece sobre a redação anterior da RN-00 REV1
- Alteração futura após baseline: somente por nova revisão

## Objetivo

Eliminar as ambiguidades identificadas na revisão crítica do PR #3 e estabelecer definições suficientes para a modelagem da RN-02.5.

---

## LEA-57-F01 — Entrada e Saída

### Operação de Entrada

Operação de Negócio com identidade própria que coordena a incorporação de Material, quantidade, Lote ou Patrimônio a um Centro Operacional. Pode originar um ou mais Lançamentos de Entrada, conferências, evidências e vínculos com Compra, Retorno, Ajuste ou origem externa.

### Lançamento de Entrada

Lançamento de Movimentação imutável que aumenta uma posição quantitativa ou estabelece a posição válida de um Patrimônio em determinado Centro Operacional, Localização ou Posição Física.

### Operação de Saída

Operação de Negócio com identidade própria que coordena a retirada física ou o comprometimento definitivo de Material, quantidade, Lote ou Patrimônio para uso, consumo, empréstimo, Obra, Evento ou outra finalidade autorizada.

### Lançamento de Saída

Lançamento de Movimentação imutável que reduz uma posição quantitativa ou remove a posição válida de um Patrimônio na origem.

### Regra de uso

Os termos `Entrada` e `Saída`, quando usados isoladamente em interface, podem representar a Operação de Negócio. Em regras, APIs, eventos, banco e testes, deve-se usar `Operação de Entrada`, `Lançamento de Entrada`, `Operação de Saída` ou `Lançamento de Saída` conforme o significado exato.

---

## LEA-57-F02 — Baixas distintas

### Baixa Patrimonial

Operação de Negócio formal que encerra a vida operacional de um Patrimônio individual por inutilização, perda definitiva, alienação, descarte autorizado ou outro motivo previsto. Preserva identidade, histórico, evidências, responsável, motivo e aprovação. Após concluída, o Patrimônio assume Situação Operacional `Baixado` e não participa de operações normais.

### Baixa de Quantidade

Operação de Negócio formal que retira quantidade de um Material, Lote ou posição de Saldo por perda, vencimento, deterioração, consumo não recuperável, descarte ou outro motivo autorizado. Produz Lançamento de Saída ou lançamento específico de baixa, preservando razão, motivo, evidências e aprovação.

### Regra de uso

`Baixa Patrimonial` aplica-se a Patrimônio individual. `Baixa de Quantidade` aplica-se a Material controlado por quantidade, medida ou Lote. A baixa de quantidade não atribui automaticamente Situação Operacional `Baixado` ao Material cadastral nem ao Saldo agregado.

---

## LEA-57-F03 — Inativação e Exclusão Física

### Inativação

Alteração de Situação Cadastral que impede novas operações normais sobre um cadastro, preservando o registro, seus identificadores, relacionamentos e histórico. Pode exigir justificativa, autorização e auditoria.

### Reativação

Alteração controlada que devolve um cadastro inativo à Situação Cadastral ativa, mediante permissão, justificativa e validações aplicáveis.

### Exclusão Física

Remoção permanente de registro no armazenamento de dados. Somente é permitida quando o registro não possui vínculos históricos, lançamentos, evidências, identificadores reutilizáveis ou exigência de retenção, e quando regra expressa autorizar. Não é mecanismo de correção de histórico.

### Regra de uso

Para registros com histórico, usar Inativação, Cancelamento, Reversão ou Baixa conforme o caso. O sistema nunca deve apresentar Exclusão Física como ação operacional comum.

---

## LEA-57-F04 — Estados operacionais individuais

### Disponível

Situação Operacional de Patrimônio ou parcela de Saldo apta a participar de nova operação, desde que não exista Bloqueio Operacional, Reserva incompatível ou restrição de Policy Engine.

Aplicabilidade mínima: Patrimônio e Saldo.

### Reservado

Situação Operacional ou classificação de parcela de Saldo comprometida por Reserva ativa, ainda sem saída física concluída.

Aplicabilidade mínima: Patrimônio, Saldo e Lote quando a reserva preservar rastreabilidade de lote.

### Separado

Situação Operacional de item ou quantidade fisicamente preparado para Expedição, ainda sob controle da origem e sem Saída concluída.

Aplicabilidade mínima: Patrimônio, parcela de Saldo, Lote e item de Operação.

### Em Trânsito

Situação Operacional de item ou quantidade cuja Saída da origem foi confirmada e cujo Recebimento no destino ainda não foi confirmado.

Aplicabilidade mínima: Patrimônio, parcela de Saldo, Lote e Operação de Transferência.

### Em Uso

Situação Operacional de Patrimônio ou conjunto sob utilização fora da posição normal de armazenamento, vinculado a responsável, Obra, Evento, empréstimo ou finalidade operacional.

Aplicabilidade mínima: Patrimônio e Kit rastreável. Para consumíveis, o efeito normal é Consumo, não `Em Uso`.

### Em Conferência

Situação Operacional temporária durante validação física, documental ou quantitativa que pode bloquear novas operações incompatíveis.

Aplicabilidade mínima: Patrimônio, Lote, parcela de Saldo, Recebimento, Retorno, Inventário e Transferência.

### Em Manutenção

Situação Operacional de Patrimônio indisponível para uso normal por inspeção, diagnóstico ou intervenção técnica.

Aplicabilidade mínima: Patrimônio. Não se aplica como estado cadastral de Material nem como estado geral de Saldo consumível.

### Extraviado

Situação Operacional excepcional de Patrimônio cuja localização ou posse não pode ser confirmada após verificação inicial. Exige ocorrência, responsável, evidências, bloqueio e processo de apuração.

Aplicabilidade mínima: Patrimônio. Quantidades divergentes são tratadas como Divergência de Inventário até ajuste ou baixa autorizada.

### Baixado

Situação Operacional terminal de Patrimônio após conclusão de Baixa Patrimonial. Preserva consulta e histórico e impede operações normais posteriores.

Aplicabilidade mínima: Patrimônio. Para quantidade utiliza-se Baixa de Quantidade e lançamentos correspondentes, sem transformar o Saldo agregado em `Baixado`.

---

## Matriz mínima de aplicabilidade

| Situação | Patrimônio | Saldo/parcela | Lote | Operação |
|---|---:|---:|---:|---:|
| Disponível | Sim | Sim | Indireta | Não |
| Reservado | Sim | Sim | Quando rastreado | Reserva |
| Separado | Sim | Sim | Quando rastreado | Separação |
| Em Trânsito | Sim | Sim | Quando rastreado | Transferência |
| Em Uso | Sim | Não para consumível | Não | Saída/Empréstimo |
| Em Conferência | Sim | Sim | Sim | Sim |
| Em Manutenção | Sim | Não | Não | Ordem de Manutenção |
| Extraviado | Sim | Não | Não | Apuração |
| Baixado | Sim | Não | Não | Baixa Patrimonial |

## Critérios de aceite desta errata

1. Operação e Lançamento de Entrada estão separados.
2. Operação e Lançamento de Saída estão separados.
3. Baixa Patrimonial e Baixa de Quantidade estão separadas.
4. Inativação, Reativação e Exclusão Física possuem definições oficiais.
5. Cada Situação Operacional possui definição e aplicabilidade mínima.
6. Nenhuma definição autoriza implementação, SQL ou merge sem os gates do projeto.
