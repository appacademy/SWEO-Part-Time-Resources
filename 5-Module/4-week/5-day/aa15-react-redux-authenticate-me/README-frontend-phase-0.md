# Phase 0: Choose Your Path

If you want to set up Redux from scratch, follow Method 1. Otherwise, you can
follow Method 2, which will allow you to set up Redux easily. (To go to Method
2, just search for it within this page.)

## Method 1: Set up Redux from scratch

From inside your __frontend__ folder, clone App Academy's standard React18 Vite
template to initialize a React application:

```bash
npx tiged appacademy/aa-react18-vite-template .
```

Change the `name` of the app in __package.json__ to `"authenticate-me"`.
Similarly, change the `title` in __index.html__ to `Authenticate Me`.

### Dependencies

In the __frontend__ folder, `npm install` the following packages as
dependencies:

- `js-cookie` - extracts cookies
- `react-redux` - React components and hooks for Redux
- `react-router-dom` - routing for React
- `redux` - Redux
- `redux-thunk` - Redux thunk

`npm install -D` the following packages as dev-dependencies:

- `redux-logger` - log Redux actions in the browser's DevTools console

### Setting up the Redux store

First, setup your Redux store. Make a folder in __frontend/src__ called `store`
and add a __store.js__file. (You can make an __index.js__ file to import and
export the store if you wish.) In this file, import `createStore`,
`combineReducers`, `applyMiddleware`, and `compose` from the `redux` package.
Import `thunk` from `redux-thunk`.

```js
// frontend/src/store/store.js

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
```

Create a `rootReducer` that calls `combineReducers` and pass in an empty object
for now.

```js
// frontend/src/store/store.js

// ...
const rootReducer = combineReducers({

});
```

Initialize an `enhancer` variable that will be set to different store enhancers
depending on whether the Node environment is `development` or `production`.

In production, the `enhancer` should only apply the `thunk` middleware.

In development, you should also apply the `logger` middleware and the Redux
DevTools' `compose` enhancer. To use these tools, create a `logger` variable
that uses the default export of `redux-logger`. (You will need to `await` a
_dynamic import_ for this.) Then, grab the Redux DevTools compose enhancer with
`window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__` and store it in a variable called
`composeEnhancers`. You can use an __or__ (`||`) to keep the Redux's original
`compose` as a fallback in case the Redux DevTools are not installed. Then set
the `enhancer` variable to the return of the `composeEnhancers` function passing
in `applyMiddleware` invoked with `thunk` then `logger`.

```js
// frontend/src/store/store.js

// ...
let enhancer;
if (import.meta.env.MODE === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}
```

Next, create a `configureStore` function that takes in an optional
`preloadedState`. Return `createStore` invoked with the `rootReducer`, the
`preloadedState`, and the `enhancer`.

```js
// frontend/src/store/store.js

// ...
const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};
```

Finally, export the `configureStore` function at the bottom of the file as the
default export. This function will be used by __main.jsx__ to attach the Redux
store to the React application.

```js
// frontend/src/store/store.js

// ...
export default configureStore;
```

### Redux `Provider`

In your React application, you'll be using `Provider` from Redux to provide the
Redux store. Import this component and the `configureStore` function that you
just wrote in __frontend/src/store/store.js__ into __frontend/src/main.jsx__.

Your __main.jsx__ imports should now look something like this:

```js
// frontend/src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './store';
```

Create a variable to access your store and expose it on the `window`. **It
should not be exposed in production; make sure this is only set in
development.**

```js
// frontend/src/main.jsx

// ...
const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}
```

Next, wrap the rendered `App` component in Redux's `Provider` component, passing
`store` as a prop of the same name to `Provider`.

