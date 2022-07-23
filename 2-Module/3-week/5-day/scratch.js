const addNums = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
}

// time = constant O(1);
// space = constant O(1);

const addManyNums= (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++){ // linear because based on the input.length;
    sum += nums[i];
  }
  return sum;
}

// time = linear O(n)
// space = constant O(1);

const getManySums= (nums) => {
  let sums = [];
  for (let i = 0; i < nums.length; i++){ // linear because based on the input.length;
    sums.push(nums[i] + nums[i + 1]) // linear space because we're pushing 1 thing for every iteration of our loop
  }
  return sums.reduce((acc, sum) => acc += sum); // linear because we touch everything in the sums array, and the length of the sums array depends on nums.length;
  // returning a single integer here, but our space complexity is still linear beause of the sums.push in the loop. 
}

// time O(2n) => linear O(n)
// space linear O(n)

const getPairs = (nums) => {
  const pairs = [];
  for(let i = 0; i < nums.length; i++){ // quadratic time complexity
    for (let j = 0; j < nums.length; j++){
      pairs.push([nums[i], nums[j]]) // quadratic space complexity
    }
  }

  for (let i = 0; i < nums.length; i++){ // linear because based on the input.length;
    sums.push(nums[i] + nums[i + 1]) // linear space because we're pushing 1 thing for every iteration of our loop
  }
}

// time = quadratic O(n^2)
// space = quadratic O(n^2)
