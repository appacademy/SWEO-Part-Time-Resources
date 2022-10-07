# Basic Phase 1: Database Seeded Through .sql File

When working on an application that has both SQL and Express, it is a good idea
to start writing code for the schema and seed data for the database. These SQL
statements can be saved in an __.sql__ file, then loaded into a database any
time. Not only does this make it easier to bring new developers onto the team,
but it also makes it super easy to reset to a working database.

In this phase, you will write your code in the __server/seed-data.sql__ file.

## Phase 1A: DROP and Create table(s)

Begin by dropping the table, if it exists, so re-running the database seeding
will work without errors.

In this project, you need just one table named `trees` with the following
columns:

1. `id` which is an `INTEGER` that auto increments and serves as the
   `PRIMARY KEY`
2. `tree` which holds up to 32 characters (the name of the tree)
3. `location` which holds up to 64 characters (description the location of each
   tree)
4. `height_ft` which is a number (height of the tree in feet)
5. `ground_circumference_ft` which is also a number (the distance around the
base of the tree in feet)

Write the proper SQL statement to `CREATE` a table named `trees` with the
columns specified above.

## Phase 1B: INSERT records

Start off the database with five of the largest Sequoia trees. Write one or more
`INSERT` statements to put these records into the `trees` table.

| `id` | `tree`          | `location`                 | `height_ft` | `ground_circumference_ft` |
| ---- | --------------- | -------------------------- | ----------- | ------------------------- |
| 1    | General Sherman | Sequoia National Park      | 274.9       | 102.6                     |
| 2    | General Grant   | Kings Canyon National Park | 268.1       | 107.5                     |
| 3    | President       | Sequoia National Park      | 240.9       | 93.0                      |
| 4    | Lincoln         | Sequoia National Park      | 255.8       | 98.3                      |
| 5    | Stagg           | Private Land               | 243.0       | 109.0                     |

OPTIONAL: If you would like to add more trees, you can use the list provided by 
the [National Park Service][nps].

## Seed the database

Run `sqlite3` on the database __app.db__.

Run the appropriate SQLite command to **read** the `seed-data.sql` file.

Verify the seeding worked by `SELECT`ing all rows and all columns in the
`trees` table using the **SQLite CLI**.

Debug and fix any errors before moving to the next phase.

[nps]: https://www.nps.gov/seki/learn/nature/largest-trees-in-world.htm