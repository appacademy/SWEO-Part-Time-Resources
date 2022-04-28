/*NOTES LINK (ctrl + left-click to open): 
https://hackmd.io/ibCTcNIERy2irC8OUTRcFQ?view#Two-Dimensional-Arrays
*/


//log each individual element of all the sub arrays (inner arrays).

let arr = [
    ["a", "b", "c"], 
    [1, 2, 3], 
];

console.log(arr.length) // length = 2, bc only 2 sub arrays.

for (let i = 0; i < arr.length; i++) { // Outer loop iterates over the array
    let subArr = arr[i];  // initialize a variable holding the subarray 
    console.log("outer paused here:", subArr, "prints all inner:");
    //OUTER PAUSES FOR INNER
    for (let j = 0; j < subArr.length; j++) { //Inner loop iterates over subarray
        let letter = subArr[j]; // Initialize variable holding each letter
        console.log(letter);  // logs inner elements
    }
}

// Breaking it down, we can see that our outer loop 
// is going to let us take a look at the individual subarrays, 
// and the inner loop is letting us look at 
// the elements inside of each subArray. 

// As you can see, our outer loop is "paused" in execution 
// until our inner loop can complete.