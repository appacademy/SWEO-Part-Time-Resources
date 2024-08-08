# React

React is an open-source framework built and managed by Meta (facebook), released in 2013.
It was built in order to remove the need to do DOM manipulation (vanilla js).
It operates using a very efficient Virtual DOM. What this means is that you can create HTML components with Javascript, and react will manage the DOM by comparing it to a virtual dom. If there is a difference between the virtual and the real dom, react will try to replace that components.

## Why React

Because of the tools, because of the popularity, and because (seemingly) everyone knows React, choosing React to power your frontend is an easy choice. Hundreds of thousands of other software developers know and love React. Tens of thousands of companies use React on their websites to power their web applications.

There are other viable modern alternatives to React. However, they are almost all heavily influenced by React's design and implementation. Learning them is like learning React and different parts of its vibrant ecosystem. React has really become the stick by which all other frontend libraries are measured. It will likely continue to hold that position for the near future.

## JSX

While React looks VERYYY similar to HTML, we are not coding in HTML when we use react. We are instead coding in something called JSX! Essentially, it is just javascript that gets translated into plain old Javascript. We use something called `Babel` that converts modern javascript into older javascript. This helps our code using new syntax still maintain some backwards compatability with browsers

Now, Because we are _NOT_ coding in HTML, we have to understand some of the differences.

Firstly, Let's look at some DOM in Javascript.

```js
const hello = <h1>Hello World!</h1>;
```

This is a variable in JS pointing to an HTML Node. We can then append it to the DOM tree and it will become HTML. In this way, we are using Javascript to manage a Virtual Dom, and then we can add it to the real DOM.

In React, we typically create function components (or class based components if you are working with oldschool code)

Let us create a react component using _JSX_ that let's us see a hello world h1 tag

```js
const MyComponent = () => {
  return <h1>Hello World</h1>;
};

export default MyComponent;
```

Notice that it lOOKS like HTML, but it is not. It is Javascript!

So if you try to use REAL HTML attributes like:

`class` -> protected HTML attribute

You will run into bugs. Instead, JSX has to make its own variables since it is not real HTML. We can add a clas to the example above doing this:

```js
const MyComponent = () => {
  return <h1 className="my-class">Hello World</h1>;
};

export default MyComponent;
```

So, because it is just Javascript, we can also do really cool things! No more ugly HTML comments, instead we get the classing Javascript comment syntax.

Also, we can inject Javascript directly into it! We use curly braces to tell React that we want to inject Javascript somewhere. Let's add a button to the component above, and then make a function that will `console.log` "hello world"

```js
const MyComponent = () => {
  const sayHello = () => {
    console.log("hello world");
  };

  return (
    <div>
      <h1 className="my-class">Hello World</h1>
      <button onClick={sayHello}>Say Hello</button>
    </div>
  );
};

export default MyComponent;
```

We can also make dynamic attributes, let's use interplation to change the className to use a variable.

```js
const MyComponent = () => {
  let classColor = "blue";

  const sayHello = () => {
    console.log("hello world");
  };

  return (
    <div>
      <h1 className={`my-class-${classColor}`}>Hello World</h1>
      <button onClick={sayHello}>Say Hello</button>
    </div>
  );
};

export default MyComponent;
```

We will explore ways to make this dynamic on Thursday 🥰

## Props

In react, we typically want to think of things as `components`. Think of it like a piece of the puzzle. The better you get at compartmentalization and making good components, the cleaner your code will be, easier your debugging will be, and more reusable your functions will be. So if we have components, we can pass information from one component to another using PROPS

```js
// Main Component
import SubComponent from "./SubComponent";
const MainComponent = () => {
  const number = 1;
  return (
    <>
      <h1>Hello</h1>
      <SubComponent number={number} name={"james"} />
    </>
  );
};

export default MainComponent;
```

```js
// Sub Component
const SubComponent = ({ number, name }) => {
  return (
    <>
      <span>{number}</span>
      <span>{name}</span>
    </>
  );
};

export default SubComponent;
```

Notice that in the parent, we can use the child. We can also pass data from the parent to the child using `PROPS`. This is where I did `number={number}`

