/*


HTTP Request

POST / HTTP/1.0
Host: appacademy.io
Content-Length: 31
Content-Type: application/x-www-form-urlencoded
Host: appacademy.io
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,;q=0.8,application/signed-exchange;v=b3
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9

username=azure&password=hunter2


Request Line
Method: POST
URI: /
Version: HTTP/1.0


Headers
Content-Type: application/x-www-form-urlencoded
application/x-www-form-urlencoded - info submitted directly from an HTML web form
application/json - JSON - data format similar to JavaScript objects
multipart/form-data	- info submitted from an HTML web form with multiple media types

Body

username=azure&password=hunter2



CRUD: Create, Read, Update, Delete

GET: retrieve resources // Read portion of CRUD
    Get method does not have to have header and body

POST: Create New Resources

PUT: Updates resource // Put has to update every portion of the resource

PATCH: update resource // Patch can update partial portions of the resource

DELETE: Delete entire resoure
    DELETE method also does not ahve to have header and body


Status Codes
100 - 199 Informational
    information client recieves from server

200 - 299 Successfull
    200 OK // completed and carried out
    201 Created // after form submission

300 - 399 Redirection
    301 perminantly moved
    302 found
    POST /tweets
    302
    /tweets/:tweetId
400 - 499 Client Error
    400 bad request
    401 unauthorized
    403 Forbidden
    404 Not found
    418: Im a teapot
500 - 599 Server Error
    500 internal server error // something on server side went wrong
    504 gateway timeout // server didnt respond in time


Headers
Content-Type: text/html

text/html -	HTML document
text/css - CSS styles document
text/javascript	- JavaScript script
text/plain - plain text
image/png - PNG Image
application/json - JSON - data format similar to JavaScript object


// ilovedogs.com/dog

<form method="post" action="/dog">
<input type="text" name="name" />
<select name="color">
    <option value="black">Black</option>
    <option value="brown">Brown</option>
    <option value="yellow">Yellow</option>
    <option value="white">White</option>
  </select>
  <input type="number" name="age" />
  <textarea name="description"></textarea>
  <button type="submit">Create Dog</button>
  </form>;

  // method - defined by the method HTML form attribute
  // URL path - defined by the action HTML form attribute
  // Content-Type header - application/x-www-form-urlencoded
  // body - form input names and values

// name=GoodBoy&color=brown&age=8&description=bestBoyEver

// {
    //     "name": "Jaylen",
    //     "color": "brown",
    //     "age": 24

// }



POST / HTTP/1.0
Host: appacademy.io
Content-Length: 31
Content-Type: application/x-www-form-urlencoded
Host: appacademy.io
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,;q=0.8,application/signed-exchange;v=b3
Accept-Encoding: gzip, deflate


// Routes and Endpoints
Endpoint: combination of our our route and our method : POST /
Route: URL path for the request /


Endpoint: GET /users,
 Route: /users
Endpoint: POST /users,
Route: /users
Endpoint: POST /session,
Route: /session
Endpoint: DELETE /login,
Route: /login


*/
