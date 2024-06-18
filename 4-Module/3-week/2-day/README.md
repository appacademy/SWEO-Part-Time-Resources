# N+1 queries


```sql
-- Query to fetch books
SELECT * FROM Books;

-- Queries to fetch each book's author
SELECT * FROM Authors WHERE AuthorId = ?;
```

If there are 10 books, this pattern results in 1 query to get all books plus 10 additional queries to get each book's author, totaling 11 queries.


## Why is it a Problem?

The main issues with N+1 queries are:

  - Increased Latency: Each query incurs network and disk latency.
  - Increased Load: More queries mean more work for the database server.
  - Poor Scalability: As data grows, the impact magnifies.

## How do we fix it? 

Use SQL JOINs to fetch all necessary data in a single query. This approach reduces the number of database calls.

```sql
SELECT Books.*, Authors.*
FROM Books
JOIN Authors ON Books.AuthorId = Authors.AuthorId;
```




# SQL Optimized With Sequelize!

## Sequelize has three major file types

### Models | Migrations | Seeders

---

## Insta Model? 🤢 Database Model 😏

A 'model' for the data in our tables

JS Classes were the 'blueprints', and an instance was the 'building'

```js
class Dog {
  // this is the blueprint to make dogs
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.isGoodDog = true;
  }
}

const guardDog = new Dog('Cerberus', 1000); // an instance of the Dog class
```

Models are JS Classes as well! Every instance is a row in our table

```js
class Dog extends Model {
  static associate(models) {
    // how we create relationships between tables
  }
}

Dog.init(
  // this is basically the constructor
  {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    isGoodDog: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }
);
```

Later we'll learn to create rows in our table using Sequelize syntax instead of saying `new Dog()`

---

## Migrations == Mutations 🦠

Any change to our database schema, including creating it!

Sequelize automatically generates migration files based on your models

- This makes migrations act as a version-control system
- Any change you make can be logged and reverted

---

## Plant Data With Seeds 🌱

Seeder files are filled with dummy data to populate your site with

Run a seeder to add or remove data from your db
