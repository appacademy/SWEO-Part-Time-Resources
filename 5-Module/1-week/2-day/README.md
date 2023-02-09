# React

## MPA vs SPA

`Multi Page App` - **_reloads the page_** every time content changes

-   Going from "Home" to "Subscriptions"
-   Submitting a comment
-   Uploading a photo

`Single Page App` - **_rerenders the page_** every time content changes

-   Much faster page loading times
-   No waiting for database to update for the user's content to update
-   React is an `SPA` framework

## Wait...What's a DOM again?

The `DOM` is the `D`ocument `O`bject `M`odel

-   A representation of the page's content as an object
-   Allows devs to easily interact with the webpage

## React Rerendering

Instead of directly making changes to the DOM, React constructs a `Virtual DOM` and makes changes to that instead

-   A "copy" of the real DOM
-   Changes made through React will change our Virtual DOM
-   To rerender:
    -   Compares DOM and Virtual DOM
    -   DOM updates with the changes ONLY
        -   Known as "Reconciliation"
    -   The updated DOM is "repainted" on the browser

## ReactDOM.render

ReactDOM.render takes a Virtual DOM node and a real DOM node

```js
// virtualNode is any React element
// realNode is a real HTML element
ReactDOM.render(virtualNode, realNode);
```

### We want our entire app to be rendered through React, so this is a common setup

```js
// index.html
...
<div id="root"></div>
...

//--------------------------------------

// App.js
const App = () => {
  return (
    // <SomeOtherThings />
  )
}
export default App;

//--------------------------------------

// index.js
ReactDOM.render(
  <SomeOtherThings>
    <App />
  </SomeOtherThings>,
  document.getElementById('root')
);
```

---

## Function Components

Just a function that returns JSX, think of it as returning HTML

Function Components are named like JS Classes, Pascal Case (CapitalFirstOfEveryWord)

```jsx
const NavBar = () => {
    return (
        <nav>
            <h1>Pet App</h1>
            <ul>
                <li className="selected">
                    <a href="/pets">Pets</a>
                </li>
                <li>
                    <a href="/owners">Owners</a>
                </li>
            </ul>
        </nav>
    );
};

// Get a DOM node for React to render to
const rootElement = document.getElementById('root');

// Give React the element tree and the target
ReactDOM.render(<NavBar />, rootElement);
```

We don't invoke function components, we treat them like HTML tags

-   HTML Tags !== React Components

### Nested Components

Just like with normal functions, you can use function components inside of other function components

```js
const NavLinks = () => {
    return (
        <ul>
            <li className="selected">
                <a href="/pets">Pets</a>
            </li>
            <li>
                <a href="/owners">Owners</a>
            </li>
        </ul>
    );
};

const NavBar = () => {
    return (
        <nav>
            <h1>Pet App</h1>
            <NavLinks />
        </nav>
    );
};
```

This is particularly useful when organizing components.

Since each component should focus on a single task, it makes sense to write them in different files, then import as needed.

Example from an old personal project:

```jsx
// Each component is created in its own file
import {
    ServiceOptions,
    ColorHistory,
    ChemHair,
    CurrentColor,
    TimeSlots,
    FunFacts,
} from '../NewClientForm';

// Hold them all in an array so I can cycle through them in order
const NewClientForm = [
    <ServiceOptions />,
    <ColorHistory />,
    <ChemHair />,
    <CurrentColor />,
    <TimeSlots />,
    <FunFacts />,
];

const FormController = () => {
    let page = 0;

    return (
        <div className="container">
            <div className="nav">
                <button className="arrow" onClick={(page -= 1)}>
                    Back
                </button>
                {/* Back and Next buttons to change the page */}
                <button className="arrow" onClick={(page += 1)}>
                    Next
                </button>
            </div>
            {/* This is where the form contents are shown */}
            <div className="content">{NewClientForm[page]}</div>
        </div>
    );
};

export default FormController;
```

---

## Returning from React Components

### 1. Component functions MUST return something

-   If you don't return anything from a normal JS function, it returns `undefined` by default
-   With React, function components must return the JSX or `null`

### 2. Component functions must return ONE thing

-   Cannot return two JSX (HTML) tags from one function

```js
// THIS COMPONENT WILL WORK
const WorkingComponent = () => {
  return (
    <div></div>
  );
}

// THIS COMPONENT WILL NOT WORK
const IncorrectComponent = () => {
  return (
    <div></div>
    <div></div>
  );
}
```

### 3. If you want to return multiple JSX elements next to each other, you can use `React.fragment`

```js
const WorkingComponent = () => {
    return (
        <React.fragment>
            <div></div>
            <div></div>
        </React.fragment>
    );
};

const AlsoWorkingComponent = () => {
    return (
        <>
            <div></div>
            <div></div>
        </>
    );
};
```

---

## Sharing data with `props`

Props are properties you want your component to have access to. This is just like passing arguments to a normal JS function

`props` is an object, and you access its values like you would a normal object.

```jsx
// --------------Vanilla JS Example--------------

const userData = {
    name: 'James',
    role: 'Instructor',
};

const myFunc = (props) => {
    return props.name + ` is an ${props.role}`;
};

console.log(myFunc(userData)); // 'James is an Instructor'

// --------------React Component Example--------------

const MyComponent = (props) => {
    return (
        <div>
            <p>My name is {props.name}</p>
            <p>I am an {props.role}</p>
        </div>
    );
};
```

For a component to have access to props, we must pass them into the component's tag.

The values passed in get stored as key/value pairs in an object. Function components have access to that object through their first parameter

```js
const roleName = 'Instructor';

const MarchStaff = () => {
  return (
    <MyComponent name="James" role={roleName} />;
    <MyComponent name="Crystal" role="Assistant Instructor" />;
  )
}
```

We can also use object destructuring to give us immediate access to our prop data. This way, we don't have to key into the props object

```js
const MyComponent = ({ name, role }) => {
    return (
        <div>
            <p>My name is {name}</p>
            <p>I am an {role}</p>
        </div>
    );
};
```

---

## Important Note!

The concepts of "passing down", "parent/child", and nesting components are used heavily in React! Make sure to ask questions when you don't see how something connects.