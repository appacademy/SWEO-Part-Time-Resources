/***********************************************************************
Your friend is working on a function called isSorted() which checks if 
an array of numbers is in order, sorted lowest to highest. Unfortunately, 
the code is not working correctly. Help them fix it!

Examples:
console.log(isSorted([1, 2, 3, 4, 5]))  // true
console.log(isSorted([2, 2, 4, 4]))  // true
console.log(isSorted([1, 2, 4, 3, 5, 6]))  // false
************************************************************************/


function isSorted(nums) {
    // Loop through each number
    for (let i = 0 ; i < nums.length ; i++) {
        // Check if the current number is less than
        // the previous number
        // console.log("Previous number:", nums[i-1])
        // console.log("current number :", nums[i])
        // console.log("prev < current?:", nums[i-1] < nums[i])
        if (nums[i-1] > nums[i]) {
            // If it's not, return false
            return false;
        }
    }
    // If every number is greater or equal to the previous number
    // in the array, it's sorted.
    return true;
}
console.log(isSorted([1, 2, 3, 4, 5]))  // true
console.log(isSorted([2, 2, 4, 4]))  // true
console.log(isSorted([1, 2, 4, 3, 5, 6]))  // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = isSorted;
  } catch (e) {
    module.exports = null;
  }