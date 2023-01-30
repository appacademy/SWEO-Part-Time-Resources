/******************************************************************************
Product Array
Write a function product(nums) that takes in an array of numbers. The function
should return the total product of multiplying all numbers of the array
together. You can assume that nums will not be an empty array.
******************************************************************************/
// your code here
function product(nums){
    console.log(nums)
    let total = nums.pop();
    console.log(nums)
    while(nums.length){
        console.log(nums)
        total *= nums.shift();
    }
    return total;
}


console.log(product([10, 3, 5, 2])); // 300
console.log(product([4, 3])); // 12
