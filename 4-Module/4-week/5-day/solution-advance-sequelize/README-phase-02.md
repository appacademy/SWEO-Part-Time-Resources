# Basic Phase 2: Pagination

A developer can save time throughout the development phases by adding pagination
to API calls that load large data sets as a first or early phase in the project.

In this phase, the focus will be adding pagination to the `GET /students`
request for a list of students.

## Phase 2A: Determine the page and size

In the `GET /students` route handler, read and parse the `page` & `size` params
from the query parameters.

By default, the `page` should be `1` and `size` should be `10`. 

If the page/size is not a number, then use the default page/size.

## Phase 2B: Calculate the limit and offset

Based on the determined `page` and `size` values, calculate the `limit` and the
`offset` of the query.

First, check to see if `page` and `size` are valid values.

Next, determine valid values for `page` and `size`:

> Query result pages must start at page 1, and you must specify at least
> maximum of one result to be returned from the query. On a single page, you
> should not be able to see more than 200 results.

If the `page` and `size` are valid values, calculate `limit` and `offset`.

> Refer to your readings if you need a refresher on the calculations.

If the `page` and `size` are NOT valid values, add an error message: 

- Add the message to the `errorResult.errors` array, in the `errorResult` object.
- The message should be: `'Requires valid page and size params'` 

### Result

The `errorResult` object should look like this after adding the message:

```js
{
  errors: [{ message: 'Requires valid page and size params' }],
  count: 0,
  pageCount: 0
}
```

### Special test case

It is very helpful as developers to be able to see all the data for debugging,
even though an application that consumes this API should not call it (since it
will probably be very slow).

If the `page` is `0` and the `size` is `0`, then allow developers to see all the
data (no `limit` or `offset`).

#### Result

A request to `GET /students?page=0&size=0` should return all students.

## Phase 2C: Error handling

Before the code actually runs the query, you should return an error response if
there were any error messages added to `errorResult.errors`.

If there are messages in `errorResult.errors`, like when a request comes in with
an invalid `page` or `size` value, formulate and send an error response.

- The status code of the error response should be `400` (Bad Request).
- The body of the response should be the `errorResult` object.

## Phase 2D: Add limit and offset to the query

Finally, add the calculated `limit` and `offset` to the query options.

### Result

Test the `GET /students` endpoint with many different page and size query
parameter values. Make sure you test it with invalid page and size values too!

## Phase 2E: Return the page number

The `result` object is returned as the body of the response for all successful
`GET /students` requests.

The `result` object currently has a `rows` property that is an array of all the
student records returned from the query.

Add a property of `page` to the `result` object equal to the page number of the
query. In the special test case when `page` and `size` are both `0`, set the
`page` property to `1` instead.

This allows the developer using the information of the endpoint to know which
page the query results returned are from.
