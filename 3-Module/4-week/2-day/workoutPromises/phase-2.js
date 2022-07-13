function stretch(timeLeft) {
  return new Promise((resolve, reject) => {
    if (timeLeft >= 1000) {
      timeLeft -= 1000;
      setTimeout(() => {
        console.log('done stretching');
        resolve(timeLeft);
      }, 1000);
    } else {
      // throw new Error("you don't have enough time to stretch");
      reject("you don't have enough time to stretch");
    }
  });
}

function runOnTreadmill(timeLeft) {
  return new Promise((resolve, reject) => {
    if (timeLeft >= 500) {
      timeLeft -= 500;
      setTimeout(() => {
        console.log('done running on treadmill');
        resolve(timeLeft);
      }, 500);
    } else {
      // throw new Error("you don't have enough time to run on treadmill");
      reject("you don't have enough time to run on treadmill");
    }
  });
}

function liftWeights(timeLeft) {
  return new Promise((resolve, reject) => {
    if (timeLeft >= 2000) {
      timeLeft -= 2000;
      setTimeout(() => {
        console.log('done lifting weights');
        resolve(timeLeft);
      }, 2000);
    } else {
      // throw new Error("you don't have enough time to lift weights");
      reject("you don't have enough time to lift weights");
    }
  });
}

function workout(totalTime) {
  // (error) => console.log(error)

  stretch(totalTime)
    .then((timeLeft) => runOnTreadmill(timeLeft))
    .then((timeLeft) => liftWeights(timeLeft))
    .then((timeLeft) =>
      console.log(`done working out with ${timeLeft / 1000} seconds left`)
    )
    .catch((error) => console.log(error));
  // .catch((error) => console.log(error.message));
}

async function workout(totalTime) {
  try {
    let timeLeft = await stretch(totalTime);
    timeLeft = await runOnTreadmill(timeLeft);
    timeLeft = await liftWeights(timeLeft);
    console.log(`done working out with ${timeLeft / 1000} seconds left`);
  } catch (error) {
    console.log(error);
  }
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
