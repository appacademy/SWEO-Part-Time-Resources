/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

async function getPosts() {
  const res = await fetch('/posts');
  const body = await res.json();
  console.log("our posts from server:", body);
  return body;
};
getPosts();



/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

fetch('/posts', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    message: "MOST RECENT POST"
  })
}).then(response => response.json()).then(data => console.log(data));

/* =============================== Phase 3 ================================ */
// REFACTOR ABOVE TO USE ASYNC AWAIT
// write an async function called "makePost" that will make a POST Fetch request to /posts and log the response data from the server.
async function makePost() {
  // phase 1 is to make the request to the server (CRUD operations, etc.)
  const url = "/posts";
  const bodyObj = {
    message: "hey this is made using async await fetch request!"
  }
  const options = {
    // our REQUEST components go here!
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(bodyObj)
  }
  const responseObj = await fetch(url, options); //if resovled successfully fetch returns a promise with the value of ...a response object
  // console.log(responseObj);
  // we need to extra the data (json data) inside the response body
  // const data = await responseObj.text();
  
  const data = await responseObj.json(); //.json() will parse response that is in the format of JSON and give us the DATA after we parse the JSON. 

  // phase 2 is to handle the response from the server, and log it out!
  console.log("this is test data from the server response:", data);
  return data;

}
