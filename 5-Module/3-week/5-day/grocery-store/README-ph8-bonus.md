# Grocery Store, Phase 8 And Bonuses

In Phase 8, you will implement Redux selectors. Bonus phases then ask you to
order the produce in the cart and open the cart side bar programmatically.

## Phase 8: Redux selectors

Instead of creating a different selector function every time you use the
`useSelector` hook for the same purpose (e.g., extracting the `produce` slice of
state), you can define a single named function to be used anytime you need the
same information from the Redux store state.

For example, to get an array of all the produce in the Redux store state, you
can define the following selector function in the __src/store/produce.js__ file:

```js
// src/store/produce.js

export const selectProduceArray = (state) => Object.values(state.produce);
```

Import this function into the `ProduceList` component and replace these lines:

```js
  const produce = useSelector(state => state.produce);

  const produceArr = Object.values(produce);
```

with this line:

```js
const produceArr = useSelector(selectProduceArray);
```

Your code should still work as before! Now, however, when you run your code,
you'll see a new warning in the console:

```plaintext
Selector selectProductArray returned a different result when called with the
same parameters. This can lead to unnecessary rerenders. Selectors that return a
new reference (such as an object or an array) should be memoized.
```

What's the problem? As it is currently written, `selectProductArray` creates a
new array to store the produce values every time it is called. Each array
returned by `selectProductArray` will accordingly have a new address in memory,
meaning that no two arrays returned by the selector will ever have the same
referential value. React-Redux will therefore consider each array to constitute
an update, thereby triggering rerenders of your component **even when nothing
has changed.**

To solve this potential performance issue, you need to [_memoize_ the
selector][memoize]. In other words, you need to adjust your selector so that it
returns a new array only when its inputs have actually changed. Redux
[recommends][reselect] using `createSelector` from the `reselect` package for
this task. To install it, just run `npm install reselect` in your project's root
directory.

`createSelector` takes one or more input selectors and an output selector,
returning a selector function. The input selectors grab the appropriate parts of
state; the output selector--which receives the output of the input selectors as
its input--then transforms the grabbed portions of state in some way. Here's
what makes this approach effective: the output selector only runs if the input
selectors have new results. Otherwise, the selector just returns its previous
output.

For `selectProductArray`, the input selector should grab the produce slice of
state. The output selector should then transform that slice of state into an
array of produce. Done correctly, it will look something like this:

```js
// src/store/product.js

import { createSelector } from 'reselect'

// ...
export const selectProduce = (state) => state.produce;
export const selectProduceArray =
  createSelector(selectProduce, (produce) => Object.values(produce));
```

Now `selectProduceArray` will only produce a new array if the produce slice of
state changes. Nice! Refresh your browser and confirm that the warning is now
gone.

This may seem like it's much more work than just defining the selector function
inside the component, but it will save you from having to refactor all your code
in all the components if you change the structure of your state. Instead, you
can just refactor the one file that holds all your Redux actions, reducer, and
selector functions.

Named selector functions are optional. It's ultimately up to you whether or not
you want to use them. For now, though, practice defining your own selector
functions by refactoring the code to use named selector functions only.

For the `Cart` component, try making a single selector function that will
extract the cart items with the cart **and** produce information (including the
`name`). **Tip:** Because this selector is combining--i.e., transforming--slices
of state, you'll probably want to use `createSelector` again!

## Bonus Phase 1: Keep the order of produce as it is added to the cart

Reconfigure your cart reducer to maintain the order of the added produce to the
cart. For example, if you add produce with an id of 3 then produce with an id of
1 to the shopping cart, the produce with the id of 3 should come _before_ the
produce with the id of 1 in the shopping cart.

**Hint:** Store an object and an array in your cart slice of state. If you
implemented the selector functions correctly, you only need to update the Redux
files. No need to change any of the React components.

## Bonus Phase 2: Programmatically open the cart side bar

For an added bonus, try to configure the application to open the cart side bar
whenever a new item is added to the cart.

[memoize]: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization
[reselect]: https://redux.js.org/usage/deriving-data-selectors#writing-memoized-selectors-with-reselect
