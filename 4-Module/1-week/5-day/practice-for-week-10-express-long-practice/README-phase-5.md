# Intermediate Phase 5: Nested Resources

In this phase, you will create a router and connect it to an existing router
which is connected to the Express application.

## Dog Food

A nested resource relies on the information of another resource. Create a nested
router for dog foods in the __server/routes/dog-foods.js__ file at the bottom
of the file.

The dog foods router should be connected to the dogs router so that the dog
foods router path starts with `/dogs/:dogId/foods`.

Create the dog foods router with the following endpoints:

| Method | URL                  | route handler     | purpose                                 |
| ------ | -------------------- | ----------------- | --------------------------------------- |
| `GET`  | `/dogs/:dogId/foods` | `getFoodsByDogId` | retrieves the food log for a single dog |
| `POST` | `/dogs/:dogId/foods` | `createFood`      | add a food to a dog's food log          |

The foods router needs to be initialized with an option of `mergeParams` set to
true, like so:

```js
const foodsRouter = express.Router({ mergeParams: true });
```

This is because the `dogId` route parameter is defined in the route path in the
dogs router, not the foods router. The foods router, though, needs access to the
`dogId` route parameter to identify what dog it needs to fetch or create foods
for. The `mergeParams` option enables the foods router to use the parameters
defined in the outer router, the dogs router.

## `validateFoodInfo`

The `validateFoodInfo` middleware defined in the __server/routes/dog-foods.js__
file validates whether the body of the request has valid information to create a
dog food by checking the body of the request to see if it includes a `name`
property. If it does not, then a `400` error is returned as the response.

Connect it to the proper route(s).

Test the middleware connection on the routes that you attached it to.

## `validateDogId`

The `validateDogId` middleware defined in the __server/routes/dogs.js__ file
checks to see if the `dogId` route parameter has a valid `dogId`. If it does
not, then a `404` error is returned as the response. Connect this middleware to
the foods router. Importing the middleware into the foods router file is
not the solution and will result in a circular dependency.

<details><summary>Hint:</summary>Add the middleware when you connect the foods
router to the dogs router in the dogs router file.</details>

Test to see if you properly connected the middleware by testing sending
requests to one of the endpoints in the foods router with a valid AND an invalid
`dogId`.