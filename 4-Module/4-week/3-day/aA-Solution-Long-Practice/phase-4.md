# Intermediate Phase 4 - UPDATE Using Sequelize Queries

In this phase, you'll complete the **Sequelize** code for an **Express** route
which `UPDATES`s an existing item in the database.

## Update a tree

In __server/routes/trees.js__, find the `PUT` route handler.

Review the existing code to understand what has already been provided to you.
Notice that you'll need to send the response this time.

Add code to get the following 5 properties out of the request body

* id
* name
* location
* height
* size

Then, add code to find the `Tree` with the matching id, update any / all non-id
properties provided in the request body, and save those changes in the database.

Respond with a **JSON** object containing 3 properties (similar to the other 
routes):

* `status` success
* `message` Successfully updated tree
* `data` object which is the updated tree

Using **Postman**, test this route. One possible body is

```json
{
    "id": 3,
    "name": "President-edit",
    "location": "Sequoia National Park-edit",
    "height": 240.91,
    "size": 93.1
}
```

Remember to rerun the GET for the list or the individual tree in **Postman** or
your browser to verify that all the properties were updated properly in the 
database.

## Handle ids that don't match

This route receives the `id` in two place: the request body and the request
parameters. Best practices say you should make sure they have the same value.

Add a conditional before updating the `Tree` and if the id's don't match, use
**Express** to respond with the following object

* `status` error
* `message` Could not update tree
* `details` `<params id>` does not match `<body id>`

Where `<params id>` is the id provided as a request parameter, and `<body id>`
is the one provided in the request body.

In **Postman** try several combinations of ids that don't match, including one 
or both of them missing.

## Handle tree not found in database

Anytime you need to find an object in the database, there is a chance that the
id won't be found. Rather than returning an ugly error, you should return a 
friendly one.

Look back at your implementation for `SELECT`ing (in the `GET` method) or
`DELETE`ing (in the `DELETE` method), then implement a similar error.

* `status` not-found
* `message` Could not update tree `<id>`
* `details` Tree not found

Where the `<id>` in the message is the value provided in the request parameter.

Verify using an `id` that is NOT in the database. Remember to update both the
path and the body.
