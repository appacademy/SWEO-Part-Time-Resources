/****************************************************************************** 
Product Array
Write a function product(nums) that takes in an array of numbers. The function 
should return the total product of multiplying all numbers of the array 
together. You can assume that nums will not be an empty array.
******************************************************************************/
// your code here
let product = function(nums){
    // let total = nums.pop();
    // while(nums.length){
    //     total *= nums.pop()
    // }
    let total = nums[0]
    for (let i = 1; i< nums.length; i++){
        total *= nums[i];
    }
    return total;
}


//                    0  1  2  3
console.log(product([10, 3, 5, 2])); // 300
console.log(product([4, 3])); // 12