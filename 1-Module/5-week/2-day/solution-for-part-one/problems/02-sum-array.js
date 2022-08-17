/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:
base case -- arr.length === 0 return 0
recursive step -- save to a variable ele = arr.pop()
recursive call -- return ele + sumArray(arr)
***********************************************************************/

function sumArray(arr) {
  // base case
  debugger
  if(arr.length === 0){
    // if(!arr.length){
    return 0
  }
  // recursive step
  let lastEle = arr.pop()
  debugger
  //recursive call || recursive case
  return lastEle + sumArray(arr)
  
}
// sumArray([1, 2, 3]); //  6
// sumArray([0, 1, -3]); //  -2
// sumArray([1, 2, 3, 4, 5]); // 15
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}