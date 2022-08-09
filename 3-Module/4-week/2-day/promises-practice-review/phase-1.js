// --------------create promises
function stretch() {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log("done stretching");
      //only after 1000 ms, should we finish logging stretching stretching and resolving that there.
      resolve();
    },1000);
  })
}

// stretch();

function runOnTreadmill() {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log("done running on treadmill");
      resolve();
    },500);
  })
}

function liftWeights() {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log("done lifting weights");
      resolve();
    },2000);
  })
}

function callbackHell() {
  // to achieve an order that we want with asynchronous code without using promises, we have to resort to something older which is "callback chaining / callback hell" where we nest the callbacks within other callbacks.
  setTimeout(()=>{
    console.log("done stretching");
    //we need to nest the callback in order for us to get the sync behavior that we desire of running treadmill only after we finish stretching
    setTimeout(()=>{
      console.log("done running on treadmill");
      setTimeout(()=>{
        console.log("done lifting weights");
        console.log("done working out");

      }, 2000);
    }, 500);
  }, 1000)
}

// ---------------consume the promise
function workout() {
  // stretch() --> returns a promise. WE CAN ONLY USE .then with a promise!
  stretch()
    .then((data)=>runOnTreadmill(data))
    .then(liftWeights)
    .then(()=>console.log("done working out"))
    .catch((err)=>console.log(err))
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