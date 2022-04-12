// Insertion Sort out-of-place
// Do not modify the original array
const insert = (array, value) => {
  // if the array is empty
  if(array.length ===0 ) {
    array.push(value)
    return array
  }
  // check beginning 
  if(value < array[0]){
    array.unshift(value)
    return array
  }
  // check the end
  if(array[array.length -1] < value){
    array.push(value)
    return array
  }

  array.slice().forEach((element, i) => {
    // 3
    //[1,2,4,5,6]
    // [1, 2, 3, 4, 5, 6]
    if(value > element && value < array[i+1]){
      array = [...array.slice(0, i+1), value, ...array.slice(i+1)]
    }
    
  });

  return array

}

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
  let array = arr.slice()
  let sorted = []
  while(array.length){
    // console.log(array)
    console.log(sorted.join(','))
    let val = array.pop()
    sorted = insert(sorted, val)
  }
  return sorted
  // Your code here
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
}

module.exports = [insertionSort, insertionSortInPlace];