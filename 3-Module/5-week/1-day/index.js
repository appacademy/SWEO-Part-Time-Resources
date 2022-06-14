console.log(document.children[0].children[1].children[1].children[0].children[0])

const innerMost = document.children[0].children[1].children[1].children[0].children[0]


const newDiv = document.createElement('div')

const newButton = document.createElement('button')

newDiv.setAttribute('id', 'innerx2most')

innerMost.appendChild(newDiv)

innerMost.style.border = '1px solid black'
innerMost.style.height = '100vh'
innerMost.style.width = '100vw'
innerMost.style.position = 'relative'

newDiv.style.border = '2px solid red'
newDiv.style.height = '100px'
newDiv.style.width = '100px'

newDiv.appendChild(newButton)
newButton.innerText = 'PRESS HERE';

newButton.addEventListener('click', async e =>{
	// const resObj = await fetch('https://swapi.dev/api/people/1')
	// const resBody = await resObj.json()

	// newD.innerText = resBody.name
	const getData = async (animeTitle) => {
		const url = `https://anime-facts-rest-api.herokuapp.com/api/v1/${animeTitle}`;
		const fetched = await fetch(url);
		const data = await fetched.json();
		const facts = data.data;

		setInterval(() => {
			const random = Math.floor(Math.random() * data.data.length);
			const newD = document.createElement('div')

			const randomTop = Math.floor(Math.random() * parseInt(screen.height))
			const randomLeft = Math.floor(Math.random() * parseInt(screen.width))

			newD.setAttribute('class', 'red-box');

			newD.addEventListener('click', e=>{
				e.target.remove()
			})

			innerMost.appendChild(newD)
			// newD.style.height = 'auto'
			// newD.style.width = 'auto'
			newD.style.position = 'absolute'

			newD.style.borderRadius = '50%'
			newD.style.top = `${randomTop}px`;
			newD.style.left = `${randomLeft}px`;
			newD.style.backgroundColor = 'red'
			newD.innerText = facts[random].fact
			newD.style.margin = '2px'
			newD.style.height = '50px'

			// const space = document.createElement('div')
			// space.style.height = '10px'
			// space.style.width = '100%'
			// innerMost.appendChild(space)

			console.log(innerMost.children)
		}, 500);
	  };

	  getData("demon_slayer");

})


innerMost.addEventListener('click', e => {
	console.log(e.target)
})


// document.addEventListener('DOMContentLoaded', (e)=>{
// 	document.querySelector('h1').innerText = 'Hello World'
// })



console.log(window.document === document)
