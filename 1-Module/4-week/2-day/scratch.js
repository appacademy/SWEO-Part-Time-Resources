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
*******************************************************************************/

let myMap = function (arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr;
};

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

let multiMap = function (val, num, cb) {
  for (let i = 0; i < num; i++) {
    val = cb(val);
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

*******************************************************************************/

let selectiveMap = function (arr, cb1, cb2) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    // console.log(cb1(el))
    if (cb1(el)) {
      newArr.push(cb2(el));
    } else {
      newArr.push(el);
    }
  }
  return newArr;
};

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
  let bool = false;

  array.forEach(function (el, i) {
    if (cb(el, i)) {
      bool = true;
    }
  });

  return bool;
};

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

// For Each

let suffixCipher = function (sent, obj) {
  let stringArr = sent.split(' ');

  let finalArr = [];

  stringArr.forEach(function (el) {
    let modified = false;

    for (let key in obj) {
      let currFunc = obj[key];

      if (el.endsWith(key)) {
        // obj[key](el)
        el = currFunc(el);
        finalArr.push(el);
        modified = true;
      }
    }

    if (!modified) {
      finalArr.push(el);
    }
  });

  return finalArr.join(' ');
};

// Map

// let suffixCipherWithMap = function (sent, obj) {
//   let stringArr = sent.split(' ');

//   return stringArr.map(function (el) {
//       for (let key in obj) {
//         let currFunc = obj[key];

//         if (el.endsWith(key)) {
//           // obj[key](el)
//           el = currFunc(el);
//           return el;
//         }
//       }
//       return el;
//     }).join(' ');
// };
