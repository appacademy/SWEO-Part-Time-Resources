# Phase 4: User Auth Routes

It's finally time to create the authentication API routes!

In this section, you will add the following routes to your Express application:

- Login: `POST /api/session`
- Logout: `DELETE /api/session`
- Signup: `POST /api/users`
- Get session user: `GET /api/session`

## Login Git Feature Branch

Checkout the `dev` branch and make a new feature branch called `login` from the
`dev` branch.

```bash
git checkout dev
git checkout -b login
```

You will be making commits for adding a login endpoint to your backend
server.

## Session Router

First, create a file called `session.js` in the `backend/routes/api` folder.
This file will hold the resources for the route paths beginning with
`/api/session`. Create and export an Express router from this file.

```js
// backend/routes/api/session.js
const express = require('express')
const router = express.Router();

module.exports = router;
```

Next create a file called `users.js` in the `backend/routes/api` folder. This
file will hold the resources for the route paths beginning with `/api/users`.
Create and export an Express router from this file.

```js
// backend/routes/api/users.js
const express = require('express')
const router = express.Router();

module.exports = router;
```

Connect all the routers exported from these two files in the `index.js` file
nested in the `backend/routes/api` folder. Make sure to connect the routers
AFTER the `restoreUser` middleware is connected.

Your `backend/routes/api/index.js` file should now look like this:

```js
// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { restoreUser } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
```

## User Login API Route

In the `backend/routes/api/session.js` file, import the following code at the
top of the file and create an Express router:

```js
// backend/routes/api/session.js
const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();
```

Next, add the `POST /api/session` route to the router using an asynchronous
route handler. In the route handler, query for the user identified by the
provided credential (which can be either a `username` or `email`). Make sure to
turn off the default scope so that you can read all the attributes of the user
including `hashedPassword`.

If a user with those credentials isn't found in the database, then create a
`"Login failed"` error and invoke the `next` error-handling middleware with it.

Or if a user with those credentials IS found in the database, but the `password`
in the request body doesn't match the `hashedPassword` of the user found, then
invoke the `next` error-handling middleware with the same `"Login failed"`
error.

You can use the `compareSync` method from the `bcryptjs` node module to see if
the request body's `password` matches with the user's `hashedPassword` in the
database.

If the user's password is correct, call `setTokenCookie` and return a JSON
response with the user's non-sensitive information. Make sure the JSON response
doesn't include the `hashedPassword`.

Here's what the format of the JSON response should look like if the user is
successfully logged in:

```js
{
  user: {
    id,
    email,
    username
  }
}
```

```js
// backend/routes/api/session.js
// ...

// Log in
router.post(
  '/',
  async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.unscoped().findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential
        }
      }
    });

    if (!user || !bcrypt.compareSync(password, user.hashedPassword.toString())) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = { credential: 'The provided credentials were invalid.' };
      return next(err);
    }

    const safeUser = {
      id: user.id,
      email: user.email,
      username: user.username,
    };

    await setTokenCookie(res, safeUser);

    return res.json({
      user: safeUser
    });
  }
);
```

Make sure to export the `router` at the bottom of the file.

```js
// backend/routes/api/session.js
// ...

module.exports = router;
```

### Test the Login Route

