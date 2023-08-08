						 // event that its listening for
document.addEventListener('DOMContentLoaded', () => {

	const body = document.querySelector('body')

	const profileDiv = document.createElement('div')

	body.appendChild(profileDiv)

	const profileContent = document.createElement('div')

	// profile div
	profileDiv.appendChild(profileContent)

	profileDiv.style.display = 'flex'
	profileDiv.style.justifyContent = 'center'
	profileDiv.style.alignItems = 'center'
	profileDiv.style.height = '100%'
	profileDiv.style.flexDirection = 'column'


	// profile content
	profileContent.style.border = '4px solid black'
	profileContent.style.height = '300px'
	profileContent.style.width = '300px'

	profileContent.style.display = 'flex'
	profileContent.style.alignItems = 'center'
	profileContent.style.justifyContent = 'center'
	profileContent.style.flexDirection = 'column'

	// image
	const profileImage = document.createElement('img')

	profileImage.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png')
	// profileImage.setAttribute('src', null)
	// profileImage.removeAttribute('src')

	profileContent.appendChild(profileImage)
	profileImage.style.objectFit = 'contain'
	profileImage.style.height = '90%'
	profileImage.style.width = '100%'

	const button = document.createElement('button')

	button.innerText = 'Click Me!'

	profileContent.appendChild(button)

	button.style.cursor = 'pointer'
	button.style.marginTop = '5px'

	button.addEventListener('click', e => {
		const information = document.createElement('div')
		information.innerText = 'random fact'
		profileDiv.appendChild(information)
	})
})
