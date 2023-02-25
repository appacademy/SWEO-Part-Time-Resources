# Phase 4 - Fans and Teams (CRUD with Associations)

Run `npm test test/phase-4-spec` to make sure you pass all the specs in this
phase.

## GET /fans/:fanId/drafts

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

## DELETE /fans/:id

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

## POST /teams/:id/players

Create a new draft player in the `Players` table that is associated with an
existing `Team` specified by its `id` attribute.

Request:

* Method: `POST`
* Example URL: `/teams/1/players`
* Headers:
  * Content-Type: application/json
* Example Body:

  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "number": 13,
    "isRetired": false
  }
  ```

Response:

* Status Code: `200`
* Headers:
  * Content-Type: application/json
* Example Body:

  ```json
  {
    "id": 16,
    "firstName": "John",
    "lastName": "Doe",
    "number": 13,
    "isRetired": false,
    "currentTeamId": 1,
    "updatedAt": "2022-07-06T18:39:51.409Z",
    "createdAt": "2022-07-06T18:39:51.409Z"
  }
  ```