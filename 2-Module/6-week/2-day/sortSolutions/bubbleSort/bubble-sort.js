
function bubbleSort(arr) {
  let swapped = true; // create a variable to control the while loop
  while (swapped){
    swapped = false; // set to false before the iteration begins
    // Iterate through the array
    for (let i = 0; i < arr.length; i++){
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i + 1]){
        swapped = true; // set to true if a swap happens
        // Swap those values
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // destructuring ftw!
        // Do not move this console.log
        console.log(arr.join(",")); // this is just here for the tests
      }
    }
  }
    // If you get to the end of the array and no swaps have occurred, return
    return arr;
    // Otherwise, repeat from the beginning

}

// let arr = [2,4,6,8,1,3,5,7,9];


module.exports = bubbleSort;