I am declaring key, value pair. The key is `number` and the value is the variable `number`. This allows me to destructure it from the function parameters using `{number}` within the SubComponent. I can then use that destructured value in my code by using `JSX` syntax for injecting javascript, `{number}`. Phew! That all sounds confusing on paper but makes more sense playing around with it.

## Lists

Because React is AWESOME! We can easily make lists using arrays.

We can map over an array and repeat functionality, which helps reduce clutter. Here is a list with `Hello-world-{number}` printed out 100 times.

```js
const ComponentList = () => {
  const list = new Array(100).fill(null);

  return (
    <>
      {list.map((_el, idx) => (
        <div key={idx}>
          <p>{`Hello-World-${idx + 1}`}</p>
        </div>
      ))}
    </>
  );
};

export default ComponentList;
```

### JSX NEED TO KNOWS

Below is some points you NEED to know in order to be successful with react.

1. JSX is NOT HTML
2. JSX can only have one parent.

```js
const MyComponent = () => {
    return (
        <h1 className="hello-world">Hello World</h1>
        <button onClick={sayHello}>Say Hello</button>
    )
}

export default MyComponent;


```

Notice here, we have 2 PARENTS. H1, and Button are both at the same level. We need one parent, and for that reason it is common to use `div` or `React Fragments`. Divs exist in the DOM and therefore may cause some issues if not careful (although this an important tool to know how to use when needed). If instead we want "2 parents" we can use a `React Fragment`.

Here is some Grand-Pa style way of using react fragments:

```js
import React from "react";
const MyComponent = () => {
  return (
    <React.Fragment>
      <h1 className="hello-world">Hello World</h1>
      <button onClick={sayHello}>Say Hello</button>
    </React.Fragment>
  );
};

export default MyComponent;
```

But here is the new way to do things:

```js
const MyComponent = () => {
  return (
    <>
      <h1 className="hello-world">Hello World</h1>
      <button onClick={sayHello}>Say Hello</button>
    </>
  );
};

export default MyComponent;
```

3. JSX does _NOT_ HAVE SELF-CLOSING TAGS. You must include a `/` before the closing angle bracket that does not have a corresponding close tag

Here are some examples:

|   HTML    |    JSX     |
| :-------: | :--------: |
|  `<br>`   |  `<br/>`   |
|  `<hr>`   |  `<hr/>`   |
|  `<img>`  |  `<img/>`  |
| `<input>` | `<input/>` |
| `<link>`  | `<link/>`  |

4. JSX uses camel casing. You can also use dashes for some attributes

Here are some examples of some attributes:

|   HTML    |     JSX     |
| :-------: | :---------: |
|  `class`  | `className` |
|   `for`   |  `htmlFor`  |
| `onclick` |  `onClick`  |
| `aria-*`  |  `aria-*`   |
| `data-*`  |  `data-*`   |

## VITE

There are a lot of tools out there that you can use top set up a react project. For a long time `create-react-app` was VERY popular. It utilized webpack as a bundler, and helped install all the necessary dependencies to get a react app off the ground quickly. For reasons unknown, the maintainer of this package stopped working on `create-react-app`, which opened up a lot of vulnerabilities and outdated practices. The industry has mostly moved away from `create-react-app` though. So if you're watching youtube tutorials (or using AI ... hopefully you are not), you will often be told to use this as a tool, thus exposing your applications to tons of vulnerabilities and deprecated toolings.

Enter `VITE` (pronuces veet: it is French). It uses `Electron` based processing, which helps its scripts run much faster. It is also being actively maintained and allows us to use `npm` versions 18+.

P.S You should all be on `node -v ` 18.0.0

To use `Vite` you can use the following:

With npm:

`npm create vite@latest`

With bun:

`bun create vite`

### Practices

Functional Components - JSX (30 min)

Functional Components - Props (30 min)

Functional Components - Lists (30 min)

# React Navigation and Router

## React Router

So, we have React helping us build a single page application. But so far, we haven't really been working with multiple pages. We learned we can make multiple components, and that we can pass data between them in the form of props. But what about dealing with navigating to new pages?

Enter React Router.

