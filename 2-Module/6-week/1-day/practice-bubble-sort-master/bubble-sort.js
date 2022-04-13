
function bubbleSort(arr) {
    let swap = false
    // Iterate through the array
    for(let i = 0 ; i < arr.length; i++){

      let [left, right] = [arr[i], arr[i+1]]
      if(right < left){
        console.log(arr, "Values to swap", left, right)
        // If the current value is greater than its neighbor to the right
        // Swap those values
        // Do not move this console.log
        arr[i] = right
        arr[i +1] = left
        swap = true
        // console.log(arr.join(","));
      }
    }
    if(!swap) return arr
    // If you get to the end of the array and no swaps have occurred, return
    // Otherwise, repeat from the beginning
    bubbleSort(arr)
}

let arr = [2,5,4,3,7,6,8,4,3,2,3,4,5]
console.log(arr)
bubbleSort(arr)
console.log(arr)

module.exports = bubbleSort;