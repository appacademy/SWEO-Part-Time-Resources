# M4-W3-D2

## 1. SQL Indexes

---

### Idexes Readings and Quiz (30m)

---

### Walkthrough: SQL Indexes Quiz

---

### Discussion: SQL Indexes

#### Efficient Insertion, Deletion, and Space

| Notes | id PK | title          | content         | tag_name |
| :---: | :---: | :------------- | :-------------- | :------- |
|       |   1   | test           | test            | test     |
|       |   2   | I <3 Linux     | That is all     | tech     |
|       |   3   | JavaScript     | Is super weird  | tech     |
|       |   4   | Risk of Rain 2 | Best rougelike? | gaming   |

#### Efficient Lookup

| Tags | id PK | name     |
| :--: | :---: | :------- |
|      |   1   | test     |
|      |   2   | tech     |
|      |   3   | gaming   |
|      |   4   | thoughts |

| Notes | id PK | title          | content         | tag_id FK |
| :---: | :---: | :------------- | :-------------- | :-------: |
|       |   1   | test           | test            |     1     |
|       |   2   | I <3 Linux     | That is all     |     2     |
|       |   3   | JavaScript     | Is super weird  |     2     |
|       |   4   | Risk of Rain 2 | Best rougelike? |     3     |

**TLDR**: If a table will likely be seeing more reads than writes, it is a good
option to add an Index to relevant columns. There isn't a right answer for every
table, it requires you to think through the problem being solved by that table.

---

## 2. Benchmark SQL Queries

---

### Reading, Quiz, Practice (30m)

---

### Walkthrough: Quiz, Benchmark Practice

---

## 3. Intro to Sequelize

---

### Sequelize Readings and Quiz (30m)

---

### Walkthrough: Sequelize Quiz

---

### Discussion: Sequelize

#### Object Relational Mapping

Software that allows you to work with databases in an object oriented manner.

They allow you to work with instances of an object directly with JavaScript,
giving you the ability to be more dynamic than possible with raw SQL.

They also have a lot of built in safety features like being able to check bad data before
it is inserted into the database, which can help in effective error handling.

#### Important Elements of Sequelize

**Models**: A table "blueprint", it is a class that gives structure to the
creation of a SQL table. Allowing you to define columns, datatypes, constraints,
and relationships using JS syntax.

**Migrations**: A JS file that defines a specific change to a database schema.
This allows us to make changes to an existing schema without having to
completely wipe a database and start fresh.

**Seeders**: A js file that contains a list of initial entries for your
database, very helpful for kicking off a new database for testing. Using seeders
you dont need to input test data manually, you just run the seed command and
your database will populate with that initial data.

---

## 4. Sequelize in Express

---

### Practice: Sequelize in Express (20m)

---

### Walkthrough: Sequelize in Express

---
