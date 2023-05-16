document.addEventListener('DOMContentLoaded', () => {

	const cookieButton = document.querySelector('#cookie')
	const localButton = document.querySelector('#local-storage')
	const sessionButton = document.querySelector('#session-storage')


	// cookies?
	// smaller forms of data
	// they can only hold up too kb of data
	// cookies can get sent through your http requests
	// cookies are ways for the client to send additional information to the server
	// cookies can live long enough till you decide to delete them or you can give them an
	// expiration
	// by default cookies are session cookies

	// syntax
	// document.cookie -> string
	// "key=value"
	// you can add parameters or options using semicolon(;)
	// "key=value; max-age=0" // delete cookies
	// document.cookie = "name=; expires = Thu, 01 Jan 1970 00:00:00 GMT"
	// "key=value; expires=Mon, May 17, 2025 19:00:12 GMT" // not a session Cookie

	cookieButton.addEventListener('click', () => {
		document.cookie = "favoriteColor=blue"

		// console.log(document.cookie.split('='))
	})


	// syntax
	// localStorage
	// window.localStorage
	// can store any amount information
	// can store JSON strings in the form of strings using stringify
	// cant be sent to the client
	// it uses methods
	// retains information even when the browser tab closes, browser closes, new tab,
	// one of the ways to delete localStorage is to delete with the use of another function

	// methods
	// setItem("key", "value") this sets the key, value pair into localStorage
	// getItem("key") returns the value in a string
	// removeItem("key") removes that key, value pair
	// clear() deletes all key, value pairs in local storage

	localButton.addEventListener('click', () => {
		// window.localStorage
		localStorage.setItem('favoriteLeagueCharacter', 'Yasuo')
		console.log(localStorage.getItem('favoriteLeagueCharacter'))
	})

	// syntax
	// sessionStorage
	// window.sessionStorage
	// can store up to 4mb of data only
	// it clears itself up when the session ends
	// when the browser is closed, when the tab is closed
	// can store JSON strings in the form of strings using stringify
	// cant be sent to the client
	// it uses methods

	// methods
	// setItem("key", "value") this sets the key, value pair into localStorage
	// getItem("key") returns the value in a string
	// removeItem("key") removes that key, value pair
	// clear() deletes all key, value pairs in local storage

	sessionButton.addEventListener('click', () => {
		// window.localStorage
		sessionStorage.setItem('favoriteLeagueCharacter', 'Yasuo')
		console.log(sessionStorage.getItem('favoriteLeagueCharacter'))
	})
})
