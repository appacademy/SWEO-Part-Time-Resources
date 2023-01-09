# Exercise: SQLite3 CLI

Now, you will practice using the Command Line Interface (CLI) in SQLite3.

## Getting Started

Download starter. `cd` into the __sql-practice__ folder.

As you work, write down any questions you have for the upcoming discussion
session.

## Step 1: Use built-in documentation

Run `sqlite3`. You can begin with no database.

> Tip: Notice the prompt changes to "sqlite>". That's how you know you will be
> able to run SQL statements and SQLite3 commands.

You can view the available commands for SQLite using `.help`. Run this
now and look for the commands to

* View the list of tables
* View the table schema

Write down what you found. You'll need to use them in the next section.

Exit the CLI.

> Tip: If you can't remember the keyboard shortcut you can look again at the
> built-in documentation to see if there is a command for exiting the CLI.

<details>
<summary>Hint</summary>
https://sqlite.org/cli.html
</details>

## Step 2: Run `sqlite3` to explore a database

Start SQLite on a new database named __example.db__.

<details><summary>View the tables in the database by entering the command you found in Step 1.</summary><code>.tables</code></details>

<details><summary>View the schema of the database by entering the command you found in Step 1.</summary><code>.schema</code></details>

<details><summary>Think about it: Do you know why you don't find any tables or schema?</summary>Because the database is new and no tables have been created inside of the new database.</details>

Run the command `.read example.sql`. This will execute the SQL in the
__example.sql__ file.

Repeat the command for viewing the tables in the database. You should see

```plaintext
samples
```

Repeat the command for viewing the schema of the database. You should see

```plaintext
CREATE TABLE samples (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);
CREATE TABLE sqlite_sequence(name,seq);
```

Finally, run a simple query to see the data in the samples table by entering

```sql
SELECT * FROM samples;
```

This should show you

```plaintext
1|You found me!
2|Yippee!!
3|Yay!!!
```

## Step 3: Show the column names in the results

The SQLite3 CLI has configuration options that you can set, one of which is to
show the names of each of the columns in the rows of the query result.

<details><summary>Look for a command in the list of SQLite3 commands (<code>.help</code>) to turn on headers and execute it.</summary><code>.headers on</code></details>

Now, you should be able to see the names of the columns for any query result
returned in the SQLite3 CLI.

Run the same query in the previous step

```sql
SELECT * FROM samples;
```

This should show you the results with the names of the columns as the first row

```plaintext
id|name
1|You found me!
2|Yippee!!
3|Yay!!!
```

## Step 4: Exit the CLI

Use `Ctrl+d` to exit the cli.

Now your prompt should return to normal, which probably means it ends with "$"
or "%".

Congratulations! You have successfully used the SQLite3 CLI.
