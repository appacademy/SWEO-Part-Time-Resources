## Express Router

Express Routers allow us to direct traffic into different parts of our application. This enables us to have a more organized file structure, making it much easier to develop and maintain. Instead of all requests being handled in app.js, we can handle user requests in user.js, dog requests in dog.js, and so on.

Express Router is available through Express, no extra install required. We must remember to export our router and the bottom of the file so we can import it into app.js

```js
// a file that is not app.js
const express = require('express');

const router = express.Router();

/* Routing code goes here */

module.exports = router;
```

Routers are commonly stored in a "routes" folder. Within that folder you create a file to handle your routes. To create a route, do as we normally would with app.methodName(), but use router instead.

```js
// routes/albums.js

// url: localhost:5000/albums
router.get('/', (req, res) => {});

// url: localhost:5000/albums/2
router.post('/:albumId', (req, res) => {});
```

Finally, in app.js, we import our routers and `app.use()` them. The syntax is similar to `express.static()`, the first argument is the url path the user should type into the browser, the second is the router we've created.

```js
// app.js
const express = require('express');

const albums = require('./routes/albums');

const app = express();

app.use('/albums', albums);
```

Just like with `express.static()`, the url path Does Not have to match the file we're routing from. It's simply the convention and tends to be easier to work with.

```js
// same app.js

app.use('/musicalCollection', albums);
```

---
## Serving Static Files

### Static vs Dynamic

- Dynamic: handling a request through app.methodName(), "manually" deciding what happens
- Static: serving a file "as-is"

In express, we can serve static files using `express.static`

```js
express.static('locationOfTheFile');
```

To tell our app to use this:

```js
app.use(path, express.static('locationOfTheFile'));
// or
app.use(express.static('locationOfTheFile'));
```

Passing no path to `app.use()` will have the file be served from the root of the url, ie. localhost:5000

If we specify a path, the files from `express.static()` will be served from that path in the url, regardless of where they actually are in the file

```md
# File structure

-outer
--- file1.js
--- inner
------- file2.js
```

```js
app.use('/inner', express.static("outer"))

GET localhost:5000/inner/file1.js // 200
GET localhost:5000/inner/file2.js // 404
```

## Using an absolute path for production

When your application is ready for production, you can't be 100% sure the express server will launch from within your application. This will cause our file paths to get messed up.

Thankfully, we can use an _absolute path_

```js
const path = require('path');

app.use('/inner', express.static(path.join(__dirname, 'outer')));
```

We will need to import `path`, which is available to us by default in Node (so no npm install required). Then we join our file's path to `__dirname`, which is just the folder that the server starts in.


