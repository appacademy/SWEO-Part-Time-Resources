# Practice: Creating API Endpoints

In this practice, you will create a Web API server with endpoints that return
data as JSON instead of displaying HTML view pages in a traditional web server.
This server should only also accept JSON request bodies and parse them.

The Web API server should have endpoints to return all the dogs in the server
data, return details of a specific dog, create a new dog, edit a dog, and delete
a dog from the server data.

You can test all the route handlers you implement in Postman or by using `fetch`
in the browser. Then, you will be able to confirm your solutions by running
mocha tests.

## Set Up

1. Clone the practice from GitHub.
2. Run `npm install` to install dependencies.
3. Start the server by running `node server.js`.
4. Run `npm test` to run the tests after completing each phase.

Take a look at the server code in __server.js__. The skeleton code for each
endpoint is set up for you. You will have to fill out the code for each
endpoint using the route parameter values and the parsed JSON request body.

_Note: The skeleton code for each endpoint already includes `return res.end()`,
which allows the tests to run properly. As you write out your logic within each
endpoint, you may move that line of code, but make sure each endpoint
includes that line before running the tests, or they may time out._

Near the top of the **server.js** file, you will see the following code:

```js
const dogs = [
  {
    dogId: 1,
    name: 'Fido',
    age: 2
  }
];

let nextDogId = 2;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}
```

The `dogs` array of objects is your data and contain all the information about
each dog in your server.

## Parse the JSON Request Body

Parse the request body in the server as JSON only when the `Content-Type` header
is `application/json`.

This code is already provided for you in the starter. Review the switch
statement and compare how the request body is parsed depending on the
`content-type` of the request header.

## Phase 1: GET /dogs

Implement the `GET /dogs` API endpoint to return the `dogs` array as JSON.

Test this endpoint in Postman or by using `fetch` in the browser.

## Phase 2: GET /dogs/:dogId

Implement the `GET /dogs/:dogId` API endpoint to return the object of the
specified dog as JSON. Find the specified dog object from the `dogs` array
acting as the server data. (Hint: use `Array.find()` to find the specified dog
based on the `:dogId` route parameter.)

Test this endpoint in Postman or by using `fetch` in the browser.

## Phase 3: POST /dogs

Implement the `POST /dogs` API endpoint to create a dog based on the body of the
request. Use the return value of the `getNewDogId()` as the value of the `dogId`
in the new dog's object. Push the new dog object to the dogs array. Return the
newly created dog object as a JSON response.

Test this endpoint in Postman or by using `fetch` in the browser.

## Phase 4: PUT or PATCH /dogs/:dogId

Implement the `PUT /dogs/:dogId` API endpoint to edit the specified dog based on
the body of the request. Return the updated dog object as a JSON response.

Test this endpoint in Postman or by using `fetch` in the browser.

## Phase 5: DELETE /dogs/:dogId

Implement the `DELETE /dogs/:dogId` API endpoint to delete a dog from the server
data. (Hint: use `Array.findIndex()` to find the array index of the dog in the
`dogs` array. Then use `Array.splice()` to remove the dog from the `dogs` array
using that index.) Afterwards, return a message in JSON of
`"Successfully deleted"`.

Test this endpoint in Postman or by using `fetch` in the browser.

Confirm your solutions for all endpoints by running `npm test`.