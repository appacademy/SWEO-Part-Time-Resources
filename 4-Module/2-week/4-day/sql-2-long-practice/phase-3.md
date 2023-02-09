# Basic Phase 3: Examining Tables JOINed

In this phase, you will create queries to examine the tables that you created
in the previous phase.

Write your queries in `sql-practice/phase-3.sql` file. You can run the file by
executing it in the terminal:

```shell
sqlite3 practice.db ".read phase-3.sql"
```

## Find Hermione's cats

Write a query to find all the cats' names for the owner with the first name of
"Hermione". **You must do this in one query.** If you have trouble doing it in
one query, try doing it in multiple and then refactor to just one query.

Based on the seed data inserted into the database in Phase 2, what do you expect
as the output of the SQL query? Does your query results match what you expected?

## Find All the Toys for Hermione's cats

Write a query to find all toys' names for all the cats with an owner with the
first name of "Hermione". **You must do this in one query.** If you have trouble
doing it in one query, try doing it in multiple and then refactor to just one
query.

**Try doing this with 3 `JOIN`s. Then try doing it in just 2 `JOIN`s.**

Based on the seed data inserted into the database in Phase 2, what do you expect
as the output of the SQL query? Does your query results match what you expected?