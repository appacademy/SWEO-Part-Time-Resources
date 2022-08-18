/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false

basee case -- if our array length <= 1 return false || if two adjacent numbers added together equal twelve return true
recursive step -- arr.shift || arr.slice(1)
recursive is calling our function with either new array that is sliced or our mutated array
***********************************************************************/


function addToTwelve(arr) {
  // Your code here
  if(arr.length <= 1) return false
  if(arr[0] + arr[1] === 12) return true

  return addToTwelve(arr.slice(1))
}

addToTwelve([1, 3, 4, 7, 5]); // true

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}