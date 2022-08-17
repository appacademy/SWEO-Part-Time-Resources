# Practice: Combining Express and Sequelize

In this short practice, you will be adding **Sequelize** to an **Express**
server.

## Getting started

Download starter. `cd` into __server__ folder, and install dependencies using
`npm install`.

The Express endpoints for this practice will not yield results from a database but
are included in order to demonstrate how to initialize Sequelize with an
existing server. This can be seen from the plaintext responses given by these
endpoints.

In future practices, you will utilize routes in order to interact with a
connected database. This practice will guide you through that initial connection
process.

## Step 1: Add the necessary packages

In the terminal, install dependencies for `sqlite3`, `dotenv`, `dotenv-cli`, and
`sequelize` and `sequelize-cli`, following the directions below.

- `dotenv-cli` and `sqlite3` should be installed as _development-only_ dependencies (using the command `npm install -D`).
- `dotenv`, `sequelize`, and `sequelize-cli` should be installed as dependencies for development and production.


## Step 2: Use `.sequelizerc` to configure Sequelize initialization

Create __server/.sequelizerc__ for your application.

Add the following code to the file:

```js
const path = require("path");

module.exports = {
  config: path.resolve("config", "database.js"),
  "models-path": path.resolve("db", "models"),
  "seeders-path": path.resolve("db", "seeders"),
  "migrations-path": path.resolve("db", "migrations"),
};
```

The object being exported from the __.sequelizerc__ file configures how
Sequelize will initialize itself in your application. This object is instructing
Sequelize to create a __config/database.js__ file to store the configuration
details for how it will connect to a database. The other keys in this object are
instructing Sequelize where to create directories for the `models`, `seeders`,
and `migrations` for the application.


## Step 3: Initialize Sequelize within the application

Utilize the `sequelize-cli` executable in order to initialize Sequelize using
the following command:

```powershell
npx sequelize init
```

After this process is complete, you should see the directories and files that
were defined in __.sequelizerc__ have been created.


## Step 4: Customize the `config/database.js` file

Open the __config/database.js__ file that was created. This file has the default
configuration for how Sequelize will attempt to connect to a database.

Replace the contents of this file with the following custom configuration:

```js
module.exports = {
  development: {
    storage: process.env.DB_FILE,
    dialect: "sqlite",
    seederStorage: "sequelize",
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    // logging: false
  },
};
```

You are only working with Sequelize in development at this point, so the `test`
and `production` keys have been removed.

The `storage` key is instructing Sequelize where to look for the database. This
configuration is utilizing an environment variable `DB_FILE` which will need to
be created in the next step.

The `dialect` key is telling Sequelize what type of database it is connecting
to.

The `seederStorage` key will allow Sequelize to track which seed files have been
run in the database, allowing for easier seeding and unseeding.

The `benchmark` key will log the time it takes for Sequelize to execute each
query that is run.

The `logQueryParameters` key will log the values used as parameters in the SQL
queries that it generates. Without this key Sequelize will log the queries with
the `"$1"`, `"$2"`, etc., placeholders, similar to the `?` seen in the SQL
queries you have previously written.

The `typeValidation` key will prevent values from being inserted into the
database that do not have the same type as described in the model (`integer`,
for instance). This enforces a model-level validation for these data types.

Finally, the `logging` key in this configuration is commented out. By default it
has a value of `console.log`, meaning each SQL query that is generated and run
by Sequelize will be printed to the terminal with the `console.log` statement. A
`false` is commented out here as a reminder that this functionality can be
disabled or overwritten with a different function if desired, something which
may occasionally be helpful in debugging Express applications in order to clean
up the console.


## Step 5: Create a `.env` file

Create a __server/.env__ file in order to store environment variables.

Add a variable `DB_FILE` with a value of `db/dev.db`. This will be the location
that the **SQLITE** database will be created in (as was specified in
__config/database.js__).

This file may grow in the future in order to accommodate any other environment
variables needed by the server.


## Step 6: Verify the configuration

In order to make sure that Sequelize was configured successfully, try running a
migration on the database. This can be accomplished with the following:

```bash
npx dotenv sequelize db:migrate
```

At this point in time, Sequelize will attempt to connect to the database (or
create the file if it does not exist) and run any migration files that have not
yet been run. Since no migration files exist, this command will simply create
the database. You should see the output similar to the following:

```bash
Loaded configuration file "config/database.js".
Using environment "development".
Executed (default): SELECT 1+1 AS result
Executed (default): SELECT name FROM `sqlite_master` WHERE type='table' and
name!='sqlite_sequence';
Executed (default): CREATE TABLE IF NOT EXISTS `SequelizeMeta` (`name`
VARCHAR(255) NOT NULL UNIQUE PRIMARY KEY);
Executed (default): PRAGMA INDEX_LIST(`SequelizeMeta`)
Executed (default): PRAGMA INDEX_INFO(`sqlite_autoindex_SequelizeMeta_1`)
Executed (default): SELECT `name` FROM `SequelizeMeta` AS `SequelizeMeta` ORDER
BY `SequelizeMeta`.`name` ASC;
No migrations were executed, database schema was already up to date.
```

You should also now see that a __db/dev.db__ file created. If you encounter any
errors or do not see this file, go back and check that your configuration files
have been accurately customized.


## Congratulations!

You are now able to add Sequelize to an Express application and successfully
communicate with a SQLite database.