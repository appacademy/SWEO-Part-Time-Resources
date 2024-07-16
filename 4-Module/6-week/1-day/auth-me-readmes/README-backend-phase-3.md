# Phase 3: User Authentication

Now that you have finished setting up both Sequelize and the Express
application, you are ready to start implementing user authentication in the
backend.

## Git Feature Branch

Authentication is a feature that you will be adding into your project in this
phase. You will be setting up Sequelize and Express middleware for
authentication.

You will create a new feature branch in git and commit all your code written in
this phase to that branch.

Before you start, make sure you have set up a remote git repository on GitHub
and have a local repository initialized in your project that is connected
to the remote GitHub repository.

Running the following command will help you confirm that you have set this up
correctly.

```bash
git remote get-url origin
```

Make sure you are starting from the `main` branch and have committed all your
code before this in the `main` branch.

Running `git branch` should show the following output:

```plaintext
* main
```

Running the following command should show no files to be committed:

```bash
git status
```

Call an instructor if you need help with any of the steps above.

Now, create a branch off of the `main` branch for development called `dev`.
This branch will hold all the changes that are not yet in production.

```bash
git checkout -b dev
```

Push the created `dev` branch to the GitHub remote repository.

```bash
git push origin dev
```

Then checkout a feature branch called `auth-setup` from the `dev` branch.

```bash
git checkout -b auth-setup
```

You will be making commits to this branch until the end of this phase.

## Dependencies

`cd` into the `backend` folder and run `npm install bcryptjs` to install
the dependency that you will be using to hash passwords.

## Database Schema for the Users Table

With Sequelize, you will create a `Users` table that will have the following
schema:

| column name      |   data type   | constraints                                   |
| :--------------- | :-----------: | :-------------------------------------------- |
| `id`             |    integer    | not null, primary key                         |
| `username`       |    string     | not null, unique, max 30 characters  |
| `email`          |    string     | not null, unique, max 256 characters |
| `hashedPassword` | binary string | not null                                      |
| `createdAt`      |   datetime    | not null, default value of now()              |
| `updatedAt`      |   datetime    | not null, default value of now()              |

## Users Table Migration

First, generate a migration and model file. Navigate into the `backend` folder
in the terminal and run the following command:

```bash
npx sequelize model:generate --name User --attributes username:string,email:string,hashedPassword:string
```

This will create a file in your `backend/db/migrations` folder and a file called
`user.js` in your `backend/db/models` folder.

In the migration file, apply the constraints in the schema. Remember to define
the default constraints for the `createdAt` and `updatedAt` columns.

You should
also define the schema name for the Postgres production database in the options object at the top of the file, and include
the options object in both the up and down functions.  All `queryInterface` method calls except `createTable` will require 
the options object as the first argument, with the appropriate `tableName` property.

If completed correctly, your migration file should look something like this:

```js
'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true
      },
      hashedPassword: {
        type: Sequelize.STRING.BINARY,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, options);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Users";
    return queryInterface.dropTable(options);
  }
};
```

Migrate the `Users` table by running the following command:

```bash
npx dotenv sequelize db:migrate
```

If there is an error when migrating, check your migration file and make changes.

If there is no error when migrating, but you want to change the migration file
afterwards, undo the migration first, change the file, then migrate again.

Command to undo the migration:

```bash
npx dotenv sequelize db:migrate:undo
```

You can check out the `Users` table schema created in your SQLite3 database
by running the following command in the terminal:

```bash
sqlite3 db/dev.db ".schema Users"
```

> _Note: In this migration, you specified a schema name for the production environment only. When you look at your data in sqlite in the development environment, the tables will not be prefixed by the schema name. They will only be prefixed in the production environment.

## User Model

After you migrate the `Users` table with the database-level constraints, you
need to add Sequelize model-level constraints. In your `User` model file,
`backend/db/models/user.js`, add the following constraints:

| column name      |   data type   | constraints                                                       |
| :--------------- | :-----------: | :---------------------------------------------------------------- |
| `username`       |    string     | not null, unique, min 4 characters, max 30 characters, isNotEmail |
| `email`          |    string     | not null, unique, min 3 characters, max 256 characters, isEmail   |
| `hashedPassword` | binary string | not null, min and max 60 characters                               |

See the Sequelize docs on [model-level validations] for a reminder on how to
apply these constraints. A custom validator needs to be created for the
`isNotEmail` constraint. See here for a refresher on [custom Sequelize
validators][model-level validations]. You can use the imported `isEmail`
validation from the `sequelize` package's `Validator` to check if the `username`
is an email. If it is, throw an error with a message.

