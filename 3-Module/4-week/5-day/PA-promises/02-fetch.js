if (!fetch) {
  var fetch = require('./test/node-fetch')(1);
}

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

// fetch('/colors/1', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     color: 'green',
//   }),
// })
//   // .then((myResponse) => myResponse.json())
//   .then((myResponse) => myResponse.json())
//   .then((body) => console.log(body));

// const test = () => {
//   return new Promise((resolve) => {
//     resolve(5);
//   });
// };

// test()
//   .then((num) => num + 5)
//   .then((newNum) => console.log(newNum));

const myHeaders = {"Content-Type": "application/json"};
const myBody = {color: "green"};
const bodyStringified = JSON.stringify(myBody);

fetch('/colors/1', {
    method: 'PUT',
    headers: myHeaders,
    body: bodyStringified
  })
    .then(res => res.json())
    .then(resBody => console.log(resBody))