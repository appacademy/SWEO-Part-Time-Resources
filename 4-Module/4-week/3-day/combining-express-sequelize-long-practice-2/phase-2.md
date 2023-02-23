# Basic Phase 2 - INSERT Using Sequelize Queries

In this phase, you'll complete the **Sequelize** code for an **Express** route 
which `INSERT`s data into the database.

## Create a new tree

In __server/routes/trees.js__, find the `POST` route handler.

Review the existing code to understand what has already been provided to you.

Add code to get the following 4 properties out of the request body.

* name
* location
* height
* size

Then, add code to create a new `Tree` using **Sequelize**.

> Hint: Notice that the fields in the database are different that the properties
> in the request.

## Return the new tree through the API

In the JSON response body, include the property `data` to return the new tree
that was just created.

## Verify your work

There are 3 main cases that you should try using **Postman**.

First, make sure you can successfully add a tree to the database. For example,
with this body:

```json
{
    "name": "My Big Tree",
    "location": "My Backyard",
    "height": 123.4,
    "size": 57.9
}
```

Second, make sure you can NOT add a tree with the name of a tree that was
added previously.

Third, what happens if some fields are missing from the request body?

Can you think of anything else that should be tested also?
