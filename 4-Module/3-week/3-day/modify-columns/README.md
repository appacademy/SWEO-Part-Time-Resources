# Practice: Sequelize Migrations to Modify Tables

In this short practice, you will be create **Sequelize** migrations to modify
existing tables. This practice will involve research.

## Getting started

Download starter.  

Execute the __setup-commands.sh__ script from the root directory of this
practice. View the contents of the script to see the commands that are executed,
and view the results in the terminal to confirm that setup was successful.

```shell
sh setup-commands.sh
```

Use `sequelize-cli` to run the existing migrations and seeder files. Use
`sqlite3` to check that `Colors`, `Cats`, and `Games` tables all exist in your
database and have seed data present.

The Express endpoints for this practice will not yield results from a database
but are included in order to demonstrate how to initialize Sequelize with an
existing server. This can be seen from the plaintext responses given by these
endpoints.

In future practices you will utilize routes in order to interact with a
connected database.


## Step 1: Add a column

Originally, your database only tracked the `name` and `weight` of `Cats`. You
want to additionally start tracking their `age`, as well, but you don't want to
lose any data from undoing migrations or seeders. It's always a good idea to
move forward with additional migrations than change previously implemented
versions, *especially* when you are working with other developers.

Use `sequelize-cli` and the `migration:generate` command to generate a new
migration called `add-age-to-cats`. Utilize the `queryInterface` to add a column
to the `Cats` table. This column should be called `age` and store floating-point
numbers. Be sure to include a corresponding action in the `down` key in order to
reverse your actions if the migration is undone.

Update the `Cat` model in __models/cat.js__ to include the new `age` attribute.

Run the migration and use `sqlite3` to check that the schema of the table now
includes this new column.

Insert a new record for a cat `Marcy`, weight `12.2`, age `4.5`. Check that this
record is now present in the table.

> Hint: The [QueryInterface documentation][queryInterface] is a great resource
> for all of the different methods available to you in a migration file.
> The [Sequelize Migration Skeleton documentation][migration-skeleton] can also
> be helpful in understanding the general structure of a migration file.


## Step 2: Add a column constraint

You realize that the `name` in your `Colors` table doesn't have a unique
constraint, allowing multiple entries of the same color.

Use `sequelize-cli` and the `migration:generate` command to generate a new
migration called `add-unique-constraint-to-color-names`. Utilize the
`queryInterface` to add a constraint on the `name` column of the `Colors` table.
This column should now be unique. Again, be sure to include a corresponding
action in the `down` key in order to reverse your actions if the migration is
undone.

> Hint: It will be helpful to provide a `name` for the constraint in the `up`
> action in order to reference it in `down`.

Run the migration and use `sqlite3` to check that the schema of the table now
includes this column constraint.

Insert a new record for a color `red`. This record should not be accepted since
the seeder file already inserted a color with this name.


## Step 3: Rename and remove columns

You've decided that the `numPlayers` can be confusing on your `Games` table,
since you are actually tracking the maximum number of players. You want to
change the name of this column to reflect this data more accurately. You've also
decided that the `estPlayTime` attribute is no longer needed and want to remove
the associated column from the table.

Use `sequelize-cli` and the `migration:generate` command to generate a new
migration called `rename-games-numPlayers-and-remove-estPlayTime`. Utilize the
`queryInterface` to perform two actions. First, rename the `numPlayers` column
to `maxPlayers`. Next, remove the `estPlayTime` column. Update the `Game` model
in __models/game.js__ to reflect these attribute changes.

Run the migration and use `sqlite3` to check that the schema of the table also
reflects these changes.

Think about why these changes in particular may be a dangerous action to perform
on your database.


## Congratulations!

You are now able to generate **Sequelize** migrations that modify existing
tables.


[queryInterface]: https://sequelize.org/master/class/src/dialects/abstract/query-interface.js~QueryInterface.html
[migration-skeleton]: https://sequelize.org/master/manual/migrations.html#migration-skeleton