

// Task 1) fix the code below so that it will execute properly and increment the counter each time the button is clicked. Hint: what happens if the JS is executed before the html is loaded?
window.addEventListener("DOMContentLoaded", (event) => {
    // check the browser console's for hint
    console.log("dom loaded, javascript executed now")

    // once loaded, select the `button` and `count`
    const button = document.getElementById("increment-count");
    const count = document.getElementById("clicked-count");
    // create a variable to keep track of number of clicks
    let clicks = 0;
    
    // Task 2) then select the `button`, add an event listener so that when a "click" event is fired, it will increase "clicks" by 1 and replace the innerText of the `count` element by the newly updated "clicks"
    button.addEventListener("click", (e)=>{
        // console.log("event", e);
        console.log("event target", e.target);
        clicks++;
        // button.innerText = `I have been clicked ${clicks} times`
        // button.innerHTML = `I have been clicked <span>${clicks}</span> times`;
        count.innerText = clicks;
        

    })

})

