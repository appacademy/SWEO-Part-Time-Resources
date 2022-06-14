# Bonus Practice: SQL Subqueries

In this practice, you will be executing SQL commands with at least one subquery.

## Phase 1: Dynamic `INSERT` using subquery with multiple insertions

Give all cats born before the year `2013` a new toy named "Cat Bed" using a
subquery.

Verify the insertion created a new toy named "Cat Bed" for the cats "Tiger",
"Oscar", and "Garfield".

## Phase 2: Backup the tables using subquery

Backup the `cats` table in a table called `cats_backup` using a subquery.
The `cats_backup` table has already been created for you in __build-db.sql__.
Verify that the `cats_backup` table has the same rows as the `cats` table.

Backup the `toys` table in a table called `toys_backup` using a subquery.
The `toys_backup` table has already been created for you in __build-db.sql__.
Verify that the `toys_backup` table has the same rows as the `toys` table.