# M3-W3-D2

- Request Components
- Response Components
- Form Submission
- RESTful Routes

---

## Request Components

### Request Quiz and Practice (20m)

This practice is entirely discussion based. Go ahead and clone the repo and then
just edit the markdown file with your idea of the request components for each of
the scenarios.

Example: Search Google Images for "Cute Kitten Pictures"

```json
{
  "Method": "GET",
  "URI": "/images/search=cute%20kitten%20pictures",
  "headers": {
    "Host": "google.com"
  },
  "body": "none"
}
```

```js
  //we want to get an encoded string to query the google servers.
  //we cant use a space in a uri string
  //so we can use an ascii value for space converted to hex
  //this needs to be preceded by a percent sign, called percent encoding

  //code to convert: string char -> ascii -> hex
  let space = ' ';
  let asciiSpace = space.charCodeAt(); //32
  let hexAsciiSpace = asciiSpace.toString(16); //20


  //This exercise is not looking for accuracy to the actual website routes
  //Just a thought through example of a possible request.
```

### Discussion: Request Quiz & Practice

---

## Response Components

### Response Quiz & Practice (20m)

Example: Viewing User Setting on Github when your login token is expired

```json
{
  "statusCode": "401", //unauthorized
  "headers": {
    "Content-Type": "text/html"
  },
  "body": "login page" //redirect the user to login before viewing settings
}
```

### Discussion: Response Quiz & Practice

---

## ReST (Representational State Transfer)

### ReST Quiz and Practice (25m)

Remember that ReST is a convention not a protocol so it doesn't have concrete
rules. More like one (very popular) opinion on a set of best practices for
building routes.

Example: Delete a User -> DELETE /users/:id

Example: View User Details -> GET /users/:id

### Discussion: ReST Quiz and Practice

---

## Postman Requests (Solo)

---

## Start on Homework

If time permits!