```js
// frontend/src/main.jsx

// ...
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

Congratulations, you have finished Method 1! You may now skip to the "Test the
Redux store setup" section below. (Just scroll through Method 2; it's not long.)

## Method 2: Use the Redux template

From inside your __frontend__ folder, clone App Academy's standard React 18
Redux Vite template to initialize a React application:

```bash
npx tiged appacademy/aa-react18-redux-vite-template .
```

Change the `name` of the app in __package.json__ to `"authenticate-me"`.
Similarly, change the `title` in __index.html__ to `Authenticate Me`.

You will also need to install `js-cookie` as a dependency. This dependency will
allow your frontend to extract cookies from the browser.

```sh
npm install js-cookie
```

## Test the Redux store setup

**From this point, Method 1 and Method 2 have the same instructions.**

Test your Redux store setup by starting your React frontend server (run `npm run
dev` in your __frontend__ folder) and navigate to [http://localhost:5173].

Check to see if your Redux DevTools was successfully connected and if there is
a `store` on the `window` in your browser's DevTools console.

You can ignore the "Store does not have a valid reducer" error. This error is a
result of not passing anything into the `rootReducer`'s `combineReducer`.

Try to dispatch an action from your browser's DevTools console. Make sure to
include a `type` key in the action that you dispatch.

```js
store.dispatch({ type: 'hello' })
```

![test-redux-store-image]

If you cannot dispatch an action or if you cannot see the action in the Redux
DevTools, check the syntax in your __frontend/src/store/store.js__ and in your
__frontend/src/main.jsx__.

**Now is a good time to commit your initial set up!**

## Wrapping `fetch` requests with CSRF

Your Express backend server is configured to be CSRF protected and will only
accept requests that have the right CSRF secret token in a header and the right
CSRF token value in a cookie.

First, you need to add a `"proxy"` in your __frontend/vite.config.js__ file. In
the function being passed to `defineConfig`, add a `server` key after the
`plugins` key. The `server` key should point to an object with a `proxy` key
pointing to another object. The `proxy` object defines proxies by specifying the
routes to be proxied as keys and the urls to which they should be redirected as
the values. Set a proxy to send `/api` routes to `http://localhost:8000` (or
wherever you are serving your backend Express application).

This proxy will force the frontend server to act like it's being
served from the backend server. So if you do a `fetch` request in the React
frontend like `fetch('/api/csrf/restore)`, then the `GET /api/csrf/restore`
request will be made to the backend server instead of the frontend server.

The proxy in __frontend/vite.config.js__ should now look like this:

```js
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    eslint({
      lintOnStart: true,
      failOnError: mode === "production"
    })
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:8000'
    },
  }
}));
```

> **Note:** If your application is running, Vite should restart your server once
> you modify this file. If for some reason it doesn't, restart it manually.

Next, to make `fetch` requests with any HTTP verb other than `GET`, you need to
set an `XSRF-TOKEN` header on the request. The value of the header should be
set to the value of the `XSRF-TOKEN` cookie. To do this, you are going to wrap
the `fetch` function on the `window` that will be used in place of the default
`fetch` function.

Add a __csrf.js__ file to the __frontend/src/store__ folder. Import `Cookies`
from `js-cookie`; you will use `Cookies` to extract the `XSRF-TOKEN` cookie
value. Define an `async` function called `csrfFetch` that will take in a `url`
parameter and an `options` parameter that defaults to an empty object. If
`options.headers` is not set, default it to an empty object. If `options.method`
is not set, set it to the `GET` method. If it is any method other than a `GET`
method, set the `XSRF-TOKEN` header on the `options` object to the extracted
value of the `XSRF-TOKEN` cookie. Call and `await` the `window.fetch` with the
`url` and the `options` object to get the response.

If the response status code is 400 or above, `throw` the response as the error.
Otherwise, return the response.

Export the custom `csrfFetch` function. Your __csrf.js__ file should now look
something like this:

```js
// frontend/src/store/csrf.js

import Cookies from 'js-cookie';

export async function csrfFetch(url, options = {}) {
  // set options.method to 'GET' if there is no method
  options.method = options.method || 'GET';
  // set options.headers to an empty object if there is no headers
  options.headers = options.headers || {};

  // if the options.method is not 'GET', then set the "Content-Type" header to
  // "application/json", and set the "XSRF-TOKEN" header to the value of the
  // "XSRF-TOKEN" cookie
  if (options.method.toUpperCase() !== 'GET') {
    options.headers['Content-Type'] =
      options.headers['Content-Type'] || 'application/json';
    options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
  }
  // call the default window's fetch with the url and the options passed in
  const res = await window.fetch(url, options);

  // if the response status code is 400 or above, then throw an error with the
  // error being the response
  if (res.status >= 400) throw res;

  // if the response status code is under 400, then return the response to the
  // next promise chain
  return res;
}
```

