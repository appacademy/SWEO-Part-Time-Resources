# Intermediate Phase 6: PUT Route Calling UPDATE SQL

In __server/routes/trees.js__, create a route handler for the path `/` which  
responds to a `PUT` request and accepts one path parameter (`:id`). The body of  
this request will be a JSON object like this:

```json
{
  "id": 6,
  "name": "My Big Tree",
  "location": "My Backyard",
  "height": 123.4,
  "size": 57.9
}
```

## Insert tree row

It is common practice for an update API call to provide the id both in the path,
and the request body. This tends to reduce mistakes with updating the wrong row.

Inside the route handler, begin by checking the id in the request body against
the id in the path parameters.

If they do NOT match, respond with a `400` error and a JSON object:

```json
{
  "error": "ids do not match",
}
```

In the case where the ids match, write the SQL statement for updating a row into
the `trees` table. Place a question mark (`?`) everywhere a value needs to go.

> Tip: This time you need 5 `?`s: 4 for the data values, and 1 in the `WHERE`
> clause.

Create a `params` constant which is an array of values that come from the
request body, plus the path parameter of the id.

> Remember: The items in the `params` array will be substituted for each `?` in
> the `sql` statement IN THE ORDER PROVIDED. Since the `WHERE` clause is the
> last part of the SQL statement, the `id` property will need to be last in the
> `params` array.
 
Now, `run` this SQL statement on the database with the associated parameters.

Finish the route handler code by responding with a `json` object with the
property `message` and the value `success`.

If an error occurs, call `next(err)`.

## Test and verify

Open **Postman**. Create a new query:

* Protocol: POST
* Address: http://localhost:5000/trees/6
* Body:

```json
{
  "id": 6,
  "name": "My Big Tree Renamed",
  "location": "My Backyard Renamed",
  "height": 123.45,
  "size": 57.91
}
```

When you send the query, you should see a JSON response as follows:

```json
{
  "message": "success"
}
```

If an error occurs, debug and fix it.

> Tip: You can reset the database by reloading the seed data. (See Phase 1 for
> a refresher on the commands.)

Finally, use **Postman** to query for this tree to see if your changes happened
as expected.

If the query result does not look right, debug and fix the update `sql` and/or
`params`.