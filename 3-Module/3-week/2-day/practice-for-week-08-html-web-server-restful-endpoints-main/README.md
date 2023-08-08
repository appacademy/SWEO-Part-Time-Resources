# Exercise: HTML Web Server RESTful Endpoints

In this exercise, you will be determining RESTful endpoints for an HTML web
server based on the given scenarios.

## Set up

Clone the exercise from the [starter].

## Conventions for RESTful Endpoints for an HTML web server

The following tables show the conventions for RESTful Endpoints of a traditional
HTML web server:

| Path Pattern                     | HTTP Verb | Meaning                                                               |
| -------------------------------- | --------- | --------------------------------------------------------------------- |
| /resource-name                   | GET       | Index page: Get an HTML-based list of the resource                    |
| /resource-name/new               | GET       | Create form page: Show a form to create a new record for the resource |
| /resource-name                   | POST      | Submit create form: Create a new record for the resource              |
| /resource-name/:record-id        | GET       | Detail page: See the details of the specified record                  |
| /resource-name/:record-id/edit   | GET       | Edit form page: Show the edit form for the specified record           |
| /resource-name/:record-id        | POST      | Submit edit form: Update the specified record                         |
| /resource-name/:record-id/delete | POST      | Submit delete form: Delete the specified record                       |

For Nested Resources:

| Path Pattern                                  | HTTP Verb | Meaning                                                                                                      |
| --------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------ |
| /resource-name/:record-id/nested-resource     | GET       | Index page: Get an HTML-based list of the nested resource related to the specified record                    |
| /resource-name/:record-id/nested-resource/new | GET       | Create form page: Show a form to create a new record for the nested resource related to the specified record |
| /resource-name/:record-id/nested-resource     | POST      | Submit create form: Create a new record for the nested resource related to the specified record              |
| /nested-resource/:nested-record-id            | GET       | Detail page: See the details of the specified nested resource's record                                       |
| /nested-resource/:nested-record-id/edit       | GET       | Edit form page: Show the edit form for the specified nested resource's record                                |
| /nested-resource/:nested-record-id            | POST      | Submit edit form: Update the specified nested resource's record                                              |
| /nested-resource/:nested-record-id/delete     | POST      | Submit delete form: Delete the specified nested resource's record                                            |

## Instructions

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
  - `POST /form`
  - `POST /contact-form`
- Access the posts page
  - `GET /posts`
- Access the edit page for a post
  - `GET /posts/:postid/edit`
- Access the create page for a post
  - `GET /posts/new`
  - `GET /posts/create`
  - `GET /posts/create-page`
- Create a new user
  - `POST /users`
  - `POST /users/new`
  - `POST /users/create`
- Log In
  - `POST /user`
  - `POST /user/login`
  - `POST /main`
  - `POST /currentUser`
  - `POST /login`
- Log Out
  - `POST /user/logout`
  - `POST /user`
- Access the comments for a post page
  - `GET /posts/:post-id/comments`
- Access the create page for a post's comment
  - `GET /posts/:post-id/comments/new`
  - `GET /posts/:post-id/comments/create`
  - `GET /posts/:post-id/comments/create-page`
- Access the edit page for a comment
  - `GET /comments/:comment-id/edit`
- Submit a like for a post
  - `POST /posts/:post-id/likes/new`
  - `POST /posts/:post-id/like`
- Delete a like for a post
  - `DELETE posts/:post-id/likes/:likes-id/delete`
  - `DELETE posts/:post-id/likes/:likes-id`
- Access all the posts of a user
  - `GET users/:userid/posts`
- Submit a search on posts
  - `POST /search/posts`
  - `GET /search/posts?name=%&date=%
// queries
// parameters

[starter]: https://github.com/appacademy/practice-for-week-08-html-web-server-restful-endpoints
