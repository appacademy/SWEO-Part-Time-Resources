# Basic Phase 3 - DELETE Using Sequelize Queries

In this phase, you'll complete the **Sequelize** code for an **Express** route
which will `DELETE` a tree from the database. You'll also show a friendly 
message if the provided `id` is not in the database.

## Delete tree

In __server/routes/trees.js__, find the `DELETE` route handler.

Review the existing code to understand what has already been provided to you.

Before the response, add the code to destroy the `Tree` which matches the `id`
provided in the request params.

## Verify your work

In **Postman**, use the `DELETE` method to call 
[http://localhost:5000/trees/:id][test-path] where `:id` is a valid `id` for one 
of the trees in the database.

Also, view the list again (`GET /trees`) to ensure that tree has truly been
removed from the database.

## Gracefully handle tree not found

In **Postman**, use the `DELETE` method to call
[http://localhost:5000/trees/:id][test-path] where `:id` is NOT a valid `id` for 
one of the trees in the database (e.g. 123).

Notice that a error is returned, but it would not be friendly to show these
details to the end user of an application that uses this API.

So, add a conditional to test whether the deleted `Tree` exists, and if not,
then call the `next()` function in **Express** with an error object containing

* `status` not-found
* `message` Could not remove tree `<id>`
* `details` Tree not found

Where the `<id>` in the message is the value provided in the request parameter.

Repeat the call in **Postman** with the invalid id to see your new error 
response.

## Verify again

Since you changed the code, make sure the delete still works when a valid id
is provided.


[test-path]: http://localhost:5000/trees/:id
