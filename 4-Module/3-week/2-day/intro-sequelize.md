# Writing SQL Using Javascript and Sequelize ORM!

## Sequelize has three major file types

### Models | Migrations | Seeders

---

## ORM (object relational mapping / mapper)
**Object Relational Mapping**: is a technique that allows programmers to work with data in a relational database (such as a SQL database) using an object-oriented approach.
- instances of an object in your code
which are mapped directly to rows of data in the database table.

**Mapper**: Library called Sequelize to work with your data directly using the JavaScript language, through a concept called Object Relational Mapping (ORM).
- Using javascript and object oriented programming to write javascript logic, and manipulate our database, instead of SQL

## Database Model 

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

Later we'll learn to create rows in our table using Sequelize syntax instead of saying `new Dog()`. (we will also learn how to create, read, update, delete data - CRUD)

For now, think of models as the blueprint or API that allows us to interact with the data / rows within our database.

---

## Migrations == Mutations 🦠

Any change to our database schema, including creating it!
- **makes and keeps track of changes in our schema (schema = structure of our database w/ all tables and its relationships**: JS File that defines a specific change within our database schema (i.e. maybe a change in a table, etc.).

Sequelize automatically generates migration files based on your models

- This makes migrations act as a version-control system
- Any change you make can be logged and reverted


**Examples:**
- **`adding new table:`** if you are starting a **new project**, you would run a **migration to create a new database table**. 
- **`changing existing colum:`** If you have an **existing project**, you might need to **run a migration to make a small change to a table, such as adding a new column**.
---

## Plant Data With Seeds 🌱
Think of it as **dummy data**. Seeder files are used to populate the database tables with sample data, or update the sample data as migrations are run. 

This allows us to test your application to make sure that we are able to access, interact with, and manipulate our data as needed, especially as the database may evolve over time.


Run a seeder to add or remove data from your db
