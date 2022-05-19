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

//addToTwelve([1, 3, 4, 7, 5]); // true
function addToTwelve(arr) {
  //base case is when arr length is 1 meaning that we didn't find a match to add to 12 OR there's only 1 left in the array (nothing to compare)
  if(arr.length <= 1){
    return false;
  }

  //get the front element
  const frontEl = arr[0];
  //get the adjacent element
  const adjEl = arr[1];

  //compare frontEl and adjEl to see if they add to 12, return true]
  if(frontEl+adjEl === 12){
    return true;
  }

  //leverage recursion to find the next results if none of the above was returned
  const restOfResult = addToTwelve(arr.slice(1)); //true or false (false if base case is hit, otherwise if match found restOfResult === true);

  return restOfResult;

}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}