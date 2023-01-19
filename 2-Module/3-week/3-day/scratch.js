//* Timing Benchmarks
console.time('lecture1') //start timer
for (let i = 0; i < 10; i++) {
  console.timeLog('lecture1') // print current time elapsed
}
console.time('lecture2');
console.timeEnd('lecture1') //stops timer;
console.timeEnd('lecture2');

let startTime = Date.now();
for (let i = 0; i < 10; i++) {
  console.log('.')
}
let endTime = Date.now();
console.log(endTime - startTime)
//* Time and Space Complexity
//O(?)
//Constant -> stays the same
//Linear -> Grows at a fixed rate
//Quadratic -> exponentially grows

// Time Complexity
let constant = (num1, num2) => { //O(1)
  return num1 + num2;
}
let linear = (num) => { //O(n)
  let res = [];
  for (let i = 0; i < num; i++) {
    res.push(i);
  }
  for (let i = 0; i < num; i++) {
    res.push(i);
  }
  return res;
}
let quadratic = (num) => { //O(n^2)
  let res = [];
  for (let i = 0; i < num; i++) { //n
    for (let j = 0; j < num; j++) { //n
      res.push([i, j]);
    }
  }

  return res;
}
// Space Complexity
function addNums(n) { //O(n), O(1)
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}
function getNumList(n) { //O(n), O(n)
  let nums = [];

  for (let i = 0; i < n; i++) {
    nums.push(i);
  }

  return nums;
}
//1+1+n => n+1 => n
function getNumPairsList(n) { // O(n^2), O(n^2)
  let pairs = [];

  for (let i = 0; i < n; i++) { //n times
    for (let j = 0; j < n; j++) {// pushing n things into pairs
      pairs.push([i, j]);
    }
  }

  return pairs;
}
// In Place Operations

//Out of Place
function increaseByOne(nums) { // O(n), O(n)
  const increased = [];

  for (let i = 0; i < nums.length; i++) {
    increased.push(nums[i] + 1);
  }

  return increased;
}
nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(increaseByOne(nums));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(nums);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// In Place
function increaseByOneInPlace(nums) { // O(n), O(1)
  for (let i = 0; i < nums.length; i++) {
    nums[i]++;
  }

  return nums;
}

nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(increaseByOneInPlace(nums));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(nums);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]