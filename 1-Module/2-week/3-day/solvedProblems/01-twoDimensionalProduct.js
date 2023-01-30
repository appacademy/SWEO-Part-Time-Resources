/******************************************************************************
Two Dimensional Product
Write a function twoDimensionalProduct(array) that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.
******************************************************************************/
// your code here
// how many loops??
// 2! 2 loops. count voice

function twoDimensionalProduct(nums){
    let product = 1;
    console.log("-------", nums)
    for (let i = 0; i < nums.length; i++){
        let subArray = nums[i];
        console.table(subArray)
        for (let j = 0; j < subArray.length; j++){
            let currentNumber = subArray[j];
            console.log("*************", currentNumber)
            product = product * currentNumber;
        }
        console.log("##############", product)
    }
    return product;
}

let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88
