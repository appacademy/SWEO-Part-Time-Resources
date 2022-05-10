function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hey im in a promise")
    }, 1000)
  })
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Done running"))
    }, 500)
  })
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("done lifting weights"))
    }, 2000)
  })
}
const resFunc = (res, one, two, three) => {
  console.log(res)
  console.log(one)
  console.log(two)
  console.log(three)
}
function workout() {
  // stretch().then(runOnTreadmill).then(liftWeights)
  stretch()
  .then(res => {
    console.log(res)
    return "Hey Im in a .then"
  }).then(resFunc).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
  
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