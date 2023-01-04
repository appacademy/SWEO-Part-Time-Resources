# `M5W1D3`

# React Foundations Discussion (30 Minutes)

## What is React?

- React is a frontend framework to help us apply both html and javascript to a webpage.
- React uses something called compontents which are really just blocks of html/javascript that can be treated like a function, you may reuse/reinvoke this component anywhere and as many times as you would like.
- React creates a virtual DOM and when changes are made to the website, they first get sent to the virtual DOM,
then using a [diffing algorithm](https://reactjs.org/docs/reconciliation.html), only detected CHANGES get sent to the real DOM.
The DOM then accepts these changes, and the webpage is updated.

## Why do we use React?

- Modular
    - React was made from the ground up to provide a modular way of rendering webpages.
    - This is achieved using components.
    - Instead of making a ton of event listeners and using all sorts of DOM manipulation javascript code, React handles all of that for you with a ton of syntactic sugar and tucks it away so all you see is a much cleaner picture that achieves the same result.
- Speed
    - Since React uses a virtual DOM, it is able to constantly monitor changes, and very efficiently compare the real DOM with the virtual DOM and only rerender the part of the DOM that detected changes.
    - This will generally be faster than have a page reload an entire pages DOM node structure.
- Reusability
    - Component based design, each component is just a piece of a webpages UI
    - Example: If you make a navbar at the top of your page that logs a user in, or can sign a logged in user out, you can reuse this button site-wide without needing to code it multiple times. Code one navbar component, and choose what pages the component will render. [YouTube](https://youtube.com) has a good example of this navbar compontent usage.
- One-flow of data
    - React is able to pass data from component to component, but only from a parent component to a child component.
    - This makes it much easier to debug issues, and gives you a better feel of what compontents you might need to review for errors.

## JSX (Javascript Extensible Markup Language)

- Javascript + HTML, thats it!
- This piece of code, stores a basic unordered list that will display a users first name and last name. Because I stored this unordered list in a variable called `list` I can reuse it anywhere! (obeying scoping laws of course!)
```jsx
const list = (
    <ul>
        <li>First Name: Jesse</li>
        <li>Last Name: Brooks</li>
    </ul>
)
```

- You can also specify an elements attributes in JSX as well! Lets say we wanted to add some classes as well as add an anchor tag that points to a different place on our site.

```jsx
const list = (
    <ul className='names-list'>
        <li className='first-name'>First Name: Jesse</li>
        <li className='last-name'>Last Name: Brooks</li>
        <a href='/users/current'>My Profile</a>
    </ul>
)
```

- This is a very basic, but functional react component.
- JSX has been used to dynamically render content.
- Javascript can be used above the return statement, with no special syntax needed.
- Generally your supporting logic, data fetching, and other React features that you will soon learn will be used in your component function, but above the return statement.
- You will return the content you want to render (the html you want to send to the page) from a react component, these components are generally not used to execute expressions and return their results.

```jsx
function App() {

    const helloClass = 'hello';
    const nameClass = 'name';
    console.log('hello from above the return statement')

    //pretend this is a fetch request and stored the data in an array
    const data = ['Pizza', 'Broccoli', 'My cat']

    return (
        <div>
        <h1 className={helloClass}>Hello World</h1>
        <h1 className={nameClass}>My name is Jesse</h1>
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

- ## Practice: Functional Components - JSX - Walkthrough (5 Minutes)
<br>
<br>

## Practice: Functional Components - Props (30 Minutes)

- ## Practice: Functional Components - Props Walkthrough (5 Minutes)
<br>
<br>

## Practice: Functional Components - Lists (30 Minutes)

- ## Practice: Functional Components - Lists - Walkthrough (5 Minutes)
<br>
<br>

## Create React App Practice (30 Minutes)
- You will need to use React version 17, React 18 came out this year and introduced some changes that will not work "out of the box" with AA's content.
- React 18 is installed by default from create-react-app, so whenever you use this command you will need to make some changes everytime. Unfortunately create-react-app for some reason does not have a command to install a specific version of React, and there is not a "one step" process to covert a React 18 install to version 17.
- ## Create React App Practice - Walkthrough
