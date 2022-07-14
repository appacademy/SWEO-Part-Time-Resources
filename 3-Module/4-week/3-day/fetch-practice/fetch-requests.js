/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

//! Using promise chain (.then)
fetch('/products').then((response) => console.log(response.status));

//? Using async await
(async () => {
  const result = await fetch('/products');
  console.log(result.status);
})();

// let getProducts = async () => {
// 	const res = await fetch("/products");
// 	console.log(res.status)
// }

// getProducts();

/* ====== 2. Print true if the status of the response was successful ====== */

//! Using promise chain (.then)
fetch('/products').then((res) => console.log(res.ok));

//? Using async await
(async () => {
  const res = await fetch('/products');
  console.log(res.ok);
})();

/* =================== 3. Print the Content-Type Header =================== */

fetch('/products').then((response) =>
  console.log(response.headers.get('Content-Type'))
);

(async () => {
  const res = await fetch('/products');
  console.log(res.headers.get('Content-Type'));
})();

/* ============== 4. Print the body of the response as text =============== */

fetch('/products')
  .then((res) => res.text())
  .then((responseText) => console.log(responseText));

	(async () => {
		const response = await fetch("./products")
		const responseBody = await response.text();
		console.log(responseBody)
	})()