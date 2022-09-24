# Advanced Phase 10: To Aggregate or Not to Aggregate

In this phase, you will be working with aggregates again. You will make
decisions about efficiency as well as time management as a developer.

## Discussion: Balancing Efficiency with Developer Time

Aggregates done in a single query, or a small number of queries, are always more
efficient than querying data and then calculating the aggregate data values in
JavaScript.

However, formulating a proper aggregate query is sometimes difficult. Developers
often have to consider trade-offs between optimizing for efficiency, and the
incresed developer time it takes to do that. If the size of the results is small
and the query is not run very often, developers may choose not to focus
additional developer time on increasing efficiency.

In this practice, you are encouraged to use SQL aggregates and avoid N + 1
queries to return the following data points. **However**, you should time-box
the amount of time you spend doing this.

The senior developer on your team asks you to time-box formulating an aggregate
query to `10 minutes` for a single data point.

This means: For `10 minutes`, attempt to form an aggregate query without N + 1
queries or JavaScript calculations for the desired data point. If you don't see
what you expect to see in the results after `10 minutes`, then you can use N + 1
queries or JavaScript calculations, or whatever you need to do, to get that data
point returned.

Efficiently working code is better working code. But working code, no matter how
inefficient is **ALWAYS** better than non-working code at all!

You'll be working in the `GET /supplies/scissors/calculate` route handler for
this phase.

## Phase 10A: Current Number of Scissors for All Classrooms

Supplies in the database can be for either left-handed or right-handed students.

However, **most** supplies in the database can be used by both
right-handed and left-handed students. Scissors are the only exception.

Supplies with the `name` of "Safety Scissors" can either be right-handed or
left-handed.

Here's an example of two different supplies that have the same `name` attribute
but different `handed` attributes.

```json
[
  {
    "id": 275,
    "category": "Cutting",
    "name": "Safety Scissors",
    "handed": "right",
    "Classroom": {
      "id": 16,
      "name": "Mr. Collins"
    }
  },
  {
    "id": 276,
    "category": "Cutting",
    "name": "Safety Scissors",
    "handed": "left",
    "Classroom": {
      "id": 16,
      "name": "Mr. Collins"
    }
  }
]
```

The administration of the school using your frontend client would like to know
the total number of scissors that a classroom currently has. They would also
like to know how many right-handed scissors and left-handed scissors there are
in all classrooms combined.

- In the response returned from the `GET /supplies/scissors/calculate` endpoint,
return the `result` object with a property of `numRightyScissors` that has
a value equal to the number of "Safety Scissors" supplies that are
"right"-`handed`.

- Set another property on the `result` of `numLeftyScissors` that has a value
equal to the number of "Safety Scissors" supplies that are "left"-`handed`.

- Set another property on the `result` of `totalNumScissors` that has a value
equal to the number of "Safety Scissors" supplies **regardless** of if they are
right or left-handed.

### Result

You should see these totals representing the seed data aggregates:

```json
{
  "numRightyScissors": 16,
  "numLeftyScissors": 16,
  "totalNumScissors": 32,
}
```

## Phase 10B: Number of Scissors Needed For All Classrooms

The administration would also like to make sure that each classroom is stocked
with a scissor for each student in the classroom. To do that, they need to know
the number of students in each classroom. But they need to separate that
information by handed-ness (left/right) because they need to know how many
left-handed or right-handed scissors a classroom needs.

It's important to realize that the total number of students in all classrooms is
different from the total number of students in the database. Each student in the
database could be enrolled in multiple courses. You need to know how many
students are in each classroom, then add those numbers up.

- Set another property on the `result` of `numRightHandedStudents` that has a
value equal to the total number of right-handed students in all the classrooms.

- Set another property on the `result` of `numLeftHandedStudents` that has a
value equal to the total number of left-handed students in all the classrooms.

### Result

For these numbers, a good way to check if your numbers are correct is to add
`numRightHandedStudents` and `numLeftHandedStudents` and verify that they are
equal to the number of `StudentClassroom` records in the database. Why are these
numbers equal?

You should now see these totals representing the seed data aggregates:

```json
{
  "numRightyScissors": 16,
  "numLeftyScissors": 16,
  "totalNumScissors": 32,
  "numRightHandedStudents": 558,
  "numLeftHandedStudents": 59,
}
```

## Phase 10C: Number of Scissors Still Needed For All Classrooms

The administration would also like to see a calculation of how many scissors
they still need to purchase for all the classrooms to make sure each student
in every classroom can have access to a scissor.

- Set another property on the `result` of `numRightyScissorsStillNeeded` that
represents how many additional pairs of right-handed scissors are needed. This
number can be calculated by comparing the total number of right-handed scissors
in all classrooms to the total number of right-handed students in all
classrooms.

- Set another property on the `result` of `numLeftyScissorsStillNeeded` that
  represents how many additional pairs of left-handed scissors are needed.

### Result

You should now see these totals representing the seed data aggregates:

```json
{
  "numRightyScissors": 16,
  "numLeftyScissors": 16,
  "totalNumScissors": 32,
  "numRightHandedStudents": 558,
  "numLeftHandedStudents": 59,
  "numRightyScissorsStillNeeded": 542,
  "numLeftyScissorsStillNeeded": 43
}
```
