const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let sums = []; // because the length is always going to be 10, constant space
  for (let i = increment; i <= 10 * increment; i += increment){ // 10 * increment because our n is going to be increasing by incrememnt every iteration, and we want it to happen 10 times.
    sums.push(addNums(i)); // addNums has linear time complexity
  } // this loop always runs 10 times, regardless of the input - constant time
  return sums;
}

// time = linear
// space variables: increment = integer (constant) / sums = array that always ends with 10 length regardless of input (constant) / i = integer (constant)
// space = constant

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let sums = []; // because the length is always going to be 10, constant space
  for (let i = increment; i <= 10 * increment; i += increment){
    sums.push(addManyNums(i)); // addManyNums has quadratic time complexity ( n * n or n^2 )
  } // always runs 10 times, regardless of the input - constant time
  return sums;
}

// time = quadratic
// space variables: increment = integer (constant) / sums = array that always ends with 10 length regardless of input (constant) / i = integer (constant)
// space = constant

module.exports = [addNums10, addManyNums10];