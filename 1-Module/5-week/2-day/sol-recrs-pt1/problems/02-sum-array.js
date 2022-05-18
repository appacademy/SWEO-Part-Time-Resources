/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/
//arr = [1, 2, 3]
function sumArray(arr) {
  //edge case
  if(arr.length === 0){
    return 0;
  }
  //base case
  if(arr.length === 1){
    return arr[0];
  }

  else{
    //recursive step
    let last = arr.pop(); // 3

    //recursive case
    return last + sumArray(arr)
  }
}

console.log(sumArray([])); //  6
console.log(sumArray([1, 2, 3])); //  6
// sumArray([0, 1, -3]); //  -2
// sumArray([1, 2, 3, 4, 5]); // 15
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}