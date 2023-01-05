//* DRY - Dont Repeat Yourself
// WET - 'Write Everything Twice' or 'We Enjoy Typing'
// We have a pattern that repeats at least twice
// DRY code is easier to maintain
const isConsecutive = nums => {
  const separatedBy = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];
    const num2 = nums[i + 1];

    if (num1 + separatedBy !== num2) {
      return false;
    }
  }
  return true;
}
const threeIncreasing = nums => {
  /*
    for (let i = 0; i < nums.length - 2; i++) {
      let next = nums[i + 1]
      if ( nums[i] + 1 === next && next + 1 === nums[i + 2] ) {
        return true;
      }
    }
    return false;
  */
  for (let i = 0; i < nums.length - 2; i++) {
    const consecutiveNums = [];
    for (let j = i; j < i + 3; j++) {
      consecutiveNums.push(nums[j])
    }

    if (isConsecutive(consecutiveNums)) {
      return true;
    }
  }

  return false;
}
console.log(threeIncreasing([5, 1, 2, 3, 6])); // true
console.log(threeIncreasing([5, 1, 2, 4, 6])); // false

//* SRP - Single Responsibility Principle
// Every module, class or function should have one job and do it well
// const add = (num1, num2) => num1 + num2;
// const calculator = (num1, num2, operation) => {
//   if (operation === '+') {
//     return add(num1, num2);
//   }
// }

//* Modules
// every javascript file is a module
// folders of js files can also be modules
// all modules within a project are called 'local modules'

//calculator.js
const operations = ['+', '-', '*'];

function add(num1, num2) {
  return '+'
}

function subtract(num1, num2) {
  return '-'
}

function multiply(num1, num2) {
  return '*'
}

module.exports = {
  operations,
  add,
  subtract
}
// module.exports.add = add;
// module.exports.operations = operations;

// module.exports = operations;
