/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.

// Your code here
const box1 = document.getElementById('problem-one')
// box1.innerText = ''
const button = document.createElement('button')
button.innerText = '1'
// box1.appendChild(button)
box1.replaceChildren(button)

// Problem Two
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.
const box2 = document.querySelector('.square.two')
// Your code here
box2.style.backgroundColor = 'orange'
box2.style.color = 'white'
box2.style.border = '5px dashed black'

// Problem 3
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well. 
// HINT: Check the CSS file or use your Dev Tools to find the original width and
// font-size, and then double those sizes.

// Your code here
const plusBoxes = document.querySelectorAll('.plus')
plusBoxes.forEach(box => {
    box.style.width = '100px'
    box.style.fontSize = '60px'
})
// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

// Your code here
const box4 = document.querySelector('.four')
box4.removeAttribute('class', 'square')
box4.setAttribute('class', 'round')
box4.setAttribute('id', 'problem-four')

// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

// Your code here
const allSquares = document.querySelectorAll('.square')
allSquares.forEach((ele, i) => {
    if(i  >= 3 && i <= 5){
        ele.remove()
    }
})

// const desiredSquares = document.querySelectorAll(".square:nth-child(n+5):nth-child(-n + 7)");

// desiredSquares.forEach(ele => {
//     // console.log(ele);
//     ele.remove();
// });

// const box = document.getElementsByClassName("square")
// box[3].remove()
// box[3].remove()
// box[3].remove()

// const myDiv = document.querySelectorAll(".square");
//     for (let i = 3; i < 6; i++) {
//     myDiv[i].remove();
//     }


// const fifthBox = document.querySelectorAll("#root > *")[4];
// const removedBoxes = document.getElementsByClassName("minus");
// // console.log(removedBoxes)

// fifthBox.classList.add("minus")

// const removedBoxesArr = document.querySelectorAll(".minus")

// removedBoxesArr.forEach(box => box.remove());
