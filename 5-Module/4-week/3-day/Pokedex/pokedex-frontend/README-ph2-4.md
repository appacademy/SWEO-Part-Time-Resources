# Pokedex Thunk, Phases 2-4

In Phases 2-4, you will create and dispatch thunk actions for `PokemonDetail`
(Phase 2), `CreatePokemonForm` (Phase 3), and `EditPokemonForm` (Phase 4).

## Phase 2: Create and dispatch a thunk action for `PokemonDetail`

Create a thunk action creator for fetching a single Pokemon's details based on
their `id` by hitting the `GET /api/pokemon/:id` backend API route. Using the
data returned from that, dispatch the return of the `addOnePokemon` action
creator.

Dispatch the thunk action you just created whenever the `pokemonId` in the
`PokemonDetail` component changes.

## Phase 3: `CreatePokemonForm`

Create a thunk action creator for creating a Pokemon in the `CreatePokemonForm`.
The thunk action creator should hit the `POST /api/pokemon` backend API route.
Format the fetch request to have a `Content-Type` header of `application/json`
and the correct request body using the submitted form information.

After the response comes back, add the newly created Pokemon to the Redux store
by dispatching the appropriate regular POJO action.

Dispatch the thunk action you just created on the submission of the
`CreatePokemonForm`.

## Phase 4: `EditPokemonForm`

Create a thunk action creator for editing a Pokemon in the `EditPokemonForm`.
Check out the API docs for which route to hit and how to format the URL path and
the request body in the fetch request. After the response comes back, add the
updated information Pokemon to the Redux store by dispatching the
`addOnePokemon` action.

Dispatch the thunk action you just created on the submission of the
`EditPokemonForm`.