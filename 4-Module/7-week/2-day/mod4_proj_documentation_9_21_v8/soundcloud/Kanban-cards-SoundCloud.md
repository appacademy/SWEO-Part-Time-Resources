# Kanban Project Board Cards

The following cards will guide the implementation of the SoundCloud API. Each
section should be copied into it's own card on the Kanban project board.
Each feature's progress should be tracked by checking off requirements as they
are met and progressing the cards from the `Backlog`, `Next Tasks`,
`In Progress`, `In Review`, and `Accepted` columns.


## Kanban Cards

Copy each of the following sections into its own card on a Kanban board for the
project. Github Kanban boards use markdown formatting, allowing these sections
to be copied directly:


### Authentication Required (Feature 0)

All endpoints that require a current user to be logged in receive a standard
authentication response.

- [ ] Authentication middleware responds with error status 401 when
  authentication is not provided


### Authorization Required (Feature 0)

All endpoints that require a current user to have the correct role(s) or
permission(s) receive a standard authorization response.

- [ ] Authorization middleware responds with error status 403 when
  an authenticated user does not have the correct role(s) or permission(s)


### Sign Up a User (Feature 0)

Creates a new user, logs them in as the current user, and returns the current
user's information.

- [ ] New user exists in the database after request
- [ ] Successful response includes newly created `id`, `firstName`, `lastName`,
  `username`, `email`, and `token`
- [ ] Error response with status 403 is given when the specified email already
exists
- [ ] Error response with status 400 is given when body validations for the
  `email`, `username`, `firstName`, or `lastName` are violated


### Log In a User (Feature 0)

Logs in a current user with valid credentials and returns the current user's
information.

- [ ] Successful response includes the user's `id`, `firstName`, `lastName`,
  `username`, `email`, and `token`
- [ ] Error response with status 401 is given when invalid credentials are given
- [ ] Error response with status 400 is given when body validations for the
  `email`, `username`, `firstName`, or `lastName` are violated


### Get the Current User (Feature 0)

Returns the information about the current user that is logged in.

- [ ] An authenticated user is required for a successful response
- [ ] Successful response includes the user's `id`, `firstName`, `lastName`,
  `username`, `email`, and `token`


### Get all Songs (Feature 1)

Returns all the songs.

- [ ] Seed data exists in the database for songs to be returned.
- [ ] Successful response includes each song in the database.
- [ ] Song data returned includes the `id`, `userId`, `albumId`, `title`,
  `description`, `url`, `createdAt`, `updatedAt`, and `previewImage`


### Get all Songs created by the Current User (Feature 1)

Returns all the songs created by the current user.

- [ ] An authenticated user is required for a successful response
- [ ] Successful response includes only songs created by the current user
- [ ] Song data returned includes the `id`, `userId`, `albumId`, `title`,
  `description`, `url`, `createdAt`, `updatedAt`, and `previewImage`


### Get details of a Song from an id (Feature 1)

Returns the details of a song specified by its id.

- [ ] Successful response includes data only for the specified song
- [ ] Song data returned includes the `id`, `userId`, `albumId`, `title`,
  `description`, `url`, `createdAt`, `updatedAt`, and `previewImage`
- [ ] Song data returns associated data for `Artist`, including the `id`,
  `username`, and `previewImage`
- [ ] Song data returns associated data for `Album`, including the `id`,
  `title`, and `previewImage`
- [ ] Error response with status 404 is given when a song does not exist with
  the provided `id`


### Create a Song for an Album based on the Album's id (Feature 1)

Creates and returns a new song.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the album is authorized to add a song
- [ ] New song exists in the database after request
- [ ] Song data returned includes the `id`, `userId`, `albumId`, `title`,
  `description`, `url`, `createdAt`, `updatedAt`, and `previewImage`
- [ ] Error response with status 400 is given when body validations for the
  `title` or `url` are violated
- [ ] Error response with status 404 is given when an album does not exist with
  the provided `id`


### Edit a Song (Feature 1)

Updates and returns an existing song.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the song is authorized to edit
- [ ] Song record is updated in the database after request
- [ ] Song data returned includes the `id`, `userId`, `albumId`, `title`,
  `description`, `url`, `createdAt`, `updatedAt`, and `previewImage`
- [ ] Error response with status 400 is given when body validations for the
  `title` or `url` are violated
- [ ] Error response with status 404 is given when a song does not exist with
  the provided `id`


### Delete a Song (Feature 1)

Deletes an existing song.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the song is authorized to delete
- [ ] Song record is removed from the database after request
- [ ] Success response includes a `message` indicating a successful deletion
- [ ] Error response with status 404 is given when a song does not exist with
  the provided `id`


