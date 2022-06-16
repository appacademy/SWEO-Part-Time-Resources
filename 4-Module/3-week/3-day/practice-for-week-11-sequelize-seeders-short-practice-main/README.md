# Practice: Sequelize Seeders

In this short practice, you will be generating, running, and undoing seeder 
files with **Sequelize**.

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

In future practices, you will utilize routes in order to interact with a 
connected database.

## Step 1: Generate a seeder

Using Sequelize, you will be inserting the primary colors as seed data for
the `Colors` table.

In the terminal, use `sequelize-cli` to generate a new seeder. Name this 
migration `base-colors`.


## Step 2: Create a `bulkInsert` statement

Utilize the `bulkInsert` function of the `queryInterface` to define three values 
to be inserted into the `Colors` table. The migration provided for you indicates 
attributes for `id`, `name`, `createdAt`, and `updatedAt`. Since the `id` is 
autoincremented and the `createdAt` and `updatedAt` have default values, the 
only attribute needed to create a new entry is the `name`. Create entries for 
the following colors: 

|  name  |
| :----: |
|  red   |
|  blue  |
| yellow |


## Step 3: Create a `bulkDelete` statement

Utilize the `bulkDelete` function of the `queryInterface` to remove the colors 
that were created in the previous step. Do not simply delete all entries, be 
specific! 

> Hint: The second argument to `bulkDelete` is a `WHERE` clause. Multiple values 
> can be provided as an `IN` condition by using an array `[]`.


## Step 4: Run the seeder and check the database

Use `sequelize-cli` to run the seeder. If the table hasn't been created in the 
database yet, you may have to first run the migration.

Check that the database contains the seed data using `sqlite3` in the terminal. 
Run a simple `SELECT` query to see the contents of the `Colors` table.


## Step 5: Undo the seeder and check the database

Use `sequelize-cli` to undo the seeder.

Check that the database no longer has the seed data defined in the seeder file.


## Bonus Step 6: Seed more data

Using Sequelize, you will be inserting more colors as seed data for the `Colors` 
table.

Use `sequelize-cli` to generate a second seeder named `fancy-colors`. Create a 
`bulkInsert` and `bulkDelete` to add and remove a few more colors. In this 
seeder, define your own `createdAt` and `updatedAt` values. While this may not 
be the most practical in this scenario, it's good to see how you can overwrite 
default values. Create a new `Date` object with a specific date for each color 
that you create (any date will do, so use whatever date you like).

Use `sequelize-cli` to run both seeder files.

Check that the database contains the seed data of both files. Ensure that your 
custom dates were used for the `fancy-colors` while the default value (the 
current time) was used for the `base-colors`.

Use `sequelize-cli` to undo the most recent seeder file.

Check that the database now only contains the data from the first seeder.


## Congratulations!

You are now able to generate, run, and undo seeder files with **Sequelize**.