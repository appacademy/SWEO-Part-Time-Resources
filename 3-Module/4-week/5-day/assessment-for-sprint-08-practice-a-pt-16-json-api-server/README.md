# JSON API Endpoints

In this assessment, you will document the request and response components for
**API routes** of a server.

## Objective

Your objective is to document the request and response components for each
endpoint of the server in the `answer.json` file so that when you run
`npm test`, all tests pass. **All the endpoints are RESTful endpoints for a JSON
API server.**

**READ THE ENTIRE INSTRUCTIONS BEFORE WRITING ANY DOCUMENTATION IN THE FILE.**
Instructions are different depending on the type of server so please read
carefully.

This assessment will test you on your understanding of:

- RESTful endpoints of a JSON API server
- Formulating a request to a JSON API server
- Testing endpoints of a JSON API server using Postman, `fetch`, or the browser
- Reading the response components from a request

## Set up

Clone the assessment repository.

`cd` into the folder **install** the `npm` dependencies by running
`npm install`.

To **start the server**, run `npm start`. This will allow you to make requests
to [http://localhost:5000] using any client (browser and Postman).

To stop the server from listening to requests, press `CTRL + c` for
Windows/Linux or `CMD + c` for MacOS in the terminal that you started the server
(wherever you ran `npm start`).

To **reset the server data**, restart the server.

## Resources

Below is a list of all the **resources** for this server.

- colors:
  - colorId: unique identifier for a color
  - color: the name of the color

## Documentation

The documentation for this server should be written in the `answers.json` file
provided to you. For each endpoint listed below, list out the request and
response components in the `answers.json` file.

### Headers Formatting

**Include only necessary headers.**

To add a header as a component to the request or response, define the key and
value of a header in a JSON object set to the `headers` key on the `request`
or `response` object.

Here's an example:

```json
"headers": {
  "Content-Type": "application/json"
}
```

### Request/Response Body Formatting

To add a `body` as a component to the request, define the data structure of the
`body` (object, array, nested object, or nested array). The values for objects
in the `body` must be a truthy values.

Here's an example:

```json
"body": {
  "color": true,
  "toolbox": [
    {
      "tool": true
    }
  ]
}
```

### Removing a Component

To omit a component from the request or response, set the key of that request
or response component to `false`.

For example, to omit the `headers` of the request, change the `headers` key from
`null` to `false`.

```json
"headers": false,
```

To omit the `body` of the request, change the `body` key from `null` to `false`.

```json
"body": false
```

## Endpoints

Fill out the request and response components for the following endpoints in the
`answers.json` file provided. The command to run the test specs for each
endpoint is also given.

1. Get all the colors
   - `npm run test-01`
2. Add a color
   - `npm run test-02`

To run all the test specs for all the endpoints, run `npm test`.

## Submission

When you are ready to submit:

1. Re-run all unit tests and fix any syntax errors that are crashing the tests. If
the unit tests crash, or do not run, you will receive a zero for the coding
portion of the assessment
2. Delete the `node_modules` directory
3. Zip up your folder
4. Upload it

[http://localhost:5000]: http://localhost:5000
[https://github.com/appacademy/assessment-for-week-08-v2-practice-a-json-api-server]: https://github.com/appacademy/assessment-for-week-08-v2-practice-a-json-api-server