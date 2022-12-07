# M4W2D2

## RDMS - Relational Database Management System

- Program that allows you to create, update, and administer a relational
  database
- Can contain any number of databases
- Examples: PostgreSQL & Sqlite3

## Database

- collection of interrelated tables with relevant data for a given application
  or service

## Table

- Made up of a specific set of columns which specify the type of data, and rows
  which hold the actual data
- Every row is a single instance of data, containing a value for every column

## SQL - Structured Query Language

- Language used to construct tables
- There are many tools that make writing SQL easier for us
  - We will learn one, Sequelize, next week!

## PostgreSQL

- What you will use when hosting your projects
- The database on your computer is not accessible by your pair
  - Each person will have their own database on their own computer

## Sqlite3

- What you will use for everything else
- The database is actually just a file in your project folder
- Can be pushed to github, so pairs can pick up from where you left off

## Key Notes To Keep In Mind

- This is another concept heavy week, and a "look-up" heavy week
  - Does it make sense why we do something when we do it?
  - Are we comfortable finding the syntax for how to do something?
  - Heavily lean on your readings to guide you
- Practice makes perfect, Bonus Practice makes a passing exam score

## CREATE/DROP

```js
DROP TABLE IF EXISTS «table name»;



CREATE TABLE «table name» (
  «column name» «data type»,
  «column name» «data type»,
  ...
  «column name» «data type»
);



```


## INSERTT 

```js
INSERT INTO table_name
VALUES
  (column1_value, column2_value, column3_value);

```
## SELECT

```js
CREATE TABLE puppies (
  id INTEGER,
  name VARCHAR(100),
  age_yrs DECIMAL(2,1),
  breed VARCHAR(100),
  weight_lbs INT,
  microchipped BOOLEAN
);

INSERT INTO puppies 
VALUES 
  (1, 'Cooper', 1, 'Miniature Schnauzer', 18, 1),
  (2, 'Indie', 0.5, 'Yorkshire Terrier', 13, 1),
  (3, 'Kota', 0.7, 'Australian Shepherd', 26, 0),
  (4, 'Zoe', 0.8, 'Korean Jindo', 32, 1),
  (5, 'Charley', 1.5, 'Basset Hound', 25, 0),
  (6, 'Ladybird', 0.6, 'Labradoodle', 20, 1),
  (7, 'Callie', 0.9, 'Corgi', 16, 0),
  (8, 'Jaxson', 0.4, 'Beagle', 19, 1),
  (9, 'Leinni', 1, 'Miniature Schnauzer', 25, 1),
  (10, 'Max', 1.6, 'German Shepherd', 65, 0);



SELECT name, age_yrs, weight_lbs FROM puppies;
```


## DELETE

```js
DELETE FROM puppies
  WHERE microchipped = 0;
```


## UPDATE

```js
UPDATE puppies
SET weight_lbs = weight_lbs + 10
WHERE name = 'Max'
```

## Today

  - Practice reading .sql Files
  - sql and express practice
  - basic sql long practice
