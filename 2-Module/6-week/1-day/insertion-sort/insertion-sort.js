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












  Return the sorted array
  */

  // Your code here
//  Copy the original array
let copyArr = [...arr]

//  Create an array to store the sorted values
const sorted = []

// While the array is not empty:
while(copyArr.length){
  // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  console.log(sorted.join(',')) 
  // - Pop a value from the array
  let curr = copyArr.pop()
  // - Create a new spot at the end of the array with null to help with comparisons
  sorted.push(null)

  //  - Walk through the sorted array in reverse order
  let i = sorted.length - 1
  while(i){
    // - Check if the value to the left is smaller than the new value
    if(sorted[i - 1] < curr){
      // - If so, you've reached the insertion point so exit the loop
      break
    } else {
      // - If not shift the value to the right by 1 and continue
      sorted[i] = sorted[i - 1]
      i--
    }
  }
  // - Insert the unsorted value at the break point
  sorted[i] = curr

}
return sorted

}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:





  - For each value starting from the divider,



  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
  // Set a pointer dividing the array into sorted and unsorted halves
  let divider = 1

  // Repeat while the unsorted half is not empty:
  while(divider < arr.length){
    // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(arr.join(','))
    //  - Grab the first value from the unsorted half
    let curr = arr[divider]
    // - For each value starting from the divider,
    let i =  divider
    while(i > 0){
      // - Check if the value to the left is smaller than the unsorted value
      // - If so, you've reached the insertion point so exit the loop
      if(arr[i - 1] < curr){
        break
      } else {
        // - If not shift the value to the right by 1 and continue
        arr[i] = arr[i - 1]
        i--
      }
    }
    // - Insert the unsorted value at the break point
    arr[i] = curr
    divider++

  }
  return arr
}

module.exports = [insertionSort, insertionSortInPlace];