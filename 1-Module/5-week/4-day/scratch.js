/***********************************************************************
Write a recursive function called `exponent` that takes two integers,
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
***********************************************************************/

function exponent(num, power) {
  if (power === 0) return 1; // base case

  if (power > 0) {
    return num * exponent(num, power - 1); //3 * 3 * 1
  }

  if (power < 0) {
    return (1 / num) * exponent(num, power + 1);
  }
}

// function exponent(num, power) {
//     if (power === 0) return 1;
//     if (power === 1) return num;

//     if (power < 0) {
//       power *= -1;
//       //console.log((1 / num) * (1 / num));
//       return (1 / num) * exponent(1 / num, power - 1);
//     }
//     return num * exponent(num, power - 1);
//   }
/***********************************************************************
Write a more advanced version of the recursive `exponent` function that
you just wrote. Instead of multiplying the base number by itself n power of
times, like you did previously, you will be squaring the results of the base
number raised to the power of half of n power.

The following is math, not JavaScript:

exponent(b, 0) // 1
exponent(b, 1) // b
exponent(b, n) // exponent(b, n / 2) ** 2             [for even n]
exponent(b, n) // b * (exponent(b, (n - 1) / 2) ** 2) [for odd n]

You will need to square the results of exponent(b, n / 2) and
(exponent(b, (n - 1) / 2).

Remember that you don't need to do anything special to square a number, just
calculate the value and multiply it by itself. So don't cheat and use
exponentiation in your solution.

Examples:

advancedExponent(2, 0); // 1
advancedExponent(2, 1); // 2
advancedExponent(2, 2); // 4
advancedExponent(2, 3); // 8
advancedExponent(2, 4); // 16
advancedExponent(2, 5); // 32
advancedExponent(2, 6); // 64
advancedExponent(2, 7); // 128
advancedExponent(2, 8); // 256
advancedExponent(2, 9); // 512
advancedExponent(2, 10); // 1024
advancedExponent(2, 11); // 2048
advancedExponent(2, 12); // 4096

For each of the examples above, figure out how many times your code should
be recursively calling `advancedExponent`. Find a way to visually see how many
times `advancedExponent` is being recursively called.
***********************************************************************/

function advancedExponent(b, n) {
  if (n === 0) return 1;

  if (n === 1) return b;

  if (n % 2 === 0) {
    return advancedExponent(b, n / 2) ** 2;
  }

  if (n % 2 !== 0) {
    return b * advancedExponent(b, (n - 1) / 2) ** 2;
  }
}

/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

const flatten = (arr) => {
  const finalArr = [];

  arr.forEach((el) => {
    if (!Array.isArray(el)) {
      finalArr.push(el);
    } else {
      finalArr.push(...flatten(el));
    }
  });

  return finalArr;
};

// function flatten(arr) {
//   let newArr = [];

//   if (arr.length === 0) {
//     return newArr;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (!Array.isArray(arr[i])) {
//       newArr.push(arr[i]);
//     } else {
//       newArr.push(...flatten(arr[i]));
//     }
//   }
//   return newArr;
// }

// function flatten(arr, flat = []) {
//   arr.forEach((ele) => {
//     if (Array.isArray(ele)) {
//       flatten(ele, flat);
//     } else {
//       flat.push(ele);
//       arr.shift();
//       return flatten(arr, flat);
//     }
//   });
//   return flat;
// }

// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
// console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

const isSorted = (arr) => {
  if (arr.length <= 1) return true;
  if (arr[0] > arr[1]) return false;
  return isSorted(arr.slice(1));
  // arr.shift();
};

// function isSorted(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     } else {
//       console.log('This line runs');
//       isSorted(arr[i]);
//     }
//   }
//   return true;
// }

// function isSorted(arr) {
//   if (arr.length === 0) {
//     return true;
//   }
//   if (arr[0] > arr[1]) {
//     return false;
//   }
//   return isSorted(arr.slice(1));
// }

// console.log(isSorted([1, 2, 3, 4, 5])); // true
// console.log(isSorted([1, 2, 4, 3, 5])); // false
// console.log(isSorted([2, 4, 6, 7, 8])); // true
// console.log(isSorted([5, 4, 3, 2, 1])); // false
