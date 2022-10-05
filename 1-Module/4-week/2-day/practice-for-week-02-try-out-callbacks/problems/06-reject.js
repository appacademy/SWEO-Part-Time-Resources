/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:
*******************************************************************************/
function reject(array, cb) {
  // Your code here
let newArr = []
array.forEach(function(el) {
  // console.log(el)
  if(cb(el) === false){
    newArr.push(el)
  }
})
  return newArr
}

let isEven = function(n) {
  return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
  return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = reject;
} catch(e) {
  return null;
}
