/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

// range(1, 5); // [1, 2, 3, 4]
// function range(start, end) {
//   //if start is greater than or === the end, then return an empty array
//   if(start >= end) return [];

//   //get start and then call range after start + 1 --> range(start+1, end)

//   //the first start and I need it in an array
//   const frontStart = [start]; // [1]
//   const restOfResult = range(start + 1, end)  //[2,3,4]
//   //[1].concat([2,3,4])
//   const finalResult = frontStart.concat(restOfResult); //[1,2,3,4]
//   return finalResult
// }

// const range = (start, end) => {
//   console.log(start, end);

//   if (end <= start) {
//     return [];
//   } else {
//     const otherNumbers = range(start + 1, end);

//     console.log({ otherNumbers, start })

//     return [start, ...otherNumbers];
//     // return ([start]).concat(otherNumbers)
//   }
// }

// function range(start, end) {
//   if (end <= start) return [];
//   let newArr = range(start, end - 1);
//   newArr.push(end - 1);
//   return newArr;
// }


function range(start, end) {
  if (start >= end) return [];
  return [...[start], ...range(start + 1, end)];
}
console.log(range(1, 5)); // [1, 2, 3, 4]


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}