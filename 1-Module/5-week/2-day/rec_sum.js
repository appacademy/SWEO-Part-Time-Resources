/* 
Write a function called rec_sum that intakes a number, and adds up all
numbers from 1 to the number and returns the sum. Must be recursive.
We're expecting all nums to be >= 1

rec_sum(1) // => 1
rec_sum(2) // => 3 // rec_sum(2 - 1) + 2 = 3
rec_sum(3) // => 6 // rec_sum(3 - 1) + 3 = 6
*/
/* 
Define a function that intakes a number
  make a base case (Definite)
    if you input 1 I'll give you back 1
  I need to return the num + rec_sum(num - 1)
*/

const rec_sum = (num) => {
  debugger;
  // Base Case (When should I stop)
  if (num === 1) { 
    debugger;
    return 1;
  }
  // Recursive Case (When should I recurse)
  // while num !== 1

  // Recursive Step (How do I make progress toward my base case)
  // num - 1
  let res = num + rec_sum(num - 1);
  debugger;
  return res;
} 

// console.log(rec_sum(1)) // => 1
// console.log(rec_sum(2)) // => 3 // rec_sum(2 - 1) + 2 = 3
console.log(rec_sum(3)) // => 6 // rec_sum(3 - 1) + 3 = 6