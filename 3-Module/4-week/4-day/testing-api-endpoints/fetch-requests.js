/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

// Your code here



/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

// Your code here

(async () => {
  let res = await fetch('/posts', {
    method: 'POST',
    headers: {
      "Content-Type":  "application/json"
    }, 
    body: JSON.stringify({
      "message": "this is  a iife post in browser"
    })
  })

  if(res.ok){
    res = await res.json()
    console.log(res)
  }
}
)()