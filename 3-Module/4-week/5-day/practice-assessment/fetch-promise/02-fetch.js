if (!fetch) {
  var fetch = require('./test/node-fetch')(1);
}

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

// Your code here
async function editColor(){
  const url = "/colors/1";
  const options = {
    method: "PUT",
    headers:{
      "content-type": "application/json"
    },
    body: JSON.stringify({
      color: "green"
    })
  }
  const responseObj = await fetch(url, options); //fetch if resolve successfully will return a promise w/ the response object. Await will tehn take the response object and store it in the variable responseObj variable.

  const data = await responseObj.json(); //await for our async operation .json() to parse the response object's json data and give us the data
  console.log(data);
  return data;
}
editColor()


// --------------christopher's solution----------------
fetch("/colors/1", {
  method: "PUT",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify({
    "color": "green"
  })
}).then(
  result => result.json()
).then(
  data => console.log(data)
)
// --------------jack's solution----------------
async function lookingData() {
  const url = `/colors/1`;
  const options = {
    method: `PUT`,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      color: "green",
    }),
  };
  const resObj = await fetch(url, options);
  const data = await resObj.json();
  console.log(`this is data`, data);
  return data;
}

lookingData();
