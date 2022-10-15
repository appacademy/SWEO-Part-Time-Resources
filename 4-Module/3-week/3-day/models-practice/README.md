# Practice: Generating Models and Writing Validations

In this short practice, you will be using **Sequelize** to generate a model and 
associated migration file, as well as defining database-level constraints and
basic model-level validations.

## Getting started

Download starter. 

Execute the __setup-commands.sh__ script from the root directory of this
practice. View the contents of the script to see the commands that are executed,
and view the results in the terminal to confirm that setup was successful.

```shell
sh setup-commands.sh
```

The Express endpoints for this practice will not yield results from a database 
but are included in order to demonstrate how to initialize Sequelize with an 
existing server. This can be seen from the plaintext responses given by these 
endpoints.

In future practices you will utilize routes in order to interact with a 
connected database.

## Step 1: Generate migration and model files

In this step, you want to create a table called `Colors` with a `name` column. 
You will also model this table in Sequelize.

In the terminal, use `sequelize-cli` to generate a new model and associated 
migration. Name the model `Color` and define a `name` attribute of type 
`string`.

When this step is completed you should see two files created, a migration file 
in the __migrations__ directory and a model file in the __models__ directory.


## Step 2: Modify the migration file

In the migration file that was created, double check that the `createTable` 
function is being utilized in the `up` callback, the `dropTable` function is 
used in the `down` callback, and that the table name generated matches 
`'Colors'`.

Modify the `up` callback function that was generated. Add the following 
database-level constraints:

  * `name` attribute cannot be empty (do not allow `NULL` values to be saved to 
    the database)
  * `name` attribute must be unique

Keys should be added to `createdAt` and `updatedAt` to assign default values. 
Utilize the `Sequelize.literal("CURRENT_TIMESTAMP")` function for each of these 
attributes. This function evaluates the SQL string passed in, which will allow 
you to tell **Sequelize** to use the current time.


## Step 3: Modify the model file

In the __models/color.js__ file, modify the `init` function to add the following 
model-level validations:

  * `name` attribute cannot be empty (do not allow `NULL` values to be
    saved to the database)
  * `name` attribute must be unique
  
> Hint: The `name` attribute initially only points to the data type when 
> generated. In order to add additional validations, it will instead need to 
> point to an object with multiple keys.


## Step 4: Run the migration

Use `sequelize-cli` to run the migration, creating the `Colors` table.


## Step 5: Validate the table creation

Remember, the constraints defined in the migration will always be
checked when inserting and updating data in the database.

You must validate that the schema has the correct database-level
constraints that you intended to add.

Open the database with `sqlite3` in the terminal.
 
Check which tables exist in the database with `.tables`. You should see the 
`Colors` table that you defined as well as the `SequelizeMeta` table created by
**Sequelize**.

Validate the structure of the `Colors` table with `.schema Colors`. You should 
see the SQL that was executed to create the table, including the columns, types, 
and additional constraints. The output should look similar to:

```sql
CREATE TABLE `Colors` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT, 
  `name` VARCHAR(20) NOT NULL UNIQUE, 
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP);
```


## Step 6: Ensure the validations are functioning as intended

Remember, the validations defined in the model will be run by
Sequelize **before** attempting to insert or update the data
in the database-level. But if inserting or updating directly
into the database without using Sequelize, the validations
will not be checked.

Normally, you would test your model-level validations by inserting/
updating/deleting data through Sequelize. But you will learn how
to do those in future lessons.

For now, a __test/test.js__ file has been provided to test that you set 
up the validations properly. Execute this file using `npm test`.

Expected output is included for each test, with the first two scenarios
expected to fail your validations and the last one expected to pass.

Make sure you pass all test specs. If you don't pass the test specs,
go back to your model and make sure you have the proper
model-level validations.


## Congratulations!

You are now able to generate **Sequelize** models and migrations, as well as 
implement basic database-level constraints and model-level validations.