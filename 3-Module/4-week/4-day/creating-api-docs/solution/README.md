
# API Endpoints

In this exercise, determine an endpoint for each of the use cases. Don't worry
about getting it perfect as this is just practice! API endpoints use similar
routes to a traditional web server's RESTful routes. The major difference
between API endpoints those of a traditional web server is that API endpoints
can use all HTTP verbs (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).

For example, to edit a specific post, the API endpoint could be
`PATCH /posts/:postId`

- Get all the posts
  - `GET /posts`
- Create a new post
  - `POST /posts`
- Edit a post
  - `PUT /posts/:postId`
  - `PATCH /posts/:postId`
- Create a new user
  - `POST /users`
- Get the comments for a post
  - `GET /posts/:postId/comments`
- Create a comment for a post
  - `GET /posts/:postId/comments`
- Edit a comment for a post
  - `PUT /comments/:commentId`
  - `PATCH /comments/:commentId`
- Delete a comment for a post
  - `DELETE /comments/:commentId`
- Add a like for a post
  - `POST /posts/:postId/like`
- Remove a like for a post
  - `DELETE /posts/:postId/like`
- Get all the posts of a user
  - `GET /users/:userId/posts`
- Submit a search on posts
  - `GET /posts/search`
  - `POST /posts/search`
