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
// write a function that takes ana array and a callback 
// create a new array to push to 
// loop and call the callback on every element of the array 
// create a variable that is equal each element in isolation 
// inside the loop check to see if calling the callback on the element returns true 
// and if so push that element passed into the callback, to my new array. 
//return my results array 



function pickyMyMap(arr, cb) {
	const resultArray = []
	for(let i = 0 ; i < arr.length; i++){
		let myElement = arr[i]
		if(cb(myElement)){
			resultArray.push(cb(myElement))
		}
	}
	return resultArray
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = pickyMyMap;
} catch (e) {
	module.exports = null;
}