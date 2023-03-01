#### `What is a server?`
- A server is a hardware or software that pushes and pulls data across a network.
- A server's purpose is to send data to a client.
  - A client can request data from a server, and the server processes that request and responds with the desired data.
## Request and Response Cycle
The `client`, (That's usually you) makes a request to the server.
The `server`, responds either with the resource you requested or the reason it couldn't return that resource.
### Request Components
- Request Line
  - Method, URI (`Uniform Resource Indicator`), HTTP version
  - `GET /recipes HTTP/1.1`
- Headers
  - key/value pairs that define metadata needed to process the request
  - ```json Header {
    "Content-Type": "application/json"
  }```
- Body
  - the content of your request

- Content-Type
  - URL encoded `application.x-www-form-urlencoded`
    - `name=tristan&age=27&favFood=katsu`
  - `application/json` : data formatted to look like a JS object
  - `multipart/form-data` : web form with multiple media types
#### HTTP verbs
Declare the intention of the request to the server, they determine the `CRUD` operation of the request.

`CRUD` stands for Create, Read, Update, Delete.
- `POST` : create a new resource
- `GET`  : retrieve a resource
- `PUT`  : update a resource by replacing the entire resource
- `PATCH`: update a resource by changing only the differences
- `DELETE`: destroy a resource
### Response Components
- Status Line
  - HTTP version, Status Code, Reason-Phrase
  - `HTTP/1.1 201 Created`
- #### Status Codes
  - 100s : Informational, very rare
  - 200s : Success, the request was good and was done
  - 300s : Redirection, the url has changed and moves you there
  - 400s : Client Error, your request was messed up
  - 500s : Server Error, your request was good but the server couldn't do it
- Headers
  - Content-Type
    - text/html : html document
    - text/css  : css styles document
    - text/javascript : JS script
    - text/plain : plain text
    - image/png : PNG image
    - application/json : JSON
  - Location
    - Used for Redirection
  - Expires
    - When the response goes stale or becomes invalid
  - Set-Cookie
    - Sends data back on the cookie, a set of key/value pairs associated with the server's domain.
- Body
  - Contains the resources requested
## RESTful Routes Conventions
- REST : REpresentational State Transfer
- A convention for defining endpoints so that other devs can easily understand thier purpose
- Route : a URL path for a request
  - `/users`
- Endpoint : a pattern for a request that has a specified route and HTTP verb combo
  - `GET /users`
  - `POST /users`

- Route Parameters : they're placeholders in a url
  - `/users/:userId`
  - `/users/17`

#### Free Swim
- `/users`
- `/tweets`
- `/weekly-rentals`
- `/homes`
- `/houses`
- `/mouses`
- `/mice`
- `/octopi`
- `/octopuses`

- `/octopi/greg`
- `/octopi/364521`
- `/sanders/402`
- `/users/3305`

- `/users/Debra/posts`
- `posts/12` => GET posts/12

- GET /resource-name : returns a list of all records of that resource
- GET /resource-name/new : returns the form to make a new resource
- POST / resource-name : create a new record of the resource
- GET /resource-name/:record-id : returns a specific record of the resource
- GET /resource-name/:record-id/edit : returns the form to edit the record
- POST /resource-name/:record-id : update the record
- POST /resource-name/:record-id/delete : delete the record
