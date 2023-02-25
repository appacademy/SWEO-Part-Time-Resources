# Phase 5 - Teams (Eager Loading)

Run `npm test test/phase-5-spec` to make sure you pass all the specs in this
phase.

## GET /teams/:id

The `GET /teams/:id` endpoint should return the `Team` specified by its
`id` and all its associated `Sport`(s) and `Player`(s). The `Player`(s) should be listed under the property `TeamRoster`.

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
    "TeamRoster": [
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