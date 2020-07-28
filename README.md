# Apollo Koa Boilerplate

## Tabela de conteúdos

- [Sobre](#about)
- [Iniciando](#getting_started)
- [Como usar](#usage)
- [Deploy](#deploy)

## Sobre <a name = "about"></a>

Apollo Koa Boilerplate, escrito em TypeScript e GraphQL, usa o mongoDB de banco de dados, com servidor Koa com Apollo Server.
Usa scaffolding domain-based.

## Iniciando <a name = "getting_started"></a>

Essas instruções são para o download local na máquinas para fins de desenvolvimento.

### Pré requisitos

Para utilizar a API é necessário instalar os softwares:

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

sudo echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get install nodejs yarn -y
```

### Instalando

Com os softwares instalado é hora de instalar os pacotes, para isso na pasta clonada digite os seguintes comandos:

```
yarn
```

## Como usar <a name = "usage"></a>

### Modo desenvolvimento

Para iniciar o servidor em modo de desenvolvimento execute o seguinte comando:

```
yarn dev
```

## Deploy <a name = "deploy"></a>

O deploy será feito pelo CI/CD do GitHub.
