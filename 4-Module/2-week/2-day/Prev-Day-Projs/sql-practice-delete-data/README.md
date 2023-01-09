# Practice: DELETE Data

Now, it's time to practice the SQL command to delete data from a table.

## Getting started

Download the starter. `cd` into the __sql-practice__ folder.

Run SQLite on a database called __practice.db__.

In this practice, you will use this example table to make your queries:

Table `puppies`:

| `id` | `name`   | `age_yrs` | `breed`             | `weight_lbs` | `microchipped` |
| ---- | -------- | --------- | ------------------- | ------------ | -------------- |
| 1    | Cooper   | 1         | Miniature Schnauzer | 18           | 1              |
| 2    | Indie    | 0.5       | Yorkshire Terrier   | 13           | 1              |
| 3    | Kota     | 0.7       | Australian Shepherd | 26           | 0              |
| 4    | Zoe      | 0.8       | Korean Jindo        | 32           | 1              |
| 5    | Charley  | 1.5       | Basset Hound        | 25           | 0              |
| 6    | Ladybird | 0.6       | Labradoodle         | 20           | 1              |
| 7    | Callie   | 0.9       | Corgi               | 16           | 0              |
| 8    | Jaxson   | 0.4       | Beagle              | 19           | 1              |
| 9    | Leinni   | 1         | Miniature Schnauzer | 25           | 1              |
| 10   | Max      | 1.6       | German Shepherd     | 65           | 0              |

### Create table

Run the following SQLite command to create the `puppies` table, and insert the
rows shown above.

```sql
.read seed-data.sql
```

> Remember: You can re-run this read command anytime you want to restore the 
> data you have deleted.

## Step 1: Delete one row by primary key

Delete the puppy with an `id` of `9`.

> Tip: Before deleting, write a `SELECT` statement with the `WHERE` clause you 
> want to use. Then simply replace `SELECT *` with `DELETE`.

## Step 2: Delete several rows with matching condition

Delete all puppies which are __NOT__ `microchipped`.

> Remember: SQLite uses `0` for `FALSE` and `1` for `TRUE`.

## Step 3: Final result

If all `DELETE`s worked as expected, you will see the following data when you 
run `SELECT * FROM puppies;`.

| `id` | `name`   | `age_yrs` | `breed`             | `weight_lbs` | `microchipped` |
| ---- | -------- | --------- | ------------------- | ------------ | -------------- |
| 1    | Cooper   | 1         | Miniature Schnauzer | 18           | 1              |
| 2    | Indie    | 0.5       | Yorkshire Terrier   | 13           | 1              |
| 4    | Zoe      | 0.8       | Korean Jindo        | 32           | 1              |
| 6    | Ladybird | 0.6       | Labradoodle         | 20           | 1              |
| 8    | Jaxson   | 0.4       | Beagle              | 19           | 1              |

## Congratulations!

You are now able to create delete one or more rows from a database table using 
SQL `DELETE` command!
