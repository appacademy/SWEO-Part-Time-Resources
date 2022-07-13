//? console.log() inside the promise
function stretch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('done stretching');
      resolve();
    }, 5000);
  });
}

function runOnTreadmill() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('done running on treadmill');
      resolve();
    }, 2000);
  });
}

function liftWeights() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('done lifting weights');
      resolve();
    }, 2000);
  });
}

// //? .then()
// function workout() {
//   debugger;
//   stretch()
//     .then(runOnTreadmill)
//     .then(liftWeights)
//     .then(() => console.log('done working out'))
//     .catch((error) => console.log(error));
//   // console.log("I'm fast as f boiiiii");
// }

// //? async await
// const workout = async () => {
//   await stretch();
//   await runOnTreadmill();
//   await liftWeights();

//   console.log('done working out');
//   console.log("I'm a sad slow boiii");
// };

// //! Passing the result to the next .then() outside of the promise

// function stretch() {
//   // console.log('Hey look at me before');
//   return new Promise((resolve) => {
//     setTimeout(() => resolve('done stretching'), 1000);
//   });
// }

// function runOnTreadmill() {
//   return new Promise((resolve) => {
//     // console.log('Hey look at me during');
//     setTimeout(() => resolve('done running on treadmill'), 3000);
//   });
// }

// function liftWeights() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve('done lifting weights'), 2000);
//     // console.log('Hey look at me after');
//   });
// }

// //! .then()
// function workout() {
//   stretch()
//     .then((result) => console.log(result))
//     .then(runOnTreadmill)
//     .then((result) => console.log(result))
//     .then(liftWeights)
//     .then((result) => console.log(result))
//     .then(() => console.log('done working out'))
//     .then(() => console.log("I'm fast as f boiiiii"));
// }

// //! async await
// const workout = async () => {
//   let string = await stretch();
//   console.log(string);

//   string = await runOnTreadmill();
//   console.log(string);

//   string = await liftWeights();
//   console.log(string);

//   console.log('done working out');
//   console.log("I'm a sad slow boiii");

// };

//! Promise.all
// const workout = () => {
//   const myPromises = [stretch(), runOnTreadmill(), liftWeights()];
//   Promise.all(myPromises).then(() => console.log('done working out'));
// };

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
// console.log("this is still a quick boi tho!")
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
