- Do we use the model file or the migration file to create the tables that we want?
  - Migration files should handle table creation, creating schema of the database, etc.


- What is the correct naming convention for a Sequelize table with a 2 word name like this: `cool users`
  - `CoolUsers`
    - cammel case with plural table name


- `T/F`: we can only create one table at a time in a migration file
  - FALSE, the `up` and `down` properties are just functions that allow us to do many things, create as many tables as we want, add/remove columns, etc.