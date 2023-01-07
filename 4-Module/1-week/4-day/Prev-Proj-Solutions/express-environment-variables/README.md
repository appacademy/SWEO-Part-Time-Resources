# Practice: Environment Variables

In this practice, you will set up and work with environment variables in a
Node.js environment.

## Set up

`cd` into the `server` folder.

`npm install` the dependencies.

## Part 1: Command-line

The `index.js` file contains a single `console.log` that will log the value of
the `NODE_ENV` environment variable; however, it currently prints `undefined`
when running:

```plaintext
> node index.js
> undefined
```

Run `index.js` again, but this time with the `NODE_ENV` environment variable set
to "production" and declared within the command-line.

## Part 2: Using a `.env` file

The `app.js` file contains some boilerplate code for an Express server. However,
it is dependent on some environment variables. Identify the environment
variables that the application is using.

Set the environment variables so that the server:

- displays the secret message "Hello from .env" at [http://localhost:5000]

However, instead of defining the environment variables through the command-line,
use a `.env` file to set the environment variables that the server needs.

Create the __.env__ file with the appropriate environment variables and values.
Then, use `dotenv` to connect your environment variables so that the Express
application runs with the configured environment variables.

**Important Note**: You will need to `npm install` the appropriate node modules
to use `dotenv`.

## What you've learned

You learned one way for setting and loading environment variables in a Node.js
application and another way for setting and loading environment variables in an
Express application.

[http://localhost:5000]: http://localhost:5000
