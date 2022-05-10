function stretch(timeLeft) {
  let timeNeeded = 1000
  return new Promise((resolve, reject) => {
    if(timeLeft - timeNeeded >=0){
      setTimeout(() => {
        console.log("Done stretching")
        resolve(timeLeft -timeNeeded)
      }, timeNeeded)
    }else{
      reject("Not enough time to complete with exercise")
    }
  })
}


function runOnTreadmill(timeLeft) {
  let timeNeeded = 500
  return new Promise((resolve, reject) => {
    if(timeLeft - timeNeeded >=0){
      setTimeout(() => {
        console.log("done running")
        resolve(timeLeft -timeNeeded)
      }, timeNeeded)
    }else{
      reject("Not enough time to complete with exercise")
    }
  })
}


function liftWeights(timeLeft) {
  let timeNeeded = 2000
  return new Promise((resolve, reject) => {
    if(timeLeft - timeNeeded >=0){
      setTimeout(() => {
        console.log("done lifting")
        resolve(timeLeft -timeNeeded)
      }, timeNeeded)
    }else{
      reject("Not enough time to complete with exercise")
    }
  })
}


function workout(totalTime) {
  stretch(totalTime).then(res => {
    return runOnTreadmill(res)
  }).then(res => {
    return liftWeights(res)
  }).then(res => {
    console.log("Done working out with ", res / 1000, "Seconds left" )
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