# The final exam week until after projects!!!

## Roles vs Permissions

- Admin vs User

  - Admin & User: Add comment
  - Admin & User: Delete own comments
  - Admin: Delete other comments

## Model Scoping

Scopes allow us to query for data more efficiently. If we are going to be querying for the same data over and over, a scope can help make that easier

Scopes are defined in the init method on a model, in that second object we have been telling you to ignore

```js
Musician.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Musician',
    // Scopes go here!
  }
);
```

Scopes work much like an options object passed to a query, with the syntax being pretty much identical.

```js
defaultScope: {
  attributes: {
    // included attributes; all others are excluded
    include: ['title', 'author', 'isCheckedOut', 'location'];
  }
}

// or

defaultScope: {
  // Default scope: books that aren't checked out
  where: {
    isCheckedOut: false;
  }
}
```

## Types of scope

I think of scope as coming in two types: `defaultScope` and everything else

This is because `defaultScope` is written in it's own category, and all other scopes will fall within the `scopes` category

```js
{
  sequelize,
  modelName: 'Patient',
  defaultScope: {
    attributes: {
      exclude: ['medicalRecords'];
    }
  },
  scopes: {
    doctor: {
      attributes: {
        include: ['medicalRecords'];
      }
    }
  }
}
```

Dynamic scopes (function) will run whatever you tell them to, just be sure to return an options object. Syntax looks just like model validations

```js
// on Patient model
scopes: {
  findHospital(id) {
    const { Hospital } = require('../models');
    return {
      where: {
        hospitalId: id,
      },
      include: Hospital,
    };
  },
}
```

## Using model scopes

Normally, when we query, we would write something like this

```js
await Cat.findAll();
```

To find all orange cats, we would write

```js
await Cat.findAll({ where: { color: 'orange' } });
```

If we want to add a scope, all we have to do is chain `.scope('scopeName')` off of the model.

```js
// In model file
{
  sequelize,
  modelName: 'Cat',
  scopes: {
    isOrange: {
      where: {
        color: 'orange'
      }
    }
  }
}

// In app.js
await Cat.scope('isOrange').findAll();
```

These would return the same results!

Now if we wanted this to be more programmatic, we could write a function instead

```js
// In model file
{
  sequelize,
  modelName: 'Cat',
  scopes: {
    isColor(color) {
      return {
        where: {
          color
          // color: color
        }
      }
    }
  }
}
```

We would invoke this using this syntax

```js
await Cat.scope({ method: ['isColor', 'orange'] }).findAll();
```
