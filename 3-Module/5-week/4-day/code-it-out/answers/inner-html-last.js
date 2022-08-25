 // check out "result-preview.png"
export const changeLast = function(){
    // 1. Take a look at the HTML, use any method to select the last element, put it in a variable called `lastEl`. We should now have selected the box 4 element.
    const lastEl = document.getElementById("box-4");


    // 1.1 log the selected element to make sure we have gotten the right one
    console.log("lastEl", lastEl);


    // 2. use the lastEl element, and replace and remove the lastEl's inner html content (which is currently just text of "Box 4") with a `textarea` element with an id of "text-input". Look up `element.innerHTML` on mdn! 
    
    //(if you're stuck look at the bottom for hint of what it should look like)
    const textInput = "text-input";
    lastEl.innerHTML =`<textarea id=${textInput}></textarea>`

    
    // 3. BONUS select the newly added text area element and give it a width and height of the 95px. Then look up on mdn `.setAttribute` and give the element a "placeholder" of "add your input here"
    const textBox = document.getElementById(textInput) // textInput = "text-input"
    textBox.style.width = "95px";
    textBox.style.height = "95px";
    textBox.setAttribute("placeholder", "add your input here");



    
   
}




//hint for step 2: lastEl.innerHTML = "<textarea id='text-input'></textarea>"