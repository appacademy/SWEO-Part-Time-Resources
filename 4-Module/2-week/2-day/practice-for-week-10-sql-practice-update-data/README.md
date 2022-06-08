# Practice: UPDATE Data

Now, it's time to practice updating data in a database table using SQL.

## Getting started

Download the starter. `cd` into the folder named __sql-practice__.

Run SQLite on a database called __practice.db__.

In this practice, you will use this example table to make your queries:

Table `friends`:

| `id` |  `first_name`  |  `last_name`  |
| ---- | -------------- | ------------- |
| 1    | Amy            | Pond          |
| 2    | Rose           | Tyler         |
| 3    | Martha         | Jones         |
| 4    | Donna          | Noble         |
| 5    | River          | Song          |

### Create table

Run the following SQLite command to create the `friends` table, and insert the
rows shown above.

```sql
.read seed-data.sql
```

> Tip: You can rerun the command above any time you want to get back to the
> original seed data. This is helpful when working on statements that modify the
> database, in case you have any errors when you run one.

For the following steps, you should execute the SQL command in the SQLite3 CLI,
but you can create and use a `.sql` file to formulate the command.

## Step 1: Update last name

Write and run a `UPDATE` statement to change **Amy Pond** to **Amy Blue**.

## Step 2: Silent failure

Copy/paste the following SQL statement into your SQLite CLI, and run it.

```sql
UPDATE friends
SET last_name = 'Smith'
WHERE first_name = 'Tyler'
  AND last_name = 'Rose';
```

<details>
  <summary>How did this SQL statement change the data? Hint: Use <code>SELECT</code> statements.</summary>
  If you feel like nothing happened, you would be correct. Now, can you fix the statement so it
  will rename <strong>Rose Tyler</strong> to <strong>Rose Smith</strong>?
</details>

## Congratulations!

You are now able to update data in a database using the SQL `UPDATE` statement.