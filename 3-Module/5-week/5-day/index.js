window.addEventListener('DOMContentLoaded', ()=>{

	const input = document.querySelector('.left > input')
	const form = document.querySelector('form');

	const button = document.querySelector('.right button')

	const formInputs = document.querySelectorAll('form input')

	const box2 = document.querySelector('.box-2')

	// console.log(input)

	// submit
	// click
	// mouseover
	// change
	// input

	let firstName = formInputs[0].value;
	let lastName = formInputs[1].value;

	input.addEventListener('change', e => {
		console.log(e)
		console.log(e.target.value)
	})

	formInputs[0].addEventListener('change', (e) => {
		firstName = e.target.value
	})

	formInputs[1].addEventListener('change', (e) => {
		lastName = e.target.value
	})

	form.addEventListener('submit', e => {
		e.preventDefault();
		// console.log(e)
		console.log(firstName, lastName)
	})

	// console.log(button.firstChild)
	// console.log(button.childNodes)
	button.addEventListener('click', e => {
		const box1 = document.querySelector('.box-1')
		box1.style.height = '100px'
		box1.style.width = '100px'
		box1.style.backgroundColor = 'green'
	})

	box2.addEventListener('mouseover', () => {
		box2.style.backgroundColor = 'red'
	})
})
