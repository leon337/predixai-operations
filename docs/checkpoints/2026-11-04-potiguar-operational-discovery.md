# Checkpoint de continuidade — descoberta operacional Potiguar (2026-11-04)

> **Natureza:** registro de contexto de conversa e hipóteses para retomada; **não é** baseline normativa, nova fase, aprovação empresarial, autorização de implementação, validação de produção ou decisão de roadmap.
> **Repositório:** `leon337/predixai-operations`
> **Fonte técnica:** `main` consultada em 2026-11-04; baseline do branch deste checkpoint: `e767e8464fee902c0f5410ccc927c19a5b7cae58`.
> **MCF:** MESTRE coordena; LEANDRO é autoridade humana final. Este registro não simula parecer de outros agentes nem substitui revisão.

## 1. Contexto capturado na conversa

- A Potiguar atua com decoração e ornamentação natalina, incluindo projetos no Recife e no Rio Grande do Norte.
- O relato descreve uma operação com controles administrativos ainda realizados em grande parte por papel e conversas; isto é **relato histórico**, não uma auditoria atual do processo.
- O controle de almoxarifado era **parcial** e havia uma pessoa responsável. **Não foi estabelecido** como ela controlava recebimentos, saídas, destino, devoluções, divergências e inventário. Não concluir desorganização, perda, fraude ou desempenho inadequado da pessoa sem evidência.
- Há intenção de explorar apoio à organização de equipes, compras e parte das decisões operacionais. A divisão formal de autoridade e as condições de trabalho ainda serão confirmadas com a empresa.
- O objetivo desta descoberta é verificar uma oportunidade legítima de melhoria operacional antes de sugerir qualquer piloto ou parceria. **Não existe, neste registro, autorização da Potiguar para coleta de dados, uso de recursos, implantação ou proposta comercial.**

## 2. Estado técnico preservado (evidência documental e GitHub)

- `README.md` e `PROJECT_STATE.md` descrevem o **MVP-01 — Almoxarifado Inteligente** já materializado: autenticação, papéis `owner/operator/viewer`, cadastro de materiais, entradas/saídas, saldo, bloqueio de saída acima do saldo, mínimo/alertas, histórico auditável, políticas RLS, interface web responsiva.
- Testes históricos documentados: estoque **6/6 PASS**, autorização **6/6 PASS**, UAT desktop/mobile **PASS**. Não confundir com teste recente nesta missão.
- A Fase 0 foi encerrada; a Fase 1 residual/INFRA-04 segue com restrições. O PR [#41](https://github.com/leon337/predixai-operations/pull/41) de reconciliação do estado R6-B estava **aberto, sem merge** na consulta de 2026-11-04; não assumir R6-B integrado na `main`.
- A documentação da `main` registrava `potiguarbd` como inativo em 2026-08-17 e produção não comprovada. **Isso é evidência histórica, não verificação atual do provedor.**
- **IA operacional, obras/eventos/romaneios completos e produção comprovada não devem ser alegados como concluídos.**

## 3. Hipótese de produto, não decisão de implantação

O almoxarifado é um **candidato inicial** para diagnóstico, pois pode conectar recebimento, movimentação de materiais, obra/destino, responsável e devolução. Ainda **não foi comprovado** que este é o maior gargalo ou que o MVP atual atende a essa rastreabilidade ponta a ponta.

Risco central: começar a programar antes de mapear o fluxo real e o acesso autorizado da empresa. Se houver oportunidade comercial, separar relação de trabalho, direitos de propriedade intelectual, uso de dados, suporte, preço e responsabilidades por instrumentos formais apropriados.

## 4. Próximo passo de descoberta — sem dados reais por enquanto

1. Mapear um fluxo real **sem identificadores pessoais ou informação sensível**: requisição de material → aprovação → saída → transporte → entrega na obra → consumo/devolução → conferência.
2. Identificar o que já é registrado, por quem, em qual suporte e como se conferem saldos, custos, perdas e compras emergenciais.
3. Verificar a autoridade para mudanças e obter aprovação empresarial **antes** de qualquer acesso a dados, piloto, integração ou operação em campo.
4. Confrontar esse fluxo com o escopo efetivo do MVP-01; registrar lacunas sem presumir implementação de romaneio/obra/transferência.
5. Definir somente depois critérios objetivos de valor (tempo administrativo, divergências documentadas, rastreabilidade, custo) e decidir se existe oportunidade de piloto.

**Pergunta em aberto na retomada:** como a pessoa responsável controlava, na prática, materiais recebidos, retirados, enviados às obras e devolvidos?

## 5. Relação com o Controle de Ponto Potiguar

O produto de biometria/jornada é uma alternativa **separada** e não deve ser colocado em produção como consequência desta conversa. Ver [`leon337/reconhecimento_facial`](https://github.com/leon337/reconhecimento_facial) e seu [PR #32](https://github.com/leon337/reconhecimento_facial/pull/32). Nenhuma integração entre produtos foi autorizada.

## 6. Limites e handoff

```text
CHECKPOINT_ONLY=YES
SOURCE=CONVERSATION_AND_REPOSITORY_EVIDENCE
CURRENT_BUSINESS_PROCESS_AUDITED=NO
POTIGUAR_APPROVAL_FOR_PILOT=NOT_CONFIRMED
MVP01_PRODUCTION_CONFIRMED=NO
NEW_IMPLEMENTATION=NO
CODE_CHANGE=NO
SQL_OR_MIGRATION=NO
REMOTE_PROVIDER_CHANGE=NO
DEPLOY=NO
MERGE_AUTHORIZED=NO
NEXT_ACTION=MAP_CURRENT_WAREHOUSE_WORKFLOW_WITH_COMPANY_AUTHORIZATION
```

Este arquivo foi proposto em PR de documentação, sem alterar `PROJECT_STATE.md`, `ROADMAP-MESTRE-EXECUTAVEL.md`, baselines ou estado de fases. Qualquer evolução de fase exige reconciliação de estado, gates e revisão específicos conforme as instruções do projeto.
