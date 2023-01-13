### Get all the artists

Request components:

- Method: GET
- URL: /artists
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
    - Content-Type: application/json
- Body: information about all the artists
  ```json
  [
    {
      "artistId": 1,
      "name": "Red Hot Chili Peppers"
    }
  ]
  ```

Test this in Postman or by using `fetch` in the browser.

### Get a specific artist's details based on artistId

Request components:

- Method: GET
- URL: /artists/:artistId
- Headers: FALSE
- Body: FALSE

Response components:

- Status code: 200
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
  "artistId": True,
  "name": true,
  "albums": [
    {
      "albumId": true,
      "artistId": true,
      "name": true
  }
  ]
}

### Add an artist

Request components:

- Method: POST
- URL: /artists
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
  "name": true
}

Response components:

- Status code: 201
- Headers: {
  "Content-Type": "application/json"
}
- Body:{
  "artistId": true,
  "name": true
}

### Edit a specified artist by artistId

Request components:

- Method: PUT or PATCH
- URL: /artists/:artistId
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
  "name": true
}

Response components:

- Status code: 200
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
  "name": true,
  "artistId": true,
  "updatedAt": true
}

### Delete a specified artist by artistId

Request components:

- Method: DELETE
- URL: /artists/:artistId
- Headers: FALSE
- Body: FALSE

Response components:

- Status code: 200
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
  "message": true
}

let options = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "New Album!",
    year: 1900
  })
}


fetch('/artists/1/paintings', options)
.then(res => {
  console.log(res.headers.get("Content-Type"))
  return res.json()
  }).then(resBody => console.log(resBody))

fetch("/artists")
  .then(res => res.json())
  .then(resBody => console.log(resBody))
fetch('/artists', options)
.then(async res => {

  console.log(res.headers.get("Content-Type"))
  let resBody = await res.json()
  console.log(resBody)
})



### Get all albums of a specific artist based on artistId

Request components:

- Method: GET
- URL: /artists/:artistId/albums
- Headers: FALSE
- Body: FALSE

Response components:

- Status code: 200
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
  "name": true,
  "albumId": true,
  "artistId: true
}

### Get a specific album's details based on albumId

Request components:

- Method: GET
- URL: /albums/:albumId
- Headers: FALSE
- Body: FALSE

Response components:

- Status code: 200
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
  "name": true,
  "albumId": true,
  "artistId": true,
  "artist": {
    "name": true,
    "artistId": true
  },
  "songs":[{
    "name": true,
    "lyrics": true,
    "songId": true,
    "albumId": true
    "trackNumber: true,
    "createdAt": true,
    "updatedAt: true
  }]
}

### Add an album to a specific artist based on artistId

Request components:

- Method: "POST"
- URL: /artist/:artistId/albums
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
  "name": true
}

Response components:

- Status code: 201
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
  "name": true,
  "artistId: true,
  "albumId": true
}

### Edit a specified album by albumId

Request components:

- Method: PUT or PATCH
- URL: /albums/:albumId
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
  "name": true
}

Response components:

- Status code: 200
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
  "name": true,
  "albumId": true,
  "artistId: true,
  "updatedAt": true
}

### Delete a specified album by albumId

Request components:

- Method: DELETE
- URL: /albums/:albumId
- Headers: FALSE
- Body: FALSE

Response components:

- Status code: 200
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
"message": true
}

### Get all songs of a specific artist based on artistId

Request components:

- Method: GET
- URL: /artists/:artistId/songs
- Headers: FALSE
- Body: FALSE

Response components:

- Status code: 200
- Headers: {
  "Content-Type": "application/json"
}
- Body: [{
  "name": true,
  "lyrics: true,
  "trackNumber": true,
  "songId": true,
  "albumbId": true
}]


### Get all songs of a specific album based on albumId

Request components:

- Method: GET
- URL: /albums/:albumId/songs
- Headers: FALSE
- Body: FALSE

Response components:

- Status code: 200
- Headers: {
  "Content-Type": "application/json"
}
- Body: [{
  "name": true,
  "lyrics: true,
  "trackNumber": true,
  "songId": true,
  "albumbId": true
}]

### Get all songs of a specified trackNumber

**Note: This one is meant to be a little more challenging, but should still
follow a similar pattern to those above.**

Can you see a pattern between this endpoint and the two previous endpoints?

Hint: Think of how you solved getting all songs by a specific artist and by a
specific album. What is resource that you wanted to get back for those
endpoints? What information was that resource constrained by for each of those
endpoints? Now think about getting all songs by a specific `trackNumber`.
What is the resource you want to get? What information is the resource
constrained by for this endpoint?

Request components:

- Method: GET
- URL: /trackNumbers/:trackNumber/songs
- Headers: FALSE
- Body: FALSE

Response components:

- Status code: 200
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
  "albumId": true
  "lyrics": true,
  "name": true,
  "songId": true,
  "trackNumber": true
}

### Get a specific song's details based on songId

- Method: GET
- URL: /songs/:songId
- Headers: FALSE
- Body: FALSE

Response components:

- Status code: 200
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
  "album": {
    "albumId": true,
    "artistId": true,
    "name": true
  },
  "albumId": true,
  "artist": {
    "artistId": true,
    "name": true
  },
  "lyrics": true,
  "name": true,
  "songId": true,
  "trackNumber": true
}
### Add a song to a specific album based on albumId

Request components:

- Method: POST
- URL: albums/:albumId/songs
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
  "name": true,
  "lyrics": true,
  "trackNumber": true
}

Response components:

- Status code: 201
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
    "name": true,
  "lyrics": true,
  "trackNumber": true,
  "songId": true,
  "albumId" true
}

### Edit a specified song by songId

Request components:

- Method: PUT or PATCH
- URL: /songs/:songId
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
  "name": true,
  "lyrics": true,
  "trackNumber": true
}

Response components:

- Status code: 200
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
    "name": true,
  "lyrics": true,
  "trackNumber": true,
  "songId": true,
  "albumId" true,
  "updatedAt": true
}

### Delete a specified song by songId

Request components:

- Method: DELETE
- URL: /songs/:songId
- Headers: FALSE
- Body: FALSE

Response components:

- Status code: 200
- Headers: {
  "Content-Type": "application/json"
}
- Body: {
"message": true
}
