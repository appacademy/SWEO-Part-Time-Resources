# Express-SQL 3 Practice Assessment - Pagination And Search Filtering

Welcome to the Sequelize Pagination and Search Filtering Practice Assessment!

In this assessment, you will

* Paginate query results
* Apply search filters on query results

Your objective is to pass all test specs. Each spec is worth 1 point.

* __Total Possible Points:__ 12 points

You will have **45 minutes** to complete the assessment.

## General instructions and tips

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

## Resources

For this assessment, you are allowed to use the following resources:

* [a/A curriculum on Canvas][canvas]
* [MDN]
* A whiteboard or paper to work out problems/code, but it must be within camera
  range
* VS Code or a console for coding, testing, and experimentation
* Node
* Postman (when useful)
* Official documentation, including:
  * [ExpressJS]
  * [SQLite3]
  * [Sequelize]
* Previously written code you wrote yourself
  * Except for code from previous assessment submissions
* Comments within code
  * If there are comments in your code about your specific code and about what
    your code is doing, that is appropriate. If your comments are about concepts
    and based on the readings, then that counts as notes. Those would not be
    appropriate.

You are **NOT** allowed to refer to any other resources, including--but not
limited to--other websites (e.g., StackOverflow), communication apps (e.g.,
Slack, Discord), search engines, notes, or code from previous assessment
submissions.

[canvas]: https://appacademy.instructure.com/
[ExpressJS]: http://expressjs.com/
[SQLite3]: https://www.sqlite.org/docs.html
[Sequelize]: https://sequelize.org/docs/v6/

## Getting started

1. Clone this starter repo and open it in VS Code.
2. Run `npm install` in the root directory.
3. Create a **.env** file at root-level of your project and copy the contents of
   the **.env.example** file into the newly created **.env** file.
4. Run the migration and seed files. Take a look at the migration and model
   files to familiarize yourself with the data of this application.
5. Run `npm test` to run all the test specs.

To remove the extra logging in the terminal when you run the test specs, comment
in the `logging: false` line in the __config/database.js__ file.

## Resetting migration, model, and seed files

Feel free to make edits to the migration, model, and seed files. All edits you
make to these files will be reset when you submit your project. So, make sure
the test specs still pass even after those files are reset.

You can reset your edits to the migration and model files by running the
following command:

```bash
npm run reset-files
```

## Database schema

Currently, the migrations in this project will create a database schema
that follows this diagram:

![db-schema-without-relationships]

## Players (Search Filters and Pagination)

The `GET /players` endpoint should be paginated and have search filters for a
`Player`'s `firstName` and `number` attributes.

Run `npm test test/search-filter-pagination-spec` to make sure you pass all the specs in this
phase.

**IMPORTANT:**

Look at the __routes/players.js__ file. The endpoint is already implemented for
you. However, there is something wrong with the `firstName` and `number` search
filter. Debug and make it work according to the following specifications.

### `firstName` Search Filter

The `GET /players` endpoint should be able to accept a search filter for
`firstName` and return results that have a `firstName` attribute matching
the search filter.

If the `firstName` search filter is `'Aaron'`, then only the `Player`s with
a `firstName` attribute value of `'Aaron'` should be returned.

If the first character of the `firstName` search filter is lowercase, then only
the `Player`s with a `firstName` attribute matching the capitalized version of
the search filter should be returned.

For example, after migrating and seeding the database, a request to
`GET /players?firstName=Aaron` **OR** `GET /players?firstName=aaron` should
filter the results to look something like this:

```json
{
    "players": [
        {
            "id": 2,
            "firstName": "Aaron",
            "lastName": "Judge",
            "number": 99,
            "isRetired": false,
            "currentTeamId": 3,
            "createdAt": "2022-04-21T19:16:09.731Z",
            "updatedAt": "2022-04-21T19:16:09.731Z"
        },
        {
            "id": 10,
            "firstName": "Aaron",
            "lastName": "Rodgers",
            "number": 12,
            "isRetired": false,
            "currentTeamId": 9,
            "createdAt": "2022-04-21T19:16:09.739Z",
            "updatedAt": "2022-04-21T19:16:09.739Z"
        }
    ]
}
```

If the `firstName` filter is defined but an empty string, then return a `400`
error response with a `errors` property in the body of the response.

For example, a request to `GET /players?firstName=` should return a `400`
response with a body that looks like:

```json
{
    "errors": [
        {
            "message": "firstName filter should not be empty"
        }
    ]
}
```

### `number` Search Filter

The `GET /players` endpoint should be able to accept a search filter for
`number` and return results that have a `number` attribute matching
the search filter.

