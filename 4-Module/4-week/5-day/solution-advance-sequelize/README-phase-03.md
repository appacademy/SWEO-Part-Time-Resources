# Basic Phase 3: Aggregation with Pagination

Aggregation is helpful in pagination for determining the total amount of query
results that are in all the pages.

In `GET /students`, you will add some aggregation to provide some context in
the paginated results.

The [Sequelize Operators Documentation][op-docs] may help you in this phase.

## Phase 3A: Total number of results

The `result` object is returned as the body of the response for all successful
`GET /students` requests.

The `result` object currently has a `rows` property that is an array of all the
student records returned from the query. It also has a property of `page` that
is the page number of the query.

Add a property of `count` to the `result` object that represents the total
number of **unpaginated** results that can be returned from the query. This can
be done with a new separate query.

### Result

Test your endpoint to check if your `count` is being displayed and is the
correct number.

Here are some numbers to check against:

* There should be `267` total students, so the `count` property returned should
  equal `267`.

## Phase 3B: Total number of pages

Add a property of `pageCount` to the `result` object. This will represent the
total number of pages with the specified size that can be returned from the
query with the same search filters.

### Result

Test your endpoint to check if your page count is being displayed and is the
correct number.

Here are some numbers to check against:

* For a size of `10`, there should be `27` pages for `267` total students.
* For a size of `12`, there should be `23` pages for `267` total students.
* For a size of `150`, there should be `2` pages for `267` total students.
* For a size of `2`, there should be `134` pages for `267` total students.

## OPTIONAL Phase 3C: Total number of results even in error response

The `errorResult` object is returned as the body of the response for
UNsuccessful `GET /students` requests from incorrectly formatted query
parameters.

If the `errorResult` will be returned as the body of the response, add a
property of `count` to the `errorResult` object. This will represent the total
number of unpaginated results that can be returned from the query with no
search filters. `errorResult.count` should always be the total number of
students in the database (`267` from just the seeded data).

### Result

Test your endpoint to check if your `count` is being displayed and is equal to
the total number of students in the database (`267`) for an invalid query
parameter (e.g. `size=hello`).

[op-docs]: https://sequelize.org/v5/manual/querying.html
