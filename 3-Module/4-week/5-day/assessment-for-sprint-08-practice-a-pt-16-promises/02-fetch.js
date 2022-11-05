if (!fetch) {
  var fetch = require("./test/node-fetch")(1);
}

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

// Your code here

const headers = { "Content-Type": "application/json" };
const body = JSON.stringify({
  color: "green",
});
// fetch("/colors/1", {
//   headers,
//   method: "PUT",
//   body,
// })
//   .then((res) => {res.json()})
//   .then((resBody) => console.log(resBody));
(async () => {
  let res = await fetch('/colors/1', {
    method: 'PUT',
    headers: {
      "Content-Type":  "application/json"
    }, 
    body: JSON.stringify({
      "color": "green"
    })
  })

  if(res.ok){
    res = await res.json()
    console.log(res)
  }
}
)()

