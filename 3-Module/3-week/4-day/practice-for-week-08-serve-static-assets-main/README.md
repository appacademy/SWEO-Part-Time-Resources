# Practice: Serving Static Assets

In this practice, you will programmatically send static files from your server.

## Set up

Clone the project from the [starter].

You can start the server you will be making edits to by running `node server.js`

## Phase 1 - A Single Asset

In phase 1, you will send the **index.html** file as the response for any
request that is made to the server.

Read the contents of the **index.html** file and save it to a variable.

Set the appropriate response components (status code, headers, and body) and
send the response.

To test your server, start your server and navigate to [http://localhost:5000].
You should see an HTML with the text "Hello World!".

## Phase 2 - Multiple Assets

In phase 2, you will send files in an entire folder from the `http` server.

Allow clients to request any files from the **assets** folder in your server. To
do this, set up your server to look for and send files from the **assets**
folder whenever the URL path starts with `/static`.

Parse the route to get the file extension. Based on the file extension, set the
header to the appropriate MIME type. Here are some examples of converting a
route's file extension to a MIME type and a file path:

If the server receives a request for `GET /static/images/dog.jpg`,
then the server should look for a file in its memory called `dog.jpg` in the
`./assets/images` folder and send that file as a response with the
`Content-Type` header of `image/jpeg`.

If the server receives a request for `GET /static/css/application.css`,
then the server should look for a file in its memory called `application.css` in
the `./assets/css` folder and send that file as a response with the
`Content-Type` header of `text/css`.

Hint: If the route is `/static/css/application.css`, the file extension is the
substring to the right of the period, "css". For a "css" file extension, set
the `Content-Type` header of the response to `text/css`. Then read and send the
file in the __assets__ folder that has a relative file path of
`css/application.css`.

To test your code, start your server and navigate to [http://localhost:5000].
You should see an HTML page with the text "Hello World", a background color of
yellow, and a cute dog image.

Tip: Use the following functions to aid you:

- [`String.split`] - to split a string into an array by a given delimiter
- [`String.startsWith`] - returns true if the string starts with a given
  substring

> Hint: Your phase 2 code needs to come before your phase 1 code. Can you guess
> why?

[`String.split`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
[`String.startsWith`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
[starter]: https://github.com/appacademy/practice-for-week-08-serve-static-assets