## Restore the XSRF-TOKEN cookie

In development, the backend and frontend servers are separate. In production
though, the backend also serves up all the frontend assets, including the
__index.html__ and any JavaScript files in the __frontend/build__ folder after
running `npm run build` in the __frontend__ folder.

In production, the `XSRF-TOKEN` will be attached to the __index.html__ file in
the __frontend/dist__ folder. In the __backend/routes/index.js__ file, serve
the __index.html__ file at the `/` route and any routes that don't start with
`/api`. Along with it, attach the `XSRF-TOKEN` cookie to the response. Serve the
static files in the __frontend/dist__ folder using the `express.static`
middleware.

```js
// backend/routes/index.js
// ... after `router.use('/api', apiRouter);`

// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  // Serve the frontend's index.html file at the root route
  router.get('/', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'dist', 'index.html')
    );
  });

  // Serve the static assets in the frontend's build folder
  router.use(express.static(path.resolve("../frontend/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });
}

// ...
```

In development, you need another way to get the `XSRF-TOKEN` cookie on your
frontend application because the React frontend is on a different server than
the Express backend. To solve this, add a backend route, `GET /api/csrf/restore`
in the same file that can be accessed only in development and will restore the
`XSRF-TOKEN` cookie.

```js
// backend/routes/index.js
// ...

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== 'production') {
  router.get('/api/csrf/restore', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.json({});
  });
}

// ...
```

Back in the React frontend, this `GET /api/csrf/restore` route needs to be
called when the application is loaded.

Define and export a function called `restoreCSRF` in the
__frontend/src/store/csrf.js__ that will call the custom `csrfFetch` function
with `/api/csrf/restore` as the `url` parameter.

```js
// frontend/src/store/csrf.js

// ...
// call this to get the "XSRF-TOKEN" cookie, should only be used in development
export function restoreCSRF() {
  return csrfFetch('/api/csrf/restore');
}
```

In the frontend entry file (__frontend/src/main.jsx__), call the `restoreCSRF`
function when in development before the call to `render`. Also, attach the
custom `csrfFetch` function onto the `window` when in development as
`window.csrfFetch`.

```js
// frontend/src/main.jsx

// ... other imports
import { restoreCSRF, csrfFetch } from './store/csrf';

// ... const store = configureStore();

if (import.meta.env.MODE !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
}
```

### Test custom `csrfFetch` with CSRF

To test the custom `csrfFetch` function that attaches the CSRF token to the
header, navigate to root route of the React application,
[http://localhost:5173]. In the browser's DevTools console, make a request to
`POST /api/test` with the demo user credentials using the `window.csrfFetch`
function. There is no need to specify the headers because the default header for
`"Content-Type"`, set to `"application/json"`, and the `"XSRF-TOKEN"` header are
added by the custom `csrfFetch`.

```js
csrfFetch('/api/test', {
  method: 'POST',
  body: JSON.stringify({ credential: 'Demo-lition', password: 'password' })
}).then(res => res.json()).then(data => console.log(data));
```

If you see an object with a key of `requestBody` logged in the terminal with the
value as the object that you passed into the body of the request, then you
successfully set up CSRF protection on the frontend. If you don't, then check
your syntax in the __frontend/src/store/csrf.js__ and the
__frontend/src/main.jsx__.

You can now remove the `POST /api/test` test route in your backend code, as you
won't be needing it anymore.

At this point, you have completed all of the frontend setup. **Commit your
code!**

Now it's time to render some React components!

[test-redux-store-image]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/react-redux/topics/react-redux-auth/authenticate-me/assets/test-redux-store-setup.png
[http://localhost:5173]: http://localhost:5173
