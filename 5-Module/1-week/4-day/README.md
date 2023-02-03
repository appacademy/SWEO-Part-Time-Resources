# Router - Oh, the Pages You'll Go! 🐱 📥 🎩

## Frontend vs Backend Routes

### Backend

-   Routes that you will hit from within your code
-   If the route begins with `/api`, it's a backend route!
-   A user will NEVER directly interact with backend routes
-   We used Express to implement backend routes

### Frontend

-   Routes that your users will hit in their browser
-   Can follow any route pattern you decide for your own organization
-   Hitting a frontend route will often trigger one or more calls to backend routes!
-   We'll be using React Router to implement frontend routes

## BrowserRouter and Route

Much like props, we "pass down" the ability to navigate to routes

So, `BrowserRouter` must wrap our App for routes to be accessible everywhere

```js
// many different setups/locations for this code
<BrowserRouter>
    <App />
</BrowserRouter>
```

To specify a route, wrap your components with `Route` and pass a `path` as a prop

```html
<Route path="/">
    <Home />
</Route>
<Route path="/login">
    <LoginForm />
</Route>
<Route path="/signup">
    <SignUpForm />
</Route>
<Route path="/friends">
    <FriendsList />
</Route>
```

When the user goes from Home to Friends, we just switch to display the `<FriendsList />` component.

-   This is a rerender, and no reloading is required!

Like Express, `Route` pattern matches the path and serves the component that matches

Unlike Express, `Route` will show ALL components that match the route pattern

Let's say we had this setup:

```js
// Home.js
...
return (
	<h1>This is the homepage</h1>
)

// LoginForm.js
...
return (
	<h1>This is the login form</h1>
)
```

Going to `/` in the browser would show

```md
This is the homepage
```

But going to `/login` in the browser would show

```md
This is the homepage
This is the login form
```

This is because `/` and `/login` both have the path pattern of `/`

And going to `/login/literally/any/subsequent/path` in the browser would show

```md
This is the homepage
This is the login form
```

Because `/`, `/login`, and `/login/anything/else` also all have the path pattern of `/`

### To prevent this behavior, we can use `exact`

```html
<Route exact path="/">
    <Home />
</Route>
<Route exact path="/login">
    <LoginForm />
</Route>
<Route exact path="/signup">
    <SignUpForm />
</Route>
<Route exact path="/friends">
    <FriendsList />
</Route>
```

Now `/` looks like

```md
This is the homepage
```

And `/login` looks like

```md
This is the login form
```

## But what about Route Parameters? (`/:userId`)

Also just like Express, React gives us easy access to route params.

Unlike Express, we have to import a function to access them

```js
// Express
const { userId } = req.params;

// React
const params = useParams(); // 'params' can be 'banana'
const { userId } = params;
```

The route setup is also just like an Express route

```html
<Route exact path="/users/:userId">
    <Profile />
</Route>
```

`exact` does not conflict with using route params

## `Switch` vs `exact`

Wrapping your routes with `<Switch>` will only render one page at a time

This seems to fix our previous problem that we solved with `exact`, but let's take a closer look

Switch will try to find a matching path, and display the content of the first path it finds

```html
<Switch>
    <Route path="/">
        <Home />
        <!-- contains "Home Page" -->
    </Route>
    <Route path="/users">
        <Users />
        <!-- contains "Users Page" -->
    </Route>
    <Route path="/users/photos">
        <UsersPhotos />
        <!-- contains "Users Photos" -->
    </Route>
</Switch>
```

If we navigate to `/users`, we will see "Users Page", as you might expect

However, if we navigate to `/users/photos`, we'll **_still_** see "Users Page" and **_not_** "Users Photos"

This is because our url matches the path pattern of `/users`

So, using either `exact`, `<Switch>`, or a combination of the two will depend on what your application needs

---

## `useHistory()`

Another way to handle page redirection

Two main methods:

```js
import { useHistory } from 'react-router-dom';

const Example = () => {
    const history = useHistory();
    const clickFunc = () => history.push('/path/to/redirect/to');
    const otherClickFunc = () => history.replace('/path/to/redirect/to');
};
```

Think of your page history like an array, with each new page being added to the end of the array

```js
// Browser's history array
const chromeWebHistory = ['...', 'reddit.com/r/Coding', 'youtube.com/lofi'];
```

The last element in the array is the page we're currently on

`history.push()` adds to the end of the array, changing the page we're currently on

```js
// Starting history
['reddit.com/r/Coding', 'youtube.com/lofi'];

history.push('developer.mozilla.org');

// Ending history
['reddit.com/r/Coding', 'youtube.com/lofi', 'developer.mozilla.org'];
```

Now we're on MDN, and clicking the back button will take us to Lofi music

`history.replace()` replaces the end of the array, changing the page we're currently on

```js
// Starting history
['reddit.com/r/Coding', 'youtube.com/lofi'];

history.replace('developer.mozilla.org');

// Ending history
['reddit.com/r/Coding', 'developer.mozilla.org'];
```

Now we're on MDN, and clicking the back button will take us to a Coding subreddit