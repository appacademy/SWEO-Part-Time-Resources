## Phase 6 - Ordering

Run `npm test test/phase-6-spec` to make sure you pass all the specs in this
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