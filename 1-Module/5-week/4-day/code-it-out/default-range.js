/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive of the end. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
range(3 ,3)// [];
***********************************************************************/

//write the recursive range function but utilizing the default parameter of result=[]

function range(start, end, result=[]) {
  
  //-----part 1: the base case----
  //base case; what to return if start >= end?
  if(start >= end){ //start = 5 , end = 5, is 5 >= 5? it is! so we hit the base case, return, and do nothing after that.
    return result;
  }

  //-----part 2: taking the start and adding it to the result array, muating it(total)-----
  result.push(start); //1

  //-----part 3: Do part 2, but for everything after start (start + 1). Pushing in 2, 3, 4...
  // range(start + 1, end, result=[1,2])
  // range(start + 1, end, result=[1,2,3])
  // range(start + 1, end, result=[1,2,3,4])
  range(start + 1, end, result); //[1,2,3,4]


  return result;

}



console.log(range(1, 5)); // [1, 2, 3, 4]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
