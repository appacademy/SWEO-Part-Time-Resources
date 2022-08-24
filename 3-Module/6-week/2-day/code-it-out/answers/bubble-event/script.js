//context: Whenever you click an element on the page, the browser will bubble that event up through every ancestor of the element you clicked on. If you have any event listeners on those elements, those listeners will be called on its way up.

window.addEventListener("DOMContentLoaded", e => {
    // this is a helper function that will log the id of our element that the event is happening on
    function logInfo(event) {
        //once event is emitted and logInfo is triggered by our addEventListener, then execute the code below, i.e. stopPropagation
        event.stopPropagation();
        console.log(event.currentTarget.id); //element that the event listener that was triggered is attached to
        // console.log(event.target.id); //the element that was clicked on, or dispatched event
    }
    document.querySelector('#great-grandfather').addEventListener('click', logInfo);
    document.querySelector('#grandfather').addEventListener('click', logInfo);
    document.querySelector('#child-one').addEventListener('click', logInfo);
    document.querySelector('#child-two').addEventListener('click', logInfo);
})

// Try without running code first, then run it on the browser

//1) If "child one" is clicked, what will be the output?
    //child-one, grandfather, great-grandfather

//2) If "child two" is clicked, what will be the output?
    //child-two, grandfather, great-grandfather

//3) Now stop the bubbling from going up through the ancestors! hint: it should be added inside the logInfo func!