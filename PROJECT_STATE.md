# PROJECT_STATE — PredixAI Operations

## Identidade

- Repositório oficial: `leon337/predixai-operations`
- Produto: PredixAI Operations
- Primeiro módulo: Almoxarifado Inteligente
- Fase atual: **Fase 0 — Concepção e Modelagem do Domínio**
- Estado do código: **não iniciado**
- Fonte documental oficial: GitHub
- Controle operacional: Linear

## Objetivo do produto

Construir uma plataforma de inteligência operacional, inicialmente executada em notebook Linux como servidor local, capaz de controlar materiais, patrimônios, estoques, localizações, movimentações, obras, eventos, romaneios, manutenção e auditoria.

O sistema deve funcionar sem IA. A inteligência artificial será uma camada assistiva, sem acesso irrestrito ao banco e sem autonomia para executar operações críticas.

## Infraestrutura inicial aprovada

- Servidor: notebook ASUS N43SM com Linux Mint
- Backend previsto: Python + FastAPI
- Banco previsto: PostgreSQL
- Frontend previsto: aplicação web mobile-first/PWA
- IA local prevista: Ollama com modelo pequeno e quantizado
- IA externa: conector opcional e contingencial
- Operação principal: rede local, com evolução futura para nuvem

## Baselines aprovadas

- `RN-01 REV2.1` — Cadastro e classificação de materiais
- `RN-02.1 REV1` — Núcleo organizacional
- `RN-02.2 REV1` — Usuários, perfis, permissões e responsabilidades
- `RN-02.3 REV2` — Materiais, classificações, catálogo, atributos e patrimônios
- `RN-02.4 REV3` — Estoques, saldos, localizações, WMS leve e preparação para Digital Twin
- `RN-00/PDD` — Vocabulário oficial aprovado para construção

## Decisões críticas vigentes

1. GitHub é a fonte documental e técnica oficial.
2. Linear acompanha tarefas, aprovações e próxima ação.
3. O chat não substitui documentos versionados.
4. Nenhuma movimentação histórica será apagada.
5. Estoque negativo é proibido.
6. Todo saldo pertence a um Centro Operacional.
7. O saldo não é um campo simples do Material; deriva de movimentações e posição física.
8. A IA sugere, interpreta, consulta e resume; não executa operações críticas sem confirmação.
9. Operações críticas exigem autorização, justificativa e auditoria.
10. A `main` não deve receber documentação normativa sem revisão por Pull Request, exceto o commit inicial de bootstrap do repositório.

## Próxima ação normativa

Construir e revisar o `RN-00 — Vocabulário Oficial / PredixAI Domain Dictionary (PDD)` e, em seguida, continuar com `RN-02.5 — Movimentações`.

## Fora do escopo atual

- Implementação de backend ou frontend
- SQL, migrations ou tabelas físicas
- Integração real com IA externa
- Digital Twin funcional
- RFID/NFC/BLE
- Hospedagem em produção

## Regra de atualização

Este arquivo deve ser atualizado sempre que uma baseline for aprovada, uma fase mudar ou a próxima ação oficial for alterada. O estado definitivo só deve apontar uma entrega como concluída após revisão e merge do Pull Request correspondente.
