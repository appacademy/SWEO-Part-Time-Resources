/***********************************************************************
Write a function named: lazyAdder(firstNum). The lazyAdder function will
accept a number and return a function. When the function returned by lazyAdder
is invoked it will again accept a number, (secondNum), and then return a function.
When the last mentioned function is invoked with a number, (thirdNum), it will
FINALLY return a number. See below for examples!

Example 1:
let firstAdd = lazyAdder(1);
let secondAdd = firstAdd(2);
let sum = secondAdd(3);
console.log(sum); // prints 6

Example 2:
let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would turn your solution into a one-line
  fat-arrow function
***********************************************************************/
// create a function that takes a number and returns the declaration of another function
// that function will return the declaration of another function that takes a number 
// that third function will take a number and return all of them added together

// const lazyAdder = (num1) => {
//   return (num2) => {
//     return (num3) => {
//       return num1 + num2 + num3
//     }
//   }
// }
const lazyAdder = num1 => num2 => num3 => num1 + num2 + num3;



const add5 = lazyAdder(5)
const add10 = add5(10)
const add20 = add10(20)
console.log(add20)



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = lazyAdder;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
