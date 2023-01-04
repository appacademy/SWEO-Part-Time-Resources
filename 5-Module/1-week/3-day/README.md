# `M5W1D3`

# React Foundations

## What is React?

- Is a frontend framework created by Facebook in 2013
- Uses components which are blocks of HTML/JavaScript that can be treated like a function
    - May reuse/reinvoke components anywhere and as many times as you would like
- General React Flow: 
    - Creates a virtual DOM, which is translated into the real DOM
    - When changes are made to the website, they first get sent to the virtual DOM
    - Using a [diffing algorithm](https://reactjs.org/docs/reconciliation.html), only detected CHANGES get sent to the real DOM
    - Real DOM then accepts these changes, and the webpage is updated

## Why do we use React?

- Modular
    - React was made from the ground up to provide a modular way of rendering webpages.
    - This is achieved using components.
    - Handles event listeners/DOM manipulation through event handlers/hooks (syntactic sugar) and tucks the logic away so you see a much cleaner picture that achieves       the same result
- Speed
    - Constantly monitors changes and compares the real DOM with the virtual DOM and only rerenders the part of the DOM that detected changes
    - Faster than have a page reload an entire page's DOM node structure
- Reusability
    - Component based design, each component is just a piece of a webpage's UI
    - Example: If you make a NavBar at the top of your page that logs a user in or can sign a logged in user out, you can reuse this button site-wide without needing         to code it multiple times. Code one navbar component and choose what pages the component will render
- Unidirectional Flow of Data
    - Pass data from component to component, but only from a parent component to a child component

## JSX (Javascript Extensible Markup Language)

- JavaScript + HTML
- This piece of code, stores a basic unordered list that will display a user's first name and last name. Because I stored this unordered list in a variable called `list` I can reuse it anywhere
```jsx
const list = (
    <ul>
        <li>First Name: Philip</li>
        <li>Last Name: Ling</li>
    </ul>
)
```

- You can also specify an element's attributes in JSX as well! Lets say we wanted to add some classes as well as add an anchor tag that points to a different place on our site.

```jsx
const list = (
    <ul className='names-list'>
        <li className='first-name'>First Name: Philip</li>
        <li className='last-name'>Last Name: Ling/li>
        <a href='/users/current'>My Profile</a>
    </ul>
)
```

- This is a very basic, but functional react component
- JSX has been used to dynamically render content
- JavaScript can be used above the return statement
- Supporting logic, data fetching, and other React features that you will soon learn will be used in your component function, but above the return statement
- Must return the content you want to render (the html you want to send to the page) or `null` (cannot return `undefined` or it will not build)

```jsx
function App() {

    const helloClass = 'hello';
    const nameClass = 'name';
    console.log('hello from above the return statement')

    //pretend this is a fetch request and stored the data in an array
    const data = ['Pizza', 'Peanuts', 'Broccoli']

    return (
        <div>
        <h1 className={helloClass}>Hello World</h1>
        <h1 className={nameClass}>My name is Philip</h1>
        <h1 className='i-like'>And I Like...</h1>
        {data.map(element => {
            return (
            <div>{element}</div>
            )
        })}
        </div>
    );

}

export default App;
```

## Practice: Functional Components - JSX (30 Minutes)

## Practice: Functional Components - Props (30 Minutes)

## Practice: Functional Components - Lists (30 Minutes)

## Create React App Practice (30 Minutes)
