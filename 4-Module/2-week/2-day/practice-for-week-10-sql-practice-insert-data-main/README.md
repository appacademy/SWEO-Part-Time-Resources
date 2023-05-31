# Practice: Insert Data

Now, it's time to practice the SQL commands to insert data into a database
table.

## Getting started

Create a new project folder called __sql-practice__. `cd` into this folder.

Run SQLite on a database called __practice.db__.

You may want to create a `.sql` file that you can use in the following steps
to formulate the SQL statements before running it in the SQLite CLI.

## Step 1: Create table

Run the following SQL Command to create a table called `friends`.

```sql
CREATE TABLE friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);
```

## Step 2: Insert one row

Insert one row into the `friends` table with `Amy` as the first name, and
`Pond` as the last name.

Verify the `INSERT` worked by running

```sql
SELECT * FROM friends;
```

## Step 3: Insert multiple rows

Now, practice inserting multiple rows in a single SQL command.

| first_name | last_name |
| ---------- | --------- |
| Rose       | Tyler     |
| Martha     | Jones     |
| Donna      | Noble     |
| River      | Song      |

Use `SELECT * FROM friends;` to verify that all 4 rows plus the 1 row added
in the previous step are in the friends table.

## Step 4: Debugging error with `INSERT`

Run the following SQL statement:

```sql
INSERT INTO friends (id, first_name, last_name)
VALUES (5, 'Jenny', 'Who');
```

Debug and fix this statement until works properly. That is, until you can run it
without error, and see "Jenny Who" in the query results when you run the 
`SELECT` statement above.

## Congratulations!

You are now able to insert data into a database.