Your `user.js` file should look like this with the applied constraints:

```js
'use strict';

const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  };

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [3, 256],
          isEmail: true
        }
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60]
        }
      }
    }, {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};
```

## User Seeds

Generate a user seeder file for the demo user with the following command:

```bash
npx sequelize seed:generate --name demo-user
```

In the seeder file, create a demo user with `email`, `username`, and
`hashedPassword` fields. For the `down` function, delete the user with the
`username` or `email` of the demo user.

You should also define the schema name for the Postgres production database in the options object at the top of the file,
and include the options object in both the up and down functions.

If you'd like, you can also add other users and populate the fields with random
fake data. To generate the `hashedPassword` you should use the `bcryptjs`
package's `hashSync` method.

Your seeder file should look something like this:

```js
'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      }
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};

```

Notice how you do not need to add the `createdAt` and `updatedAt` fields for the
users. This is a result of the default value that you defined in the Sequelize
migration file for those fields.

Make sure to import `bcryptjs` at the top of the file.

After you finish creating your demo user seed file, migrate the seed file by
running the following command:

```bash
npx dotenv sequelize db:seed:all
```

If there is an error with seeding, check your seed file and make changes.

If there is no error in seeding but you want to change the seed file, remember
to undo the seed first, change the file, then seed again.

Command to undo the migration for the most recent seed file:

```bash
npx dotenv sequelize db:seed:undo
```

Command to undo the migrations for all the seed files:

```bash
npx dotenv sequelize db:seed:undo:all
```

Check your database to see if the users have been successfully created by
running:

```bash
sqlite3 db/dev.db 'SELECT * FROM "Users"'
```

## Commit your code

Now is a good time to commit and push your code to GitHub!

Here's a recommendation for what to write as your commit message:
"Add Users table migration and seeds"

## Model Scopes - Protecting Users' Information

To ensure that a user's information like their `hashedPassword` doesn't get
sent to the frontend, you should define `User` model scopes. Check out the
official documentation on [model scoping] to look up how to define a model scope
to prevent certain fields from being sent in a query.

For the default query when searching for `Users`, the `hashedPassword`,
`updatedAt`, and, depending on your application, `email` and `createdAt` fields
should not be returned. To do this, set a `defaultScope` on the `User` model to
exclude the desired fields from the default query. For example, when you run
`User.findAll()` all fields besides `hashedPassword`, `updatedAt`, `email`, and
`createdAt` will be populated in the return of that query.

Your `user.js` model file should now look like this:

```js
'use strict';
const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  };

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
          isEmail: true
        }
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60]
        }
      }
    },
    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"]
        }
      }
    }
  );
  return User;
};
```

This scope will help protect sensitive user information that should not be exposed
to other users.

## Authentication Flow

The backend login flow in this project will be based on the following plan:

1. The API login route will be hit with a request body holding a valid
   credential (either username or email) and password combination.
2. The API login handler will look for a `User` with the input credential in
   either the `username` or `email` columns.
3. Then the `hashedPassword` for that found `User` will be compared with the
   input `password` for a match.
4. If there is a match, the API login route should send back a JWT in an
   HTTP-only cookie and a response body. The JWT and the body will hold the
   user's `id`, `username`, and `email`.

The backend sign-up flow in this project will be based on the following plan:

1. The API signup route will be hit with a request body holding a `username`,
   `email`, and `password`.
2. The API signup handler will create a `User` with the `username`, an `email`,
   and a `hashedPassword` created from the input `password`.
3. If the creation is successful, the API signup route should send back a JWT in
   an HTTP-only cookie and a response body. The JWT and the body will hold the
   user's `id`, `username`, and `email`.

The backend logout flow will be based on the following plan:

1. The API logout route will be hit with a request.
2. The API logout handler will remove the JWT cookie set by the login or signup
   API routes and return a JSON success message.

## Commit your code

Now is a good time to commit and push your code to GitHub!

Here's a recommendation for what to write as your commit message:
"Add User model scope for user security"

## User Auth Middlewares

There are three functions in this section that will aid you in authentication.

Create a folder called `utils` in your `backend` folder. Inside that folder, add
a file named `auth.js` to store the auth helper functions.

At the top of the file, add the following imports:

