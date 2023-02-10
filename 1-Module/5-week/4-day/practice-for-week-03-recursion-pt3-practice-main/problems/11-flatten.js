/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// function flatten(arr) {
// 	const newArr = []
// 	for(let i = 0; i < arr.length; i++){ // base case
// 		const el = arr[i]
// 		if(Array.isArray(el)){
// 			newArr.push(...flatten(el))
// 		} else {
// 			newArr.push(el)
// 		}
// 	}
// 	return newArr
// }

function flatten(arr){
	if(typeof arr === 'number') return [arr]
	if(arr.length === 0) return arr
	return flatten(arr[0]).concat(flatten(arr.slice(1)))
}

// function flatten(arr){
// 	if(!arr.length) return []
// 	return typeof arr[0] !== 'object' ? [arr[0], ...flatten(arr.slice(1))] : flatten(arr[0]).concat(flatten(arr.slice(1)))
// }

// subsets

// let x = 0;
// let y = 0;
// let z = 0;

// (function (){
// 	x = 5
// 	y = 7
// 	z = x + y
// })()

// console.log(z)

// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
// console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
// module.exports = flatten;
