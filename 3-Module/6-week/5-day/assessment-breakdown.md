# Assessment Week 18 Breakdown
- Topics: DOM Manipulation, Event Listeners, Network  

- Breakdown:
  - time: 1hr45m
  - 9 MC x 1pt = 9pts 
  - 6 specs x 2pt = 12pts
  - Passing Score: 16 / 21

## Tip
- Do the practice assessment 3-5 times OR until you don't need to reference material and practices. `How are we to solve big problems, if we don't even know the syntax to solve the small ones` 
- what do I need to do, step by step process (`english plan`), how do i do that? (`code`)

## Event Listeners and DOM Manipulation w/ JS
- [DOMContentLoaded](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-18---events-and-storage/domcontentloaded-vs--window-onload)
- [What are Events?](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-17---browser--dom--and-events/what-are-events-)
- [Add/Remove Event Listeners](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-17---browser--dom--and-events/add-remove-event-listeners)

- Understand how to use the event type `DOMContentLoaded` that is passed to a listener.
  
- Select example
  - Select the correct element using selectors like `getElementById`, etc.
  - Add the event listener to an element 
  - handle the event w/ the proper logic and DOM manipulation.

- Create Example
  - Create an element
  - attach the overheads like attributes, inner text, etc. to the the element
  - add an event listener to the newly created element w/ the proper event type and logic
  - attach the newly created element as a child to another element.
  
- Be able to work with the `event object` and `access the element that emitted the event` through using properties like `event.target` 

- Be able to `debug` through `console.log` to check if correct element selected, correct element created, correct data received, working with the correct datatype, and many many more. `Follow the data (what data are we working with)`.

## Event Propagation
- [Event Propagation](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-18---events-and-storage/event-propagation)
- Understand event propagation / bubbling and how to stop it from bubbling up and triggering the ancestors' event listeners.

## Default Behaviors
- [Default Behaviors and preventDefault](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-18---events-and-storage/default-behaviors-and-preventdefault)
- Be able to prevent the default behavior / default listener of an element when it gives off an event. 

## `Data-` Attribute
- [Data- Attributes on elements](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-18---events-and-storage/data--attributes-on-html-elements)
- Understand `data-` attribute and how it works and using the `dataset` property

## Web Storage
- [WebStorage](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-18---events-and-storage/webstorage)
- Working with web storage, being able to get and set the items into the storage. And being able to save user input into storage so even afer closing browser, the input will not disappear.  
  - check if data is in local storage first to load in
  - select and store the data (i.e image) to local storage
- situations where we would use different storage mechanism, i.e. 
  - `server storage` - cloud information that can be accessed on multiple devices like user setting, preferences, shared data, etc.
  - `local storage` - singular device, data not cleared
  - `cookies` - transmission of small data w/ request and response
  - `session storage` -singular device, data cleared after session ends

## Fetch API + DOM Manipulation
[catstagram-day-1 is a great project](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-17---browser--dom--and-events/catstagram-day-1)
- Be able to use the fetch api to grab data from an API, work with the promise returned from the fetch API, then parse the response object and extract the information needed from it. `hint: console.log` is great here to check for the `data we are working with at each step`

## Basic Network
- [Ports and MAC Addressess](https://open.appacademy.io/learn/js-py---pt-feb-2022-online/week-18---events-and-storage/mac-addressess-and-ports)
- ports
- IP vs. Mac Address
  - MAC addresses are permanent identifiers assigned to a device hardware.
  - IP address identifies each computer using the Internet Protocol to communicate over a network.

## Focus Points
- Practice Assessment 
- Formative Quizzes
- Projects (like catstagram) / Practices and `code-it-outs`