If the `number` search filter is `12`, then only the `Player`s with
a `number` attribute value of `12` should be returned.

For example, after migrating and seeding the database, a request to
`GET /players?number=12` should filter the results to look something
like this:

```json
{
    "players": [
        {
            "id": 10,
            "firstName": "Aaron",
            "lastName": "Rodgers",
            "number": 12,
            "isRetired": false,
            "currentTeamId": 9,
            "createdAt": "2022-04-21T19:16:09.739Z",
            "updatedAt": "2022-04-21T19:16:09.739Z"
        },
        {
            "id": 11,
            "firstName": "Tom",
            "lastName": "Brady",
            "number": 12,
            "isRetired": false,
            "currentTeamId": 10,
            "createdAt": "2022-04-21T19:16:09.740Z",
            "updatedAt": "2022-04-21T19:16:09.740Z"
        }
    ]
}
```

If the `number` filter is defined but not a number or is less than 0, then
return a `400` error response with an `errors` property in the body of the
response.

For example, a request to `GET /players?numbers=hello` **OR**
`GET /players?number=-1` should return a `400` response with a body that looks
like:

```json
{
    "errors": [
        {
            "message": "number filter should be a number greater or equal to 0"
        }
    ]
}
```

### Pagination

After making sure the search filters are working as intended, implement
pagination on the query results of `GET /players` according to the following
specifications.

A request to `GET /players?page=3&size=2` should show the `2` players after the
first `4` players in the database under a property of `players` and should
return the `page` and `size` as properties.

The return should look something like this:

```json
{
    "players": [
        {
            "id": 5,
            "firstName": "LeBron",
            "lastName": "James",
            "number": 6,
            "isRetired": false,
            "currentTeamId": 7,
            "createdAt": "2022-04-21T19:16:09.734Z",
            "updatedAt": "2022-04-21T19:16:09.734Z"
        },
        {
            "id": 6,
            "firstName": "Anthony",
            "lastName": "Davis",
            "number": 3,
            "isRetired": false,
            "currentTeamId": 7,
            "createdAt": "2022-04-21T19:16:09.735Z",
            "updatedAt": "2022-04-21T19:16:09.735Z"
        }
    ],
    "page": 3,
    "size": 2
}
```

If `page` **IS NOT** a number and **IS NOT** greater than `0`, then the
`page` parameter should default to `1`.

If `size` **IS NOT** a number and **IS NOT** greater than `0`, then the
`size` parameter should default to `2`.

For example, a request to `GET /players` **OR**
`GET /players?page=hello&size=world` should return something like:

```json
{
    "players": [
        {
            "id": 1,
            "firstName": "Harry",
            "lastName": "Maguire",
            "number": 5,
            "isRetired": false,
            "currentTeamId": 1,
            "createdAt": "2022-04-21T19:16:09.730Z",
            "updatedAt": "2022-04-21T19:16:09.730Z"
        },
        {
            "id": 2,
            "firstName": "Aaron",
            "lastName": "Judge",
            "number": 99,
            "isRetired": false,
            "currentTeamId": 3,
            "createdAt": "2022-04-21T19:16:09.731Z",
            "updatedAt": "2022-04-21T19:16:09.731Z"
        }
    ],
    "page": 1,
    "size": 2
}
```

The `size` parameter should have a maximum of `10`. If the `size` parameter is
greater than `10`, then the `size` should be set and limited to `10`.

## Submission (ONLY FOR ACTUAL ASSESSMENT)

> The following are the submission instructions for the actual assessment. They
> will not work for submitting the practice assessment but are printed here so
> you can familiarize yourself with them.

When you are ready to submit:

1. Run `npm test` to re-run all of the tests.

2. Fix any syntax errors that cause the tests to crash. **If a test crashes
   or the tests fail to complete their run, you will receive a 0 for the coding
   portion of this assessment.** You can fail specs, but all the tests have to
   be able to finish running.

   **Tip:** If you run out of time to debug, just comment out any code that is
   causing your programs to crash.

3. Add, commit, and push your changed files:

   ```sh
   git add .
   git commit -m "Finish the assessment (or some such descriptive message)"
   git push
   ```

   **Note:** The first time you run `git push`, git will tell you to run a more
   complete version of the command:

   ```sh
   git push --set-upstream origin <your branch>
   ```

You can run tests, `add` files, and `commit` files as often as you wish, but
only your first **two pushes** will be graded. (If for some reason you need more
than two pushes, you must plead your case to an Instructor.)

[MDN]: https://developer.mozilla.org/en-US/
[db-schema-without-relationships]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/assessments/practice-db-schema-without-relationships.png
