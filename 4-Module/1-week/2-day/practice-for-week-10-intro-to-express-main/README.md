# Basic Phase 1: Initialize an Express Application

In this phase, you will create a new Express project and initialize an Express
application to listen for requests on a port. You will also return a simple
text response on the `/status` route.

## Create a new Express project

`cd` into the __server__ directory after creating it.

Add a `package.json` file by running the following command:

```shell
npm init -y
```

Install the following dependencies using the command `npm install`:

- `express`

Install the following development dependencies using the command
`npm install -D`:

- `nodemon`

## Create an Express application

Create a file called __app.js__ inside of your __server__ folder.

Initialize an Express application inside that file.

## Establish listener

Create a `port` variable and set it to a desired port for your Express
application like `5000`.

Allow the initialized Express application to listen for requests at the port
you set to the `port` variable. Your application should log something like
`"Server is listening on port <port number>"` when the server successfully
connects to the port.

## Add scripts to start the server

Create a script in the __package.json__ file to start the server in production
using `node`. The script can be named "start".

Create another script to start the server in development using the `nodemon`
package. `nodemon` allows the server to automatically restart whenever any
server files get updated. This script can be called "dev".

## Test your server

Start your server in development using one of the _package.json_ scripts.

Check to see if you set things up correctly by navigating to the appropriate
URL for accessing the root URL for the Express server in the browser.

You should see the generic Express error message of `Cannot GET /` because you
have not created a route handler for `GET /` yet.

## Make route with text response

Create a route handler for the GET protocol at the route `/status`. Send a plain
text response using `res.send()` with text like "The server is alive!".

Test your new route in the browser by adding `/status` after the port number in
the address bar.

If all is working properly, your browser will show

```plaintext
The server is alive!
```
