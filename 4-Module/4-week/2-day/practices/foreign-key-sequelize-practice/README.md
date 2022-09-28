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
been created for you. Run `npm run test-one-to-many` in your terminal to test
the association. You should encounter no errors and the output below each test 
should match the indicated expectation. In future practices you will test these 
associations by interacting with these models yourself.


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
to and that you are connecting through the `MusicianInstrument` model.

To test that the associations have been implemented correctly, a test file has 
been created for you. Run `npm run test-many-to-many` in your terminal to test
the association. You should encounter no errors and the output below each test 
should match the indicated expectation. In future practices you will test these 
associations by interacting with these models yourself.

## Congratulations!

You are now able to create migrations and models in **Sequelize** that utilize 
foreign keys, creating both one-to-many and many-to-many associations.

[onDelete-hooks]: https://sequelize.org/master/manual/hooks.html#one-to-one-and-one-to-many-associations