# Bonus Practice: Express Route Handlers

**This is additional practice for today's material which you are not expected to
complete today. Complete as much of this practice as you can. You can use any
problems you didn't complete as optional additional practice for the
assessment.**

Just like in the main Express Route Handlers practice, you will create endpoints
in the Express server.

## API Documentation

Using the following API documentation, create Express route handlers in the
__app.js__ file. Use Postman to test each route as you write it.

The actions that need to be executed in the endpoints are all exported from the
__data.js__ file. In a route handler specific to each endpoint, you should send
a JSON response of the serialized data returned from the referenced function.
For example, to return a JSON array of all artists in the server data for a
request to `GET /artists`, you should use the data from `getAllArtists()`
function exported from the __data.js__ file.

### Get the latest artist added

Request components:

- Method: GET
- URL: /artists/latest
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
    - Content-Type: application/json
- Body: information about a specific artist and their albums
  (returned from `getLatestArtist()` function exported from
  __data.js__)

  ```json
  {
    "latest": {
      "artistId": 1,
      "name": "Red Hot Chili Peppers"
    }
  }
  ```

### Get all albums of the latest artist

Request components:

- Method: GET
- URL: /artists/latest/albums
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
    - Content-Type: application/json
- Body: information about all the albums for the latest artist added
  (returned from `getAlbumsForLatestArtist()` function exported from
  __data.js__)

  ```json
  {
    "latest": {
      "albums": [
        {
          "albumId": 1,
          "name": "Stadium Arcadium",
          "artistId": 1
        }
      ]
    }
  }
  ```