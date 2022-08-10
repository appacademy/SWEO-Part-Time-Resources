/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

//!!START
// using Promise chain (.then)
fetch("/products")
  .then(res => console.log(res.status));

// using async/await
(async function() {
  const res = await fetch("/products");
  console.log(res.status);
})();
//!!END



/* ====== 2. Print true if the status of the response was successful ====== */

//!!START
// using Promise chain (.then)
fetch("/products")
  .then(res => console.log(res.ok));

// using async/await
(async function() {
  const res = await fetch("/products");
  console.log(res.ok);
})();
//!!END



/* =================== 3. Print the Content-Type Header =================== */

//!!START
// using Promise chain (.then)
fetch("/products")
  .then(res => console.log(res.headers.get('Content-Type')));

// using async/await
(async function() {
  const res = await fetch("/products");
  res.headers.get('Content-Type');
})();
//!!END



/* ============== 4. Print the body of the response as text =============== */

//!!START
// using Promise chain (.then)
fetch("/products")
  .then(res => res.text())
  .then(resBody => console.log(resBody));

// using async/await
(async function() {
  const res = await fetch("/products");
  const resBody = await res.text();
  console.log(resBody);
})();
//!!END