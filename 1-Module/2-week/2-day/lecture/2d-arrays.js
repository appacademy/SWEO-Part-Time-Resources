console.log("-------------access data 2d arrays example--------------");
let twoDimensional = [
    ["a", "b", "c"], //these inner arrays are called SUB-ARRAYS
    [1, 2, 3], 
    [true, false, true]
];

console.log("twoDimensional[1]:",twoDimensional[1]); //[1,2,3]
console.log("twoDimensional[1][0]:",twoDimensional[1][0]); //1 from the inner array
console.log("twoDimensional[1][0]:",twoDimensional[1][0][0]); //1[0] --> undefined

console.log("-------------iterating over 2d arrays----------")
//log each individual element of all the sub arrays (inner arrays).
let arr = [
    ["a", "b", "c"], //subArray 
    [1, 2, 3],  //subArray
];

console.log("the arr length is: " + arr.length) 

for (let i = 0; i < arr.length; i++) { // Outer loop iterates over the array
    let subArr = arr[i];  // initialize a variable holding the subarray 
    console.log("outer paused here:", subArr, "prints all inner:");
    //OUTER PAUSES FOR INNER to PROCESS 
    for (let j = 0; j < subArr.length; j++) { //Inner loop iterates over subarray
        let element = subArr[j]; // Initialize variable holding each element
        console.log(element);  // logs inner elements of the subArr
    }
}