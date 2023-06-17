# M3-W3-D2

- Request Components
- Response Components
- Form Submission
- RESTful Routes

---

## Pairing Guidelines Reminder

- Driver / Navigator roles
- Switch roles every ~15 minutes
- Set expectations up front
- Engage in active listening
- Use code-centric rather than person-centric language

---

## Note on the days structure

Todays content is primarily discussion based, so really dig into the why and
talk about different options and reasonings with your pair and during whole
class discussions. Remember, you only get out what you put into the program :)

---

## Request Practices (25m, paired)

- Request Components Quiz
- Request Scenario Practice

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

---

## Request Discussion

---

## Response Practices (25m, paired)

- Response Components Quiz
- Response Scenario Practice

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

---

## Response Discussion

---

## (ReST)ful Practices (30m)

- Restful Routes Quiz
- HTML Web Server RESTful Endpoints

Remember that ReST is a convention not a protocol so it doesn't have concrete
rules. More like one (very popular) opinion on a set of best practices for
building routes.

Example: Delete a User -> DELETE /users/:id

Example: View User Details -> GET /users/:id

---

## (ReST)ful Discussion

---

## Postman Practice (20m)

---

## Postman Discussion

---
