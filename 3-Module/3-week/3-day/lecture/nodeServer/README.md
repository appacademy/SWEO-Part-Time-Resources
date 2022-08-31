# `Node Server Demo`

## `Node.js Servers`

To Create the server:

- import the `http` package (built in to `node`, no need to `npm install`)

  ```js
  const http = require('http');
  ```

- call `createServer` method on the import and pass a function as a single argument

  ```js
  const server = http.createServer((req, res) => {
    // ...
  });
  ```

- define and save your `port` number to a variable
- set up a `listener` on the server for that `port`

  ```js
  const port = 5000;

  server.listen(port, () => console.log('Server is listening on port', port));
  ```

- Start your server by running the file using `node` in the terminal

  ```console
  node server.js
  ```

### **The server is now ready to recieve requests! (Once you create some)**

## `Requests`

First lets look at what a `request` looks like when it comes in. Console log your `request` object in your `server`. (You will need to hit the `/` route in postman to send a request and see this logged in your terminal)

```js
const server = http.createServer((req, res) => {
  console.log(req)
});
```

The Request object is huge and has a lot of properties, but the properties that we're most interested in are:

- `method`: the `string` value of the `HTTP verb` for the `request`
- `url`: the `string` value of the `route` or `url path` of the `request`
- `headers`: `object` value with key value pairs as `header` names and values
- `on`: `method` that listens for `events` on the `request` and triggers callbacks to run when those `events` are triggered (used to parse the body of the `request`)

### `Parsing an application/x-www-form-urlencoded Request`

First we will need to create the `body` of our `request`. To do so we use the `on` method and *`listen`* for our data to come in. As it does we add it to our `body` until it is complete. (data doesn't always come in a single package)

```js
const server = http.createServer((req, res) => {
let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });
});
```

Once we've done this, if we have this `content type`, the `request` `body` will be a string with the key-value pairs of our form `inputs` separated by `&` with a `=` between each key and value. If there are any spaces, they will be replaced with `%21` or something similar.

If we want to be able to use this information to add this item to our `database`, we need to parse it into a `javascript` `object`.

- First you need to `split` our `body` on the `&` to separate the pairs.
- Next we need to `split` on the `=` to get an arr of our key and value.
- Next we use the `decodeURIComponent(item)` function to get rid of the `%`'s.
- Finally we need to create a `JS object` and add our keys and values to it.

## `Responses`

Next lets look at what a `response` looks like. Log your `response` the same way you logged your `request`.

```js
const server = http.createServer((req, res) => {
  console.log(res);
});
```

The `Response` object is also huge but the properties that we're most interested in are:

- `StatusCode`:  The 3 digit value of the `status code` for the `response`
- `setHeader`: `method` that sets a `header` name to a value
- `write`: `method` that allows you to add to the `body` of the `response`
- `end`: `method` that allows you to add to the `body` and send the `response` **immediately**

### `Setting Response Properties`

- `StatusCode`
  - use `res.statusCode = 500` (whichever code you want to use)
- `Headers`
  - use `res.setHeader('nameOfHeader', 'valueOfHeader')
- `Body`
  - use `res.write('textToAddToBody')` to **add** to the `body` of the `response`. Can be called multiple times to add to the `body`. **Does not send the `response`**.
  - use `res.end('textToAddToBody')` to add text to the `body` of the `response` and **immediately send the response**. Can only be called once as it completes the response.

> If you don't send a `response`, your `server` will never complete it's request. It will become a `Hanging Server` and you will have to restart your `server` to end the process. Always send some kind of `response`!

## `Creating Routes Handlers`

`Route` handlers are exactly what they sound like. They handle the `requests` for each `route` and determine what `response` will be sent back.

In `HTTP` we just need to check the `method` and `url` of the `request` to determine different `routes` and create separate rules for each.

```js
if (req.method === 'GET' && req.url === '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // important to return when you're finished to exit the req/res cycle in the server.
    return res.end('Splash Page');
  };
```

That's all there is to it!

## `Static Assets`

A `static asset` is something that will never change, no matter how many times it's requested. To find and read the file we use the `fs` built in node library. we use the `method` `readFileSync` to get access to the contents. If you use `utf-8` as the second parameter to this `method`, the contents can be read as a string.

```js
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/cat') {
      const catImage = fs.readFileSync('./images/cat.png');

      res.statusCode = 200;
      // make sure you have the correct content-type
      res.setHeader('Content-Type', 'image/png');
      res.end(catImage);
    };
});

```
