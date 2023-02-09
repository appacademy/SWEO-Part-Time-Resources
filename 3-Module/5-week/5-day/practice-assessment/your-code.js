/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.

const box1 = document.getElementById("problem-one")
box1.innerText = ""
const button = document.createElement("button")
button.innerText = "1"
box1.appendChild(button)


// Problem Two
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.

// one approach using querySelector with class names
const box2 = document.querySelector(".square.two")
box2.style.backgroundColor = "orange"
box2.style.color = "white"
box2.style.border = "5px dashed black"

// alternate approach using getElementsByClassName and using indexing:
// const squareTwo = document.getElementsByClassName('square two');
// squareTwo[0].style.backgroundColor = 'orange';
// squareTwo[0].style.color = 'white';
// squareTwo[0].style.border = '5px dashed black'


// Problem 3
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well. 
// HINT: Check the CSS file or use your Dev Tools to find the original width and
// font-size, and then double those sizes.

const plusBoxes = document.querySelectorAll(".plus")
plusBoxes.forEach(box => {
    box.style.width = "100px"
    box.style.fontSize = "60px"
})

// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

const box4 = document.querySelector(".four")
box4.removeAttribute("class", "square")
box4.setAttribute("class", "round")
box4.setAttribute("id", "problem-four")

// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

// Option #1 - select all squares and use a conditional to filter the ones you
// want to remove
const squares = document.querySelectorAll('.square');
squares.forEach( (square, i) =>{
    if (i >= 3 && i <= 5){
        square.remove();
    }
})

// Option #2 - use nth-child to select the fourth div, add the minus class, then
// removed all divs with the minus class
// const fourthDiv = document.querySelector('div#root div:nth-child(5)');
// fourthDiv.classList.add('minus');
// const minuses = document.querySelectorAll('.minus');
// minuses.forEach(ele => ele.remove());