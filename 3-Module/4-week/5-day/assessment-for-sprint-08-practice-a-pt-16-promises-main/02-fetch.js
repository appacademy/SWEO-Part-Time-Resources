if (!fetch) {
  var fetch = require('./test/node-fetch')(1);
}


// fetch("/colors/1", {
// 	"method" : "PUT",
// 	"headers": {
// 		"Content-Type" : "application/json"
// 	},
// 	"body": JSON.stringify({
// 		"color": "green"
// 	})
// }).then(resObj => resObj.json())
//   .then(resBody => console.log(resBody))

const body = JSON.stringify({
	"color": "green"
})

const headers =  {
		"Content-Type" : "application/json"
}
const editColor = async (method, url) => {
	const resObj = await fetch(url, {
		method,
		headers,
		body
	})
	const resBody = await resObj.json()
	console.log(resBody)
}
editColor("PUT", "/colors/1")

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

// Your code here
