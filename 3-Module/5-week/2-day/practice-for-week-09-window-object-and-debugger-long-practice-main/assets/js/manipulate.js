import getElementId, { findElementsOfTag, findElementsOfClass } from "./search.js"

function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
}

function changeHeader(header) {
    // Change the name in the h1 of the page to your name

    // Your code here
	getElementId('header').children[0].innerText = header;

	// document.getElementById() // htmlelement
	// document.getElementsByClassName() // htmlcollection
	// document.getElementsByTagName() // htmlcollection

	// document.querySelector(); // nodeElement
	// document.querySelectorAll(); // nodeList
}

function changeAboutMe(aboutMe) {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
	getElementId('about-me').children[1].innerText = aboutMe
}


function findTags(){
	console.log(findElementsOfTag('h2'))
}

function findClass(){
	console.log(findElementsOfClass('section'))
	console.log(document.getElementsByClassName('section'))
	console.log(document.querySelectorAll(".section"))
}



export {
	changeHeader,
	changeAboutMe,
	findTags,
	findClass
}
