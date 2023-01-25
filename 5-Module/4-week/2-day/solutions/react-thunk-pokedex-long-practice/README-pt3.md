## Phase 5: `PokemonItems`

The thunk actions in phases 5 and 6 should be created in the
`src/store/items.js` file.

Create a thunk action creator for fetching the items for a single Pokemon based
on the `id` of the Pokemon in the `PokemonItems` component. Check out the API
docs for which route to hit and how you should format the URL path for this
information. After the response comes back, use the data to dispatch the return
of the `load` action creator for items.

Dispatch the thunk action you just created when the `id` of the Pokemon changes
in the `PokemonItems` component.

## Phase 6: `ItemForm`

Create a thunk action creator for editing an item in the `ItemForm`. Check
out the API docs for which route to hit and how to format the URL path and the
request body in the fetch request. After the response comes back, use the data
to dispatch the return of the `update` action creator for items.

Dispatch the thunk action you just created on the submission of the `ItemForm`.

## Bonus Phase 1: Create and dispatch a thunk action to delete an item

Create a thunk action creator for deleting an item. As before, check out the API
docs for the route, URL path, and request body format. Upon receiving a
successful response, dispatch the return of the appropriate action creator.

Dispatch the thunk action you just created when a user clicks the `DELETE`
button next to an item in the Pokemon Detail view.

## Bonus Phase 2: Create and dispatch a thunk action to create an item

Create a thunk action creator for creating an item. Once again, check out the
API docs for the route, URL path, and request body format. Upon receiving a
successful response, dispatch the return of the appropriate action creator.

Dispatch the thunk action you just created whenever a user submits an Add Item
form. Of course, there is no "Add Item" form at the moment, but you do have a
form that already has almost everything you need to add an item: the `ItemForm`
that the app currently uses to edit an item.

Modify the `ItemForm` so that it can display either an Add Form or an Edit Form.
As you think about how to do this, consider the following:

1. How your `ItemForm` will determine whether it should display an Add Form or
   an Edit Form
2. What the form will need to display/do differently in the two cases

Attach your Add Form version to the `+` button next to the `Items` header in the
Pokemon Detail view so that it displays whenever a user clicks the `+`. You
should enable the feature only if the Pokemon in view is captured.

(The Edit Form version is already attached to the `EDIT` button that appears
next to an item of a captured Pokemon.)

## Bonus Phase 3: Provide error-checking feedback on `CreatePokemonForm`

Your app should be able to handle the spectrum of errors that it might receive:
failed validations, DB constraint violations, and internet issues--Uh oh! Did
you forget to start your backend server before sending your request?!?--to name
a few of the more common you are likely to encounter.

If a user's attempt to create a new Pokemon fails, let them know what went wrong
so they can fix it!

Examine the response from the API when the creation of a new Pokemon fails
(e.g., when you submit the form with invalid inputs like a non-unique `name`).
You will probably also want to use your browser's DevTools to inspect the
response that the frontend receives when you submit the form with invalid
inputs.

Remember, if the API endpoint returns an unsuccessful response, then the `ok`
key on the response object resolved from a `fetch` Promise will be `false`.
Here's an example of how to determine if a response from a `fetch` call is
unsuccessful:

```js
const response = await fetch('/api/pokemon', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});

if (!response.ok) {
  // fetch call was unsuccessful
} else {
  // fetch call was successful
}
```

If the request to create a new Pokemon returns a `422` response, then the form
was submitted with invalid inputs.

How do you relay to the `CreatePokemonForm` that there was an error in the
`fetch` call from the thunk action that was dispatched when the form was
submitted? One way is to throw the response as an error in the thunk action when
the `fetch` call is unsuccessful.

Use the `try...catch` pattern described in [this MDN article][try-catch] to
catch the response thrown from the thunk action in the `CreatePokemonForm`
component.

Create a component state variable in the `CreatePokemonForm` to hold the errors
thrown from the thunk action. The state variable should be an object which has a
key for each input field that returned an error message.

If there is an error message for an input field, render the message right under
the input field using the `ErrorMessage` component. You should make sure that
each specific error message is associated with the appropriate field. For
instance, if the `Name` field has an error message of "cannot be empty", your
form should report "Name: cannot be empty" underneath the `Name` input.

## What you've learned

In this project, you have learned how to create and dispatch multiple thunk
actions. Well done!

[try-catch]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#adding_error_handling