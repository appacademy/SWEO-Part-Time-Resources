const swap = (arr, index1, index2) => {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}


function bubbleSort(arr) {
  let hasSwapped = true
  while(hasSwapped){
    hasSwapped = false
    // Iterate through the array
    for(let i = 0; i < arr.length; i++){
      // If the current value is greater than its neighbor to the right
        // Swap those values
        if(arr[i] > arr[i + 1]){

          // [ arr[i], arr[i + 1] ] = [ arr[i+1], arr[i] ]
          swap(arr, i, i+1)
          hasSwapped = true
          // Do not move this console.log
          console.log(arr.join(","));
        }

    }

  }

    // If you get to the end of the array and no swaps have occurred, return
  return arr
      // Otherwise, repeat from the beginning

}

module.exports = bubbleSort;