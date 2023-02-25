# Long Practice: Express/Sequelize In The Real World

A common purpose for an application is to answer one or more questions for a
business. Along the way, the application's users will manage the data
needed to answer those question(s).

In this project, you will help the development team to complete various features
using **Sequelize** in an **Express** application. At this time, only an API
is required, so all of the routes will return **JSON** responses.

## About this application

Welcome to the team! Thank you for assisting with the API development to help
the customer answer their burning question:

> What order do I need to place for school supplies this year?

The application designers have determined that we can answer this question from
the list of supplies needed for each classroom, and the students assigned to
that classroom. The challenge is that the supplies and student assignments
change up to the last moment before the order is placed. (In fact, the needs
change after, and the customer has agreed to handle these cases outside of this
application.)

A small amount of progress has been made so far

* Sequelize models and migrations are in place for the database
* Seeders were created for seed data to use during the development phase
* Express application runs with basic routes for CRUD operations

Review this diagram to understand the database structure.

![Student-Classroom-Supply-db-schema]

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

Verify that the __db/dev.db__ file was created. If you encounter any errors or
do not see this file, go back and check that your __.env__ file has been
accurately set up.

Verify the tables exist by checking its `schema` using the **SQLite3 CLI**.

Run the appropriate seed command using the **Sequelize CLI**.

Verify the tables have the seeded data using the **SQLite3 CLI**.

### Run the application

Start the **Express** server in development mode using

```sh
npm run dev
```

In your browser, load the root path:
[http://localhost:8000/][localhost]

If all is working correctly, you should see
`{"message":"API server is running"}`.

In your browser, add __counts__ to the path:
[http://localhost:8000/counts][localhost-counts]

This is a special API to verify how many records are in the database.
If all is working correctly, you should see the following structure with these
numbers:

```json
{
  "classroomCount": 22,
  "studentCount": 267,
  "supplyCount": 363
}
```

## Phases

This project has been broken down into phases. Complete as much as you can in
the time allotted. You can complete any remaining phases for additional practice
during assessment prep.

If you get stuck, try moving on to the next phase for now, then come back later
in the project to complete or improve your code. Also, you can formulate good
questions, and reach out to your instructors for help.

* Basic Phase 1: Order Query Results
  * `GET /students`
  * `GET /classrooms`
  * `GET /supplies/category/:categoryName`
* Basic Phase 2: Pagination
  * `GET /students`
* Basic Phase 3: Aggregation with Pagination
  * `GET /students`
* Basic Phase 4: Search Filters
  * `GET /students`
* Basic Phase 5: Aggregation
  * `GET /classrooms/:id`
* Intermediate Phase 6: Search Filters
  * `GET /classrooms`
* Intermediate Phase 7: Order Query Results by Association
  * `GET /classrooms/:id`
* Advanced Phase 8: Order Query Results by Association
  * `GET /supplies/category/:categoryName`
  * `GET /students`
* Advanced Phase 9: Aggregation
  * `GET /classrooms`
* Advanced Phase 10: To Aggregate or Not to Aggregate
  * `GET /supplies/scissors/calculate`
* Advanced Phase 11: Pagination Middleware

## References

You may refer to your previous work, the [Sequelize documentation][docs], the
documentation for [Sequelize CLI][cli-docs], or online resources to assist you
in completing this practice.

Good luck! You can do it!!!

[Student-Classroom-Supply-db-schema]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/practices/Student-Classroom-Supply-db-schema.png
[Student-Classroom-Supply-db-diagram-info]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/practices/Student-Classroom-Supply-db-diagram-info.txt

[localhost]: http://localhost:8000/
[localhost-counts]: http://localhost:8000/counts

[docs]: https://sequelize.org/master/manual/getting-started.html#new-databases-versus-existing-databases

[cli-docs]: https://github.com/sequelize/cli
