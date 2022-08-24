

// Task 1) fix the code below so that the HTML will load before the javascript is executed Hint: what happens if the JS is executed before the html is loaded?

    // once loaded, select the `button` and `count`
    const button = document.getElementById("increment-count");
    const count = document.getElementById("clicked-count");
    // create a variable to keep track of number of clicks
    let clicks = 0;

    // Task 2) then select the `button`, add an event listener so that when a "click" event is fired, it will increase "clicks" by 1 and replace the innerText of the `count` element by the newly updated "clicks"
