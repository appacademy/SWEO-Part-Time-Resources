# Discussion Questions for HTTP vs Express

- What is the Request object?
  - A new Request object is created for any request that is
    received by the server.
  - Each route handler callback function called by Express will
    be passed in the Request object as the first argument.
  - The Request object is composed of properties and methods to
    read and interact with the request component data such as
    the method, URL path, and the body of the request.
- What is the Response object?
  - A new Response object is created for any request that is
    received by the server.
  - The Response object is composed of properties and methods to
    formulate and interact with the response component data. It
    is also used to trigger the response to be sent for the request
    that it is being handled.
  - Each route handler callback function called by Express will
    be passed in the Response object as the second argument.
- How do you parse a request body when the "Content-Type" request
  header is "application/json" in Express?
  - Call the following on the Express application: `app.use(express.json())`
  - How does this compare with the Node http server?
- What is a route parameter?
  - A route parameter is a part of the URL path that can be replaced by any
    segment. Ex: A URL pattern of `/games/:id` where `:id` is the route
    parameter could match with a URL path of `/games/2` or `/games/hello`.
- How do you define a route parameter in Express?
  - You define a route parameter in Express in the URL pattern passed into
    the route handler.
  - Ex: `app.get('/games/:id', () => { ... })`
  - Express will automatically match the URL pattern with route parameters
    to URL paths in any incoming request.
- How do you parse route parameters in Express?
  - Using the `req.params` object.
  
    ```js
    app.get('/games/:id', (req, res) => {
      const { id } = req.params; // same as: const id = req.params.id
      res.json(id);
    });
    ```
    
    - Side question: if you change the URL pattern in the code above to
      '/games/:gameId', how should you update the route handler callback
      function to reflect that change?
