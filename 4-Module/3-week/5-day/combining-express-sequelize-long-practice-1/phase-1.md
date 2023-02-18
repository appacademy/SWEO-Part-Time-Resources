# Basic Phase 1: Model And Migration

In this phase, you will create a table named `Trees` with its corresponding
model (`Tree`) in Sequelize.

## Generate migration and model

Use the **Sequelize CLI** to create a model named `Tree` with the following
attributes:

* String `tree`
* String `location`
* Float `heightFt`
* Float `groundCircumferenceFt`

## Add constraints and validations

Add the following database constraints and/or model validations:

* `tree` attribute cannot be empty
* `tree` attribute must be unique
* `heightFt` should have a minimum value of zero (0)
* `groundCircumferenceFt` should have a minimum value of zero (0)
* `createdAt` should have a default value of the database's CURRENT_TIMESTAMP
* `updatedAt` should have a default value of the database's CURRENT_TIMESTAMP

> Tip: You can use the built-in **Sequelize** literal `CURRENT_TIMESTAMP` for
> the date defaults.

Open the migration file (in __server/db/migrations/__) and the model file (in
__server/db/models/__). Manipulate the migration file to add database
constraints. Manipulate the model file to add model validations.

Verify the `up` and `down` migrations look correct, and the table name is
`Trees`.

## Run the migration

Just like you ran the migration to create the database (using the **Sequelize
CLI**), you can now run the new migration you've created.

> Remember: You'll need `dotenv` after `npx` in order to set the
> environment variable for the database file location.

If all goes well, the last line of output should say "migrated" followed by the
time it took to execute.

If you see errors, check your edits to the migration and the model, then try
again.

## Verify the table exists

Use the SQLite CLI to verify the table exists with the specified constraints:

```sh
sqlite3 db/dev.db ".schema Trees"
```

You should see something like the following (line breaks may vary):

```plaintext
CREATE TABLE `Trees` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT, 
  `tree` VARCHAR(255) NOT NULL UNIQUE, 
  `location` VARCHAR(255), 
  `heightFt` FLOAT, 
  `groundCircumferenceFt` FLOAT, 
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

## Verify the validations

Run the provided tests using:

```sh
npm test test/phase-1-spec.js
```

Each of the 7 tests should pass. If not please check the migration (for
constraints) or model (for validations), and make the appropriate corrections.
