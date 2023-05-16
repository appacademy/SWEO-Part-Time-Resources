document.addEventListener('DOMContentLoaded', () => {

	const cookieButton = document.querySelector('#cookie')
	const localButton = document.querySelector('#local-storage')
	const sessionButton = document.querySelector('#session-storage')

	// treat cookies as key value pairs
	// syntax
	// "key=value" -> str
	// semi colon is to add other parameters
	// "key=value;key=value;key=value"

	cookieButton.addEventListener('click', () => {
		document.cookie = "favoriteColor=blue"
		document.cookie = "favoriteArtist=Joji"

		console.log(document.cookie)
		const splitCookiesBySemiColon = document.cookie.split(';')
		const splitCookiesByEquals = splitCookiesBySemiColon.map(e => e.split('='))

		console.log(splitCookiesByEquals[0][1])
		console.log(splitCookiesByEquals[1][1])
	})

	// localStorage
	// found in the window Object/BOM
	// it has methods
	// syntax
	// window.localStorage / localStorage
	// methods
	// setItem("key", "value")
	// getItem("key")
	// removeItem("key")
	// clear() // removes all your localStorage data

	localButton.addEventListener('click', () => {
		// window.localStorage
		localStorage.setItem('favoriteColor', 'blue')
		console.log(localStorage.getItem('favoriteColor'))
		console.log(localStorage)
	})

	// sessionStorage
	// found in the window Object/BOM
	// it has methods
	// syntax
	// window.sessionStorage / sessionStorage
	// methods
	// setItem("key", "value")
	// getItem("key")
	// removeItem("key")
	// clear() // removes all your sessionStorage data

	sessionButton.addEventListener('click', () => {
		// window.sessionStorage
		sessionStorage.setItem('favoriteColor', 'blue')
		console.log(sessionStorage.getItem('favoriteColor'))
		console.log(sessionStorage)
	})

})
