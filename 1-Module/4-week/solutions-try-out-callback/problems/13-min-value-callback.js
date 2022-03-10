/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

// let minValueCallback = function(array, callback) {
// 	if(!callback){
// 		return Math.min(...array)
// 	}

// 	let result = [];

// 	for(let i = 0; i < array.length; i++){
// 		let element = array[i];
// 		result.push(callback(element));
// 	}

// 	return Math.min(...result)
// };

// alternate solution
let minValueCallback = function(array, callback) {
	let min = Math.min(...array);

	if(callback !== undefined){
		return callback(min)
	}

	return min
};


// so iterate through the array
// have a min variable
// iterate through the array
// and compare your current element with the min value and if its less
// reassign that min value

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
