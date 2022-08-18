# Exercise: `NodeList` vs. `HTMLCollection`

In this exercise, you will explore the difference between `NodeList`s and
`HTMLCollection`s.

## Set Up

Clone the exercise from the [starter].

Start the server by running `node app.js`. View the __assets/index.html__ page
in the browser by navigating to [http://localhost:5000].

## Background and Context

An **HTML Element** is a HTML DOM element with a tag. For example, if you have
an HTML DOM element of `<h1>Hello World!</h1>`, `h1` is an HTML element.

A **Node** is a HTML DOM node that doesn't need to have a tag. It can be an HTML
element, but it can also be other smaller components of an HTML element. For
example, if you have an HTML DOM element of `<h1>Hello World!</h1>`, `h1` and
the text of "Hello World!" are both nodes.

An **HTML Collection** contains an array-like object of HTML elements.

A **NodeList** contains an array-like object of Nodes.

## Phase 1: `HTMLCollection`

Take a look at the __assets/js/html-collection.js__ file. The
`bodyChildElements` variable is set to the `.children` property of the `<body>`
element. This property evaluates to an `HTMLCollection`. Comment out the
`console.log` statement underneath that to confirm this. Navigate to
[http://localhost:5000] and open up the "Console" tab to see `bodyChildElements`
printed to the console.

To access the `div` element from this `HTMLCollection`, the code keys into the
`HTMLCollection` like an array to access the `div` element. To get the child
elements of the `div` element, the code reads the `.children` property on the
`div` element and sets it to the `divChildElements` variable. Uncomment the
`debugger` line to see examine the `divChildElements` in the browser console.

The `span` element should be the only element inside of `divChildElements`.
The text "Hello World!" is not a child element of `div` so it is not inside of
`divChildElements`. **Text content are Nodes but not HTML elements.** If you try
to read the `.innerText` property on the `div` element, you may expect it to
read "Hello World!", but it will also read "Yes!", the text inside of the `span`
element. Examine the `helloWorld` variable in the code when the `debugger` is
triggered to confirm this behavior.

## Phase 2: `NodeList`

Comment out all `console.log`s and `debugger`s in the
__assets/js/html-collection.js__ file.

Next, take a look at the __assets/js/node-list.js__ file. The
`bodyChildNodes` variable is set to the `.childNodes` property of the `<body>`
element. This property evaluates to an `NodeList`. Comment out the
`console.log` statement underneath that to confirm this. Navigate to
[http://localhost:5000] and open up the "Console" tab to see `bodyChildNodes`
printed to the console.

Notice that a `NodeList` of a length of 3 is printed to the console. The `div`
element is the second node in the `NodeList`. The first and third nodes
are text nodes.

To access the `div` element from this `NodeList`, the code keys into the
`NodeList` like an array to access the `div` element. To get the child
nodes of the `div` element, the code reads the `.childNodes` property on the
`div` element and sets it to the `divChildNodes` variable. Uncomment the
`debugger` line to see examine the `divChildNodes` in the browser console.

Notice that the `divChildNodes` is a `NodeList` of a length of 3. The
"Hello World!" text should be the first node inside of `divChildNodes` and is
set to the `helloWorld` variable. The `span` element should be the second node.
And the third node should be a text node with whitespace. Confirm this behavior
when the `debugger` is triggered.

[starter]: https://github.com/appacademy/practice-for-week-09-nodelist-vs-htmlcollection
[localhost:5000]: http://localhost:5000