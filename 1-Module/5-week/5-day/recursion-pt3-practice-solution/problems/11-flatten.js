/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
***********************************************************************/

function flatten(arr) {
  let newArray = [];
  arr.forEach(function (res) {
    if (Array.isArray(res)) {
      newArray.push(...flatten(res));
    } else {
      newArray.push(res);
    }
  });
  debugger
  return newArray;
}

flatten([1, [2, [3]]]); // [1, 2, 3]

/* 
flatten([3]) // [3] 
  flatten([2, [3]]) // [2, 3]
    flatten([1, [2, [3]]) // [1,2,3]


  let arr1 = [3]
  let arr2 = [2]
  let arr3 = [1]
  let arr3 = [...arr3, ...arr2, ...arr1]
*/
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  