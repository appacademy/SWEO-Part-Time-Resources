// 1) run: node server.js
// 2) Write a function `jsonRequest` Try to see if you can make a POST FETCH request to the the url '/'  
// 3) your REQUEST BODY should be a json version of: {Hello: 'World!', april: 'is cool'}
// 4) your jsonRquest() should return after logging the data.
// 5) test by entering your fetch request into the browser's console
// 6) your BROWSER'S console should output: {Hello: 'World!', april: 'is cool'}


// remember your request components
// use this mdn if you need reference: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// -------- async await--------
async function jsonRquest(){

    const url = "/"
    //options: method, content-type if we have a body, body

    const bodyObj = {
        "august": "is cool too"
    }
    const options = {
        // request components will go here
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyObj)
    } 
    // the fetch api requires url and options
    const response = await fetch(url, options);

    // handle the response from fetch api which will return to us a promise with the response obj in it (if it resolved successfully)

    // test what would happen if we didn't await response.json() 
    const data =  await response.json();
    console.log(data);
    return data;
}

jsonRquest()

// hint: don't forget the await for a few places :)