# Practice: Pagination

In this short practice, you will utilize pagination to limit and offset results
of a **Sequelize** query.

## Getting started

Download starter. 

Execute the __setup-commands.sh__ script from the root directory of this
practice. 

```shell
sh setup-commands.sh
```

View the contents of the script to see the commands that are executed. View the
results in the terminal to confirm that setup was successful and the `Bands`,
`Instruments`, `Musicians`, and `MusicianInstruments` tables exists in your
database and you have seed data present. The tables created follow the following
schema:

![band-musician-instrument-db-schema]

In this practice you will be implementing the `GET /musicians` route handler in
__app.js__ which will query your database for all `Musicians`. You will use
query parameters from the request to create limit and offset values for the
**Sequelize** query.

## Step 1: Understanding the query parameters

Take a look at the route handler in __app.js__ for `GET /musicians`. It returns
records for each `Musician` in your database, ordered by `lastName`, then by
`firstName`. It also limits the attributes returned to include only the `id`,
`firstName` and `lastName` When querying, you'll often want to only return a
portion of records rather than every record that matches a query. This is often
the case for indexes and search results.

To facilitate returning partial results, pagination is often implemented with
query parameters in the route of the request. By the end of this practice the
route handler for `GET /musicians` will accept the following query parameters:

| parameter name | data type | required | default | description                                                                                                                                                                                                                                                           |
| -------------- | --------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`         | integer   | false    | `1`     | Defines the offset of results to be returned. Page 1 returns the first set of results without an offset. The following pages will return subsequent sets of results (defined by the `size` of each page). A value of 0 will return all results, regardless of `size`. |
| `size`         | integer   | false    | `5`     | Defines the number of results to be returned. A value of 0 will return all results, regardless of `page`.                                                                                                                                                             |

Example Requests:

| request                        | result                                                                           |
| ------------------------------ | -------------------------------------------------------------------------------- |
| `GET /musicians`               | Returns the first five musicians (default values are used for `page` and `size`) |
| `GET /musicians?page=0`        | Returns all musicians                                                            |
| `GET /musicians?size=3`        | Returns the first three musicians                                                |
| `GET /musicians?page=3&size=2` | Returns the fifth and sixth musician (the third set of two results)              |

Using `page` and `size` query params is convenient and intuitive for the user. A
`page` of 1 shows them the first set of results. A `page` of 2 should show the
following set of results. The size of these sets of results should be determined
by the `size` param.

The `size` param lines up directly with the `limit` option the **Sequelize**
accepts in its queries. The `page` param will be useful along with the `size` in
calculating the `offset`. An `offset`, as opposed to the `page` that the user is
familiar with, instructs the query how many records to skip. In order to
calculate this value, you can use a basic calculation:

```js
offset = size * (page - 1)
```

This calculation works by calculating how many records would have been shown in
total on *previous* pages, hence the `page - 1` in the calculation.

## Step 2: Parse the params and set `limit` and `offset` options

Like most programming tasks, the exact implementation of converting query params
provided by the user into usable `limit` and `offset` values can be performed in
many different ways. Ultimately, you should parse the `size` and `page` params
into values that can be used in the query's
[`limit` and `offset` options][pagination docs].

While parsing this data, some points to keep in mind are:

  * Default values should be utilized if no params are provided by the user.
  * The relationship between the `page` and `size` provided by the user and the
    calculated `offset` value used by the query.
  * If a user provides a value of `0` for the `page` or `size`, the route
    handler should return all values with no pagination. This is a common scheme
    for APIs and often will be very helpful during your development as well as
    for users looking to receive all available data for a resource.


## Step 3: Confirm the `page` and `size` functionality

With the `offset` and `limit` options added to the query, check that the params
are being considered as you would expect.

Navigating to `/musicians` should yield the following results:

```json
[
  {
    "id": 9,
    "firstName": "Rosemarie",
    "lastName": "Affini"
  },
  {
    "id": 1,
    "firstName": "Adam",
    "lastName": "Appleby"
  },
  {
    "id": 10,
    "firstName": "Victoria",
    "lastName": "Cremonesi"
  },
  {
    "id": 6,
    "firstName": "Aurora",
    "lastName": "Hase"
  },
  {
    "id": 3,
    "firstName": "Wilson",
    "lastName": "Holt"
  }
]
```

Navigating to `/musicians?page=2&size=1` should yield the following results:

```json
[
  {
    "id": 1,
    "firstName": "Adam",
    "lastName": "Appleby"
  }
]
```

Navigating to `/musicians?page=0` should yield results for all ten `Musicians`.

Can you explain why each of these results are expected?


## BONUS Step 4: More practice with pagination

Now that you have a functioning route handler that implements pagination for
`Musicians`, implement pagination for the `Band` and `Instrument` endpoints given.
Fetch relevant associations and create sensible default values for each `limit`
and `offset`.


## ADVANCED BONUS Step 5: DRY up the code!

With three endpoints that implement pagination, do you see any repetition within
the code? How can the repetition be removed?

In the solution project, a middleware function is created in order to add
pagination functionality to routes. You could also implement a utility function
to be invoked whenever a conversion from `page`/`size` to `offset`/`limit` is
needed. As with most programming, many approaches exist!

Try to remove some of the repetition in your route handlers. Test that your
solution works as intended with various query parameters for each endpoint.


## Congratulations!

You are now able to utilize pagination to `offset` and `limit` the results of
your queries in **Sequelize**.


[band-musician-instrument-db-schema]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/practices/band-musician-instrument-db-schema.png
[band-musician-instrument-db-diagram-info]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/practices/band-musician-instrument-db-diagram-info.txt
[pagination docs]: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#limits-and-pagination
