# BONUS Practice: UPDATE Data

Now, you will trigger and resolve an error when updating data in a database
table using SQL.

## Trigger an `UPDATE` error

Write an `UPDATE` statement to try to remove the *first_name* from the friend
with `id = 5`.

<details><summary>Hint</summary>Removing a value usually means setting it to <code>NULL</code>.</details>

## Why does this error happen?

What error do you see? Why does this error happen?

<details><summary>Hint</summary>Check the database schema in the <code>sql-practice/seed-data.sql</code> file.</details>

## Resolve the error

Without changing the database schema, is there another way to change friend `5`
so they only have a last name?

<details><summary>Hint</summary>Try setting the <code>first_name</code> of the friend to another value other than <code>NULL</code>.</details>
