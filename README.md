# Sistema Acadêmico

O **Sistema Acadêmico** tem como objetivo simular a gestão acadêmica de uma instituição de ensino, focando no processo de lançamento de notas, cálculo de média e exibição de status dos alunos. O projeto visa aplicar práticas ágeis de desenvolvimento, permitindo que equipes de desenvolvedores trabalhem de forma colaborativa, simulando um ambiente de desenvolvimento real.

## Objetivo Geral

Aplicar práticas ágeis de desenvolvimento e simular um ambiente de trabalho colaborativo, permitindo que os desenvolvedores compreendam o fluxo de trabalho real e a integração de diferentes módulos de um sistema.

## Tecnologias Utilizadas

- **JavaScript (Node.js)**: Para implementação da lógica.
- **Jest**: Para testes unitários e de integração.
- **GitHub Actions**: Para automação de testes e integração contínua.

## Estrutura de Pastas

- **`src/`** — Código-fonte do Projeto: Esta pasta contém os módulos do sistema. Cada módulo é responsável por uma parte específica do processo acadêmico.
  - **`lancamentoNotas.js`**: Módulo responsável por permitir que o professor insira as notas dos alunos nas 1UP e 2UP.
  - **`calcularMedia.js`**: Módulo que recebe as notas dos alunos e calcula a média.
  - **`exibirStatus.js`**: Módulo que exibe o status de aprovação, reprovação ou aguardando final do aluno, com base na média calculada.

- **`test/`** — Testes do Projeto: A pasta de testes contém arquivos que garantem que cada módulo funciona corretamente, validando o fluxo do sistema de ponta a ponta, desde a inserção das notas até a exibição do status do aluno.
  - **`lancamentoNotas.test.js`**: Testes para garantir que o módulo de lançamento de notas funciona corretamente e valida as entradas.
  - **`calcularMedia.test.js`**: Testes para verificar se o cálculo da média está correto e se o sistema responde corretamente para todos os cenários (aprovação, reprovação e aguardando final).
  - **`exibirStatus.test.js`**: Testes para verificar se o status do aluno é corretamente exibido, com base nas notas e na média calculada.

- **`.github/workflows/pipetest.yml`** — Configuração do GitHub Actions e do pipeline de CI: Esta pasta contém a configuração do pipeline de GitHub Actions, responsável pela execução automatizada dos testes sempre que houver alterações no repositório. Isso garante que o código esteja funcionando corretamente durante o desenvolvimento e evita regressões.

## Como Executar os Testes no VS Code

### Passo 1: Clonar o Repositório

No terminal Git Bash, clone o repositório:

```bash
git clone https://github.com/italo1101/sistema_academico_ME.git

Como Executar os Testes no Vs Code
No terminal Git Bash clone o repositório:

git clone https://github.com/Firaal/sistema-academico.git
Instale as dependências: Certifique-se de ter o Node.js e npm instalados e execute:

npm install
Execução dos Testes
Para rodar os testes automatizados com Jest, use o comando:

npm test
Esse comando executará todos os testes localizados na pasta test/ e exibirá os resultados no terminal.
