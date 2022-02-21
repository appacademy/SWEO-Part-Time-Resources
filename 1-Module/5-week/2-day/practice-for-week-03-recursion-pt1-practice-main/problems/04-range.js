/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/
// start with an empty array
// if the number is less than the start number return empty array
// Base Case below
// if the start value equals the end value return []
// if the length of arr is 0  return []
// creating a variable that is equal to our start value 
// add that value to the front of our array
// return that array.concat the recursive call
// ??


// function range(start, end) {
//   // inputs are 1, 5
//   // 2, 5
//   // 3, 5
//   // 4, 5
//  // 5, 5
//   let arr = []

//   if (start >= end ){
//     if (arr.length === 0){
//       return []
//     }
//     return arr
//   }
//   // run one 
//   //run 2
//   // run 3
//   // run 4
//   let ele = start // 1 // 2 // 3 // 4
//   arr.unshift(ele) // [1] // [2] // [3] // [4]
//   return arr.concat(range(start + 1, end)) // [1]. concat [2] .concat [3] .concat [4]. concat [] // [1,2,3,4]
// }




// write a function that takes a start and an end
// base case
// when start is equal to end I recurse
// 
function range(start, end) {
  // let newArray = []
  if (start >=  end) {
    // return newArray
    return []
  } else {
    let num = range(start + 1, end)
    // console.log(num)
    num.unshift(start)
    return num
  }
    // newArray.push(start)
    // return range(start + 1, end )

}
console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}