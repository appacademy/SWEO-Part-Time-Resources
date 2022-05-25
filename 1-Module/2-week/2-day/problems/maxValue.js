// Write a function maxValue(nums) that takes in an array of 
// numbers as an arg. The function should return the largest 
// number of the array. If the array is empty, the function should return null.

let maxValue = function(nums){
  if (nums.length === 0) return null;

  let largest = nums[0];
  for (let i = 1; i < nums.length; i++){
    if (largest < nums[i]) largest = nums[i]
  }
  return largest;
}



console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null
