// window.alert('hello world')

import { calculator } from "./calculator.js"


const changeTitle = () => {
	const titleDiv = document.querySelector('.title') // selecting
	titleDiv.innerText = 'Welcome to my page' // text
}

const selectDivs = () => {
	// query method
	// document.querySelector // node
	// document.querySelectorAll // nodeList

	// get method
	// document.getElementById // element/node
	// document.getElementsByClassName // htmlCollection
	// document.getElementsByTagName // htmlCollection

	// [div, div, div] nodelist
	// [div, div, div] htmlCollection

	// htmlcollections are live
	// nodelist are static

	// static is a shallow copy
	// live is reference

	// css selectors
	const divsQuery = document.querySelectorAll('div')

	// console.log(divsQuery) // static



	const divsGet = document.getElementsByTagName('div')


	const bodyQuery = document.querySelector('body')
	const bodyGet = document.getElementsByTagName('body')

	// bodyQuery.appendChild(newDiv)
	// bodyGet[0].appendChild(newDiv)

	// // console.log(divsGet) // live
	// // divsGet.appendChild(newDiv)
	// console.log("our static elements ", divsQuery.length) // static
 	// console.log("our live elements ", divsGet.length) // live

	// const products = ['toys', 'manga', 'comics', 'electronics']

	// const newUL = document.createElement('ul')

	// for(let i = 0; i < products.length; i++){
	// 	const newLI = document.createElement('li')
	// 	newLI.innerText = products[i]
	// 	newUL.appendChild(newLI)
	// }

	// bodyGet[0].appendChild(newUL)

	for(let i = 0; i < bodyGet.length; i++){
		const newDiv = document.createElement('div') // create a new div
		// bodyQuery.appendChild(newDiv)
		bodyGet[0].appendChild(newDiv)
	}

}

window.onload = () => {
	changeTitle()
	// calculator('add')
	selectDivs()
}


// document.addEventListener('DOMContentLoaded', e => {
// 	const titleDiv = document.querySelector('.title') // selecting
// 	titleDiv.innerText = 'Welcome to my page' // text
// })
