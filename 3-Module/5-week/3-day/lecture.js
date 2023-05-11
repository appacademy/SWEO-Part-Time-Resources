document.addEventListener('DOMContentLoaded', e => {

	const body = document.querySelector('body')

	const profileDiv = document.createElement('div')

	body.appendChild(profileDiv)

	// styling to the profile div
	profileDiv.style.width = '100%'
	profileDiv.style.height = '100%'
	profileDiv.style.display = 'flex'
	profileDiv.style.alignItems = 'center'
	profileDiv.style.justifyContent = 'center'
	// profileDiv.style.border = '5px solid red'
	// profileDiv.style.overflow = 'none'
	profileDiv.style.flexDirection = 'column'


	const profileInformation = document.createElement('div')

	profileDiv.appendChild(profileInformation)

	// styling to profile information
	profileInformation.style.border = '5px black solid'
	profileInformation.style.height = '225px'
	profileInformation.style.width = '200px'
	profileInformation.style.display = 'flex'
	profileInformation.style.position = 'relative'
	profileInformation.style.flexDirection = 'column'
	profileInformation.style.justifyContent = 'center'
	profileInformation.style.alignItems = 'center'


	const profileImg = document.createElement('img')

	profileImg.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png')

	// profileImg.setAttribute('src', null)
	// profileImg.removeAttribute('src')

	profileInformation.appendChild(profileImg)

	profileImg.style.width = '200px'
	profileImg.style.height = '200px'

	const button = document.createElement('button')

	profileInformation.appendChild(button)

	button.innerText = "Click Me!"

	// button styling

	button.style.cursor = 'pointer'
	button.style.width = '100px'
	button.style.position = 'absolute'
	button.style.bottom = '40px'

	button.addEventListener('click', e => {
		// console.log(e)
		// e.target.innerText = 'CHANGED BUTTON!'
		const informationDiv = document.createElement('div')
		profileDiv.appendChild(informationDiv)

		informationDiv.innerText = 'random fact'
	})

	const profileName = document.createElement('div')
	const profileInput = document.createElement('input')

	profileDiv.appendChild(profileName)
	profileDiv.appendChild(profileInput)

	profileInput.addEventListener('change', e => {
		profileName.innerText = ''
		profileName.innerText = e.target.value
	})
})
