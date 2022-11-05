# Practice: Testing API Endpoints

In this practice, you will learn how to make a JSON request using Postman and in
the browser using `fetch`.

## Set Up

Clone the project from the [starter].

The server code is in __server.js__, but **try not to read the server code**
because it will help you train how to read error messages on the client-side to
figure out how to formulate the right request to the server.

To start the server, run `node server.js` in your terminal.

Make fetch requests in the browser for each of the following tasks. Paste your
code for the fetch requests in the __fetch-requests.js__ file once you finish
each task.

## JSON request in Postman

Make a request to `GET /posts` to see all the posts as a JSON array.

Then, formulate a request to `POST /posts` to create a new post. Make sure to
send the body of your request as a JSON object with a key of `message`.

Here's an example of how to formulate the request body as JSON in Postman:

![postman-json-request-body]

Confirm that your post was created by making a request to `GET /posts` again
to view your new post.

## JSON requests using `fetch`

### Phase 1: GET /posts

Make a request with `fetch` request in the browser to `GET /posts`.

```js
fetch('/posts');
```

Chain a `.then` callback onto the `fetch` request that will be invoked when the
response for the request comes back. Parse the body of the response as JSON by
calling the asynchronous `.json()` method on the response object.

```js
fetch('/posts')
  .then(res => res.json());
```

Chain another `.then()` onto that which will be invoked when the asynchronous
`.json()` method is finished parsing the response body. The resolved value of
the `.json()` method is the parsed JSON response body. Print that out.

```js
fetch('/posts')
  .then(res => res.json())
  .then(resBody => console.log(resBody));
```

Make sure you see the response body logged to the console of the browser.

Alternatively, you can formulate the `fetch` request using `async`/`await`
instead of using a `Promise` chain with `.then`s.

```js
(async function() {
  const res = await fetch('/posts');
  const body = await res.json();
  console.log(body);
})();
```

### Phase 2: POST /posts

Make a request with `fetch` request in the browser to `POST /posts` with a
serialized JSON body.

```js
fetch('/posts', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    message: "New Post!"
  })
})
```

Next, parse and print the response body just like how you did with the previous
`fetch` request for `GET /posts`.

Make sure you see the response body logged to the "Console" tab of the browser.

[postman-json-request-body]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-08/assets/postman-json-request-body.PNG
[starter]: https://github.com/appacademy/practice-for-week-08-testing-api-endpoints