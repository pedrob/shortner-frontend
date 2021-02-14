# Shortner frontend
Interface da aplicação shortner encurtador de links, aplicação completa aqui: https://shr-app.herokuapp.com/

## Requisitos:
- [__Node__](https://nodejs.org/en/download/)
- [__Yarn__](https://classic.yarnpkg.com/pt-BR/docs/install)

opcionais:
- [__Docker__](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
- [__Docker compose__](https://docs.docker.com/compose/install/)
## Instalação

Obs: Para um funcionamento completo dessa aplicação é necessário executar o seu backend: https://gitlab.com/pedroven/shortner-backend

Primeiro deve-se criar um arquivo .env com o mesmo padrão do arquivo .env.example

``` 
REACT_APP_API_URL=http://localhost:8080
```

depois execute esse comando:

```sh
yarn install
```

## Execução

```sh
yarn start
```

## Utilizando docker e docker compose

```sh
docker-compose up
```


