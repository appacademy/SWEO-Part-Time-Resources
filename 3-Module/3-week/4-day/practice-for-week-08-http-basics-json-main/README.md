# Practice: HTTP Basics in a JSON file

In this practice, you will document the request and response components for
RESTful endpoints of a **traditional HTML web server** in a JSON file.

## Set up

1. Clone the practice from GitHub.
2. Run `npm install` at the root of the project to install dependencies.

To set up the server that you will test endpoints on, `cd` inside of the
**server** folder and run `npm install` inside of the **server** folder.

This is the same server you worked with previously in the HTTP Basics Long
Practice. **Do not to look at the contents of the server folder until you finish
this exercise.**

To start the server, run `npm start` inside of the **server** folder. This will
allow you to make requests to [http://localhost:5000] using any client, such as
your browser or Postman.

To stop the server from listening to requests, press `CTRL + c` for
Windows/Linux or `CMD + c` for MacOS in the terminal that you started the server
(wherever you ran `npm start`). To restart a stopped server, run `npm start`
again.

> Note: Make sure to stop the server when you are finished with this practice.
> Leaving a server running may prevent servers in other practices/exercises
> from starting properly.

## Instructions

Document the server from the original [HTTP Basics practice] in the
__answers.json__ JSON file provided to you.

Once you're finished, you can run ALL of the tests using `npm test` from the
root of the project.

You may also run each test individually, using `npm run test-<NUM>`, and
replacing `<NUM>` with a number between 01 and 15 (corresponding to the endpoint
number in the __answers.json__ file).

### Documentation

The documentation for this server should be written in the `answers.json` file
provided to you. For each endpoint listed below, list out the request and
response components in the `answers.json` file.

#### Headers Formatting

**Include only necessary headers.**

To add a header as a component to the request or response, define the key and
value of a header in a JSON object set to the `headers` key on the `request`
or `response` object. **All the endpoints are RESTful endpoints for a
traditional web server.**

Here's an example:

```json
"headers": {
  "Content-Type": "application/x-www-form-urlencoded"
}
```

#### Request Body Formatting

To add a `body` as a component to the request, define the data structure of the
`body` (object, array, nested object, or nested array). The values for objects
in the `body` must be a truthy value.

Here's an example:

```json
"body": {
  "color": true,
  "toolbox": [
    {
      "tool": true
    }
  ]
}
```

#### Response Body Formatting

If there is a response body for the endpoint, set the `body` key in the
`response` object to `true` or a truthy value.

Here's an example:

```json
"body": true
```

#### Removing a Component

To omit a component from the request or response, set the key of that request
or response component to `false`.

For example, to omit the `headers` of the request, change the `headers` key from
`null` to `false`.

```json
"headers": false,
```

To omit the `body` of the request, change the `body` key from `null` to `false`.

```json
"body": false
```

## Reminders about an HTML Web Server

Here are some reminders about an HTML web server.

An HTML web server displays web pages in which a user can make HTTP requests
through HTML links and forms.

### HTML form submission

When an HTML form is submitted, the browser will make a request using the
information on the form when submitted.

The `method` attribute on the HTML `<form>` element determines the method of the
request. The only valid values for the `method` attribute are "get" and "post".
This is the reason why endpoints of a traditional HTML web servers will only
have `GET` or `POST` as methods.

The `action` attribute on the HTML `<form>` element determines the URL of the
request.

The fields (form data) inside of HTML `<form>` element determine the body of the
request. The form data in the request will be percent-encoded or URL-encoded.
Because of this, the `Content-Type` header of the request will be
"application/x-www-form-urlencoded".

For example, if you have the following HTML form:

```html
<form method="post" action="/cat">
  <label>
    Name
    <input type="text" name="name" />
  </label>
  <label>
    Pattern
    <select name="pattern">
      <option value="tabby">Tabby</option>
      <option value="striped">Striped</option>
      <option value="tortie">Tortie</option>
      <option value="calico">Calico</option>
      <option value="bicolor">Bicolor</option>
    </select>
  </label>
  <label>
    Size
    <input type="number" name="size" />
  </label>
  <label>
    Description
    <textarea name="description"></textarea>
  </label>
  <input type="submit" value="Create Cat" />
</form>
```

If you submit the HTML form above with the `name` field filled out as "Fluffy",
the `pattern` field as "Calico", the `size` field as 5, and the `description`
field as "very fluffy", then the following HTTP request will be made:

```plaintext
HTTP/1.1 POST /cat
Content-Type: application/x-www-form-urlencoded

name=Fluffy&pattern=calico&size5&description=very+fluffy
```

As a response to this type of request, the server will likely redirect the user.

### Response components

In a traditional HTML web application, the response will either be an HTML web
page, or a redirection.

In the case of a **response with the body containing an HTML web page**, the
response may look something like this:

```plaintext
HTTP/1.1 200 OK
Content-Type: text/html;

<!DOCTYPE html>
<html>
...
...
</html>
```

The status code of the response is 200, the `Content-Type` header is
"text/html", and the body of the request is the HTML web page as a string.

In the case of a **response redirecting a user**, the response may look
something like this:

```plaintext
HTTP/1.1 302 Found
Location: /url-to-redirect-to;
```

The status code of the response is 302, the `Location` header is set to the URL
which you want to redirect the user to, and there is no body in the response.

### Headers

The only possible **request headers** of a traditional web application and their
values are:

- `Content-Type` (when the request has a body):
  - "application/x-www-form-urlencoded"

The only possible **response headers** of a traditional web application and
their values are:

- `Content-Type` (when the response has a body):
  - "text/html"
- `Location` (when the server redirects):
  - url that server wants to redirect the client to

[HTTP Basics practice]: https://github.com/appacademy/practice-for-week-08-http-basics-long-practice