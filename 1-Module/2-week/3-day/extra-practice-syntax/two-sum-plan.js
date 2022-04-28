// https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-1---intro-to-javascript/two-sum

// target  = 5
// [1, 7, 3, 0, 2]
// 	[1, 7, 3, 0, 2]
// COMPARING UNIQUE Numbers

/*
Plan:
1. Define a function called twoSum (let twoSum = function(arr,target)...)
  2. Iterate over the array (for let i=0...)
    3. Define outerNum (let outerNum = arr[i])
    4. Iterate over the array (for let j=i+1...)
      5. Define innerNum (let innerNum = arr[j])
      6. if outerNum + innerNum is equal to targetSum (if outer + inner === targetsum)
            7. return true
  8. return false
*/

//execution
let twoSum = function (arr, target) {
}

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false