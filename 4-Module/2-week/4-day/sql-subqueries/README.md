# Practice: SQL Subqueries

In this practice, you will be executing SQL commands with at least one subquery.

## Set up

`cd` into the __sql-practice__ folder.

Run `npm install` to install the dependencies.

Execute the file __build-db.sql__ in the terminal to build the database,
and populate it with seed data.

```shell
sqlite3 example.db ".read build-db.sql"
```

In the _sql-practice_ folder, create a file called _subqueries.sql_ to hold your
work. Run the file on the created database to complete the phases below.

## Prepare

The tables are structured as follows...

`cats` Table:

| column     | type    | constraints |
| ---------- | ------- | ----------- |
| id         | INTEGER | PRIMARY KEY |
| name       | TEXT    |             |
| birth_year | INTEGER |             |

`toys` Table:

| column | type    | constraints                     |
| ------ | ------- | ------------------------------- |
| id     | INTEGER | PRIMARY KEY                     |
| name   | TEXT    |                                 |
| cat_id | INTEGER | FOREIGN KEY REFERENCES cats(id) |

Represented in a schema diagram:

![cats-toys-db-schema]

Run a few queries using the command line (CLI) to see the `cats` and `toys`
provided in the seed data.

Use a `JOIN` query to explore their relationship.

Exit the `sqlite3` command line.

## Phase 1: Replace `JOIN` query with subquery

Write a JOIN query to get the list of toys belonging to Garfield.

Rewrite the JOIN query using a subquery instead.

## Phase 2: Dynamic `INSERT` using subquery

Give Garfield a new toy named "Pepperoni" using a subquery for Garfield's id.

Verify the insertion worked using one of the queries above.

<details>
<summary>Tip #1</summary>
If you place the <code>INSERT</code> between the <code>JOIN</code> query and the subquery, you'll "automatically" have before-and-after testing.
</details>

<details>
<summary>Tip #2</summary>
You can write additional text to the screen using <code>SELECT</code> to return a constant. (Research this online if you're not sure how to do it.)
</details>

<details>
<summary>Tip #3</summary>
You can put multiple <code>.read</code> commands in the same shell command for faster testing (e.g. rebuild from seed data followed by subqueries).
<pre><code class="language-shell">sqlite3 example.db ".read build-db.sql" ".read subqueries.sql"</code></pre>
</details>


[cats-toys-db-schema]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-10/cats-toys-db-schema.png
[cats-toys-db-diagram-info]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-10/cats-toys-db-diagram-info.txt