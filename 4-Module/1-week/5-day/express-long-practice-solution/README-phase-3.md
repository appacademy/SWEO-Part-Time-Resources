# Basic Phase 3: API Resource Routers

In this phase, you will create Express routers and connect them to an
Express application.

## Create a Dog Router

Take a look at the __routes/dogs.js__ file. Inside of the file, functions to
manipulate server data, middleware functions, and route handler functions are
defined for a dogs router.

The dogs resource should show and manipulate the server data for dogs. A dog
should have:

- `dogId` - unique identifier for a dog
- `name` - name of the dog

Implement your code to the bottom of the __routes/dogs.js__ file.

Create a router that will expose the following endpoints:

| Method   | URL            | route handler | purpose                         |
| -------- | -------------- | ------------- | ------------------------------- |
| `GET`    | `/dogs`        | `getAllDogs`  | retrieves info for all dogs     |
| `GET`    | `/dogs/:dogId` | `getDogById`  | retrieves info for a single dog |
| `POST`   | `/dogs`        | `createDog`   | adds a dog                      |
| `PUT`    | `/dogs/:dogId` | `updateDog`   | updates a single dog            |
| `DELETE` | `/dogs/:dogId` | `deleteDog`   | deletes a single dog            |

Connect the router to the Express application.

Test each endpoint to make sure you created and added the router successfully.

## Connect Middleware to Routes

Connect the `validateDogId` and `validateDogInfo` middleware functions in the
__routes/dogs.js__ file to the appropriate endpoints in the dogs router.

`validateDogId` checks the `dogId` parameter in a route to check if there is a
dog that exists in the server data with that `dogId`. If there is no dog that
matches, then a `404` error is returned as the response and will prevent the
route handler from being executed.

`validateDogInfo` checks the body of a request to create or edit a dog. If the
`name` property in the body of the request is missing, a `400` error is returned
as the response and will prevent the route handler from being executed.

Test each endpoint in the dogs router again to make sure you connected the
middleware to each endpoint successfully. Send valid AND invalid requests.