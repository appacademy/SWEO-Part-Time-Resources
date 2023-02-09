# Practice: Express Router

In this practice you will read Express routers and predict then confirm the
endpoints created from the routers. You will also create Express routers and
test them.

## Set up

Run `npm install` the dependencies.

Run `npm run dev` to start the server at [http://localhost:5000] in
development.

## Predict the endpoints generated from existing Express.Router

In the `server` folder, you will see a folder called `routes`. Inside the folder
is a `people.js` file which contains a router created from `Express.router`.
Use your knowledge of `Express.Router` and the Express application configuration
found in the `app.js` file to predict what endpoints the router created.

When you are done figuring out what each endpoint should be, test these
endpoints using Postman, the browser, or the console in the browser.

## Create your own Express router

Create an Express router for the `colors` resource.

The router should generate the following endpoints:

- `GET /colors` - send a JSON of `"GET /colors"`
- `GET /colors/:name` - send a JSON of `"GET /colors/:name"`
  - For example, a `GET /colors/purple` request should return a JSON response of
    `"GET /colors/:name"`

Remember to connect the router to the Express application!

Refer to the `people` router if you get stuck.

Test the endpoints using Postman, the browser, or the console in the browser.

[http://localhost:5000]: http://localhost:5000