```js
// backend/utils/auth.js
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');

const { secret, expiresIn } = jwtConfig;
```

### `setTokenCookie`

This first function is setting the JWT cookie after a user is logged in or
signed up. It takes in the response and the session user and generates a JWT
using the imported secret. It is set to expire in however many seconds you
set on the `JWT_EXPIRES_IN` key in the `.env` file. The payload of the JWT will
be the user's `id`, `username`, and `email` attributes. Do NOT add the user's
`hashedPassword` attribute to the payload. After the JWT is created, it's set to
an HTTP-only cookie on the response as a `token` cookie.

```js
// backend/utils/auth.js
// ...

// Sends a JWT Cookie
const setTokenCookie = (res, user) => {
  // Create the token.
  const safeUser = {
    id: user.id,
    email: user.email,
    username: user.username,
  };
  const token = jwt.sign(
    { data: safeUser },
    secret,
    { expiresIn: parseInt(expiresIn) } // 604,800 seconds = 1 week
  );

  const isProduction = process.env.NODE_ENV === "production";

  // Set the token cookie
  res.cookie('token', token, {
    maxAge: expiresIn * 1000, // maxAge in milliseconds
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && "Lax"
  });

  return token;
};
```

This function will be used in the login and signup routes later.

### `restoreUser`

Certain authenticated routes will require the identity of the current session
user. You will create and utilize a middleware function called restoreUser that
will restore the session user based on the contents of the JWT cookie.

Create a middleware function that will verify and parse the JWT's payload and
search the database for a `User` with the id in the payload. The default scope
on the `User` model, however, prevents the `hashedPassword`, `email`,
`createdAt`, and `updatedAt` attributes from returning from that search. You
want to include the `email`, `createdAt`, and `updatedAt` attributes to be
returned in the search (but not `hashedPassword`).

If there is a `User` found in the search, then save the user to a key of
`user` onto the Request (`req.user`). If there is an error verifying the JWT or
a `User`cannot be found with the `id` in the JWT payload, then clear the `token`
cookie from the response and set `req.user` to `null`.

```js
// backend/utils/auth.js
// ...

const restoreUser = (req, res, next) => {
  // token parsed from cookies
  const { token } = req.cookies;
  req.user = null;

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      return next();
    }

    try {
      const { id } = jwtPayload.data;
      req.user = await User.findByPk(id, {
        attributes: {
          include: ['email', 'createdAt', 'updatedAt']
        }
      });
    } catch (e) {
      res.clearCookie('token');
      return next();
    }

    if (!req.user) res.clearCookie('token');

    return next();
  });
};
```

The `restoreUser` middleware will be connected to the API router so that all API
route handlers will check if there is a current user logged in or not.

### `requireAuth`

The last authentication middleware to add is for requiring a session user to be
authenticated before accessing a route.

Create an Express middleware called `requireAuth`. Define this middleware as an
array with the `restoreUser` middleware function you just created as the first
element in the array. This will ensure that if a valid JWT cookie exists, the
session user will be loaded into the `req.user` attribute. The second middleware
will check `req.user` and will go to the next middleware if there is a session
user present there. If there is no session user, then an error will be created
and passed along to the error-handling middlewares.

```js
// backend/utils/auth.js
// ...

// If there is no current user, return an error
const requireAuth = function (req, _res, next) {
  if (req.user) return next();

  const err = new Error('Authentication required');
  err.title = 'Authentication required';
  err.errors = { message: 'Authentication required' };
  err.status = 401;
  return next(err);
}
```

`requireAuth` will be connected directly to route handlers where there needs to
be a current user logged in for the actions in those route handlers.

Finally, export all the functions at the bottom of the file.

```js
// backend/utils/auth.js
// ...

module.exports = { setTokenCookie, restoreUser, requireAuth };
```

### Test User Auth Middlewares

Let's do some testing! It's always good to test your code anytime you have an
opportunity to do it. Testing at the very end is not a good idea because it will
be hard to pinpoint the location of the error in your code.

Add a test route in your `backend/routes/api/index.js` file that will test the
`setTokenCookie` function by getting the demo user and calling `setTokenCookie`.

```js
// backend/routes/api/index.js
// ...

// GET /api/set-token-cookie
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Demo-lition'
    }
  });
  setTokenCookie(res, user);
  return res.json({ user: user });
});

// ...
```

