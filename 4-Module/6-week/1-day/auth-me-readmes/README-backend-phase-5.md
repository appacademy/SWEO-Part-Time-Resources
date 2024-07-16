# Phase 5: Validating the Request Body

Before using the information in the body of the request, it's good practice to
validate the information.

You will use a package, `express-validator`, to validate the body of the
requests for routes that expect a request body. The `express-validator` package
has two functions, `check` and `validationResult` that are used together to
validate the request body. `check` is a middleware function creator that
checks a particular key on the request body. `validationResult` gathers the
results of all the `check` middlewares that were run to determine which parts of
the body are valid and invalid.

## Validate Login Inputs Git Feature Branch

Checkout the `dev` branch and make a new feature branch called
`validate-login-inputs` from the `dev` branch.

```bash
git checkout dev
git checkout -b validate-login-inputs
```

You will be making commits for adding user input validation on user login
requests to the backend server.

## Dependencies

Run `npm install express-validator` to install the dependency that you will use
to validate user input from request bodies.

## Validation Middleware

In the `backend/utils` folder, add a file called `validation.js`. In this file,
define an Express middleware called `handleValidationErrors` that will call
`validationResult` from the `express-validator` package passing in the request.
If there are no validation errors returned from the `validationResult` function,
invoke the next middleware. If there are validation errors, create an error
with all the validation error messages and invoke the next error-handling
middleware.

```js
// backend/utils/validation.js
const { validationResult } = require('express-validator');

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) { 
    const errors = {};
    validationErrors
      .array()
      .forEach(error => errors[error.path] = error.msg);

    const err = Error("Bad request.");
    err.errors = errors;
    err.status = 400;
    err.title = "Bad request.";
    next(err);
  }
  next();
};

module.exports = {
  handleValidationErrors
};
```

The `handleValidationErrors` function is exported at the bottom of the file. You
will test this function later when it's used.

Here's another great time to commit!

## Validating Login Request Body

In the `backend/routes/api/session.js` file, import the `check` function from
`express-validator` and the `handleValidationError` function you just created.

```js
// backend/routes/api/session.js
// ...
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
// ...
```

The `check` function from `express-validator` will be used with the
`handleValidationErrors` to validate the body of a request.

The `POST /api/session` login route will expect the body of the request to have
a key of `credential` with either the `username` or `email` of a user and a key
of `password` with the password of the user.

Make a middleware called `validateLogin` that will check these keys and validate
them:

```js
// backend/routes/api/session.js
// ...

const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email or username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  handleValidationErrors
];
```

The `validateLogin` middleware is composed of the `check` and
`handleValidationErrors` middleware. It checks to see whether or not
`req.body.credential` and `req.body.password` are empty. If one of them is
empty, then an error will be returned as the response.

Next, connect the `POST /api/session` route to the `validateLogin` middleware.
Your login route should now look like this:

```js
// backend/routes/api/session.js
// ...

// Log in
router.post(
  '/',
  validateLogin,
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

### Test the Login Validation

Test `validateLogin` by navigating to the [http://localhost:8000/api/csrf/restore]
test route and making a fetch request from the browser's DevTools console.
Remember, you need to pass in the value of the `XSRF-TOKEN` cookie as a header
in the fetch request because the login route has a `POST` HTTP verb.

If at any point you don't see the expected behavior while testing, check your
backend server logs in the terminal where you ran `npm start`. Also, check the
syntax in the `users.js` route file as well as the `handleValidationErrors`
middleware.

Try setting the `credential` user field to an empty string. You should get a
`Bad Request` error back.

```js
fetch('/api/session', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
  },
  body: JSON.stringify({ credential: '', password: 'password' })
}).then(res => res.json()).then(data => console.log(data));
```

Remember to replace the `<value of XSRF-TOKEN cookie>` with the value of the
`XSRF-TOKEN` cookie found in your browser's DevTools. If you don't have the
`XSRF-TOKEN` cookie anymore, access the [http://localhost:8000/api/csrf/restore]
route to add the cookie back.

Test the `password` field by setting it to an empty string. You should get a
`Bad Request` error back with `Please provide a password` as one of the errors.

```js
fetch('/api/session', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
  },
  body: JSON.stringify({ credential: 'Demo-lition', password: '' })
}).then(res => res.json()).then(data => console.log(data));
```

## Commit your code

Now is a good time to commit and push your code to GitHub!

Here's a recommendation for what to write as your commit message:
"Add User input validation on user login backend endpoint"

## Merge your feature branch into your dev branch

Once you thoroughly test that your `validate-login-inputs` feature branch is
working,
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
git merge validate-login-inputs
```

