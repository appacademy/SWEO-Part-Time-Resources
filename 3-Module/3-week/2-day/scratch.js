//Servers 
//The job of a server is to SERVE data to a client

//HTTP
//Just a protocol in which we request and respond with data

//Properties of HTTP

//1. Reliable connection - We sacrifice speed for trust in the connection
//    Helps us ensure that not only will our messages get there, but they will get there in order

//2. Stateless - This just means that the "message" doesn't store any information
//               You can, however, get around this

//3. Intermediaries - Most likely our request will go through a series of "intermediaries" before
//                    before it reaches it's destination
//                  - There are three, proxies, gateways, tunnels

    //Gateways - Pretend to be the server you requested
    //Proxies - Make your request look like it came from somewhere else
    //Tunnels - Simply pass along your request

//Request-Response Cycle
//They way in which clients, browsers, and servers interact
//We make a request, broswer translates and send to server, we get a response and send it to client

//HTTP Verbs - Requests
// GET - Asks for something "lemme get uhh"
// POST - Creates a new resource on the server (submitting a form, add content)
// PUT - Update resources (change of address, update caption)
// PATCH - Also updates resources, but needs less info than PUT^
// DELETE - Deletes a resource (delete photo, remove a product)

//Status codes - Responses
//Tell us the status of the response

//100-199 : Informational
//Tells us the response was recieved and then gives us extra info

//200-299 : Successful
//Tells the client the request was successful

//200 - OK - Request was recieved and fulfilled

//201 - CREATED - Resource was recieved and created (POST)

//300-399 : Redirection
//The URL has been changed

//301 - Moved permenatently, should give client new URL

//302 - Resource moved temporarily, should redirect

//400-499 : Client Error
//Error with clients request

//400 - Bad Request - Server couldn't understand the request

//401 - Unauthorized - You don't access to this content

//404 - Not Found - Resource either didn't exist or the URL was wrong

//500-599 : Server Error
//The request was fine, but there was an interal error that prevented it from working

//500 - Request was recieved, but the server failed (error or a bug within the server)

//504 - Gateway timeout - Server took too long to handle the request

//REST - Representational State Transfer

//Routes and Endpoints 

