/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

async function getPosts () {
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
    message: "New Post!"
  })
}).then(response => response.json()).then(data=>console.log(data));

/* =============================== Phase 3 ================================ */
// REFACTOR ABOVE TO USE ASYNC AWAIT
// write an async function called "makePost" that will make a POST Fetch request to /posts and log the response data from the server.
async function makePost(){
  const url = "/posts"

  // regular POJO
  const bodyObj = {
    message: "request made using async / await"
  }
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    // in order to send json data to the server as a body, we need to STRINGIFY OUR DATA => turning it into json!
    body: JSON.stringify(bodyObj)
  }

  const responseObj = await fetch(url, options);
  const data = await responseObj.json();
  console.log("data from server after we made a post request:", data);
  return data; 
}
makePost();