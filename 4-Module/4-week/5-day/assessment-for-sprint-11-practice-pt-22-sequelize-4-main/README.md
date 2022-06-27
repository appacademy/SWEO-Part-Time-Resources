# Sequelize-4 Assessment

**Note:** To read this in a rendered view, open your VS Code Command Palette
(using Control+Shift+P on Windows, Command+Shift+P on macOS) and choose
"Markdown: Open Preview" or "Markdown: Open Preview to Side".

In this assessment, you are asked to add Sequelize onto an existing Express
application. You will be asked to:

* Make relationships and associations using Sequelize
* Eager load associated data
* Paginate query results
* Apply search filters on query results
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

Create new migrations that will change the database schema to turn the current
schema into this second diagram.

![db-schema-with-relationships]

Here are some other important information to implement in your database schema
that isn't shown in the diagram:

* The `currentTeamId` column on the `Players` table **CAN be `NULL`**
* The `sportId` column on the `Teams` table **CANNOT be `NULL`**
* When a `Fan` entry is deleted, all the related `DraftPicks` table entries
  should **automatically** be deleted

Make sure to update the models to reflect the database schema changes and create
the appropriate associations while going through the rest of this project.

## API Specs

There are `4` phases where you will have to implement or fix API endpoints
on the server defined in the **app.js** file.

Run `npm test` to make sure you pass all the tests.

## Phase 4 - Fans

Run `npm test test/phase-4-spec` to make sure you pass all the specs in this
phase.

### GET /fans/:fanId/drafts

The `GET /fans/:fanId/drafts` endpoint should return all the `Player`s that the
`Fan` specified by `fanId` is associated with.

For example, a request to `GET /fans/2/drafts` should return something like
this (`DraftPick` property on each `Player` is not needed):

```json
[
    {
        "id": 8,
        "firstName": "Paul",
        "lastName": "George",
        "number": 13,
        "isRetired": false,
        "currentTeamId": 8,
        "createdAt": "2022-04-21T19:16:09.737Z",
        "updatedAt": "2022-04-21T19:16:09.737Z",
        "DraftPick": {
            "fanId": 2,
            "playerId": 8,
            "createdAt": "2022-04-21T19:16:09.756Z",
            "updatedAt": "2022-04-21T19:16:09.756Z",
            "FanId": 2,
            "PlayerId": 8
        }
    },
    {
        "id": 14,
        "firstName": "Kevin",
        "lastName": "Durant",
        "number": 7,
        "isRetired": false,
        "currentTeamId": 5,
        "createdAt": "2022-04-21T19:16:09.742Z",
        "updatedAt": "2022-04-21T19:16:09.742Z",
        "DraftPick": {
            "fanId": 2,
            "playerId": 14,
            "createdAt": "2022-04-21T19:16:09.757Z",
            "updatedAt": "2022-04-21T19:16:09.757Z",
            "FanId": 2,
            "PlayerId": 14
        }
    },
    {
        "id": 6,
        "firstName": "Anthony",
        "lastName": "Davis",
        "number": 3,
        "isRetired": false,
        "currentTeamId": 7,
        "createdAt": "2022-04-21T19:16:09.735Z",
        "updatedAt": "2022-04-21T19:16:09.735Z",
        "DraftPick": {
            "fanId": 2,
            "playerId": 6,
            "createdAt": "2022-04-21T19:16:09.758Z",
            "updatedAt": "2022-04-21T19:16:09.758Z",
            "FanId": 2,
            "PlayerId": 6
        }
    },
    {
        "id": 15,
        "firstName": "Kyrie",
        "lastName": "Irving",
        "number": 11,
        "isRetired": false,
        "currentTeamId": 5,
        "createdAt": "2022-04-21T19:16:09.743Z",
        "updatedAt": "2022-04-21T19:16:09.743Z",
        "DraftPick": {
            "fanId": 2,
            "playerId": 15,
            "createdAt": "2022-04-21T19:16:09.760Z",
            "updatedAt": "2022-04-21T19:16:09.760Z",
            "FanId": 2,
            "PlayerId": 15
        }
    }
]
```

### DELETE /fans/:id

The `DELETE /fans/:id` endpoint should delete the `Fan` specified by `id` which
should also trigger a cascade deletion of all its associated `DraftPick`s.

