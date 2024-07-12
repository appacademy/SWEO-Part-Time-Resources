# `M3W5D3`

## Lecture link
https://us02web.zoom.us/rec/share/cZ4s8uzL1d_BvT7Y143hlLZTjT7Cfu5O7NP6MyrJ5R02aqBJ6VSGb5l6aEU1o-k.f2FEEKRgFYYBHHl_
Passcode: KnV*!!e8

## Element Selection

Methods for element selection

| Code  | Return Value | Live or Static |
| -------- | --------| ------- |
| document.getElementById() | HTMLElement  | Live |
| document.getElementsByClassName() | HTMLCollection  | Live |
| document.getElementsByTagName() | HTMLCollection  | Live |
| document.getElementsByName() | NodeList | Live |
| -------- | -------- | -------- |
| document.querySelector() | Node  | Static |
| document.querySelectorAll() | NodeList  | Static |

## Creating Elements

We can create elements in JS and add them to our DOM.

```js
// This allows us to create a new element and save into a variable
const newDiv = document.createElement('div');
// We then add it to the children of our body
const body = document.body
body.appendChild(newDiv) // appendchild takes in an element to add to the bottom most child of the parent

// This allows us to create a text
// createTextNode generates an element
const newText = document.createTextNode('Hi! I love javascript')
// We then can append that text into one of our elements
newDiv.appendChild(newText)

// here is a much simpler approach in creating new text without using
// createTextNode

newDiv.innerText = "Hi! I love javascript"
newDiv.innerHTML = "Hi! I love javascript"
newDiv.innerHTML = "<span>New child</span>"
```

## Add/Remove Attributes


```js
// We can add and remove attributes with the following code

const newDiv = document.createElement('div');

newDiv.setAttribute('class', 'div-1') // takes in two arguments.
newDiv.setAttribute('id', 'div-id-1')

newDiv.removeAttribute('class') // removes the attribute

const attributeValue = newDiv.getAttribute('id') // returns the value of the attribute
```


## Inline Styling

```js
// We can style our elements with the style property

// here is a list of all the different properties style has
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

const newDiv = document.createElement('div');
// changing the background color to blue
newDiv.style.backgroundColor = 'blue';
```


## Remove Elements

```js
// remove the specific element from the dom

// we select the element we wanna remove
const elementToBeRemoved = document.querySelector('.h1');
elementToBeRemoved.remove() // this will remove the element from the DOM


// remove a specific child from a parent
parent.removeChild(child) // have a parent element remove one of its child elements

// remove a child from a parent
parent.removeChild(parent.firstChild)

// remove a child without knowing what its parent
const node = document.querySelector("#nested");
if (node.parentNode) {
  node.parentNode.removeChild(node); // we reference the parent to remove its child
}
```
