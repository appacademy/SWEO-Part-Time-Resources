
function bubbleSort(arr) {
  // Set a boolean
  let hasSwapped = true;

  // Use that boolean to continue looping
  while (hasSwapped) {
    // Flip the boolean
    hasSwapped = false;

    // Iterate through the array
    for (let i = 0 ; i < arr.length; i++) {

      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i+1]) {
        // Swap those values
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        // And swap the boolean
        hasSwapped = true;

        console.log(arr.join(","));
      }
    }
    // If you get to the end of the array and no swaps have occurred, 
    // you'll exit the while loop
  }

  return arr;
}

module.exports = bubbleSort;