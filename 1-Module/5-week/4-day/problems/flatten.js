/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:


***********************************************************************/

// const flatten = arr => {
//   // go through each ele and check its an arr
//   // if it is an arr, then i want call flatten with that array.
//   // if its not an arry, then i just push that ele to a newArr
//   // at the end return my newArr
//   debugger
//   const newArr = [];
  
//   arr.forEach((ele, i, arr) => {
//     debugger
//     if (Array.isArray(ele)){
//       newArr.push(...flatten(ele));
//     } else {
//       newArr.push(ele);
//     }
//   });
//   return newArr;
// }

// function flatten(arr) {
//   if (arr.length <= 1) return arr;
//   let popped = arr.pop();

//   if (Array.isArray(popped)) {
//     return flatten(arr).concat(...popped);
//   }

//   return flatten(arr).concat(popped);
// }

// function flatten(arr, res=[]) {
//   // Your code here
//   if(arr.length===0){
//     return []
//   }
//   for(let i=0; i<arr.length; i++){
//     if(Array.isArray(arr[i])){
//       flatten(arr[i], res)
//     }else{
//       res.push(arr[i])
//     }
//   }
//   return res
// }




// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  