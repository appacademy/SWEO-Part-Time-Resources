// > Write a function called recRev that takes in an `array` and outputs
// > that array reversed.
// > You must solve this problem using recursion and without mutating
// > the original array.

let recRev = arr => {
  // base case arr length of 0
  // using slice, add my first item to the end every time until its touched all els

  if (arr.length < 1) return [];

  return [...recRev(arr.slice(1)), arr[0]];
}

// console.log(recRev([0])) // [0]
// console.log(recRev([0, 1])) // [1, 0]
// console.log(recRev([9,0,1,2])) // [2,1,0,9]

// Default Params
// the assignment operator is useful!

const range = (start, end, arr = []) => {
  console.log(start);
  console.log(end);
  console.log(arr);
};

range()
range(1,2)
range(1,2,[1,2,3])