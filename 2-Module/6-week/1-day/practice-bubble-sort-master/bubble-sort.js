
function bubbleSort(arr) {
    let swap = false
    // Iterate through the array
    for(let i = 0 ; i < arr.length; i++){
      // If the current value is greater than its neighbor to the right
        // Swap those values
        let [left, right] = [arr[i], arr[i+1]]
        if(right < left){
          // Do not move this console.log
          console.log(arr)
          console.log("The Two numbers to swap", left, right)
          arr[i] = right
          arr[i+1] = left
          swap = true
          console.log(arr.join(","));
        }

    // If you get to the end of the array and no swaps have occurred, return
  }
  if(!swap) return arr
  // Otherwise, repeat from the beginning
  else bubbleSort(arr)

}

bubbleSort([1,3,2])

module.exports = bubbleSort;