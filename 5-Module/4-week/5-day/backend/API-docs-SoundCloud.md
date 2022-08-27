# `<name of application here>`

## Database Schema Design

`<insert database schema design here>`

## API Documentation

## FEATURE 0: USER AUTHORIXATION

### All endpoints that require authentication

All endpoints that require a current user to be logged in.

* Request: endpoints that require authentication
* Error Response: Require authentication
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Authentication required",
      "statusCode": 401
    }
    ```

### All endpoints that require proper authorization

All endpoints that require authentication and the current user does not have the
correct role(s) or permission(s).

* Request: endpoints that require proper authorization
* Error Response: Require proper authorization
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Forbidden",
      "statusCode": 403
    }
    ```

### Get the Current User

Returns the information about the current user that is logged in.

* Require Authentication: true
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith"
    }
    ```

### Log In a User

Logs in a current user with valid credentials and returns the current user's
information.

* Require Authentication: false
* Request
  * Method: ?
  * URL: ?
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "email": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith",
      "token": ""
    }
    ```

* Error Response: Invalid credentials
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Invalid credentials",
      "statusCode": 401
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "email": "Email is required",
        "password": "Password is required"
      }
    }
    ```

### Sign Up a User

Creates a new user, logs them in as the current user, and returns the current
user's information.

* Require Authentication: false
* Request
  * Method: ?
  * URL: ?
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "firstName": "John",
      "lastName": "Smith",
      "username": "JohnSmith",
      "email": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "username": "JohnSmith",
      "email": "john.smith@gmail.com",
      "token": ""
    }
    ```

* Error response: User already exists with the specified email
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "statusCode": 403,
      "errors": {
        "email": "User with that email already exists"
      }
    }
    ```

* Error response: User already exists with the specified username
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "statusCode": 403,
      "errors": {
        "username": "User with that username already exists"
      }
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "email": "Invalid email",
        "username": "Username is required",
        "firstName": "First Name is required",
        "lastName": "Last Name is required"
      }
    }
    ```

## FEATURE 1: SONGS FEATURE

### Get all Songs

Returns all the songs.

* Require Authentication: false
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Songs":[
        {
          "id": 1,
          "userId": 1,
          "albumId": 1,
          "title": "Yesterday",
          "description": "A song about the past.",
          "url": "audio url",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "previewImage": "image url"
        }
      ]
    }
    ```

### Get all Songs created by the Current User

Returns all the songs created by the current user.

* Require Authentication: true
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Songs": [
        {
          "id": 1,
          "userId": 1,
          "albumId": 1,
          "title": "Yesterday",
          "description": "A song about the past.",
          "url": "audio url",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "previewImage": "image url"
        }
      ]
    }
    ```

### Get details of a Song from an id

Returns the details of a song specified by its id.

* Require Authentication: false
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "albumId": 1,
      "title": "Yesterday",
      "description": "A song about the past.",
      "url": "audio url",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
      "previewImage": "image url",
      "Artist": {
        "id": 1,
        "username": "JohnSmith",
        "previewImage": "image url"
      },
      "Album": {
        "id": 1,
        "title": "Time",
        "previewImage": "image url"
      }
    }
    ```

* Error response: Couldn't find a Song with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Song couldn't be found",
      "statusCode": 404
    }
    ```

### Create a Song for an Album based on the Album's id

Creates and returns a new song.

* Require Authentication: true
* Require proper authorization: Album must belong to the current user
* Request
  * Method: ?
  * URL: ?
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "title": "Yesterday",
      "description": "A song about the past.",
      "url": "audio url",
      "imageUrl": "image url"
    }
    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "albumId": 1,
      "title": "Yesterday",
      "description": "A song about the past.",
      "url": "audio url",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
      "previewImage": "image url"
    }
    ```

* Error Response: Body validation error
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {
        "title": "Song title is required",
        "url": "Audio is required"
      }
    }
    ```

* Error response: Couldn't find an Album with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Album couldn't be found",
      "statusCode": 404
    }
    ```

### Edit a Song

Updates and returns an existing song.

* Require Authentication: true
* Require proper authorization: Song must belong to the current user
* Request
  * Method: ?
  * URL: ?
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "title": "Yesterday",
      "description": "A song about the past.",
      "url": "audio url",
      "imageUrl": "image url"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "albumId": 1,
      "title": "Yesterday",
      "description": "A song about the past.",
      "url": "audio url",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-20 20:00:00",
      "previewImage": "image url"
    }
    ```

* Error Response: Body validation error
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {
        "title": "Song title is required",
        "url": "Audio is required"
      }
    }
    ```

* Error response: Couldn't find a Song with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Song couldn't be found",
      "statusCode": 404
    }
    ```

### Delete a Song

Deletes an existing song.

