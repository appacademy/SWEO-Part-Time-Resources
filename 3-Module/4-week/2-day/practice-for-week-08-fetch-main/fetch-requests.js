/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */
// .then
// fetch('/products')
//     .then(response=> console.log(response.headers.get("Content-Type")))
fetch('/products')
    .then(response=> response.text())
	.then(text => console.log(text))

// async/await
async function makeRequests(){
	const response = await fetch('/products')
	const text = await response.text()
	console.log(text)
}
// Your code here
200
/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here
true


/* =================== 3. Print the Content-Type Header =================== */

// Your code here



/* ============== 4. Print the body of the response as text =============== */

// Your code here
