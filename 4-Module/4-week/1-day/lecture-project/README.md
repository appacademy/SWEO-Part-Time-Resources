# Practice: Foreign Keys in Sequelize Migrations

In this short practice, you will be using **Sequelize** to make migrations that
utilize foreign keys and associated data.

## Getting started

Download starter.

Execute the __setup-commands.sh__ script from the root directory of this
practice.

```shell
sh setup-commands.sh
```

View the contents of the script to see the commands that are executed. View the
results in the terminal to confirm that setup was successful in creating the
`Bands`, `Instruments`, and `Musicians` tables in your database.

The Express endpoints for this practice will not yield results from a database
but are included in order to demonstrate how to initialize Sequelize with an
existing server. This can be seen from the plaintext responses given by these
endpoints.

In future practices you will utilize routes in order to interact with a
connected database.

## Step 1: One-to-Many

You currently have a `Musicians` table in your database that tracks the first
and last names of musicians. You would like to be able to associate each
musician with a `Band`. Each musician is a member of one band, but a band can
have multiple musicians. How is this type of relationship represented in a
SQL database?

A migration already exists for creating a basic `Musicians` table. In order to
associate the `Musician` records with a `Band`, however, you will need to also
store a foreign key. If a `Musician` belongs to one `Band` and a `Band` can have
many `Musicians`, where does the foreign key need to go?

Generate a new migration named `add-bandId-to-musicians`. In this migration you
will need to create a new column for the `Musicians` table called `bandId` with
the following constraints. Be sure to indicate that this attribute references
the model with table name `Bands`. When a band is deleted, the associated
musicians should also be removed from the database:

| attribute | type    | constraints                                                   |
| --------- | ------- | ------------------------------------------------------------- |
| bandId    | integer | NOT NULL, FOREIGN KEY REFERENCES Bands(id), ON DELETE CASCADE |

After adding in the foreign key, update the `Musician` model to include the
`bandId` attribute. Update each model in this relationship to have an
appropriate association. Specify which model has a `hasMany` association and
which model has a `belongsTo` association. For each side of this association
indicate which model you are connecting to and which foreign key is making the
connection. In the `hasMany` association, indicate that you would like deleting
this record to cascade the deletion to associated records.

> Hint: More information about using `onDelete` in a model association can be
> found in the [Sequelize documentation about hooks][onDelete-hooks]

To test that the associations have been implemented correctly, a test file has
been created for you. Run `npm test test/01-one-to-many-spec.js` in the
__server__ directory to test the association. The first three tests should pass
if you have set up the associations correctly.

Next, run `node demo/01-one-to-many.js` from within the __server__ directory
This will run the script found in the __server/demo/01-one-to-many.js__ file.
Read the code in the script to understand what is happening when the script
executes. Look in the console to confirm:

- the structure of Adam's musician record, with associated band data
- all musician data includes Adam (before deleting the band)
- deleting Adam's band deletes Adam

> Note: If you are getting an error running the script, make sure you ran
> `sh setup-commands.sh` in the __root__ directory. Then make sure you are in
> __server__ directory to run the script, `node demo/01-one-to-many.js`.

## Step 2: Many-to-Many

In addition to associating `Musicians` with `Bands`, you would also like to keep
track of which `Instruments` each `Musician` plays. A `Musician` can play many
`Instruments` and an `Instrument` can be played by multiple `Musicians`, so you
will need to model a many-to-many association. How do you model this type of
association in a SQL database?

Foreign keys need to be stored for each side of this relationship, meaning you
will need to create a join table that stores this data.

Generate a migration and a model for a `MusicianInstrument`. Include attributes
for both necessary foreign keys. In the migration file, indicate which tables
each key is referencing.

In both models of this relationship, `Instruments` and `Musicians`, create a
`belongsToMany` association. Be sure to indicate which model you are connecting
to, and that you are connecting through the `MusicianInstrument` model. In addition, explicitly define the `foreignKey`, and `otherKey` properties within the `belongsToMany` associations for each model.

To test that the associations have been implemented correctly, a test file has
been created for you. Run `npm test test/02-many-to-many-spec.js` in the
__server__ directory to test the association. All tests should pass if you have
set up the associations correctly.

Next, run `node demo/02-many-to-many.js` from within the __server__ directory
This will run the script found in the __server/demo/02-many-to-many.js__ file.
Read the code in the script to understand what is happening when the script
executes. Look in the console to confirm:

- that Georgette and Marine are associated with the saxophone
- that the drums, saxophone, and trumpet are associated with Georgette
- that instruments associated by the musicians of a band can be accessed through the band itself

## Congratulations!

You are now able to create migrations and models in **Sequelize** that utilize
foreign keys, creating both one-to-many and many-to-many associations.

## Submission

Submit your work.

1. Delete the `node_modules` folder in the __server__ directory
2. Zip up the project folder
3. Submit the zip file

[onDelete-hooks]: https://sequelize.org/master/manual/hooks.html#one-to-one-and-one-to-many-associations
