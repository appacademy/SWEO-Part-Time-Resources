# Practice: Transactions with Sequelize

In this practice, you will take what you learned about transactions in SQL and 
apply them to a **Sequelize** model. You will implement transactions using the 
unmanaged syntax.


## Getting started

Download starter. `cd` into __server__ folder, and install dependencies using
`npm install`.

Create a __.env__ file modeled after __.env.example__, specifying the location 
of the database to be created.

Use `sequelize-cli` to run the migration and seeder files provided. They will 
create the following `Accounts` table in your database:

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


## Step 1: Unmanaged Transactions

In this first step, you will create an [unmanaged transaction][unmanaged] for 
transferring funds from one account to another. A try-catch block has been 
created for you in the `/unmanaged` endpoint that will encapsulate this 
transaction, as well as queries to perform the following actions:

  1. Find the `Account` associated with Rose Tyler.
  2. Add 200 to Rose's `balance`.
  3. Find the `Account` associated with Martha Jones.
  4. Subtract 200 from Martha's `balance`.

Before the `try`, use the `sequelize.transaction` method to create an unmanaged 
transaction. Remember that the unmanaged syntax invokes the `transaction` 
function and saves the result to a variable that will be used in any query 
associated with the transaction. Since the transaction will need to be accessed 
in both the `try` and the `catch` blocks, it should be created beforehand.

Within the `try`, associate each query related to the transfer of funds between 
Rose and Martha to the transaction. In each of these query's options object, add 
a `transaction` key which points to the variable that you created for the 
transaction.

After all of the queries related to the transaction have completed, `commit` the 
transaction to the database. Remember that in an unmanaged transaction, the 
`commit` function is manually called after all associated queries have been 
executed.

After this transaction is complete, a query has been implemented for you that 
will find all `Accounts`, ordered alphabetically by `firstName`, and return the 
result as JSON. 

The `catch` block will catch any errors from the transaction and pass them on to 
a standard error handler that has been created for you. In this unmanaged 
implementation, the transaction will need to be rolled back with the `rollback` 
function before the error handler is invoked. Add this function invocation and 
test that your transaction is working as intended by navigating to `/unmanaged` 
in your browser. Refresh the page multiple times. The `balance` in 
each account should reflect the addition or subtraction of funds on each 
refresh.

The `balance` of each `Account` has a validation that ensures only non-negative 
values (`balance` must be greater than `0`). Take a look at 
__db/models/account.js__ for this validation. Refresh the 
browser to hit this endpoint enough times to trigger this validation when 
subtracting `200` from Martha Jones' account. Ensure that the error has been 
caught and displayed by the error handler. Ensure that the transaction has been 
rolled back by navigating to `GET /accounts` to see that Martha's account 
balance does not go below `0` **AND** Rose's account balance does not go above 
`1400`. 

The `GET /accounts` endpoint should show the following (`id`, `createdAt`, and 
`updatedAt` attributes have been ommitted from this sample response for 
brevity):

```json
[
  {
     "firstName": "Amy",
     "lastName": "Pond",
     "balance": 900
  },
  {
     "firstName": "Donna",
     "lastName": "Noble",
     "balance": 200
  },
  {
     "firstName": "Martha",
     "lastName": "Jones",
     "balance": 0
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

You are now able to use transactions in **Sequelize** with unmanaged syntax.


[unmanaged]: https://sequelize.org/docs/v6/other-topics/transactions/#unmanaged-transactions