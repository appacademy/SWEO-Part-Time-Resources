# Advanced Bonus Phase 3: Use Route To Create Relationship

In this bonus phase, you will create a route that receives both a `tree` and an
`insect`, creates either or both as necessary, and makes the association between
them.

The phase is optional and will NOT be covered on the assessment. However, there
is a good chance you will want to do something like this in your upcoming
project.

## Error handling

It is expected that your code will catch errors anywhere in the route handler
and provide friendly messages as the response by calling the `next()` function
in **Express**.

The message should be `Could not create association` unless otherwise noted. The
details should contain more information on what went wrong.

For example

* tree missing in request
* insect missing in request
* Tree {tree.id} not found
* Insect {insect.id} not found
* The error messages provided by Sequelize
* The message for any other error

## Create route

Open the routes file where associations are handled:
__server/routes/joined.js__.

Create a new POST handler for the path `/associate-tree-insect`.

The request `body` is expected to have two attributes: `tree` and `insect`.
These will be objects with attributes that match the request body for creating
a `Tree` and an `Insect`, respectively. Alternately, either one or both could
contain just an id of an existing `Tree` or `Insect`, respectively.

Below you will find some examples you can use to test you solution when it's
ready.

## Handle `tree` attribute

Remember, the request will include a body in **JSON** format.

If `tree` is missing in the request body, return an error.

If `tree` in the request body has the property of `id`, the look for that
primary key in the `Tree` model. If it's not found, return an error, otherwise
store it for making the association (in a moment).

If the `tree` in the request body does NOT have the `id` property, then try to
create a new `Tree`. (Remember with `Tree` objects, the request and the model
have different attributes.)

## Handle `insect` attribute

Same logic, but for the `insect` attribute in the request body. (Remember that
the request and model for `Insect` is the same, so that simplifies the
creation.)

## Detect existing relationship

If both the `tree` and the `insect` exist in the database already, then they may
already be associated. If so, please return a special error message:
`Association already exists between {tree.tree} and {insect.name}`.

## Add the association

If all goes well, you can now add the association. Since the relationship is
many-to-many, but the request has just one of each object, you'll need an array
somewhere in your implementation.

Finally, return a **JSON** response with the following attributes:

* `status` of "success"
* `message` of "Successfully created association"
* `data` which is an object containing the `tree` and the `insect` used to make
  the association

## Verification

There are a number of different request bodies you'll need to try in order to 
verify all the possibilities. Here are a few to get you started. You should come
up with more on your own to cover as much of the feature as possible.

### Create both tree and insect

```json
{
  "tree": {
    "name": "My Special Tree",
    "location": "My Backyard",
    "height": 123.45,
    "size": 57.95
  },
  "insect": {
     "name": "Ny Special Insect",
     "description": "For testing",
     "fact": "This is fun!",
     "territory": "TBD",
     "millimeters": 12.34
  }
}
```

### Existing tree and insect

```json
{
  "tree": {
    "id": 1
  },
  "insect": {
     "id": 3
  }
}
```

Repeat this again (once successful) to test the handling of a duplicate 
association.

### Invalid data

Modify one or the other of the above request bodies to trigger the known errors

* Invalid tree id
* Invalid insect id
* `tree` attribute is missing
* `insect` attribute is missing
* Required field(s) are not provided in a new tree and/or insect

Anything else you can think of!

## Congratulations!

You are well on your way to mastering **Sequelize** used in an **Express**
application!
