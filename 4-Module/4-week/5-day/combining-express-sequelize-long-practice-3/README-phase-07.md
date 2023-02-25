# Intermediate Phase 7: Order Query Results by Association

To display query results in a useful and predictable order to the client, you
must explicitly order query results, even your associated data's results.

Examine the query used in the `GET /classrooms/:id` route handler. Instead of
aggregating the data for supplies and students for the classroom, your team
decided to display the items instead. 

Remove the aggregate data from the response and manipulate the query in the
route handler as follows.

## Phase 7A: Supply list per Classroom

First, include the classroom's supplies as associated data on the classroom
returned as the response.

- Each `Supply` should only have the attributes: `id`, `name`, `category`,
and `handed`.

Then, order the supplies returned alphabetically by supply `category`, and then
by supply `name`.

### Result

Test your endpoint to check if your results have been ordered correctly.

Under the `Supplies` property returned in the response data, you should see that
the nested objects are ordered by the `category` property, then the `name`
property.

## Phase 7B: Student List per Classroom

Next, include the classroom's students as associated data on the classroom
returned as the response.

- Each `Student` should only have the attributes: `id`, `firstName`,
`lastName`, and `leftHanded`.

Then, order the students returned alphabetically by student `lastName`, and then
by student `firstName`.

### Result

Test your endpoint to check if your results have been ordered correctly.

Under the `Students` property returned in the response data, you should see that
the nested objects are ordered by the `firstName` property, then the `lastName`
property.
