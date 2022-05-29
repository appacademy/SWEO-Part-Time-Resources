/***********************************************************************
Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one. Make sure you use a recursive
approach to solve this problem.

Example:

printAndPause([200, 800, 200, 800, 200, 800])
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms

Run tests on just this file by typing `npm test test/02-print-and-pause-spec.js`
on the command line.

***********************************************************************/
//shaving off the first element of nums, i.e. 200, print it out, then set a timeout using 200 in ms, then recursively do it again for the next elements in the array

function printAndPause(nums) {
  //base case
  if(nums.length === 0) return; //stop recursing once we have no more items in nums
  
  const currentEl = nums.shift() //mutate the nums array, shaving off first element (recursive step - getting closer & closer to the base case)

  // console.log(`\x1b[36m${currentEl}`); //i.e. 200
  console.log(currentEl);

  //recursive case
  setTimeout(printAndPause, currentEl, nums);

}

// printAndPause([2000, 800, 2000, 800, 2000, 800])
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printAndPause;
} catch {
  module.exports = null;
}