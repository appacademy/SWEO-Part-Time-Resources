// action : primary function of the promise (fetching data from an API)
/*
Promises have 3 states...
- Pending : the promise has neither been fullfilled or rejected
- Fullfilled : The promise's action succeeded
- Rejected : The promise's action failed
Once a promise has settled, or become fullfilled or rejected, then it cannot change states.
A promise can only succeed or fail once - the callbacks cannot be invoked multiple times.
If a promise has already settled and a callback is added that matches the promise's state, that callback is immediately invoked.
*/
const p = new Promise((resolve, reject) => {
  //if succeed
  resolve();
  //if fail
  reject();
})

// const request = new Promise((resolve, reject) => {
//   let status = true;
//   if (status) {
//     setTimeout(() => resolve(), 1000);
//   } else {
//     throw Error('REJECT');
//   }
// })
// const recieveResolve = () => {
//   let status = false;
//   if (status) {
//     console.log("Hello");
//   } else {
//     throw Error("RESOLVE REJECT");
//   }
// }
// const recieveReject = (e) => console.log(e.message);

// request.then(recieveResolve, recieveReject)
//   .catch(e => console.log(e.message));

// let superPromise = Promise.all([arrOfPromises]);
// if all of the promises in the array resolve, then the superPromise will also resolve
// if any of the promises in the array reject , then the superPromise will also reject

//async and await
function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('happy dog');
    }, 1000);
  });
}
async function doChores() {
  console.log('before walking the dog');
  let res = await walkTheDog()
  console.log(res);
  console.log('after walking the dog');
  return res;
}

doChores()
  .then(res => {
    console.log(res)
    return 32})
  .then(res => console.log(res));