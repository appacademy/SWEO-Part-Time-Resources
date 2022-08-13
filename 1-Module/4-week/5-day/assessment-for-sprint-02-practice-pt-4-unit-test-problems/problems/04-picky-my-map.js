/***********************************************************************
Write a function `pickyMyMap` that accepts an array and a callback as
arguments. The function should call the callback for each element of the
array, passing in the element and return a new array of the results of
each call to the callback function. If the result of the callback function
returns something falsey, then do not add it in the result array.


You may not use Array's `map()`, `filter()`, or `forEach()` methods.
make a plan
create a new array variable
loop over our array
grab each element
check if the element is TRUTHY // truthy !== true
	if it is push our changed value into our new array
return new array
***********************************************************************/

function pickyMyMap(arr, cb) {
	const newArr = []
	for(let i = 0; i < arr.length; i++){
		let ele = arr[i]
		let changed = cb(ele)
		if(changed){
			newArr.push(changed)
		}
	}
	return newArr
}

// const nums = [1, 2, 3, 4];
// console.log(pickyMyMap(nums, (num) => num - 2)); // [-1, 1, 2]

// const booleans = [true, false, true, false, true];
// console.log(pickyMyMap(booleans, (boolean) => !boolean)); // [true, true]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = pickyMyMap;
} catch (e) {
	module.exports = null;
}
