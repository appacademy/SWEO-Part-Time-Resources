# Practice: Add and Remove Event Listeners

In this practice, you will add interactivity to an HTML page by adding and
removing event listeners to HTML elements.

## Set up

Clone the practice from the `Download Project` link below.

## Instructions

In the starter, you have been given a simple HTML page __index.html__ that needs
some interactive elements and behaviors added. Add all your code for this
practice in the __events.js__ JavaScript file provided to you.

NOTE: __events.js__ is imported in the `<head>` of __index.html__ for you.

Create the necessary event listeners and accompanying callback functions when
the following events are triggered:

- When the DOM is loaded, alert the user that the DOM has loaded.
- When the `#red-input` input contains the word "red", change the background
  color of the input to red. Otherwise, remain transparent.
- When `#add-item` is pressed, a new `<li>` element with the value from
  `#list-add` is created and appended to the `<ul>`.
- When a new color is selected in `#color-select`, change the background color
  of the `<section>` it belongs to.
- When `#remove-listeners` is clicked, all event listeners from the previous
  three sections should be removed.

## Bonus

If you complete these tasks early, here are some challenge tasks. Some may
require you to do further research into different event types.

- Create a button that re-adds the event listeners removed by the last task
  from `#part-4`.
- Create a new section that contains a `<div>` and a `hover` event that adds
  text to the `<div>` indicating that it is being hovered over.
- Create a global event listener that alerts the user whenever the space bar is
  pressed.
