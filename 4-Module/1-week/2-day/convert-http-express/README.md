# Practice: HTTP Server to Express Server

In this practice, you will convert an HTTP Server into an Express server.

## Getting started

Download the starter at the bottom of the page.

`cd` into the `server` directory. Install `npm` dependencies.

In __server/app.js__, you will find the code for an HTTP Server commented out.
For  each element, you'll need to write the equivalent Express server code.

Comments have been provided in the code which show the HTTPS Server code and
where to put the Express code for each step of this project.

You may work from top to bottom, or you may follow the steps in the order below.

Each step can be tested by (re)loading http://localhost:5000/users/1234 in your
browser after running the application using `npm dev` (auto-refreshes using
**nodemon**) or `npm start` (remember to stop and restart after each code
change).

## Step 1: Initialize Express

At the top, import Express and initialize the application. Also, configure the
server to handle JSON requests.

At the bottom, set the port and listen for incoming requests.

## Step 2: Translate route(s)

Implement a route handler for a GET request to the path `/users/:userId`. Send a
plain-text response with the message `"User details for userId: <userId>"`,
where `<userId>` is replaced with the value of the path parameter `:userId`.