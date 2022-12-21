# Pokedex Thunk, Phases 5-6

In Phases 5-6, you will create and dispatch thunk actions for `PokemonItems`
(Phase 5) and `ItemForm` (Phase 6).

**Note:** The thunk actions in Phases 5 and 6 should be created in the
__src/store/items.js__ file.

## Phase 5: `PokemonItems`

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