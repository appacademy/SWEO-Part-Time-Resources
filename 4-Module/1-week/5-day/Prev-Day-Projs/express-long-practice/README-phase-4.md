# Intermediate Phase 4: Development vs. Production Error Handling

In this phase, you will add environment variables to your Express application
and will change server responses based on if the application is running in
development or production.

## Error Handling Middleware

You will create an error handling middleware that will log the error to the
terminal, set the status code of the response to the `statusCode` property of
the error, and send a JSON response with the error message, status code, and the
stack trace.

Create an error handling middleware as the very last middleware connected to
your Express application.

The error handling middleware should:

- log the error to the terminal
- set the status code of the response to the `statusCode` property of the error,
  default it to `500` if there is no `statusCode` property on the error
- send a JSON response with the following properties:
  - `message` - the `message` of the error or a default of
    `"Something went wrong"`
  - `statusCode` - the status code of the response or a default of `500`
  - `stack` - the `stack` trace of the error

Test out your error handling middleware by:

- navigating to an unknown endpoint
- trying to access the dog show endpoint with a wrong `dogId`
- navigating to supported routes to ensure they still work properly, and do not
  log errors

## Set up `dotenv` and `dotenv-cli`

Next, allow the application to load environment variables from a `.env` file.

Refer to the readings or practice before if you get stuck.

Change the scripts in the `package.json` for `start` and `dev` so the
environment variables are properly loaded from the `.env` file whenever those
scripts are run.

Test the setup by adding an environment variable to the `.env` file and running
your server. You should see the value of the environment variable if you log it
to the terminal in any server file like `app.js`.

## Production vs. Development Error Handling

In the error handling middleware you created previously, only show the `stack`
trace in the JSON response if the Node.js environment is **NOT** "production".

Test this out by setting the appropriate environment variable and value in the
`.env` file and restart the server. You should **NOT** see the `stack` property
in the JSON response returned from an error like the following:

- navigating to an unknown endpoint
- trying to access the dog show endpoint with a wrong `dogId`

The modify the .env and restart the server to test another environment (e.g.
"development" should show the stack track and "production" should not).
