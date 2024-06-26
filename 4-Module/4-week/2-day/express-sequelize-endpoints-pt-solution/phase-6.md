# Intermediate Phase 6: Updating Foreign Key References in Seed Data

In this phase, you will generate seed data for the insects seen at each tree.

The scientists say that the __Western Pygmy Blue Butterfly__ was seen at the
biggest trees EXCEPT __President__, and the __Patu Digua Spider__ was only found
near __Stagg__, so far.

For additional practice, you can pretend to be a scientist and decide
which other insects were found near which trees.

## Create seeder

Run the **Sequelize CLI** command to create a new seeder named
`starter-insect-tree`.

Open the seeder file for editing.

## Build seed data

Seed the `InsectTree` join table by connecting the following insect to a tree.

| Insect `name`                | Tree `tree`     |
| ---------------------------- | --------------- |
| Western Pygmy Blue Butterfly | General Sherman |
| Western Pygmy Blue Butterfly | General Grant   |
| Western Pygmy Blue Butterfly | Lincoln         |
| Western Pygmy Blue Butterfly | Stagg           |
| Patu Digua Spider            | Stagg           |

* Modify the `up` function to insert the seed data.
* Modify the `down` function to remove the seed data.
* Use the __Sequelize CLI__ to run the seeder.
* Verify the `InsectTrees` records exist using the __SQLite3 CLI__.

## Break the foreign key references

Now, let's try experimenting with the seed data.

Delete the database and re-migrate it. __DO NOT SEED YET.__

Then, in the __SQLite3 CLI__, create the following `Insects` record in the
database.

| `name`         | `description`            | `fact`                                | `territory`               | `millimeters` |
| -------------- | ------------------------ | ------------------------------------- | ------------------------- | ------------- |
| Leafcutter Ant | Rust to dark-brown color | Their life expectancy is 10-15 years. | South and Central America | 10            |

Also, create the following `Trees` record in the database.

| `tree`        | `location`           | `heightFt` | `groundCircumferenceFt` |
| ------------- | -------------------- | ---------- | ----------------------- |
| Kapok         | Arenal National Park | 200        | 50                      |
| Indian Rubber | Southeast Asia       | 100        | 105                     |

Then, try re-seeding all the data.

Check the database to make sure that the seed data for `InsectTrees` was
inserted correctly by running the following command in the __SQLite3 CLI__.

```sql
SELECT 'Insects'.name, 'Trees'.tree
FROM 'Insects'
JOIN 'InsectTrees' on 'Insects'.id = 'InsectTrees'.insectId
JOIN 'Trees' on 'Trees'.id = 'InsectTrees'.treeId;
```

This command will output the name of the insect and the tree it is connected to
through the `InsectTrees` table.

Does the output match the expected connections that the `InsectTrees` seeder
data is supposed to be creating?

Fix the seeder file so that it creates the expected connections.

Run  `npm test test/phase-06-spec.js` from the __server__ directory to check
that all mocha tests for this phase are passing.

__Reflection__: Take some time to reflect on what you just did. What did you
have to change to make the seeder file work as intended? Why did you have to do
that? Would you have to change the seeder file again if the database had no
initial data and you tried to seed all the seeder files again?

## Challenge: Dynamic seeding

How do you think you can set up the seeder files to depend on the existing data
in the database records so that you the `InsectTrees` seeder file makes the
correct connections independent of existing data in the database is?

There are several ways to approach this problem! Here are some tips.

> Tip: Code and verify incrementally:
> * Start with a subset of the seed data in the constant, run the seeder,
    > and verify it worked.
> * Then undo the seed, add more data, and rerun the seeder. Verify again.
> * Repeat until all seed data is working.
>
> Fewer lines of code leaves less room for typos or errors, and speeds up
> debugging since you can focus just a few changes since it the last working
> version.

If you get stuck on a particular item, comment it out and move on. You can come
back to it later in this practice.

If you have an error you can't solve after reasonable debugging and research,
formulate a question, and reach out to your instructors.

Run `npm test test/challenge/phase-06-challenge-spec.js` from the __server__
directory to check that all mocha tests for this phase are passing.
