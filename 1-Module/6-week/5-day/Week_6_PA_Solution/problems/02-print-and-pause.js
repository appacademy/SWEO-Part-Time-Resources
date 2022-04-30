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

function printAndPause(nums) {
  // mutate array to work down to length of 0
  if (nums.length === 0) return;

  const currNum = nums.shift();
  console.log(currNum);
  // setTimeout(printAndPause, currNum, nums)
  setTimeout(() => printAndPause(nums), currNum);
  // setTimeout(() => {
  //   printAndPause(nums);
  // }, currNum);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printAndPause;
} catch {
  module.exports = null;
}
