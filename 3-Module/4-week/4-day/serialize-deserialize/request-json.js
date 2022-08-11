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
    
}
