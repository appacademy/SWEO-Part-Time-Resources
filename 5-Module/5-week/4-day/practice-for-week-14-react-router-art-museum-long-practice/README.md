# Art Museum Project

In this project, you will create React components to build a purely frontend
application that displays a list of art galleries. Using the React Router
library, you will enable a user to navigate through the different art galleries
to see images and descriptions of their respective art pieces. The information
about the art galleries will be seeded using data extracted from the [Harvard
Art Museum API].

By the end of the project, you should understand and be able to use the
following React Router components and hook:

* `BrowserRouter`
* `NavLink`
* `Link`
* `Route`
* `Switch`
* `useParams`

You will also learn how to specify unique keys when creating arrays of JSX
elements to render.

## Phase 0: Setup

Here's a breakdown of the steps you'll be taking in this phase (more detailed
instruction below):

1. Create a new React project called `art-museum` using `create-react-app`!
2. `cd art-museum` and then `npm install react-router-dom@^5` for project.
3. Start your development server.
4. Create `<Root>` component.
5. Render `<Root>` component to DOM.
6. Include `<App>` in `<Root>`.
7. Import `<BrowserRouter>` to wrap around `<App>`.
8. Create __data__ folder in __src__ folder.
9. Create __harvardArt.js__ file in __data__ folder and copy contents of seed
   file data.
10. Import `harvardArt` and `console.log` it.

**(1)** Create a new React project called `art-museum` using `create-react-app`
with the template `@appacademy/react-v17` and using `npm`.

If you have not already installed a global version of create-react-app, do so
now:

```bash
npm i -g create-react-app
```

Once you have create-react-app installed, create your project:

```bash
npx create-react-app art-museum --template @appacademy/react-v17 --use-npm
```

This command may take a while to run because it should automatically run
`npm install` for you. Take the time to read ahead while this is running.

**(2)** Once the above command finishes, `cd art-museum` and then `npm install
react-router-dom@^5` to install the React Router library.

**(3)** Start your development server by running:

```bash
npm start
```

