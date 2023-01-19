/****************************************************************************** 
Write a function twoSum(arr, target) that accepts an array and a target number 
as args. The function should a return a boolean indicating if two distinct 
numbers of the array add up to the target value. You can assume that input 
array contains only unique numbers.
******************************************************************************/
// your code here

let twoSum = function(nums, tar){
    for(let num of nums) {
        let diff = tar - num;
        if (nums.includes(diff) && diff !== num) return true
    }
    return false
}





console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false