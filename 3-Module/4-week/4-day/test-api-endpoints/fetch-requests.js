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
})

/* =============================== Phase 3 ================================ */
// REFACTOR ABOVE TO USE ASYNC AWAIT
// write an async function called "makePost" that will make a POST Fetch request to /posts and log the response data from the server.