* Require Authentication: true
* Require proper authorization: Song must belong to the current user
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted",
      "statusCode": 200
    }
    ```

* Error response: Couldn't find a Song with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Song couldn't be found",
      "statusCode": 404
    }
    ```

## FEATURE 2: ALBUMS FEATURE

### Get all Albums

Returns all the Albums.

* Require Authentication: false
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Albums": [
        {
          "id": 1,
          "userId": 1,
          "title": "Time",
          "description": "An album about time.",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "previewImage": "image url"
        }
      ]
    }
    ```

### Get all Albums created by the Current User

Returns all the Albums created by the current user.

* Require Authentication: true
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Albums":[
        {
          "id": 1,
          "userId": 1,
          "title": "Time",
          "description": "An album about time.",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "previewImage": "image url"
        }
      ]
    }
    ```

### Get details of an Album from an id

Returns the details of an album specified by its id.

* Require Authentication: false
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "title": "Time",
      "description": "An album about time.",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
      "previewImage": "image url",
      "Artist": {
        "id": 1,
        "username": "JohnSmith",
        "previewImage": "image url"
      },
      "Songs": [
        {
          "id": 1,
          "userId": 1,
          "albumId": 1,
          "title": "Yesterday",
          "description": "A song about the past.",
          "url": "audio url",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "previewImage": "image url"
        }
      ]
    }
    ```

* Error response: Couldn't find an Album with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Album couldn't be found",
      "statusCode": 404
    }
    ```

### Create an Album

Creates and returns a new album.

* Require Authentication: true
* Request
  * Method: ?
  * URL: ?
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "title": "Time",
      "description": "An album about time.",
      "imageUrl": "image url"
    }
    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "title": "Time",
      "description": "An album about time.",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
      "previewImage": "image url"
    }
    ```

* Error Response: Body validation error
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {
        "title": "Album title is required"
      }
    }
    ```

### Edit an Album

Updates and returns an existing album.

* Require Authentication: true
* Require proper authorization: Album must belong to the current user
* Request
  * Method: ?
  * URL: ?
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "title": "Time",
      "description": "An album about time.",
      "imageUrl": "image url"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "title": "Time",
      "description": "An album about time.",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-20 20:00:00",
      "previewImage": "image url"
    }
    ```

* Error Response: Body validation error
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {
        "title": "Album title is required"
      }
    }
    ```

* Error response: Couldn't find an Album with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Album couldn't be found",
      "statusCode": 404
    }
    ```

### Delete an Album

Deletes an existing album.

* Require Authentication: true
* Require proper authorization: Album must belong to the current user
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted",
      "statusCode": 200
    }
    ```

* Error response: Couldn't find an Album with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Album couldn't be found",
      "statusCode": 404
    }
    ```
## FEATURE 3: COMMENTS FEATURE

### Get all Comments by a Song's id

Returns all the comments that belong to a song specified by id.

* Require Authentication: false
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Comments": [
        {
          "id": 1,
          "userId": 1,
          "songId": 1,
          "body": "I love this song!",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36" ,
          "User": {
            "id": 1,
            "username": "JohnSmith"
          },
        }
      ]
    }
    ```

* Error response: Couldn't find a Song with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Song couldn't be found",
      "statusCode": 404
    }
    ```

### Create a Comment for a Song based on the Song's id

Create and return a new comment for a song specified by id.

* Require Authentication: true
* Request
  * Method: ?
  * URL: ?
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "body": "I love this song!"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "songId": 1,
      "body": "I love this song!",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36" ,
    }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "body": "Comment body text is required"
      }
    }
    ```

* Error response: Couldn't find a Song with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Song couldn't be found",
      "statusCode": 404
    }
    ```

### Edit a Comment

Update and return an existing comment.

* Require Authentication: true
* Require proper authorization: Comment must belong to the current user
* Request
  * Method: ?
  * URL: ?
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "body": "I love this song!"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "songId": 1,
      "body": "I love this song!",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-20 20:00:00"
    }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "body": "Comment body text is required",
      }
    }
    ```

* Error response: Couldn't find a Comment with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Comment couldn't be found",
      "statusCode": 404
    }
    ```

### Delete a Comment

Delete an existing comment.

* Require Authentication: true
* Require proper authorization: Comment must belong to the current user
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted",
      "statusCode": 200
    }
    ```

* Error response: Couldn't find a Comment with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Comment couldn't be found",
      "statusCode": 404
    }
    ```

## FEATURE 4: ARTISTS FEATURE

### Get details of an Artist from an id

Returns the details of an artist specified by their id.

* Require Authentication: false
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "username": "JohnSmith",
      "totalSongs": 10,
      "totalAlbums": 2,
      "previewImage": "image url"
    }
    ```

