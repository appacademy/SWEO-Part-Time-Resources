function stretch(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  const timeNeeded = 1000;
  return new Promise((resolve, reject) => {
    if (timeNeeded <= timeLeft) {
      console.log("done stretching");
      resolve(timeLeft - timeNeeded);
    } else {
      reject("Error: you don't have enough time to stretch");
    }
  });

}


function runOnTreadmill(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  const timeNeeded = 500;
  return new Promise((resolve, reject) => {
    if (timeNeeded <= timeLeft) {
      console.log("done running on treadmill");
      resolve(timeLeft - timeNeeded);
    } else {
      reject("Error: you don't have enough time to run");
    }
  });
}


function liftWeights(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  const timeNeeded = 2000;
  return new Promise((resolve, reject) => {
    if (timeNeeded <= timeLeft) {
      console.log("done lifting weights");
      resolve(timeLeft - timeNeeded);
    } else {
      reject("Error: you don't have enough time to lift");
    }
  });
}

// 2000
function workout(totalTime) {
  // refactor your code from phase 1
  // Your code here
  stretch(totalTime)
	.then((result) => {
		console.log(result, 'result is')
		return runOnTreadmill(result)
	})
	.then((result) => liftWeights(result))
	.then((result) =>
		console.log(`done working out with ${result / 1000} seconds left`)
		)
	.catch((err) => console.log(err));

//   const firstResult = stretch(totalTime).then((result) => runOnTreadmill(result)).catch((err) => console.log(err))
//   const secondResult = firstResult.then((result) => liftWeights(result)).catch((err) => console.log(err))
//   secondResult.then((result) => console.log("done working out")).catch((err) => console.log(err))
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


workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


// workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
