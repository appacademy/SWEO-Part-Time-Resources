# Grocery Store, Phases 3-4

In Phases 3-4, you will implement the functionality to add (Phase 3) and remove
(Phase 4) produce to/from the cart.

## Phase 3: Add produce to the cart

When the "Checkout" button in the navigation bar is clicked, the side bar
containing the shopping cart should open. Let's try adding produce to the
shopping cart.

The shopping cart is a separate entity from the produce list. The shopping cart
needs to know which produce and how much of it was added to the cart. You need a
cart slice of state that will hold an object with produce id's as its keys and
objects with a `count` property as its values.

### Cart reducer

Create a __cart.js__ file in __src/store__ and define and export a `cartReducer`
from this file. Add the `cart` slice of state with this as the reducer in the
store file (__src/store/index.js__). Use the `produceReducer` as an example if
you get stuck. Test the reducer in the same way as the way you tested the
`produceReducer`.

The store state should now look something like this:

```js
{
  cart: {},
  produce: {
    // ...
  }
}
```

### Add to cart action

Create the necessary Redux entities for adding produce to the cart.

The Redux store state should look something like this when a produce with an id
of 3 is added.

```js
{
  cart: {
    3: {
      id: 3,
      count: 1
    }
  },
  produce: {
    // ...
  }
}
```

Define an action creator for adding an item with a specified id to the cart.
The action creator should have the produce's `id` as the parameter and should
return it as a payload key.

In the reducer, add a case for the action type of adding an item with the id in
the action payload. The state returned should be a new object that includes all
the keys of the previous state plus with the desired item id as a new key. The
value of that key should be an object with properties of `id` and `count` (set
to 1).

Hint: To create a new object that includes all the keys of another object with
additional keys:

```js
const newObj = {
  ...oldObj,
  newKey: { property: "value" }
};
```

Test the action creator in the same way that you tested the `populateProduce`
action.

### Connect the plus button to the add-to-cart action

In the `ProduceList` component, all the produce in the Redux store is mapped to
an array of `ProduceDetails` components. The `ProduceDetails` component has a
button element with a `className` of "plus-button". When that button is clicked,
dispatch the add-to-cart action with the id of the produce in that component.

Test this out by navigating to [http://localhost:3000] and clicking the plus
button on any of the produce in the list. Check to see if the new Redux store
state has that produce in the cart slice of state.

Note: If you open the cart by clicking the "Checkout" button right now, you will
still not see the produce that you have added. That's because you haven't
connected the cart to the cart slice of state yet.

### Display the cart items

Display the produce in the cart slice of state in the cart side bar.

The `Cart` component renders the list of items in the cart side bar. Set the
`cart` variable to the extracted cart slice of state in the Redux store state
(take a look at the `ProduceList` component to refresh yourself on how to
access information from the Redux store).

If you refresh [http://localhost:3000] and add a produce to the cart, you
should see something in the cart now!

There is something in the cart, but the item can't be identified. The name of
the produce should be displayed next to the count. The `name` of the produce
is stored in the `produce` slice of state, but the `Cart` component only has the
`cart` slice of state. Extract the `produce` from the state and set it to the
`produce` variable.

The `cartItems` array should return an array of produce items with information
combined from both the cart and the produce slices of state.

```js
  const cartItems = Object.values(cart)
    .map(item => {
      return {
        ...item,
        ...produce[item.id]
      };
    });
```

Now if you refresh the page, you should see the cart items with names. Hooray!
We're almost done.

This is also a good time to commit. Every time you finish a phase, or a chunk of
working code, don't forget to commit!

## Phase 4: Remove produce from the cart

Add the functionality to remove produce from the cart when the "Remove" button
is clicked.

[http://localhost:3000]: http://localhost:3000