# Advanced Phase 8: Order Query Results by Association

There are some really cool ways to manipulate and order data when ordering
data by associated data.

## Phase 8A: `GET /supplies/category/:categoryName`

Sometimes, you want to order the data results of a query by associated data
over the ordering of the original data.

Examine the query used in the `GET /supplies/category/:categoryName` route
handler. Your frontend team would like for the supplies returned from endpoint
to be ordered by the name of the classroom first. This means that all supplies
for the first classroom should be at the top of the supplies returned from
this endpoint.

Manipulate the query as follows:

First, include the classroom as associated data for each supply returned as
the response.

- Each `Classroom` should only have the attributes: `id`, and `name`.

Then, order the supplies by the `name` of the classroom first, THEN the `name`
of the supply.

### Result

Test your `GET supplies/category/Cutting` endpoint to check if your results have
been ordered correctly.

- You should see `2` supplies with no classroom (`null`) at the top of the
  results. 
- Then, you should see `2` supplies for a classroom with the name of "Mr.
  Collins" next.
- You should see `2` supplies with the name of "Ms. Rivera" at the bottom of the
  page.

Example (first four records):
```json
[
  {
    "id": 5,
    "category": "Cutting",
    "name": "Safety Scissors",
    "handed": "right",
    "Classroom": null
  },
  {
    "id": 6,
    "category": "Cutting",
    "name": "Safety Scissors",
    "handed": "left",
    "Classroom": null
  },
  {
    "id": 260,
    "category": "Cutting",
    "name": "Safety Scissors",
    "handed": "right",
    "Classroom": {
      "id": 16,
      "name": "Mr. Collins"
    }
  },
  {
    "id": 261,
    "category": "Cutting",
    "name": "Safety Scissors",
    "handed": "left",
    "Classroom": {
      "id": 16,
      "name": "Mr. Collins"
    }
  },
  // ...
```

>Consider: After adding ordering based on this association, does the order of
classroom `name` over supply `name` matter? Why or why not? What will change if
you switch the ordering so you order the results by supply `name` first, then by
classroom `name`?

## Phase 8B: `GET /students`

Sometimes, you want to order belongs-to-many associated data by the table that
it is going `through`.

Examine the query used in the `GET /students` route handler. Your frontend team
would like this endpoint to have the `Student` list returned and include the
`Classroom` list for each `Student`. The `Classroom` list should be ordered by
the `grade` attribute on the `StudentClassroom` that connects the `Student` to
the `Classroom`.

Manipulate the query as follows:

First, include the classrooms as associated data for each student returned as
the response.

- Each `Classroom` should only have the attributes: `id` and `name`. 
- Each `StudentClassroom` between the `Classroom` and `Student` should only have
the `grade` attribute.

Then, order the classrooms so that the classroom that the student is performing
best in (in terms of `grade`) are at the top. This is a little bit tricky.
See [Sequelize docs on Ordering Eager Loaded Associations] as a reference.

### Result

Test your endpoint to check if your results have been ordered correctly.

When you make a request to
`GET /students?page=1&size=1&firstName=Rae&lastName=Woodcacke&lefty=true`, you
should see the following:

```json
{
  "count": 1,
  "rows": [
    {
      "id": 45,
      "firstName": "Rae",
      "lastName": "Woodcacke",
      "leftHanded": true,
      "Classrooms": [
        {
          "id": 1,
          "name": "Mr. Tio",
          "StudentClassroom": {
            "grade": 5
          }
        },
        {
          "id": 10,
          "name": "Mr. Sanchez",
          "StudentClassroom": {
            "grade": 3
          }
        },
        {
          "id": 4,
          "name": "Ms. Jackson",
          "StudentClassroom": {
            "grade": 2
          }
        }
      ]
    }
  ],
  "page": 1,
  "pageCount": 1
}
```

[Sequelize docs on Ordering Eager Loaded Associations]: https://sequelize.org/master/manual/eager-loading.html#ordering-eager-loaded-associations
