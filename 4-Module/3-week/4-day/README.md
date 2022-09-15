# W21D4 - Thursday
- Don't be afraid to use google to search for things from the official docs.
  - i.e. `sequelize migrations docs`

- Docs:
  - [migrations docs](https://sequelize.org/docs/v6/other-topics/migrations/)
  - [Query Interface](https://sequelize.org/docs/v6/other-topics/query-interface/)
    - [queryInterface API](https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface)
  - [Model Basics](https://sequelize.org/docs/v6/core-concepts/model-basics/)


## Practice: Validations and Constraints (yesterday)
Practice(15m):
  - Helpful links:
        - [Validations & Constraints](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints)

## Long Practice: Sequelize Fundamentals (1hr)
- Phase 1
- Phase 2
- Phase 3/4(Extra Practice)

# Manipulating the database using an ORM (Sequelize)

## Select Queries in Sequelize

How can we do this query in sequelize?

```sql
SELECT * FROM users WHERE username = 'Jesse';
```

- Using the 'where' clause on the Model finder methods (findOne, findAll, findByPk)
- Look at sequelize docs to see more syntax examples on the where clause

```js
const user = User.findOne({
    where: {
        username: 'Jesse'
    }
})
```
## Ordering our queries

How do we order our queries in sequelize?
```sql
SELECT * FROM users WHERE username = 'Jesse' ORDER BY users.username ASC
```

- Using the 'order' clause
- Look at sequelize docs to see more syntax examples

```js
const user = User.findAll({
    order: [
        ['username', 'ASC']
    ]
})
```

## Practice: Sequelize SELECT Queries (20 Minutes)
- Reference above examples or sequelize docs for assistance using where and order by clauses.
- Reference AAO homework for thursday reading [SELECT Queries in Sequelize](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-21---express-and-sequelize/select-queries-in-sequelize)


## Practice: Sequelize Insert Data (20 Minutes)
- Reference AAO homework for thursday reading [INSERT Data in Sequelize](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-21---express-and-sequelize/insert-data-in-sequelize)

## Practice: Sequelize UPDATE and DELETE Singular Records (20 Minutes)
- Reference AAO homework for thursday reading [DELETE Data in Sequelize](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-21---express-and-sequelize/delete-data-in-sequelize)
