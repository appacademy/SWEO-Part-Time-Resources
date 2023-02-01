# Practice: Polymorphic Associations

In this short practice, you will be implementing **Polymorphic Associations** in
**Sequelize**.

## Getting started

Download the starter. `cd` into __server__ folder, and install dependencies
using `npm install`.

Create a __server/.env__ file in order to store environment variables. Add a
variable `DB_FILE` with a value of `db/dev.db`. This will be the location where
the **SQLite3** database will be created (as specified in
__config/database.js__).

Run the migration using `dotenv npx sequelize db:migrate`. This should create
the database.

To verify, run `sqlite3 db/dev.db .schema`, and look for the `UserProfiles` and
`BlogPosts` tables.

If you encounter any errors or do not see the db file, go back and check that
your __.env__ file has been accurately set up.

## Project goal

The development team is asking for your help to make the `UserProfile`
and `BlogPost` models "Imageable" using
[Polymorphic Associations][sequelize-poly-assoc].

You will want to create an `Images` table that will belong to both the
`UserProfiles` table and the `BlogPosts` table.

Here is the database schema that describes the relationships between the tables:

![db-schema]

## Step 1: Create `Image` model and migration

Use the appropriate **Sequelize** command to create the model and migration for
an `Image` which stores a `url` string (required), as well as `imageableId` and
`imageableType`.

> Please remember to edit the migration to set the `defaultValue` for
> `createdAt` and `updatedAt`.

Verify by running the test for step 1: `npm test test/step-1-spec.js`

## Step 2: Add associations

First, modify the models for `UserProfile` and `BlogPost` to add the `hasMany`
association. Remember with **Polymorphic Associations** that `constraints` and
`scope` need to be set appropriately.

Second, modify the `Image` model to add the `belongsTo` associations. Remember
with **Polymorphic Associations** that `constraints` need to be turned off.

Verify by running the test for step 2: `npm test test/step-2-spec.js`

## Step 3: Support lazy loading

Add an abstraction method `getImageable()` to the `Image` model.

This should be placed inside the class. Depending on the value
of `this.imageableType`, it should call either `this.getBlogPost()`
or `this.getUserProfile()` (instance methods that Sequelize already created for
us on an `Image` class). If the type is unknown, it should resolve
the `Promise` with a `null` response.

Verify by running the test for step 3: `npm test test/step-3-spec.js`

## Step 4: Verify full solution

Use `npm run tests` to run all the tests.

Debug and adjust your code until all are passing.

[sequelize-poly-assoc]: https://sequelize.org/docs/v6/advanced-association-concepts/polymorphic-associations/
[db-schema]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/imageable-db-schema.png
[db-diagram-info]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/imageable-db-diagram-info.txt
