# Basic Phase 2: Express Route Returning List Of Rows

Begin by creating a __.env__ file. In it, define a variable named `data_source`
with a value of the database you created in Phase 1 (`app.db`).

> Remember: Environment variables and/or a .env file are the proper place to
> put database information.

## Step A: Require package and instantiate database

Open __server/routes/trees.js__. Find a place after the imports to set up the
database constants.

Now, write the code for two constants - one for `sqlite3` package, and the
other, named `db`, for the database:

```javascript
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(DATA_SOURCE, sqlite3.OPEN_READWRITE);
```

> Tip: It is a best practice to set your database permissions to the most
> limited option necessary to complete your application (in this project, that
> means `OPEN_READWRITE`).

## Step B: Get list of all trees

Create a route handler function for the path `/trees` using the `GET` protocol.
Note that the trees portion of the path is already handled in the __app.js__
file, which connects the router for the `trees` API.

Inside your new route handler function in __server/routes/trees.js__, query the
database:

* Create a constant to hold the `sql` string to `SELECT` the `id` and `tree` for
  all rows in the trees table, ordering by the `tree` height in descending
  order.
* Create a constant for `params` which is an empty array
* Call `db.all()` sending in three parameters
  * the SQL statement
  * the parameters
  * a callback function (with arguments `err` and `rows`)

Finish the route handle code by responding with `rows` in a `json` response
format.

If an error occurs, call `next(err)`.

## Test and verify

Open **Postman**. Create a new query:

* Protocol: GET
* Address: http://localhost:5000/trees
* Body: None

When you send the query, you should see a JSON response with an array of 5 tree
objects (with only 2 fields each) matching the seed data you put into the
database.

```json
[
    {
        "id": 2,
        "tree": "General Grant"
    },
    {
        "id": 1,
        "tree": "General Sherman"
    },
    {
        "id": 4,
        "tree": "Lincoln"
    },
    {
        "id": 3,
        "tree": "President"
    },
    {
        "id": 5,
        "tree": "Stagg"
    }
]
```