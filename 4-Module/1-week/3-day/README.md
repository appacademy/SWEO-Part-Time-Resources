

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
