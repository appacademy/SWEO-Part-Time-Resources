# Kanban Project Board Cards

The following cards will guide the implementation of the Meetup API. Each
section should be copied into it's own card on the Kanban project board.
Each feature's progress should be tracked by checking off requirements as they
are met and progressing the cards from the `Backlog`, `Next Tasks`,
`In Progress`, `In Review`, and `Accepted` columns.


## Kanban Cards

Copy each of the following sections into its own card on a Kanban board for the
project. Github Kanban boards use markdown formatting, allowing these sections
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


### Sign Up a User

Creates a new user, logs them in as the current user, and returns the current
user's information.

- [ ] New user exists in the database after request
- [ ] Successful response includes newly created `id`, `firstName`, `lastName`,
  `email`, and `token`
- [ ] Error response with status 403 is given when the specified email already
exists
- [ ] Error response with status 400 is given when body validations for the
  `email`, `firstName`, or `lastName` are violated


### Log In a User

Logs in a current user with valid credentials and returns the current user's
information.

- [ ] Successful response includes the user's `id`, `firstName`, `lastName`,
  `email`, and `token`
- [ ] Error response with status 401 is given when invalid credentials are given
- [ ] Error response with status 400 is given when body validations for the
  `email`, `firstName`, or `lastName` are violated


### Get the Current User

Returns the information about the current user that is logged in.

- [ ] An authenticated user is required for a successful response
- [ ] Successful response includes the user's `id`, `firstName`, `lastName`,
  `email`, and `token`


### Get all Groups

Returns all groups.

- [ ] Seed data exists in the database for groups to be returned.
- [ ] Successful response includes each group in the database.
- [ ] Group data returned includes the `id`, `organizerId`, `name`, `about`,
  `type`, `private`, `city`, `state`, `createdAt`, `updatedAt`, `numMembers`,
  and `previewImage`


### Get all Groups joined or organized by the Current User

Returns all the groups either created by the current user or those where the
current user has a membership.

- [ ] An authenticated user is required for a successful response
- [ ] Successful response includes only groups created or joined by the current
  user
- [ ] Group data returned includes the `id`, `organizerId`, `name`, `about`,
  `type`, `private`, `city`, `state`, `createdAt`, `updatedAt`, `numMembers`,
  and `previewImage`


### Get details of a Group from an id

Returns the details of a group specified by its id.

- [ ] Successful response includes data only for the specified group
- [ ] Group data returned includes the `id`, `organizerId`, `name`, `about`,
  `type`, `private`, `city`, `state`, `createdAt`, `updatedAt`, and `numMembers`
- [ ] Group data returns associated data for `GroupImages`, an array of image
  data including the `id`, `url`, and `preview`
- [ ] Group data returns associated data for `Organizer`, including the `id`,
  `firstName`, and `lastName`
- [ ] Error response with status 404 is given when a group does not exist with
  the provided `id`


### Create a Group

Creates and returns a new group.

- [ ] An authenticated user is required for a successful response
- [ ] New group exists in the database after request
- [ ] Group data returned includes the `id`, `organizerId`, `name`, `about`,
  `type`, `private`, `city`, `state`, `createdAt`, and `updatedAt`
- [ ] Error response with status 400 is given when body validations for the
  `name`, `about`, `type`, `private`, `city`, or `state` are violated


### Add an Image to a Group based on the Group's id

Create and return a new image for a group specified by id.

- [ ] An authenticated user is required for a successful response
- [ ] Only the organizer of the group is authorized to add an image
- [ ] New image exists in the database after request
- [ ] Image data returned includes the `id`, `url`, and `preview`
- [ ] Error response with status 404 is given when a group does not exist with
  the provided `id`


### Edit a Group

Updates and returns an existing group.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the group is authorized to edit
- [ ] Group record is updated in the database after request
- [ ] Group data returned includes the `id`, `organizerId`, `name`, `about`,
  `type`, `private`, `city`, `state`, `createdAt`, and `updatedAt`
- [ ] Error response with status 400 is given when body validations for the
  `name`, `about`, `type`, `private`, `city`, or `state` are violated
