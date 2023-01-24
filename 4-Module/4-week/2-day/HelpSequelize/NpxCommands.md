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
- Will create your persistent database
- If using environment variable for database remember to add dotenv

<br></br>

```
npx sequelize-cli model:generate --name <ModelName> --attributes <column1>:
<type>,<column2>:<type>, etc...
```
- Generate a model and its migration
- --name should be PascalCase and singular
- --attributes should be camelCase and singular
- Datatype will follow the : after the column name, and any options/restraints
- Each column will be seperated by comas , , ,

<br></br>

```
npx sequelize migration:generate --name <migration-name>
```
- Generate a migration file

<br></br>

```
npx sequelize-cli db:migrate
```
- Run pending migrations
- If using environment variable for database remember to add dotenv

<br></br>

```
npx sequelize-cli db:migrate:undo
```
- Rollback/undo the last migration
- If using environment variable for database remember to add dotenv

<br></br>

```
npx sequelize-cli db:migrate:undo:all
```
- Rollback/undo all migrations
- If using environment variable for database remember to add dotenv

<br></br>

```
npx sequelize-cli db:migrate:undo --to <migration file name>
```
- Rollback/undo all migrations to a specific migration file
- If you have run all your migrations at once and try using this command it will simply undo all migrations that ran when the given file ran
- If using environment variable for database remember to add dotenv


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
- If using environment variable for database remember to add dotenv

<br></br>

```
npx sequelize-cli db:seed:undo:all
```
- Rollback/undo all seeds
- If using environment variable for database remember to add dotenv
