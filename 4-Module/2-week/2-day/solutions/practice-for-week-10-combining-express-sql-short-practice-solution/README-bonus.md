# BONUS Practice: Combining Express and SQL

In this practice, you will implement another endpoint that uses Express and SQL.

## After INSERT, return the new row

Find the route handler for `/colors/add/:name`. Complete the body of the handler
function following the 3 constants already provided to

* Call the appropriate database function to `run` the insert
  * If an error occurs, call the Express error handling middleware (`next(err)`)
  * If successful
    * Call the appropriate database function to `get` the last color (query
      constant is `sqlLast`)
    * Respond through **Express** with this last color in JSON format

Verify it works properly by going to
[http://localhost:5000/colors/add/Purple][insert-color] in your browser.

You should see this response:

```json
{"id":4,"name":"Purple"}
```

Navigate to [http://localhost:5000/colors][all-colors] in your browser to see an
array of all the colors in the database.

You should see the color with the name of "Purple" in the array of colors.

[all-colors]: http://localhost:5000/colors
[insert-color]: http://localhost:5000/colors/add/Purple