- Use .addEventListener
- Difference between e.currentTarget and e.target 
- Understand event propagation from nested elements to container 
- stop the propagation of an event
- Prevent the default behavior of an event

Events are occurrences that happen in the system you are programming, which the system tell you about
so you can respond to them in some way if desired. Here is a list of Events https://developer.mozilla.org/en-US/docs/Web/Events

We can use .addEventListener() to set up a function that will be called whenever the specified event is
delivered to the target. It takes two arguments, a case-sensitive string representing the event type to listen 
for and a callback that will be ran when the event fires. This callback will receive an Event object, an
interface that provides more information about the event.

```js
document.addEventListener("DOMContentLoaded", e => {
    console.log(e.type);
    // phase 1
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");

    document.getElementById("click-me").addEventListener("click", e => {
        console.log(e.type);
        modal.style.display = "flex";
        modalContent.style.display = "flex";
        modalContent.innerHTML = `
            <h2>Subscribe to our newsletter</h2>
            <form id="my-form" action="/users" method="POST">
                <label for="email">Email</label>
                <input type="text" name="email">
                <button>Submit</button>
            </form>
        `;

    });
});
```

On this example we used yesterday and today's material to create this modal form. The problem is that
the user can't close it. In order for it to close I'm going to add an event listener to the modal background
so that when a user clicks on it, the modal closes.

```js
// phase 2
    modal.addEventListener("click", e => {
        console.log(e.target);
        console.log(e.currentTarget);
        modal.style.display = "none";
    });
```
The problem is that when I click on the modal content, the modal closes. That is because of event bubbling.
The event is being propagated through the target's ancestor objects. Event listeners registered for that event
will be triggered.

e.currentTarget will always refer to the element to which the event handler has been attached.
e.target identifies the element on which the event has occured and which may be its decendant.

The stopPropagation() prevents further propagation of the current event when bubbling happens.

```js
    modalContent.addEventListener("click", e => {
        e.stopPropagation();
    });
```

Finally when we submit a form we are going to listen to the "submit" button to write a form validator.
We'll use .preventDefault() to stop the "submit" event from happening if the input is not valid. So the default action won't be taken as it normally would be. When you submit a form remember that will make an http request
according to the action and method. We are preventing that.

```js
    const form = document.getElementById("my-form");
    form.addEventListener("submit", e => {
        const inputVal = document.querySelector("input").value;
        if (!inputVal.includes('@') || !inputVal.includes('.com')) {
            e.preventDefault();
            alert('Invalid email');
        }
    });
```

In this demo you learned
- Use .addEventListener
- Difference between e.currentTarget and e.target 
- Understand event propagation from nested elements to container 
- stop the propagation of an event
- Prevent the default behavior of an event