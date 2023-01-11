# Practice: DELETE CASCADE

Now, it's time to practice the effects of `ON DELETE CASCADE`.

## Getting started

Download the starter. `cd` into the __sql-practice__ folder.

Run SQLite on a database called __practice.db__.

In this practice, you will use these example tables to make your queries:

![bands-musicians-db-schema]

Seed data has been provided for each table as follows: 

Table `bands`:

| `id` | `name`            |
| ---- | ----------------- |
| 1    | The Falling Box   |
| 2    | America The Piano |
| 3    | Loved Autumn      |
| 4    | Playin Sound      |
| 5    | The King River    |

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

### Create tables

Run the following SQLite command to create the `bands` and `musicians` tables,
and insert the rows shown above.

```sql
.read music.sql
```

> Remember: You can re-run this read command anytime you want to restore the 
> data you have deleted.

## Step 1: Delete without `CASCADE`

Try to delete the band with an `id` of `1`.

> You should see an error. Does this error make sense?

## Step 2: Add `CASCADE`

Alter __music.sql__ to cascade the deletion of bands onto related musicians. Use
the `.read music.sql` command to reread your updated table definitions.

> Tip: You'll need three keywords added on to your `FOREIGN KEY`.

## Step 3: Delete a band

Attempt the same deletion of the band with `id` of `1`.

If the `DELETE` worked as expected, you will see the following data when you 
run `SELECT * FROM musicians;`.

| `id` | `first_name` | `last_name` | `band_id` |
| ---- | ------------ | ----------- | --------- |
| 4    | Marine       | Sweet       | 2         |
| 5    | Georgette    | Kubo        | 2         |
| 6    | Aurora       | Hase        | 3         |
| 7    | Trenton      | Lesley      | 4         |
| 8    | Camila       | Nenci       | 4         |
| 9    | Rosemarie    | Affini      | 5         |
| 10   | Victoria     | Cremonesi   | 5         |

Can you explain why this result is expected?

## Congratulations!

You are now able to cascade deletion of related data using `ON DELETE CASCADE`!


[bands-musicians-db-schema]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-10/bands-musicians-db-schema.png
[bands-musicians-db-diagram-info]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-10/bands-musicians-db-diagram-info.txt