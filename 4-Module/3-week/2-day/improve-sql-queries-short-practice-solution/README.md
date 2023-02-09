# Practice: Improving SQL Queries

In this project, you will be using the benchmarking process to analyze the
efficiency of your query, and apply indexes to increase the efficiency of your
queries. Recall the benchmarking process below:

![benchmark-sql-flow-chart]

## Setup

Execute the __setup-commands.sh__ script from the root directory of this
practice to install required dependencies and seed your database. View the
contents of the script to see the commands that are be executed, and view the
results in the terminal to confirm that setup was successful.

```shell
sh setup-commands.sh
```

In the __sql-practice__ folder, open the __improve-sql-queries.sql__ file. You
will record your queries and your benchmarking notes in this file.

As you move through each step below, you can run the file on the created
database, OR you can choose to run all of your queries through the `sqlite3` CLI.

_If you run your sql commands through the file, make sure you comment out the SQL
commands for any previous steps, and make sure your notes are also commented
out._

```sql
-- This is an example comment in SQL. It is preceded by two dashes
```

## Prepare

Run a few queries using the `sqlite3` command line (CLI) to see the `cats`,
`toys`, and `cat_toys` tables and the seed data provided. 

- What is the relationship between the `cats` and the `toys`?

- How is this relationship represented in the database?

## Step #0 - Create a Query

In the __improve-sql-queries.sql__ file, write a query to select all of the cats
that have the toy with an `id` of 5. 

Run the file, OR execute the SQL directly through the `sqlite3` CLI. 

```shell
sqlite3 practice.db ".read improve-sql-queries.sql"
```

A successful query should return 3 records, including the cats named "Rachele",
"Rodger", and "Jamal". They are all associated with the "Shiny Mouse", toy #5.


## Step #1 - Analyze the Query

Next, analyze the query using `EXPLAIN QUERY PLAN`. 

- Record your results in the __improve-sql-queries.sql__ file as a comment.

- Jot down a few comments about what these results mean
  - Is SQL searching or scanning each record in the table?
  - Are any indexes being applied?
  - What order are the tables being searched or scanned?

## STEP #2 - Time the Query to get a baseline

Use the `sqlite3` CLI to time your original query.

- Record your results in the __improve-sql-queries.sql__ file as a comment.

## STEP #3 - Add an index and analyze how the query is executing

Look back to your `EXPLAIN QUERY PLAN` results in Step #1. Try to create one or
more indexes that could be applied to a table / column that might improve the
efficiency of the query.

- Create the index through the `sqlite3` CLI
- Re-analyze the original query
- Jot down a few comments about what these results mean
  - Is SQL searching or scanning each record in the table?
  - Is the new index being applied?
  - What order are the tables being searched or scanned?


## Step #4 - Re-time the query using the new index

Use the `sqlite3` CLI to time your original query, now that you have added a new
index.

- Record your results in the __improve-sql-queries.sql__ file as a comment.
- Compare your new execution time results against your baseline results in Step
  #2
  - Are you still getting the correct query results?
  - Did the execution time improve (decrease)?
  - Do you see any other opportunities for making this query more efficient?

Repeat Steps #1 through #4 until you feel confident that your query is
efficiently finding data. If you find that a new index that you add is not being
used, or does not improve the execution time, then drop that index and try
creating a different one.

When you are finished with this phase, you can move on to the **Bonus** phase.


[flow-chart-original]: https://app.diagrams.net/#G1yKkkv5O3AAFxioOJHTsxaNBrSo-5oW-H 
[benchmark-sql-flow-chart]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/readings/benchmark-sql-queries.png