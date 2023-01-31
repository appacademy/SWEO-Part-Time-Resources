# Environment Variables (.env) and Middleware

## Environments - looking for a change in scenery

An environment is literally **_where we are_**, what machine the code is running on.

Environment variables allow us to use variables in our code based on our environment. They are setup in key / value pairs (variable name / value), and the syntax is very specific.

```md
PASSWORD=badPassword123
NODE_ENV=production
SPACES='must be in quotes'
```

## Common environments and potential variable differences

Let's say we are using environment variables for username and password values for a user to login with. Those values should be different depending on the environment we're in.

- Testing - Values are set to test the constraints of our login & signup functions. You might want to check:
  - Does a password with special characters throw an error?
  - Can an account get created with a username that already exists?
- Staging/Development - Values are set to work on a particular piece of functionality. You might be developing:
  - The admin control page, so your Values are set to an admin's account.
  - A new user's welcome screen, so your Values are set to a brand new account.
- Production - Values are empty and are instead supplied by a user when they log in/sign up

This is not an exact use case for environment variables, but they are used in a similar way to this. We will get a better understanding of how they are used once we learn databases. The databases will be what our passwords are for, not a user.

## Why else are they useful?

- We can store info in them that never leaves our machine
  - This easily allows multiple developers to have different values for each environment variable
  - Must use .gitignore to ensure this happens
- Accessible from anywhere in our app

```js
process.env; // holds all our environment variables
```

## So how do I use them?

Simplest (and worst) way is to throw it right before your command in the terminal

```md
# Runs app.js with process.env.password set to "MomoLover"

PASSWORD=MomoLover node app.js

# Runs app.js with process.env.password set to "MomoLover" and process.env.port set to 3200

PASSWORD=MomoLover PORT=3200 node app.js
```

This is the worst way because you have to rewrite the environment variables every single time! That's where .env comes in

## .env files, storing our environment variables

If you put all your environment variables in a single .env file, you can load them from that file into any page in your application

```md
# In /.env

NAME=Zaviar
MUSIC=lofi
PASSWORD=YouWillNeverKnow
```

There's two ways to access these values:

- `npm install dotenv`

```js
// in whatever file you want to use the .env variables

require('dotenv').config();

// caps matter here
console.log(process.env.NAME); // Zaviar
console.log(process.env.MUSIC); // lofi
console.log(process.env.PASSWORD); // YouWillNeverKnow
```

- `npm install dotenv-cli` (my preferred method)

```md
# in the terminal, no require() required!

dotenv run node scratch.js
```

## Hiding your .env from the world

Make sure you create a .gitignore file with your .env inside of it. This will ensure you can push to github without your secrets being shared

```md
# Example .gitignore file

node_modules/
.env
```

---

# Express Router

Express Routers allow us to direct traffic into different parts of our application. This enables us to have a more organized file structure, making it much easier to develop and maintain. Instead of all requests being handled in app.js, we can handle user requests in user.js, dog requests in dog.js, and so on.

Express Router is available through Express, no extra install required. We must remember to export our router and the bottom of the file so we can import it into app.js

```js
// a file that is not app.js
const express = require('express');

const router = express.Router();

/* Routing code goes here */

module.exports = router;
```

Routers are commonly stored in a "routes" folder. Within that folder you create a file to handle your routes. To create a route, do as we normally would with app.methodName(), but use router instead.

```js
// routes/albums.js

// url: localhost:5000/albums
router.get('/', (req, res) => {});

// url: localhost:5000/albums/2
router.post('/:albumId', (req, res) => {});
```

Finally, in app.js, we import our routers and `app.use()` them. The syntax is similar to `express.static()`, the first argument is the url path the user should type into the browser, the second is the router we've created.

```js
// app.js
const express = require('express');

const albums = require('./routes/albums');

const app = express();

app.use('/albums', albums);
```

Just like with `express.static()`, the url path Does Not have to match the file we're routing from. It's simply the convention and tends to be easier to work with.

```js
// same app.js

app.use('/musicalCollection', albums);
```

---
## Serving Static Files

### Static vs Dynamic

- Dynamic: handling a request through app.methodName(), "manually" deciding what happens
- Static: serving a file "as-is"

In express, we can serve static files using `express.static`

```js
express.static('locationOfTheFile');
```

To tell our app to use this:

```js
app.use(path, express.static('locationOfTheFile'));
// or
app.use(express.static('locationOfTheFile'));
```

Passing no path to `app.use()` will have the file be served from the root of the url, ie. localhost:5000

If we specify a path, the files from `express.static()` will be served from that path in the url, regardless of where they actually are in the file

```md
# File structure

-outer
--- file1.js
--- inner
------- file2.js
```

```js
app.use('/inner', express.static("outer"))

GET localhost:5000/inner/file1.js // 200
GET localhost:5000/inner/file2.js // 404
```

## Using an absolute path for production

When your application is ready for production, you can't be 100% sure the express server will launch from within your application. This will cause our file paths to get messed up.

Thankfully, we can use an _absolute path_

```js
const path = require('path');

app.use('/inner', express.static(path.join(__dirname, 'outer')));
```

We will need to import `path`, which is available to us by default in Node (so no npm install required). Then we join our file's path to `__dirname`, which is just the folder that the server starts in.
