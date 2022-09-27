# `M3W3D2`

## **`HTTP Requests`**

---

## `Request Overview`

```js
// Request-Line
POST / HTTP/1.0

// Headers
Host: appacademy.io
Content-Length: 31
Content-Type: application/x-www-form-urlencoded
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9

// Body
username=azure&password=hunter2
```

Made up of the following information:

- **`Request-line`**
  - first line of a `request`
  - the `URI` (Uniform Resource Indicator) that identifies what has been requested
  - The `HTTP` version you want to use (Usually `HTTP`/1.1 or `HTTP`/2)

- **`Headers`**
  - key/values that define metadata needed to process the `request`

- **`Body`**
  - extra information
  - usually form data or files
  - used with the `Content-Type` header

### `Content-Type Header`

- **defines details about the body of the request**
- lets the server know the format of the body data and how to process it
- values are MIME Types (Media Types)

<img src='./mimetypes.png' width='500'>

### `HTTP Verbs`

- Determine the **`CRUD`** operation of the request
  - `Create` - create new resources
  - `Read` - get resources from database
  - `Update` - change a resource
  - `Delete` - remove a resource

#### `Most commonly used verbs`

- `GET`
  - Used for **retrieving resources**
  - When you go to a link, the browser makes a `GET` request
  - **Will never have a body**
- `POST`
  - Used for **creating new resources**
  - When you submit a form, the browser makes a `POST` request
  - **Can have a body**, usually containing form data
- **`PUT`**
  - used to **update a resource**
  - will contain the **ENTIRE resource** you'd like to update
  - **Can have a body**, usually containing all information about that resource including the updated information
- **`PATCH`**
  - also used to **update a resource**
  - very similar to PUT requests, but do not require the entire resource
  - **Can have a body**, usually containing the single thing you want to update
- **`DELETE`**
  - **destroys resources** on the server
  - **can have a body**, but ususally will not.
  
## `HTML Form Requests`

- attributes of an `HTML` form
  - `method`: method of the request, should **ALWAYS** be `"POST"`
  - `action`: URL path of the request

- request contents will include the above two attributes and also the following
  - `Content-Type`: application/x-www-form-urlencoded
  - `Body`: form input names and values

---

## `Response Overview`

```js
// Status
HTTP/1.1 200 OK

// Headers
Content-Type: text/html; charset=utf-8
Transfer-Encoding: chunked
Connection: close
X-Frame-Options: SAMEORIGIN
X-Xss-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Cache-Control: max-age=0, private, must-revalidate
Set-Cookie: _rails-class-site_session=BAh7CEkiD3Nlc3Npb25faWQGOgZFVEkiJTM5NWM5YTVlNTEyZDFmNTNlN; path=/; secure; HttpOnly
X-Request-Id: cf5f30dd-99d0-46d7-86d7-6fe57753b20d
X-Runtime: 0.006894
Strict-Transport-Security: max-age=31536000
Vary: Origin
Via: 1.1 vegur
Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
Server: cloudflare
CF-RAY: 51d641d1ca7d2d45-TXL

// Body
<!DOCTYPE html>
<html>
...
...
</html>
```

Made up of the following information:

- `Status`
  - First line in the `response`
  - Includes the `http version` and the `Status-Code`.
- `Headers`
  - Work identically to those on requests
  - Establish metadata that the client might need to process the response
- `Body`
  - contains the resource that was requested

### `Status Codes`

- 3 digit numeric representation of a server `response`
- grouped by the first digit (all Informational codes begin with 1, all error codes begin with 4, etc.)

- **`100-199`**
  - Informational Codes
  - Let the client know the req was rec'd
  - Provide additional info from server
  - Unlikely to see them

- **`200-299`**
  - Successful Codes
  - Indicate the request has succeeded
    - `200 OK`
      - `Request` rec'd and fulfilled.
      - usually come with a body containing the requested resource
      - Most common `response` period, expected from `GET` requests
    - `201 Created`
      - `Request` rec'd and a new record was created as a result
      - Most common response to `POST` requests

- **`300-399`**
  - Redirection Codes
  - Lets the client know there has been a change in the location (URL Path) and redirects the user there
    - `301 Moved Permanently`
      - Requested resource is in a totally new location
      - usually redirects you to the new location
    - `302 Found`
      - requested resource is temporarily in a new location
      - usually redirects to the temp location

- **`400-499`**
  - Client Error Codes
  - indicate a problem with the request
    - `400 Bad Request`
      - Server couldn't understand your request
    - `401 Unauthorized`
      - Resource may exist, but you're not allowed to see it without authentication
    - `403 Forbidden`
      - Resource may exist, but you're not allowed to see it at all. (don't have the correct permissions)
    - `404 Not Found`
      - Resource doesn't exist

- **`500-599`**
  - Server Error Codes
  - Request was good, but the server couldn't respond as expected
    - `500 Internal Server Error`
      - Request was rec'd but the server couldn't process it
    - `504 Gateway Timeout`
      - Request was rec'd but the server didn't respond in a reasonable amount of time
 
---

## `HTML Form Responses`

Usually when a form is submitted, the server will redirect upon a successful request.

1. Form is submitted
2. Browser makes request to the server
3. Server parses request body and does some CRUD action with the data
4. Server sends redirection response
5. Browser receives response
6. Browser redirects

---

## `ReSTful Routes Convention`

---

- Stands for Representational State Transfer
- A **convention** for defining `endpoints` so that other devs can easily understand how the server may process `requests` with those `endpoints` and what the expected `responses` will be

### `Routes vs. Endpoints`

- A `route` is the `URL` path for a `request`.
- An `Endpoint` is a pattern for a `request` that has a specific `HTTP verb` and `route` to define how the server should process and respond to the `request`.

#### `Route Parameters`

- variable, named segment of the URL path
- used to generalize routes to a certain pattern
- indicated in the URL path by a colon `:`, folowed by the name of the variable part of the path.
- Enables us to use the same route to get different data of the same type

#### `Examples of ReSTful paths that return HTML`

<img src='./htmlrest.png' width='500'>

<img src='./tweetrest.png' width='500'>
