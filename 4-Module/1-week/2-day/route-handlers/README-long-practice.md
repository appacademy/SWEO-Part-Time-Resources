# Additional Long Practice: Express Route Handlers

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

### Get a specific artist's details based on artistId

Request components:

- Method: GET
- URL: /artists/:artistId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
    - Content-Type: application/json
- Body: information about a specific artist and their albums
  (returned from `getArtistByArtistId(artistId)` function exported from
  __data.js__)

  ```json
  {
    "artistId": 1,
    "name": "Red Hot Chili Peppers",
    "albums": [
      {
        "albumId": 1,
        "name": "Stadium Arcadium",
        "artistId": 1
      }
    ]
  }
  ```

### Edit a specified artist by artistId

Request components:

- Method: PUT or PATCH
- URL: /artists/:artistId
- Headers:
    - Content-Type: application/json
- Body: information about the artist to be edited

  ```json
  {
    "name": "Led Zeppelin"
  }
  ```

Response components:

- Status Code: 200
- Headers:
    - Content-Type: application/json
- Body: information about the edited artist
  (returned from `editArtistByArtistId(artistId, data)` function exported from
  __data.js__)

  ```json
  {
    "artistId": 1,
    "name": "Led Zeppelin"
  }
  ```

### Delete a specified artist by artistId

Request components:

- Method: DELETE
- URL: /artists/:artistId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
    - Content-Type: application/json
- Body: message of success
  (action of `deleteArtistByArtistId(artistId)` function exported from
  __data.js__ should be executed)

  ```json
  {
    "message": "Successfully deleted"
  }
  ```

### Get all albums of a specific artist based on artistId

Request components:

- Method: GET
- URL: /artists/:artistId/albums
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
    - Content-Type: application/json
- Body: information about all the albums of a specific artist
  (returned from `getAlbumsByArtistId(artistId)` function exported from
  __data.js__)

  ```json
  [
    {
      "albumId": 1,
      "name": "Stadium Arcadium",
      "artistId": 1
    }
  ]
  ```

### Get a specific album's details based on albumId

Request components:

- Method: GET
- URL: /albums/:albumId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
    - Content-Type: application/json
- Body: information about a specific album and their songs
  (returned from `getAlbumByAlbumId(albumId)` function exported from
  __data.js__)

  ```json
  {
    "albumId": 1,
    "name": "Stadium Arcadium",
    "artistId": 1,
    "artist": {
      "artistId": 1,
      "name": "Red Hot Chili Peppers"
    },
    "songs": [
      {
        "songId": 1,
        "name": "Dani California",
        "trackNumber": 1,
        "albumId": 1,
        "lyrics": "..."
      }
    ]
  }
  ```

### Add an album to a specific artist based on artistId

Request components:

- Method: POST
- URL: /artist/:artistId/albums
- Headers:
    - Content-Type: application/json
- Body: information about the album to be created

  ```json
  {
    "name": "Stadium Arcadium"
  }
  ```

Response components:

- Status Code: 201
- Headers:
    - Content-Type: application/json
- Body: information about the newly created album
  (returned from `addAlbumByArtistId(artistId, data)` function exported from
  __data.js__)

  ```json
  {
    "albumId": 2,
    "name": "Stadium Arcadium",
    "artistId": 1
  }
  ```

### Edit a specified album by albumId

Request components:

- Method: PUT or PATCH
- URL: /albums/:albumId
- Headers:
    - Content-Type: application/json
- Body: information about the album to be edited

  ```json
  {
    "name": "Stadium Arcadium"
  }
  ```

Response components:

- Status Code: 200
- Headers:
    - Content-Type: application/json
- Body: information about the edited album
  (returned from `editAlbumByAlbumId(albumId, data)` function exported from
  __data.js__)

  ```json
  {
    "albumId": 1,
    "name": "Stadium Arcadium",
    "artistId": 1
  }
  ```

### Delete a specified album by albumId

Request components:

- Method: DELETE
- URL: /albums/:albumId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
    - Content-Type: application/json
- Body: success message
  (action of `deleteAlbumByAlbumId(albumId)` function exported from
  __data.js__ should be executed)

  ```json
  {
    "message": "Successfully deleted"
  }
  ```

### Get all albums with names filtered by first letter

Request components:

<details>
    <summary>Hint:</summary>
    Do you remember how to grab the query parameters in Express? Refer to Request and Response Objects readings if you need a refresher.
</details>

- Method: GET
- URL: /albums?startsWith={letter}
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
    - Content-Type: application/json
- Body: information about all the albums that have names starting with the
  letter in the query parameter (returned from `getFilteredAlbums(startsWith)`
  function exported from __data.js__)

  ```json
  [
    {
      "albumId": 1,
      "name": "Stadium Arcadium",
      "artistId": 1
    }
  ]
  ```

### Get all songs of a specific artist based on artistId

Request components:

- Method: GET
- URL: /artists/:artistId/songs
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
    - Content-Type: application/json
- Body: information about all the songs of a specific artist
  (returned from `getSongsByArtistId(artistId)` function exported from
  __data.js__)

  ```json
  [
    {
      "songs": 1,
      "name": "Dani California",
      "albumId": 1
    }
  ]
  ```

### Get all songs of a specific album based on albumId

Request components:

- Method: GET
- URL: /albums/:albumId/songs
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
    - Content-Type: application/json
- Body: information about all the songs of a specific album
  (returned from `getSongsByAlbumId(albumId)` function exported from
  __data.js__)

  ```json
  [
    {
      "songs": 1,
      "name": "Dani California",
      "albumId": 1
    }
  ]
  ```

### Get a specific song's details based on songId

Request components:

- Method: GET
- URL: /songs/:songId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
    - Content-Type: application/json
- Body: information about a specific song
  (returned from `getSongBySongId(songId)` function exported from
  __data.js__)

  ```json
  {
    "songId": 1,
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "...",
    "albumId": 1,
    "artist": {
      "artistId": 1,
      "name": "Red Hot Chili Peppers"
    },
    "album": {
      "albumId": 1,
      "name": "Stadium Arcadium",
      "artistId": 1
    }
  }
  ```

### Add a song to a specific album based on albumId

Request components:

- Method: POST
- URL: /albums/:albumId/songs
- Headers:
    - Content-Type: application/json
- Body: information about the song to be created

  ```json
  {
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "...",
    "albumId": 1
  }
  ```

Response components:

- Status Code: 201
- Headers:
    - Content-Type: application/json
- Body: information about the newly created song
  (returned from `addSongByAlbumId(albumId, data)` function exported from
  __data.js__)

  ```json
  {
    "songId": 1,
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "...",
    "albumId": 1
  }
  ```

### Edit a specified song by songId

Request components:

- Method: PUT or PATCH
- URL: /songs/:songId
- Headers:
    - Content-Type: application/json
- Body: information about the song to be edited

  ```json
  {
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "..."
  }
  ```

Response components:

- Status Code: 200
- Headers:
    - Content-Type: application/json
- Body: information about the edited song
  (returned from `editSongBySongId(songId, data)` function exported from
  __data.js__)

  ```json
  {
    "songId": 1,
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "...",
    "albumId": 1
  }
  ```

### Delete a specified song by songId

Request components:

- Method: DELETE
- URL: /songs/:songId
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
    - Content-Type: application/json
- Body: success message
  (action of `deleteSongBySongId(songId)` function exported from
  __data.js__ should be executed)

  ```json
  {
    "message": "Successfully deleted"
  }
  ```