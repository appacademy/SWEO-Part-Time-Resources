// Server
// the job of the server is to serve data to the client

// HTTP -> hyper text transfer protocol
// its just a protocol in which we request and respond to the data

// properties of HTTP

// 1. reliable connection - we sacrifice speed for a trust in connection
// helps us ensure that we will be getting our messages and our messages will be sent
// without any sort of issues

// 2. stateless - this means that messages don't store any form of information
// however there are ways to get around this. JWT's -> json web tokens

// 3. intermediaries - there are three, proxies, gates and tunnels

// gateways - pretend to be the server you requested
// proxies - makes it look like your request is coming from somewhere else
// tunnels - simple pass along your request

// request-response cycle
// the way in which client and servers interact
// we make a request, the browser translates that request and sends it to the server,
// then we get a response back from the server

// HTTP verbs - Requests
// GET -> it gets information from the server, i am asking for something
// POST -> us sending information, or creating a new resource onto to the server(ex: submitting form, adding new content, signup, login)
// PUT -> updating a content/resource (changing of password, changing of email, change of contact information) more information
// PATCH -> similar to put, requires less information or essentially you just wanna update one field/value
// DELETE -> is removing a resource (deleting your account, removing a product, deleting an image)

// profile info -> put
// fullname -> change
// lastname -> change
// address -> change
// phone number -> change
// email -> change

// profile info -> patch
// fullname -> change
// lastname
// address
// phone number
// email

// endpoints
// in web development
// they refer to your URI -> uniform resource identifier
// or your URL -> uniform resource locator which is a subset of URL (www.google.com)
// it takes a method/requests that holds resources to send back

// Staus Codes - Responses
// 100-199 - informational

// 200-299 - successful

// 300-399 - redirection

// 400-499 - client errors

// 500-599 - sever errors

// REST
// is a convetion
// its short for reprensentional state transfer

// sample endpoint
// /users/
// /users/1

// not restful convetion
// /users/1/delete

// endpoints
// GET /users/
// PATCH /users

// route

// users/

// documentation
// comments/:commentId/review
// colons are to denote that they are a variable

// comments/1/review -> look for the review page for comment with id 1
// comments/2/review
