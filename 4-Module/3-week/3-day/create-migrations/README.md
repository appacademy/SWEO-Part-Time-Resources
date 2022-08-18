# Practice: Creating Migrations in Sequelize

In this short practice, you will be using **Sequelize** to make a migration to 
`CREATE` a table.

## Getting started

Download starter. 

Execute the __setup-commands.sh__ script from the root directory of this
practice to install required dependencies and setup your __.env__ file based on
the example file. View the contents of the script to see the commands that are
executed, and view the results in the terminal to confirm that setup was
successful.

```shell
sh setup-commands.sh
```

The Express endpoints for this practice will not yield results from a database but
are included in order to demonstrate how to initialize Sequelize with an 
existing server. This can be seen from the plaintext responses given by these 
endpoints.

In future practices you will utilize routes in order to interact with a 
connected database.

## Step 1: Generate a migration file

After executing the setup script, `cd` into the `server` directory.

Then, in the terminal, use `sequelize-cli` to generate a new migration called
`create-color` using the command below:

```powershell
npx sequelize migration:generate --name create-color 
```

When this step is completed you should see a new file created in the 
__migrations__ directory.


## Step 2: Use `queryInterface` to create a new table

In the migration file that was created, utilize the `queryInterface` to create a 
new table in the `up` key's callback function. The name of this table should be 
`Colors`. 

> Notice that this does not follow the naming convention that you may be 
> familiar with from SQL. This will become important when working with models in 
> a future lesson.

The `Colors` table should have the following attributes:

| attribute | type    | constraints                |
| --------- | ------- | -------------------------- |
| id        | integer | Primary Key, Autoincrement |
| name      | string  | none                       |


## Step 3: Use `queryInterface` to drop the table

Utilize the `queryInterface` to drop the table in the `down` key's callback 
function. It is always good practice to create these corresponding `down` 
actions as the migration is created. This will be executed whenever undoing the
migration.


## Step 4: Run the migration

Use `sequelize-cli` to run the migration, creating the `Colors` table using the
following command:

```powershell
npx dotenv sequelize db:migrate
```


## Step 5: Validate the table creation

Open the database with `sqlite3` in the terminal.
 
Check which tables exist in the database with `.tables`. You should see the 
`Colors` table that you defined as well as the `SequelizeMeta` table created by
**Sequelize**.

Validate the structure of the `Colors` table with `.schema Colors`. You should 
see the SQL that was executed to create the table, including the columns, types, 
and additional constraints. The output should look similar to:

```sql
CREATE TABLE `Colors` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(255));
```

## Congratulations!

You are now able to create and run migrations in **Sequelize** that `CREATE` 
tables.