### Get all Albums (Feature 2)

Returns all the albums.

- [ ] Seed data exists in the database for albums to be returned.
- [ ] Successful response includes each album in the database.
- [ ] Album data returned includes the `id`, `userId`, `title`, `description`,
  `createdAt`, `updatedAt`, and `previewImage`


### Get all Albums created by the Current User (Feature 2)

Returns all the albums created by the current user.

- [ ] An authenticated user is required for a successful response
- [ ] Successful response includes only albums created by the current user
- [ ] Album data returned includes the `id`, `userId`, `title`, `description`,
  `createdAt`, `updatedAt`, and `previewImage`


### Get details of an Album from an id (Feature 2)

Returns the details of an album specified by its id.

- [ ] Successful response includes data only for the specified album
- [ ] Album data returned includes the `id`, `userId`, `title`, `description`,
  `createdAt`, `updatedAt`, and `previewImage`
- [ ] Album data returns associated data for `Artist`, including the `id`,
  `username`, and `previewImage`
- [ ] Album data returns associated data for `Songs`, including the `id`,
  `userId`, `albumId`, `title`, `description`, `url`, `createdAt`, `updatedAt`,
  and `previewImage` for each song
- [ ] Error response with status 404 is given when an album does not exist with
  the provided `id`


### Create an Album (Feature 2)

Creates and returns a new album.

- [ ] An authenticated user is required for a successful response
- [ ] New album exists in the database after request
- [ ] Album data returned includes the `id`, `userId`, `title`, `description`,
  `createdAt`, `updatedAt`, and `previewImage`
- [ ] Error response with status 400 is given when body validations for the
  `title` are violated


### Edit an Album (Feature 2)

Updates and returns an existing album.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the album is authorized to edit
- [ ] Album record is updated in the database after request
- [ ] Album data returned includes the `id`, `userId`, `title`, `description`,
  `createdAt`, `updatedAt`, and `previewImage`
- [ ] Error response with status 400 is given when body validations for the
  `title` are violated
- [ ] Error response with status 404 is given when an album does not exist with
  the provided `id`


### Delete an Album (Feature 2)

Deletes an existing album.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the album is authorized to delete
- [ ] Album record is removed from the database after request
- [ ] Success response includes a `message` indicating a successful deletion
- [ ] Error response with status 404 is given when an album does not exist with
  the provided `id`


### Get all Comments by a Song's id (Feature 3)

Returns all the comments that belong to a song specified by id.

- [ ] Seed data exists in the database for comments to be returned.
- [ ] Successful response includes only comments for the specified song
- [ ] Comment data returned includes the `id`, `userId`, `songId`, `body`,
  `createdAt`, and `updatedAt`
- [ ] Comment data returns associated data for `User`, including the `id` and
  `username`
- [ ] Error response with status 404 is given when a song does not exist with
  the provided `id`


### Create a Comment for a Song based on the Song's id (Feature 3)

Create and return a new comment for a song specified by id.

- [ ] An authenticated user is required for a successful response
- [ ] New comment exists in the database after request
- [ ] Comment data returned includes the `id`, `userId`, `songId`, `body`,
  `createdAt`, and `updatedAt`
- [ ] Error response with status 400 is given when body validations for the
  `body` are violated
- [ ] Error response with status 404 is given when a song does not exist with
  the provided `id`


### Edit a Comment (Feature 3)

Update and return an existing comment.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the comment is authorized to edit
- [ ] Comment record is updated in the database after request
- [ ] Comment data returned includes the `id`, `userId`, `songId`, `body`,
  `createdAt`, and `updatedAt`
- [ ] Error response with status 400 is given when body validations for the
  `body` are violated
- [ ] Error response with status 404 is given when a comment does not exist with
  the provided `id`


### Delete a Comment (Feature 3)

Delete an existing comment.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the comment is authorized to delete
- [ ] Comment record is removed from the database after request
- [ ] Success response includes a `message` indicating a successful deletion
- [ ] Error response with status 404 is given when a comment does not exist with
  the provided `id`

### Get details of an Artist from an id (Feature 4)

Returns the details of an artist specified by their id.

- [ ] Successful response includes data only for the specified artist
- [ ] Artist data returned includes the `id`, `username`, and `previewImage`
- [ ] Artist data returns aggregate data for `totalSongs` and `totalAlbums`
  and `previewImage` for each song
- [ ] Error response with status 404 is given when an artist does not exist with
  the provided `id`


