- Use .getElementById 
- .classList.add() to add a class to an element
- CSS selectors as the arguments to querySelector and querySelectorAll 
- Understand the difference between querySelector and querySelectorAll 
- .appendChild and .innerHTML to add children to an element
- How to use the innerHTML property of an html node to replace its contents or add to it 
- create an html element, set an attribute with innerHTML or createElement + setAttribute + appendChild

In this demo we'll cover the basics on how to select elements from the document to manipulate them

Read the first paragraph of the .getElementById https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

```JS
window.onload = () => {
    document.getElementById("click-me").addEventListener("click", ev => {
        const ball = document.getElementById("ball");
        console.log(ball);
    });
}
```

Once you have the element in a variable you can manipulate it.
Read the first paragraph of the .classList and scroll down to show an example that uses .add https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

```js
window.onload = () => {
    document.getElementById("click-me").addEventListener("click", ev => {
        const ball = document.getElementById("ball");
        console.log(ball);
        ball.classList.add("red-ball");
    });
}
```

Another way to select an element is with .querySelector() and .querySelectorAll()
Read the Return Value section of the docs:
- the argument needs to be a valid css selector click on CSS selector and stress that classes and IDs  need a dot or hash
- it returns the first match, if you need a list of all the elements that match use querySelectorAll()
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector#return_value

```js
// .querySelector
// inside the onload function
const instructor = document.querySelector(".instructor");
console.log(instructor);
instructor.style.color = "red";
```

```js
// .querySelectorAll, stress it is not an Array it is a NodeList https://developer.mozilla.org/en-US/docs/Web/API/NodeList
// inside the onload function
const instructors = document.querySelectorAll(".instructor");
console.log(instructors);
instructors.forEach(instructor => {
    instructor.style.color = "red";
});
```

Read the first example of the docs for innerHTML https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#replacing_the_contents_of_an_element

```js
// also show += instead of =
const playground = document.getElementById("playground");
playground.innerHTML = `
    <h2 class='red'>Hope you enjoyed the demo!</h2>
    <img 
        src='https://p4.wallpaperbetter.com/wallpaper/70/625/78/animal-baby-cute-dog-wallpaper-preview.jpg'
    >
`;
```

In this demo you learned:
- Use .getElementById 
- .classList.add() to add a class to an element
- CSS selectors as the arguments to querySelector and querySelectorAll 
- Understand the difference between querySelector and querySelectorAll 
- How to use the innerHTML property of an html node to replace its contents or add to it 