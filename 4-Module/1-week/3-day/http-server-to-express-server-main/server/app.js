// HTTP Server - Import and initialize server
<<<<<<< HEAD
const express = require('express')
// const http = require('http');
const app = express()
=======
// const http = require('http');
>>>>>>> 2022-Jan-W
// const server = http.createServer((req, res) => {

// STEP 1: Import and initialize server, configure for JSON requests
// Your code here
<<<<<<< HEAD
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
=======
const express = require('express')
const app = express()
app.use(express.json())

app.use((req, res, next) => {
    console.log("Server is live, here is the incoming request body : ",  req.body)
    next()
})
// HTTP Server: Handle route with param (/users/:userId) sending plain-text response
>>>>>>> 2022-Jan-W
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
//
//         // Everything else is not found
//         res.statusCode = 404;
//         res.setHeader('Content-Type', 'text/plain');
//         res.write('Not Found');
//         return res.end()
//     });
//
// });
<<<<<<< HEAD
app.use((req, res, next) => {
    console.log("Server is good")
    next()
})
// STEP 2: Handle route with param (/users/:userId) sending plain-text response
// Your code here
app.get('/users/:userId', (req, res) => {
    // console.log(req.params.userId)
    const {userId} = req.params
    res.status(200)
    res.send(`details for user :  ${userId}`)
=======

// STEP 2: Handle route with param (/users/:userId) sending plain-text response
// Your code here
app.get('/users/:userId', (req, res) => {
    const {userId} = req.params
    res.status(200)
    res.send(`User details for userId:  ${userId}`)
>>>>>>> 2022-Jan-W
})
// HTTP Server: Set port and listen for requests
// const port = 5000;
// server.listen(port, () => console.log('Server is listening on port', port));
<<<<<<< HEAD
app.listen(5000, () => console.log(`listening on port ${5000}`))
// STEP 1: Set port and listen for requests
// Your code here
=======

// STEP 1: Set port and listen for requests
// Your code here

app.listen(5000, () => console.log(`listening on port ${5000}`))
>>>>>>> 2022-Jan-W
