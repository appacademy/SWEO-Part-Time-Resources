# Basic Phase 4: Another Seeder

In this phase, you will seed the database with ten of the smallest insects.

The information you need can be found on the Internet:

Nguyen, Tuan C. "The World's Smallest Insects." ThoughtCo, Aug. 27, 2020,
[thoughtco.com/smallest-insects-4161295][data-source].

## Generate seeder

In the terminal, use the **Sequelize CLI** to generate a new seeder. Name this
seed `smallest-insects`.

## Add seed data with `bulkInsert`

Open the new seed file in the folder __server/db/seeders__.

Implement the necessary code in the `up` function to insert these 10 insects
into the `Insects` table in the database.

Implement the code needed in the `down` function in order to remove the 10 insects
listed above from the database.

> Tip: You can start with 1 to verify you have the structure right. If you
> implement the `down` direction as you go then you can undo and redo the
> seeding as many times as you want.

A quick way to verify the data is in the database after seeding (or has been
removed when undoing a seed) is using a query with the **SQLite CLI**

```sh
sqlite3 db/dev.db "SELECT * FROM 'Insects';"
```

[data-source]: https://www.thoughtco.com/smallest-insects-4161295