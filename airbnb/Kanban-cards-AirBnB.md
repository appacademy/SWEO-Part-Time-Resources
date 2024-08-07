# Kanban Project Board Cards

The following cards will guide the implementation of the AirBnB API. Each
section should be copied into it's own card on the Kanban project board.
Each feature's progress should be tracked by checking off requirements as they
are met and progressing the cards from the `Backlog`, `Next Tasks`,
`In Progress`, `In Review`, and `Accepted` columns.

## Notes

The first two cards, "Authentication Required" and "Authorization Required" are
general tasks to be applied to endpoints that list these requirements. Check
the API Documentation for whether or not an endpoint needs any kind of
authentication or authorization

Sign Up, Log In, and Get Current User endpoints are part of Authenticate Me,
and as such should already be complete. Ensure that you've added and tested
functionality for Users' `firstName` and `lastName` properties.

## Kanban Cards

Copy each of the following sections into its own card on a Kanban board for the
project. GitHub Kanban boards use markdown formatting, allowing these sections
to be copied directly:


### Authentication Required

All endpoints that require a current user to be logged in receive a standard
authentication response.

- [ ] Authentication middleware responds with error status 401 when
  authentication is not provided


### Authorization Required

All endpoints that require a current user to have the correct role(s) or
permission(s) receive a standard authorization response.

- [ ] Authorization middleware responds with error status 403 when
  an authenticated user does not have the correct role(s) or permission(s)


### Sign Up a User (Feature 0)

Creates a new user, logs them in as the current user, and returns the current
user's information.

- [ ] New user exists in the database after request
- [ ] Successful response includes newly created `id`, `firstName`, `lastName`,
  and `email`
- [ ] Error response with status 500 is given when the specified email or username
  already exists
- [ ] Error response with status 400 is given when body validations for the
  `email`, `firstName`, or `lastName` are violated


### Log In a User (Feature 0)

Logs in a current user with valid credentials and returns the current user's
information.

- [ ] Successful response includes the user's `id`, `firstName`, `lastName`,
  and `email`
- [ ] Error response with status 401 is given when invalid credentials are given
- [ ] Error response with status 400 is given when body validations for the
  `email`, `firstName`, or `lastName` are violated


### Get the Current User (Feature 0)

Returns the information about the current user that is logged in.

- [ ] An authenticated user is required for a successful response
- [ ] Successful response includes the user's `id`, `firstName`, `lastName`,
  and `email`


### Get all Spots

Returns all the spots.

- [ ] Seed data exists in the database for spots to be returned.
- [ ] Successful response includes each spot in the database.
- [ ] Spot data returned includes the `id`, `ownerId`, `address`, `city`,
  `state`, `country`, `lat`, `lng`, `name`, `description`, `price`, `createdAt`,
  `updatedAt`, `previewImage`, and `avgRating`


### Create a Spot

Creates and returns a new spot.

- [ ] An authenticated user is required for a successful response
- [ ] New spot exists in the database after request
- [ ] Spot data returned includes the `id`, `ownerId`, `address`, `city`,
  `state`, `country`, `lat`, `lng`, `name`, `description`, `price`, `createdAt`,
  and `updatedAt`
- [ ] Error response with status 400 is given when body validations for the
  `address`, `city`, `state`, `country`, `lat`, `lng`, `name`, `description`, or `price` are violated


### Add an Image to a Spot based on the Spot's id

Create and return a new image for a spot specified by id.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the spot is authorized to add an image
- [ ] New image exists in the database after request
- [ ] Image data returned includes the `id`, `url`, and `preview`
- [ ] Error response with status 404 is given when a spot does not exist with
  the provided `id`


### Get all Spots owned by the Current User

Returns all the spots owned (created) by the current user.

- [ ] An authenticated user is required for a successful response
- [ ] Successful response includes only spots created by the current user
- [ ] Spot data returned includes the `id`, `ownerId`, `address`, `city`,
  `state`, `country`, `lat`, `lng`, `name`, `description`, `price`, `createdAt`,
  `updatedAt`, `previewImage`, and `avgRating`


### Get details for a Spot from an id

Returns the details of a spot specified by its id.

- [ ] Successful response includes data only for the specified spot
- [ ] Spot data returned includes the `id`, `ownerId`, `address`, `city`,
  `state`, `country`, `lat`, `lng`, `name`, `description`, `price`, `createdAt`,
  and `updatedAt`
