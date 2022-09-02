# Practice: Nesting

In this practice you will

- Dynamically create nested routes
- Use React Router's `useParams` hook to access path variables

## Setup

Click the `Download Project` button at the bottom of this page to go to the
starter repo, then load the repo into [CodeSandbox].

## Preparation

In your browser you should see an `h1` with the text 'App Component'. You should
also see a Navbar with four links. When you click on the links they should
render the component below them.

Take a look at the code provided in the starter __src__ directory. Much of it
should be familiar from the previous router practices, but two new elements have
also been added: a new component--`MovieDetails`--and a __data__ folder. The
file in the __data__ folder, __movieData.js__, contains a named variable
assigned to an array of objects. You will use the data in this file since you
have no database.

The goal of this project is to be able to list the movie titles provided in
__movieData.js__ and to obtain the specific details for any particular movie
using dynamic nested routing.

## Creating a dynamically-generated nested route in your `Movies` component

In __App.js__, import the `movies` array that is located in the
__data/movieData.js__ file. There is a `Route` in your __App.js__ that
mounts the `Movies` component. Add the `movies` data as props with the name
`movies` to the `Movies` component. Then in your `Movies` component destructure
the props variable in the parameters.

Go to the React DevTools in your sandbox browser and click on the `Movies`
component. (For now, just ignore all of the `.Provider` and `.Consumer` stuff.)
In your `Movies` component, under `props`, you should now see the array of
movies that you passed as props.

Back to __components/Movies/index.js__, under the `h1` element, create a route
that renders the `MovieDetails` component. The route should have a path of
`/movies/:movieId`. The `/:movieId` represents a variable for the parameter that
you will be sending in the URL. In this case it will be the id of the movie that
the user clicks on. (Also, go ahead and wrap your `Route` in a `Switch`
component to make it easier to add more `Route`s later.)

Next, create a `nav` element underneath the `h1` tag. Inside the `nav`, map
through the `movies` prop. Return a `NavLink` for each movie. The URL for the
`NavLink` should start with `/movies` followed by a `/` and the actual `id` of
the single movie. Use the `id` that you receive from each mapped movie object as
the `movieId`. The clickable text that the user sees for the `NavLink` should
be set dynamically to the title of the movie.

> Hint, hint - Did you remember your imports?

Each time you click a link you should now see the `MovieDetails` component with
the `h1` text "MovieDetails Component" in the browser beneath the NavBar. You
should also see the movie id change in the URL address bar.

Well done! You've just created a dynamically-generated nested route inside your
`Movies` component.

## Rendering movie details with `useParams`

It's now time to add the movie details for each component.

In __Movies/index.js__, pass your `movies` prop to the `MovieDetails` component
as `movies` inside your `Route`. Check your React DevTools as you did before.

Now you will use the [useParams][use-params] hook. This hook will allow you to
capture the movie id from the URL.

Inside the `MovieDetails` function, create a destructured `movieId` variable and
assign it to an invoked useParams hook.

```js
const { movieId } = useParams();
```

Now `console.log` the `movieId` variable and take a look in the sandbox
browser console to see if that number changes when you click on a different
movie.

You currently have the id of the movie you want and you have the list of movies
as props.

Create a variable called `movieChoice` and use the `.find` method to compare the
two id's. This will select the one movie object you are looking for. (**Hint**:
Make sure you use `===` and check that both ids are the same datatype.)

Next, in your JSX, replace the text in your `h1` element with the `title` of
the movie, and a `p` element with the description of the movie. Check your
data for the proper key/value choices.

## What you have learned

**Congratulations!** In this practice you have learned how to

1. Create nested routes
2. Generate routes dynamically
3. Use the `useParams` hook to grab parameters from the URL

[CodeSandbox]: https://www.codesandbox.io
[use-params]: https://reactrouter.com/web/api/Hooks/useparams