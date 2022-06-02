# Discussion Questions for Express Request and Response Objects

## Request object properties

- What are query parameters?
  - Query parameters are additional key-value pair values that can be passed
    through the URL path. They are usually optional key-value pairs whereas
    route parameters are absolutely required.
  - They are defined as Percent-encoded (or url-encoded) values right after
    the path.
  - Ex: `/games?name=hello&year=1998` has two query parameters, name and year.
- What is the functional difference between a query parameter and a route
  parameter?
  - A route parameter should be used to send data that is absolutely necessary
    to identify the nature of the request.
  - A query parameter should be used to filter the request further or send
    optional data.
  - For example, an endpoint to get the all the games of a specific genre should
    have the specific genre defined by a route paramter. If you want to optionally
    filter those games further by the year that they were released, a query
    parameter would be appropriate (`/genres/mystery/games?year=1997` would get
    all the games with the mystery genre released in the year 1997).
- How does Express parse the query parameters of a request?
  - It parses it and creates a JavaScript object with the parsed key-value pairs
    and sets it as a `params` property on the Request object (`req.params`)
- How does Express parse the body of the request?
  - It parses it and creates a JavaScript object with the parsed key-value pairs
    and sets it as a `body` property on the Request object (`req.body`)
- What does the "Content-Type" header of the request need to be if you want to send
  a request with a JSON body?
  - "application/json"
  - If you don't set this header on the request, then Express will not be able to
    parse the request body and `req.body` will be `undefined`.

## Response object methods

- Recall: What does the status code of a response indicate?
- How do you set the status code of the response in Express?
  - Use the `.status` method on the Response object in a route handler.
  - Ex:
    ```js
    app.get('/games/:id', (req, res) => {
      const { id } = req.params;
      res.status(404); // sets the status code to 404
    });
    ```
- How do you send a JSON response in Express?
  - Use the `.json` method on the Response object and pass in a JavaScript
    as an argument to be serialized into JSON and sent as the response.
- True or False: `res.json()` will set the "Content-Type" header of the
  **request**.
  - False. It will set the "Content-Type" header of the **response**.
