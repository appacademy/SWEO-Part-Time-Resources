# Practice: Parse the Body of a Request

In this practice, you will implement the code to parse the body of a typical
HTML form submission request with a `Content-Type` header of
`application/x-www-form-urlencoded`.

## Set up

Clone the practice from the [starter].

You will be implementing your code in the __server.js__ file for all of the
phases.

## Phases

1. Create a server - create a server and listen for requests on a specified port
2. Log the Request Method and URL - log the method and URL of the request object
   and test it using Postman
3. Parse the body of the request - convert a percent-encoded request body into a
   JavaScript object

[starter]: https://github.com/appacademy/practice-for-week-08-parse-request-body