# Basic Phase 2: Create tables

In this phase, you will practice using the `CREATE TABLE` and `DROP TABLE` SQL
commands.

## Step 1: Create tables

Write the following SQL commands in the __sql-practice/phase-2.sql__ file and
run the file in the SQLite3 CLI once you are done. Name the database file
__coffee-shop.db__.

Create a `customers` table with the following columns and constraints:

* `id` - primary key, integer
* `name` - cannot be empty, a string with a maximum of `40` characters
* `phone` - must be unique, a number with `10` digits and no decimals
* `email` - must be unique, a string with a maximum of `255` characters
* `points` - cannot be empty, integer, starting number of `5`
* `created_at` - cannot be empty, column type of `TIMESTAMP`, should be the
  current time when a row is inserted
  * **RESEARCH**: See SQLite's documentation on the [`DEFAULT`][DEFAULT] clause
    to figure out how to get the column value to default to the current time.

Create a `coffee_orders` table with the following columns and constraints:

* `id` - primary key, integer
* `is_redeemed` - a boolean that defaults to "not redeemed"
* `ordered_at` - same constraints as `customers` table's `created_at` column

After you finish creating the tables, compare this database schema to the one
you created in phase 1. Is there anything that your schema has that this one
doesn't, or vice versa? There is no "correct" database schema so don't sweat it
if yours does not look exactly like this one. In fact, this one might perform
more optimally in some areas than yours, but it might not be better in other
areas. You can always improve your database design skills by reviewing other
database schema designs.

## Step 2: Drop tables

Let's say you want to scrap the entire table and start over from scratch. Try
running the SQL command to create the `customers` table in the same database
using the SQLite3 CLI. You should get an error, "Error: table customers already
exists". If you also try running the __sql-practice/phase-2.sql__ file again in
the SQLite3 CLI, you should see the error displayed.

To scrap the current `customers` table and create it again, you need to drop
the table first. Write the command to drop the `customers` and `coffee_orders`
tables at the top of the __sql-practice/phase-2.sql__ file and execute it.

You should no longer see any errors.

BUT what if you drop the entire database and try executing the file on a fresh
database? What do you think will happen? Try it and see if you guessed
correctly. (Do you recall how to drop a database with SQLite?)

You should see an error. How do you solve the error? Here is the problem
rephrased:

How do you make sure the `customers` table will be created when this `.sql` file is run on a fresh database
and re-created when run on a database that already has a `customers` table? **RESEARCH**:
See SQLite's documentation on the [`DROP TABLE`][DROP TABLE] statement to figure
out how to do this.

[DEFAULT]: https://www.sqlite.org/lang_createtable.html#the_default_clause
[DROP TABLE]: https://sqlite.org/lang_droptable.html
