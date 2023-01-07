# BONUS Practice: Environment Variables

In this practice, you will explore other methods for setting environment
variables in an Express application.

## Part 1: Set Environment Variables in the Command-Line

Instead of using `dotenv` to set the environment variables to display the
secret message at [http://localhost:5000], use the command-line to set the
environment variables of the application so that the secret message displays
"Hello from command-line" instead.

## Part 2: Set Environment Variables using `dotenv-cli`

Now, try to use the `dotenv-cli` to load the environment variables. This method
should load the environment variables in the `.env` file WITHOUT configuring
the Express application to use `dotenv` in `app.js`.

You should still see the secret message, "Hello from .env", at
[http://localhost:5000].

## What you've learned

You learned the various ways for setting and loading environment variables in
an Express application.

[http://localhost:5000]: http://localhost:5000
