const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  const resArr = [];
  let nextInc = increment; //if increment = 10, nextInc = 10...
  for(let i=0; i<10; i++){ 
    // this will always loop 10 times, even when we have increment to be 100, 1000, or 10000000000
    // 10 * time complexity of addNums --> 10 * n --> O(10n) --> O(n)
    const addNumsRes = addNums(nextInc);
    resArr.push(addNumsRes);
    nextInc += increment; //nextInc = 10; nextInc + 10 --> 20; --> 30 --> 40
  }

  return resArr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  const resArr = [];
  let nextInc = increment; //if increment = 10; nextInc will be: 10, then 20, then 30, then 40.
  for(let i=0; i<10; i++){
    const manyNumsRes = addManyNums(nextInc);
    resArr.push(manyNumsRes);
    nextInc+=increment; //nexInc increases
  }

  return resArr;

}

module.exports = [addNums10, addManyNums10];