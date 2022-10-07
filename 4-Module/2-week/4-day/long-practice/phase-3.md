# Basic Phase 3: Express Route Returning One Row By ID 

In __server/routes/trees.js__, create a route handler for the path `/` with one  
path parameter `:id` which responds to a `GET` request.

## Get data for one tree

Make a constant for the SQL statement for selecting all columns for one row from
the `tree` table where the `id` of the tree is equal to a question mark (`?`).

Make a `params` constant equal to an array with the only value being the `id`
path parameter.

> Remember: The items in the `params` array will be substituted for each `?` in
> the `sql` statement.

Now, run this SQL statement on the database with the appropriate parameters
using the database function which will `get` just one row.

Finish the route handler code by responding with `row` in the `json` response
format. If an error occurs, call `next(err)`.

## Test and verify

Open **Postman**. Create a new query:

* Protocol: GET
* Address: http://localhost:5000/trees/1
* Body: None

When you send the query, you should see a JSON response with one complete tree
object matching the seed data you put into the database.

```json
{
    "id": 1,
    "tree": "General Sherman",
    "location": "Sequoia National Park",
    "height_ft": 274.9,
    "ground_circumference_ft": 102.6
}
```