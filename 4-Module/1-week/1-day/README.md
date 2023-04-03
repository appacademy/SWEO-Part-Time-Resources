## Express Intro
- Express is a minimal and flexible Node.js backend framework used for building APIs and web applications.
- Express aims to make common web development tasks easier to implement by reducing the amount of boilerplate code you need to write.
- Express, is, in its own words, unopinionated and minimalistic

installs npm
```shell
npm init -y
```
installs express
```shell
npm install express@^4.0.0
```
use the express function to create an express application
```javascript
const express = require('express');
const app = express();
```
## Route Handlers
creating routes
```javascript
let homeRoutes = ['/', '/home', '/me']
app.get(homeRoutes, (req, res) => {
  res.send('Hello All!');
});
app.post();
app.put();
app.patch();
app.delete();

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));
```
```shell
fetch('/users', {
    method: "POST",
    body: JSON.stringify({username: "Demo"}),
    headers: {"Content-Type": "application/json"}
}).then(res => res.json()).then(resBody => console.log(resBody));
```
## HTTP Server vs. Express Server
`Starting a Server`

HTTP
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    // Server logic
});

const port = 5000;
server.listen(port, () => console.log('Server is listening on port', port));
```
Express
```javascript
const express = require('express');
const app = express();

// Server logic

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
```
`Creating Routes`

HTTP
```javascript
// Within createServer
    // ... 

    req.on("end", () => {
        // GET /users/:userId
        if (req.method === 'GET' && req.url.startsWith('/users/')) {
            // Process request
        }
    })
```
Express
```javascript
const app = express();

app.get('/users/:userId', (req, res) => {
    // Process request
})
```
`Parsing request Body`

HTTP
```javascript
// Within createServer
    let reqBody = "";
    req.on("data", (data) => {
        reqBody += data;
    });

    req.on("end", () => {
    if (reqBody) {
        req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
    }
```
Express
```javascript
const app = express();

app.use(express.json());
```
`Parsing URL Parameters`

HTTP
```javascript
// Within createServer
    // ... 

    req.on("end", () => {
        // GET /users/:userId
        if (req.method === 'GET' && req.url.startsWith('/users/')) {
            const urlParts = req.url.split('/');
            if (urlParts.length === 3) {
                const userId = urlParts[2];
                // Process request
            }
        }
    })
```
Express
```javascript
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    // Process request
})
```
`Sending the Response`

HTTP
```javascript
// Within createServer
    req.on("end", () => {
        if (req.method === 'GET' && req.url.startsWith('/users/')) {
            const urlParts = req.url.split('/');
            if (urlParts.length === 3) {
                const userId = urlParts[2];
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.write('User details for userId: ');
                res.write(userId);
                return res.end();
            }
        }
    })
```
Express
```javascript
// GET /users/:userId
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    res.status(200).send(`User details for userId: ${userId}`);
})
```
`Final Result`

HTTP
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    if (reqBody) {
        req.body = JSON.parse(reqBody);
    }

    // GET /users/:userId
    if (req.method === 'GET' && req.url.startsWith('/users/')) {
      const urlParts = req.url.split('/');
      if (urlParts.length === 3) {
        const userId = urlParts[2];
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('User details for userId: ');
        res.write(userId);
        return res.end();
      }
    }

    // Everything else is not found
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Not Found');
    return res.end()
  });

});

const port = 5000;
server.listen(port, () => console.log('Server is listening on port', port));
```
Express
```javascript
const express = require('express');
const app = express();

app.use(express.json());

// GET /users/:userId
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    res.status(200).send(`User details for userId: ${userId}`);
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
```
## Express Req/Res Objects
Since Express `extends` traditional HTTP servers we have access to alot of the same methods but we also have new ones~
### Request Object
** after using `express.json()`
`req.body` : shows the body

`req.query.whateverKey` : shows the value of the key

`req.params` : shows the value of a parameterized value
### Response Object
`res.status(code)` : sets the status code

`res.send(body)` : sends the body back to the client

`res.json(body)` : sends the body serialized as JSON back to the client