- [ ] Error response with status 404 is given when a group does not exist with
  the provided `id`


### Delete a Group

Deletes an existing group.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the group is authorized to delete
- [ ] Group record is removed from the database after request
- [ ] Success response includes a `message` indicating a successful deletion
- [ ] Error response with status 404 is given when a group does not exist with
  the provided `id`


### Get all Venues for a Group specified by id

Returns all venues for a group specified by its id.

- [ ] Seed data exists in the database for venues to be returned.
- [ ] Successful response includes each venue for a group in the database.
- [ ] Venue data returned includes `id`, `groupId`, `address`, `city`, `state`,
  `lat`, and `lng`


### Create a new Venue for a Group specified by its id

Creates and returns a new venue for a group specified by its id

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the group or a member of the group with a membership
  status of "co-host" is authorized to create a venue
- [ ] New venue exists in the database after request
- [ ] Venue data returned includes `id`, `groupId`, `address`, `city`, `state`,
  `lat`, and `lng`
- [ ] Error response with status 404 is given when a group does not exist with
  the provided `id`
- [ ] Error response with status 400 is given when body validations for the
  `address`, `city`, `state`, `lat`, or `lng` are violated


### Edit a Venue specified by its id

Edit a new venue specified by its id

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the group or a member of the group with a membership
  status of "co-host" is authorized to edit a venue
- [ ] Venue record is updated in the database after request
- [ ] Venue data returned includes `id`, `groupId`, `address`, `city`, `state`,
  `lat`, and `lng`
- [ ] Error response with status 404 is given when a venue does not exist with
  the provided `id`
- [ ] Error response with status 400 is given when body validations for the
  `address`, `city`, `state`, `lat`, or `lng` are violated

### Get all Events

Returns all the events.

- [ ] Seed data exists in the database for events to be returned.
- [ ] Successful response includes each event in the database.
- [ ] Event data returned includes the `id`, `groupId`, `venueId`, `name`,
  `type`, `startDate`, `endDate`, and `previewImage`
- [ ] Event data returned includes aggregate data for `numAttending`
- [ ] Event data returned includes associated `Group` data, including `id`,
  `name`, `city`, and `state`
- [ ] Event data returned includes associated `Venue` data, if any, including
  `id`, `city`, and `state`


### Get all Events of a Group specified by its id

Returns all the events of a group specified by its id

- [ ] Seed data exists in the database for events to be returned.
- [ ] Successful response includes only events for the specified group
- [ ] Event data returned includes the `id`, `groupId`, `venueId`, `name`,
  `type`, `startDate`, `endDate`, and `previewImage`
- [ ] Event data returned includes aggregate data for `numAttending`
- [ ] Event data returned includes associated `Group` data, including `id`,
  `name`, `city`, and `state`
- [ ] Event data returned includes associated `Venue` data, if any, including
  `id`, `city`, and `state`
- [ ] Error response with status 404 is given when a group does not exist with
  the provided `id`


### Get details of an Event specified by its id

Returns the details of an event specified by its id.

- [ ] Successful response includes data only for the specified event
- [ ] Event data returned includes the `id`, `groupId`, `venueId`, `name`,
  `description`, `type`, `capacity`, `price`, `startDate`, and `endDate`
- [ ] Event data returned includes aggregate data for `numAttending`
- [ ] Event data returned includes associated `Group` data, including `id`,
  `name`, `private`, `city`, and `state`
- [ ] Event data returned includes associated `Venue` data, if any, including
  `id`, `address`, `city`, `state`, `lat`, and `lng`
- [ ] Event data returns associated data for `EventImages`, an array of image
  data including the `id`, `url`, and `preview`
- [ ] Error response with status 404 is given when an event does not exist with
  the provided `id`


### Create an Event for a Group specified by its id

Creates and returns a new event for a group specified by its id

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the group or a member of the group with a membership
  status of "co-host" is authorized to create an event
- [ ] New event exists in the database after request
- [ ] `venueId` can be `null`
- [ ] Event data returned includes `id`, `groupId`, `venueId`, `name`, `type`,
  `capacity`, `price`, `description`, `startDate` and `endDate`
