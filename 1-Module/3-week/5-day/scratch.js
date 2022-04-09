// Let's make a .length function

// let arr = [1, 2, 3, 4, 5];

// let arrayLength = function (array) {
// 	let length = 0;

// 	for (let i = 0; i < array.length; i++) {
// 		length++
// 	}

// 	return length
// };

// console.log(arr.length);
// console.log(arrayLength(arr));

//! Sum forEach

let myForEach = function (array, func) {
  for (let i = 0; i < array.length; i++) {
    let eachElement = array[i];
    func(eachElement);
  }

  return undefined;
};

/*
Write a function `sumForEach(arr)` that accepts an array as an arg.
The function should return the total sum of all values in the array.

Solve this using Array's `forEach()` method.

Examples:

console.log(sumForEach([4, 3, -1, 10])); // 16
console.log(sumForEach([6, 7, 2])); // 15
console.log(sumForEach([])); // 0
*/

// let sumForEachWithForLoop = function (arr) {
// 	let sum = 0;

// 	for (let i = 0; i < arr.length; i++) {
// 		let eachElement = arr[i]
// 		sum += eachElement
// 	}

// 	return sum
// }

// let sumForEach = function (arr) {
// 	let sum = 0;

// 	arr.forEach(function (el) {
// 		sum += el
// 	})

// 	return sum
// }

// console.log(sumForEach([4, 3, -1, 10])); // 16
// console.log(sumForEach([6, 7, 2])); // 15
// console.log(sumForEach([])); // 0

// console.log(sumForEachWithForLoop([4, 3, -1, 10])); // 16
// console.log(sumForEachWithForLoop([6, 7, 2])); // 15
// console.log(sumForEachWithForLoop([])); // 0

// arr.forEach()
// arr.slice()

//! Tripler Map

let myMap = function (array, func) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    let eachElement = array[i];
    let changedVersion = func(eachElement);
    newArr.push(changedVersion);
  }

  return newArr;
};

/*
Write a function `tripler(nums)` that takes in an array as an arg. The function
should return a new array containing three times every number of the original
array.

Solve this using Array's `map()` method.

Examples: 

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
*/

// let tripler = function (arr) {
//   let finalArr = arr.map(function (num) {
//     return (num *= 3);
//   });

//   return finalArr;

//  return arr.map(function (num) {
// return (num *= 3);
//   });
// };

// let triplerForLoop = function (arr) {
//   let finalArr = []

// 	for () {
// 		finalArr.push(arr[i] * 3)
// 	}

// 	return finalArr
// };

// console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
// console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

//! Long Words Filter

// let myFilter = function (array, func) {
// 	let newArr = [];

// 	for (let i = 0; i < array.length; i++) {
// 		let eachElement = array[i]
// 		let booleanValue = func(eachElement)

// 		if (booleanValue === true) {
// 			newArr.push(eachElement)
// 		}
// 	}

// 	return newArr
// };

/*

Write a function `longWords(words)` that takes in an array of words.
The function should return an array containing only the words that are longer
than 5 characters.

Solve this using Array's `filter()` method.

Examples:

console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]

*/

let longWords = function (words) {
  let finalOutput = words.filter(function (string) {
    if (string.length > 5) {
      return true;
    } else {
      return false;
    }
  });

  return finalOutput;
};

console.log(longWords(['bike', 'skateboard', 'scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka', 'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]

//! Sum Reduce

let myReduceWithoutDefault = function (array, func) {
  let accumulator = array[0];

  for (let i = 1; i < array.length; i++) {
    let eachElement = array[i];

    accumulator = func(eachElement);
  }

  return accumulator;
};

let myReduceWithDefault = function (array, func, defaultValue) {
  let accumulator = defaultValue;

  for (let i = 0; i < array.length; i++) {
    let eachElement = array[i];

    accumulator = func(eachElement);
  }

  return accumulator;
};

/*

Write a function `sumWithReduce(nums)` that takes in an array of numbers.
The function should return the total sum of all numbers in the array.

Solve this using Array's `reduce()` method.

Examples:

console.log(sumWithReduce([10, 3, 5, 2])); // 20
console.log(sumWithReduce([])); // 0

*/

let sumWithReduce = function (nums) {
  let sum = nums.reduce(function (acc, next) {
    return acc * next;
  });

  return sum;
};

console.log(sumWithReduce([10, 3, 5, 2])); // 20
console.log(sumWithReduce([])); // 0
