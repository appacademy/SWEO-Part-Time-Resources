# Basic Phase 1 - SELECT Using Sequelize Queries

In this phase, you'll complete the **Sequelize** code for a couple **Express**
routes which `SELECT` data from the database.

> For Your Consideration: What is the **Sequelize** term for selecting data?

Begin by opening the routes file: __server/routes/trees.js__.

## Step A - Import model

Near the top of the routes code, after the Express packages are imported, add
the import for the model.

> Tip: Remember that `../` in a folder path refers to the parent folder.

## Step B - List of items

Find the `GET` route with the path `/`.

Carefully study the code written by the previous developer.

> Hint: Remember that you need to wait for Sequelize to connect to and modify
> the database. `async` has already been included on each route handler
> function, so you can `await` the call to any Sequelize function in the code
> you add to this phase, and the phases that follow.

Add the code necessary to use **Sequelize** to find the list of all trees with
only the following 3 attributes:

* `heightFt`
* `tree`
* `id`

And ordered by `heightFt` from tallest to shortest.

Verify it is working using your browser or **Postman** by `GET`ting
[http://localhost:5000/trees][trees-list]

## Step C - Single item by id

Find the `GET` route with the path `/:id`.  Review the existing code.

Add the necessary **Sequelize** code to get one tree from the database with the
`id` matching the request path parameter.

If you need a refresher, you can look at the
[docs for Sequelize][docs-find-by-pk].

Verify the route is working correctly using your browser or **Postman** by
`GET`ting [http://localhost:5000/trees/123][one-tree] (where `123` is the id of
one of the trees). Also verify that an invalid id (e.g. 123 as shown) returns an
appropriate JSON object with error and message.

If you want to be thorough, you can also try an id that contains letters (e.g.
abc) to ensure that error is also handled gracefully (without crashing Express).
Review the code to understand how the error handling was implemented.


[trees-list]: http://localhost:5000/trees
[docs-find-by-pk]: https://sequelize.org/master/class/src/model.js~Model.html#static-method-findByPk
[one-tree]: http://localhost:5000/trees/123
