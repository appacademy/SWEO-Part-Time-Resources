function stretch(time) {
  return new Promise((resolve, reject) => {
    if(time - 1000 >=0){
      setTimeout(() => {
        console.log("done stretching")
        resolve(time - 1000)
      }, 1000)
    }else{
      reject("you dont have enough time to complete this exercise")
    }
  })
}

function runOnTreadmill(time) {
  return new Promise((resolve, reject) => {
    if(time - 500 >=0){
      setTimeout(() => {
        console.log("done running")
        resolve(time - 500)
      }, 500)
    }else{
      reject("you dont have enough time to complete this exercise")
    }
  })
}

function liftWeights(time) {
  return new Promise((resolve, reject) => {
    if(time - 2000 >=0){
      setTimeout(() => {
        console.log("done lifting")
        resolve(time - 2000)
      }, 2000)
    }else{
      reject("you dont have enough time to complete this exercise")
    }
  })
}

function workout(totalTime) {
  stretch(totalTime)
  .then(res => {
    return runOnTreadmill(res)
  }).then(res => {
    return liftWeights(res)
  })
  .then(res => {
    console.log(`you finished working out with ${res / 1000} seconds left`)
  })
  .catch(err => {
    console.log(err)
  })
}
/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left