We will be working with React Router V6 (another one of those things that recently came out so a lot of tutorials or online resources will be outdated... hint hint don't try to use AI...)
https://reactrouter.com/en/main

We will need to install `react-router-dom` in order to handle navigation. We can create some routes using:

```js
// App.jsx

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

We can then add some additional routes to that router in the form of objects within the router array.
We use `path` to dictate what route we will need to hit (this is used for navigation purposes), and we use `element` to determine what components or JSX we want to render

_NOTE_ We can use `*` as wild card to match anything of any length. Example:

`/*` -> catch all route

`/spots/*` -> catches anything after /spots.

Not notice with that last example, this would catch ANYTHING. If we did `/spots/hello` it would go to that page, and that may cause issues when we want the actual id of a spot. Just like our routes in the backend, we can still do `/spots/:spotId`. React will auto replace the suffix with a number. We can easily handle these types of edge cases using `children`

```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "teams",
    children: [
      {
        index: true,
        element: <TeamsIndex />,
      },
      {
        path: ":teamId",
        element: <TeamDetails />,
      },
    ],
  },
]);
```

Notice that for our `/teams` route, we have `index`, which is the main page `/teams/`, and `:teamId` which will let us go to `/teams/:teamId`. This gives us better control of route matching to prevent accidentally going to unintended routes, as was often found during the React Router 5 days.

### useParams

If we want to grab the integers from a URL say for example the 1 in `/spot/1` we can use `useParams`

This would look something like this:

```js
import * as React from "react";
import { Routes, Route, useParams } from "react-router-dom";

function ProfilePage() {
  // Get the userId param from the URL.
  let { id } = useParams();
  // ...
}

function App() {
  return (
    <h1>{`rendering spot: ${id}`}</h1>
    //...
  );
}
```

## Outlet

https://reactrouter.com/en/main/components/outlet

Outlets let us account for the case that we may not find a specific route within a path. Sometimes, a user may want to use a very specific path that does not exist, and we may want more like "fallback".

An `<Outlet>` should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

We can add an a `<Outlet>` route that lets us default to a specific element that does not have an `element` assigned to it.

We often can use this as a way to tell React Router that want to continue looking for additional paths that are not exclusively specified in a given path's element

```js
{
  path: '/teams',
  element:
    <>
      <TeamsIndex />
      <Outlet />
    </>,
  children: [
    {
      path: ':teamId',
      element: <TeamDetails />
    }
  ]
}

```

## Links and NavLinks

https://reactrouter.com/en/main/components/link

We can use the `<Link>` component to let us handle navigations. This is the same thing as doing `<a href>`. Links do not do full page loads, although you can use it to do a full page load. They essentially let us change the route, and thus replace the virtual DOM with new virtual DOM elements.

### Relative vs Absolute Paths

The key prop for a `Link` is `to`. We can use this to send us somewhere.

If we were already at a URL path `/teams` we can do:

```js
<Link to="new">Create a Team!</Link>
```

This will then take us to `/teams/new`.

We can also do the same thing by being absolute with it;

```js
<Link to="/teams/new">Create a Team!</Link>
```

_NOTE_ these are still just relative to your project, but absolute within your project's scope.

#### NavLink

We can also use `NavLink` to help us use `Links` with additional functionality.

```js
  <NavLink to='/home'>Home</NavLink>
  <NavLink to='/teams'>Teams</NavLink>
```

A NavLink lets us know if it is active or pending. It will be set to `pending` if the `to` prop matches a URL that is currently loading. This is useful for things like nav bars. We commonly use this when we want to have some sort of change to a Nav Bar icon to show what thing is currently loaded in

_NOTE_ you can only use `Links` and `NavLinks` within the context of RouterProvider.

### React Router - Navigation

We can use a navigation hook `useNavigate` to allow us to manage our navigation across a stack. We have to import it from `react-router-dom` and then it is common to create a variable pointing to the hook

```js
import { useNavigate } from "react-router-dom";

function MyForm() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Do something with the submitted data...
    navigate(`/home`);
  };

  return <form onSubmit={handleSubmit}>{/* The form ... */}</form>;
}
```

Notice here, we are creating a function, and within that function when it is excuted we we will send out route to a path. You can also pass in an optional options object. Say you want to navigate somewhere, but not allow the user to go back to a page. You can do:

```js
navigate("/home", { replace: true });
```

You can also shortcut the navigation to go back by doing:

```js
navigate(-1);
```
