# Advanced Phase 11: Pagination Middleware

Create an Express middleware that will convert the request's `page` and `size`
query parameters that save the `limit` and `offset` query options and can be
added to any query in any subsequent middleware.

Create a directory called `utils/` in the `server/` directory. There, you should
create a file where you can write pagination middleware and export it to be used
by any route handler in your application.
