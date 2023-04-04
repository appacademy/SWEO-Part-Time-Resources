//AJAX - Asynchronous Javascript and XML

//Allows for efficient client-server interaction

//FETCH

//The fetch API is used to make HTTP requests in the browser

//JS browsers have access to the fetch function

//fetch(url, [options]);

//the second parameter is an object containing many properties
//including header, body, and method

/*

{
    method: "POST",
    header: akjsdkjasf,
    body: "akjsdh"
}

*/

//If you omit the second param it will always send a get request

//The fetch function returns a PROMISE
//When the request comes back from the server, that promise will be fulfilled

//If successful, it returns a "fetch response object" containing all the requested info

//GET     "/beauty/products"

// fetch("/beauty/products")
// .then((res) => {
//     console.log(res);
//     return res.text();
// })
// .then((data) => {
//     console.log(data);
// })