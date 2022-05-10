function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("done stretching"))
    }, 100)
  })
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Done running"))
    }, 50)
  })
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Lifting weights"))
    }, 10)
  })
}

function workout() {
  stretch().then(runOnTreadmill).then(liftWeights)
  
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