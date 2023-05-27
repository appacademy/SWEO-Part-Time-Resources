/***********************************************************************
Write a function `pickyMyMap` that accepts an array and a callback as
arguments. The function should call the callback for each element of the
array, passing in the element and return a new array of the results of
each call to the callback function. If the result of the callback function
returns something falsey, then do not add it in the result array.

const nums = [1, 2, 3, 4];
pickyMyMap(nums, (num) => num - 2); // [-1, 1, 2]

const booleans = [true, false, true, false, true];
pickyMyMap(booleans, (boolean) => !boolean); // [true, true]

You may not use Array's `map()`, `filter()`, or `forEach()` methods.
***********************************************************************/

function pickyMyMap(arr, cb) {
	// const res = [];

	// for (let i = 0; i < arr.length; i++) {
	// 	let ele = arr[i];

	// 	if (cb(ele)) {
	// 		res.push(cb(ele));
	// 	};
	// };

	// return res;

	let res = arr.reduce((acc, ele) => {
		if (cb(ele)) {
			console.log(acc)
			acc.push(cb(ele));

			return acc;
		} else {
			console.log(acc)
			return acc;
		};
	}, []);

	return res;
};

const nums = [1, 2, 3, 4];
console.log(pickyMyMap(nums, (num) => num - 2)); // [-1, 1, 2]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = pickyMyMap;
} catch (e) {
	module.exports = null;
}