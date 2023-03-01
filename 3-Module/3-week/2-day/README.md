#### `What is a server?`
- A server is a hardware or software that pushes and pulls data across a network.
- A server's purpose is to send data to a client.
  - A client can request data from a server, and the server processes that request and responds with the desired data.
## Request and Response Cycle
The `client`, (That's usually you) requests a resource.
The `server`, either return that resource or tells you why it couldn't.
### Request Components
- Request Line
  - Method, URI (Uniform Resource Indicator), HTTP Version
  - `GET /users HTTP/1.1`
- Headers
  - key/value pairs that define metadata needed to process the request
  - `"Content-Type" : "application/x-www-form-urlencoded"`
  - `"Content-Type" : "application/json"`
  - `"Content-Type" : "multipart/form-data"`
- Body
  - The data you're trying to send
#### HTTP verbs
Declare the intention of the request to the server, they determine the `CRUD` operation of the request.

`CRUD` stands for Create, Read, Update, Delete.
- `POST` : Create new resource
- `GET`  : Retrieve a resource
- `PUT`  : Update a resource, by replacing the resource
- `PATCH`: Update a resource
- `DELETE` : Destroy a resource
### Response Components
- Status Line
  - HTTP Version, Status Code, Reason-Phrase
  - `HTTP/1.1 200 OK`
- #### Status Codes
  - 100s : Informational, very rare
  - 200s : Successful, the request was good and was done
  - 300s : Redirection, show a url and move you there
  - 400s : Client Errors, there was an error with your request
  - 500s : Server Errors, your request was good but the server failed
- Headers
  - `text/html`, `text/css`, `text/javascript`, `text/plain`, `image/png`, `application/json`
  - Location : used for redirection, it's the address
  - Expires : Says when the respons becomes stale or invalid
  - Set-Cookie : sends data on a cookie, key/value pairs associated with a server's domain
- Body
  - Contains the resources requested
## RESTful Routes Conventions
  - REpresentational State Transfer
  - A convention for defining endpoints that other devs can easily understand.
  - Route is the URL path for a request
  - `/users`
  - Endpoint is a pattern that has a specific route and HTTP verb combo
  - `GET /users`

  - Route Parameters : placeholders in your route that are interchangable
  - `/users/17` : `/users/:userId`

  - `/users`
  - `/tweets`
  - `/houses`
  - `/homes`
  - `/artists`
  - `/homes/:homeId`

  - `GET /posts` : get all posts
  - `GET /posts/new` : get the page that allows us to make a new post
  - `POST /posts` : creates a new post
  - `GET /posts/:postId` : get a record
  - `GET /posts/:postId/edit` : get the page that allows us to edit a record
  - `POST /posts/:postId` : updates the record
  - `POST /posts/:postId/delete` : delete the specified record