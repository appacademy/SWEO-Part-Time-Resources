//write a function `linearSearch` that takes in a SORTED array of `n` number of items as the first argument, and the second argument is the `targetEl`. The function will return the index if the `targetEl` is found within `items` and -1 if not. 

// conditions for binary search:
// 1) Data must be sorted
// 2) Data can be accessed by index in constant time (array)

function binarySearch(arr, target) {

    // Set integers pointing to the high and low range of possible indices
    let lowPointer= 0;
    let highPointer = arr.length - 1;

    // While high and low indices do not overlap...
    while(lowPointer <= highPointer){
        // Find the midpoint between high and low indices
        let midPointer = Math.floor((lowPointer + highPointer) / 2)
        
        // Compare the target value to the midpoint value
        // If the target equals the midpoint...
        // Return the midpoint index


        // If the target is higher than the midpoint...
        // Move the low pointer to midpoint + 1


        // If the target is less than the midpoint...
        // Move the high pointer to midpoint - 1


    }
    
    // Return -1 if the loop exits with overlapping pointers

}


console.log(binarySearch([], "apple")); //-1
console.log(binarySearch([1, 5, 8, 10, 14, 26, 27, 32, 37, 51, 52,
    53, 57, 63, 66, 67, 68, 69, 74, 76, 79,
    82, 83, 84, 86, 88, 89, 92, 94, 95, 99, 100], 89)); //26
