# Mod 4 Week 6 Day 2

## What are Transactions
- Transactions are a method for grouping several of these sequential tasks together. With a transaction, only two results exist: a complete success or a failure. If any of the individual tasks within a transaction fails, the entire transaction fails. What makes this grouping so useful is that if the transaction fails at any point, the entirety of the block can be rolled back to its initial state at the start of the transaction.

## ACID Properties
- Atomicity: All operations within the work unit have been completed successfully. If a failure occurs at any point, the transaction is immediately aborted and all previous operations are rolled back to their former state.
- Consistency: The database properly changes state upon successfully committing a transaction. With no failures, the effects of the transaction are persisted to the database.
- Isolation: A transaction can operate independently of and transparent to other transactions. The success of the transaction is entirely dependent on the success of its own statements.
- Durability: The result or effect of a committed transaction persist in case of a system failure. A system failure in the middle of a transaction will not impact the integrity of the database, while a failure after a transaction has been committed will maintain the results of said transaction.

## SQL Transaction Syntax
- There are six major transaction control statements that you will encounter when working with transactions in raw SQL.

```
BEGIN TRANSACTION [ transaction_name ]
```
- indicates the starting point of a transaction. The transaction name can be used as a reference to the transaction block in later statements.
```
SET TRANSACTION [ READ ONLY | WRITE ONLY ]
```
- applies characteristics to a transaction block, such as the READ ONLY or WRITE ONLY attributes.
```
COMMIT
```
- saves to the database all of the statements that have occurred since the last COMMIT or ROLLBACK statement.
```
SAVEPOINT
```
- savepoint_name creates a point within a transaction that can be rolled back to other than the beginning of the transaction. The savepoint name can be used as a reference in later statements.
```
RELEASE SAVEPOINT [ savepoint_name ]
```
- removes the previous or named savepoint, no longer keeping it as a snapshot to roll back to.
```
ROLLBACK [ TO savepoint_name ]
```
- rolls back the transaction to the last COMMIT or ROLLBACK, or the named savepoint if provided, aborting all statements that have since occurred. If no previous COMMIT or ROLLBACK exists, the entire transaction is aborted.


## Readings and Quiz 30 min
#### [SQL Transactions](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-24---authorization-and-authentication/practice--sql-transactions)
- Short Q/A

## Short Practice 45 min-EOD [Sequelize Transactions](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-24---authorization-and-authentication/practice--sequelize-transactions)

# EOD
