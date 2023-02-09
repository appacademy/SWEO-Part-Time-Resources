# Exercise: HTML Web Server RESTful Endpoints Solution

- Access the home page
    - `GET /`
    - `GET /home`

- Submit a contact form
    - `POST /contact`

- Access the posts page
    - `GET /posts`

- Access the edit page for a post
    - `GET /posts/:postId/edit`

- Access the create page for a post
    - `GET /posts/new`

- Access the create users page
    - `GET /users/neww`

- Create a new user
    - `POST /users`

- Log In
    - `POST /users/login`
    - `POST /login` 
    - `POST /session`

- Log Out
    - `POST /users/logout`
    - `POST /logout`
    - `POST /session/delete`

- Access the comments for a post page
    - `GET /posts/:postId/comments`

- Access the create page for a post's comment
    - `GET /posts/:postId/new`

- Access the edit page for a comment
    - `GET /comments/:commentId/edit`

- Submit a like for a post
    - `POST /posts/:postId/like`

- Delete a like for a post
    - `POST /posts/:postId/like/delete`

- Access all the posts of a user
    - `GET /users/:userId/posts`

- Submit a search on posts
    - `POST /posts/search`
    - `GET /posts/search`
