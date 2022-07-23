/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.

const firstSquare = document.getElementById('problem-one');
// firstSquare.innerHTML = '<button>1</button>';

const button = document.createElement('button');

button.innerText = '1';
firstSquare.innerText = ''; // null

firstSquare.appendChild(button);

// Problem Two
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.
const secondSquare = document.getElementsByClassName('square two')[0]; // 'two'
// const secondSquare = document.querySelector('.square.two'); // ".two"
secondSquare.style.backgroundColor = 'orange';
secondSquare.style.color = 'white';
secondSquare.style.border = '5px dashed black';

//! ************************************************
// // const p2 = Array.from(document.getElementsByClassName("square two"));
// const p2 = document.querySelectorAll('.square.two');
// console.log(p2);
// p2.forEach((el) => {
//   el.style.backgroundColor = 'orange';
//   el.style.color = 'white';
//   el.style.border = '5px dashed black';
// });

// Problem 3
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well.
// HINT: Check the CSS file or use your Dev Tools to find the original width and
// font-size, and then double those sizes.
// 50px width font-size 30px

const plus = document.querySelectorAll('.plus');

plus.forEach((el) => {
  el.style.width = '100px';
  // el.style['width'] = '100px';
  el.style['font-size'] = '60px';
});

// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

//! ************************************************
const fourthBox = document.querySelector('.four');
fourthBox.id = 'problem-four';
fourthBox.className = 'round four';

// // fourthBox.removeAttribute('class', 'square');
// fourthBox.setAttribute('id', 'problem-four');
// fourthBox.setAttribute('class', 'round four');

//! ************************************************
// const fourthBox = document.getElementsByClassName('four')[0];
// fourthBox.setAttribute('id', 'problem-four');
// fourthBox.className = 'round four';

//! ************************************************
// const p4 = document.getElementsByClassName('square four')[0];
// p4.classList.replace('square', 'round');
// p4.id = 'problem-four';

// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

//! ************************************************
// const squareFive = document.querySelector('.four + div');
// squareFive.className = 'square minus';
// const deathRow = document.querySelectorAll('.minus');
// deathRow.forEach((el) => el.remove());

//! ************************************************
// const five = document.getElementsByClassName('square')[3];
// // console.log(five)
// five.classList = 'square minus';
// // five.remove();
// const menos = document.querySelectorAll('.square.minus');

// menos.forEach((ele) => {
//   ele.remove();
// });

//! ************************************************
// let div = document.getElementsByTagName('div');
// let squareFive = div[5];
// let squareSix = document.querySelector('.square.minus');
// let squareSeven = document.querySelector('.square.minus.seven');

//! ************************************************
// let boxArray = [squareFive, squareSix, squareSeven];
// boxArray.forEach(box => box.remove());

//! ************************************************
// const list = document.querySelectorAll(".square:not([id]):not(.two)");
//   list.forEach((squareFive) => squareFive.remove())

//! ************************************************
// const s5 = Array.from(document.getElementsByClassName('square'));

// for (let i = 0; i < s5.length; i++) {
//   let ele = s5[i];
//   if (ele.innerText === '5') {
//     ele.setAttribute('id', 'final');
//   }
//   if (ele.innerText === '6') {
//     ele.setAttribute('id', 'final');
//   }
//   if (ele.innerText === '7') {
//     ele.setAttribute('id', 'final');
//   }
// }

// const finalRemove = document.querySelectorAll('#final');
// finalRemove.forEach((el) => {
//   el.remove();
// });

//! ************************************************
// const five = document.querySelector('#root').children[4];
// five.classList.add('minus');
// const p5 = document.querySelectorAll('.minus');
// p5.forEach((el) => el.remove());

//! ************************************************
const boxesSet = new Set(['5', '6', '7']);
const box5 = Array.from(document.getElementsByClassName('square')).forEach(
  (el) => {
    if (boxesSet.has(el.innerText)) {
      el.remove();
    }
  }
);

//! ************************************************
// const box5 = document.getElementsByClassName('square')[3];
// box5.setAttribute('class', 'minus');
// const minusBoxes = Array.from(document.getElementsByClassName('minus')).forEach(el => {
//     el.remove();
// });

//! ************************************************
// Array.from(document.getElementsByClassName('square')).forEach((square) =>
//   square.innerText.includes('5') ||
//   square.innerText.includes('6') ||
//   square.innerText.includes('7')
//     ? square.remove()
//     : true
// );
