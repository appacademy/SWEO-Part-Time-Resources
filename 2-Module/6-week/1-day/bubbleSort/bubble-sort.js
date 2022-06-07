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

const swap = (array, id1, id2) => {
  let temp = array[id1]; // save a copy of the first value
  array[id1] = array[id2]; // overwrite first value with second value
  array[id2] = temp; // overwrite second value with temp value
};

function bubbleSort(arr) {
  /* This variable tracks whether or not we made a swap on the previous pass.
	If we did not swap any values, then the array must already be sorted */
  let hasSwapped = true;

  // While loop runs as long as we have made a swap on the previous pass.
  while (hasSwapped) {
    // Set hasSwapped to false. If we ever make a swap, set it to true
    hasSwapped = false;

    // Iterate through the array
    for (let i = 0; i < arr.length - 1; i++) {
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i + 1]) {
        // Swap those values
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

        // //! Using helper function
        // swap(arr, i, i + 1);

        // console.log('*', arr.join(','), '*');
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

module.exports = bubbleSort;
