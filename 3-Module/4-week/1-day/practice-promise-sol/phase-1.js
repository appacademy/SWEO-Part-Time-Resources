function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log("done stretching");

      // we do not pass to resolve anything, so our promise value is undefined
      resolve();
    }, 1000)
  })
}

// at some point in the future, we will get a value from some operation.
// stretch();
// console.log(stretch());

function runOnTreadmill() {
  return new Promise((resolve, reject) =>{
    // reject("error on treadmill");
    setTimeout(()=>{
      console.log("done running on treadmill");
      resolve();
     
    }, 500)
  })
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting weights");
      resolve();
    }, 2000);
  });
}


// -----------consuming a promise------------
function workout() {
  stretch()
    .then(runOnTreadmill)
    .then(liftWeights)
    .then(()=>console.log("done working out"))
    .catch((err) => console.log(err));
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out