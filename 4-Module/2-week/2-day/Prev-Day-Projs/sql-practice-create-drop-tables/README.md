# Practice: CREATE/DROP Tables

Now, it's time to practice the SQL commands to create and drop tables.

## Getting started

Create a new project folder called __sql-practice__. `cd` into this folder.

Run SQLite on a database called __practice.db__.

## Step 1: Create table

In the SQLite3 CLI, write the SQL statement to create this table.

| Column       | JS data type | Max length          | ANSI SQL data type  |
|--------------|--------------|---------------------|---------------------|
| id           | integer      |                     | INTEGER PRIMARY KEY |
| name         | string       | 50                  | VARCHAR(50)         |
| age_yrs      | number       | 3 digits, 1 decimal | NUMERIC(3,1)        |
| breed        | string       | 100                 | VARCHAR(100)        |
| weight_lbs   | number       |                     | INTEGER             |
| microchipped | Boolean      |                     | BOOLEAN             |

## Step 2: Verify table exists

Verify that the table was created by viewing

* Tables: `.tables`
* Database schema: `.schema`

## Step 3: Drop the table

Now, remove the `puppies` table from the database.

## Step 4: Verify table no longer exists

Verify that the table was created by viewing

* Tables: `.tables`
* Database schema: `.schema`

## Step 5: Experiment with repeated drops

Run the drop command twice in a row. What happens?

It would be very bad if an application ran into this error. Good news! There
is a solution.

Review the [SQLite documentation on `DROP TABLE`][drop-table] to figure out
how to allow a `DROP TABLE` command to be called without error at a time when
a table does not exist.

Verify you have found the right answer by running the modified `DROP TABLE` 
command at least twice in a row.

## Congratulations!

You are now able to create and recreate database tables. Remember to be very 
careful dropping tables as all the data will be lost in the process!


[drop-table]: https://www.sqlite.org/lang_droptable.html
