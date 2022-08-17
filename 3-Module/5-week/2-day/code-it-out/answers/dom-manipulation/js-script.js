// 1) One of the the properties of the window object is `window.document` which allows us to access the Document Object Model, AKA our HTML page. 
// 2) Try this out in the browser's console; enter: `window.document.body` on any website and what did you get? (ignore the ``)
// 3) now try: `window.document.body.children` and `document.body.children`
// 4) finally try: `document.body.children[1]`

// using destructuring to grab the named function (by their names!!!) and then import them in. NOTE: names have to match up with the named export items
// import { goodbyeWorld, helloWorld } from "./extra-file.js"
import afhflkghj from "./extra-file.js"

console.log("------testing import!!!!----")

// Now add your answer here to follow the instructions.md

// after the window paints the html and loads it in, then execute this anonymous function here that was stored in the window.onload property, that contains our javascript logic!!!~~

window.onload = () => {
    // imported functions and execute
    // goodbyeWorld()
    // helloWorld()
    afhflkghj();

    // import default function and use it

    // select h1 element through the document
    const h1 = document.body.children[0];
    //take h1 and replace the content in it
    h1.innerText = "code-it-out: Simple DOM manipulation"

    const ul = window.document.body.children[3];

    const firstLi = ul.children[0];
    firstLi.innerText = "April Cohort"
}
