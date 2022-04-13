// Insertion Sort out-of-place
// Do not modify the original array
const insert = (arr, val) => {
  let newArr = arr.slice()
  // for empty array
  if(newArr.length ===0){
    newArr.push(val)
    return newArr
  }
  //check beginning 
  if(val < newArr[0]){
    newArr.unshift(val)
    return newArr
  }
  // check end
  if(val > newArr[newArr.length -1]){
    newArr.push(val)
    return newArr
  }
  // check middle
  arr.forEach((element, i) => {
    if(val < element && val > newArr[i-1]){
      newArr = [...newArr.slice(0, i), val, ...newArr.slice(i)]
    }
  });
  return newArr
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
    console.log(sorted.join(','))
    let val = array.pop()
    sorted = insert(sorted, val)
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

  // arr = [4,5,6,7,4,3,5,6]
  // pointer = 1
  // val = 5

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

console.log(insertionSortInPlace([3,6,7,4,5,9,8,5,6,7,3,2]))
module.exports = [insertionSort, insertionSortInPlace];