- [ ] Error response with status 400 is given when body validations for the
  `venueId`, `name`, `type`, `capacity`, `price`, `description`, `startDate`,
  or `endDate` are violated
- [ ] Error response with status 404 is given when a venue does not exist with
  the provided `id`


### Add an Image to an Event based on the Event's id

Create and return a new image for an event specified by id.

- [ ] An authenticated user is required for a successful response
- [ ] Only an attendee of the event is authorized to add an image
- [ ] New image exists in the database after request
- [ ] Image data returned includes the `id`, `url`, and `preview`
- [ ] Error response with status 404 is given when an event does not exist with
  the provided `id`


### Edit an Event specified by its id

Edit and returns an event specified by its id

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the group or a member of the group with a membership
  status of "co-host" is authorized to create an event
- [ ] Event record is updated in the database after request
- [ ] Event data returned includes `id`, `groupId`, `venueId`, `name`, `type`,
  `capacity`, `price`, `description`, `startDate` and `endDate`
- [ ] Error response with status 400 is given when body validations for the
  `venueId`, `name`, `type`, `capacity`, `price`, `description`, `startDate`,
  or `endDate` are violated
- [ ] Error response with status 404 is given when a venue does not exist with
  the provided `id`
- [ ] Error response with status 404 is given when an event does not exist with
  the provided `id`


### Delete an Event specified by its id

Delete an event specified by its id

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the group or a member of the group with a membership
  status of "co-host" is authorized to create an event
- [ ] Event record is removed from the database after request
- [ ] Success response includes a `message` indicating a successful deletion
- [ ] Error response with status 404 is given when an event does not exist with
  the provided `id`


### Get all Members of a Group based on the Group's id

Returns all the members of a group specified by its id.

- [ ] Seed data exists in the database for members to be returned.
- [ ] Successful response includes only members for the specified group
- [ ] Member data returned includes the `id`, `firstName`, and `lastName` for
  each member
- [ ] Member data returned includes the associated membership `status`
- [ ] If you ARE the organizer of the group, members with a membership status of
  "pending" ARE included in the returned results
- [ ] If you are NOT the organizer of the group, members with a membership
  status of "pending" are NOT included in the returned results
- [ ] Error response with status 404 is given when a group does not exist with
  the provided `id`


### Request a Membership for a Group based on the Group's id

Request a new membership for a group specified by id.

- [ ] An authenticated user is required for a successful response
- [ ] New membership exists in the database after request
- [ ] Success response includes the `groupId`, `memberId`, and a `status` of
  "pending"
- [ ] Error response with status 404 is given when a group does not exist with
  the provided `id`
- [ ] Error response with status 400 is given when the current user already has
  a pending membership for the group
- [ ] Error response with status 400 is given when the current user already has
  an accepted membership for the group


### Change the status of a membership for a group specified by id

Change the status of a membership for a group specified by id.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the group or a member of the group with a membership
  status of "co-host" is authorized to change the status of a membership
- [ ] Membership record is updated in the database after request
- [ ] Success response includes the `id` `groupId`, `memberId`, and the new
  `status`
- [ ] Error response with status 404 is given when a group does not exist with
  the provided `id`
- [ ] Error response with status 403 is given when changing the status to
  "co-host" when the current user is not the group organizer
- [ ] Error response with status 403 is given when changing the status to
  "member" when the current user is not the group organizer
  or a co-host
- [ ] Error response with status 400 is given when changing the status to
  "pending"
- [ ] Error response with status 404 is given when a membership between the user
  and group does not exist


### Delete membership to a group specified by id

Delete a membership to a group specified by id.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner/host of the group or the member themselves is authorized to
  delete the membership of a user to a group
- [ ] Membership record is removed from the database after request
- [ ] Success response includes a `message` indicating a successful deletion
- [ ] Error response with status 404 is given when a group does not exist with
  the provided `id`
- [ ] Error response with status 404 is given when a member does not exist with
  the provided `id`
- [ ] Error response with status 403 is given when a request is made to delete
  another user's membership when the current user is not the group organizer


