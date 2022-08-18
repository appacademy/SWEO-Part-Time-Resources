/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:
base case -- if our start is greater than or equal to our end return []
recursive step -- increment our start passing to our recursive call
recursive call -- spreading our recursive calls passing in start + 1 and end
***********************************************************************/


function range(start, end, resArr = []) {

  if(start >= end){
    return resArr
  }
  // resArr.push(start)
  // return range(start + 1, end, resArr)
  return [start, ...range(start + 1, end)]
  // let newArr = [start]
  // return newArr.concat(range(start + 1, end))
}

console.log(range(1, 5)); // [1, 2, 3, 4]
// range(3, 4); // [3]
// range(7, 6); // []

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}