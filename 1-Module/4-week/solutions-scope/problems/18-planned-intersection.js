/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.


Example 1:
let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

Example 2:
let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

*******************************************************************************/

// your code here
// const plannedIntersect = array => secondArray => array.filter(el => secondArray.includes(el));

let plannedIntersect = (firstArr) => {
	return (secondArr) => {
	  let newArr = []
	  //["a", "b", "c"] i = 0, i = 1, i = 2
	  for( let i in firstArr){
		let firstEl = firstArr[i]
		for( let j in secondArr){
	 		let secondEl = secondArr[j]
		  	if (firstEl === secondEl){
				newArr.push(firstEl)
			  }
		}
	  }
	  return newArr
	}
  }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/

try {
  module.exports = plannedIntersect;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