* Error response: Couldn't find an Artists with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Artist couldn't be found",
      "statusCode": 404
    }
    ```

### Get all Songs of an Artist from an id

Returns all the songs created by the specified artist.

* Require Authentication: false
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Songs": [
        {
          "id": 1,
          "userId": 1,
          "albumId": 1,
          "title": "Yesterday",
          "description": "A song about the past.",
          "url": "audio url",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "previewImage": "image url"
        }
      ]
    }
    ```

* Error response: Couldn't find an Artist with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Artist couldn't be found",
      "statusCode": 404
    }
    ```

### Get all Albums of an Artist from an id

Returns all the albums created by the specified artist.

* Require Authentication: false
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Albums": [
        {
          "id": 1,
          "userId": 1,
          "title": "Time",
          "description": "An album about time.",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "previewImage": "image url"
        }
      ]
    }
    ```

* Error response: Couldn't find an Artist with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Artist couldn't be found",
      "statusCode": 404
    }
    ```

## FEATURE 5: PLAYLISTS FEATURE

### Get all Playlists of an Artist from an id

Returns all the playlists created by the specified artist.

* Require Authentication: false
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Playlists": [
        {
          "id": 1,
          "userId": 1,
          "name": "Current Favorites",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "previewImage": "image url"
        }
      ]
    }
    ```

* Error response: Couldn't find an Artist with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Artist couldn't be found",
      "statusCode": 404
    }
    ```

### Create a Playlist

Creates and returns a new playlist.

* Require Authentication: true
* Request
  * Method: ?
  * URL: ?
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "name": "Current Favorites",
      "imageUrl": "image url"
    }
    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "name": "Current Favorites",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
      "previewImage": "image url"
    }
    ```

* Error Response: Body validation error
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {
        "name": "Playlist name is required"
      }
    }
    ```

### Add a Song to a Playlist based on the Playlists's id

Add a song to a playlist specified by the playlist's id.

* Require Authentication: true
* Require proper authorization: Playlist must belong to the current user
* Request
  * Method: ?
  * URL: ?
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "songId": 1
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "playlistId": 1,
      "songId": 1
    }
    ```

* Error response: Couldn't find a Playlist with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Playlist couldn't be found",
      "statusCode": 404
    }
    ```

* Error response: Couldn't find a Song with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Song couldn't be found",
      "statusCode": 404
    }
    ```

### Get details of a Playlist from an id

Returns the details of a playlist specified by its id.

* Require Authentication: false
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "name": "Current Favorites",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
      "previewImage": "image url",
      "Songs": [
        {
          "id": 1,
          "userId": 1,
          "albumId": 1,
          "title": "Yesterday",
          "description": "A song about the past.",
          "url": "audio url",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "previewImage": "image url"
        }
      ]
    }
    ```

* Error response: Couldn't find a Playlist with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Playlist couldn't be found",
      "statusCode": 404
    }
    ```

### Edit a Playlist

Updates and returns an existing playlist.

* Require Authentication: true
* Require proper authorization: Playlist must belong to the current user
* Request
  * Method: ?
  * URL: ?
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "name": "Current Favorites",
      "imageUrl": "image url"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "name": "Current Favorites",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-20 20:00:00",
      "previewImage": "image url"
    }
    ```

* Error Response: Body validation error
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {
        "name": "Playlist name is required"
      }
    }
    ```

* Error response: Couldn't find a Playlist with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Playlist couldn't be found",
      "statusCode": 404
    }
    ```

### Delete a Playlist

Deletes an existing playlist.

* Require Authentication: true
* Require proper authorization: Playlist must belong to the current user
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted",
      "statusCode": 200
    }
    ```

* Error response: Couldn't find a Playlist with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Playlist couldn't be found",
      "statusCode": 404
    }
    ```

### Get all Playlists created by the Current User

Returns all the playlists created by the current user.

* Require Authentication: true
* Request
  * Method: ?
  * URL: ?
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Playlists":[
        {
          "id": 1,
          "userId": 1,
          "name": "Current Favorites",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "previewImage": "image url"
        }
      ]
    }
    ```

### Add Query Filters to Get All Songs

Return songs filtered by query parameters.

* Require Authentication: false
* Request
  * Method: ?
  * URL: ?
  * Query Parameters
    * page: integer, minimum: 0, maximum: 10, default: 0
    * size: integer, minimum: 0, maximum: 20, default: 20
    * title: string, optional
    * createdAt: string, optional
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Songs":[
        {
          "id": 1,
          "userId": 1,
          "albumId": 1,
          "title": "Yesterday",
          "description": "A song about the past.",
          "url": "audio url",
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "previewImage": "image url"
        }
      ],
      "page": 2,
      "size": 25
    }
    ```

* Error Response: Query parameter validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {
        "page": "Page must be greater than or equal to 0",
        "size": "Size must be greater than or equal to 0",
        "createdAt": "CreatedAt is invalid"
      }
    }
    ```