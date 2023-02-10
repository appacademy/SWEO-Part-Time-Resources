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
// 	// if(arr.length === 0) return []
// 	debugger
// 	const newArr = []
// 	for(let i = 0; i < arr.length; i++){ // base case
// 		const el = arr[i]
// 		if(typeof el === 'object'){
// 			//[2].push(...[3])
// 			//[1].push(...[2,3])
// 			//[1,2,3]
// 			newArr.push(...flatten(el)) // recursive case/step
// 		} else {
// 			newArr.push(el)
// 		}
// 	}

// 	// console.log(newArr, 'newArr')
// 	return newArr
// }

// function flatten(arr) {
// 	if(!arr.length) return []
// 	if(arr.length === 1) return [arr]

// 	return flatten(arr[0]).concat(flatten.slice(1))
// }


// function flatten(arr) {
// 	if(!arr.length) return []
// 	if(arr.length === 1) return [arr]

// 	return flatten(arr[0]).concat(flatten(arr.slice(1)))
// }

// function flatten(){
// 	let result = []
// 	for (let i = 0; i < arr.length; i++) {
// 		if (Array.isArray(arr[i])) {
// 		  result = result.concat(flatten(arr[i]));
// 		} else {
// 		  result.push(arr[i]);
// 		}
// 	}
// 	return result;
// };

function flatten(arr) {
	if(typeof arr === 'number') return [arr]
	if (!arr.length) return []
	return flatten(arr[0]).concat(...flatten(arr.slice(1)))
  }

// promise
// function flatten(arr) {
// 	// Your code here
// 	if (!arr.length) return []
// 	if (arr.length === 1) return [arr]


// 	return flatten(arr[0]).concat(flatten(arr.slice(1)))
//   }
// Big O
// promise

// static methods
// instance methods aka advanced methods



// console.log(flatten([])); // [])
// console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
