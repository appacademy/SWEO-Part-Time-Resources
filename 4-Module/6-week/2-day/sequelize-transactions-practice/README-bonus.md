# Bonus Practice: Transactions with Sequelize

In this practice, you will take what you learned about transactions in SQL and 
apply them to a **Sequelize** model. You will implement transactions using the 
managed syntax.


## Getting started

This bonus phase uses the same project files as the unmanaged transactions 
phase. Reset your database by unseeding and reseeding with the `sequelize-cli` 
so that the `Accounts` table returns to its original state: 

| `id` | `firstName` | `lastName` | `balance` |
| ---- | ----------- | ---------- | --------- |
| 1    | Amy         | Pond       | 900       |
| 2    | Rose        | Tyler      | 600       |
| 3    | Martha      | Jones      | 800       |
| 4    | Donna       | Nobles     | 200       |
| 5    | River       | Song       | 1200      |

> Note: A model validation exists that specifies an account's `balance` can 
> never go below 0. Take a look at __db/models/account.js__ for this validation.

In this practice you will be creating transactions that interact with the 
**Sequelize** `Account` model and associated table. To streamline the practice, 
these transactions will be implemented within two `GET` request endpoints in the 
__app.js__ file, but the concepts could be applied to any number of endpoints 
and request types. To test the transactions, start the development server with 
`npm run dev`, then navigate to the corresponding route in your browser.

## Bonus: Managed Transactions

In this bonus step, you will create a [managed transaction][managed] for 
transferring funds from one account to another. A try-catch block has again been 
created for you in the `/managed` endpoint, with the queries necessary to 
perform the following actions:

  1. Find the `Account` associated with Rose Tyler.
  2. Add 200 to Rose's `balance`.
  3. Find the `Account` associated with Amy Pond.
  4. Subtract 200 from Amy's `balance`.

Create a transaction using `sequelize.transaction`'s managed syntax. Remember 
that instead of saving the function invocation to a variable, the managed syntax 
accepts a callback function as an argument. This callback function will house 
all of the queries associated with the transaction.

In addition to creating this callback, associate each of the queries for the 
transfer of funds from Amy to Rose with the transaction. This can be done by 
providing the same `transaction` key to the queries' options as you did in the 
unmanaged syntax. The value of the `transaction` key should be the transaction 
parameter capturing by the callback function.

After this transaction is complete, a query has again been implemented for you 
that will find all `Accounts`, ordered alphabetically by `firstName`, and return 
the result as JSON. In a managed transaction, no calls to `commit` or `rollback` 
are necessary! The successful execution of the callback function will commit the 
results to the database, while an error will result in a rollback automatically.

The `catch` block will catch any errors from the transaction and pass them on to 
the error handler. Since the rollback is performed automatically, no additional 
code is necessary in this block.

Test that your transaction is working as intended by navigating to `/managed` in 
your browser. Refresh multiple times until the `balance` validation is 
triggered. Ensure that the transaction has been rolled back by navigating to 
`GET /accounts` to see that Amy's account balance does not go below `0` **AND** 
Rose's account balance does not go above `1400`. 

The `GET /accounts` endpoint should show the following (`id`, `createdAt`, and 
`updatedAt` attributes have been ommitted from this sample response for 
brevity):

```json
[
  {
     "firstName": "Amy",
     "lastName": "Pond",
     "balance": 100
  },
  {
     "firstName": "Donna",
     "lastName": "Noble",
     "balance": 200
  },
  {
     "firstName": "Martha",
     "lastName": "Jones",
     "balance": 800
  },
  {
     "firstName": "River",
     "lastName": "Song",
     "balance": 1200
  },
  {
     "firstName": "Rose",
     "lastName": "Tyler",
     "balance": 1400
  }
]
```

If you do not see this behavior, reset, migrate, and seed the database, and make 
sure you set up the transaction in this endpoint correctly. Try refreshing this 
endpoint multiple times again until you see the correct `GET /accounts` response 
body above.


## Congratulations!

You are now able to use transactions in **Sequelize** with managed syntax.


[managed]: https://sequelize.org/docs/v6/other-topics/transactions/#managed-transactions