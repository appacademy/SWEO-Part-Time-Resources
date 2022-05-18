/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

//we always want to start with the smallest example

// range(1,5)  --> requires us to solve range(2,4) --> solve range(3,4) --> solve range(4,4)
function range(start, end) {
  //handle the edge case where start >= end
  if(start >= end){
    return [];
  }
  //base case
  else if(start + 1 === end){
    return [start]
  }
  else{
    return [start].concat(range(start + 1, end)) // [1].concat([range(2,4)]) --> [1] add it to [1,2,3] using concat --> [1,2,3,4]
  }
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