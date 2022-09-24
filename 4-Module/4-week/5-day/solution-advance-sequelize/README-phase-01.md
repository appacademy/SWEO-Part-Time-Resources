# Basic Phase 1: Order Query Results

To display query results in a useful and predictable order to the client, you
must explicitly order query results.

## Phase 1A: `GET /students`

Order the students returned from the `GET /students` endpoint by `lastName`
then `firstName`, both in alphabetical order.

### Result

Test your endpoint to check if your results have been ordered correctly.

- You should see all the students with the last name of 'Alfonsi' at the top of
the results returned from the endpoint. 
- Then, all the students with the last name of 'Alfonsi' should be
alphabetically ordered.

## Phase 1B: `GET /classrooms`

Order the classrooms returned from the `GET /classrooms` endpoint alphabetically
by `name`.

### Result

Test your endpoint to check if your results have been ordered correctly.

- You should see all the classrooms starting with the name of 'Mr.Collins' at the top
of the results returned from the endpoint.

## Phase 1C: `GET /supplies/category/:categoryName`

Order the classrooms returned from the `GET /supplies/category/:categoryName`
endpoint alphabetically by `name`, then `handed`, both in alphabetical order.

### Result

Test your endpoint to check if your results have been ordered correctly.

- When you access the `GET /supplies/category/Cutting`, you should see all the
scissors that are left-handed before right-handed scissors in the query results.

- When you access the `GET /supplies/category/Pasting`, you should see Glue
Sticks at the top of the query results and Transparent Tapes at the bottom.
