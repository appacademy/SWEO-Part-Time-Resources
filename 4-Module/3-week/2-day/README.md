
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
