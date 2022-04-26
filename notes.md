# Cadastro 

Este projeto é parte da disciplina de Programação 2

O projeto vai ser back-end. O back-end é onde as regras de negócio da aplicação são feitas

## API 

Application Proggraming Interface -> É a interface entre o programador e a linguagem de programação
A API desenvolvida será um serviço

## Iniciando o projeto:

Para iniciar um projeto NodeJS:

```batch 
npm init -y
```

Instalar as dependência 

```batch
npm i express sqlite sqlite3
```

Instalar as dependências de desenvolvimento

```batch
npm i -D typescript ts-node 
``` 

Depois disso, criar:
```src/index.ts``` 

No arquivo ```index.ts```:
* Importar o readline/promises para poder usar o console
* Instalar @types/node para poder usar o node sem erros: ```npm i -D @types/node```

Para cadastrar uma pessoa, precisamos saguir o CRUD:
* Create
* Read
* Update
* Delete

Os métodos dentro da Classe __Entity__ são feitos obedecendo o CRUD

