# Practice: Music Archive Docs in a JSON file

In this practice, you will document the request and response components for
RESTful endpoints of a **JSON API server** in a JSON file.

## Set up

See the original [Music Archive Docs practice] for instructions on how to set up
the server that you will document the endpoints for.

Clone the practice from the [starter].

## Instructions

Document the server in the original [Music Archive Docs practice] in the
__starter.json__ JSON file provided to you.

Once you're finished, compare your JSON file with the solution code that will
be provided to you later at some point.

## Reminders about a JSON API server

Here are some reminders about a JSON API server.

A JSON API server is used as a data source for other web developers.

A JSON API server returns JSON strings as the bodies of all the responses. If a
request to the server requires a body, it will accept a JSON string as the body
of the request.

### Request components

In a JSON API server, the request may have a JSON string as the request body.

In the case of a **request with the body containing JSON**, the request may
look something like this:

```plaintext
HTTP/1.1 POST /posts
Content-Type: application/json

{"message":"Hola"}
```

The method of the request is `POST`, the URL of the request is `/posts`, the
`Content-Type` header is "application/json", and the body of the request is a
JSON string.

### Response components

In a JSON API server, the response will have a JSON response. There will be
**no redirection**.

In the case of a **response with the body containing JSON**, the response may
look something like this:

```plaintext
HTTP/1.1 200 OK
Content-Type: application/json;

[{"postId":1,"message":"Hello World!"},{"postId":2,"message":"Ciao"}]
```

The status code of the response is 200, the `Content-Type` header is
"application/json", and the body of the response is a JSON string.

### Headers

The only possible **request headers** of a JSON API server and their values are:

- `Content-Type` (when the request has a body):
  - "application/json"

The only possible **response headers** of a JSON API server and their values
are:

- `Content-Type` (when the response has a body):
  - "application/json"

[starter]: https://github.com/appacademy/practice-for-week-08-music-archive-docs-json
[Music Archive Docs practice]: https://github.com/appacademy/practice-for-week-08-music-archive-docs-long-practice