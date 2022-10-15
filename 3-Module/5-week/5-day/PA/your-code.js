/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.

const firstSquare = document.getElementById("problem-one");

// firstSquare.innerHTML = "<button>1</button>";
const button1 = document.createElement("button");
button1.innerText = 1;

firstSquare.replaceChildren(button1);

// Problem Two
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.

const secondSquare = document.querySelector(".square.two");

secondSquare.style.backgroundColor = "orange";
secondSquare.style.color = "white";
secondSquare.style.border = "5px dashed black";


// Problem 3
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well. 
// HINT: Check the CSS file or use your Dev Tools to find the original width and
// font-size, and then double those sizes.

const plusSquares = document.getElementsByClassName("plus");

for (let plusSquare of plusSquares) {
  plusSquare.style.width = "100px";
  plusSquare.style.fontSize = "60px";
};

// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

const fourthBox = document.querySelector(".four");

fourthBox.id = "problem-four";

fourthBox.classList.replace("square", "round");

// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

const fifthBox = document.querySelectorAll("#root > *")[4];
const _removedBoxes = document.getElementsByClassName("minus");
// console.log(_removedBoxes);

fifthBox.classList.add("minus");

const removedBoxes = document.querySelectorAll(".minus")

// const _removedBoxesArr = Array.from(_removedBoxes);

// _removedBoxesArr.forEach(box => box.remove());
removedBoxes.forEach(box => box.remove());

