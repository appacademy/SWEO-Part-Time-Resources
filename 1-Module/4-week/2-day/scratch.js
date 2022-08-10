/*******************************************************************************
Write a function `myForEach` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in the
element, index, and array itself. The function does not need to return any value.

Do not use the built in Array#forEach.

Examples:

myForEach(['a', 'b', 'c'], function (el, i) {
    console.log(el + ' is at index ' + i);
}); // prints
// a is at index 0
// b is at index 1
// c is at index 2

let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']

make  a plan
  take in an array and a callback function
  iterate over our array
    pass in our individual element to our callback function, as well as our index, and our array

*******************************************************************************/

let myForEach = function(arr, cb) {
  for(let i = 0; i < arr.length; i++){
    let ele = arr[i]
    cb(ele, i, arr)
  }
};

// let arr = ['a', 'b', 'c']

// let consoleCb = function (el, i) {
//   console.log(el + ' is at index ' + i);
// }


// myForEach(arr, consoleCb); // prints
// // a is at index 0
// // b is at index 1
// // c is at index 2

// let test = [];
// myForEach(['laika', 'belka'], function (el) {
//   test.push(el.toUpperCase());
// });
// console.log(test); // ['LAIKA', 'BELKA']
/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.
Do not use the built in Array#map
// Examples
let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]
let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]

create a newArr variable 
iterate over our arr
each element is going to be passed to our callback function
push our element changed by our callback into our new array
return newArr
*******************************************************************************/

let myMap = function (arr, cb) {
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    let ele = arr[i]
    let changed = cb(ele)
    newArr.push(changed)
  }
  return newArr
};

// let result1 = myMap([100, 25, 81, 64], Math.sqrt);
// console.log(result1);   // [ 10, 5, 9, 8 ]
// let result2 = myMap(['run', 'Forrest'], function (el) {
//     return el.toUpperCase() + '!';
// });
// console.log(result2);   // [ 'RUN!', 'FORREST!' ]
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

iterate up to num times
reassign our value to the return of passing our value to our callback
*******************************************************************************/

let multiMap = function (val, num, cb) {
for(let i = 0; i < num; i++){
  val = cb(val)
}
return val
};

// let result1 = multiMap(7, 2, function(n) {
//   return n * 10;
// });
// console.log(result1); // 700
// let result2 = multiMap(7, 3, function(n) {
//     return n * 10;
// });
// console.log(result2); // 7000
// let result3 = multiMap("hi", 5, function(s) {
//   return s + "!";
// });
// console.log(result3); // hi!!!!!

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
*******************************************************************************/

let selectiveMap = function (arr, cb1, cb2) {

};

/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

let isEven = function(n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]
*******************************************************************************/

function reject(array, cb) {

}

/*******************************************************************************
Write a function `mySome` that accepts an array and a callback as an argument.
The function should call the callback for each element of the array, passing in
the element and its index. The function should return a boolean
indicating whether or not at least one element of the array returns true when passed
into the callback.
Examples:
let result1 = mySome([5, 1, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result1);   // true
let result2 = mySome([5, 3, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result2);   // false
let result3 = mySome(['soup', 'noodles', 'bike', 'ship'], function(ele) {
    return ele.length === 4;
});
console.log(result3);   // true
*******************************************************************************/

let mySome = function (array, cb) {

};

/*******************************************************************************
Write a function `count` that accepts an array and a callback as arguments. The
function should return the number of elements of the array that return true when
passed to the callback.

Examples:

let result1 = count([18, 5, 32, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 3

let result2 = count([17, 5, 31, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result2); // 1

let result3 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('o');
});
console.log(result3); // 3

let result4 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('x');
});
console.log(result4); // 0
*******************************************************************************/

function count(array, cb) {

}


/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

Examples:

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4

function takes in a value and we use the rest operator for the rest of the callbacks
rest returns an array of the 'rest' of the arguments
wee can iterate over our callbacks
  save each element to a callback variable
  reassign our value with each iteration
return our value
*******************************************************************************/

let chainMap = function(val, ...callbacks) {
  for(let i = 0; i < callbacks.length; i++){
    let cb = callbacks[i]
    val = cb(val)
  }
  return val
};

let add5 = function(n) {
  return n + 5;
};

let half = function(n) {
  return n / 2;
};

let square = function(n) {
  return n * n;
};

// console.log(chainMap(25, add5));                // 30
// console.log(chainMap(25, add5, half));          // 15
// console.log(chainMap(25, add5, half, square));  // 225
// console.log(chainMap(4, square, half));         // 8
// console.log(chainMap(4, half, square));         // 4
/*******************************************************************************
Write a function `myEvery` that accepts an array and a callback as arguments.
The function should return a boolean indicating whether or not all elements of
the array return true when passed into the callback.

Do not use the built in Array.every.

Examples:

let isEven = function (num) {
    return num % 2 === 0;
};

let hasO = function(string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false
*******************************************************************************/

function myEvery(array, cb) {

}

/*******************************************************************************
Write a function `myEvery` that accepts an array and a callback as arguments.
The function should return a boolean indicating whether or not all elements of
the array return true when passed into the callback.

Do not use the built in Array.every.

Examples:

let isEven = function (num) {
    return num % 2 === 0;
};

let hasO = function(string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false
*******************************************************************************/

function myEvery(array, cb) {
  
}

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


make a plan
save a count variable
iterate over our array
checking if the result of passing our element to our cb is true
    increment our count

if our count is the same as our number and return true or false
*******************************************************************************/

function exactly(array, num, cb) {
  let count = 0
  // for(let i = 0; i < array.length; i++){
  //   let ele = array[i]
  //   if(cb(ele)){
  //     count++
  //   } 
  // }
  array.forEach(function(ele){
    if(cb(ele)) count ++
  })
  // if(count === num){
  //   return true
  // }
  // return false
  return count === num
}

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
/*******************************************************************************
Write a function `sentenceMapper` that accepts a sentence and a callback as arguments.
The function should return a new sentence where every word of the original sentence
becomes the result of passing the word to the callback.

Examples:

let result1 = sentenceMapper("what is the answer?", function(word) {
    return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

let removeVowels = function(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!"aeiou".includes(char)) {
            newWord += char;
        }
    }
    return newWord;
};

let result2 = sentenceMapper("this is pretty cool right", removeVowels);
console.log(result2); // 'ths s prtty cl rght'
*******************************************************************************/

let sentenceMapper = function(str, cb) {
  let split = str.split(' ')
  // let mapped = split.map(cb)
  // return mapped.join(' ')
  let newArr = []
  split.forEach(function(ele, i){
    split[i] = cb(ele)
  })
  return split.join(' ')
};

// let result1 = sentenceMapper("what is the answer?", function(word) {
//   return word.toUpperCase() + "!";
// });
// console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

// let removeVowels = function(word) {
//   let newWord = "";
//   for (let i = 0; i < word.length; i++) {
//       let char = word[i];
//       if (!"aeiou".includes(char)) {
//           newWord += char;
//       }
//   }
//   return newWord;
// };

// let result2 = sentenceMapper("this is pretty cool right", removeVowels);
// console.log(result2); // 'ths s prtty cl rght'