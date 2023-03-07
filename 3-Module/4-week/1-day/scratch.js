// PROMISES
// A promise is a commitment that sometime in the future, your code will return the value of an operation or throw an error

// function getForecastForLocation(){
//   locationRequest({
//     success: spotRequest({
//       success: forecastRequest({
//         success: handleSuccess,
//         error: handleError
//       }),
//       error: handleError
//     }),
//     error: handleError
//   });
// }
// function getForecastForLocation(){
//   locationRequest()
//     .then(spotRequest)
//     .then(forecastRequest)
//     .then(handleSuccess)
//     .catch(handleError)
// }
/*
action : the primary function of a promise
promises have 3 states: 
- pending : a promise has not become fullfilled or rejected
- fullfilled : a promise's action succeeded
- rejected : a promise's action failed

a promise that has become fullfilled or rejected has settled
- a promise can only succeed or fail once, callbacks will not be invoked multiple times
- a promise's state cannot change once it has settled
- if a promise has settled and a callback is added that matches the promise's state => the callback is immediately invoked
*/

// let p = new Promise((resolve, reject) => {
//   if (22/11 === 2) {
//     resolve()
//   } else {
//     reject()
//   }
// })

// let request = new Promise((resolve, reject) => {
//   let status = true;
//   if (status) {
//     resolve();
//   } else {
//     throw Error('REJECTED');
//   }
// });
// const receiveResolve = () => {
//   let status = false;
//   if (status) {
//     console.log('RESOLVED');
//   } else {
//     throw Error('RESOLVE REJECT');
//   }
// }
// const receiveReject  = (e) => console.log('REJECT CATCH: ', e.message);

// request.then(receiveResolve, receiveReject)
//   .then(null, receiveReject);
//   // .catch(e => console.log('CATCH: ', e.message));

//   let superPromise = Promise.all([request(), request()]);
  // if all promises in the array resolve, then the superPromise will resolve
  // if any promises in the array reject , then the superPromise will reject

  //async / await
  function walkTheDog() {
    return new Promise((resolve, reject) => {
      resolve('happy dog')
    });
  }
  async function doChores() {
    console.log('before walking the dog');
    let res = await walkTheDog()
    console.log(res);
    console.log('after walking the dog');
    return 'done';
  }

  doChores()
    .then(res => {
      console.log(res);
      return 32;
    })
    .then(res => console.log(res));