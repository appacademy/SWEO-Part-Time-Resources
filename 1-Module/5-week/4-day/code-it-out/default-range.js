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

// range(1,5) ==> [4] ==> [3,4] ==> [2,3,4] ==> [1,2,3,4]
// function range(start, end, result=[]) {
//   //base case; what to return if start >= end?
//   if(start >= end) return result;

//   //add the end to the beggining
//   result.unshift(end - 1);


//   const resultFromBaseCase = range(start, end-1, result); //we pass a reference of result to the next call, the next calls will UPDATE that reference.

//   console.log("resultBC:", resultFromBaseCase);
//   console.log("result:", result);

//   return result;

// }


// [1, 2, 3, 4]
function range(start, end, result=[]) {
  debugger;
  //base case; what to return if start >= end?
  if(start >= end) return [];


  //add the start to result
  result.push(start);

  //recursively do that for the next ones after start (start+1)
  range(start+1, end, result); //need to pass the reference to result array 

  //return the result afte rit has been built
  return result;

}



console.log(range(1, 5)); // [1, 2, 3, 4]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
