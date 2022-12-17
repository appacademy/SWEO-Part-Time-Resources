# Grocery Store, Phases 5-7

In Phases 5-7, you will implement the functionality to update the number of a
produce item in the cart (Phase 5), purchase produce (Phase 6), and like/unlike
a produce item (Phase 7).

## Phase 5: Update the number of a produce item in the cart

When the plus button next to a cart item is clicked, increment the count of the
cart item by 1. When the minus button next to a cart item is clicked,
decrement the count of the cart item by 1.

When the number in the input field next to a cart item is changed and clicked
off of, it should update the count for that cart item in the Redux store state.

If clicking the minus button or changing the number in the input field ever
updates to a count lower than 1, remove the cart item.

When the plus button next to a produce in the produce list is clicked, the item
should be added to the cart if it's not in the cart. If it is already in the
cart, increment the count of the respective cart item by 1.

## Phase 6: Purchase produce

When the "Purchase" button is clicked in the cart, it should empty the cart.

## Phase 7: Like/Unlike a produce item

Clicking the "Like" button next to a produce in the produce list should toggle
the `liked` boolean on the produce in the Redux store `produce` slice of state
between `true` and `false`.

[http://localhost:3000]: http://localhost:3000