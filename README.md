# Processo seletivo Dev Fullstack - @techagr

##  :beginner:  Sobre
Desafio relativo ao processo seletivo para a vaga de desenvolvedor FullStack  @Tech. Criação de uma aplicação capaz de servir posts salvos e comentários vinculados a esses posts, uma aplicação clássica de posts e comentários como o twitter/facebook.

## :ledger: Tecnologias utilizadas:
- Versionamento
	- Git
- Backend
	- TypeScript
	- Node
	- Express
	- MongoDB
	- Mongoose
- Frontend
	- TypeScript
	- React
	- React Hooks
	- Styled Components
	- React-router-dom

###  :electric_plug: Iniciando o projeto
- Após descompactar o .zip e tendo o node instalado em seu ambiente local.
- As partes do projeto (backend e frontend) devem ser iniciadas simultânemanete.
- Certifique-se de que a porta :3000 e :3001 não estão sendo utilizadas por outro processo.
- Abra um terminal e navegue até o diretório .../desafio_tech_antoniel.

### Iniciando o Backend
```
//Instalando dependências
$ nmp install
// ou 
$ yarn add

//Iniciando o projeto
$ npm start 
// ou 
$ yarn start

//Você deve obter o seguinte retorno:

/*
  yarn run v1.22.5
  warning ../package.json: No license field
  $ node dist/server.js

  ✅ Servidor iniciado com sucesso na porta: 3001
  ✅ MongoDB conectado com sucesso!
*/
```
### Iniciando o Frontend
```
//Instalando dependências
$ nmp install
// ou 
$ yarn add

//Iniciando o projeto
$ npm start
// ou 
$ yarn start

//Você deve obter o seguinte retorno:

/*
  Compiled successfully!

  You can now view frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.107:3000

  Note that the development build is not optimized.
  To create a production build, use yarn build.
*/
```


###  :file_folder: Estrutura de Pastas
```
├── backend
├── frontend
└── README.md
```
##Backend
```
├── dist
│   ├── app.js
│   ├── controllers
│   │   ├── postController.js
│   │   └── posts.js
│   ├── database
│   │   └── index.js
│   ├── models
│   │   ├── comments.js
│   │   └── post.js
│   ├── routes
│   │   └── index.js
│   └── server.js
├── package.json
├── src
│   ├── controllers
│   │   └── postController.ts
│   ├── database
│   │   └── index.ts
│   ├── models
│   │   └── post.ts
│   ├── routes
│   │   └── index.ts
│   └── server.ts
├── tsconfig.json
├── yarn-error.log
└── yarn.lock

```
##Backend
```
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── Container
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── Input
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── Post
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── Title
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   └── WrapperPosts
│   │       ├── index.tsx
│   │       └── style.ts
│   ├── index.tsx
│   ├── page
│   │   ├── Home
│   │   │   ├── index.tsx
│   │   │   ├── Posts.tsx
│   │   │   └── styles.ts
│   │   └── IndividualPost
│   │       ├── Comments.tsx
│   │       └── index.tsx
│   ├── react-app-env.d.ts
│   ├── services
│   │   └── api.ts
│   └── styles
│       └── GlobalStyles.ts
├── tsconfig.json
└── yarn.lock
```
