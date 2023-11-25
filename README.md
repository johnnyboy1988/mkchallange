<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


A <a href="https://vercel-nest-4riiny404-joaos-projects-5bb97a9e.vercel.app/">Aplicação</a> foi publicada, no Vercel. Porem somente a versão paga, da acesso ao banco de dados.
Neste caso aplicação não está rodando. Nos logs da vercel, é possivel identificar o motivo, no vaso o TypeOrm não conseguiu se conectar ao banco de dados. Tentei publicar no Heroku,
porem la mudou um pouco e agora exige cartão de crédito internacional. 
Por conta disso não será possivel testar em produção. Mas acredito que fora isso esteja tudo ok.



Ferramentas requeridas
<br>
TypeScript - OK
<br>
Nest.js - OK
<br>
TypeORM - OK
<br>
Swagger - OK
<br>
Docker - OK
<br>
Redis - Não foi usado.
<br>
PostgreSQL - OK


Na api, swagger foi adiconado o parametro de autenticação para colocar o token JWT. O redis, me parece estranho na api. Seria mais usual, usar na aplicação que consome a api.
<br>
No caso nunca tinha usado este, porem já usei o localStorage, em aplilcações com Ionic. Tem um conceito parecido, la utilizei para salvar os tokens de acesso as apis. 
<br>
Docker , foi usado apenas para facilitar a conexão com o banco de dados. Não tenho muita experiência com o Docker, porem parece simples sua utilização realmente gostaria de usar mais no dia a dia.
<br>



## Docker
Comando para criar o Docker do banco de dados. 
$  docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres

(Arquivo .env foi commitado, nele está configurado para usar essa string de conexão do Docker.)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

