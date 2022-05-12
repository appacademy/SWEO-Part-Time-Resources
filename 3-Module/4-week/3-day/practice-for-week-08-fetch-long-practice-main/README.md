# `fetch` Long Practice

You've learned how to create `GET` requests using `fetch`. In this practice, you
will learn how to make `POST` requests using `fetch` to a traditional web
server.

## Set up

The server you will be making requests to is the same [server] from the
HTTP Basics practice seen a few days prior.

`cd` into the `server` folder and run `npm install`.

Start the server by running `npm start`.

This will start the server at [http://localhost:5000].

The documentation of this server is given in the solution of the HTTP Basics
long practice assigned a few days prior.

Clone the practice from the [starter].

Make fetch requests in the browser for each of the following phases. Paste your
code for the fetch requests in the __fetch-requests.js__ file once you finish
each phase.

## Basic Phase 1: Formulating the body of the request

To send a `POST` request with a `body

The body of a request to a traditional web server should be formatted as
`application/x-www-form-urlencoded`. To send a `fetch` request with a `method`
of`POST` request, a `body`, and a `Content-Type` header of
`application/x-www-form-urlencoded`, you must pass in an options object as the
second argument to the `fetch` call like so:

```js
fetch(url, {
  method,
  body,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});
```

The options object has properties of `method`, `body`, and `headers` to format
the request components.

The body must be percent-encoded or url-encoded.

Make the following `POST /products` request to the server using `fetch`:

Formulate a `fetch` request with a url of `/products`, a `POST` method, a
`Content-Type` header of `application/x-www-form-urlencoded`, and the following
string as the body:

```plaintext
"name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
```

The body is percent-encoded for the following form inputs and values:

| input name  | input value              |
| ----------- | ------------------------ |
| name        | Caribbean Delight Coffee |
| description | Made by Manatee Coffee   |
| price       | 11.99                    |
| categories  | grocery                  |

Check the list of products on the products page to see that the new product
was successfully created by making a `GET /products` request (the easiest way to
do this is to navigate to [http://localhost:5000/products] on the browser.)

## Basic Phase 2: Reading the Response Components

From the server documentation, take note of what the response components of a
request to `POST /products` should be.

Now, make the same `fetch` request to `POST /products` and print to the console
the following components of the response:

- status code
- `Content-Type` header
- The URL of the response

If you need help finding these components on the response, take a look at the
[MDN Documentation on a `Response` object] returned from a `fetch` request.

Do the components printed in the console match the documentation?

**Take a moment to think about why the `fetch` request is behaving this way and
what you think could possibly be happening when the `fetch` request is made
and the response from the server is received. Ask a question if you are stuck
before continuing.**

If you are not convinced the server documentation is correct, make the
equivalent `POST /products` request in Postman to confirm that the components of
the response given by Postman is the same as the documentation.

> Spoilers: the `fetch` request is following the redirection indicated by the
> status code and the `Location` header in the original response to the
> `POST /products` request. The URL of the response given in the `fetch` request
> is not the same URL of the request, which probably means a redirection
> occured.

Examine the `.redirected` property on the `Response` object of the `fetch`
request by printing it to the console. If this property is `true`, the `fetch`
request followed the redirection that the server responded with.

See if you can get the URL which you got redirected to. Check the [MDN
Documentation on a `Response` object] to see what property you could use to
print the URL of the redirection. Hint: Take a look at the `.url`
property.

Discuss if your hypothesis of what happens to the response of a `fetch` request
when redirected aligns with the printed results.

## Basic Phase 3: `URLSearchParams`

So far, you've learned how to formulate a `fetch` request with a body and how to
proficiently read the components of the response from a `fetch` request.

Now, you will learn how to easily percent-encode or url-encode the body of a
request.

A form input's name and value is just another key-value pair. To turn the keys
and values of an object into a string that is percent-encoded, you can use the
built-in JavaScript class `URLSearchParams`. A `new URLSearchParams()` can be
invoked with a JavaScript object with key-value pairs and will turn it into
a percent-encoded string.

For example, let's say you want to produce the percent-encoded request body of:

```plaintext
name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery
```

You can pass an object with key-value pairs into a `new URLSearchParams()` like
so:

```js
new URLSearchParams({
  name: "Caribbean Delight Coffee",
  description: "Made by Manatee Coffee",
  price: 11.99,
  categories: "grocery"
});
```

This will produce a percent-encoded string that you can send as the body of a
`fetch` response. Try `console.log`ging the output of the code above in the
browser's "Console" tab.

Try making the same `fetch` request as before, but with the body set to a
`URLSearchParams` object. You should observe the same outcome as your
previous `fetch` requests.

See the [MDN Documentation on `URLSearchParams`] to learn more about other
properties or methods that you can use to your advantage.

## Intermediate Phase 4: Experiment with other Endpoints

Experiment making `fetch` requests with other endpoints listed in the server
documentation.

[server]: https://github.com/appacademy/practice-for-week-08-http-basics-long-practice
[starter]: https://github.com/appacademy/practice-for-week-08-fetch-long-practice
[MDN Documentation on a `Request` object]: https://developer.mozilla.org/en-US/docs/Web/API/Request
[MDN Documentation on a `Response` object]: https://developer.mozilla.org/en-US/docs/Web/API/Response
[MDN Documentation on `URLSearchParams`]: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
[http://localhost:5000/products]: http://localhost:5000/products