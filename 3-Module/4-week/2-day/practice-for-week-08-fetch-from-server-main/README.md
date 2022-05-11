# Practice: Writing Fetch Reqeusts

This practice tests your knowledge of *traditional* server endpoints and 
your use of the [fetch] method. Your fetch requests will interact with the server 
from the HTML Templating practice. 

## Set up

Clone the project from the [starter]. Run `npm  install`. Run the tests with
`npm test`.

## Background and Context

You will be making fetch requests already integrated with your HTML page. After
you start the server with `npm start` you can begin writing your code. Clicking
the labeled buttons on the homepage at `localhost:5001` should redirect you to
the matching endpoint. 

***IMPORTANT***: the asynchronous code has already been implemented for you (i.e. 
no need for `.then` or `async await` in this practice). Your job is to correctly 
implement the correct `URL` and `options`. 

Make all changes in `/assets/js/your-code.js`. No need to restart the server on
this project, however, you will need to refresh the browser to get the updated
copy of your JavaScript file from the server. Therefore, after you save in VS Code, 
always refresh the browser to see any changes. 

As review, the two parameters you need to use fetch correctly are outlined
below: 

```js
const url = "/endpoint";
const headers = {"Content-Type": "Request body's Content-Type"};
// Use the URLSearchParams API to format your body as shown below
const body = new URLSearchParams({
    key: "value"
});

const options = {
    method: "GET|POST|PUT|DELETE", 
    headers: headers,
    body: body
};

fetch(url, options);
```

The body of a request can be formatted correctly by passing in an object to the
[URLSearchParams] API's constructor function.  This API is built to work with fetch
to replicate form submissions using HTML. The key-value pairs of your object must match
what the server is expecting.

Write your code in `assets/js/your-code.js`. Do not change the code in any other
files. 


## Phase 1: getAllDogs()

Return a fetch call to `GET /dogs`. Implemented correctly, clicking this 
button in your browser at `localhost:5001` should redirect you to the page 
with all of the dogs. 

Run the test specs with `npm test`.

## Phase 2: getDogNumberTwo()

Return a fetch call to the server's endpoint for the dog with an id of 2.

## Phase 3: postNewDog() 

Let's hard code a new dog using fetch. If you have a dog of your own, this is 
your chance to add your pooch to the server! Return a fetch call to post a new dog 
with a `name` and `age`. Use the [URLSearchParams] API to make the body of your 
request. Take note: the server is expecting a `name` and `age` key from the 
request's body, and anything else will result in a server error. 

The [URLSearchParams] API works with the fetch API to mimic a form submission. Which 
`Content-Type` is used for form submissions? Use it in this request
as well. 

You will know you sent the correct fetch request when the browser is redirected
to the new dog's page. 

## Phase 4: postNewDogV2(name, age) 

You can hard code a new dog now, but you want your code to be more dynamic. This
time you'll be posting a dog to the server based on the user's input. Don't
worry-- your colleagues wrote the code to get the `name` and `age` from the HTML
and pass them in as arguments to this function. You should be able to
restructure your last request from Phase 3 to be more dynamic now. 

Implemented correctly, when you fill out the input boxes, whatever dog name and
age you input will be added to the server. 

## Phase 5: deleteDog(id)

Implement a fetch request to delete a dog on the server based on an id. For this
*traditional* server, what will the RESTful endpoint be for deleting a dog?

To ensure that only *you* can delete dogs, the backend engineers have already
implemented an `AUTH` header on the backend route. Set the request header for
`AUTH` to have the value `ckyut5wau0000jyv5bsrud90y`. This long string is a
token used to valdiate any requests made to this endpoint.

With the correct fetch request, you should be redirected to `GET /dogs` without
the deleted dog.

[starter]: https://github.com/appacademy/practice-for-week-08-fetch-from-server
[URLSearchParams]: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
[fetch]: https://developer.mozilla.org/en-US/docs/Web/API/fetch