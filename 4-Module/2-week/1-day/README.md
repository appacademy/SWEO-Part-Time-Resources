# Databases & SQL

## Databases

- Store & persist large amounts of data
- RDMS - Relational Database Management System
  - Program to manage databases
  - Examples: PostgreSQL & Sqlite3

## PostgreSQL

- What you will use when hosting your projects
- The database is stored on a server
- Need internet to connect to it

## Sqlite3

- What you will use for everything else
- The database is just a file in your project folder
- File is local, so you always have it

## Sqlite CLI

- We can run SQL directly in our terminal
- Allows for quick access to our db data

## Table

- Columns are the "descriptions"
- Rows are the data values

## Columns

- Specifies data types
  - `INTEGER`
  - `DECIMAL`
  - `VARCHAR`
  - `TEXT`
  - `BOOLEAN`

## SQL - Structured Query Language

- Language used to construct tables
  - The 'goal' is different than JS
- Syntax is different depending on your flavor of SQL
- There are many tools that make writing SQL easier for us
  - We will learn one, Sequelize, next week!

## New Language Who Dis?

SQL's syntax is fairly readable and straightforward

- Commands need to end with `;`
- All caps is convention, not always required

### All Major Keywords

### `CREATE`

- `CREATE TABLE souls_like (...);`

### `DROP`

- `DROP TABLE souls_like;`

### `INSERT`

- `INSERT INTO souls_like VALUES (...);`

### `WHERE`

- `... WHERE id = 5;`

### `SELECT`

- `SELECT title, copies_sold FROM souls_like;`

### `DELETE`

- `DELETE FROM souls_like WHERE release_year = 2023;`

### `UPDATE`

- `UPDATE souls_like SET rating = 10 WHERE release_year = 2022;`

## Feeling sick after writing SQL in the terminal?

### Then ask your doctor about `.read filename.sql`

1. Write SQL in a file
2. Run `.read` **_in the Sqlite CLI_**
3. ???
4. Profit
