Determine an endpoint for each of the following use cases. Don't worry about
getting it perfect as this is just practice!

For example, to access the home page of a site, the RESTful endpoint could be
`GET /` or `GET /home`.

Remember, HTML web servers should only accept requests with methods of `GET` and
`POST` only! They cannot accept `PUT`, `PATCH` or `DELETE` requests.

- Access the home page
  - `GET /`
  - `GET /home`
- Submit a contact form
    - `POST /contacts`
- Access the posts page
    - `GET /posts`
- Access the edit page for a post
    - `GET /posts/:postId`
    - `GET /posts/:postId/edit`
- Access the create page for a post
    - `GET /posts/create`
    - `GET /posts/new`
- Create a new user
    - `POST /users/new`
    - `POST /users/create`
    - `POST /users`
- Log In - Submitting 
    - `POST /login`
    - `POST /users/login`
- Log In - Page
    - `GET /login`
- Log Out
    - `GET /logout`
    - `DELETE /logout`
    - `DELETE /session-user`
- Access the comments for a post page
    - `GET /posts/:postId/comments`
- Access the create page for a post's comment
    - `GET /posts/:postId/comments/new`
    - `GET /posts/:postId/comments/create`
- Access the edit page for a comment
    - `GET /comments/:commentID/edit`
- Submit a like for a post
    - `POST /posts/:postId/likes`
- Delete a like for a post
    - `POST /likes/:likesId/delete`
    - `POST /posts/:postId/likes/:likeId/delete`
- Access all the posts of a user
    - `GET /users/:userId/posts`
- Submit a search on posts
    - `POST /posts/search?title=puppies`