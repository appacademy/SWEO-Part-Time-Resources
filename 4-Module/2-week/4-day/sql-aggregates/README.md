# Practice: SQL Aggregate Functions

In this project, you will be executing SQL commands with aggregate functions.

## Set up

`cd` into the __sql-practice__ folder.

Run `npm install` to install the dependencies.

Execute the file __build-db.sql__ in the terminal to build the database,
and populate it with seed data.

```shell
sqlite3 dev.db ".read build-db.sql"
```

In the _sql-practice_ folder, create a file called _aggregates.sql_ to hold your
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

## Step 1: `COUNT`

Write a query to determine the number of cats stored in the database.

## Step 2: `MIN` / `MAX`

Write a query for the oldest cat, and the year it was born.

Write a query for the youngest cat, and the year it was born.

> Hint: Think about how birth_year relates to age.

Consider this... Can you query for both cats in one simple `SELECT`? (Spend only
a minute or two. Writing a query may help.)


[cats-toys-db-schema]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-10/cats-toys-db-schema.png
[cats-toys-db-diagram-info]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-10/cats-toys-db-diagram-info.txt