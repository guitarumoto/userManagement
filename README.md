# Informações sobre o projeto
Este é um projeto com Backend em NodeJS, MySQL e Frontend em React. Trata-se de uma aplicação para cadastro de usuários. Para a realização desta, foram utilizados as bibliotecas Axios, Sequelize, Bootstrap, Express e React-Router-Dom.

# Passo-a-passo para testar
* Instalar NodeJS com NPM e MySQL;
* Clonar o repositório;
* Crie um banco com o nome "cadastro":
````
CREATE DATABASE cadastro;
````
* Rode o comando abaixo na pasta ``backend`` para instalar as dependências necessárias.
````
npm install
````
* Rode o comando abaixo na pasta ``backend`` para iniciar o server no pasta backend. Este também cria a tabela no banco.
````
node server.js
````
* Rode o comando abaixo na pasta ``frontent`` para instalar as dependências necessárias.
````
npm install
````
* Rode o comando abaixo também na pasta ``frontend`` para iniciar a aplicação.
````
npm start
````
* Após a finalização o server estará rodando em ``http://localhost:8080`` e a aplicação em ``http://localhost:8081`` 

#
Nota: As configurações do banco de dados devem ser ajustadas para a configuração do MySQL instalado na máquina, essas podem ser modificadas no arquivo: ``backend > src > config > db.config.js``.
#
