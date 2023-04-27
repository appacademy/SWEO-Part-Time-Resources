# Pokedex Backend

This is the backend for the Pokedex exercises.

## Getting started

1. Clone this repository
2. Install dependencies with `npm install`
3. Copy the **.env.example** file to a new file in the same location called
   **.env**
   * The server should be listening for requests on port `5000`
   * The SQLite3 database file should be **db/dev.db**
4. Run
   * `npm run db:migrate` - create the database and tables
   * `npm run db:seed:all` - insert seed data
   * `npm start` - start the backend server

## Images

Some of the API results have image URLs associated with them. You can get them
from this service. For example, if the service is hosted at
`http://localhost:5000`, then `http://localhost:5000/images/pokemon_snaps/5.svg`
will show the image for the Pokemon with the image URL
`/images/pokemon_snaps/5.svg`.

## The Pokemon API

This is all about listing and creating Pokemon.

### List Pokemon types: GET /api/pokemon/types

Successful response:

```json
[
  "fire",
  "electric",
  "normal",
  "ghost",
  "psychic",
  "water",
  "bug",
  "dragon",
  "grass",
  "fighting",
  "ice",
  "flying",
  "poison",
  "ground",
  "rock",
  "steel"
]
```

### List Pokemon: GET /api/pokemon

This route returns an array of Pokemon. Those that have been captured will
have their image returned. Otherwise a question mark image will be sent for the
ones that are not captured. The information on each Pokemon is not detailed.

Successful response looks like this with more entries:

```json
[
  {
    "id": 1,
    "number": 1,
    "name": "Bulbasaur",
    "imageUrl": "/images/pokemon_snaps/1.svg",
    "captured": true
  },
  // ...
]
```

### Pokemon details: GET /api/pokemon/:id

This route returns detailed information about the Pokemon with the matching id
in the route parameters.

Successful response looks like this for the given id:

```json
{
  "imageUrl": "/images/pokemon_snaps/1.svg",
  "id": 1,
  "number": 1,
  "attack": 49,
  "defense": 49,
  "name": "Bulbasaur",
  "type": "grass",
  "moves": [
    "tackle",
    "vine whip"
  ],
  "captured": true,
  "createdAt": "2020-12-16T01:17:24.119Z",
  "updatedAt": "2020-12-16T01:17:24.119Z"
}
```

### Create a new Pokemon: POST /api/pokemon

This route accepts information to create a Pokemon.

The payload that you must send looks like this:

```json
{
  "number": 11,
  "attack": 25,
  "defense": 55,
  "imageUrl": "/images/pokemon_snaps/11.svg",
  "name": "Metapod",
  "type": "bug",
  "moves": [
    "Tackle",
    "Harden"
  ]
}
```

Successful response is the newly created Pokemon returned, which looks like
this:

```json
{
  "id": 126,
  "number": 11,
  "attack": 25,
  "defense": 55,
  "imageUrl": "/images/pokemon_snaps/11.svg",
  "name": "Metapod",
  "type": "bug",
  "moves": [
    "Tackle",
    "Harden"
  ]
}
```

### Update a Pokemon: PUT /api/pokemon/:id

This route updates a Pokemon with the matching id in the route parameters.

The payload that you must send looks like this:

```json
{
  "id": 126,
  "number": 11,
  "attack": 25,
  "defense": 55,
  "imageUrl": "/images/pokemon_snaps/11.svg",
  "name": "Metapod",
  "type": "bug",
  "moves": [
    "Tackle",
    "Harden"
  ]
}
```

Successful response is the updated Pokemon returned and looks like this:

```json
{
  "id": 126,
  "number": 11,
  "attack": 25,
  "defense": 55,
  "imageUrl": "/images/pokemon_snaps/11.svg",
  "name": "Metapod",
  "type": "bug",
  "moves": [
    "Tackle",
    "Harden"
  ]
}
```

### Get a Pokemon's Items: GET /api/pokemon/:pokemonId/items

This route returns all the items as an array for the Pokemon matching the id in
the route parameter.

Successful response looks like this:

```json
[
  {
    "id": 1,
    "happiness": 86,
    "imageUrl": "/images/pokemon_potion.svg",
    "name": "Awesome Plastic Pizza",
    "price": 27,
    "pokemonId": 1
  },
  // ...
]
```

### Edit an Item: PUT /api/items/:id

This route updates the item matching the id in the route parameter.

The payload that you must send looks like this:

```json
{
  "id": 1,
  "happiness": 86,
  "imageUrl": "/images/pokemon_potion.svg",
  "name": "Awesome Plastic Pizza",
  "price": 27,
  "pokemonId": 1
}
```

Successful response is the updated item returned, which looks like this:

```json
{
  "id": 1,
  "happiness": 86,
  "imageUrl": "/images/pokemon_potion.svg",
  "name": "Awesome Plastic Pizza",
  "price": 27,
  "pokemonId": 1
}
```

### Create an Item: POST /api/pokemon/:pokemonId/items

This route accepts information to create a new item for the pokemon matching the
pokemon id in the route parameter.

The payload that you must send looks like this:

```json
{
  "happiness": 86,
  "name": "Awesome Plastic Pizza",
  "price": 27,
  "imageUrl": "/images/pokemon_potion.svg"
}
```

The imageUrl is optional; if no url is provided, the server will generate a
random image to associate with the item.

Successful response is the newly created item returned, which looks like this:

```json
{
  "id": 1,
  "happiness": 86,
  "imageUrl": "/images/pokemon_potion.svg",
  "name": "Awesome Plastic Pizza",
  "price": 27,
  "pokemonId": 1
}
```

### Delete an Item: DELETE /api/items/:id

This route deletes the item matching the id in the route parameter.

Successful response is the id of the deleted item, which looks like this:

```json
{
  "id": 1
}