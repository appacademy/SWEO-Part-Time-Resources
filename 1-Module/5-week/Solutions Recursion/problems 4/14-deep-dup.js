/***********************************************************************
Examples:

let arr = [1, 2, 3];
let duped = deepDup(arr); // [1, 2, 3];
arr === duped // false

arr = [1, [2, [3]]];
duped = deepDup(arr); // [1, [2, [3]]]
arr === duped // false
arr[1] === duped[1] // false
arr[1][1] === duped[1][1] // false
***********************************************************************/


function deepDup(arr, duped = []) {
	// base case
	if(arr.length === 0) return duped
	duped.push(arr[0])

	// for (let ele of arr) {
	// 	// duped.push(Array.isArray(ele) ? deepDup(ele) : ele);
	// 	if( ele instanceof Array){
	// 		duped.push(deepDup(ele))
	// 	} else {
	// 		duped.push(ele)
	// 	}
	// }

	// recursive step
	// return duped

	return deepDup(arr.slice(1), duped)
}

let arr = [1, 2, 3];

let duped = deepDup(arr); // [1, 2, 3];
console.log(arr === duped) // false

arr = [1, [2, [3]]];
duped = deepDup(arr); // [1, [2, [3]]]
console.log(arr === duped) // false
console.log(arr[1] === duped[1]) // false
console.log(arr[1][1] === duped[1][1]) // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = deepDup;
} catch (e) {
  module.exports = null;
}
