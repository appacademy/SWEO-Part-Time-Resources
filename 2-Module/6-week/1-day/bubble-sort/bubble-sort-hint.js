
function bubbleSort(arr) {

    //variable to check if swapped happened, acts as a switch
    let hasSwapped = true; //initially set to true so we can enter the while loop.

    //while hasSwapped is true, continue to iterate and check
    while(hasSwapped){
  
      // after entering the while loop, we want to make sure hasSwapped is not set to false, since nothing has been swapped yet.
      hasSwapped = false;
  
      // Iterate through the array

        // If the current value is greater than its neighbor to the right

          // Swap those values

          // Do not move this console.log
          console.log(arr.join(","));
    
    
      // If you get to the end of the array and no swaps have occurred, return

      // Otherwise, repeat from the beginning
      
    }
  }
  let arr = [2,4,6,8,1,3,5,7,9];
  bubbleSort(arr)
  module.exports = bubbleSort;