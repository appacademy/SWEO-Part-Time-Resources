# Server Interaction Guideline

1. npm start

2. In browser dev tools

- GET fetch("/urlPath/:uniqueId/nestedResource")
- PUT PATCH POST ("/urlPath/:uniqueId/nestedResource" , {method, headers, body})
- DELETE fetch("/urlPath/:uniqueId/nestedResource" , {method})

3. Endpoint #2 example

- fetch("/artists/1").then(res => console.log(res.status)) // status code
- fetch("/artists/1").then(res => console.log(res.headers.get("Content-Type"))) // Content-Type header
- fetch("/artists/1").then(response => response.json()).then(body => console.log(body)) // body of the response