For example, a request to `DELETE /fans/2` should delete the `Fan` specified by
`id` from the database and the `DraftPick`s with `id`s of `8`, `14`, `6`, and
`15`. Make sure to use cascade deletion in the database schema to achieve this
instead of manually finding and deleting the `DraftPick`s. The endpoint should
return something like this:

```json
{
  "message": "Successfully deleted"
}
```

## Phase 5 - Eager Loading

Run `npm test test/phase-5-spec` to make sure you pass all the specs in this
phase.

### GET /sports/:name

The `GET /sports/:name` endpoint should return the `Sport` specified by its
`name` and all its associated `Team`(s).

For example, a request to `GET /sports/Basketball` should return something like
this:

```json
{
    "id": 3,
    "name": "Basketball",
    "createdAt": "2022-04-21T19:16:09.694Z",
    "updatedAt": "2022-04-21T19:16:09.694Z",
    "Teams": [
        {
            "id": 5,
            "name": "Brooklyn Nets",
            "homeCity": "New York City",
            "sportId": 3,
            "createdAt": "2022-04-21T19:16:09.717Z",
            "updatedAt": "2022-04-21T19:16:09.717Z"
        },
        {
            "id": 6,
            "name": "New York Knicks",
            "homeCity": "New York City",
            "sportId": 3,
            "createdAt": "2022-04-21T19:16:09.719Z",
            "updatedAt": "2022-04-21T19:16:09.719Z"
        },
        {
            "id": 7,
            "name": "Los Angeles Lakers",
            "homeCity": "Los Angeles",
            "sportId": 3,
            "createdAt": "2022-04-21T19:16:09.720Z",
            "updatedAt": "2022-04-21T19:16:09.720Z"
        },
        {
            "id": 8,
            "name": "Los Angeles Clippers",
            "homeCity": "Los Angeles",
            "sportId": 3,
            "createdAt": "2022-04-21T19:16:09.721Z",
            "updatedAt": "2022-04-21T19:16:09.721Z"
        }
    ]
}
```

### GET /teams/:id

The `GET /teams/:id` endpoint should return the `Team` specified by its
`id` and all its associated `Sport`(s) and `Player`(s).

For example, a request to `GET /teams/7` should return something like this:

```json
{
    "id": 7,
    "name": "Los Angeles Lakers",
    "homeCity": "Los Angeles",
    "sportId": 3,
    "createdAt": "2022-04-21T19:16:09.720Z",
    "updatedAt": "2022-04-21T19:16:09.720Z",
    "Sport": {
        "id": 3,
        "name": "Basketball",
        "createdAt": "2022-04-21T19:16:09.694Z",
        "updatedAt": "2022-04-21T19:16:09.694Z"
    },
    "Players": [
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
        },
        {
            "id": 7,
            "firstName": "Russell",
            "lastName": "Westbrook",
            "number": 0,
            "isRetired": false,
            "currentTeamId": 7,
            "createdAt": "2022-04-21T19:16:09.736Z",
            "updatedAt": "2022-04-21T19:16:09.736Z"
        }
    ]
}
```

### GET /players/:id

The `GET /players/:id` endpoint should return the `Player` specified by its
`id` and its associated `Team` as a property of `CurrentTeam`.

For example, a request to `GET /players/1` should return something like this:

```json
{
    "id": 1,
    "firstName": "Harry",
    "lastName": "Maguire",
    "number": 5,
    "isRetired": false,
    "currentTeamId": 1,
    "createdAt": "2022-04-21T19:16:09.730Z",
    "updatedAt": "2022-04-21T19:16:09.730Z",
    "CurrentTeam": {
        "id": 1,
        "name": "Manchester United",
        "homeCity": "Manchester",
        "sportId": 1,
        "createdAt": "2022-04-21T19:16:09.710Z",
        "updatedAt": "2022-04-21T19:16:09.710Z"
    }
}
```

If a `Player` is retired, then the `CurrentTeam` property for that response
should be `null`.

For example a request to `GET /players/3` should return something like this:

```json
{
    "id": 3,
    "firstName": "Babe",
    "lastName": "Ruth",
    "number": 3,
    "isRetired": true,
    "currentTeamId": null,
    "createdAt": "2022-04-21T19:16:09.732Z",
    "updatedAt": "2022-04-21T19:16:09.732Z",
    "CurrentTeam": null
}
```

## Phase 6 - GET /players

The `GET /players` endpoint should be paginated and have search filters for a
`Player`'s `firstName` and `number` attributes.

