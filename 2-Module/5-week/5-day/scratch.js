const arr = [3,2,1,0,4,7,6]

function bubbleSort(arr) {
    let swapped;

    while(swapped){
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [[arr[i], arr[i + 1]]]= []
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } ;

    return arr;
  };

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

    // Your code here
}

function selectionSort(arr) {

    // Copy the original array

    // Create an array to store the sorted values

    // While the array is not empty...

      // Do not move this console.log
      console.log(sorted.join(","));

      // Find the index of the minimum value in the unsorted half

      // Save and remove the value at the min index

      // Add the min value to the end of the sorted array

}


function quicksort(arr) {

    // Check if the input is length 1 or less
      // If so, it's already sorted: return

    // Pick the first value as the pivot

    // Orient the pivot so that...
        // every number smaller than the pivot is to the left
        // every number larger (or equal) than the pivot is to the right

    // Recursively sort the left
    // Recursively sort the right

    // Return the left, pivot and right in sorted order

}

function mergeSort(arr) {

    // Check if the input is length 1 or less
      // If so, it's already sorted: return

    // Divide the array in half

    // Recursively sort the left half
    // Recursively sort the right half

    // Merge the halves together and return

}


  // Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

    // Create an empty return array

    // Point to the first value of each array
    // While there are still values in each array...
      // Compare the first values of each array
      // Add the smaller value to the return array
      // Move the pointer to the next value in that array

    // Return the return array

}