### Get all Songs of an Artist based on the Artist's id (Feature 4)

Returns all the songs created by the artist specified by id.

- [ ] Seed data exists in the database for songs to be returned.
- [ ] Successful response includes only songs for the specified artist
- [ ] Song data returned includes the `id`, `userId`, `albumId`, `title`,
  `description`, `url`, `createdAt`, `updatedAt`, and `previewImage` for each
  song
- [ ] Error response with status 404 is given when an artist does not exist with
  the provided `id`


### Get all Albums of an Artist based on the Artist's id (Feature 4)

Returns all the albums created by the artist specified by id.

- [ ] Seed data exists in the database for albums to be returned.
- [ ] Successful response includes only albums for the specified artist
- [ ] Album data returned includes the `id`, `userId`, `title`, `description`,
  `createdAt`, `updatedAt`, and `previewImage` for each album
- [ ] Error response with status 404 is given when an artist does not exist with
  the provided `id`


### Get all Playlists of an Artist based on the Artist's id (Feature 5)

Returns all the playlists created by the artist specified by id.

- [ ] Seed data exists in the database for playlists to be returned.
- [ ] Successful response includes only playlists for the specified artist
- [ ] Playlist data returned includes the `id`, `userId`, `name`, `createdAt`,
  `updatedAt`, and `previewImage` for each playlist
- [ ] Error response with status 404 is given when an artist does not exist with
  the provided `id`


### Create a Playlist (Feature 5)

Creates and returns a new playlist.

- [ ] An authenticated user is required for a successful response
- [ ] New playlist exists in the database after request
- [ ] Playlist data returned includes the `id`, `userId`, `name`, `createdAt`,
  `updatedAt`, and `previewImage`
- [ ] Error response with status 400 is given when body validations for the
  `name` are violated


## Add a Song to a Playlist based on the Playlist's id (Feature 5)

Add a song to a playlist specified by the playlist's id.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the playlist is authorized to add a song
- [ ] New `PlaylistSong` exists in the database after request
- [ ] PlaylistSong data returned includes the `id`, `playlistId`, and `songId`
- [ ] Error response with status 404 is given when a playlist does not exist
  with the provided `id`
- [ ] Error response with status 404 is given when a song does not exist with
  the provided `id`


### Get details of a Playlist from an id (Feature 5)

Returns the details of a playlist specified by its id.

- [ ] Successful response includes data only for the specified playlist
- [ ] Playlist data returned includes the `id`, `userId`, `name`, `createdAt`,
  `updatedAt`, and `previewImage`
- [ ] Playlist data returns associated data for `Songs`, includes the `id`,
  `userId`, `albumId`, `title`, `description`, `url`, `createdAt`, `updatedAt`,
  and `previewImage` for each song
- [ ] Error response with status 404 is given when a playlist does not exist
  with the provided `id`


### Edit a Playlist (Feature 5)

Update and return an existing playlist.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the playlist is authorized to edit
- [ ] Playlist record is updated in the database after request
- [ ] Playlist data returned includes the `id`, `userId`, `name`, `createdAt`,
  `updatedAt`, and `previewImage`
- [ ] Error response with status 400 is given when body validations for the
  `name` are violated
- [ ] Error response with status 404 is given when a playlist does not exist
  with the provided `id`


### Delete a Playlist (Feature 5)

Delete an existing playlist.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the playlist is authorized to delete
- [ ] Playlist record is removed from the database after request
- [ ] Success response includes a `message` indicating a successful deletion
- [ ] Error response with status 404 is given when a playlist does not exist
  with the provided `id`


### Get all Playlists created by the Current User (Feature 5)

Returns all the playlists created by the current user.

- [ ] An authenticated user is required for a successful response
- [ ] Successful response includes only playlists created by the current user
- [ ] Playlist data returned includes the `id`, `userId`, `name`, `createdAt`,
  `updatedAt`, and `previewImage` for each playlist


### Add Query Filters to Get All Songs (Feature 5)

Return songs filtered by query parameters.

- [ ] Query parameters are accepted for `page`, `size`, `title`, and `createdAt`
- [ ] Default values are provided for the `page` and `size` parameters
- [ ] Successful response includes only songs in the database that meet the
  specified query parameters criteria
- [ ] Song data returned includes the `id`, `userId`, `albumId`, `title`,
  `description`, `url`, `createdAt`, `updatedAt`, and `previewImage` for each
  song
- [ ] Successful response includes the `page` and `size` of the returned payload
- [ ] Error response with status 400 is given when query parameter validations
  for the `page`, `size`, `title`, or `createdAt` are violated