# Long Practice: Create a profile page with JavaScript

In this project, you'll create a simple profile page and fill it with details
about yourself.

Now that you've learned about the DOM and how to access and manipulate it, put
the skills to use by building your own basic profile page! You will:

- Create an HTML file and link a JavaScript file
- Use JavaScript to create and update page elements
- Add CSS classes with JavaScript
- Create a clock using the Date object

## Background and Context

The best way to learn is to create something personal and meaningful. You will
be creating a page about something very personal: You!

In this practice, you'll create a simple profile page that displays details
about you, such as who you are, what you like to do, and where you are located.

Put as many or as few details as you like. It's your page, so feel free to give
it your own flair!

Practice using JavaScript to access DOM elements and insert content into your
page dynamically. Don't use inline-styles with JS. Define your CSS in a file,
link it, and apply the proper class names or ids as needed.

## Set Up

Create a new project folder.

Inside of the project folder, create an HTML file called __index.html__. Set up
your HTML file with a `head` and `body` section. Other than the appropriate HTML
tags, leave the file empty of content, ids and classes.

In your HTML file, add a link to an external JavaScript file in your project
directory called __my-profile.js__. Test that your JavaScript file is linked
correctly by printing something you can read in the browser console. Example:

```js
console.log("This is my profile page!");
```

In your HTML file, add a link to an external CSS file in your project
directory called __my-profile.css__. You will define all your CSS styling here.

## Phase 1: Populating your profile

Again, don't hard-code any content in your HTML file. Instead, construct the
page content inside of the `<body>` element using your JavaScript file.

First, you should make sure all the DOM objects you need are loaded before you
add new things to the page.

### Phase 1A: Creating and appending new elements

It's time to add some content to your profile page! Insert your name as an `h1`
into the page using JavaScript, and give it an `id`.

After you've inserted the `h1`, open your HTML page in your browser and make
sure the `h1` with your name appears on the page.

You've added your name to the page, but it still looks sparse. Fill out your
page with some details about yourself by creating and appending new elements.
Use what you've learned about manipulating the DOM to add to your JavaScript
file.

- Create a new unordered list element.
- Append at least **four list items** of details about yourself to your list.
- Append your list to the body of your page.

### Phase 1B: Refactoring to make it programmatic

The code we wrote above works, but it is lengthy and leads to needless
repetition. Imagine we want to display 20 hobbies. Following the pattern above
means we would have to create an element, create a text node, and append a
child node to the details list 20 times for each hobby. That's 80 extra lines
of code!

To make the code look less repetitive, refactor the code for inserting `li`
elements to be more programmatic and easily repeatable.

Hint: Use an array of strings where each string represents the text content of
a single `li` element. Create an `li` element for each string in the array.

You've cut down on the lines of code as well as made your code more readable!
You can easily add new list items inside your array and they'll be automatically
added to your `ul` element. Now that you've refactored your code, can you add
new sections to your page programmatically?

Challenge: Use a function to programmatically create a chunk of HTML elements
that has an HTML structure that you will be repeating often.

## Phase 2: Adding CSS classes and styles

You've added the details, but now they need some pizazz! Add some CSS
classes to your elements that you can use to style the page.

Practice setting attributes by adding class names to the elements you created.

- Add a class name of `name` to the `h1` containing your name.
- Add a class name of `my-details` to the `ul`.
- Add a class name of `detail` to each `li` element you created inside your
  list.

In your CSS file, add some styles using the classes you added:

- Change the color of your `h1`
- Add a border around your `ul`
- Add a hover effect to change the background color of your list items

This is looking much better but your text is all scrunched together. Add
padding to these classes to give it room to breathe.

Add more CSS styles beyond the ones above to your page to personalize it!

## Phase 3: Adding a clock with the Date object

By now, you should know how to add new elements to your page programmatically.
Let's kick it up a notch by adding a clock that keeps the current time onto your
profile page.

Objectives:

- Create a new element and add it to the body of your page
- Use the JavaScript Date object to get the current time
- Use `setTimeout` or `setInterval` to update the time every second
- Insert the current time into a DOM element

You just created a live clock, and it's _time_ for congratulations! (Har har.)
Can you go the extra mile? Figure out how to insert your clock into a new list
item under your personal details that says "I live in City, State, and it's
currently `[CLOCK]` here.

## Bonus Phase: Get Custom

Congratulations! You've created a basic profile page by manipulating the DOM and
inserting elements dynamically with JavaScript. But, why be _basic_ when you can
be a little _extra_? Make your profile extra shiny by adding more to your page.

### Bonus A: Add more sections to your page

Using JavaScript, create new elements and:

- Insert an image into your profile under your name. _Hint:_ You could insert a
  new `img`, or you could add a `div` and set the background image using a CSS
  class.
- Insert more sections to your profile. Examples: "Likes" list and "Dislikes"
  list, "Favorite Restaurants", "My Activities", etc.

### Bonus B: Use other Element methods

Check the MDN documentation for more
[Element methods](https://developer.mozilla.org/en-US/docs/Web/API/Element) you
can use to manipulate the DOM. Try doing the following:

- Use `.outerHTML` to replace an element.
- Use the `classList` API to add/remove classes.
- Try using : `Element.closest`, `getElementsByClassName`,
  `getElementsByTagName` to select elements on your page.

### Bonus C: Make a countdown clock

Instead of keeping the current time on your profile page, make a countdown clock
to your birthday.

Refer to the MDN documentation on the
[Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
for help with this task. Review how to calculate the elapsed time between two
dates.
