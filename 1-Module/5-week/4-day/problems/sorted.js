/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:


***********************************************************************/

// const isSorted = arr => {
//   // base case arr.length < 2 return true
//   // shift the first item, then compare that with index 0
//   // if my shifted is greater than index 0, return false

//   if (arr.length < 2) return true;
//   let ele = arr.shift();
//   if (ele > arr[0]) return false;
//   return isSorted(arr);
// }

function isSorted(arr) {
  if ( arr[0] >= arr[1]){
    return false
  }
  else if (arr.length >=1) {return isSorted(arr.slice(1))}
  return true;
}


console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 4, 3, 5])); // false
console.log(isSorted([2, 4, 6, 7, 8])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}