/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/

let multiMap = function (val, n, cb) {
  for (let i = 0; i < n; i++) {
    // loop i = 0; val = 7;
    // loop i = 1; val = 70;
    val = cb(val);
    // loop i = 0; val = 70;
    // loop i = 1; val = 700;
  }

  return val;
};

/*******************************************************************************
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.
The function should return a new array where elements are replaced with the results
of calling the second callback on the element only if calling the first callback
on the element results in true. If calling the first callback on an element results
in false, then the element should not be changed in the new array.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

function isEven(n) {
    return n % 2 === 0;
}

function isPositive(n) {
    return n > 0;
}

function square(n) {
    return n * n;
}

function flipSign(n) {
    return n * -1;
}

console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// [ 10, -4, 7, -6, 2, -9 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// [-10, 16, 49, 36, -2, -9]

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
    (optional if you already asked a question for this problem.)
- Explain how you are using both of the callbacks in the function.
- What do you expect each callback function to be returning?
- How many times are you calling each callback function?
*******************************************************************************/

let selectiveMap = function (arr, cb1, cb2) {
  let finalArr = [];

  // if cb1(el) === true, then use cb2
  arr.forEach(function (el) {
    // if (cb1(el) === true)
    if (cb1(el)) {
      finalArr.push(cb2(el));
    } else {
      finalArr.push(el);
    }
  });

  return finalArr;
};


/*******************************************************************************
Write a function `exactly` that accepts an array, a number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
exactly `number` elements of the array that return true when passed into the callback.

Examples:

let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
    return n % 2 === 0;
});
console.log(result1); // true

let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
    return n % 2 === 0;
});
console.log(result2); // false

let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
    return str.includes('x');
});
console.log(result3); // false

let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
    return str.includes('x');
});
console.log(result4); // true

*******************************************************************************/
let exactly = function(arr, num, cb) {
	let newArr = []

	for (let i =0; i < arr.length; i++){

			if(cb(arr[i])) {
					newArr.push(arr[i])
			}

	}
	return newArr.length === num

}


/*******************************************************************************
Write a function `andSelect` that accepts an array and two callbacks. The function
should return a new array containing elements of the original array that result in
true when passed into both callbacks.

Examples:

let isEven = function (n) {
	return n % 2 === 0;
};

let isPositive = function (n) {
	return n > 0;
};

console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// [ 8, 6, 12 ]

let isUpperCase = function (s) {
	return s === s.toUpperCase();
};

let startsWithA = function (s) {
	return s[0].toUpperCase() === 'A';
}
console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
// [ 'APPLES', 'ART' ]

*******************************************************************************/

// let andSelect = function(arr, cb1, cb2) {
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++){
//         let el = arr[i];
//         if (cb1(el) && cb2(el)){
//             newArr.push(el)
//         }
//     }
//     return newArr
// }

let andSelect = function (arr, cb1, cb2) {
	return arr.filter(function (ele) {
					return cb1(ele) && cb2(ele)
	})
};