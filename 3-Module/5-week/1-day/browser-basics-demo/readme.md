Identify when will the JS run by the position of the script tag 
BOM allows you to communicate with the browser while the DOM allows you to manipulate HTML elements
Correct way to import a module to an HTML file

When you type a url in the browser, the browser makes a get request to that url. A traditional server will respond with an html file
providing the structure of the page. We know how to link a css page to that html to style it. The browser will see that line of
code an make another request for the css file. You can also link a javascript file to the html file. We use the `script` tag. When 
the browser sees that line it makes a new request for the javascript file. The browser receives it an runs it, that code runs
on the clients end. 

You will typically see the script tag inside the head tag or at the end of the body tag. 
```html
<script src="./index.js"></script>
```

```js
// inside the js file
console.log("hello world");
document.getElementById("playground").innerHTML = "<h2>Hello World</h2>";
```

If you want to use multiple js files, you need to import the index.js as type="module", that will give you access to ES6
module imports/exports.
```html
<script src="./index.js" type="module"></script>
```
```js
// show the seedData.js first
// inside index.js, replace the code with this
import instructors from "./seedData.js";

const helloInstructors = instructors.map(instructor => `<h2>Hello ${instructor}</h2>`);
document.getElementById("playground").innerHTML = helloInstructors.join("");
```

On the reading you learned about the Browser Object Model. It refers to all the objects exposed by the web browser. The way
you access them is through the Window interface. We use it to manipulate the Browser.

(Type window in the browsers console, then open the document key)

The Document Object Model represents the html document as a logical tree. JavaScript gives us the Document interface to manipulate
the web page's content.

```js
// first show manipulating the browser, then the document
document.getElementById("click-me").addEventListener("click", ev => {
    // manipulating the browser
    window.alert("About to open a new window");
    window.open("https://www.appacademy.io/");

    // manipulating the document
    document.getElementById("playground").style.color = "red";
});
```

In this demo you learned
How to link an external JS file to your html via the script tag
How to use multiple JS files by making the script type="module"
How the BOM allows you to communicate with the browser while the DOM allows you to manipulate HTML elements