# The Biggest Event Of Your Life

Events are things that happen (complex I know)

Allow us to keep track of a user's interaction with our webpage.

## Event Listener Structure

- thingToWatch.addEventListener("eventToWaitFor", functionToRun(theEvent))
- theSameThing.removeEventListener("sameEvent", sameFunction(theEvent))

```js
document.addEventListener('DOMContentLoaded', (event) => {
  // All sorts of stuff
});
```

## Too many events to memorize...so here's [MDN Events](https://developer.mozilla.org/en-US/docs/Web/Events)

Some common events include:

- DOMContentLoaded
- click
- mouseover
- submit
- input
- change
- focus

**Note:** event strings are _case sensitive_

---

## `event.Target` vs `event.currentTarget`

`event.currentTarget` refers to the element where the Event Handler has been **_attached_**

`event.target` refers to the element where the has **_occurred_**

- This could be a descendent (child element)

Because of this, **_event bubbling_** can occur, causing unwanted behavior

```html
<!-- scratch.html -->
<div id="outer" class="blue">
  <div id="inner" class="red"></div>
</div>
```

```js
// scratch.js
const blue = document.getElementById('outer');

blue.addEventListener('click', (e) => {
  // if we click on the red square
  console.log(e.target.className); // red
  console.log(e.currentTarget.className); // blue
});
```

### To stop this, we have `event.stopPropagation()`

```js
const red = document.getElementById('inner');
red.addEventListener('click', (e) => {
  e.stopPropagation();
  // clicking on red no longer does anything
});
```

---

## Hey...don't do that

Sometimes, we want to do something different than an event's default behavior. That's where `event.preventDefault()` comes in.

Commonly used with forms, can stop any default behavior from happening.

```html
<!-- scratch.html -->
<label
  >Haha you can't click me
  <input id="unclickable" type="checkbox" />
</label>
```

```js
// scratch.js
const check = document.getElementById('unclickable');

check.addEventListener('click', (e) => {
  e.preventDefault();
});
```