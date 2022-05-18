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
//apply cb on each element of the arr, if the result is truthy, the add the result to a new array. otherwise continue.

function pickyMyMap(arr, cb) {
	//declare my result arr
	const resultArr = [];

	//iterate over arr to get each item
	for(let i=0; i<arr.length; i++){
		const ele = arr[i];
		//if cb ele is a truthy value
		if(cb(ele)){ 
			//apply the callback (cb) to the ele
			const updatedEle = cb(ele);
			//then push updatedEle to resultArr
			resultArr.push(updatedEle);
		}
	}
	return resultArr;
}

const nums = [1, 2, 3, 4];
console.log(pickyMyMap(nums, (num) => num - 2)); // [-1, 1, 2]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = pickyMyMap;
} catch (e) {
	module.exports = null;
}
