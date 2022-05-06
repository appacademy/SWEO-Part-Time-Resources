# Parse the Body of a Request Phase 2 - Log the Request Method and URL

In this phase, you will log the method and URL of the request object to the
terminal and test it.

Log the method and URL of the request object. What do you expect
will happen in your terminal if a client makes a request to your server?
How about multiple requests?

Start the server that you created in phase 1 and test it by sending multiple
requests to your server. Use Postman to make some requests with different
method and URL path combinations to confirm your expectations about what will be
logged to the terminal.

You should see this in order to pass the test specs:

```node.js
Server is listening on port 5000
GET /
```

Since your server is not returning a response for any
requests, your server will hang or not be able to accept any other requests
after the initial request. To solve this, simply restart your server after
every request that is made to the server.

To start the server, run `node server.js` or `npm start`. This will allow you to make requests
to the server at [http://localhost:5000] using any client (browser and Postman).

To stop the server from listening to requests, press `CTRL + c` for
Windows/Linux or `CMD + c` for MacOS in the terminal that you started the server
(wherever you ran `node server.js`). To restart a stopped server, run
`node server.js` again.

> Note: Make sure to stop the server in the practice/exercise if there is one.
> Leaving a server running may prevent servers in other practices/exercises
> from starting properly.