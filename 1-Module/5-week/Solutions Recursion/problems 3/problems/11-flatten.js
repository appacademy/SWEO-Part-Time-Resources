/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/



// function flatten(arr) {
// 	let newArr = []

// 	// base case
// 	for(let i = 0; i < arr.length; i++){
// 		let element = arr[i];
// 		if(Array.isArray(element)){
// 			// recursive step
// 			newArr = newArr.concat(flatten(element))
// 		} else {
// 			newArr.push(element)
// 		}
// 	}

// 	return newArr
// }

// function flatten(arr, flat = []) {
// 	if (arr.length === []) return [];
// 	arr.forEach((el) => {
// 	  if (Array.isArray(el)) {
// 		// let res = flatten(el)
// 		flatten(el, flat);
// 	  } else {
// 		flat.push(el);
// 		// recursive step
// 		arr.shift();
// 		return flatten(arr, flat);
// 	  }
// 	});
// 	return flat;
// }

// function flatten(arr) {
// 	if (arr.length === 0){
// 	  return []
// 	}
// 	if (Array.isArray(arr[0])){
// 	  return [...flatten(arr[0]), ...flatten(arr.slice(1)) ]
// 	} else {
// 	  return [arr[0],...flatten(arr.slice(1))]
// 	}
// }

// return [3]
// arr[0] = 3, arr.slice(1) = []

// return [3]

// [2, [3]]
// [2, 3]

// [1, [2, 3]]

// [1,2,3]

//console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

// function flatten(arr) {
// 	let result = []
// 	arr.forEach(ele =>{
// 		if (Array.isArray(ele)){
// 			result.push(...flatten(ele))
// 		} else{
// 			result.push(ele)
// 		}
// 	})
// 	return result
// }

// function flatten(arr, newArray = []) {
// 	for (let i in arr) {
// 	  let ele = arr[i]
// 	  Array.isArray(ele) ? newArray = newArray.concat(flatten(ele)) : newArray.push(ele)
// 	}
// 	return newArray
// }


// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
// console.log(flatten([1, [2]]));
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
