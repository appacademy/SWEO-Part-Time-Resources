# Practice: `JOIN` with One-to-Many Relationships

Now, it's time to practice querying related data in one-to-many relationships.

## Getting started

Download the starter. `cd` into the __sql-practice__ folder.

Run SQLite on a database called __practice.db__.

In this practice, you will use these example table to make your queries:

![bands-albums-db-schema]

Seed data has been provided for each table as follows: 

Table `bands`:

| `id` | `name`            |
| ---- | ----------------- |
| 1    | The Falling Box   |
| 2    | America The Piano |
| 3    | Loved Autumn      |
| 4    | Playin Sound      |
| 5    | The King River    |

Table `albums`:

| `id` | `title`            | `band_id` | `year` | `num_sold` |
| ---- | ------------------ | --------- | ------ | ---------- |
| 1    | The Falling Box    | 1         | 2015   | 25000      |
| 2    | Again              | 1         | 2018   | 30000      |
| 3    | The End            | 1         | 2020   | 120000     |
| 4    | The Prelude        | 2         | 2020   | 60000      |
| 5    | Bases Loaded       | 2         | 2021   | 75000      |
| 6    | One                | 3         | 2018   | 55000      |
| 7    | Two                | 3         | 2020   | 80000      |
| 8    | Three?             | 3         | 2021   | 17000      |
| 9    | Back To The Middle | 4         | 2019   | 12000      |
| 10   | Where We Go        | 4         | 2020   | 63000      |
| 11   | The King River     | 5         | 2017   | 85000      |
| 12   | Under Water        | 5         | 2020   | 106000     |
| 13   | Another Fork       | 5         | 2021   | 140000     |

### Create table

Run the following SQLite command to create the `bands` and `albums` tables, and 
insert the rows shown above.

```sql
.read seed-data.sql
```

> Remember: You can re-run this read command anytime you want to restore the 
> data you have deleted.

For the following steps, you should execute the SQL command in the SQLite3 CLI,
but you can create and use a `.sql` file to to formulate the command.

## Step 1: `SELECT` the result of a joined table

Run the SQL command that joins the `bands` and `albums` tables together, 
`SELECT`ing both the name of the band and the album title.

## Step 2: Filter a query across a joined table

Run the SQL command that selects the name of each band that has an album with 
fewer than `20,000` sales.

## Congratulations!

You are now able to query and filter a query across tables in a one-to-many 
relationship!


[bands-albums-db-schema]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-10/bands-albums-db-schema.png
[bands-albums-db-diagram-info]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-10/bands-albums-db-diagram-info.txt