// What happens if a tree falls in the forest (an event happens) and no one is there to listen to it? 
// We need a listener to trigger javascript logic when an event happens!


// script.js
// 1) our window listen for "DOMContentLoaded" event (which means wait for page to load html) then trigger the callback (2nd argument).
window.addEventListener("DOMContentLoaded", event => {
    // 2) once loaded, select the `button` and `count`
    const button = document.getElementById("increment-count");
    const count = document.getElementById("clicked-count");
    // 3) create a variable to keep track of number of clicks
    let clicks = 0;
    button.addEventListener("click", event => {
        // 4) when a click event happens ON OUR `BUTTON`, increase the `clicks` by 1 and replace the `count` content by the `clicks`
        clicks += 1;
        count.innerText = clicks;
    });
});