# Practice: Search Params

In this short practice, you will utilize query parameters to implement search 
functionality within your routes.

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
__app.js__ which will query your database for `Musicans`. You will be utilizing 
query parameters to limit the results of your query, order records, and specify 
which attributes should be returned. After the main steps of this practice, the 
following query params should be properly handled by your route handler:

| parameter name      | data type | required | default | description                                                                                                                                                                                                                                                           |
| ------------------- | --------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`              | integer   | false    | `1`     | Defines the offset of results to be returned. Page 1 returns the first set of results without an offset. The following pages will return subsequent sets of results (defined by the `size` of each page). A value of 0 will return all results, regardless of `size`. |
| `size`              | integer   | false    | `5`     | Defines the number of results to be returned. A value of 0 will return all results, regardless of `page`.                                                                                                                                                             |
| `firstName`         | string    | false    |         | Limits the results to `Musicians` with the provided `firstName`.                                                                                                                                                                                                      |
| `lastName`          | string    | false    |         | Limits the results to `Musicians` with the provided `lastName`.                                                                                                                                                                                                       |
| `bandName`          | string    | false    |         | Limits the results to `Musicians` associated with a `Band` with a matching `name`.                                                                                                                                                                                    |
| `instrumentTypes[]` | string    | false    |         | Limits the results to `Musicians` associated with an `Instrument` with a matching `type`. Multiple `instrumentTypes[]` params may be sent, with the results being collected in an array.                                                                              |

Bonus steps exist where you will implement the handling of the following params:

| parameter name       | data type | required | default                   | description                                                                                                                                                                                                                                                                    |
| -------------------- | --------- | -------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `musicianFields[]`   | string    | false    |                           | Limits attributes of the `Musicians` to be returned to those specified. Multiple `musicianFields[]` params may be sent, with the results being collected in an array. A value of `all` will return all attributes. A value of `none` will return no attributes.                |
| `bandFields[]`       | string    | false    |                           | Limits attributes of the associated `Band` to be returned to those specified. Multiple `bandFields[]` params may be sent, with the results being collected in an array. A value of `all` will return all attributes. A value of `none` will return no attributes.              |
| `instrumentFields[]` | string    | false    |                           | Limits attributes of the associated `Instruments` to be returned to those specified. Multiple `instrumentFields[]` params may be sent, with the results being collected in an array. A value of `all` will return all attributes. A value of `none` will return no attributes. |
| `order[]`            | string    | false    | [`lastName`, `firstName`] | Specifies the order that the results should be returned in. Values are attributes of the `Musician` (`id`, `firstName`, `lastName`, `createdAt`, `updatedAt`). An `ASC` or `DESC` indicator may be provided after a `,`, such as `order[]=firstName,desc`                      |


## Step 1: WHERE clauses on the Musician model

Take a look at the route handler in __app.js__ for `GET /musicians`. With so 
many possible query parameters influencing the SQL being generated, it is often 
a good approach to create a base `query` object that will be built up throughout 
the route handler. For example, to filter the musician records returned from the
database, you can pass in a `query` object into the `Musicians.findAll(query)`.
This allows you, the developer, to conditionally add/modify filters to the query
by adding/modifying keys to the `query` object as you check for the various
possible query params specified by the user.

In the route handler provided, a base `query` object has been created. If
the user submits a request with `page` and `size` query params, `page`
and `size` are transformed into `offset` and `limit` options and added to
the `query` object to paginate the query.

At the end of the route handler you will notice that the object is passed in to 
a call to `Musicians.findAll(query)`. The built up query is executed and then 
returned as a JSON response. You will be modifying this `query` object to 
account for the other various query params that the user is permitted to specify. 

The first search filters you should implement are allowing the user to narrow 
the search using `firstName` and `lastName` query params, limiting the results 
to `Musicians` with matching `firstName` and `lastName` attributes. For each of 
these params, check if the user has provided a value. If they have, add the 
appropriate keys to the `query` to filter the results of the query to have these 
exact attribute values.

Check that your modifications to the `query` object are appropriately 
considering the user's `firstName` and `lastName` query params. Navigate to 
`/musicians?firstName=Adam` and `/musicians?lastName=Martinovic` to see the 
corresponding `Musician` records. As is, these should be searching for exact 
matches. In a bonus step you will alter these keys to search for partial names.


## Step 2: WHERE clauses on the associated Band model

The next search filter you should implement is allowing the user to narrow the 
search using the `bandName` query param, limiting the results to `Musicians` 
associated with a `Band` with a matching `name` attribute. If the user provides 
a `bandName` query param, you will need to include the associated model. Add the 
appropriate keys to the `query` to construct an `include` statement and `where` 
clause that **Sequelize** will recognize.

Check that your modifications to the `query` object are appropriately 
considering the user's `bandName` query param. Navigate to 
`/musicians?bandName=The%20Falling%20Box` to see the corresponding `Musician` 
records.

> Notice that `%20` (or a `+`) had to be used to account for URL encoding of 
> spaces.


## Step 3: WHERE clauses on the associated Instrument model

The next search filter you should implement is allowing the user to narrow the 
search by using the `instrumentTypes[]` query param, limiting the results to 
`Musicians` that are associated with one of the `Instrument` `types` specified. 
Including the `[]` in the query param tells **Express** that the param should be 
part of an array. Multiple `instrumentTypes[]` query params can be specified, 
with subsequent values added to the array. 

> Using `[]` is just one way to implement collecting multiple values for a query
> param. You may also see strategies such as comma-separated lists that are 
> parsed in the route handler, like that used by 
> [Facebook's Graph API][graph-api], or other variations. There's no right, 
> wrong, or even standard approach, just be consistent and clear in your 
> documentation!

If the user provides any number of `instrumentTypes[]` query params, you will 
need to include the associated model. Add the appropriate keys to the `query` to 
construct an `include` statement and `where` clause that **Sequelize** will
recognize.

Check that your modifications to the `query` object are appropriately 
considering the user's `instrumentTypes[]` query param. You'd like to see 
everyone in the band `The Falling Box` that plays either the `bass` or the 
`cello`. Navigate to 
`/musicians?bandName=The%20Falling%20Box&instrumentTypes[]=bass&instrumentTypes[]=cello`. 
You should see records for both `Wilson` and `Anton`. Remove the `cello` param 
and you should only see the record for `Anton` remaining.


## BONUS Step 4: Specify Musician attributes to be returned

Instead of returning all fields for the `Musician` records that match, you'd 
like to allow the user to specify which fields they are interested in receiving 
for each musician record. Modify your route handler to accept the 
`musicianFields[]` query param. If the param is not present or if the keyword 
`all` is given by the user, do not limit the attributes. If the keyword `none` 
is given, do not include any attributes.

Check that your modifications to the `query` object are appropriately 
considering the user's `musicianFields` query param. You'd like to see all 
`Musicians` without pagination, including only their `firstName` and `lastName` 
attributes. Navigate to 
`/musicians?page=0&musicianFields[]=firstName&musicianFields[]=lastName`. 
You should see records for all ten `Musicians`.


## BONUS Step 5: Specify Band and Instrument attributes to be returned

Just like the `Musician` fields, you'd like to allow the user to specify which 
band and instrument fields they are interested in receiving for each associated 
`Band` or `Instrument` record included. Modify your route handler to accept the 
`bandFields[]` and `instrumentFields[]` query params. If the params are not 
present or if the keyword `all` is given by the user, do not limit the 
attributes. If the keyword `none` is given, do not include any attributes.

> Hint: Check out the [eager loading Sequelize docs][eager-docs] for examples on 
> specifying nested attributes.

Check that your modifications to the `query` object are appropriately 
considering the user's `bandFields` and `instrumentFields` query params. You'd 
like to see all `Musicians` in `The Falling Box` that play either the `bass` or 
the `cello`, but you would only like to see the `firstName` and `lastName` of 
the `Musicians`, the `name` of the `Band`, and the `type` of the `Instrument`. 
Navigate to 
`/musicians?bandName=The%20Falling%20Box&instrumentTypes[]=bass&instrumentTypes[]=cello&musicianFields[]=firstName&musicianFields[]=lastName&bandFields[]=name&instrumentFields[]=type`.
You should see records for `Wilson` and `Anton`, just like Step 3, but this time 
you should only see the specified fields.


## BONUS Step 6: Order Options

You'd like the user to be able to specify the order that the results are 
returned in the response. Modify the route handler to accept the `order[]` query 
param. The user should be able to specify multiple attributes to order by, hence 
the `[]` in the param. Each param should also be able to specify if it should be 
ordered ascending or descending. 

The API doc specifies that one `order[]` param should specify the attribute to 
order by followed by additional options separated by commas, `,`.

For example, a user should be able to use the param
`?order[]=firstName,desc&order[]=lastName` to order the results first by 
`firstName` in descending order, then by `lastName`. Since no order is specified 
for `lastName`, the default ascending order should be used. The `order` key in 
the `query` object should look like this:

```js
[['firstName', 'desc'], ['lastName']]
```

Check that your modifications to the `query` object are appropriately 
considering the user's `order[]`query param. You'd like to see all `Musicians` 
that play `piano`, ordered by `firstName`, in descending order. Navigate to 
`/musicians?instrumentTypes[]=piano&order[]=firstName,desc`. You should see 
records for `Trenton`, `Rosemarie`, `Camila`, `Anton`, and `Adam` in that order.


## BONUS Step 7: Change exact names to partial names for `Musicians` and `Bands`

Having to know the full spelling of a `Musician` or `Band` name has become a bit 
tedious, so you'd like to implement matching partial values for `Musicians`' 
`firstName` and `lastName` attributes, as well as the `Bands`' `name` attribute.

Alter the `WHERE` clauses that you constructed in Steps 1 and 2. Instead of 
making an exact match, implement a `LIKE` operator in the clause.

> Hint: Utilize an appropriate [Sequelize operator][op-docs] to create a `LIKE` 
> comparison. You may or may not need to include wildcards in your value 
> depending on which operator you use.

Check that your modifications to the previous `WHERE` clauses are appropriately 
making partial comparisons instead of using full values. You'd like to see all 
`Musicians` that are part of a `Band` with the word `The` in their name. 
Navigate to `/musicians?page=0&bandName=the`. You should see records for seven
`Musicians`.


## Congratulations!

You are now able to filter, limit, and order records based on user specified 
query params. These are just a small sample of ways that you can utilize query 
parameters and implement search features. Experiment with your own 
customization!


[band-musician-instrument-db-schema]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/practices/band-musician-instrument-db-schema.png
[band-musician-instrument-db-diagram-info]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/practices/band-musician-instrument-db-diagram-info.txt
[graph-api]: https://developers.facebook.com/docs/graph-api/overview#fields
[eager-docs]: https://sequelize.org/master/manual/eager-loading.html#eager-loading-with-many-to-many-relationships
[op-docs]: https://sequelize.org/master/manual/model-querying-basics.html#operators