/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

function minValueCallback(array, cb) {
	// let min = Math.min(...array)

	// if(cb === undefined){
	// 	return min
	// } else {
	// 	return cb(min)
	// }

	let min = Infinity
	for(let i = 0; i < array.length; i++){
		const el = array[i]
		if(el < min){
			min = el
		}
	}

	if(cb === undefined){
		return min
	} else {
		return cb(min)
	}
}


// function minValueCallback(array, cb) {
// 	if (cb === undefined) {
// 	  let numSmall = null;
// 	  for (arr of array) {
// 		if (numSmall === null || arr < numSmall) {
// 		  numSmall = arr;
// 		}
// 	  }
// 	  return numSmall;
// 	}
// 	else {
// 	  let numSmall = null;
// 	  for (arr of array) {
// 		if (numSmall === null || arr < numSmall) {
// 		  numSmall = arr;
// 		}
// 	  }
// 	  return cb(numSmall);
// 	}
//   }

  // dry = dont repeat yourself

// console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
// console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = minValueCallback;
} catch(e) {
  return null;
}
