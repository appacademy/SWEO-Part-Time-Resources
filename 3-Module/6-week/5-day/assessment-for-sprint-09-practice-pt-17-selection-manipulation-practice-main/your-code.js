/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.

// Your code here
const problemOne = document.querySelector('#problem-one')
// const problemOne = document.getElementById('problem-one')
problemOne.innerText = ''
const problemOneButton = document.createElement('button')
problemOneButton.innerText = 1
problemOne.appendChild(problemOneButton)


// Problem Two
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.

const problemTwo = document.querySelector('.square.two')
// const problemTwo = document.getElementsByClassName('square two')[0]
problemTwo.style.backgroundColor = 'orange'
problemTwo.style.color = 'white'
problemTwo.style.border = '5px dashed black'


// Problem 3
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well.
// HINT: Check the CSS file or use your Dev Tools to find the original width and
// font-size, and then double those sizes.
const problemThree = document.querySelectorAll('.plus') // nodelist
// const problemThree = document.getElementsByClassName('plus')
problemThree.forEach(el => {
	el.style.width = '100px'
	el.style.fontSize = '60px'
})

// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

const problem4 = document.querySelector('.square.four')
problem4.setAttribute('id', "problem-four")
// problem4.removeAttribute('class')
// problem4.setAttribute('class', 'round')
problem4.classList.remove('square')
problem4.classList.add('round')

// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

// const problem5 = document.querySelectorAll('.square:not(.plus):nth-child(n+5)')

// problem5.forEach(e => e.remove())

// const problem5 = document.querySelectorAll('#root')[0].children
// console.log(problem5)

// problem5.forEach((e,i)=>{
// 	console.log(i)
// 	if(i === 4 || i === 5 || i === 6){
// 		e.remove()
// 	}
// })
// let arr = ['5', '6', '7'];

// for(const node of problem5){
// 	if(arr.includes(node.innerText)) {
// 		node.remove();
// 	}
// }

const problem5 = document.querySelectorAll('.square')

problem5.forEach((e,i) => {
	if(i === 3 || i === 4 || i === 5){
		e.remove()
	}
})
