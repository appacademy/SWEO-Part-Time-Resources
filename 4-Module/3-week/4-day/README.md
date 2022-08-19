# Querying Is AMAZING

## (a)Wait! Our little server is going as fast as it can 🥺

When querying, we have to make a connection to our database. This is an asynchronous action!

All database queries must begin with `await`

- You can technically use `.then()` too, but our practices use `async` functions so you might as well use `await`

## Queries Galore

There are so many query options available to us, it would be impossible to memorize

- There are some useful links at the bottom of this doc

Here are some of the ones I think you'll use most often

- `Model.findAll()`

  - Returns all records
    - Can be filtered with a WHERE clause

- `Model.findByPk()`

  - Returns a single record based on PK
    - Usually the ID

- `Model.findOne()`

  - Returns a single record based on WHERE clause

- `Model.create()`

  - Creates an instance of the model and saves it to the DB
    - Automatically runs any Model Validations
  - Syntax:

    ```js
    .create({colName: recordVal})
    ```

- `Model.build()`

  - Creates an instance of the model WITHOUT saving it to the DB
    - **_NOTE_**: Since this method does not directly communicate with the DB, you **Do Not** need to `await` it!
  - Syntax:

    ```js
    .build({colName: recordVal})
    ```

- `instance.save()`

  - Saves an instance to the DB
    - Automatically runs any Model Validations
    - Can be used on a brand new instance, or to update an existing one

## What Should I WHERE? How Should I WHERE It?

Any query that does not target only a single record should make use of a WHERE to specify which record(s) we want to target

WHERE syntax:

```js
// selecting with simple params
{
  where: {
    colName: recordVal,
    colName2: otherRecordVal,
  },
};

// selecting with complex params
{
  where: {
    id: { [Op.lte]: 2 },
  },
};
```

## Operators

Sequelize operators allow us to be incredibly specific with how we want to for data

WHERE's and operators can get pretty crazy, that's why we use the documentation!

---

## Useful Links

## [WHERE Clauses](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#applying-where-clauses)

## [Sequelize Operators](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators)

## [Querying - Finders](https://sequelize.org/docs/v6/core-concepts/model-querying-finders/)

## [Model Instances](https://sequelize.org/docs/v6/core-concepts/model-instances) (Creating, Updating, Deleting)

## [Bulk Create](https://sequelize.org/api/v6/class/src/model.js~model#static-method-bulkCreate)
