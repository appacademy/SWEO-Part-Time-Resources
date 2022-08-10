// ------------creating promise-----------
function stretch() {
  return new Promise((resolve, reject)=>{
    // do the settimeout requirements.
    setTimeout(()=>{
      console.log("done stretching");
      resolve();
    }, 1000);
  })
}

function runOnTreadmill() {
  return new Promise((resolve, reject)=>{
    // do the settimeout requirements.
    setTimeout(()=>{
      console.log("done running on treadmill");
      resolve();
    }, 500);
  })
}

function liftWeights() {
  return new Promise((resolve, reject)=>{
    // do the settimeout requirements.
    setTimeout(()=>{
      console.log("done lifting weights");
      resolve();
    }, 2000);
  })
}

// ------------consuming the promise-----------
function workoutHell() {
  setTimeout(()=>{
    console.log("done stretching");
    setTimeout(()=>{
      console.log("done running on treadmill");
      setTimeout(()=>{
        console.log("done lifting weights");
        console.log("done working out");
      }, 2000)
    }, 500)
  }, 1000)
}


function workout() {
  // const promiseObj = stretch();

  stretch()
    .then((data)=>runOnTreadmill(data))
    .then(liftWeights)
    .then(()=>console.log("done working out"))
    .catch((error)=>console.log(error))
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