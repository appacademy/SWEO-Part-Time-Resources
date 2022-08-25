# Long Practice: Using Sequelize In Express Routes

In this long practice, you will be using **Sequelize** in an **Express** server 
to run migrations, seed the database, and connect `GET`, `PUT`, `DELETE` and 
`UPDATE` routes to their appropriate database operations.

This project parallels one you completed in SQL. Hopefully through this process,
you'll develop a better appreciation for the power of **Sequelize** to simplify
database operations.

## Getting started

Download the starter. `cd` into __server__ folder, and install dependencies
using `npm install`.

Create a __server/.env__ file in order to store environment variables. Add a
variable `DB_FILE` (which is already in use in __server/config/database.js__).
You can model the __.env__ file after __.env.example__, specifying the location 
of the database to be created.

Notice that the starter includes __server/.sequelizerc__ and 
__server/config/database.js__, as well as __migrations__, __models__, and 
__seeders__ in the __server/db__ folder.

### Migrations and seeders

Run the appropriate `migrate` command using the **Sequelize CLI** to create the 
database and the table(s) specified in the existing migrations.

> Remember: You'll need `dotenv` before `npx` in order to set the
> environment variable for the database file location.

Verify that the __db/dev.db__ file was created. If you encounter any
errors or do not see this file, go back and check that your __.env__ file has 
been accurately set up.

Verify the table exists by checking its `schema` using the **Sqlite CLI**.

Run the appropriate seed command using the **Sequelize CLI**.

Verify the table has data using the **Sqlite CLI**.

### Run the application

Start the **Express** server in development mode using 

```sh
npm run dev
```

In your browser or **Postman**, load the root path: 
[http://localhost:5000/][localhost]

If all is working correctly, you should see
`{"message":"API server is running"}`.

## Phases

This project has been broken down into phases. Complete as much as you can in
the time allotted. You can complete any remaining phases for additional practice
during assessment prep.

If you get stuck, try moving on to the next phase for now, then come back later
in the project to complete or improve your code. Also, you can formulate good
questions, and reach out to your instructors for help.

## References

You may refer to your previous work, the [Sequelize documentation][docs], the
documentation for [Sequelize CLI][cli-docs], or online resources to assist you
in completing this practice.

Good luck! You can do it!!!


[localhost]: http://localhost:5000/
[docs]: https://sequelize.org/master/manual/getting-started.html#new-databases-versus-existing-databases
[cli-docs]: https://github.com/sequelize/cli
