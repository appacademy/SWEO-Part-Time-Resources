/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

fetch("/products", {
  method: "POST",
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});



/* ============================== Phase 2 ============================== */

fetch("/products", {
  method: "POST",
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}).then(res => {
  console.log({
    status: res.status, // 200
    contentType: res.headers.get('Content-Type'), // "text/html; charset=utf-8"
    redirected: res.redirected, // true
    url: res.url // /products/2
  });
});



/* ============================== Phase 3 ============================== */

const params = new URLSearchParams({
  name: "Caribbean Delight Coffee",
  description: "Made by Manatee Coffee",
  price: 11.99,
  categories: "grocery"
});
// params.append("categories", "health"); // if you want to add other categories
fetch("/products", {
  method: "POST",
  body: params,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}).then(res => {
  console.log({
    redirected: res.redirected // true
  });
});