// 1) run: node server.js
// 2) Write a function `jsonRequest` Try to see if you can make a FETCH post request to the the url '/' to get your json data.  
// 3) enter it into the browser's console and see if you can log the data


// remember your request components
// use this mdn if you need reference: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// --------method 1 with promise chaining--------
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


// --------method 2: async await--------
async function jsonRquest(){
    const url = "http://localhost:5000/";
    const bodyObj = {
        "april-cohort": ["is", "very", "cool", 1]
    } 
    const options = {
        method: "POST", 
        headers: {
            "content-type": "application/json"
        },
        // JSON.stringify will turn our data (i.e an JS object) INTO JSON STRING!!!
        body: JSON.stringify(bodyObj)
    }
    const resObj = await fetch(url, options);

    // NOTE IMPORTANT: Server will return JSON data but the fetch will wrap it in a response object. We will need to parse that response object `using response.json()` to get our data.
    const data = await resObj.json();
    console.log("our data from the server after parsing it:", data);
    return data;

    // ------------------UNDER THE HOOD--------------
    // 1) we made the request with fetch,  
    // but now we need to handle the response from the server!!!!
    // 2) fetch: returns a promise with a value of a response object, looks something like this: Promise {responseObject}
    // 3) await will take the VALUE of the promise (responseObject) and store in resObj => responseObject
    // 4) in order to parse the responseObject to get our data (data is inside response object), we need to use .text or .json, etc. (look up `RESPONSE` on mdn). 
    // 5) In this case we are using .json because it's in json format and we need to parse it.
    // 6) await the .json() method since the .json() is in fact asynchronous, so we have to await for it to finish.
    // 7) after all that we finally have our data!.
}
jsonRquest()