//AJAX - Asynchronous Javascript and XML

//AJAX allows for more efficient communications for clients and servers

//FETCH
//the fetch aPI, one of the most common apis 
//helps us make HTTP requests to the browser

//Let's talk about the browsers fetch function

fetch(url, [options])

/*
The 2nd parameter is an object

example:

{
    method: "POST",
    headers: {"Content-Type": "applciajkjdfkjxxxformurlencond"},
    body: awjsdnwajnd
}

*/

//2 parameters a url and an options object
//If you omit the 2nd parameter it will always do a GET request

//POST request for this url /beauty/products

// fetch("/beauty/products", { method: "POST", headers: {akjsd}, body: ajdnkajn}).then()

//Fetch returns a promise that will be fulfilled when the response comes back from the server

//IF the fetch is successful, it returns a "fetch response object" that contains info about the
//response components

//GET request to /beauty/products

fetch("/beauty/products")
.then((res) => {
    console.log(res);
    return res.text()
})
.then((data) => {
    console.log(data)
})