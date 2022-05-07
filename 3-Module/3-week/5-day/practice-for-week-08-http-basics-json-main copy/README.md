# Practice: HTTP Basics in a JSON file

In this practice, you will document the request and response components for
RESTful endpoints of **traditional HTML web server** in a JSON file.

## Set up

See the original [HTTP Basics practice] for instructions on how to set up the
server that you will document the endpoints for.

Clone the practice from the [starter].

## Instructions

Document the server in the original [HTTP Basics practice] in the
__starter.json__ JSON file provided to you.

Once you're finished, compare your JSON file with the solution code that will
be provided to you later at some point.

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

[starter]: https://github.com/appacademy/practice-for-week-08-http-basics-json
[HTTP Basics practice]: https://github.com/appacademy/practice-for-week-08-http-basics-long-practice