You should see "Hello from App" when you navigate to [http://localhost:3000].

### `Root` component

Now you'll format the entry file for the React application to render a `<Root>`
component instead of the `<App>` component.

**(4)** In your entry file, __src/index.js__, create a functional component
called `Root`. Return `<h1>Hello from Root</h1>` from this component.

**(5)** In the `ReactDOM.render` function, render the `<Root>` component instead
of the `<App>` component. `ReactDOM.render` takes in two arguments: The first is
a React element, and the second should be an actual HTML DOM element to nest the
rendered React elements. Remember, React elements are **not real** HTML DOM
elements. In the background, React takes the rendered React elements and turns
them into actual HTML DOM elements.

If you refresh at [http://localhost:3000], you should see the text, "Hello from
Root" instead of "Hello from App". Take a look at the HTML elements tree in your
browser's development tools (under the "Elements" tab). You should see an `h1`
tag with the text "Hello from Root" underneath a `div` with an `id` of `"root"`.
This `div` is the element selected to render the `<Root>` component when
`ReactDOM.render` was invoked. The `h1` element is the actual element created
by React when rendering the `<Root>` component.

**(6)** Instead of rendering the `<h1>Hello from Root</h1>` inside of the `Root`
component, render the imported `App` component. Now if you refresh at
[http://localhost:3000], you should see "Hello from App" again, **not** "Hello
from Root".

The purpose for the `Root` component is to wrap the `App` component with any
**Providers** that can give your React app more functionality. `BrowserRouter`
from the React Router library is a provider you'll be using in all your App
Academy React projects to simulate navigation in a single page app.

**(7)** In your __index.js__ file, import `BrowserRouter` from
`react-router-dom` and wrap the `App` component (found in your `<Root>`
component) with the `BrowserRouter` component.

Your `Root` component should now look like this:

```js
function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
```

If you refresh at [http://localhost:3000], you should still see the text, "Hello
from App".

### Art Gallery Data

**(8)** Make a folder in __src__ called __data__.

__(9)__ To contain the art data, create a file called __harvardArt.js__ inside
the newly created __data__ folder. You can run the following command from the
root of your project, in the __art-museum__ directory.

```sh
curl https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/react-redux/topics/intro-to-react/projects/art-museum/harvardArt.js > src/data/harvardArt.js
```

Take a look at the imported data. Note the structure of the object and the
export statement at the bottom of the file!

**(10)** Import the exported object from this file into __src/App.js__ and name
the object `harvardArt`. `console.log` the `harvardArt` object. Go to
[http://localhost:3000] and open the browser's Dev Tools console. There you
should see the printed `harvardArt` object. The `records` key in that object is
an array of information on Harvard's art galleries. The `objects` key in each
art gallery is an array of information on the gallery's art pieces. You'll be
using this data throughout this project, so get familiar with the structure of
this data!

You can remove the `console.log`.

## Phase 1: GalleryNavigation

Here's a breakdown of the steps you'll be taking in this phase (more detailed
instruction below):

1. Create __src/components__ folder.
2. Create __src/components/GalleryNavigation__ folder and add __index.js__ file
   to this folder.
3. Create `<GalleryNavigation>` component.
4. Export `<GalleryNavigation>` and include it inside of `<App>`.
5. Pass `harvardArt.records` to `<GalleryNavigation>` as prop `galleries`.
6. Receive `galleries` prop (using destructuring) to `<GalleryNavigation>`
   component.
7. Investigate (with `debugger` and/or `console.log`) the value of `galleries`
   prop.
8. Add `<NavLink>` to `<GalleryNavigation>` component.
9. Add `<nav>` element to `<GalleryNavigation>` to contain other elements.
10. Create component containing `<NavLink>` for each gallery object.
11. Create __src/components/GalleryNavigation/GalleryNavigation.css__.
12. Make CSS styles for `.active` elements.
13. Import __GalleryNavigation.css__ in `<GalleryNavigation>` component file.

The first React component you'll be creating and rendering in the `App`
component is the `GalleryNavigation` component. This component should be
rendered at every route in the application. It will render links to detail pages
for every art gallery.

**(1)** Make a __components__ folder in __src__. This folder will hold all your
React components besides `App` and `Root`.

**(2)** Make a folder called __GalleryNavigation__ in the __components__ folder
with an __index.js__ file.

**(3)** In this file, define a React functional component named
`GalleryNavigation`. Render an `h1` element with the text "Galleries".

**(4)** Export the component from the file (using `export default`). Import the
component into __App.js__ and render it instead of `<h1>Hello from App</h1>`.

Refresh [http://localhost:3000]. If you see "Galleries" displayed on the page,
then you successfully rendered a new component in `App`!

The `GalleryNavigation` component needs to have access to the names and ids of
the galleries. The galleries data is in the __App.js__ file, and the best way to
pass in that data into the `GalleryNavigation` component is through its props.

**(5)** From __App.js__, pass in a `galleries` prop into the `GalleryNavigation`
component with the value of `harvardArt.records`.

**(6)** Destructure `galleries` from the props of `GalleryNavigation`, i.e., the
first argument of `GalleryNavigation`.

**(7)** Put a `debugger` or `console.log(galleries)` at the top of the
`GalleryNavigation` component to test if you passed down the `galleries` prop
correctly. Refresh [http://localhost:3000]. When you open up your browser's dev
tools console, `galleries` in `GalleryNavigation` should be an array of art
galleries.

**(8)** Add a `NavLink` to the `GalleryNavigation` component that directs users
to the home page, `/` route. The `<NavLink>` can be imported from the
`react-router-dom` library. [Check out its documentation][navlink]!

**(9)** Since there are now two components in your `<GalleryNavigation>`
component, you should wrap the `<h1>` and `<NavLink>` components in a
`<nav>` (lowercase n!).  A `<div>` would also work, but we recommend `<nav>` for
semantic reasons.

**(10)** Next, from each element in the array of art galleries, create a
`NavLink` component that will direct the users to a `/galleries/:galleryId`
route where `:galleryId` is replaced with the art gallery's id. The text inside
of the `NavLink` should be the gallery's name.

Tips for Step 10:

* Remember to use your instructional resources! Raise your hand on Progress
  Tracker!
* You want to make use of the `galleries` array you have as a prop in
  `<GalleryNavigation>`.
* Putting curly braces `{}` in your JSX templates lets you execute any
  JavaScript you want.
* The `to` property for each `<NavLink>` should be
  `/galleries/[insert the gallery.id here]`.
* BIG HINT: You can use `.map` off of your `galleries` array to create a React
  component out of each member of the `galleries` array.

This will be one of your first brushes with the [React `key` prop][key]. You
will need to provide a key prop whenever you create components using `.map`.
Usually you will provide the `.id` of your data object (or some other unique
attribute).

Make sure that there is a link to the home page and links to each of the
galleries in the navigation bar.

### `NavLink`'s active class

`NavLink`s make it easy to show when a link's path matches the current route.
You are going to take advantage of this capability to boldface the `NavLink`'s
text for the current route.

**(11)** Create a __GalleryNavigation.css__ file in the __GalleryNavigation__
folder.

**(12)** Add styling to boldface elements with the class "active", i.e.,
`.active`. `.active` is the default active class for `react-router-dom`'s
`<NavLink>` elements.

**(13)** Import the __GalleryNavigation.css__ file at the top of the
`GalleryNavigation` component file. (See __src/index.js__ to see how to import
CSS files into a `create-react-app` JavaScript file.)

In the browser, you should see the active route in boldface in the navigation
bar. Make sure that the `NavLink` to the home page is bolded only at the `/`
route.

[http://localhost:3000]: http://localhost:3000
[Harvard Art Museum API]: https://www.harvardartmuseums.org/collections/api
[navlink]: https://v5.reactrouter.com/web/api/NavLink
[key]: https://reactjs.org/docs/lists-and-keys.html