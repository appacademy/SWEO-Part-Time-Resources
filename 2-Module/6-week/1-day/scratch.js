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



  function mergeSort(arr) {

    // Check if the input is length 1 or less
    if (arr.length <= 1) {
      // If so, it's already sorted: return
      return arr;
    }

    // Divide the array in half
    const midpoint = Math.floor(arr.length / 2);
    const left = arr.slice(0, midpoint);
    const right = arr.slice(midpoint, arr.length);

    // Recursively sort the left half
    const leftSorted = mergeSort(left);
    // Recursively sort the right half
    const rightSorted = mergeSort(right);

    // Merge the halves together and return
    return merge(leftSorted, rightSorted);

  }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Takes in two sorted arrays and returns them merged into one
  function merge(arrA, arrB) {

   // Create an empty return array
    const returnArray = [];

    // Point to the first value of each array
    let indexA = 0;
    let indexB = 0;
    // While there are still values in each array...
    while (indexA < arrA.length || indexB < arrB.length) {
      // Compare the first values of each array
      // Add the smaller value to the return array
      // Move the pointer to the next value in that array
      if (indexA === arrA.length) {
        returnArray.push(arrB[indexB]);
        indexB++;
      } else if (indexB === arrB.length) {
        returnArray.push(arrA[indexA]);
        indexA++;
      } else if (arrA[indexA] < arrB[indexB]) {
        returnArray.push(arrA[indexA]);
        indexA++;
      } else {
        returnArray.push(arrB[indexB]);
        indexB++;
      }
    }

    // Return the return array
    return returnArray;

  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function quicksort(arr) {

    // Check if the input is length 1 or less
    if (arr.length <= 1) {
        // If so, it's already sorted: return
        return arr;
    }

    // Pick a pivot
    let pivot = arr[0];

    // Orient the pivot so that...
    const left = [];
    const right = [];
    for (let i = 1 ; i < arr.length ; i++) {
        if (arr[i] < pivot) {
            // every number smaller than the pivot is to the left
            left.push(arr[i]);
        } else {
            // every number larger (or equal) than the pivot is to the right
            right.push(arr[i]);
        }
    }

    // Recursively sort the left
    const leftSorted = quicksort(left);
    // Recursively sort the right
    const rightSorted = quicksort(right);

    // Return the left, pivot and right in sorted order
    return [...leftSorted, pivot, ...rightSorted]

}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function selectionSort(arr) {

    // Copy the original array
    arrCopy = [...arr];

    // Create an array to store the sorted values
    const sorted = [];

    // While the array is not empty...
    while (arrCopy.length > 0) {

      console.log(sorted.join(","));

      // Find the index of the minimum value in the unsorted half
      let minIndex = 0;
      for (let i = 1 ; i < arrCopy.length ; i++) {
        if (arrCopy[i] < arrCopy[minIndex]) {
          minIndex = i;
        }
      }

      // Save and remove the value at the min index
      let minValue = arrCopy.splice(minIndex, 1)[0];

      // Add the min value to the end of the sorted array
      sorted.push(minValue)
    }

    return sorted;

  }



  function selectionSortInPlace(arr) {

    // Set a pointer at zero dividing the array into sorted and unsorted halves
    let divider = 0;

    // Repeat while the unsorted half is not empty:
    while (divider < arr.length) {

      console.log(arr.join(","));

      // Find the index of the minimum value in the unsorted half
      let minIndex = divider;
      for (let i = divider + 1 ; i < arr.length ; i++) {
        if (arr[i] < arr[minIndex]) {
          minIndex = i;
        }
      }

      // Save the min value
      let minValue = arr[minIndex];

      // Shift every unsorted value to the left of the min value to the right by 1
      for (let i = minIndex ; i >= divider ; i--) {
        arr[i] = arr[i-1];
      }

      // Put the min value at the divider
      arr[divider] = minValue;

      // Increment the divider and repeat
      divider++;
    }

    return arr;

  }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function insertionSort(arr) {
    /*
    Pseudocode:
    Copy the original array
    Create an array to store the sorted values
    While the array is not empty:
    - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    - Pop a value from the array
    - Create a new spot at the end of the array with null to help with comparisons
    - Walk through the sorted array in reverse order
    - Check if the value to the left is smaller than the new value
    - If so, you've reached the insertion point so exit the loop
    - If not shift the value to the right by 1 and continue
    - Insert the unsorted value at the break point
    Return the sorted array
    */

    //!!START
    arrCopy = [...arr];

    const sorted = [];

    while (arrCopy.length > 0) {
      console.log(sorted.join(","));

      let val = arrCopy.pop();

      sorted.push(null);

      let i = sorted.length - 1;
      while (i > 0) {
        if (sorted[i - 1] < val) {
          break;
        } else {
          sorted[i] = sorted[i - 1];
          i--;
        }
      }

      sorted[i] = val;
    }

    return sorted;
    //!!END
  }

  // In-place Insertion Sort
  // Mutates the original array
  function insertionSortInPlace(arr) {
    /*
    Pseudocode:
    Set a pointer dividing the array into sorted and unsorted halves
    Repeat while the unsorted half is not empty:
    - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    - Grab the first value from the unsorted half
    - For each value starting from the divider,
    - Check if the value to the left is smaller than the unsorted value
    - If so, you've reached the insertion point so exit the loop
    - If not shift the value to the right by 1 and continue
    - Insert the unsorted value at the break point
    - Increment the dividing pointer and repeat
    Return the mutated array
    */

    //!!START
    let divider = 1;

    while (divider < arr.length) {
      console.log(arr.join(","));

      let val = arr[divider];

      let i = divider;
      while (i > 0) {
        if (arr[i - 1] < val) {
          break;
        } else {
          arr[i] = arr[i - 1];
          i--;
        }
      }

      arr[i] = val;

      divider++;
    }

    return arr;
    //!!END
  }
