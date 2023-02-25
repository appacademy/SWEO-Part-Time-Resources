# CHALLENGE BONUS Phase

If you are finished with studying for the assessment and want an extra
challenge, try this bonus phase out! Otherwise, you can skip this phase as this
depth of understanding required for this phase **will not be tested** for on the
actual assessment.

Create a new migration that will change the database schema to turn the current
schema into this diagram.

![db-schema-bonus]

Make sure to update the models to reflect the database schema changes and create
the appropriate associations while going through the rest of this phase.

Also make sure to re-migrate and re-seed the entire database from scratch.

The test specs can be found in the __test/bonus/phase-challenge-bonus-spec.js__
file.

Run `npm test test/bonus/phase-challenge-bonus-spec` to see which test specs you
can get to pass in this challenge bonus phase.

## GET /matches/:id

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

## GET /teams/:teamId/homeMatchesWon

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

[db-schema-bonus]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/assessments/practice-db-schema-bonus.png