- [ ] Spot data returns aggregate data for `numReviews` and `avgStarRating`
- [ ] Spot data returns associated data for `SpotImages`, an array of image
  data including the `id`, `url`, and `preview`
- [ ] Spot data returns associated data for `Owner`, including the `id`,
  `firstName`, and `lastName`
- [ ] Error response with status 404 is given when a spot does not exist with
  the provided `id`


### Edit a Spot

Updates and returns an existing spot.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the spot is authorized to edit
- [ ] Spot record is updated in the database after request
- [ ] Spot data returned includes the `id`, `ownerId`, `address`, `city`,
  `state`, `country`, `lat`, `lng`, `name`, `description`, `price`, `createdAt`,
  and `updatedAt`
- [ ] Error response with status 400 is given when body validations for the
  `address`, `city`, `state`, `country`, `lat`, `lng`, `name`, `description`, or `price` are violated
- [ ] Error response with status 404 is given when a spot does not exist with
  the provided `id`


### Delete a Spot

Deletes an existing spot.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the spot is authorized to delete
- [ ] Spot record is removed from the database after request
- [ ] Success response includes a `message` indicating a successful deletion
- [ ] Error response with status 404 is given when a spot does not exist with
  the provided `id`


### Create a Review for a Spot based on the Spot's id

Create and return a new review for a spot specified by id.

- [ ] An authenticated user is required for a successful response
- [ ] New review exists in the database after request
- [ ] Review data returned includes the `id`, `userId`, `spotId`, `review`,
  `stars`, `createdAt`, and `updatedAt`
- [ ] Error response with status 400 is given when body validations for the
  `review` or `stars` are violated
- [ ] Error response with status 404 is given when a spot does not exist with
  the provided `id`
- [ ] Error response with status 403 is given when a review already exists for
  the spot from the current user


### Add an Image to a Review based on the Review's id

Create and return a new image for a review specified by id.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the review is authorized to add an image
- [ ] New image exists in the database after request
- [ ] Image data returned includes the `id` and `url`
- [ ] Error response with status 404 is given when a review does not exist with
  the provided `id`
- [ ] Error response with status 403 is given when the maximum number of images
  have been added for the review


### Get all Reviews of the Current User

Returns all the reviews written by the current user.

- [ ] An authenticated user is required for a successful response
- [ ] Successful response includes only reviews created by the current user
- [ ] Review data returned includes the `id`, `userId`, `spotId`, `review`,
  `stars`, `createdAt`, and `updatedAt`
- [ ] Review data returns associated data for `User`, including the `id`,
  `firstName`, and `lastName`
- [ ] Review data returns associated data for `Spot`, including the `id`,
  `ownerId`, `address`, `city`, `state`, `country`, `lat`, `lng`, `name`,
  `price`, and `previewImage`
- [ ] Review data returns associated data for `ReviewImages`, an array of image
  data including the `id` and `url`


### Get all Reviews by a Spot's id

Returns all the reviews that belong to a spot specified by id.

- [ ] Seed data exists in the database for reviews to be returned.
- [ ] Successful response includes only reviews for the specified spot
- [ ] Review data returned includes the `id`, `userId`, `spotId`, `review`,
  `stars`, `createdAt`, and `updatedAt`
- [ ] Review data returns associated data for `User`, including the `id`,
  `firstName`, and `lastName`
- [ ] Review data returns associated data for `ReviewImages`, an array of image
  data including the `id` and `url`
- [ ] Error response with status 404 is given when a spot does not exist with
  the provided `id`


### Edit a Review

Update and return an existing review.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the review is authorized to edit
- [ ] Review record is updated in the database after request
- [ ] Review data returned includes the `id`, `userId`, `spotId`, `review`,
  `stars`, `createdAt`, and `updatedAt`
- [ ] Error response with status 400 is given when body validations for the
  `review`, or `stars` are violated
- [ ] Error response with status 404 is given when a review does not exist with
  the provided `id`


### Delete a Review

Delete an existing review.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the review is authorized to delete
- [ ] Review record is removed from the database after request
- [ ] Success response includes a `message` indicating a successful deletion
- [ ] Error response with status 404 is given when a spot does not exist with
  the provided `id`


