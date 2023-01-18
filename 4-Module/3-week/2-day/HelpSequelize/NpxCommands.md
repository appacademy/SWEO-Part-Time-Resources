# Common NPX commands

<br></br>

```
npx sequelize-cli init
```
- Initiate seqeulize usage and utilities, will create db folder with models, migrations, and seeders folder.
- You must create a database user, and update the config/config.json file to match your database settings to complete the initialization process

<br></br>
```
npx sequelize-cli db:create
```
- Create Database
- will create your persistent database

<br></br>

```
npx sequelize-cli model:generate --name <ModelName> --attributes <column1>:
<type>,<column2>:<type>, etc...
```
- Generate a model and its migration
- --name should be PascalCase and singular
- --attributes should be camelCase and singular
- datatype will follow the : after the column name, and any options/restraints
- each column will be seperated by comas , , ,

<br></br>

```
npx sequelize-cli db:migrate
```
- Run pending migrations

<br></br>

```
npx sequelize-cli db:migrate:undo
```
- Rollback/undo the last migration

<br></br>

```
npx sequelize-cli db:migrate:undo:all
```
- Rollback/undo all migrations

<br></br>

```
npx sequelize-cli seed:generate --name <descriptiveName>
```
- Generate a new seed file

<br></br>

```
npx sequelize-cli db:seed:all
```
- Rollback/undo last seed

<br></br>

```
npx sequelize-cli db:seed:undo:all
```
- Rollback/undo all seeds