Test the login route by navigating to the [http://localhost:8000/api/csrf/restore]
route and making a fetch request from the browser's DevTools console.
Remember, you need to pass in the value of the `XSRF-TOKEN` cookie as a header
in the fetch request because the login route has a `POST` HTTP verb.

If at any point you don't see the expected behavior while testing, then check
your backend server logs in the terminal where you ran `npm start`. Also, check
the syntax in the `session.js` as well as the `login` method in the `user.js`
model file.

Try to login the demo user with the username first.

```js
fetch('/api/session', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
  },
  body: JSON.stringify({ credential: 'Demo-lition', password: 'password' })
}).then(res => res.json()).then(data => console.log(data));
```

Remember to replace the `<value of XSRF-TOKEN cookie>` with the value of the
`XSRF-TOKEN` cookie found in your browser's DevTools. If you don't have the
`XSRF-TOKEN` cookie anymore, access the [http://localhost:8000/api/csrf/restore]
route to add the cookie back.

Then try to login the demo user with the email next.

```js
fetch('/api/session', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
  },
  body: JSON.stringify({ credential: 'demo@user.io', password: 'password' })
}).then(res => res.json()).then(data => console.log(data));
```

Now test an invalid user `credential` and `password` combination.

```js
fetch('/api/session', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
  },
  body: JSON.stringify({ credential: 'Demo-lition', password: 'Hello World!' })
}).then(res => res.json()).then(data => console.log(data));
```

You should get a `Login failed` error back with an invalid `password` for the
user with that `credential`.

## Commit your code

Now is a good time to commit and push your code to GitHub!

Here's a recommendation for what to write as your commit message:
"Add User login backend endpoint"

## Merge your feature branch into your dev branch

Once you thoroughly test that your `login` feature branch is working,
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
git merge login
```

Finally, push your changes to the development branch to the remote repository:

```bash
git push origin dev
```

## Logout Git Feature Branch

Checkout the `dev` branch and make a new feature branch called `logout` from the
`dev` branch.

```bash
git checkout dev
git checkout -b logout
```

You will be making commits for adding a logout endpoint to your backend
server.

## User Logout API Route

The `DELETE /api/session` logout route will remove the `token` cookie from the
response and return a JSON success message.

```js
// backend/routes/api/session.js
// ...

// Log out
router.delete(
  '/',
  (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
  }
);

// ...
```

### Test the Logout Route

Start by navigating to the [http://localhost:8000/api/csrf/restore] route and
making a fetch request from the browser's DevTools console to test the logout
route. Check that you are logged in by confirming that a `token` cookie is in
your list of cookies in the browser's DevTools. Remember, you need to pass in
the value of the `XSRF-TOKEN` cookie as a header in the fetch request because
the logout route has a `DELETE` HTTP verb.

Try to logout the session user.

```js
fetch('/api/session', {
  method: 'DELETE',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
  }
}).then(res => res.json()).then(data => console.log(data));
```

You should see the `token` cookie disappear from the list of cookies in your
browser's DevTools. If you don't have the `XSRF-TOKEN` cookie anymore, access
the [http://localhost:8000/api/csrf/restore] route to add the cookie back.

If you don't see this expected behavior while testing, then check your backend
server logs in the terminal where you ran `npm start` as well as the syntax in
the `session.js` route file.

## Commit your code

Now is a good time to commit and push your code to GitHub!

Here's a recommendation for what to write as your commit message:
"Add User logout backend endpoint"

## Merge your feature branch into your dev branch

Once you thoroughly test that your `logout` feature branch is working,
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
git merge logout
```

Finally, push your changes to the development branch to the remote repository:

```bash
git push origin dev
```

## Signup Git Feature Branch

Checkout the `dev` branch and make a new feature branch called `signup` from the
`dev` branch.

```bash
git checkout dev
git checkout -b signup
```

You will be making commits for adding a signup endpoint to your backend
server.

## User Signup API Route

In the `backend/routes/api/users.js` file, import the following code at the top
of the file and create an Express router:

```js
const express = require('express');
const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();
```

Next, add the `POST /api/users` route to the router using an asynchronous route
handler. In the route handler, deconstruct the request body, then use bcrypt's
`hashSync` function to hash the user's provided password to be saved as the
user's `hashedPassword` in the database. Create a new `User` in the database
with the `username` and `email` from the request body and the `hashedPassword`
generated from `bcryptjs`.

Then, use `setTokenCookie` to log in the user by creating a JWT cookie with the
user's non-sensitive information as its payload.

Finally, send a JSON response containing the user's non-sensitive information.

Here's what the format of the JSON response should look like if the user is
successfully created in the database:

```js
{
  user: {
    id,
    email,
    username
  }
}
```

```js
// backend/routes/api/users.js
// ...

// Sign up
router.post(
  '/',
  async (req, res) => {
    const { email, password, username } = req.body;
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({ email, username, hashedPassword });

    const safeUser = {
      id: user.id,
      email: user.email,
      username: user.username,
    };

    await setTokenCookie(res, safeUser);

    return res.json({
      user: safeUser
    });
  }
);
```

Make sure to export the `router` at the bottom of the file.

```js
// backend/routes/api/users.js
// ...

module.exports = router;
```

### Test the Signup Route

Test the signup route by navigating to the [http://localhost:8000/api/csrf/restore]
route and making a fetch request from the browser's DevTools console.
Remember, you need to pass in the value of the `XSRF-TOKEN` cookie as a header
in the fetch request because the login route has a `POST` HTTP verb.

If at any point you don't see the expected behavior while testing, check your
backend server logs in the terminal where you ran `npm start`. Also, check the
syntax in the `users.js` route file as well as the `signup` method in the
`user.js` model file.

Try to signup a new valid user.

```js
fetch('/api/users', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
  },
  body: JSON.stringify({
    email: 'spidey@spider.man',
    username: 'Spidey',
    password: 'password'
  })
}).then(res => res.json()).then(data => console.log(data));
```

Remember to replace the `<value of XSRF-TOKEN cookie>` with the value of the
`XSRF-TOKEN` cookie found in your browser's DevTools. If you don't have the
`XSRF-TOKEN` cookie anymore, access the [http://localhost:8000/api/csrf/restore]
route to add the cookie back.

Next, try to hit the Sequelize model validation errors by testing the following
which should give back a `Validation error`:

- `email` is not unique (signup with an existing `email`)
- `username` is not unique (signup with an existing `username`)

If you don't see the `Validation error` for any of these, check the syntax in
your `backend/db/models/user.js` model file.

## Commit your code

Now is a good time to commit and push your code to GitHub!

Here's a recommendation for what to write as your commit message:
"Add User signup backend endpoint"

## Merge your feature branch into your dev branch

Once you thoroughly test that your `signup` feature branch is working,
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
git merge signup
```

Finally, push your changes to the development branch to the remote repository:

```bash
git push origin dev
```

## Get Session Git Feature Branch

Checkout the `dev` branch and make a new feature branch called `get-session`
from the `dev` branch.

```bash
git checkout dev
git checkout -b get-session
```

You will be making commits for adding an endpoint to get the current user
session to your backend server.

## Get Session User API Route

The `GET /api/session` get session user route will return the session user
as JSON under the key of `user` . If there is not a session, it will return a
JSON with an empty object. `req.user` should be assigned when the `restoreUser`
middleware is called as it was connected to the router in the
`routes/api/index.js` file before the `routes/api/session.js` was connected to
the router (`router.use(restoreUser)`).

Add the route to the `router` in the `backend/routes/api/session.js` file.

```js
// backend/routes/api/session.js
// ...

// Restore session user
router.get(
  '/',
  (req, res) => {
    const { user } = req;
    if (user) {
      const safeUser = {
        id: user.id,
        email: user.email,
        username: user.username,
      };
      return res.json({
        user: safeUser
      });
    } else return res.json({ user: null });
  }
);

// ...
```

### Test the Get Session User Route

Test the route by navigating to [http://localhost:8000/api/session]. You should
see the current session user information if you have the `token` cookie. If you
don't have a token cookie, you should see an empty object returned.

If you don't have the `XSRF-TOKEN` cookie anymore, access the
[http://localhost:8000/api/csrf/restore] route to add the cookie back.

If you don't see this expected behavior, then check your backend server logs in
your terminal where you ran `npm start` and the syntax in the `session.js` route
file and the `restoreUser` middleware function.

## Commit your code

Now is a good time to commit and push your code to GitHub!

Here's a recommendation for what to write as your commit message:
"Add a backend endpoint to get the current user session"

## Merge your feature branch into your dev branch

Once you thoroughly test that your `get-session` feature branch is working,
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
git merge get-session
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
