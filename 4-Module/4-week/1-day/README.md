# Relationships problems are complicated...

## Sequelize Foreign Keys - Migrations

In SQL, we would say `FOREIGN KEY` to indicate a relationship between tables.

In Sequelize, we instead have a `references` object on the migration

Like with SQL, reference is made on the migration with the FK, not the PK

- This indicates relationships as a _two way_ connection

```js
// on a migration for a one to many for a user
// ie: tweets/posts/appointments
userId: {
  type: Sequelize.INTEGER,
  references: {
    model: 'Users', // the TABLE name, not Model name shortHand for {table: 'Users'}
    key: 'id', // the column on the other Table
  },
	onDelete: 'CASCADE'
};
```

Note that the naming is confusing here. The `model` key points to a Table, not a Model

For a many-to-many, it's the exact same syntax, except on the joins table

- Put both foreign keys on the joins table

---

## Sequelize Associations - Models

Before we get into syntax, we have to understand how these relationships connect to each other

[Intro to Associations](https://open.appacademy.io/learn/js-py---pt-jul-2022-online/week-22---express-and-sequelize-pt--ii/intro-to-associations)
is such a good demonstration of how these associations work

Quick Reference:

- One-To-One
  - A has one B
  - B belongs to A
- One-To-Many
  - A has many B
  - B belongs to A
- Many-To-Many
  - A belongs to many B
  - B belongs to many A

### We've been ignoring the `static associate(models)` function, but now it's time to use it!

When we define an association on a model, we're declaring that model as the `source`

The first argument passed to the method is the `target`, and the provided FK will be defined on the targeted model

- Defining the foreign key is optional, but I always like to do it
  - Sequelize will automatically define it on the target if no FK is provided

### One-To-One

```js
// User Model File
class User extends Model {
  static associate(models) {
    User.hasOne(models.Preference, { foreignKey: 'userId' });
  }
}

// Preferences Model File
class Preferences extends Model {
  static associate(models) {
    Preferences.belongsTo(models.User, { foreignKey: 'userId' });
  }
}
```

### One-To-Many

```js
// Person Model File
class Person extends Model {
  static associate(models) {
    Person.hasMany(models.Job, {
      foreignKey: 'personId',
      onDelete: 'CASCADE',
      hooks: true,
    });
  }
}

// Job Model File
class Job extends Model {
  static associate(models) {
    Job.belongsTo(models.Person, { foreignKey: 'personId' });
  }
}
```

### Many-To-Many

```js
// Book Model File
class Book extends Model {
  static associate(models) {
    Book.belongsToMany(models.Reader, { through: models.BookReader });
  }
}

// Reader Model File
class Reader extends Model {
  static associate(models) {
    Reader.belongsToMany(models.Book, { through: models.BookReader });
  }
}
```

