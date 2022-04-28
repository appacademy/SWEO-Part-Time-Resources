/*
Write a function twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument. The function should return the total product of all numbers multiplied together.
*/

// 1. Define our twoDimensionalProduct function
    //2. create a total and initially set it to 1 - not 0.
    //3. iterate through the outer array 
        //4. define subArray and access the current subArray
        //5. iterate through the subArray
            //6. define number within subArray
            //7. take number and multiply it with total variable
    //8. return total after everything has been multiplied



// your code here





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