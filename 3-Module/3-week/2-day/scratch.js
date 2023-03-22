//Servers
//A servers role is to send requested data to a client

//HTTP
//The protocol in which we request and respond with data

//Properties of HTTP

//1. Reliable connection - We sacrifice a bit of speed to ensure a trustworthy connection
//                         Not only will our messages make it there, but they'll get there in order

//2. Stateless - This just that the "message" doesn't store any information
//               You can, however, get around that

//3. Intermediaries - You request is bound to pass through a series of intermediaries
//                    before it makes it to it's destination

//3 types of intermediaries
// Gateways - Pretend to be the server you requested
// Proxies - Modify your request so it looks like it came from somewhere else
// Tunnels - Simply pass along the request

//Request-Response Cycle
//How clients, browsers, and servers interact with eachother

//Request - HTTP Verbs
// GET - Asks for something ("lemme get uhhh")
// POST - Creates a new resource on the server (submit a form, adding a comment, posting a picture)
// PUT - Modify/Update an existing resource (change address, change picture caption)
// PATCH - Updates an existing source with less info than PUT^
// DELETE - Deletes an existing resource


//Response - Status Code
//We use status codes to either give our user the content, or explain why we couldn't give it to them

//100-199 : Informational
// Tell the client request was recieved and provide additional info

//200-299 : Successful 
//Request was successful

//200 - OK - Request received and fulfilled

//201 - CREATED - Request was received and content was created

//300-399 : Redirection
//The URL has changed

//301 - Moved permenantly, should give the client a  new URL

//302 - Moved temporarily, should redirect the client to the new URL

//400-499 : Client Error

//400 - Bad request - Server cannot understand request

//401 - Unauthorized - You don't access to this

//404 - Not Found - The URL doesn't or you gave them the wrong one

//500-599 : Server Error
//The request was fine, but something went wrong in the server

//500 - Request was received, but server failed (bug or error)

//504 - Gateway timeout - Request was received but the server took too long

//Routes and Endpoints
// http://websites.com/users
// /users GET 

//An endpoint performs a specific function, and route helps us get there