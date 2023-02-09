# Long Practice: Window Object and Debugging

In this practice, your tasks will be to use the `window` object to manipulate a
basic portfolio page, find objects within the `document` by implementing some
search functions, and `import`/`export` files with ES6 modules.

## Set up

Clone the practice from the [starter].

Run `node app.js` to start the application. Navigate to [localhost:5000] in your
browser and follow the instructions below.

## Phase 1: Connecting HTML with JavaScript

You will be provided an __index.html__ file within the __assets__ folder that
contains a basic portfolio site. Connect the __/assets/js/index.js__ to the HTML
page to execute it once the HTML page loads the JavaScript file. Load is as a
JavaScript module.

Make sure the code in the __index.js__ file executes only after everything on
the HTML document has loaded.

## Phase 2: Connecting JavaScript Modules

You'll notice there are some calls to functions that don't exist in the
__index.js__ file. These functions exist in __/assets/js/manipulate.js__ and
__/assets/js/search.js__. Your task will be to properly export those functions
from those files and import them into the __index.js__ file using ES6 modules.

Debug your import/export statements using the __"Console"__ tab in your browser's
Developer Tools.

## Phase 3: Filling out the Modules

Now that you've connected everything, the functions being called need to be
filled in! Start in __/assets/js/manipulate.js__.

Here you will find functions that manipulate the `document` in various ways.
Read the comments within the functions to complete the functions accordingly. To
change the text inside of an HTML element, set the [`.innerText`] property on
the element to a different value. For example, the following code will change
the text content of the `body` HTML element to "Hello World!".

```js
document.body.innerText = "Hello World!"
```

Use the __"Console"__ tab in your browser's Developer Tools to test your code. Add
`debugger`s in your code to freeze the code execution on that line to
examine the variables at that time of execution.

## BONUS Phase
Here you will combine your knowledge of
search algorithms and the DOM. You can think of the DOM as a tree,
where each item in the DOM (e.g. `<div>`, `<p>`, etc.) can be considered a
node of the tree.

The search functions are described in `/assets/js/search.js` for you to complete (e.g.
`findElementById`, `findElementsOfTag`, etc.). You may find the [`.children`],
[`.tagName`], and [`.classList`] properties of an HTML element to be useful. If
necessary, you may create your own helper functions.

To view the output of the functions in __search.js__, use `console.log()` to
print the results of calling the functions in __index.js__.

[starter]: https://github.com/appacademy/practice-for-week-09-window-object-and-debugger-long-practice
[localhost:5000]: http://localhost:5000
[`.innerText`]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
[`.children`]: https://developer.mozilla.org/en-US/docs/Web/API/Element/children
[`.tagName`]: https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName
[`.classList`]: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList