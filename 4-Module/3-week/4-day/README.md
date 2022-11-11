# `M4W3D4`

# Querying

When querying, we have to make a connection to our database. This is an asynchronous action!

All database queries must begin with `await`

- You can technically use `.then()` too, but async/await is the more modern method

## Queries Galore

Here are some common queries you'll use most often

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

## WHERE Clause && Operators

Syntax:

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

---

## Useful Links

## [WHERE Clauses](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#applying-where-clauses)

## [Sequelize Operators](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators)

## [Querying - Finders](https://sequelize.org/docs/v6/core-concepts/model-querying-finders/)

## [Querying API](https://sequelize.org/api/v6/class/src/model.js~model)

## [Model Instances](https://sequelize.org/docs/v6/core-concepts/model-instances) (Creating, Updating, Deleting)

## [Bulk Create](https://sequelize.org/api/v6/class/src/model.js~model#static-method-bulkCreate)
