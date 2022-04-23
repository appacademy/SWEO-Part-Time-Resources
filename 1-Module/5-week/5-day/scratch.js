// const subsets = (arr, finalArr = []) => {
//   if (arr.length === 0) return finalArr;
//   if (arr.length === 1 && !finalArr.length) return [[], [arr[0]]];
//   if (finalArr.length === 0) finalArr.push(...subsets([arr[0]]));

//   arr.shift();

//   if (arr.length) {
//     const newArr = finalArr.map((el) => {
//       let tempArr = el.slice();
//       tempArr.push(arr[0]);
//       return tempArr;
//     });

//     finalArr = [...finalArr, ...newArr];
//   } else {
//     return finalArr;
//   }

//   return subsets(arr, finalArr);
// };

// const withVar = () => {
//   console.log(animal);
//   var animal = "Cat";
// };

// withVar(); // undefined

// const withConst = () => {
//   console.log(animal);
//   const animal = "Dog";
// };

// withConst(); // Reference Error

// hello(); // hello

// function hello() {
//   console.log("hello!");
// }

// hello(); // Reference Error

// let hello = function () {
//   console.log("hello!");
// };

// hello(); // Type Error

// var hello = function () {
//   console.log("hello!");
// };

// var foo = "I'm a variable";

// function foo () {
//   return "I'm a function";
// }

// console.log(foo); // I am a variable

// let foo = "I'm a variable";

// function foo() {
//   return "I'm a function";
// }

// console.log(foo); // Syntax Error

// (function () {
//   console.log("I run immediately");
// })();

// (function (name) {
//   console.log(`Hello, ${name}!`);
// })('Zaviar');

// const myName = (function (name) {
//   return `Hello, ${name}!`;
// })('Zaviar');

// console.log(myName);

// const isThisTruthy = 0n;

// if (isThisTruthy) console.log(`${isThisTruthy} is truthy!`);
// else console.log(`${isThisTruthy} is falsy!`);

// console.log(typeof isThisTruthy)

// if (!"0") {
//   console.log("Hello!");
// } else if (!-42) {
//   console.log("Goodbye!");
// } else if (!-Infinity) {
//   console.log("Have a nice day!");
// } else {
//   console.log("We meet again");
// }

// (function() {
//   const test = "Hello world!";
// 	return test
// })();

// console.log(test); // ???

/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

const sort = (nums, sorted = []) => {
  // 1. Check the base case: If `nums` is empty, then return `sorted`
  if (!nums.length) return sorted;
  // 2. Otherwise, find the smallest element in `nums`

  //! Method 1
  // let currentSmallest = nums[0];
  // let currentSmallest = Infinity;
  let currentSmallest;
  nums.forEach((el) => {
    if (currentSmallest === undefined) currentSmallest = el;
    if (currentSmallest > el) currentSmallest = el;
  });

  //! Method 2
  // const smallest = Math.min(...nums)

  //! Method 3
  // const currentSmallest = nums.reduce((prev, next) => prev < next ? prev : next)
  // const currentSmallest = nums.reduce((prev, next) => {
  // 	if (prev < next) return prev
  // 	else return next
  // })

  // 3. Add the smallest element to the end of `sorted`
  sorted.push(currentSmallest);
  // 4. Remove the smallest element from `nums`
  const smallestIndex = nums.indexOf(currentSmallest);
  nums.splice(smallestIndex, 1);

  // 5. Recursively call `sort()` with updated `sorted` and `nums`
  return sort(nums, sorted);
};

console.log(sort([4, 1, 6, 3, 1, 7])); // [1, 1, 3, 4, 6, 7]
console.log(sort([0, 1, -3])); // [-3, 0, 1]
console.log(sort([])); // []
