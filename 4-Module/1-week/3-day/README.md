# Environment Variables (.env), Static Files, and Middleware

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

-space
--- milkyWay.js
--- earth
------- climateChange.js
```

```js
app.use('/earth', express.static("space"))

GET localhost:5000/earth/milkyWay.js // 200
GET localhost:5000/earth/climateChange.js // 404
```

## Using an absolute path for production

When your application is ready for production, you can't be 100% sure the express server will launch from within your application. This will cause our file paths to get messed up.

Thankfully, we can use an _absolute path_

```js
const path = require('path');

app.use('/earth', express.static(path.join(__dirname, 'space')));
```

We will need to import `path`, which is available to us by default in Node (so no npm install required). Then we join our file's path to `__dirname`, which is just the folder that the server starts in.

---

## Middleware

Express is "essentially a series of middleware function calls"

## What is Middleware?

Conceptually: any code that runs between receiving a request and sending back the response

By Definition: any function that takes in `req`, `res`, and `next` as arguments

## How does Middleware work?

Express operates as a stack of middleware functions. It will execute these functions in order upon receiving a request, and stops executing once a response is sent back.

We can add layers to the middleware stack by creating our own middleware functions.

```js
// since this takes req, res, and next, it's an Express Middleware!

const myMiddleware = (req, res, next) => {
  console.log("I'm a middleware function!");
  next();
};
```

To get Express to use this function, we can pass it directly to a route handler

```js
app.get('/', myMiddleware);

// we can also continue to handle the request within the same handler

app.get('/', myMiddleware, (req, res) => {
  // Handling of the request
});
```

We can also pass it to `app.use()`. Anytime you've passed something to `app.use()`, you were adding a layer to the Express Middleware Stack! These are all examples of using middleware

```js
app.use(express.json());
app.use(express.static('/catPhotos'));
app.use(myMiddleware);
app.use((req, res, next) => {
  console.log(req.body);
  next();
});
```

Anything you pass to `app.use()` will get called **_every time_** a request is made.

If it's a built-in middleware (`express.json()`), then you don't have to worry about calling `next()`, it's already being done for you. If you are making your own middleware function, you **_must_** call `next()`

## next()

Calling `next()` will tell express to "return" out of our current function and run the next **_applicable_** function.

```js
const mid1 = (req, res, next) => {
  console.log("Hey I'm mid1!");
  next();
};

const mid2 = (req, res, next) => {
  console.log("Hey I'm mid2!!");
  next();
};

app.get('/', mid1, mid2);
```

When making a GET request to `/`

```md
# console will print

Hey I'm mid1!
Hey I'm mid2!!
```

Similarly

```js
const myMid = (req, res, next) => {
  console.log("Hey look I'm printing!");
  next();
};

app.get('/', myMid);

app.get('/', (req, res) => {
  console.log('Wow I printed after myMid!');
  res.send('This is the / response');
});
```

```md
# console will print

Hey look I'm printing!
Wow I printed after myMid!!

# browser will display

This is the / response
```

We can have more than one route handler for each route, and if the first one calls `next()`, the next route handler will be called. This can be chained as many times as we want.

However if the route pattern is not matched, it will be skipped!

```js
const myMid = (req, res, next) => {
  console.log("Hey look I'm printing!");
  next();
};

const missedMid = (req, res, next) => {
  console.log('I never get to print :(');
  next();
};

app.get('/', myMid);

app.get('/hello', missedMid);

app.get('/', (req, res) => {
  console.log('I still get to print!');
  res.send('This is the / response');
});
```

When making a GET request to `/`

```md
# console will print

Hey look I'm printing!
I still get to print!

# browser will display

This is the / response
```

But, if we make a GET request to `/hello`

```md
# console will print

I never get to print :(

# browser will display

Cannot GET /hello

# because we don't res.send() anything from /hello
```

## Tonight's HW

- Review `Express Middleware` from "Homework for Wednesday"
- Everything you haven't done in "Homework for Thursday"
