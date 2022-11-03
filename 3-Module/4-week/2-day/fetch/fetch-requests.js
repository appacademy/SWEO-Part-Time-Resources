/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here
fetch('/products').then(res => console.log(res.status))

(async () => {
    const res = await fetch('/products')
    console.log(res.status)
})()


/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here
fetch('/products').then(res => console.log(res.ok))



/* =================== 3. Print the Content-Type Header =================== */

// Your code here
fetch('/products').then(res => console.log(res.headers.get('Content-Type')))



/* ============== 4. Print the body of the response as text =============== */

// Your code here
fetch('/products')
    .then(res => res.text())
    .then(resBody => console.log(resBody))