Run `npm test test/phase-6-spec` to make sure you pass all the specs in this
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

## Phase 7 - Ordering

Run `npm test test/phase-7-spec` to make sure you pass all the specs in this
phase.

### GET /sports

The `GET /sports` endpoint should return all the `Sport`s ordered by `name`
in **reverse** alphabetical order.

After migrating and seeding the database, the endpoint should return the
something like this:

```json
[
    {
        "id": 1,
        "name": "Soccer",
        "createdAt": "2022-04-21T19:16:09.694Z",
        "updatedAt": "2022-04-21T19:16:09.694Z"
    },
    {
        "id": 3,
        "name": "Basketball",
        "createdAt": "2022-04-21T19:16:09.694Z",
        "updatedAt": "2022-04-21T19:16:09.694Z"
    },
    {
        "id": 2,
        "name": "Baseball",
        "createdAt": "2022-04-21T19:16:09.694Z",
        "updatedAt": "2022-04-21T19:16:09.694Z"
    },
    {
        "id": 4,
        "name": "American Football",
        "createdAt": "2022-04-21T19:16:09.694Z",
        "updatedAt": "2022-04-21T19:16:09.694Z"
    }
]
```

### GET /teams

The `GET /teams` endpoint should return all the `Team`s ordered first by
by `homeCity` alphabetically then by `name` in **reverse** alphabetical order.

After migrating and seeding the database, the endpoint should return the
something like this:

```json
[
    {
        "id": 12,
        "name": "New England Patriots",
        "homeCity": "Boston",
        "sportId": 4,
        "createdAt": "2022-04-21T19:16:09.727Z",
        "updatedAt": "2022-04-21T19:16:09.727Z"
    },
    {
        "id": 4,
        "name": "Boston Red Sox",
        "homeCity": "Boston",
        "sportId": 2,
        "createdAt": "2022-04-21T19:16:09.715Z",
        "updatedAt": "2022-04-21T19:16:09.715Z"
    },
    {
        "id": 9,
        "name": "Green Bay Packers",
        "homeCity": "Green Bay",
        "sportId": 4,
        "createdAt": "2022-04-21T19:16:09.723Z",
        "updatedAt": "2022-04-21T19:16:09.723Z"
    },
    {
        "id": 2,
        "name": "Liverpool FC",
        "homeCity": "Liverpool",
        "sportId": 1,
        "createdAt": "2022-04-21T19:16:09.712Z",
        "updatedAt": "2022-04-21T19:16:09.712Z"
    },
    {
        "id": 7,
        "name": "Los Angeles Lakers",
        "homeCity": "Los Angeles",
        "sportId": 3,
        "createdAt": "2022-04-21T19:16:09.720Z",
        "updatedAt": "2022-04-21T19:16:09.720Z"
    },
    {
        "id": 8,
        "name": "Los Angeles Clippers",
        "homeCity": "Los Angeles",
        "sportId": 3,
        "createdAt": "2022-04-21T19:16:09.721Z",
        "updatedAt": "2022-04-21T19:16:09.721Z"
    },
    {
        "id": 1,
        "name": "Manchester United",
        "homeCity": "Manchester",
        "sportId": 1,
        "createdAt": "2022-04-21T19:16:09.710Z",
        "updatedAt": "2022-04-21T19:16:09.710Z"
    },
    {
        "id": 3,
        "name": "New York Yankees",
        "homeCity": "New York City",
        "sportId": 2,
        "createdAt": "2022-04-21T19:16:09.714Z",
        "updatedAt": "2022-04-21T19:16:09.714Z"
    },
    {
        "id": 6,
        "name": "New York Knicks",
        "homeCity": "New York City",
        "sportId": 3,
        "createdAt": "2022-04-21T19:16:09.719Z",
        "updatedAt": "2022-04-21T19:16:09.719Z"
    },
    {
        "id": 11,
        "name": "New York Giants",
        "homeCity": "New York City",
        "sportId": 4,
        "createdAt": "2022-04-21T19:16:09.726Z",
        "updatedAt": "2022-04-21T19:16:09.726Z"
    },
    {
        "id": 5,
        "name": "Brooklyn Nets",
        "homeCity": "New York City",
        "sportId": 3,
        "createdAt": "2022-04-21T19:16:09.717Z",
        "updatedAt": "2022-04-21T19:16:09.717Z"
    },
    {
        "id": 10,
        "name": "Tampa Bay Buccaneers",
        "homeCity": "Tampa Bay",
        "sportId": 4,
        "createdAt": "2022-04-21T19:16:09.725Z",
        "updatedAt": "2022-04-21T19:16:09.725Z"
    }
]
```

