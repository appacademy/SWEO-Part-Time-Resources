# Basic Phase 4: Search Filters

Another helpful feature to implement early is searching and filtering.

In the `GET /students` endpoint, you will implement search filters on student
first name and last name.

The [Sequelize Operators Documentation][op-docs] may help you in this phase.

## Phase 4A: First Name likeness

Filter the students in the query results by the optional `firstName` query
parameter.

Configure the `where` object to filter the results according the following
specs. The `where` object is used as the `where` clause in the option of the
route handler's query.

The `firstName` query parameter is a pattern that SQL should use to match a
student's `firstName` that is like the `firstName` query parameter.

If there is no `firstName` query parameter specified, return students with
any `firstName` (no filter on student `firstName`).

### Result

Test your endpoint to check if your results have been filtered correctly.

For example, a `firstName` query parameter of `dexter` should return all
students with a `firstName` of "Dexter". A `firstName` query parameter of `R%y`
should return all students that have an `r` and a `y` with possible characters
in between, like "Raylee" or "Royce".

## Phase 4B: Last Name likeness

Filter the students in the query results by the optional `lastName` query
parameter.

Configure the `where` object to filter the results according to the following
specs. The `where` object is used as the `where` clause in the option of the
route handler's query.

The `lastName` query parameter should be used in a similar way as the
`firstName` query parameter. 

If there is no `lastName` query parameter specified, return students with
any `lastName` (no filter on student `lastName`).

### Result

Test your endpoint to check if your results have been filtered correctly.

For example, a `lastName` query parameter of `costa` should return all
students with a `lastName` of "Costa". A `lastName` query parameter of `ay`
should return all students that have an `ay` with any number of characters
around it, like "Aylmere" or "Hayden".

## Phase 4C: Is Left-handed

Filter the students in the query results by the optional `lefty` query
parameter.

Configure the `where` object to filter the results according the following
specs. The `where` object is used as the `where` clause in the option of the
route handler's query.

The `lefty` query parameter should be a string of either `"true"` or `"false"`.

- If the `lefty` query parameter is `"true"`, then only the students that are
left-handed should be returned from the query results.

- If the `lefty` query parameter is `"false"`, then only the students that are
right-handed should be returned from the query results.

- If the `lefty` query parameter is any other string but `"true"` or `"false"`,
then an error message of `"Lefty should be either true or false"` should be
added to `errorResult.errors` array. (See Phase 1 for a refresher on what the
`errorResult` object is used for.)

- If there is no `lefty` query parameter specified, return students with
any handedness (left or right).

### Result

Test your endpoint against all four scenarios above to check if your results
have been filtered correctly.



[op-docs]: https://sequelize.org/v5/manual/querying.html