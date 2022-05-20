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
***********************************************************************/

// addToTwelve([1, 3, 4, 7, 5]); // true
function addToTwelve(arr) {
  //base case is when arr.length is 1 we found no match (because we can't compare single match)
  if(arr.length === 1){
    return false;
  }

  //get current
  const current = arr[0]; //1
  //get adj
  const adj = arr[1]; //3

  // check if adj  + current is 12
  if(current + adj === 12){
    return true;
  }

  //still need to check for the rest of items in arr to see if they add to 12 
  const restOfResult = addToTwelve(arr.slice(1)) //either return true or false (false if we hit the base case, true if we find 12 before base case)

  return restOfResult;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}