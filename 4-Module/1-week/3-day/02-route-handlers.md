# Discussion Questions for Express Route Handlers

- What is a route handler? (recall from Node HTTP server)
  - A route handler is a block of code that will run on a server when a
    request's method and URL path matches the route handler's method and
    URL pattern.
  - In Express, a route handler is a callback function that will run when
    the method and the URL path matches the route handler's method and
    URL pattern. Express will call the route handler callback function
    when the route handler is matched to a request that the server receives.
- Where do you attach a route handler?
  - You can attach a route handler directly onto the Express application.
    Later, you will learn more about the one more way of attaching a route
    handler in Express.
- When do you invoke the route handler function?
  - You never invoke a route handler function. An Express application will
    invoke it when an incoming request matches the route handler's method
    and URL pattern.
- When does Express invoke the route handler function?
  - When the route handler's method and URL pattern is matched to the
    method and the URL path of an incoming request.
- How do you define the method of a route handler?
  - As the name of the function called on the Express application.
- How do you define the URL path of a route handler?
  - As the first argument to the function called on the Express
    application.
- How do you define a route handler?
  - As the second argument to the function called on the Express application
    and as a callback function.
