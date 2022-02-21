/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  if(arr.length === 0 || arr === []) {
    return []
  }
  return [...flatten(arr[0])]
}
flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  