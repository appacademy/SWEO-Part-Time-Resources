/*
Insertion Sort gradually builds up a larger and larger sorted region at the 
left-most end of the array. Insertion sort focuses on sorting each element in 
the order they appear from left to right, regardless of their value, and 
inserting them into the most appropriate position in the already sorted region.
*/


// Insertion Sort out-of-place

// Do not modify the original array
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
  let copyArr = [...arr]

  const sorted = []
  while(copyArr.length){
    console.log(sorted.join(','))

    let curr = copyArr.pop()
    sorted.push(null)

    let i = sorted.length - 1
    while(i){
      if(sorted[i - 1] < curr){
        break
      } else{
        sorted[i] = sorted[i - 1]
        i--
      }
    }
    sorted[i] = curr
  }
  return sorted
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
  // Your code here
  let divider = 1
  while(divider < arr.length){
    console.log(arr.join(','))
    let curr = arr[divider]

    let i = divider
    while(i > 0){
      if(arr[i -1] < curr){
        break
      } else {
        arr[i] = arr[i - 1]
        i--
      }
    }
    arr[i] = curr
    divider++
  }
  return arr
}

module.exports = [insertionSort, insertionSortInPlace];