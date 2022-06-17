/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:


***********************************************************************/

// const flatten = arr => {
//   // iterate through my arr
//   // check to see if the ele is an individual ele or if its an array
//   // if it's another array, then i want to call flatten on that array and repeat this process
//   // if its not an array, then i just push into a newArr
//   // return my newArr
//   debugger
//   const newArr = [];

//   arr.forEach((ele, i, arr) => {
//     debugger
//     if (Array.isArray(ele)) {
//       newArr.push(...flatten(ele));
//     } else {
//       newArr.push(ele);
//     }
//   })

//   return newArr;
// }

function flatten(arr, res = []) {
  if (arr.length === 0 && res.length > 0) {
    return res;
  } else if (arr.length === 0) {
    return [];
  }
  if (Array.isArray(arr[0])) {
    res.push(...arr[0]);
    return flatten(...arr.slice(1), res);
  } else {
    res.push(arr[0]);
    return flatten(arr.slice(1), res);
  }
}

// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  