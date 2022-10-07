# Intermediate Phase 5: DELETE Route Calling DELETE SQL

In __server/routes/trees.js__, create a route handler for the path `/` which  
responds to a `DELETE` request that has one route parameter (`:id`).

## Delete tree row

Inside the route handler, write the SQL statement for deleting a row from the
`trees` table. Place a question mark (`?`) anywhere a value needs to go in the
`WHERE` clause.

Make a `params` constant equal to an array with the only value being the `id`
path parameter.

Now, `run` this SQL statement on the database with the associated parameter.

Finish the route handler code by responding with a `json` object with the
property `message` and the value `success`.

If an error occurs, call `next(err)`.

> Remember: The response function will return an error (e.g. `err`) if something
> goes wrong.

## Test and verify

Open **Postman**. Create a new query:

* Protocol: DELETE
* Address: http://localhost:5000/trees/5 (or any valid id)
* Body: Empty

When you send the query, you should see a JSON response as follows:

```json
{
  "message": "success"
}
```

If an error occurs, debug and fix it.

> Tip: You can reset the database by reloading the seed data. (See Phase 1 for
> a refresher on the commands.)

Finally, use **Postman** to query for all trees and see if the deleted one is
really gone.