# Sequelize-4 Practice Assessment

**Note:** To read this in a rendered view, open your VS Code Command Palette
(using Control+Shift+P on Windows, Command+Shift+P on macOS) and choose
"Markdown: Open Preview" or "Markdown: Open Preview to Side".

In this assessment, you are asked to add Sequelize onto an existing Express
application. You will be asked to:

* Make relationships and associations using Sequelize
* Eager load associated data
* Order query results

Use the technologies you have used up to this point. They are all listed in
the **package.json** for your convenience.

* Express.js
* Sequelize
* Sequelize CLI
* SQLite3
* DotENV
* nodemon (for development purposes)

Do not add or remove any dependencies already listed in the **package.json**.

You **DO NOT** need to run `npx sequelize-cli init` to initialize Sequelize as
it is already done for you. The **.sequelizerc** file describes the Sequelize
configuration for this application.

## Getting started

Download the starter from the Download link at the bottom of this page.

Run `npm install` to install the dependencies listed in the last section.

Run `npm test` to run the all the test specs at any given time.

Create a **.env** file at root-level of your project and copy the contents of
the **.env.example** file into the newly created **.env** file.

Run the migration files (Do **not** run the seed files yet). Take a look at the
migration and model files to familiarize yourself with the data of this
application.

## Making edits to the files

**Do not** make edits to the **existing** migration and seed files. You can
create more migration files, but you cannot edit the existing migration files.

All edits you make to these files will be reset when you submit your project.
So, make sure the test specs still pass even after those files are reset.

You can reset your edits to the original migration and seed files by running the
following command:

```bash
npm run reset-files
```

## Database Schema

Currently, the existing migration files in this project will create a database
schema that follows this diagram:

![db-schema-without-relationships]

**Create new migration files** that will change the database schema to turn the
current schema into this second diagram.

![db-schema-with-relationships]

Here are some other important information to implement in your database schema
that isn't shown in the diagram:

* The `currentTeamId` column on the `Players` table **CAN be `NULL`**
* The `sportId` column on the `Teams` table **CANNOT be `NULL`**
* When a `Fan` entry is deleted, all the related `DraftPicks` table entries
  should **automatically** be deleted

**Make sure to update the models** to reflect the database schema changes and
create the appropriate associations while going through the rest of this
project.

Run the seeds to make sure that the migration and model files are good enough
to continue onto the API specs. You **should not move on** until all the seeds
are successfully seeded.

Change the database schema by doing **one or more of the following**:

* Creating new migration files
* Updating the existing model files
* Creating new model files

Do not change the database schema by:

* Updating the existing migration files

**Important Note**: You must create new migrations to implement the
relationships. Any changes to the existing migration files will be reset when
you submit your assessment.

The seed files are not testing whether or not your migration
and model files are correctly implemented. You may still need to make
changes to them depending on the instructions to come.

## API Specs

There are `4` phases where you will have to implement or fix API endpoints
on the server defined in the **app.js** file.

Run `npm test` to make sure you pass all the tests.

- Phase 4 - Fans and Teams (CRUD with Associations)
- Phase 5 - Teams (Eager Loading)
- Phase 6 - Sports and Teams (Ordering)
- BONUS Phase (Optional)


## Submission

1. Delete the **node_modules** directory from your project
2. Zip your project
3. Submit the zip folder

[db-schema-without-relationships]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/assessments/practice-db-schema-without-relationships.png
[db-schema-with-relationships]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/assessments/practice-db-schema-with-relationships.png