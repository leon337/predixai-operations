# Política Permanente de Checklist e Próxima Ação

## 1. Objetivo

Impedir perda de foco, contexto, rastreabilidade e objetivo final no PredixAI Operations.

## 2. Regra obrigatória de resposta

Toda resposta operacional sobre o projeto deve terminar com:

1. checklist do que foi concluído;
2. checklist do que está em andamento;
3. checklist do que está bloqueado;
4. checklist do que ainda está pendente;
5. tarefa e subtarefas correspondentes no Linear;
6. evidência correspondente no GitHub;
7. uma única ação sugerida para a próxima etapa.

## 3. Estados permitidos

- `CONCLUÍDO`: tarefa Linear em Done e evidência integrada na main;
- `EM_ANDAMENTO`: tarefa iniciada, com branch ou atividade verificável;
- `BLOQUEADO`: impedimento explícito registrado no Linear;
- `PENDENTE`: ainda não iniciado ou dependente de gate anterior.

Nenhum item pode ser apresentado como concluído apenas porque foi discutido no chat.

## 4. Cadeia mínima de auditoria

Toda entrega relevante deve registrar:

`Linear → branch → PR → HEAD revisado → decisão → remediação → reteste → autorização → merge commit`

Quando não houver código ou documento alterado, o Linear deve registrar a evidência operacional correspondente.

## 5. Regras de versionamento

- GitHub é a fonte documental e técnica oficial;
- Linear é o controle operacional oficial;
- toda alteração documental ou técnica usa branch exclusiva;
- toda integração na `main` usa PR;
- o HEAD aprovado deve ser registrado antes do merge;
- merge exige autorização explícita quando o gate assim determinar;
- `PROJECT_STATE.md` deve acompanhar mudanças relevantes de estado;
- secrets, credenciais e chaves privadas nunca são versionados.

## 6. Regras de foco

- somente uma ação sugerida deve encerrar cada resposta;
- tarefas paralelas são permitidas quando não alteram o mesmo artefato e possuem dependências claras;
- uma tarefa bloqueada não deve impedir outra independente;
- produção, SQL, migrations e operações destrutivas exigem autorização própria;
- nenhuma ferramenta externa deve alterar recurso existente sem autorização nominal quando houver mais de um alvo possível.

## 7. Checklist-padrão

```text
CONCLUÍDO
- [x] LEA-XXX — resultado — PR/merge/evidência

EM ANDAMENTO
- [ ] LEA-YYY — subtarefa ativa — branch/PR

BLOQUEADO
- [!] LEA-ZZZ — bloqueio — decisão necessária

PENDENTE
- [ ] LEA-WWW — dependência anterior

AÇÃO SUGERIDA
- Executar uma única próxima etapa objetiva.
```

## 8. Precedência

Esta política complementa o histórico auditável e o `PROJECT_STATE.md`. Em caso de divergência, prevalece o estado verificável mais recente na `main` e no Linear.