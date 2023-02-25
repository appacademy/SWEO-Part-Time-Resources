# Phase 6 - Ordering

Run `npm test test/phase-6-spec` to make sure you pass all the specs in this
phase.

## GET /sports

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