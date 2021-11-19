// Write a function called twoSum that intakes an array of numbers and a target.
// The function should return an array with a length of two, that contains the
// first two indices of the passed in array that add up to the target.
// If there are no two numbers that match, return [-1, -1]
// You should solve this in O(n) time

// console.log(twoSum([1, 2, 3, 4, 5], 8)); // [2, 4]
// console.log(twoSum([5, 3, 1, 2, 4], 8)); // [0,1]
// console.log(twoSum([1, 2], 244)); //

// Use a POJO has a hash table
// hash table to cache information - keep track of things you've already seen

const twoSum = (arr, target) => {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const diff = target - el;
    if (diff in hash) return [hash[diff], i];
    hash[el] = i;
  }
  return [-1, -1];
};

// console.log(twoSum([1, 2, 3, 4, 5], 8)); // [2, 4]
// console.log(twoSum([5, 3, 1, 2, 4], 8)); // [0, 1]
// console.log(twoSum([1, 2], 244)); // [-1, -1]

// 1, 1, 2, 3, 5, 8, 13
const fibRec = (num) => {
  if (num === 1 || num === 2) return 1;
  return fibRec(num - 1) + fibRec(num - 2);
};

const fib = (num, tab = [1, 1]) => { 
  while (tab.length < num) { 
    let num2 = tab.pop();
    let num1 = tab.pop();
    tab.push(num1, num2, num1 + num2)
  }
  return tab.pop();
}


let start1 = new Date();
console.log(fibRec(44));
let end1 = new Date();
let start2 = new Date();
console.log(fib(1100));
let end2 = new Date();
console.log(end1 - start1, "Recursive");
console.log(end2 - start2, "Tab");
