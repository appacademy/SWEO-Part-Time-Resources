# Intermediate Phase 6: Search Filters

Another helpful feature to implement early is searching and filtering.

In the `GET /classrooms` endpoint, you will implement search filters on
classroom name and student limit.

The [Sequelize Operators Documentation][op-docs] may help you in this phase.

## Phase 6A: Name likeness

Filter the classrooms in the query results by the optional `name` query
parameter.

Configure the `where` object to filter the results according the following
specs. The `where` object is used as the `where` clause in the option of the
route handler's query.

- The `name` query parameter is a pattern that SQL should use to match a
classroom's `name` that is like the `name` query parameter.
  - For example, a `name` query parameter of `mr` should return all classrooms
with a `name` of with "Mr.". A `name` query parameter of `abc` should return no
classrooms (empty array).

- If there is no `name` query parameter specified, return classrooms with
any `name` (no filter on classroom `name`).

### Result

Test your endpoint against both scenarios above to check if your results have
been filtered correctly.

## Phase 6B: Student Limit Between

Filter the students in the query results by the optional `studentLimit` query
parameter.

Configure the `where` object to filter the results according the following
specs. The `where` object is used as the `where` clause in the option of the
route handler's query.

- If the `studentLimit` query parameter includes a comma, then the
`studentLimit` query parameter is meant to define the minimum student limit and
maximum student limit of returned classrooms separated by a comma.
   - For example, a request to `GET /classrooms?studentLimit=20,30` should
return all classrooms that have a student limit between `20` and `30`.

- If the `studentLimit` query parameter includes a comma, BUT the comma DOES NOT
separate two integers, or if the minimum limit is greater than the maximum
limit, add an error message of `"Student Limit should be two numbers: min,max"`
to the `errorResult.errors` array.
    - Make sure to do apply the same error handling logic to this endpoint as in
`Phase 2C` and `Phase 6C`.

- If there is no `studentLimit` query parameter specified, return classrooms
with any `studentLimit` (no filter on classroom `studentLimit`).

### Result

Test your endpoint against the three scenarios above to check if your results
have been filtered correctly.

## Phase 6C: Student Limit Equals

When the `studentLimit` query parameter DOES NOT include a comma, then the
`studentLimit` query parameter will have a different meaning and will affect the
query results differently.

When the `studentLimit` query parameter has NO comma, then it is meant to define
the exact student limit of classrooms returned from the query results.

- If the `studentLimit` query parameter is a valid integer, then the query
results should return classrooms that match the `studentLimit` exactly.

- If the studentLimit query parameter is NOT an integer, add an error message.
  -  Use the message `"Student Limit should be an integer"` to the
     `errorResult.errors` array.

### Result

Test your endpoint against both scenarios above to check if your results have
been filtered correctly. All results should still be returned if there is no
`name` and `studentLimit` query parameter specified.

[op-docs]: https://sequelize.org/v5/manual/querying.html
