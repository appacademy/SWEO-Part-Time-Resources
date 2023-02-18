# Long Practice: Sequelize Foundations

In this long practice, you will be adding **Sequelize** to an **Express**
server, creating a model, and seeding the database.

## Getting started

Download the starter. `cd` into __server__ folder, and install dependencies
using `npm install`.

Create a __server/.env__ file in order to store environment variables. Add a
variable `DB_FILE` with a value of `db/dev.db`. This will be the location where
the **SQLITE** database will be created (as specified in
__config/database.js__).

To save you some time, the starter includes __server/.sequelizerc__,
__server/config/database.js__, and __server/db/__ with __migrations__,
__models__, and __seeders__. This means **Sequelize** has already been
initialized.

Run the migration using the appropriate `sequelize` command. This should create
the (empty) database. If successful, it will end with
`No migrations were executed, database schema was already up to date.` and you
should now see that the __db/dev.db__ file was created.

> Remember: You'll need `dotenv` before `npx` in order to set the
> environment variable for the database file location.

If you encounter any errors or do not see the db file, go back and check that
your __.env__ file has been accurately set up. Then rerun the migration.

## Phases

This project has been broken down into phases. Complete as much as you can in
the time allotted. You can complete any remaining work for additional practice
during assessment prep.

If you get stuck, you can formulate good questions, and reach out to your
instructors for assistance.

## References

You may refer to your previous work, the [Sequelize documentation][docs], the
documentation for [Sequelize CLI][cli-docs], or online resources to assist you
in completing this practice.

[localhost]: http://localhost:5000/
[docs]: https://sequelize.org/master/manual/getting-started.html#new-databases-versus-existing-databases
[cli-docs]: https://github.com/sequelize/cli/blob/main/README.md
