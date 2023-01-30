/******************************************************************************
Avg Val
Write a function avgVal(arr) that accepts an array as an arg. The function
should return the average of all values in the array. If the array is empty, it
should return null.
******************************************************************************/
// your code here

function avgVal(arr){
    if(arr.length === 0) return null;
    let length = arr.length;
    let sum = 0;
    while (arr.length > 0){
        sum += arr.pop()
    }
    return sum / length;
}





console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
