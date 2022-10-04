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

const swap = (arr, index, index2) => {
  let temp = arr[index]
  arr[index] = arr[index2]
  arr[index2] = temp
}

  function bubbleSort(arr) {
    let hasSwapped = true

    while(hasSwapped){
      // Iterate through the array
      hasSwapped = false
      for(let i = 0; i < arr.length; i++){
        // If the current value is greater than its neighbor to the right
        if(arr[i] > arr[i + 1]){
          // Swap those values
          // [arr[i] , arr[i + 1]] = [arr[i + 1], arr[i]]
          swap(arr, i, i + 1)
          hasSwapped = true
          // Do not move this console.log
          console.log(arr.join(","));

        }

      }
    }
    
    return arr

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning

}

module.exports = bubbleSort;