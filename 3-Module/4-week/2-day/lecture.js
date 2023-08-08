// FETCH

// is used to make http requests on the browser or in code.

// JS browser have access to the fetch function


// syntax

// fetch(url, [options])

// url = string
// options = {}

/*
	options example
{
	"method" : "POST",
	"headers" : {
		"Content-Type" : "application/json"
	},
	"body" : JSON.stringify(jsonObject)
}

*/

// if we omit the options on the fetch

// fetch('/profile')

// fetch by default will become a GET request

// if the request is successful we will get a response object back

import fetch from 'node-fetch'
// const fetch = require('node-fetch')

// async function sendRequest(){
// 	const response = await fetch('https://www.reddit.com/r/Wallstreetbets/top.json?limit=10&t=year')
// 	// console.log(response)
// 	const resData = await response.json()
// 	console.log(resData)
// }



// sendRequest()

fetch('https://www.reddit.com/r/Wallstreetbets/top.json?limit=10&t=year')
	.then(response => response.json())
	.then(resData => console.log(resData))

// console.log(response)
