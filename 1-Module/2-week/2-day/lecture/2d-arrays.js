console.log("-------------access data 2d arrays example--------------");
let twoDimensional = [
    ["a", "b", "c"], 
    [1, 2, 3], 
    [true, false, true]
];

console.log("twoDimensional[1]:",twoDimensional[1]); // [1, 2, 3] <--sub array

console.log("twoDimensional[1][0]:",twoDimensional[1][0]); //1 <-- value inside sub array at index 1

console.log("-------------iterating over 2d arrays----------")

//log each individual element of all the sub arrays (inner arrays).

let arr = [
    ["a", "b", "c"], 
    [1, 2, 3], 
];

for (let i = 0; i < arr.length; i++) { // Outer loop iterates over the array
    let subArr = arr[i];  // initialize a variable holding the subarray 
    console.log("outer paused here:", subArr, "prints all inner:");
    //OUTER PAUSES FOR INNER
    for (let j = 0; j < subArr.length; j++) { //Inner loop iterates over subarray
        let elementInSubArr = subArr[j]; // Initialize variable holding each elementInSubArr
        console.log(elementInSubArr);  // logs inner elements
    }
}