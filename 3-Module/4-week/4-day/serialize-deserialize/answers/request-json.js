// 1) run: node server.js
// 2) Write a function `jsonRequest` Try to see if you can make a FETCH post request to the the url '/' to get your json data.  
// 3) enter it into the browser's console and see if you can log the data

// --------method 1 with promise chaining--------
// note: this has already been done, convert this to async await in step two.
// regular promise chaining
fetch("/", {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({"april":["is", "cool"]})
})
    .then(res => res.json())
    .then(data => console.log(data))

// remember your request components
// use this mdn if you need reference: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// --------method 2: async await--------
async function jsonRquest(){
    // YOUR CODE HERE. Use MDN Link above to help you

    // ------phase 1: make a request to the server-------
    const url = "/"
    const bodyObj = {
        "async-await-request": "this request was made using async await!!!!"
    }
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyObj)
    }
    const responseObj = await fetch(url, options); //if resolved succesfully: fetch will return a promise w/ the value of the response Object!! 

    // ------phase 2: parse the response and get our data from the server-------
    // look up response object and look up the response.json() METHOD!
 
    // log the data after we use .json() to parse it!

    // since the data within our response object is JSON, we will use .json() (which is a method of the response object) in order to grab our data
    const data = await responseObj.json();
    console.log("our data that we get from the server:", data);
    return data;
}
jsonRquest()