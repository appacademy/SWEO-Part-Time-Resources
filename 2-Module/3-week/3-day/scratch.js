// Timing Benchmarks
console.time('lecture') // Start a timer
console.time('bigName');
console.log('hello')
console.timeLog('lecture'); //shows current time on timer
console.timeEnd('lecture'); //end our timer
console.timeEnd('bigName');

let start = Date.now();
let arr = [1, 2, 3]
arr.map(el => el * 2);
let end = Date.now();

let time = end - start;
// console.log(start, end)
console.log(time);

// const funTimer = (num1, num2) => {
//   let start = Date.now();
//   for (let i = num1; i <= num2; i++){
//       console.log(i)
//   }
//   let end = Date.now();
//   let time = end - start;
//   return(`Time it took ${time}`);
// }

// console.log(funTimer(1,5))

//* Space and Time Complexity aka Big-O
// Time Complexity
// Constant Time => O(1)
function constant(num1, num2) {
  return num1 + num2;
}
// Linear Time => O(n);
function linear(arr) {
  arr.map(el => el * 3);
  return arr.map(el => el * 2);
}

linear([1, 2]) //=> [2,4]
linear([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2])
// Quadratic Time => O(n^2)
function quadratic(arr) {
  // let alpha = 'abc...'
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let sub = arr[i];
    for (let j = 0; j < sub.length; j++) {
      res.push(sub[j]);
    }
  }

  return res;
}
// Space Complexity => O()
// Constant => The variables don't change to take more space
function addNums(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}
// Time: O(n), Space: O(1)
// Linear => o(n)
function getNumList(n) {
  let nums = [];

  for (let i = 0; i < n; i++) {
    nums.push(i);
  }

  return nums;
}
// Quadratic => O(n^2)
function getNumPairsList(n) {
  let pairs = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) { //n
      pairs.push([i, j]); // 1
    }
  }

  return pairs;
}

// In Place vs Out of Place
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