## BONUS Phase

If you are finished with studying for the assessment and want an extra
challenge, try this bonus phase out! Otherwise, you can skip this phase as this
depth of understanding required for this phase will not be tested for on the
actual assessment.

Create a new migration that will change the database schema to turn the current
schema into this diagram.

![db-schema-bonus]

Make sure to update the models to reflect the database schema changes and create
the appropriate associations while going through the rest of this phase.

Also make sure to re-migrate and re-seed the entire database from scratch.

Uncomment the contents of the __test/phase-bonus-spec.js__ file.

Run `npm test test/phase-bonus-spec` to see which test specs you can get to
pass.

### GET /matches/:id

The `GET /matches/:id` endpoint should return the `Match` specified by `id`. It
should also returned all its associated `Team`s. However, a `Match` can be
associated with a `Team` in `3` different ways, through the `homeTeamId`,
`awayTeamId`, and the `winnerId`. Return all `3` types of associated `Team`s so
that a request to `GET /matches/1` should return something like this:

```json
{
    "id": 1,
    "homeTeamId": 9,
    "awayTeamId": 10,
    "matchDate": "2022-02-28T00:00:00.000Z",
    "createdAt": "2022-04-21T19:16:09.764Z",
    "updatedAt": "2022-04-21T19:16:09.764Z",
    "winnerId": 9,
    "HomeTeam": {
        "id": 9,
        "name": "Green Bay Packers",
        "homeCity": "Green Bay",
        "sportId": 4,
        "createdAt": "2022-04-21T19:16:09.723Z",
        "updatedAt": "2022-04-21T19:16:09.723Z"
    },
    "AwayTeam": {
        "id": 10,
        "name": "Tampa Bay Buccaneers",
        "homeCity": "Tampa Bay",
        "sportId": 4,
        "createdAt": "2022-04-21T19:16:09.725Z",
        "updatedAt": "2022-04-21T19:16:09.725Z"
    },
    "Winner": {
        "id": 9,
        "name": "Green Bay Packers",
        "homeCity": "Green Bay",
        "sportId": 4,
        "createdAt": "2022-04-21T19:16:09.723Z",
        "updatedAt": "2022-04-21T19:16:09.723Z"
    }
}
```

### GET /teams/:teamId/homeMatchesWon

The `GET /teams/:teamId/homeMatchesWon` endpoint should return all the `Match`s
the `Team` specified by `id` is a `Winner` of when the team was the `HomeTeam`.
Include the associated `AwayTeam` on each `Match`.

A request to `GET /teams/7/homeMatchesWon` should return something like this:

```json
[
    {
        "id": 2,
        "homeTeamId": 7,
        "awayTeamId": 8,
        "matchDate": "2022-03-30T00:00:00.000Z",
        "createdAt": "2022-04-21T19:16:09.766Z",
        "updatedAt": "2022-04-21T19:16:09.766Z",
        "winnerId": 7,
        "AwayTeam": {
            "id": 8,
            "name": "Los Angeles Clippers",
            "homeCity": "Los Angeles",
            "sportId": 3,
            "createdAt": "2022-04-21T19:16:09.721Z",
            "updatedAt": "2022-04-21T19:16:09.721Z"
        }
    },
    {
        "id": 4,
        "homeTeamId": 7,
        "awayTeamId": 5,
        "matchDate": "2022-04-03T00:00:00.000Z",
        "createdAt": "2022-04-21T19:16:09.769Z",
        "updatedAt": "2022-04-21T19:16:09.769Z",
        "winnerId": 7,
        "AwayTeam": {
            "id": 5,
            "name": "Brooklyn Nets",
            "homeCity": "New York City",
            "sportId": 3,
            "createdAt": "2022-04-21T19:16:09.717Z",
            "updatedAt": "2022-04-21T19:16:09.717Z"
        }
    }
]
```

## Submission

1. Delete the **node_modules** directory from your project
2. Zip your project
3. Submit the zip folder

[db-schema-without-relationships]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/assessments/practice-db-schema-without-relationships.png
[db-schema-with-relationships]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/assessments/practice-db-schema-with-relationships.png
[db-schema-bonus]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/assessments/practice-db-schema-bonus.png