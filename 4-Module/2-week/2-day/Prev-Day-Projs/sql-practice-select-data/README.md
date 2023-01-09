# Practice: SELECT Data

Now, it's time to practice selecting data in a database table using SQL.

## Getting started

Download the starter. `cd` into the folder named __sql-practice__.

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

## Step 1: Select all rows, all columns

Run the SQL command that returns the entire table - that is, all rows and all
columns.

## Step 2: Select specific columns

Run the SQL command that returns the name, age and weight of each puppy.

## Step 3: Select one row by its primary key

Run the SQL command that returns the name, age and weight for the puppy with an 
`id` of `5`.

## Step 4: Select rows matching a specific value

Run the SQL command that returns the name, age and weight for each puppy that has
been `microchipped`.

> Tip: Remember that SQLite stores a `BOOLEAN` value as an `INTEGER` where 
> `1` means `TRUE` and `0` means `FALSE`.

## Step 5 INTERMEDIATE: Select rows greater than a value

Any column can be used in a query. Run the SQL command that will return the name,
age and weight of all large puppies, meaning those over 25 pounds (lbs).

> Tip: On numeric columns (`INTEGER` and `REAL`), SQL uses comparison operators
> similar to JavaScript (e.g. `>`, `>=`, `<`, `<=`).

## Step 6 ADVANCED: Select rows with multiple criteria

Run the SQL command to query for all large puppies with a microchip.

> Tip: Like JavaScript, SQL has a way to combine conditionals using logical
> statements such as `AND`, `OR` and `NOT`.

## Congratulations!

You are now able to query data in a database using the SQL `SELECT` statement 
with and without a `WHERE` clause.
