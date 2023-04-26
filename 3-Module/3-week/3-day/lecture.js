// server
// the job of a server is to serve data back
// serves responses

// client
// asks requests or asks data from the server

// HTTP -> hyper text transfer protocl
// filled with content or a giant block of information

// HTTP properties
// 1. reliable connection - we can trust that the infromation being sent will be sent
// and the information being recieved will be recieved..
// it is slow but is secure

// 2. stateless - therefore the data can't hold information
// there are ways to do so (JWT) -> json web tokens

// 3. intermediaries - a series of different paths to get to the server
// gateways -> they act as your server
// tunnels -> the set a pathway to your endpoint/server
// proxies -> they hide where the information is coming from

// request - response cycle
// the way client and server interacts with one another
// we make a request and the server makes a response
// request, browser reads that requests and conveys that information to the server
// the server then sends the response back then the browser reads that response
// and displays/renders that information

// URL -> uniform resource locator
// this is the location of our resoruce
// URI -> uniform resource identifier
// location of your resource
// URI -> URL and URN(uniform resource name)

// HTTP verbs -> requests
// GET -> we are asking for something, we wanna get something, way to get information
// POST -> is creating resources, like creating a new photo, creating a new user, signup, leaving a review, submiting a form
// PUT -> updating a resource, changing passwords, changing profile picture, put requires more information
// PATCH -> is the same as put, requires less information
// DELETE -> deleting a resource, you want to remove that comment, you wanna remove that picture.

// profile -> put // /profile
// firstName -> change
// lastName -> change
// number -> change
// email -> change
// age -> change
// gender -> change

// profile -> patch // /profile
// firstName
// lastName
// number
// email
// age -> change
// gender

// Status codes -> response
// 100-199 -> informational
// 200-299 -> successful
// 300-399 -> redirection
// 400-499 -> client errors
// 500-599 -> server errors

// endpoints vs routes
// an endpoint contains the method plus the url/uri

// `GET /users/`

// a route only contains the url/uri

// /users/

// REST -> representational state transfer
// convetion, follows a standard into making endpoints more easier to read

// plural
// /plural-resources/

// /comments

// single
// /plural-resources/identifier

// /comments/:commentId
// colon denotes a variable
// /comments/1

// sub resource
// /plural-resources/identifier/sub-resource

// /posts/:postId/comments


// DELETE action to get a resource
// GET action to delete a resource
