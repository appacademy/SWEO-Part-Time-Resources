## Database

- collection of interrelated tables with relevant data for a given application
  or service

## Table

- Made up of a specific set of columns which specify the type of data, and rows
  which hold the actual data (each row is called a record)
- Every row is a single instance of data, containing a value for every column

![](https://i.imgur.com/38Lpkm1.png)

## RDBMS - Relational Database Management System

- Program that allows you to create, update, and administer a relational
  database
- Can contain any number of databases
- Examples: PostgreSQL & Sqlite3


## SQL - Structured Query Language

- Language used to construct tables
- There are many tools that make writing SQL easier for us
  - We will learn one, Sequelize, next week!

## PostgreSQL

- What you will use when hosting your projects
- The database on your computer is not accessible by your pair
  - Each person will have their own database on their own computer

## Sqlite3

- What you will use for everything else, its a developmental database not used for large applications since its just a file
- The database is actually just a file in your project folder
- Can be pushed to github, so pairs can pick up from where you left off

## Key Notes To Keep In Mind

- This is another concept heavy mod and also "look-up" heavy week
  - Are we comfortable finding the syntax for how to do something?
  - Make sure you go over the readings, and practice with what they say in the readings
- Practice makes perfect, Bonus Practice makes a passing exam score


### Quick SQLite Commands Reference
Think as SQLite CLI commands like node commands.

- `sqlite3`
  - run `.open name-of-database.db` to open your database
- `sqlite3 name-of-database.db`
  - to run a specific database w/ sqlite3
  - open sqlite3 software RDBMS
- `.read name-of-file.sql`
  - read the sql file into the sqlite db
- `.schema`
  - Grab the schema (structure of how database looks like)


### Basic Intro SQL syntax
- **IMPORTANT: note the `;` at the end of each SQL command**
- Think of this syntax as something like javascript or css that we then execute to CREATE, READ, UPDATE, DELETE from a table.
- `CREATE TABLE <tableName> (...);`
  - generate the schema / structure layout of the table
- `SELECT <colName, ...> FROM <tableName>;`
  - SQL syntax to get all records from a given table
  - the one you'll see often: `SELECT * FROM <tableName>;`
    - `*` === select all from this table.
- `DROP TABLE <tableName>;`
  - drops and removes the table with that specified name
  - drop the table if we're trying to read from the .sql file again

- `INSERT INTO <tableName> VALUES (col1_val, col2_val, ...);`
  - inserting a record (row) into the table

- `DELETE FROM [table] WHERE [condition];`
  - deleting a record (row) from the table
  - for the condition think of a boolean
