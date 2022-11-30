// HTTP Server - Import and initialize server
// const http = require('http');
// const server = http.createServer((req, res) => {

// STEP 1: Import and initialize server, configure for JSON requests
// Your code here

const express = require('express')

const app = express()

app.use(express.json())

// HTTP Server: Handle route with param (/users/:userId) sending plain-text response
//     let reqBody = "";
//     req.on("data", (data) => {
//         reqBody += data;
//     });
//
//     req.on("end", () => {
//         if (reqBody) {
//             req.body = JSON.parse(reqBody);
//         }
//
//         // GET /users/:userId
//         if (req.method === 'GET' && req.url.startsWith('/users/')) {
//             const urlParts = req.url.split('/');
//             if (urlParts.length === 3) {
//                 const userId = urlParts[2];
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'text/plain');
//                 res.write('User details for userId: ');
//                 res.write(userId);
//                 return res.end();
//             }
//         }

    app.get('/users/:userId', (req, res) => {
        res.send(`User details for userId: ${req.params.userId}`)
    })


//
//         // Everything else is not found
//         res.statusCode = 404;
//         res.setHeader('Content-Type', 'text/plain');
//         res.write('Not Found');
//         return res.end()
//     });
//
// });

app.get('/*', (req, res) => {
    res.status(404).send('Not Found')
})


// STEP 2: Handle route with param (/users/:userId) sending plain-text response
// Your code here

// HTTP Server: Set port and listen for requests
// const port = 5000;
// server.listen(port, () => console.log('Server is listening on port', port));

// STEP 1: Set port and listen for requests
// Your code here

const port = 5000
app.listen(port, () => console.log('listening', port))