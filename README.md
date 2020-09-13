# shoppiing-cart-nodejs


## Instruções para execução da aplicação

Para que a solução seja executada, é necessária a instalção dos seguintes softwares:

- mongodb
- node.js

Para instalar o nodejs, acesse o site https://nodejs.org/en/ e opte pela versão LTS. Para instalar o mongodb, acesse https://www.mongodb.com/download-center/community. Selecione seu sistema operacional e escolha o arquivo .ZIP . Extraia na pasta raiz do computador (Disco local principal, no exemplo, dico local C:). Navegue até a pasta bin e copie o caminho, EX: C:\mongodb\bin. Após isso, procure por "editar variaveis do ambiente" na barra de pesquisa, clique em variáveis de ambiente. Na área de variáveis do sistema, edite a variável 'path', adicionado o caminho copiado para ela. Feito isso, o ambiente já estará pronto para utilizar os comandos do mongodb no terminal. A instalação do node.js é mais direta, opte pela instalação padrão.

No terminal, navegue até a pasta na qual se encontram os arquivos desse projeto, use o comando 'npm install', para instalar as dependências do projeto.
Após isso, abra um novo terminal e utilize o comando 'mongod'. Assim o servidor do banco de dados será aberto. Na pasta do projeto, após a instalação das dependências, use o comando node data/books-data.js. Esse comando fará com que os documentos iniciais sejam inseridos no banco de dados. Finalmente, use o 
npm start para iniciar o projeto. Abra o seu brower e na barra de endereços digite "http://localhost:3000/"



## Diferenciais

- Utilização do banco de dados mongodb.

-Implementação de desconto após a utilização do cupom 'TrabalheNaTegra' Com descontos de 20%  nos livros do autor “Robert C. Martin e
de  10%  nos livros do autor “Martin Fowler”.

- Alguns tratamentos de erros.




