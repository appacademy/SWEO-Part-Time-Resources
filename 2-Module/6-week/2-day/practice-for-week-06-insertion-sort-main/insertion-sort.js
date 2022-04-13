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
  let array = arr.slice()
  let sorted = []
  while(array.length){
    console.log(sorted.join(','))
    let value = array.pop()
    sorted = insert(sorted, value)
  }
  return sorted
}
function insert(array, value){
  // checking if the array is empty
  if(array.length === 0 ){
    array.push(value)
    return array
  }
  // checking the beginning of the array
  if(value < array[0]){
    array.unshift(value)
    return array
  }
  // checking the end of the array
  if(value > array[array.length -1]){
    array.push(value)
    return array
  }
  // [1,3,4]
  array.slice().forEach((element, i) => {
    if(value > element && value < array[i + 1]){
      array = [...array.slice(0, i+1), value, ...array.slice(i+1)]
    }
  });
  return array 
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

  let pointer = 1
  while(pointer < arr.length){
    console.log(arr.join(','))
    let val = arr[pointer]
     for(let i = pointer; i >=0 ;i--){
       if(val < arr[i -1]){
         arr[i] = arr[i-1]
         arr[i-1] =val
       }
     }
     pointer ++
  }
  return arr
}

module.exports = [insertionSort, insertionSortInPlace];