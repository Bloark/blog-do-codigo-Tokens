# Blog do código

1. Ajuste do package.js
2. instalação das dependência abaixo:

   npm install body-parser@1.19.0

   npm install nodemon@2.0.2

   npm install sqlite3

   npm install express@4.17.1

   npm i dotenv

   npm i bcrypt

   npm i jsonwebtoken

   npm i redis

   npm i passport

   npm i passport-local

   npm i passport-http-bearer

3. Rodar Programa com npm start
4. Implementação do bcrypt
5. Criar método static gerarSenha

   <img src="./img/01.png" width="500px" >

6. importar bycrpt
7. Criar um metodo de adicionaSenha dentro (./src/usuario/usuario-modelo)

   <img src="./img/02.png" width="500px" >

8. Incluir dentro do contructor

   <img src="./img/03.png" width="500px" >   
09. criar validações

   <img src="./img/04.png" width="500px" >
10.Refatorar arquivos usuarios-dao.js 

   <img src="./img/05.png" width="500px" >
12. modificar arqvos database.js modificar esquema

   <img src="./img/06.png" width="500px" >
13. modificar controlador (/src/usuario/usuarios-controladores.js) e aidiocnado método adicionar

   <img src="./img/07.png" width="500px" >
14. Instalação do npm install passport@0.4.1
15. npm install passport-local@1.0.0
16. configuração do da estrategia da configuração
16. criação do arquivo estrategias-autenticacao.js dentro de ./src/usuarios
17. configuração da stretegia de configuração
   
   <img src="./img/08.png" width="500px" >
18. configuração das funções de verificaUsuario e VerfificarSenha
   
   <img src="./img/09.png" width="500px" >
19. exportação do modulo estrategias-autenticancao dentro index na pats usuario.
20. incialização de estretgria-autenticação dentro do arquivo app.js
21. retorno de estatus dentro da pasta usuario-controlador

   <img src="./img/10.png" width="500px" >
22. 

<
