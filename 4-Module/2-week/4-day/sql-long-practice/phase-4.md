# Intermediate Phase 4: POST Route Calling INSERT SQL

In __server/routes/trees.js__, create a route handler for the path `/` which
responds to a `POST` request. The body of this request will be a JSON object 
like this:

```json
{
  "name": "My Big Tree",
  "location": "My Backyard",
  "height": 123.4,
  "size": 57.9
}
```

## Insert tree row

Inside the route handler, write the SQL statement for inserting a row into the
`trees` table. Place a question mark (`?`) everywhere a value needs to go.

Create a `params` constant which is an array of values that come from the
request body.

> Remember: The items in the `params` array will be substituted for each `?` in
> the `sql` statement IN THE ORDER PROVIDED. So, 4 values in the request body
> means 4 question marks (`?`) in the `sql`, and 4 values in the `params` array.

Now, `run` this SQL statement on the database with the associated parameters.

Finish the route handler code by responding with a `json` object with the
property `message` and the value `success`.

If an error occurs, call `next(err)`.

> Remember: The response function will return an error (e.g. `err`) if something
> goes wrong.

## Test and verify

Open **Postman**. Create a new query:

* Protocol: POST
* Address: http://localhost:5000/trees
* Body:

```json
{
  "name": "My Big Tree",
  "location": "My Backyard",
  "height": 123.4,
  "size": 57.9
}
```

When you send the query, you should see a JSON response as follows:

```json
{
  "message": "success"
}
```

If an error occurs, debug and fix it.

Finally, use **Postman** to query for all trees and see if your new one is
really there.

If the query result does not look right, debug and fix the insert `sql` and/or
`params`.