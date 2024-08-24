# Grocery Store, Phase 2: Displaying A List Of Produce

To display a list of produce, you first need to store the list of produce in the
Redux store. Then you need to extract the produce from the store for display in
a React component.

## Produce reducer

First, you need to create space in the Redux store for the produce. To do this,
you will add a key in the Redux store for handling the produce information. This
key will be the produce slice of state.

In your store file (__src/store/store.js__), add a key of `produce` to the
`rootReducer` with the value of `produceReducer`:

```js
// src/store/store.js

// ...
const rootReducer = combineReducers({
  produce: produceReducer
});
```

The `produceReducer` is responsible for handling the produce information in the
store, or the produce slice of state.

Now you need to define the `produceReducer`. Create a file in the `store`
folder called __produce.js__. Define a function called `produceReducer` with
`state` and `action` as parameters. The `state` should default to an empty
object. Add a `switch/case` statement on `action.type` inside of the function
and return the state as the `default` case. Export the `produceReducer` as
default.

```js
// src/store/produce.js

export default function produceReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}
```

By convention, all reducer functions should have this basic structure. The
reducer should return the old state or a new state depending on the `type` of
the `action` that gets dispatched. The `state` does not have to be an object. It
could be an array, a boolean, etc.

The produce slice of state should be an object with produce id's as keys. The
values should be objects of produce information.

Import the `produceReducer` into the store file, __store/store.js__.

### Test the reducer

Now, test the reducer by refreshing at [http://localhost:5173]. The state in the
Redux DevTools extension should show a key of `produce` with the value of an
empty object! Also, if you call `store.getState()` in the console, you'll get
an object with a key of produce and an empty object as the value.

## Populate the produce slice of state

You will use the mock data in the __src/mockData/produce.json__ file to add
produce to the produce slice of state. To populate the produce slice of state,
you need to trigger a change to the Redux store state. This can only be done by
dispatching an action.

In the __store/produce.js__ file, create and export an action creator called
`populateProduce`. This function should return an object with a unique `type`
key. Create a constant called `POPULATE` and set it to a string literal of
`produce/POPULATE`. Set the key of `type` in the return of `populateProduce` to
this constant.

Import __produce.json__ as `produceData`. Set a key of `produce` in the return
of `populateProduce` to `produceData`. The key of `produce` is a payload key.

If you try dispatching the `populateProduce` action right now, the Redux store
state will not change. Whenever you create a new action type, you need to add a
case for it in reducer that handles the slice of state that needs to be updated.

In the `produceReducer` add a case for the `action.type` of `POPULATE`. This
case should turn the `action.produce` array into an object and return the
object. `action.produce` is an array of produce data objects. The object
returned should have keys set to the id's of the produce data objects with their
values as the respective produce data objects.

The `action.produce` array should look something like this:

```js
[
  { id: 1, name: "Longos - Greek Salad", liked: false },
  { id: 2, name: "Juice - Lagoon Mango", liked: false },
  { id: 3, name: "Lamb - Whole, Frozen", liked: false },
  // ...
]
```

The object created from the array should look something like this:

```js
{
  1: { id: 1, name: "Longos - Greek Salad", liked: false },
  2: { id: 2, name: "Juice - Lagoon Mango", liked: false },
  3: { id: 3, name: "Lamb - Whole, Frozen", liked: false },
  // ...
}
```

Try attempting this before looking below.

```js
// src/store/produce.js

import produceData from '../mockData/produce.json'

const POPULATE = 'produce/POPULATE';

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData
  };
};

export default function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE: {
      const newState = {};
      action.produce.forEach(produce => {
        newState[produce.id] = produce;
      });
      return newState;
    }
    default:
      return state;
  }
}
```

> **Note:** Your code will still work if you do not include the curly braces (`{
> }`) around the `POPULATE` case, but your linter will object because you are
> declaring a variable inside of a case statement ([`no-case-declarations`]).
> Such declarations can be problematical because they are visible throughout the
> `switch`, but they are only initialized if that particular case is triggered.
> Blocking the case with curly braces effectively limits the declared variable
> to that case.

This conversion from an array into this object structure is known as
**normalizing data**. It's faster to search for a produce by its id in this
object structure than in an array. Normalizing data is a common practice even
outside of Redux, so practice getting comfortable with it!

### Testing `populateProduce` action

To test the `populateProduce` action, import it into the entry file and attach
it to the `window` just like you did with the `store`.

```js
// src/main.jsx

import { populateProduce } from './store/produce'
// ...
if (import.meta.env.MODE !== "production") {
  window.store = store;
  window.populateProduce = populateProduce;
}
```

Go to [http://localhost:5173] and use `store.dispatch` on the browser's DevTools console to dispatch the action from the `populateProduce` action creator
on the `window`:

```js
store.dispatch(populateProduce());
```

As a response to dispatching this action, the `redux-logger` middleware should
aesthetically display the previous state, the action, and the next state in the
console. The Redux DevTools extension should now show the action dispatched
and the changed state.

The new state should look something like this:

```js
{
  produce: {
    1: { id: 1, name: "Longos - Greek Salad", liked: false },
    2: { id: 2, name: "Juice - Lagoon Mango", liked: false },
    3: { id: 3, name: "Lamb - Whole, Frozen", liked: false },
    // ...
  }
}
```

To debug the action, you can add `console.log`s and/or `debugger`s in the
action creator and reducer. To hit them, try refreshing and dispatching the
action in the console again.

Even if your state looks the way you expect it to look, try adding `console.log`
and/or `debugger` into the action creator and reducer to examine how and when
they are invoked.

## Programmatically dispatch `populateProduce`

To programmatically dispatch the `populateProduce` action instead of doing it
through the browser console, you will dispatch this action when the `App`
component gets loaded.

To get the `dispatch` method in a React component, import and use the
`useDispatch` hook from `react-redux` in the `App` component.

Import the `populateProduce` action creator into the `App` component file.

Use the `useEffect` hook to dispatch the action when the `App` component first
loads.

The relevant parts of your `App` component should now look something like this:

```js
// src/App.jsx

import { useDispatch } from 'react-redux'
import { populateProduce } from './store/produce'

function App() {
  const dispatch = useDispatch();

  // NOTE: There is a slight problem with this useEffect; can you find it?
  useEffect(() => {
    dispatch(populateProduce());
  }, []);
  // ...
}
```

Reload [http://localhost:5173]. You should see the Redux store state updated
automatically with the populate produce action!

You may have noticed a warning in the React server logs or in the browser's
console: "React Hook useEffect has a missing dependency: 'dispatch'." Add
`dispatch` into `useEffect`'s dependency array. The `dispatch` function should
never change across re-renders, so `useEffect` should still dispatch the action
only once.

## Display the produce in a list

So far, you've added the produce mock data into the Redux store state. Nothing
has changed on your actual React application, however. To display the produce,
you need the `ProduceList` component to access the produce slice of state from
the Redux store.

In the `ProduceList` component file, import `useSelector` from `react-redux`.
`useSelector` accepts a function as a parameter and will pass the updated
state into the function whenever the state gets updated. The return value of
the function will be the return of the `useSelector` function. In the component,
set the `produce` variable to the return of `useSelector` and pass in a function
that returns the `produce` slice of state from the updated state:

```js
const produce = useSelector(state => state.produce);
```

The `ProduceList` component will turn the products into an array of
`ProduceDetails` components to be rendered.

If you refresh the [http://localhost:5173] now, the produce should be displayed
under "All Produce"!

Commit your code!

[http://localhost:5173]: http://localhost:5173
[`no-case-declarations`]: https://eslint.org/docs/latest/rules/no-case-declarations