Go to [http://localhost:8000/api/set-token-cookie] and see if there is a `token`
cookie set in your browser's DevTools. If there isn't, then check your backend
server logs in the terminal where you ran `npm start`. Also, check the syntax
of your `setTokenCookie` function as well as the test route.

Import the `restoreUser` middleware and connect it to the router before any
other middleware or route handlers are connected to the router.

Next, add a test route in your `backend/routes/api/index.js` file that will test
the `restoreUser` middleware and check whether or not the `req.user` key has
been populated by the middleware properly.

```js
// backend/routes/api/index.js
// ...

// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');

router.use(restoreUser);

router.get(
  '/restore-user',
  (req, res) => {
    return res.json(req.user);
  }
);

// ...
```

Go to [http://localhost:8000/api/restore-user] and see if the response has the
demo user information returned as JSON. Then, remove the `token` cookie manually
in your browser's DevTools and refresh. The JSON response should be empty.

If this isn't the behavior, then check your backend server logs in the terminal
where you ran `npm start` as well as the syntax of your `restoreUser` middleware
and test route.

To set the `token` cookie back, just go to the `GET /api/set-token-cookie` route
again: [http://localhost:8000/api/set-token-cookie].

Lastly, test your `requireAuth` middleware by adding a test route in your
`backend/routes/api/index.js` file. If there is no session user, the route will
return an error. Otherwise it will return the session user's information.

```js
// backend/routes/api/index.js
// ...

router.use(restoreUser);

// ...

// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);

// ...
```

Set the `token` cookie back by accessing the `GET /api/set-token-cookie` route
again: [http://localhost:8000/api/set-token-cookie].

Go to [http://localhost:8000/api/require-auth] and see if the response has the
demo user's information returned as JSON. Then, remove the `token` cookie
manually in your browser's DevTools and refresh. The JSON response should now
be an `"Unauthorized"` error.

If this isn't the behavior, then check your backend server logs in the terminal
where you ran `npm start` as well as the syntax of your `requireAuth` middleware
and test route.

To set the `token` cookie back, just go to the `GET /api/set-token-cookie` route
again: [http://localhost:8000/api/set-token-cookie].

**Once you are satisfied with the test results, you can remove all code for
testing the user auth middleware routes.**

**Make sure to keep the `restoreUser` middleware connected before any other
middleware or route handlers are connected to the router.** This will allow
all route handlers connected to this router to retrieve the current user on the
Request object as `req.user`. If there is a valid current user session, then
`req.user` will be set to the `User` in the database. If there is NO valid
current user session, then `req.user` will be set to `null`.

Your `backend/routes/api/index.js` should look something like this:

```js
// backend/routes/api/index.js
const router = require("express").Router();
const { restoreUser } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null
router.use(restoreUser);

module.exports = router;
```

## Commit your code

Now is a good time to commit and push your code to GitHub!

Here's a recommendation for what to write as your commit message:
"Add User authentication Express middleware"

## Merge your feature branch into your dev branch

Once you thoroughly test that your `auth-setup` feature branch is working,
merge the branch into the `dev` branch.

To do this, first checkout the `dev` branch:

```bash
git checkout dev
```

Then, make sure you have the latest changes in the development branch from
your remote repository in your local repository (this is useful when
collaborating with other developers):

```bash
git pull origin dev
```

Then, merge the feature branch into the `dev` branch:

```bash
git merge auth-setup
```

Finally, push your changes to the development branch to the remote repository:

```bash
git push origin dev
```

[helmet on the `npm` registry]: https://www.npmjs.com/package/helmet
[Express error-handling middleware]: https://expressjs.com/en/guide/using-middleware.html#middleware.error-handling
[model-level validations]: https://sequelize.org/master/manual/validations-and-constraints.html
[model scoping]: https://sequelize.org/master/manual/scopes.html
[Content Security Policy]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
[Cross-Site Scripting]: https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting
[crossOriginResourcePolicy]: https://www.npmjs.com/package/helmet
[http://localhost:8000/hello/world]: http://localhost:8000/hello/world
[http://localhost:8000/not-found]: http://localhost:8000/not-found
[http://localhost:8000/api/set-token-cookie]: http://localhost:8000/api/set-token-cookie
[http://localhost:8000/api/restore-user]: http://localhost:8000/api/restore-user
[http://localhost:8000/api/require-auth]: http://localhost:8000/api/require-auth
[http://localhost:8000/api/session]: http://localhost:8000/api/session
[http://localhost:8000/api/csrf/restore]: http://localhost:8000/api/csrf/restore
