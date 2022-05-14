if (!fetch) {
  var fetch = require('./test/node-fetch')(1);
}

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

// Your code here
(async function () {
  let res = await fetch('/colors/1', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "color": "green"
    })
  }
  )
  res = await res.json()
  console.log(res)
})()





// fetch('/colors/1', {
//   method : "PUT",
//   headers : {
//     "Content-Type" : "application/json"
//   },
//   body : JSON.stringify({
//     "color": "green"
//   })
// }).then(res => {
//   return res.json()
// }).then(res => {
//   console.log(res)
// })
// fetch('/colors/1', {
//   method : "PUT",
//   headers : {
//     "Content-Type" : "application/json"
//   },
//   body : JSON.stringify({
//     "color": "green"
//   })
// }).then(res => {
//   console.log(res.json())
//   console.log(JSON.parse(res.body))
// })