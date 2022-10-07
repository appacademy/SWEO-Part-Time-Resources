# Practice: `JOIN` with Many-to-Many Relationships

Now, it's time to practice querying related data in many-to-many relationships.

## Getting started

Download the starter. `cd` into the __sql-practice__ folder.

Run SQLite on a database called __practice.db__.

In this practice, you will use these example table to make your queries:

![musicians-instruments-db-schema]

Seed data has been provided for each table as follows: 

Table `musicians`:

| `id` | `first_name` | `last_name` | `band_id` |
| ---- | ------------ | ----------- | --------- |
| 1    | Adam         | Appleby     | 1         |
| 2    | Anton        | Martinovic  | 1         |
| 3    | Wilson       | Holt        | 1         |
| 4    | Marine       | Sweet       | 2         |
| 5    | Georgette    | Kubo        | 2         |
| 6    | Aurora       | Hase        | 3         |
| 7    | Trenton      | Lesley      | 4         |
| 8    | Camila       | Nenci       | 4         |
| 9    | Rosemarie    | Affini      | 5         |
| 10   | Victoria     | Cremonesi   | 5         |

Table `instruments`:

| `id` | `type`    |
| ---- | --------- |
| 1    | piano     |
| 2    | guitar    |
| 3    | drums     |
| 4    | bass      |
| 5    | violin    |
| 6    | cello     |
| 7    | trumpet   |
| 8    | saxophone |

Table `musician_instruments`:

| `musician_id` | `instrument_id` |
| ------------- | --------------- |
| 1             | 1               |
| 1             | 2               |
| 2             | 1               |
| 2             | 4               |
| 3             | 6               |
| 4             | 8               |
| 5             | 3               |
| 5             | 7               |
| 5             | 8               |
| 6             | 5               |
| 6             | 6               |
| 7             | 1               |
| 8             | 1               |
| 9             | 1               |
| 9             | 5               |
| 10            | 5               |

### Create tables

Run the following SQLite command to create the `musicians`, `instruments` and 
`musician_instruments` tables, and insert the rows shown above.

```sql
.read seed-data.sql
```

> Remember: You can re-run this read command anytime you want to restore the 
> data you have deleted.

For the following steps, you should execute the SQL command in the SQLite3 CLI,
but you can create and use a `.sql` file to to formulate the command.

## Step 1: `SELECT` the result of a joined table

Run the SQL command that joins the `musicians` and `instruments` tables together, 
`SELECT`ing both the first name of the musician and the type of instrument.

> Tip: You may need to have multiple `JOIN` statements.

## Step 2: Filter a query across a joined table

Run the SQL command that selects the first and last name of each musician that 
plays the piano.

## Congratulations!

You are now able to query and filter a query across tables in a many-to-many 
relationship!


[musicians-instruments-db-schema]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-10/musicians-instruments-db-schema.png
[musicians-instruments-db-diagram-info]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-10/musicians-instruments-db-diagram-info.txt