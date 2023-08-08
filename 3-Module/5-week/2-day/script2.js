// const firstDiv2 = document.querySelector('.first-div')
// const secondDiv2 = document.getElementsByClassName('second-div')

// const firstDiv2 = document.querySelectorAll('.first-div')

// console.log("is script 2 " ,firstDiv2, ` this type ${typeof firstDiv2}`)
// console.log("is script 2 " ,secondDiv2, ` this type ${typeof secondDiv2}`)


const products = ['toys', 'clothes', 'food', 'games', 'electronics']

const firstDiv = document.querySelector('.first-div') // this allows us to select the element
// firstDiv
const newUL = document.createElement('ul') // allows to create an element
firstDiv.appendChild(newUL) // this allows us to add that element to another element

for(let i = 0; i < products.length; i++){
	const newLI = document.createElement('li')
	newLI.innerText = products[i]
	newUL.appendChild(newLI)
}

firstDiv.childNodes

// nodeList is not live, its a shallow copy
// htmlCollections are live it has direct reference to the element
