# BONUS Practice: Improving SQL Queries

In this Bonus phase, you will be using the benchmarking process to analyze the
efficiency of a new query.

![benchmark-sql-flow-chart]

## Setup

You will use the same database that was created in the first phase of this
practice. Before you start this phase, use the `sqlite3` CLI to drop any indexes
that you may have created during the first phase. Refer to the Indexes reading
to recall how to list all of the indexes applied to your table.

In the __sql-practice__ folder, open the __bonus-improve-sql-queries.sql__ file.
You will record your queries and your benchmarking notes in this file.

As you move through each step below, you can run the file on the created
database, OR you can choose to run all of your queries through the `sqlite3` CLI.

_If you run your sql commands through the file, make sure you comment out the
SQL commands for any previous steps, and make sure your notes are also commented
out._

```sql
-- This is an example comment in SQL. It is preceded by two dashes
```

## Step #0 - Create a Query

In the __bonus-improve-sql-queries.sql__ file, write a query to select a `COUNT`
of all of the `toys` records that have a price greater than 55 AND belong to an
"Olive" color cat.

Run the file OR execute the SQL directly through the `sqlite3` CLI. 

```shell
sqlite3 practice.db ".read bonus-improve-sql-queries.sql"
```

A successful query should return a count of 215 toy records that match this
criteria.

## Step #1 - Analyze the Query

Next, analyze the query using `EXPLAIN QUERY PLAN`. 

- Record your results in the __bonus-improve-sql-queries.sql__ file as a comment.

- Jot down a few comments about what these results mean
  - Is SQL searching or scanning each record in the table?
  - Are any indexes being applied?
  - What order are the tables being searched or scanned?


## STEP #2 - Time the Query to get a baseline

Use the `sqlite3` CLI to time your original query.

- Record your results in the __bonus-improve-sql-queries.sql__ file as a
  comment.

## STEP #3 - Add an index and analyze how the query is executing

Look back to your `EXPLAIN QUERY PLAN` results in Step #1. Try to create an
index that could be applied to a table / column that might improve the
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

- Record your results in the __bonus-improve-sql-queries.sql__ file as a
  comment.
- Compare your new execution time results against your baseline results in Step
  #2
  - Are you still getting the correct query results?
  - Did the execution time improve (decrease)?
  - Do you see any other opportunities for making this query more efficient?

Repeat Steps #1 through #4 until you feel confident that your query is
efficiently finding data. If you find that a new index that you add is not being
used, or does not improve the execution time, then drop that index and try
creating a different one.

## Benchmarking Template

Congratulations! You are now able to use a benchmarking process to analyze a
query and improve the efficiency of that query by adding one or more indexes.

You can use the __benchmarking-template.sql__ file for more practice
benchmarking your own queries in the future.


[flow-chart-original]: https://app.diagrams.net/#G1yKkkv5O3AAFxioOJHTsxaNBrSo-5oW-H 
[benchmark-sql-flow-chart]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/readings/benchmark-sql-queries.png