# Practice: Intermediate `SELECT`ing of Data

Now, it's time to practice more advanced `SELECT` queries in SQL.

## Getting started

Download the starter. `cd` into the __sql-practice__ folder.

Run SQLite on a database called __practice.db__.

In this practice, you will use this example table to make your queries:

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

Run the following SQLite command to create the `albums` table, and insert the
rows shown above.

```sql
.read seed-data.sql
```

> Remember: You can re-run this read command anytime you want to restore the 
> data you have deleted.

For the following steps, you should execute the SQL command in the SQLite3 CLI,
but you can create and use a `.sql` file to to formulate the command.

## Query 1: `SELECT` with a comparison operator

Run the SQL command that returns the albums that have sold at least `100,000`
copies.

## Query 2: `SELECT` matching a range of values

Run the SQL command that returns the albums released between `2018` and `2020`.

## Query 3: `SELECT` for attributes matching a list of values

Run the SQL command that returns the albums with `band_id`s of either `1`, `3`, 
or `4`.

## Congratulations!

You are now able to perform more advanced querying with `SELECT` clauses!