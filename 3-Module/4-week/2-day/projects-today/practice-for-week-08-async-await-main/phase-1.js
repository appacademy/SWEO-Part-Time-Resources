function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done stretching");
      resolve();
    }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve();
    }, 500);
  });
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting weights");
      // resolve();
      reject("haa nice try, don't think so!");
    }, 2000);
  });
}

// refactor this function to handle Promises using async/await instead of
  // .then and .catch
async function workout() {
  try {
    // const data = await stretch();
    await stretch();
    await runOnTreadmill();
    await liftWeights();
    console.log("done working out")
  } catch (err) {
     console.log(err);
  }

    
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