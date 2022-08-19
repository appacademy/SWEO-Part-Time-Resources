# Grocery Store, Phase 8 And Bonuses

In Phase 8, you will implement Redux selectors. Bonus phases then ask you to
order the produce in the cart and open the cart side bar programmatically.

## Phase 8: Redux selectors

Instead of creating a different selector function every time you use the
`useSelector` Hook for the same purpose (e.g., extracting the `produce` slice of
state), you can define a single function to be used anytime you need the same
information from the Redux store state.

For example, to get an array of all the produce in the Redux store state, you
can use the following selector function in the __src/store/produce.js__ file:

```js
// ./src/store/produce.js
export const getAllProduce = (state) => Object.values(state.produce);
```

Import this function into the `ProduceList` component and remove the
following lines:

```js
  const produce = useSelector(state => state.produce);
  
  const produceArr = Object.values(produce);
```

Replace them with this line:

```js
const produceArr = useSelector(getAllProduce);
```

This may seem like it's much more work than just defining the selector function
inside the component, but it will save you the time from having to refactor
all your code in all the components if you change the structure of your state.
Instead, you can just refactor the one file that holds all your Redux actions,
reducer, and selector functions.

You don't need to use selector functions. It's up to you whether or not you want
to use them.

Practice defining your own selector functions by refactoring the code to use
selector functions only.

Note: For the `Cart` component, try making a single selector function that will
extract the cart items with the cart and produce information (including the
`name`).

## Bonus Phase 1: Keep the order of produce as it is added to the cart

Reconfigure your cart reducer to maintain the order of the added produce to the
cart. For example, if you add produce with an id of 3 then produce with an id of
1 to the shopping cart, the produce with the id of 3 should come _before_ the
produce with the id of 1 in the shopping cart.

Hint: Store an object and an array in your cart slice of state. If you did the
selector functions correctly, you only need to update the Redux files. No need
to change any of the React components.

## Bonus Phase 2: Programmatically open the cart side bar

For an added bonus, try to configure the application to open the cart side bar
whenever there is a new item added to the cart.

[http://localhost:3000]: http://localhost:3000