const sum = (nums) => {
  const sums = [0];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    sums.push(sums[sums.length - 1] + num);
  }
  return sums[sums.length - 1];
};

// const sum = (nums) => {
//   return nums.reduce((sum, num) => sum + num);
// };

// const sum = (nums) => {
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] = nums[i - 1] + nums[i];
//   }
//   return nums[nums.length - 1];
// };

console.log(sum([1, 2, 3, 4, 5]));
