# Practice: Creating API Endpoints

In this practice, you will create a Web API server with endpoints that return
data as JSON instead of displaying HTML view pages in a traditional web server.
This server should only also accept JSON request bodies and parse them.

The Web API server should have endpoints to return all the dogs in the server
data, return details of a specific dog, create a new dog, edit a dog, and delete
a dog from the server data.

You will test all the route handlers you implement in Postman or by using
`fetch` in the browser.

## Set Up

Clone the project from the [starter].

Take a look at the server code in __server.js__. The skeleton code for the
endpoints is set up for you. You will have to fill out the code for each
endpoints using the route parameter values and the parsed JSON request body.

## Important Note

You are not expected to complete this practice. Do as much as you can and
compare your code with the solution code after this. Ask an instructor to
walk you through any task you had trouble with during discussion.

## Parse the JSON Request Body

Parse the request body in the server as JSON only when the `Content-Type` header
is `application/json`.

## GET /dogs

Implement the `GET /dogs` API endpoint to return the `dogs` array as JSON.

Test this endpoint in Postman or by using `fetch` in the browser.

## GET /dogs/:dogId

Implement the `GET /dogs/:dogId` API endpoint to return the object of the
specified dog as JSON. Find the specified dog object from the `dogs` array
acting as the server data. (Hint: use `Array.find()` to find the specified dog
based on the `:dogId` route parameter.)

Test this endpoint in Postman or by using `fetch` in the browser.

## POST /dogs

Implement the `POST /dogs` API endpoint to create a dog based on the body of the
request. Use the return value of the `getNewDogId()` as the value of the `dogId`
in the new dog's object. Push the new dog object to the dogs array. Return the
newly created dog object as a JSON response.

Test this endpoint in Postman or by using `fetch` in the browser.

## PUT or PATCH /dogs/:dogId

Implement the `PUT /dogs/:dogId` API endpoint to edit the specified dog based on
the body of the request. Return the updated dog object as a JSON response.

Test this endpoint in Postman or by using `fetch` in the browser.

## DELETE /dogs/:dogId

Implement the `DELETE /dogs/:dogId` API endpoint to delete a dog from the server
data. (Hint: use `Array.findIndex()` to find the array index of the dog in the
`dogs` array. Then use `Array.splice()` to remove the dog from the `dogs` array
using that index.) Afterwards, return a message in JSON of
`"Successfully deleted"`.

Test this endpoint in Postman or by using `fetch` in the browser.

[starter]: https://github.com/appacademy/practice-for-week-08-create-api-endpoints