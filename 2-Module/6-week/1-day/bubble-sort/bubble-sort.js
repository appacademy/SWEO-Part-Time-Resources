/*
Bubble Sort is almost NEVER used because it is not efficient!!
- Every movement of an item requires an individual pass through the array.
Bubble Sort works by moving the largest elements to the end of the array.
Bubble Sort manipulates the array by swapping the position of two elements. To
implement Bubble Sort in JS, you'll need to perform this operation. You can use 
a helper function to do that. A key detail in this function is that you need an
extra variable to store one of the elements since you will be overwriting them
in the array: 
*/

const swap = (array, index1, index2) => {
  let temp = array[index1]; // save a copy of first val
  array[index1] = array[index2]; // overwrite first val with second val
  array[index2] = temp; // overwrite second val with copy of first val
};

function bubbleSort(arr) {
  // This variable tracks whether or not we made a swap on the previous pass.
  // If we did not swap any values, then the array must already be sorted
  let hasSwapped = true;

  // While loop runs as long as we have made a swap on previous run
  while (hasSwapped) {
    // debugger;
    // Set hasSwapped to false. If we ever make a swap, set to true
    hasSwapped = false;

    // Iterate through the array
    for (let i = 0; i < arr.length - 1; i++) {
      // debugger;
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i + 1]) {
        // // Swap those values with helper
        // swap(arr, i, i + 1);

        //! Swap those values with array destructuring
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

        // If we're here, we've swapped! Our while loop should run again
        hasSwapped = true;

        // Do not move this console.log
        console.log(arr.join(','));
      }
    }

    // If a swap has occurred, repeat from the beginning
  }

  // Otherwise, return the array
  return arr;
}

// let arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];

// bubbleSort(arr);

module.exports = bubbleSort;