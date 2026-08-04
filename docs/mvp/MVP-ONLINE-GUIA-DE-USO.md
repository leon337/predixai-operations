# MVP Online — Guia de Uso

## Endereço do preview funcional

`https://predixai-operations-ffplbasa8-predix-ai-br.vercel.app`

Este endereço aponta para o deployment de validação do MVP. Ele ainda não representa promoção definitiva para produção.

## Primeiro acesso

1. Abra o endereço do preview.
2. Selecione **Criar conta**.
3. Use um e-mail previamente autorizado na lista de membros do projeto.
4. Defina uma senha com pelo menos seis caracteres.
5. Caso o Supabase solicite confirmação, abra a mensagem recebida por e-mail e confirme a conta.
6. Retorne ao preview e selecione **Entrar**.

Contas não autorizadas não conseguem ler nem alterar o estoque, mesmo que concluam o cadastro no serviço de autenticação.

## Fluxo inicial recomendado

1. Abra **Materiais** e cadastre o primeiro material.
2. Abra **Movimentar** e registre uma **Entrada**.
3. Volte para **Estoque** e confirme o saldo.
4. Registre uma **Saída** menor ou igual ao saldo.
5. Consulte **Histórico** para verificar a rastreabilidade.

## Regras do MVP

- quantidade de movimentação deve ser maior que zero;
- saída superior ao saldo é recusada pelo banco;
- movimentações não são apagadas pela interface;
- saldo é calculado a partir do histórico de entradas e saídas;
- somente membros autorizados visualizam os dados;
- somente proprietários e operadores podem cadastrar materiais e movimentar estoque;
- contas classificadas como visualizadoras terão somente leitura quando esse perfil for provisionado.

## Escopo disponível

- autenticação por e-mail e senha;
- cadastro e edição de materiais;
- entrada e saída;
- saldo atual;
- estoque mínimo;
- busca;
- setores;
- histórico das últimas movimentações;
- interface responsiva.

## Fora do escopo deste ciclo

- patrimônio;
- manutenção;
- obras e eventos completos;
- romaneios;
- anexos de documentos;
- importação de planilhas;
- relatórios PDF ou Excel;
- inteligência artificial;
- promoção definitiva para produção.

## Segurança operacional

A chave utilizada pelo navegador é pública por natureza. O acesso aos dados é controlado no PostgreSQL por RLS, lista de membros e funções transacionais. E-mails autorizados são provisionados diretamente na infraestrutura e não devem ser gravados no repositório público.
