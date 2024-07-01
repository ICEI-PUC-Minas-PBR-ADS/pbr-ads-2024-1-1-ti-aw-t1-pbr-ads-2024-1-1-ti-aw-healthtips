# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

Arquitetura da Solução
Pré-requisitos: Projeto de Interface
Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.
Diagrama de componentes: 
Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentosentre os mesmos.
Exemplo:
Os componentes que fazem parte da solução são apresentados na Figura
                              +-------------------+
                              | Frontend          |
                              +-------------------+
                                       |
                                       V
                      +---------------------------------------+
                      | Página de Início                      |
                      +---------------------------------------+
                      | Página de Cadastro/Login              |
                      +---------------------------------------+
                      | Página do Usuário                     |
                      | +-------------------------------+     |
                      | | Ficha de Exercício            |     |
                      | | - Lista de Fichas             |     |
                      | +-------------------------------+     |
                      | +-------------------------------+     |
                      | | Aulas                         |     |
                      | | - Lista de Aulas Gravadas     |     |
                      | +-------------------------------+     |
                      | +-------------------------------+     |
                      | | Ficha de Alimentos            |     |
                      | | - Café da Manhã               |     |
                      | | - Almoço                      |     |
                      | | - Lanche da Tarde             |     |
                      | | - Janta                       |     |
                      | +-------------------------------+     |
                      +---------------------------------------+
                                         |
                                         V
                               +-------------------+
                               | Backend           |
                               +-------------------+
                                         |
                                         V
                      +---------------------------------------+
                      | Servidor de Aplicação                 |
                      +---------------------------------------+
                      | - Gerenciamento de Usuários           |
                      | - Gerenciamento de Exercícios         |
                      | - Gerenciamento de Aulas              |
                      | - Gerenciamento de Alimentos          |
                      +---------------------------------------+
                                          |
                                          V
                                +-------------------+
                                | Banco de Dados    |
                                +-------------------+
                                           |
                                           V
                      +---------------------------------------+
                      | Banco de Dados de Usuários            |
                      +---------------------------------------+
                      | Banco de Dados de Exercícios          |
                      +---------------------------------------+
                      | Banco de Dados de Aulas               |
                      +---------------------------------------+
                      | Banco de Dados de Alimentos           |
                      +---------------------------------------+

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
  - **JSON SERVER** - servidor usado e utilizado pelo replit para o armazenamento de dados.
 - **News API** -   NUTRITIONIX - API utilizada que busca informações sobre o tipo de alimento sugerido pelo usuário.
 
> **Links Úteis**:

WExemplo de UserFlow

Ao acessar a página inicial, o usuário tem a opção de fazer login. Caso não tenha uma conta, será direcionado para a página de cadastro. Após o cadastro, ele poderá fazer login e acessar sua página de usuário.
Na página de usuário, há três opções principais: Ficha de Exercício, Aulas e Ficha de Alimentos.
  1. Ficha de Exercício: Ao selecionar esta opção, o usuário terá acesso a duas ou mais fichas de exercícios. Depois de visualizar as fichas, ele pode optar por voltar à página de usuário ou sair do site.
  2. Aulas: Aqui, o usuário terá acesso às aulas gravadas. Ele pode assistir às aulas e, depois, escolher voltar à página de usuário ou sair do site.
  3. Ficha de Alimentos: Ao escolher esta opção, o usuário terá acesso à ficha completa de alimentos, que inclui café da manhã, almoço, lanche da tarde e jantar. Após visualizar a ficha, ele pode voltar à página de usuário ou sair do site.

## Tecnologias Utilizadas

                  v
       +----------+------------+
       |    Interface UI       |
       |    (React.js, HTML,   |
       |          CSS)         |
       +----------+------------+
                  |
                  v
       +----------+------------+
       | Banco de Dados (JSON )|
       +-----------------------+


> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
