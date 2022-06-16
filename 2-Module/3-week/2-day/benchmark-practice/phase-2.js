const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let nextInc = increment; // addNums(10) // addNums(20)// addNums(30)
  let resArr = [];
  for(let i=0; i<10; i++){
    resArr.push(addNums(nextInc));
    nextInc += increment;
  }
  return resArr;
}


const increment = 1;

const sums = addNums10(increment);
console.log(sums);

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