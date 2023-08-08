function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
}

function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here
}

export const changeAboutMe = () => {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
	// const section = document.querySelector('.section')
	// const p = section.querySelectorAll('p')

	// console.log(section)

	// p[0].innerText = 'I love javascript'
	// p[1].innerText = 'I love css!'
	// for(let i = 0; i < p.length; i++){
	// 	p[i].innerText = 'I love league of legends'
	// }

	const aboutMe = document.querySelector("h2 + p");
  	aboutMe.innerText = "first paragraph"
}
