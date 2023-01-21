/****************************************************************************** 
Two Dimensional Product 
Write a function twoDimensionalProduct(array) that takes in a 2D array of 
numbers as an argument. The function should return the total product of all 
numbers multiplied together.
******************************************************************************/
// your code here
let twoDimensionalProduct = function (array) {
    let product = 1;
    console.table(array)
    for (let i = 0; i < array.length; i++) {
        console.log("current i:", i)
        let subArray = array[i];
        console.table(subArray)
        for (let j = 0; j < subArray.length; j++){
            console.log("jjjjjjj ", j)
            let num = subArray[j]
            console.log("+++++++++         ", num)
            product = product * num;
        }
        console.log("*********  ", product)
    }

    return product;
}
//           0      1   2
//           0  1---0---0  1
let arr1 = [[6, 4],[5],[3, 1]];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88