# Predict the order of Express middleware

In this practice, you will predict the order that Express middleware will be
invoked when making a variety of requests.

## Background

Take a look at the __server/app.js__ file. This file contains the Express
application and the middlewares connected to the application.

## Predictions

In each of the following scenarios, predict what will be logged in the server
logs when a request is made.

You might find it helpful to grab some paper and sketch out a flow diagram for
the middlewares in __server/app.js__.

Write down your predictions for each of the following scenarios.

### Scenario #1 `GET /`

If a client makes a request to `GET /`, what will be logged in the server logs
and in what order?

### Scenario #2 `GET /other-resource`

If a client makes a request to `GET /other-resource`, what will be logged in
the server logs and in what order?

### Scenario #3 `GET /not-found`

If a client makes a request to `GET /not-found`, what will be logged in the
server logs and in what order?

## Verify your predictions

Now, it is time to run the application and use the browser or Postman to verify 
your predictions.

## Set up

`cd` into the __server__ folder.

`npm install` the dependencies.

Run `npm start` to start the server on `localhost` port `5000`.

## Testing

Request each of the urls. If your prediction matches, that's great! If not,
that's ok. This is a skill that needs practice. Review your diagram and use your
debugging skills to discover what happened. As needed, formulate good questions 
for your instructors.