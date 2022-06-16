// > Write a function called recRev that takes in an `array` and outputs
// > that array reversed.
// > You must solve this problem using recursion and without mutating
// > the original array.

let recRev = arr => {
 // use arr.length === 0 as my base case
 // use .slice to lower the length on each recursive call
 // return an array that contains the retur of recRev and the first ele in the array on each call
  debugger
  if (arr.length === 0) return [];

  let result = [...recRev(arr.slice(1)), arr[0]];
  return result
}

// console.log(recRev([0])) // [0]
// console.log(recRev([0, 1])) // [1, 0]
// console.log(recRev([9,0,1,2])) // [2,1,0,9]

// Default Params
// the assignment operator is useful!

let animal = 'dog';

const range = (start, end, arr = []) => {
  console.log(start);
  console.log(end);
  console.log(arr);
};

range()
range(1, 2)
range(1, 2, [1,2,3])


