# Practice: Transactions in SQL

Now it's time to practice working with transactions in SQL, including analyzing 
transaction blocks and recognizing the value they add to various scenarios.

## Getting Started

Download the starter. `cd` into the __sql-practice__ folder.

Open a SQLite3 CLI on a database file called __practice.db__:

```bash
sqlite3 practice.db
```

In this practice you will use this example table to make your queries:

Table `accounts`:

| `id` | `first_name` | `last_name` | `balance` |
| ---- | ------------ | ----------- | --------- |
| 1    | Amy          | Pond        | 2500      |
| 2    | Rose         | Tyler       | 600       |
| 3    | Martha       | Jones       | 3000      |
| 4    | Donna        | Nobles      | 200       |
| 5    | River        | Song        | 1200      |

To create this starting table, read the __setup.sql__ file into the database. If 
you ever need to return to this starting table state, re-run the setup file:

```bash
.read setup.sql
```


## Part 1: Understanding Rollbacks

In this section, you will analyze a SQL transaction block that has been written 
for you. Take a look at __01-transactions-rollbacks.sql__. This file includes a 
transaction block with multiple balance transfers between accounts. `SAVEPOINT`s 
have been included throughout the transaction, as well as `ROLLBACK` and 
`COMMIT` statements. 

Take a moment to read through the file and track how the balances of each 
account are being affected. Remember to take into account any rollbacks that 
occur. How do you expect the `accounts` table to change after you run this
file?

At the end of the file, **fill in the expected `balance` for each account**.
Make an educated guess for each entry in the `accounts` table.

After your initial analysis of what the file will do, execute the file to see
if your expectations match what will actually happen.

```bash
.read 01-transactions-rollbacks.sql
```

Did the results of the transaction block match your expectations? Does the
`accounts` table outputted to the terminal after executing the file match your
filled out expected `accounts` table?

How did the 
`SAVEPOINT`, `ROLLBACK`, and `COMMIT` statements affect the overall results?

To re-create the results, run the reset file then the __01-transactions-rollbacks.sql__
file:

```bash
.read setup.sql
.read 01-transactions-rollbacks.sql
```


## Part 2: Connection Interrupts

In this section you will simulate a connection interruption, one of the cases 
that make transaction blocks so useful. Take a look at the next file, 
__02-transactions-connection-interrupt.sql__. You'll notice that this file has 
the same content as the first, except for the later portion being commented out. 
This means that a transaction has begun and has not yet been committed.

Before executing this file, reset your database with the __setup.sql__ file.

```bash
.read setup.sql
```

You should see that the original table has been restored. Next, execute this 
section's SQL file.

```bash
.read 02-transactions-connection-interrupt.sql
```

At this point, your terminal is in the middle of a transaction. The transaction
should be stalled in the middle of completing a transfer 200 from Donna to Rose.
You can check  the status within the transaction by selecting for all rows in the
`accounts` table. Write the query to select all rows in the `accounts` table
and execute it in the terminal.

What does the result of this query represent?

Open a new terminal. Connect to the __practice.db__ database and query for all 
rows in the `accounts` table again in the **second** terminal that you just opened.
Is the table still stalled in the middle of completing the transaction?
What does the result of *this* query represent? Is it different from the query result
in the first terminal? Why or why not?

Exit out of the **first** terminal instance of SQLite3 CLI (either by closing the terminal or 
using the `.quit` command). How will the database be impacted? Is the `accounts` table
still stalled in the middle of completing the transaction? Verify your 
assumptions by connecting to the database again in the **first** terminal and querying
for all records in the `accounts` table again. Does the result match your
expectations?


## BONUS: Constraint Violations and Rollbacks

Another possible use case for rollbacks, besides the connection interruptions 
that you simulated, is to prevent related queries from being committed when
there is an error with executing a SQL statement, like when a column constraint
is violated.

Re-examine the __setup.sql__ file and you'll notice that a constraint exists on 
the `balance` field, requiring a balance to be a non-negative value (`CHECK(balance >= 0)`) - no 
overdrawing from a `balance` is allowed in the `accounts` table. Now take a look at the SQL 
for this part in __03-transactions-constraint-violations.sql__. The transaction 
that has been created in this file attempts to transfer funds from Rose's 
account to Amy's account. The transfer as written would overdraw from Rose's 
account.

In SQLite, a statement that violates a constraint **WILL NOT** automatically invoke 
a rollback of its transaction block, it will simply not execute the violating 
statement. You can see this functionality by resetting the database by running
the setup file and executing the __03-transactions-constraint-violations.sql__ file. 

```bash
.read 03-transactions-constraint-violations.sql
```

You should notice that the initial addition of $1000 to Amy's account has been 
committed, while Rose's account maintains its starting value, with no funds 
having been deducted. In order to indicate that a rollback should be performed, 
the `UPDATE` statement must be altered to an `UPDATE OR ROLLBACK` statement. 

An error in the `UPDATE OR ROLLBACK` statement will cause **ALL** the statements in the
transaction to rollback and **NOT** be committed to the database.

Alter these statements, reset the database with the __setup.sql__ file, and run 
this SQL file again. The database constraint violation should now trigger a 
full transaction rollback, with both Amy's and Rose's accounts maintaining their
starting value.


## Congratulations!

You are now able to predict the outcome of transaction blocks, including those 
that utilize `SAVEPOINT`s and `ROLLBACK`s. You are also able to recognize the 
importance of transactions to prevent undesired database manipulation from 
connection interruptions or constraint violations.