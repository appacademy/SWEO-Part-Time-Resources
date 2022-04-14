// let exampleFunc = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     aNum++;
//     console.log(aNum);

//     // for (let j = 0; j < arr.length; j++) {

//     // }
//   }

//   // for (let i = 0;) {

//   // 	console.log(i)
//   // }
// };

// let aNum = 0;

// let exampleFunc = function (arr) {
//   // let aNum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     aNum++;
//     console.log(aNum);
//   }
// };

// let anotherFunc = function (arr) {
//   // let aNum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     aNum++;
//     console.log(aNum);
//   }
// };

// exampleFunc([1, 2, 3]);
// console.log('------------------------');
// anotherFunc([1, 2, 3]);
// let globalScope = 'I am globally scoped';

// let myFunction = function (functionScope) {
//   let alsoFunctionScope = 'I am also function scoped';

//   if (!functionScope) {
//     let blockScope = 'I am block scoped';
//   }
// };

// // console.log(functionScope)

// myFunction('I am function scoped');

// let car = 'vroom';
// let turkey = 'gobbledoblle';

// function makeSounds(dogSound) {
//   let cow = 'moo';
//   if (true) {
//     let turkey = 'gobble';
//     for (let i = 0; i < 2; i++) {
//       let turkey = "don't gobble";
//       console.log(car, dogSound, cow, turkey, i);
//     }
//   }
// }

// makeSounds('woof');

// let hungry = false;

// function sayHungry() {
//   // let hungry = true;
//   if (hungry) {
//     console.log("I'm hungry!");
//   } else {
//     console.log("I'm coding");
//   }
// }

// sayHungry();

// const aNum = [1, 2, 3];

// console.log(aNum)
// aNum.pop()
// console.log(aNum)

// const someFunction = function () {
// 	console.log()
// }

// const userArr = ["USER DATA"]

// const dontUseVar = function(){
//   var test = "hello";
//   if(true){
//     var test = "hi";
//   }
// 	console.log(test);
// }

// const useLet = function(){
//   let test = "hello";
//   if(true){
//     let test = "hi";
//   }
// 	console.log(test);
// }

// dontUseVar();
// useLet()

// const dontUseVar2 = function () {
// 	console.log(test);
//   var test = "test";
//   // let test = 'test';
// };

// dontUseVar2();

// let str = 'not apple';
// if (true) {
//   console.log(str);
//   let str = 'apple';
// }

/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function (sentence, obj) {
  let words = sentence.split(' ');
  // console.log(words)
  let newWords = words.map(function (word) {
    for (let suffix in obj) {
      if (word.endsWith(suffix)) {
        let cb = obj[suffix];
        return cb(word);
      }
    }
    return word;
  });

  // console.log(newWords)

  return newWords.join(' ');
};

/*******************************************************************************
Write a function `one` that accepts an array and a callback as arguments. The
function should call the callback for each element of the array, passing in the
element and its index. The function should return a boolean indicating whether
or not exactly one element of the array results in true when passed into the callback.

Examples:

let result1 = one(['x', 'y', 'z'], function(el) {
	return el === 'a';
});
console.log(result1);   // false

let result2 = one(['x', 'a', 'y', 'z'], function(el) {
	return el === 'a';
});
console.log(result2);   // true

let result3 = one(['x', 'a', 'y', 'a', 'z'], function(el) {
	return el === 'a';
});
console.log(result3);   // false

let result4 = one(['apple', 'dog'], function(el) {
	return el.length > 3;
});
console.log(result4);   // true

let result5 = one(['apple', 'dog', 'pear'], function(el) {
	return el.length > 3;
});
console.log(result5);   // false

let result6 = one(['apple', 'dog', 'food', 'cat'], function(el, idx) {
	return el.length === idx;
});
console.log(result6);   // true
*******************************************************************************/

let one = function (arr, cb) {
  let newArr = arr.filter(function (el, i) {
    return cb(el, i);
  });

  return newArr.length === 1;
};

/*******************************************************************************
Write a function `alternatingMap` that accepts an array and two callbacks as
arguments. The function should return a new array containing the results of passing
the original elements into the callbacks in an alternating fashion.

In other words,
    - the first element should be passed to callback 1
    - the second element should be passed to callback 2
    - the third element should be passed to callback 1
    - the fourth element should be passed to callback 2
    - ... and so on

Examples:

let triple = function (n) {
    return 3 * n;
};

let half = function (n) {
    return n / 2;
};
console.log(alternatingMap([7, 3, 2, 9, 8], triple, half));
// [ 21, 1.5, 6, 4.5, 24 ]


let yell = function (s) {
    return s.toUpperCase() + '!';
};

let whisper = function (s) {
    return '..' + s.toLowerCase() + '..';
};
console.log(alternatingMap(['hEy', 'EVERYone', 'whats', 'uP??'], yell, whisper));
// [ 'HEY!', '..everyone..', 'WHATS!', '..up??..' ]

*******************************************************************************/

// const alternatingMap = function (array, cb1, cb2) {
//   return array.map(function (el, i) {
//     if (i % 2 === 0) {
//       return cb1(el);
//     } else {
//       return cb2(el);
//     }
//   });
// };

// const alternatingMap = function (array, cb1, cb2) {
//   let toggle = true;
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let el = arr[i];
//     if (toggle) {
//       newArr.push(cb1(el));
//       toggle = false;
//     } else {
//       newArr.push(cb2(el));
//       toggle = true;
//     }
//   }
//   return newArr;
// };

// let yell = function (s) {
//   return s.toUpperCase() + '!';
// };

// let whisper = function (s) {
//   return '..' + s.toLowerCase() + '..';
// };
// console.log(
//   alternatingMap(['hEy', 'EVERYone', 'whats', 'uP??'], yell, whisper)
// );
// [ 'HEY!', '..everyone..', 'WHATS!', '..up??..' ]

/*******************************************************************************
Write a function `mySimpleReduce` that accepts an array and a callback as arguments.
The function should mimic the behavior of the built in Array#reduce, utilizing the
first element of the array as the default accumulator.

In other words, the function should begin with the first element of the array as
the accumulator and call the callback for each of the remaining elements in the array,
passing in the current accumulator and current element into the callback. Upon calling the callback,
the accumulator should be set to the result of the callback.

Examples:

let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
    return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(result3); // 8

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would refactor this problem to take in an
  optional initial accumulator
*******************************************************************************/

const mySimpleReduce = function (arr, cb) {
  let accumulator = arr[0];

  for (let i = 1; i < arr.length; i++) {
    accumulator = cb(accumulator, arr[i]);
  }

  return accumulator;
};

// let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
// 	if (el > max) {
// 			return el;
// 	} else {
// 			return max;
// 	}
// });
// console.log(result3); // 8

// let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
// 	return sum + el;
// });
// console.log(result1); // 14

// let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
// 	return product * el;
// });
// console.log(result2); // 48