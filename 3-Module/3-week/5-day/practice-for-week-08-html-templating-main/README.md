# Practice: Basic HTML Templating

In this practice, you will be replacing values in an HTML file using basic
HTML templating. After you replace the values in the HTML file, you will
send the HTML file as a response.

## Set up

Clone the project from the [starter].

## Background and Context

You will be creating a web server that sends static and dynamic content. The
web server should allow users to see all the dogs in the Dog club, add a dog
to the dog club, see the details of a dog, and edit the details of a dog.

Take a look inside of the project folder. The **assets** folder contains the
CSS and image files. The **views** folder contains all the HTML files. Some of
the files are basic template files that expect certain sections to be replaced
with values. Can you identify the values that need to be replaced inside of the
files?

Finally, look inside of the **server.js** file. This file contains your server
and information about all the dogs on your server.

Near the top of the **server.js** file, you will see the following code:

```js
let dogs = [
  {
    dogId: 1,
    name: 'Fido',
    age: 2
  },
  {
    dogId: 2,
    name: 'Fluffy',
    age: 10
  }
];

let nextDogId = 3;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}
```

The `dogs` array of objects is your data and contain all the information about
each dog in your server. The `getNewDogId()` function will increment the
`nextDogId` number each time it's called and return a unique id when you want
to add a dog to the `dogs` array.

For example, to add a new dog to your server, create a dog object with the
`dogId` key set to the return of `getNewDogId()` function. Then add that object
to the end of the `dogs` array.

```js
// example for creating a new dog
const newDog = {
  dogId: getNewDogId(),
  name: 'Toto',
  age: 5
};
dogs.push(newDog);
```

The `dogId` is the unique identifier for the `dogs` resource in the server. To
find a dog by its `dogId`, simply look for an object in the `dogs` array that
has the specified `dogId` as the value for the `dogId` property.

```js
// example for finding a dog by its dogId
const dogId = 2;
const fluffy = dog.find(dog => dog.dogId == dogId);
```

Start the server by running `node server.js`. You should be able to see the
Home page by navigating to [http://localhost:5000] on the browser or making a
`GET` request on Postman with that URL path.

## Phase 1: GET /dogs

In this phase, you will display the names of each of the dogs on the server.

The **dogs.html** HTML file in the **views** folder shows a list of dogs.
However, the list of dogs is dependent on the data in the server. The text
inside of the **dogs.html** file has a variable to be replaced, `#{dogsList}`.
In the route handler for the `GET /dogs` endpoint, replace this variable with a
string of `li` HTML tags containing the names of each of the dogs in the server.

The response body of the `GET /dogs` endpoint should contain:

```js
<ul>
  <li>Fido</li>
  <li>Fluffy</li>
</ul>
```

Make sure to test this out by navigating to the page on the browser or sending
a request on Postman.

## Phase 2: GET /dogs/new

In this phase, you will display the form to add a new dog to the server data.

Take a look at the **create-dog.html** file in the **views** folder. To display
this page to the user, are there any values that need to be replaced before
sending the contents as the response to the `GET /dogs/new` endpoint?

Send the HTML form page as a response for the `GET /dogs/new` route handler.

## Phase 3: GET /dogs/:dogId

In this phase, you will display the name and age of the dog identified by the
`:dogId` route parameter.

In the `GET /dogs/:dogId` route handler, find the dog by the `:dogId` route
parameter value. Read and replace the values in the **dog-details.html** file in
the **views** folder with the identified dog's details.

Make sure to test this out by navigating to the dog detail page on the browser
or sending a request on Postman. You can use a `:dogId` of `1` or `2` to test
your server response.

## Bonus Phases

Here are some additional route handlers to practice HTML templating and
processing form submissions.

### Phase 4: POST /dogs

In this phase, you will use the information in the body of the request to
add a new dog to the server data.

When the form to add a new dog is submitted, it will create a `POST /dogs`
request with the body containing the form input fields for `name` and `age`. In
the `POST /dogs` route handler, add a new dog to the server data using the
request body. Then redirect the client to the `/dogs/:dogId` route with the
newly added dog's `dogId` in place of the `:dogId` route parameter.

Test this route by submitting the HTML form from the `GET /dogs/new` route in
the browser, or by making a `POST /dogs` request in Postman.

### Phase 5: GET /dogs/:dogId/edit

In this phase, you will display the form to edit the dog in the server data
identified by the `:dogId` route parameter.

Take a look at the **edit-dog.html** file in the `views` folder. The form for
editing a dog needs to have the `name` and `age` fields pre-filled before
sending it to the browser. The `value` HTML attribute is set on both of the
`input` tags to values that need to be replaced with the data about the dog
that you wish to edit. When the form is submitted, it should make a
`POST /dogs/:dogId` request where the `:dogId` parameter is replaced with the
specified dog's `dogId`. The `action` HTML attribute on the `form` tag needs
the `dogId` value to be replaced.

In the `GET /dogs/:dogId/edit` route handler, identify the dog in the server
data by the `:dogId` route parameter. Read and replace the appropriate values
in the **edit-dog.htm**` file and send the HTML form page as the response.

Make sure to test this out by navigating to the dog edit page on the browser
or sending a request on Postman. You can use a `:dogId` of `1` or `2` to test
your server response.

### Phase 6: POST /dogs/:dogId

In this phase, you will use the information in the body of the request to
edit the dog in the server data identified by the `:dogId` route parameter.

When the form to edit a dog is submitted, it will create a `POST /dogs/:dogId`
request with the body containing the form input fields for `name` and `age`. In
the `POST /dogs/:dogId` route handler, use the information in the request body
to edit the dog in the server data identified by the `:dogId` route parameter.
Then redirect the client to the `/dogs/:dogId` route with the edited dog's
`dogId` in place of the `:dogId` route parameter.

Test this route by submitting the HTML form from the `GET /dogs/:dogId/edit`
route in the browser, or by making a `POST /dogs/:dogId` request in Postman.
You can use a `:dogId` of `1` or `2` to test your server response.

### Phase 7: Error Pages

Take a look at the Page Not Found route handler in the **server.js** file (after
the other route handlers). Notice how the route handler is reading and replacing
values in the **error.html** file and sending it as a response for any route
that doesn't match the other route handlers. This **error.html** file is
designed to be generic enough to take in any error message.

Some of the route handlers that you just defined have a `:dogId` route
parameter. What if there is a request that comes in that has a `dogId` in the
route parameter's place that is invalid? If the server data does not contain
the `dogId` that the client is asking to perform the operation on, then the
server should return a response saying it was not able to find the dog with the
`dogId` specified.

In each of the route handlers whose route has a `:dogId` route parameter, return
a `404` response. The body of the response should be the `error.html` template,
and the `message` variable in the template should be replaced with
`Dog Not Found`.

Test each of the route handlers by making a request to its route with an invalid
`dogId` like `2348`.

[starter]: https://github.com/appacademy/practice-for-week-08-html-templating