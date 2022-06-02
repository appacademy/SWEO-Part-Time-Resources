# Discussion Questions for Server Review

## Guess the RESTful Endpoint

Suppose you are creating an API server for GameStop.

You want a frontend developer for the GameStop web store to be able to
do the following actions on the API server. What should the
endpoint be for the corresponding action?

- Get a list of all the games: `GET /games`
- Get details of a specific game by name: `GET /games/:name`
- Get all the games of a specific genre: `GET /genres/:genre/games`
- Create a game: `POST /games`
- Create a game based off of a genre: `POST /genres/:genre/games`
- Update a game identified by id: `PUT/PATCH /games/:gameId`
- Update a game identified by name: `PUT/PATCH /games/:gameName`
- Delete a game identified by id: `DELETE /games/:gameId`
- Delete a game identified by name: `DELETE /games/:name`
- Delete all games for a specific genre: `DELETE /genres/:genre/games`

## Postman

- What is Postman used for?
  - Test different server endpoints especially when we don't have a GUI
- Can Postman be used with any backend framework?
  - It can be used to make a request to any server regardless of the
    backend framework that the server is using. The components of a
    request and a response are universally understood by all servers.
