# Basic Phase 2: Creating Tables

In this phase, you will create tables in SQLite3.

## Database Schema

From phase 1, your database schema should look like the following:

`owners` Table:

| column     | type    | constraints |
| ---------- | ------- | ----------- |
| id         | INTEGER | PRIMARY KEY |
| first_name | TEXT    |             |
| last_name  | TEXT    |             |

`cats` Table:

| column     | type    | constraints |
| ---------- | ------- | ----------- |
| id         | INTEGER | PRIMARY KEY |
| name       | TEXT    |             |
| birth_year | INTEGER |             |

`cat_owners` Table (joins table between `cats` and `owners`):

| column   | type    | constraints                       |
| -------- | ------- | --------------------------------- |
| cat_id   | INTEGER | FOREIGN KEY REFERENCES cats(id) |
| owner_id | INTEGER | FOREIGN KEY REFERENCES owners(id)   |

`toys` Table:

| column | type    | constraints                     |
| ------ | ------- | ------------------------------- |
| id     | INTEGER | PRIMARY KEY                     |
| name   | TEXT    |                                 |
| cat_id | INTEGER | FOREIGN KEY REFERENCES cats(id) |

Verify that your schema looks like the above.

## `CREATE TABLE`

Use the database schema above to create all the tables in the
`sql-practice/phase-2.sql` file.

At the bottom of the file, you will see some seed data for all the tables.

Once you are finished, add it to a database using SQLite3 called `practice.db`

You can run the file by executing it in the terminal:

```shell
sqlite3 practice.db ".read phase-2.sql"
```

Examine the tables created in the created database, `sql-practice/practice.db`.
You should see all the tables and columns created correspond to the database
schema above.