//? console.log() inside the promise
function stretch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('done stretching');
      resolve();
    }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('done running on treadmill');
      resolve();
    }, 1000);
  });
}

function liftWeights() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('done lifting weights');
      resolve();
    }, 1000);
  });
}

function workout() {
  stretch()
    .then(runOnTreadmill)
    .then(liftWeights)
    .then(() => console.log('done working out'));
  // .then(() => console.log("I'm fast as f boiiiii"));
  console.log("I'm fast as f boiiiii");
}

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

// function workout() {
//   stretch()
//     .then((result) => console.log(result))
//     .then(runOnTreadmill)
//     .then((doneRunning) => console.log(doneRunning))
//     .then(liftWeights)
//     .then((result) => console.log(result))
//     .then(() => console.log('done working out'));
//   // console.log("I'm fast as f boiiiii");
// }

//* async await
// async function workout() {
// const workout = async () => {
//   await stretch().then(runOnTreadmill);
//   await liftWeights();
//   console.log('done working out');

//   console.log("I'm a sad slow boi");
// };

// const workout = async () => {
//   let string = await stretch();
//   console.log(string);

//   string = await runOnTreadmill();
//   console.log(string);

//   string = await liftWeights();
//   console.log(string);
//   console.log('done working out');

//   // console.log("I'm fast as f boiiiii");
// };

// //! Promise.all
// const workout = () => {
//   const myPromises = [stretch(), runOnTreadmill(), liftWeights()];
//   // console.log(myPromises);
//   Promise.all(myPromises).then(() => console.log('done working out'));
// };

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
console.log('this is still a quick boi tho!');
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
