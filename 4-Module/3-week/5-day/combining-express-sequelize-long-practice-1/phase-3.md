# Basic Phase 3: Another Model and Migration

In this phase, you will create a table named `Insects` with its corresponding
model (`Insect`) in Sequelize.

## Generate migration and model

Use the **Sequelize CLI** to create a model named `Insect` with the following
attributes:

* String `name`
* String `description`
* String `territory`
* String `fact`
* Float `millimeters`

## Add constraints and validations

Add the following constraints / validations:

* `name` attribute cannot be empty
* `name` attribute must be unique
* `name` attribute should be Title Cased (capitalize each word)
* `fact` attribute must have a maximum of 240 characters
* `millimeters` attribute cannot be empty
* `millimeters` should have a minimum value of zero (0)
* `createdAt` should have a default value
* `updatedAt` should have a default value

> Tip: You've done this before, so copy and paste might make this faster.

## Run the migration

Now, run this new migration.

If all goes well, the last line of output should say "migrated" followed by the
time it took to execute.

If you see errors, check your edits to the migration and the model, then try
again.

## Verify the table exists

Use the SQLite CLI to verify the table exists with the specified constraints:

```sh
sqlite3 db/dev.db ".schema Insects"
```

You should see something like the following (line breaks may vary):

```plaintext
CREATE TABLE `Insects` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT, 
  `name` VARCHAR(255) NOT NULL UNIQUE, 
  `description` VARCHAR(255), 
  `fact` VARCHAR(240), 
  `territory` VARCHAR(255), 
  `millimeters` FLOAT NOT NULL, 
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

## Verify the validations

Run the provided tests using

```sh
npm test test/phase-3-spec.js
```

Each of the 7 tests should pass. If not please check the migration (for
constraints) or model (for validations), and make the appropriate corrections.
