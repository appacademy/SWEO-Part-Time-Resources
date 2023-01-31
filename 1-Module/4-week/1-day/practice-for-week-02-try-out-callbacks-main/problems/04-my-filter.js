/*******************************************************************************
Write a function `myFilter` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in
the element. The function should return a new array containing
the elements that result in true when passed to the callback.

Do not use the built in Array.filter.

Examples:

let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0;
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']
*******************************************************************************/

function myFilter(array, cb) {
    // Your code here
	const newArr = []
	for(let i = 0; i < array.length; i++){
		const el = array[i]
		// if(cb(el) === true){
		// 	newArr.push(el)
		// }
		// if(cb(el)){
		// 	newArr.push(el)
		// }
		// console.log('cb(el) ===', cb(el))
		if(cb(el)) newArr.push(el)
	}
	// console.log(newArr, 'newArr')
	return newArr
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = myFilter;
} catch(e) {
    return null;
}