### Get all Attendees of an Event specified by its id

Returns the attendees of an event specified by its id.

- [ ] Seed data exists in the database for attendees to be returned.
- [ ] Successful response includes only attendees for the specified event
- [ ] Attendee data returned includes the `id`, `firstName`, and `lastName` for
  each member
- [ ] Member data returned includes the associated membership `status`
- [ ] If you ARE the organizer of the group or a "co-host", attendees with an
  attendance status of "pending" ARE included in the returned results
- [ ] If you are NOT the organizer of the group or a "co-host", attendees with
  an attendance status of "pending" are NOT included in the returned results
- [ ] Error response with status 404 is given when an event does not exist with
  the provided `id`


### Request to Attend an Event based on the Event's id

Request attendance for an event specified by id.

- [ ] An authenticated user is required for a successful response
- [ ] New attendance exists in the database after request
- [ ] Success response includes the `eventId`, `userId`, and a `status` of
  "pending"
- [ ] Error response with status 404 is given when an event does not exist with
  the provided `id`
- [ ] Error response with status 400 is given when the current user already has
  a pending attendance for the event
- [ ] Error response with status 400 is given when the current user already is
  already an accepted attendee for the event


### Change the status of an attendance for an event specified by id

Change the status of an attendance for an event specified by id.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner of the group or a member of the group with a membership
  status of "co-host" is authorized to change the status of a membership
- [ ] Attendance record is updated in the database after request
- [ ] Success response includes the `id` `eventId`, `userId`, and the new
  `status`
- [ ] Error response with status 404 is given when an event does not exist with
  the provided `id`
- [ ] Error response with status 400 is given when changing the status to
  "pending"
- [ ] Error response with status 403 is given when changing the status to
  "member" when the current user is not the organizer or a co-host
- [ ] Error response with status 404 is given when an attendance between the
  user and event does not exist


### Delete attendance to an event specified by id

Delete an attendance to an event specified by id.

- [ ] An authenticated user is required for a successful response
- [ ] Only the owner/host of the group or the member themselves is authorized to
  delete the attendance of a user to an event
- [ ] Attendance record is removed from the database after request
- [ ] Success response includes a `message` indicating a successful deletion
- [ ] Error response with status 404 is given when a group does not exist with
  the provided `id`
- [ ] Error response with status 404 is given when a member does not exist with
  the provided `id`
- [ ] Error response with status 403 is given when a request is made to delete
  another user's membership when the current user is not the group organizer


### Delete an Image for a Group

Delete an existing image for a Group.

- [ ] An authenticated user is required for a successful response
- [ ] Only the organizer or co-host of the group is authorized to delete
- [ ] Image record is removed from the database after request
- [ ] Success response includes a `message` indicating a successful deletion
- [ ] Error response with status 404 is given when a group image does not exist
  with the provided `id`


### Delete an Image for an Event

Delete an existing image for an Event.

- [ ] An authenticated user is required for a successful response
- [ ] Only the organizer or co-host of the group is authorized to delete
- [ ] Image record is removed from the database after request
- [ ] Success response includes a `message` indicating a successful deletion
- [ ] Error response with status 404 is given when an image does not exist with
  the provided `id`


### Add Query Filters to Get All Events

Return events filtered by query parameters.

- [ ] Query parameters are accepted for `page`, `size`, `name`, `type` and
  `startDate`
- [ ] Default values are provided for the `page` and `size` parameters
- [ ] Successful response includes only events in the database that meet the
  specified query parameters criteria
- [ ] Event data returned includes the `id`, `groupId`, `venueId`, `name`,
  `type`, `startDate`, `endDate`, and `previewImage`
- [ ] Event data returned includes aggregate data for `numAttending`
- [ ] Event data returned includes associated `Group` data, including `id`,
  `name`, `city`, and `state`
- [ ] Event data returned includes associated `Venue` data, if any, including
  `id`, `city`, and `state`
- [ ] Successful response includes the `page` and `size` of the returned payload
- [ ] Error response with status 400 is given when query parameter validations
  for the `page`, `size`, `name`, `type` or `startDate` are violated