// let jsonBlob = "{"name": "Will"}"

// let nonJSONObj = {name: "will"}
// let JSONObj = JSON.stringify(nonJSONObj)

// console.log("JSON OBJ", JSONObj)

// console.log("PARSED JSON", JSON.parse(JSONObj))




fetch("/users/1")
    .then(res => res.json())
    .then(resBody => console.log(resBody.name))

    /* ============================== PRACTICE ============================== */

    /* ============================== Phase 1 ============================== */

// Your code here
fetch("/products", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
})


/* ============================== Phase 2 ============================== */

// Your code here
fetch("/products", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
}).then(response =>{
    console.log({
        status: response.status,
        contentType: response.headers.get("Content-Type"),
        redirected: response.redirected,
        url: response.url
    })
})

async function phase2(){
    try{
    const response = await fetch("/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
    })
    const answers = {
        status: response.status,
        contentType: response.headers.get("Content-Type"),
        redirected: response.redirected,
        url: response.url
    }
    console.log(answers)
    return answers
} catch(e){
    console.log(e)
}
}
phase2()

/* ============================== Phase 3 ============================== */

// Your code here
let searchParams = new URLSearchParams({
    name: "Caribbean Delight Coffee",
    description: "Made by Manatee Coffee",
    price: 11.99,
    categories: "grocery"
  });

  fetch("/products", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: searchParams
}).then(response =>{
    console.log({
        redirected: response.redirected,
    })
})

    /* ============================== PRACTICE 2 ============================== */


/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/
fetch('/posts')
  .then(res => {
    console.log(res.status)
    console.log(res.headers.get("Content-Type"))
   return res.json()
  })
  .then(resBody => console.log(resBody));

// Your code here


/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

// Your code here
let content = {
  "Content-Type": "application/json"
}
fetch('/posts', {
  method: 'POST',
  headers: content,
  body: JSON.stringify({
    message: "New Post!"
  })
}).then(async response => {
console.log(response.status)
let responseBody = await response.json()
console.log(responseBody)
} )
