# Practice: React Router

You are going to practice using React Router v5. Although React Router v6 has
been released, it is not yet in wide use, so knowing how to use [v5][router-v5]
is still an important skill. Note that you will probably also want to get
familiar with v6 at some point in your studies.

The ultimate goal of the React Router practices is to create a `nav` bar
where you can choose `Home`, `Stocks`, and `Movies` components. You will be able
to see the actual components and nested components based on the borders created
in `index.css`. Ultimately, you will be able to navigate from one component to
another by clicking on the links in the `navbar`. When you click on the `Movies`
component you will see clickable movie titles. When you click on the titles you
will then see the `MovieDetails` component showing the movie title, image and
description.

For this first practice, you will learn how to setup a Router and create routes
that will allow you to later navigate to different components.

## Setup

Click the `Download Project` button at the bottom of this page to go to the
starter repo, then load the repo into [CodeSandbox].

## Preparation

You should see a list of components for:

1. Home
2. Stocks
3. Movies

Note, in your __package.json__ that you are using the `react-router-dom` version
5 package. This package gives you access to all of the components in React
Router.

Take a look at the code that has already been created in the application. Notice
the hierarchy of your components. Each component is represented by a folder that
holds an __index.js__ inside. This architecture enables you to import each
component by using the relative path to the folder. (Create React App
automatically looks for an __index.js__ when a directory is specified as the
import instead of a file.)

## Router setup

You need to set up your Router to give you access to all of React Router's
features. For this practice you will use
[`BrowserRouter`][router-v5-browserouter] as your Router.

In __src/index.js__, import `BrowserRouter` from `react-router-dom`. Now wrap
your entire application in this `BrowserRouter` component.

Instead of executing this inside the `ReactDOM.render` method, create a separate
`Root` functional component that will return your `BrowserRouter` and nested
`App` component:

```js
const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
```

Now replace the `<App />` inside your `ReactDOM` call with the `Root` component.

You have now given router access to your entire application!

## Route Matching

You now have the ability to create routes using the [`Route`][router-v5-route]
component. This component will mount your components when the correct `path` is
chosen. The syntax for setting up a `Route` looks like this:

```js
  <Route path='your chosen path'>
    <ComponentToRender />
  </Route>
```

Inside your __App.js__, import `Route` from the `react-router-dom` package.

Remove all of the components that are listed in the JSX. You will render these
components using routes.

Next, inside the JSX below the `h1` element, create a route for the `Home`
component by using the `Route` component using the code snippet above as a
guide. As you can see, the `Route` component takes an attribute called `path`.
Using opening and closing `Route` tags, define your first `Route` component with
a `/` for the path. Nest your `Home` component inside the opening and closing
`Route` tags.

Now check your browser. You should only see the `Home` component being rendered
at this point.

Next, do the same for the `Stocks` and `Movies` components, specifying `path`s
of `/stocks` and `/movies`, respectively.

Take a look in your sandbox browser. In the address bar, append `/stocks` to the 
original URL and notice what you see. Now, replace `/stocks` with `/movies`.
Notice that the `Home` component is always mounted? This is not the desired
functionality.

To fix this, add the `exact` attribute inside the `Route` for the `Home`
component. This will signify that the `Home` component should be rendered only
when the exact path matches.

Now test again in the browser. Notice the difference?

## Adding a `Switch` component

Below the other `Route` components, add another `Route` component with no path.
Inside the opening and closing tags, add an `<h1>` tag with the text 'Page Not
Found'.

Now test it in your sandbox browser by appending `/movies` or `/stocks` to the
original URL.

Notice that 'Page Not Found' is always there no matter which component is being
mounted? You cannot use `exact` in this instance because the `Route` has no
`path`.

Instead, import the `Switch` component from `react-router-dom`. Now wrap all of
your `Route` components with a single `Switch` component.

Test again in your sandbox browser. Notice that 'Page Not Found' does not show.

Now test the `Page Not Found` route. Try going to another route by appending
`/potato` to the end of the original URL. Notice that the 'Page Not Found' text
is now rendered.

## What you have learned

**Congratulations!** In this practice you have learned how to

1. Use `BrowserRouter` to enable React Router in the entire application
2. Use the `Route` component to set up paths for components to be mounted
3. Nest components inside the `Route` component to be rendered based
   on the chosen path
4. Add the `exact` attribute to certain paths to enforce strict matching
5. Wrap the `Route` components in a `Switch` component so that React will
   stop at the first matching choice it finds

[CodeSandbox]: https://codesandbox.io
[router-v5]: https://v5.reactrouter.com/web/guides/quick-start
[router-v5-browserouter]: https://v5.reactrouter.com/web/api/BrowserRouter
[router-v5-route]: https://v5.reactrouter.com/web/api/Route