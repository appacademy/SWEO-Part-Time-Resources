# Basic Phase 2: Seeder

In this phase, you will seed the database with five of the largest Sequoia
trees:

| `id` | `tree`          | `location`                 | `heightFt` | `groundCircumferenceFt` |
| ---- | --------------- | -------------------------- | ---------- | ----------------------- |
| 1    | General Sherman | Sequoia National Park      | 274.9      | 102.6                   |
| 2    | General Grant   | Kings Canyon National Park | 268.1      | 107.5                   |
| 3    | President       | Sequoia National Park      | 240.9      | 93.0                    |
| 4    | Lincoln         | Sequoia National Park      | 255.8      | 98.3                    |
| 5    | Stagg           | Private Land               | 243.0      | 109.0                   |

OPTIONAL: If you would like to add more trees, you can use the list provided by
the [National Park Service][nps].

## Generate seeder

In the terminal, use the **Sequelize CLI** to generate a new seeder. Name this
seed `biggest-trees`.

> Remember: You'll need `dotenv` before `npx` in order to set the
> environment variable for the database file location.

## Add seed data with `bulkInsert`

Open the new seed file in the folder __server/db/seeders__.

Implement the necessary code in the `up` function to insert these 5 trees into
the `Trees` table in the database.

```javascript
[
    {
        tree: 'General Sherman',
        location: 'Sequoia National Park',
        heightFt: 274.9,
        groundCircumferenceFt: 102.6
    },
    {
        tree: 'General Grant',
        location: 'Kings Canyon National Park',
        heightFt: 268.1,
        groundCircumferenceFt: 107.5
    },
    {
        tree: 'President',
        location: 'Sequoia National Park',
        heightFt: 240.9,
        groundCircumferenceFt: 93
    },
    {
        tree: 'Lincoln',
        location: 'Sequoia National Park',
        heightFt: 255.8,
        groundCircumferenceFt: 98.3
    },
    {
        tree: 'Stagg',
        location: 'Private Land',
        heightFt: 243,
        groundCircumferenceFt: 109
    },
]
```

### Execute and verify the insertion

Run the **Sequelize CLI** command to seed the database.

A quick way to verify the data is in the database is using a query with the
**SQLite CLI**

```sh
sqlite3 db/dev.db "SELECT * FROM 'Trees';"
```

## Allow undoing with `bulkDelete`

Implement the code needed in the `down` function in order to remove the 5 trees
listed above from the database.

### Execute and verify the removal

Run the undo command using the **Sequelize CLI**.

A quick way to verify the data has been removed from the database is using the
query in **SQLite CLI** again (`sqlite3 db/dev.db "SELECT * FROM 'Trees';"`).

[nps]: https://www.nps.gov/seki/learn/nature/largest-trees-in-world.htm
