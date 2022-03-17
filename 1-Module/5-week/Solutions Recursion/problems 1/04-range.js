/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


// function range(start, end) {
// 	// base case 1
// 	if(start > end) return []
// 	// base case 2
// 	if(start === end) return []

// 	const nums = range(start + 1, end)
// 	nums.unshift(start)
// 	return nums
// }

function range(start, end) {
	if ( end <= start){
	  return []
	}

	let num = range(start, end -1)
	num.push(end-1)
	return num
}


console.log(range(1, 5)); // [1, 2, 3, 4]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
