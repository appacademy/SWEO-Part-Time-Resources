# M5W1D1 React

## Why React?

- React is a library that allows us to use reusable components to update our page without reloading or refreshing.

## How Does it do this?

- React creates and uses a copy of the DOM(Document Object Model)
- This copy is called the virtual DOM
- We will build react components that will interact with the virtual DOM
- Based on how we build these components, we will add or remove nodes/html elements to our virtual DOM
- React will constantly compare the actual DOM to the virtual DOM and dynamically update it according to what nodes have been removed or added.

## JSX

- Javascript Extensible Markup Language
- Looks like HTML but isnt
- Allows us to write in line javscript in order to add functionality
#### [JSX](https://beta.reactjs.org/learn/writing-markup-with-jsx)
#### [JS in JSX with Curly Braces](https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces)


## Class Components
```
import React, { Component } from "react";

class ClassComponent extends Component {
 render() {
   return <h1>Hello, world</h1>;
 }
}
```

## Functional Components
- must only return one jsx element, or a fragment.
- nested elements are alright, they they must all be relate back to one jsx element that contains them all.

```
import React from "react";

function FunctionalComponent() {
 return <h1>Hello, world</h1>;
}
```
#### [React Functional Components Docs](https://reactjs.org/docs/components-and-props.html)

# Paired Solo Practice 30 min [Functional Components - JSX](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-27---react-basics-and-hooks/practice--functional-components---jsx)

- Short Practice Q&A 15 min


## Props
- Props are the information that you pass to a JSWX tag.
- You can define anything data type as a prop. Remember though, javascriptis loosely typed, and you can accidentally change data types that you are not wishing to change.
- You must initiate your prop on the parent element, then pass it down to the child element, then include this prop on the child elements arguments
#### [React Props Docs](https://beta.reactjs.org/learn/passing-props-to-a-component)

```
//parent
export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}
```

```
//child
function Avatar({ person, size }) {
  // person and size are available here
}
```
# Paired Short Practice 30 minutes [Functional Components - PROPS](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-27---react-basics-and-hooks/practice--functional-components---props)

- Short Practice Q&A 15 min

# Paired Short Practice 30 minutes [Functional Components - LISTS](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-27---react-basics-and-hooks/practice--functional-components---lists)

# Paired Short Practice 30 minutes [Create React App](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-27---react-basics-and-hooks/create-react-app-practice)
- Short Practice Q&A 15 min
