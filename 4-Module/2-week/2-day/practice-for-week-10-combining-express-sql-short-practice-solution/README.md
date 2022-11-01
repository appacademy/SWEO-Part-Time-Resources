# Practice: Combining Express and SQL

In this short practice, you will explore combining **Express** and **SQL**.

## Getting started

Download starter. `cd` into __server__ folder, and install dependencies using
`npm install`.

Run `sqlite3 app.db` to create the __server/app.db__ database and open the
**SQLite CLI**. Now, run `.read seed-data.sql` to create a table named `colors`
and populate a few rows. Exit the **SQLite CLI** using `Ctrl+d`.

Start the Express server in development mode using `npm run dev`.

Open your browser (e.g. Google Chrome), and go to
[http://localhost:5000][localhost].

You should see this response:

```json
{"message":"API server is running"}
```

## Step 1: Connect to the database

Open __server/app.js__. After the setup for Express

* Add the code to require `sqlite3`.
* Define a constant for the database using `DATA_SOURCE` (constant already
  defined) for the file, and `sqlite3.OPEN_READWRITE` for the permissions.

Verify it works by going to [http://localhost:5000/colors][all-colors] in your
browser.

You should see this response:

```json
[{"id":1,"name":"Red"},{"id":2,"name":"White"},{"id":3,"name":"Blue"}]
```

## Step 2: Query the database

Find the route handler for `/colors/:id`. Complete the body of the handler
function to:

* Declare a constant for the `sql` statement needed to get all fields for a single
  row in the colors table filtered by its `id`.
* Declare a constant for the `params` array which holds the `id` found in the
  request parameters.
* Call the appropriate database function to `get` 1 row from the database.
  * Respond with a JSON object for that row.

Verify it works properly by going to [http://localhost:5000/colors/1][one-color]
in your browser.

You should see this response:

```json
{"id":1,"name":"Red"}
```

[localhost]: http://localhost:5000/
[all-colors]: http://localhost:5000/colors
[one-color]: http://localhost:5000/colors/1
[insert-color]: http://localhost:5000/colors/add/Purple