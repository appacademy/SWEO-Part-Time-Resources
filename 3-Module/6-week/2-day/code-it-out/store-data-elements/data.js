// Your code here

// add an event listener to the window to listen for "DOMContentLoaded", then pass a second parameter of a callback that will be triggered when the DOM finishes loading
window.addEventListener("DOMContentLoaded", e => {

    // select the add button (i.e. variable name: buttonEl)
    
    
    // add an event listener to the add button (buttonEl) w/ a click event
    
        // below are steps inside of the event listener, in the callback

        //make sure to preventDefault the event on the form

        //select the `input element` that has an id of "name" and put it in a variable. (remember to console.log to test along the way)
    

        //grab the `select element` which has the id of "type" and put it in a variable.


        // select the ul w/ an id of "shopping-list" and put it in a variable


        // create an li element and put it in a variable (hint: document.createElement)

        // get li's inner text and make it = to the `input element's` value


        //set li attribute: get the value of the `select element` and set the attribute on the li to have a "data-type" w/ the value of the `select element's` value. Hint: reference the hoemwork on data-

        //now take the li element and log the data- attribute's value using "dataset." 

        //append the child li to its ul parent.

        //console log the li to see if you're getting everything correct when entering a new input
})