const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
// function addNums10(increment, answer = [], count = 0) {
function addNums10(increment) { // Space O(1) Time O(n)
  let array = []
  // increment is 100     10 * 100         100 += 100
  // for(let i = increment; i <= 10 * increment ; i+=increment){
  //   array.push(addNums(i))
  // }
  for (let i = 1; i <= 10; i++){ // O(1)
    array.push(addNums(increment * i)); // O(n)
  }
  return array // [1,2,3,4,5,6,7,8,9,10] O(1)
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let array = []
  for (let i = 1; i <= 10; i++){ // O(1)
    array.push(addManyNums(increment * i)); // Time Complexity O(n ^ 2)
  }
  return array // [1,2,3,4,5,6,7,8,9,10] O(1)
}



module.exports = [addNums10, addManyNums10];