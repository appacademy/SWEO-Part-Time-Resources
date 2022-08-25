
# Pokedex Thunk

In today's project you will configure an existing application to use thunk
actions.

## Phase 0: Getting started

You'll need the backend for the Pokedex application. Take a moment to clone it
from
<https://github.com/appacademy/practice-for-week-15-pokedex-express-backend>.
Follow the instructions in the backend repo's README to set up the backend
server. Start the backend server by running `npm start`.

The API for the backend is also documented in that repository's README.

Once you have the backend up and running, clone the frontend starter from the
`Download` link at the bottom of this page.

Run `npm start` in the frontend starter repo to start your frontend development
server.

### Explore the reference application

The current application comprises the following components:

* `App`: Does the browser routing
* `PokemonBrowser`: The browser that draws the list on the left and has a route
  to the `PokemonDetail` when the route matches "/pokemon/:pokemonId"
* `PokemonDetail`: Makes a fetch to the API on mount and update to load the
  details of the selected Pokemon
* `Fab`: The "+" button that prompts the `CreatePokemonForm` to show
* `CreatePokemonForm`: Create Pokemon form rendered on `PokemonBrowser`
* `EditPokemonForm`: Edit Pokemon form rendered on the `PokemonDetail` component
  only if the Pokemon is captured
* `PokemonItems`: Renders the list of items on the `PokemonDetail` component
* `ItemForm`: Item form rendered on the `PokemonDetail` component when
  editing an item
* `ErrorMessage`: Displays an error message for a labeled form input

Take time to review the components to see how the component tree is structured
(i.e., the parent-child relationships and where each component is being used).

### Proxy

In this project, you will run two servers using these addresses:

* `http://localhost:3000` for your frontend
* `http://localhost:5000` for your backend

In the `package.json` file on your frontend, notice the
`"proxy": "http://localhost:5000"`. This line tells the development server to
proxy any unknown requests to your backend server port. So **you must always
ensure that the `PORT` variable in your backend __.env__ file has the same
port number as the proxy setting in your frontend __package.json__**. Remember:
this approach only works in development using `npm start`.

You will make API calls from your frontend to your backend server. When making
API calls to your backend, don't write out your base URL for every call.
Instead, write your fetch calls like this: `fetch('/api/pokemon')`.

## Phase 1: Dispatch thunk actions in `PokemonBrowser`

As you're connecting your application's components, you'll most likely hit bugs
and break your application. While you're connecting each component, make sure
to test that your connected code is working before moving on to connect the
next component.

There is a thunk action creator made for you already in the
__src/store/pokemon.js__ file called `getPokemon`. The thunk action it returns
fetches all the Pokemon as a list from the `GET /api/pokemon` backend API route.
Then it dispatches the action returned from the `load` action creator in the
same file. The reducer normalizes the Pokemon data.

Dispatch the thunk action returned from the `getPokemon` thunk action creator
after the `PokemonBrowser` component first renders.

If done correctly, you should see the list of all the Pokemon in the side of the
browser.