### Create a Booking from a Spot based on the Spot's id

Create and return a new booking from a spot specified by id.

- [ ] An authenticated user is required for a successful response
- [ ] A user is only authorized to create a booking if they do NOT own the spot
- [ ] New booking exists in the database after request
- [ ] Booking data returned includes the `id`, `userId`, `spotId`, `startDate`,
  `endDate`, `createdAt`, and `updatedAt`
- [ ] Error response with status 404 is given when a spot does not exist with
  the provided `id`
- [ ] Error response with status 403 is given when a booking already exists for
  the spot on the specified dates


### Get all of the Current User's Bookings

Return all the bookings that the current user has made.

- [ ] An authenticated user is required for a successful response
- [ ] Successful response includes only bookings created by the current user
- [ ] Booking data returned includes the `id`, `spotId`, `userId`, `startDate`,
  `endDate`, `createdAt`, and `updatedAt`
- [ ] Booking data returns associated data for `Spot`, including the `id`,
  `ownerId`, `address`, `city`, `state`, `country`, `lat`, `lng`, `name`,
  `price` and `previewImage`


### Get all Bookings for a Spot based on the Spot's id

Return all the bookings for a spot specified by id.

- [ ] An authenticated user is required for a successful response
- [ ] Seed data exists in the database for bookings to be returned.
- [ ] Successful response includes only bookings for the specified spot
- [ ] If you are NOT the owner of the spot, booking data returned includes the
  `spotId`, `startDate`, and `endDate` for each booking
- [ ] If you ARE the owner of the spot, booking data returned includes the `id`
  `spotId`, `userId`, `startDate`, `endDate`, `createdAt`, and `updatedAt` for
  each booking
- [ ] If you ARE the owner of the spot, booking data returns associated data for
  `User`, including the `id`, `firstName`, and `lastName`
- [ ] Error response with status 404 is given when a spot does not exist with
  the provided `id`


### Edit a Booking

Update and return an existing booking.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the booking is authorized to edit
- [ ] Booking record is updated in the database after request
- [ ] Booking data returned includes the `id`, `userId`, `spotId`, `startDate`,
  `endDate`, `createdAt`, and `updatedAt`
- [ ] Error response with status 404 is given when a booking does not exist with
  the provided `id`
- [ ] Error response with status 400 is given when it is past the booking's
  `endDate` (no editing of past bookings)
- [ ] Error response with status 403 is given when a booking already exists for
  the spot on the specified dates


### Delete a Booking

Delete an existing booking.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the booking or the owner of the spot is authorized to
  delete the booking
- [ ] Booking record is removed from the database after request
- [ ] Success response includes a `message` indicating a successful deletion
- [ ] Error response with status 404 is given when a spot does not exist with
  the provided `id`
- [ ] Error response with status 400 is given when it is past the booking's
  `startDate` (no deleting of current or past bookings)


### Delete an Image for a Spot

Delete an existing image for a Spot.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the spot is authorized to delete
- [ ] Image record is removed from the database after request
- [ ] Success response includes a `message` indicating a successful deletion
- [ ] Error response with status 404 is given when a spot image does not exist
  with the provided `id`


### Delete an Image for a Review

Delete an existing image for a Review.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the review is authorized to delete
- [ ] Image record is removed from the database after request
- [ ] Success response includes a `message` indicating a successful deletion
- [ ] Error response with status 404 is given when a review image does not exist
  with the provided `id`


### Add Query Filters to Get All Spots

Return spots filtered by query parameters.

- [ ] Query parameters are accepted for `page`, `size`, `minLat`, `maxLat`,
  `minLng`, `maxLng`, `minPrice`, and `maxPrice`
- [ ] Default values are provided for the `page` and `size` parameters
- [ ] Successful response includes only spots in the database that meet the
  specified query parameters criteria.
- [ ] Spot data returned includes the `id`, `ownerId`, `address`, `city`,
  `state`, `country`, `lat`, `lng`, `name`, `description`, `price`, `createdAt`,
  `updatedAt`, and `previewImage` for each spot
- [ ] Successful response includes the `page` and `size` of the returned payload
- [ ] Error response with status 400 is given when query parameter validations
  for the `page`, `size`, `minLat`, `maxLat`, `minLng`, `maxLng`, `minPrice`, or
  `maxPrice` are violated
