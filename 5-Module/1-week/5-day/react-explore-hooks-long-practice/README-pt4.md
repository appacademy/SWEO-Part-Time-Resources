## Phase 4: Debug re-rendering

The first step is understanding when the values of state variables have changed.
This means combining `console.log` with `useEffect`.

The next step is to look at the components themselves, the one with the
`useState` hooks as well as its children.

### Debugging state change

Begin by adding `console.log`s to both `useEffect` functions so you can see when
they are being triggered. Many developers like to start with the logging as the
first statement, i.e., before any conditionals they might have.

For example, if you had the bug with side panel resetting but not closing, you
should now have `useEffect` hooks that look something like this:

```javascript
    // Open side panel
    useEffect(() => {
        console.log(`selectedProduct CHANGED TO`, selectedProduct);
        setSideOpen(true);
    }, [selectedProduct]);

    // Deselect product
    useEffect(() => {
        console.log(`sideOpen CHANGED TO`, sideOpen);
        setSelectedProduct();
    }, [sideOpen]);
```

When you watch the console in the browser, you'll see output like this:

```plaintext
// After refresh
selectedProduct CHANGED TO undefined
sideOpen CHANGED TO true

// Select first item (abbreviated output)
selectedProduct CHANGED TO {id: 1, code: "abc", name: "Bistro Table ...

// Close side panel
sideOpen CHANGED TO false
ProductView.js:20 selectedProduct CHANGED TO undefined
ProductView.js:27 sideOpen CHANGED TO true
```

The reason for the side panel getting stuck open is evident in the last 3
statements. First, notice the side panel was closed (`sideOpen CHANGED false`),
which, as the next logged statement shows, triggered the `useEffect` that set
`selectedProduct` to `undefined`. The change in `selectedProduct`, however, then
triggered the other `useEffect`, which, after logging the final statement above,
updated `sideOpen` back to `true`.

The fix is to include conditionals so that the setters are called only as 
necessary.

```javascript
    // Open side panel when product is selected
    useEffect(() => {
        console.log(`selectedProduct CHANGED TO`, selectedProduct);
        if (selectedProduct)
            setSideOpen(true);
    }, [selectedProduct]);

    // Deselect product when side panel is closed
    useEffect(() => {
        console.log(`sideOpen CHANGED TO`, sideOpen);
        if (!sideOpen)
            setSelectedProduct();
    }, [sideOpen]);
```

Congratulations on getting the bugs worked out of your implementation! A key
skill for developers is trying every path a user could take to ensure the 
experiences are both correct and pleasing.

### Re-rendering in components

Add a `console.log` before the return statement in `ProductView`. Refresh the 
application in the browser and click through several scenarios for opening and
closing the panel and selecting items in the list. Notice how often the output
displays in the console.

Add a `console.log` before the return statement in `ProductListItem` and/or
`ProductDetails`. Refresh the application in the browser and click through 
several scenarios for opening and closing the panel and selecting items in the 
list. Notice how often the output displays in the console.

## Bonus Phase: Remember state using local storage

There are times when it would benefit your users if the application remembered
some of the settings on refresh or between sessions. The `useEffect` hook is 
one way (probably the best way) to put the value of a state variable into 
`localStorage`. Likewise, the `useState` definition is often the best time 
to get the value back out. 

Remember that there will be no value in `localStorage` the first time a user
visits your application, so you'll need to check for that and provide an
appropriate default. (You probably want the panel to be open on a user's first
visit since it contains the welcome message.)

In this bonus phase, store the state of the side panel (whether opened or 
closed) in local storage. You can view (and edit or delete) local storage in
the JavaScript tools in your browser by going to the "Application" tab and 
looking for "Local Storage" under "Storage" on the left.

> HINT: If you get stuck trying to figure out how to determine if the boolean
> `false` has been put into `localStorage`, note that `localStorage` stores and
> returns all values as strings and that **any** non-empty string (including
> "false") is considered **truthy**.