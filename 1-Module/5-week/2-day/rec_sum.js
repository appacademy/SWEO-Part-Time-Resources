// What is a recursive function?
// a recursive function is a function that calls itself until it doesn't
// What are the 'parts' of a recursive function?
// a base case -- base case tells us when to stop recursing
// recursive step -- this is what gets us closer to our base case
// recursive call -- when we call our function inside itself 



/* 
Write a function called rec_sum that intakes a number, and adds up all
numbers from 1 to the number and returns the sum. Must be recursive.
We're expecting all nums to be >= 1
*/



function rec_sum(num) { 
  debugger;
  // Base Case 
  if (num === 1) {
    debugger;
    return 1;
  }
  // Recursive Case - num !== 1
  // Recursive Step - num - 1
  let res = num + rec_sum(num - 1);
  debugger;
  return res
}

// console.log(rec_sum(1)) // => 1
// console.log(rec_sum(2)); // => 3 => 2 + rec_sum(1) => 2 + rec_sum(2 - 1)
console.log(rec_sum(3)) // => 6 => 3 + rec_sum(2) => 3 + rec_sum(3 - 1)