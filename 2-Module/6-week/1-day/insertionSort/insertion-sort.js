/*
Insertion Sort gradually builds up a larger and larger sorted region at the 
left-most end of the array. Insertion sort focuses on sorting each element in 
the order they appear from left to right, regardless of their value, and 
inserting them into the most appropriate position in the already sorted region.
*/

// Insertion Sort out-of-place
// Do not modify the original array
// arr = [2,4,6,8,1,3,5,7,9];
function insertionSort(arr) {
  // Copy the original array
  let copyArr = [...arr];

  // Create an array to store the sorted values
  const sorted = [];

  // While the array is not empty:
  while (copyArr.length) {
    console.log(sorted.join(','));

    // Pop a value from the copy array
    let currVal = copyArr.pop(); // 9, 7

    // Create a new spot at the end of the sorted array with null to help with comparisons
    sorted.push(null);

    // Walk through the sorted array in reverse order
    // let i = sorted.length - 1
    // for (; i > 0; i--) {
    // }
    let i = sorted.length - 1;
    while (i > 0) {
      // Check if the value to the left is smaller than the new value
      if (sorted[i - 1] < currVal) {
        // If so, you've reached the insertion point so exit the loop
        break;
      } else {
        // If not shift the value to the right by 1 and continue
        sorted[i] = sorted[i - 1];
        i--;
        // console.log(i, '*', sorted.join(','), '*', currVal);
      }
    }

    // Insert the unsorted value at the break point
    sorted[i] = currVal;
    // [null] => [9]
    // [9, null] => [9, 9] => [7, 9]
  }

  // Return the sorted array
  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
// arr = [2,4,6,8,1,3,5,7,9];
function insertionSortInPlace(arr) {
  // Set a pointer dividing the array into sorted and unsorted halves
  // Everything to the right of divider is unsorted, left is sorted
  let divider = 1; // this is also the number of currently sorted values

  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    console.log(arr.join(','));

    // Grab the first value from the unsorted half
    let currVal = arr[divider];

    // For each value starting from the divider,
    let i = divider;
    while (i) {
      // Check if the value to the left is smaller than the unsorted value
      if (arr[i - 1] < currVal) {
        // If so, you've reached the insertion point so exit the loop
        break;
      } else {
        // If not shift the value to the right by 1 and continue
        arr[i] = arr[i - 1];
        i--;
        // console.log('*', arr.join(','), '*');
      }
    }

    // Insert the unsorted value at the break point
    arr[i] = currVal;

    // Increment the dividing pointer and repeat
    divider++;
  }

  // return array
  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
