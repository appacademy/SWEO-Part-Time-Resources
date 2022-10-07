# Long Practice: America's Largest Trees

In this practice, you will build an API which relies on both **SQL** and 
**Express.**

## Getting started

Download starter. `cd` into __server__ folder, and install dependencies using
`npm install`. 

Start the Express server in development mode using `npm run dev`.

Open **Postman**, and create a new GET query to the local express server:
[http://localhost:5000/][localhost]

You should see this response:

```json
{
  "message": "API server is running"
}
```

## Explore the existing code

Open __server/app.js__ and notice...

* The framework of this project has been created for you.
* The `dotenv` package has been installed and configured, so you can use
 environment variables.
* This application is a basic Express server configured as an API, so it is able
  to handle JSON in the requests and responses.
* There is one router in the application, which serves up paths that start with
  `/trees`.
* The `/` path returns a successful response that the server is running
* The Express server includes error handling middleware to return an `error`
  message in a JSON response object. This means you can call `next(err)`
  from any route when an error occurs.
* The Express server handles an unknown route with a JSON response (rather than
  the default HTML).

Open __server/package.json__ and notice...

* The `sqlite3` package was added to the project. This means it was installed 
  when you ran `npm install`, so you will not need to add it.

Close both __server/app.js__ and __server/package.json__ since no changes will
be made to these files.

## Phases

This project has been broken down into phases. After completing the first two
phases - SQL setup and the first Express phase - you can proceed in any order
through the remaining Express phases.

Complete as much as you can in the time allotted. You can complete any remaining
phases for additional practice during assessment prep.

If you get stuck on phase 3 or higher, try moving on to the next phase for now,
then come back later in the project to complete or improve your code. Also, you
can formulate good questions, and reach out to your instructors for help.

[localhost]: http://localhost:5000/