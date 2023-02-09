# Sequelize Search Filter and Pagination Assessment

**Note:** To read this in a rendered view, open your VS Code Command Palette
(using Control+Shift+P on Windows, Command+Shift+P on macOS) and choose
"Markdown: Open Preview" or "Markdown: Open Preview to Side".

In this assessment, you are asked to add Sequelize onto an existing Express
application. You will be asked to:

* Paginate query results
* Apply search filters on query results

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

Run the migration and seed files. Take a look at the migration and model files
to familiarize yourself with the data of this application.

## Resetting Migration, Model, and Seed Files

Feel free to make edits to the migration, model, and seed files. All edits you
make to these files will be reset when you submit your project. So, make sure
the test specs still pass even after those files are reset.

You can reset your edits to the migration and model files by running the
following command:

```bash
npm run reset-files
```

## Database Schema

Currently, the migrations in this project will create a database schema
that follows this diagram:

![db-schema-without-relationships]


## API Specs

Run `npm test` to make sure you pass all the tests.

## Players (Search Filters and Pagination)

The `GET /players` endpoint should be paginated and have search filters for a
`Player`'s `firstName` and `number` attributes.

Run `npm test test/phase-7-spec` to make sure you pass all the specs in this
phase.

**IMPORTANT INSTRUCTIONS**:

Take a look at the __routes/players.js__ file. The endpoint is already
implemented for you. However, there is something wrong with the `firstName`
and `number` search filter. Debug and make it work according to the following
specifications.

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


## Submission

1. Delete the **node_modules** directory from your project
2. Zip your project
3. Submit the zip folder

[db-schema-without-relationships]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/assessments/practice-db-schema-without-relationships.png
[db-schema-with-relationships]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/assessments/practice-db-schema-with-relationships.png