// You are given a 2-D array of nums. Find the subarray with the highest sum and return that sum. 
// The main block of code is written out for you. Try to refactor it to incorporate a helper function.

function findSum(arr) {
    let sum = 0;

    for (let j = 0; j < arr.length; j++) {
      let num = arr[j];

      sum += num;
    };

    return sum;
};

function highestSum(arr) {
  let highestSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
    let sum = findSum(subArr);

    if (sum > highestSum) {
      highestSum = sum
    };
  };

  return highestSum;
};

console.log(highestSum([[1,2,3], [3,5], [2,5]]))  // 8
console.log(highestSum([[2,6,7], [1,5,6], [4,5]])) // 15