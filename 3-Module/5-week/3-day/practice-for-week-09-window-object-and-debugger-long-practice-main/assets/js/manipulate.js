import { findFirstElementOfTag, findElementsOfTag, findElementsOfClass } from "./search.js";

export const changeTitle = () => {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here

	findFirstElementOfTag('TITLE').innerText = 'Alex Betita'
}

export const changeHeader = () => {
    // Change the name in the h1 of the page to your name

    // Your code here
	findFirstElementOfTag('H1').innerText = 'Alex Betita'
}

export const changeAboutMe = () => {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
	findElementsOfClass('section')[0].querySelector('p').innerText = 'I am a software engineer!'
}
