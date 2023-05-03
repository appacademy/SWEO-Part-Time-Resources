// Fetch
// allows us to make http requests in the browser

// JS browsers allow us to use the fetch api

// syntax

// fetch(url, [options])

// url = string
// options = {}

/*
options syntax
{
	"method": "POST",
	"headers" : {
		"Content-Type": "application/json",
		"Auth" : "76t5rtsg65@%172"
	}
	"body" : JSON.stringify(jsonObject)
}
*/

// fetch(url)
// this would default to a GET request

import fetch from "node-fetch";

// fetch('https://cat-fact.herokuapp.com/facts/random')
// 	.then(res => res.json())
// 	.then(body=> {
// 		console.log(body.text)
// 		console.log(body.type)
// 	})

async function makeApiCall(){
	const response = await fetch('https://cat-fact.herokuapp.com/facts/random')
	const jsonBody = await response.json()

	console.log(jsonBody.text)
}


for(let i = 0; i < 5; i++){
	makeApiCall()
}