Finally, push your changes to the development branch to the remote repository:

```bash
git push origin dev
```

## Validate Signup Inputs Git Feature Branch

Checkout the `dev` branch and make a new feature branch called
`validate-signup-inputs` from the `dev` branch.

```bash
git checkout dev
git checkout -b validate-signup-inputs
```

You will be making commits for adding user input validation on user signup
requests to the backend server.

## Validating Signup Request Body

In the `backend/routes/api/users.js` file, import the `check` function from
`express-validator` and the `handleValidationError` function you created.

```js
// backend/routes/api/users.js
// ...
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
// ...
```

The `POST /api/users` signup route will expect the body of the request to have
a key of `username`, `email`, and `password` with the password of the user
being created.

Make a middleware called `validateSignup` that will check these keys and
validate them:

```js
// backend/routes/api/users.js
// ...
const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];
```

The `validateSignup` middleware is composed of the `check` and
`handleValidationErrors` middleware. It checks to see if `req.body.email` exists
and is an email, `req.body.username` is a minimum length of 4 and is not an
email, and `req.body.password` is not empty and has a minimum length of 6. If at
least one of the `req.body` values fail the check, an error will be returned as
the response.

Next, connect the `POST /api/users` route to the `validateSignup` middleware.
Your signup route should now look like this:

```js
// backend/routes/api/users.js
// ...

// Sign up
router.post(
  '/',
  validateSignup,
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

### Test the Signup Validation

Test `validateSignup` by navigating to the [http://localhost:8000/api/csrf/restore]
route and making a fetch request from the browser's DevTools console.
Remember, you need to pass in the value of the `XSRF-TOKEN` cookie as a header
in the fetch request because the login route has a `POST` HTTP verb.

If at any point you don't see the expected behavior while testing, check your
backend server logs in the terminal where you ran `npm start`. Also, check the
syntax in the `users.js` route file as well as the `handleValidationErrors`
middleware.

First, test the signup route with an empty `password` field. You should get a
`Bad Request` error back with `Password must be 6 characters or more.` as one of
the errors.

```js
fetch('/api/users', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
  },
  body: JSON.stringify({
    email: 'firestar@spider.man',
    username: 'Firestar',
    password: ''
  })
}).then(res => res.json()).then(data => console.log(data));
```

Remember to replace the `<value of XSRF-TOKEN cookie>` with the value of the
`XSRF-TOKEN` cookie found in your browser's DevTools. If you don't have the
`XSRF-TOKEN` cookie anymore, access the [http://localhost:8000/api/csrf/restore]
route to add the cookie back.

Then try to sign up with more invalid fields to test out the checks in the
`validateSignup` middleware. Make sure to cover each of the following test
cases which should give back a `Bad Request` error:

- `email` field is an empty string
- `email` field is not an email
- `username` field is an empty string
- `username` field is only 3 characters long
- `username` field is an email
- `password` field is only 5 characters long

If you don't see the `Bad Request` error for any of these, check your syntax for
the `validateSignup` middleware.

## Commit your code

Now is a good time to commit and push your code to GitHub!

Here's a recommendation for what to write as your commit message:
"Add User input validation on user signup backend endpoint"

## Merge your feature branch into your dev branch

Once you thoroughly test that your `validate-signup-inputs` feature branch is
working,
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
git merge validate-signup-inputs
```

Finally, push your changes to the development branch to the remote repository:

```bash
git push origin dev
```

## Wrapping up the Backend

**Do not remove the `POST /api/test` route just yet. You will be using it much
later when setting up your frontend.**

### Refactor to add `firstName` and `lastName` attributes

Now, try to refactor your code to add this simple change.

Update your server files to add `firstName` and `lastName` attributes to a
`User` in your database. **Make sure to update your migration and model files
and your route handlers** to reflect this change!

Confirm that your `POST /api/session` and your `POST /api/users` endpoints return the
user in the following format on successful login/signup:

```js
{
  user: {
    id,
    firstName,
    lastName,
    email,
    userName
  }
}
```

Confirm that your `GET /api/session` endpoint returns the user in the following
format if there is a logged in user:

```js
{
  user: {
    id,
    firstName,
    lastName,
    email,
    userName
  }
}
```

Confirm that your `GET /api/session` endpoint returns the following if there
is **no** logged in user:

```js
{
  user: null
}
```

### Next Steps

Awesome work! You just finished setting up the entire backend for this project!
In the next part, you will deploy the application to Render.

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
