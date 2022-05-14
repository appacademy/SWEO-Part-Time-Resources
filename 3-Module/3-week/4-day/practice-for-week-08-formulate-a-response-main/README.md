# Practice: Formulate a Response

In this practice, you will create a server and send a HTML response from the
server for any request that is made to the server.

## Set up

Clone the practice from the [starter].

## Instructions

Create a server in the **server.js** file that sends the following HTML text:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World!</title>
</head>
<body>
  <h1>Hello there!</h1>
</body>
</html>
```

Set the response status code to `200`, the `Content-Type` header to the
appropriate value, and the response body. Then finish and send the response to
the client!

Test your server by using Postman. Make a request to your server and examine the
response sent back by your server to make sure the status code, headers, and
body that you set are all accounted for.

> Note: You can create multi-line JavaScript strings by using a
> [template literal]:

```js
// multi-line JavaScript string using a template literal
const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>
`;
```

[starter]: https://github.com/appacademy/practice-for-week-08-formulate-a-response
[template literal]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals