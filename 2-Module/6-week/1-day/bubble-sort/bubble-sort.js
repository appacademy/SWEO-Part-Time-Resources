//in-place array swaps --> in place means that we did not use extra space outside
function bubbleSort(arr) {

  //variable to check if swapped happened, acts as a switch
  let hasSwapped = true; //initially set to true so we can enter the while loop.
  //while hasSwapped is true, continue to iterate and check
  while(hasSwapped){

    // after entering the while loop, we want to make sure hasSwapped is not set to false, since nothing has been swapped yet.
    hasSwapped = false;

    // Iterate through the array
    for(let i=0; i<arr.length - 1; i++){
      // If the current value is greater than its neighbor to the right
      if(arr[i] > arr[i+1]){
        // Swap those values
        let temp = arr[i]; //copy a value of the number in a variable
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        hasSwapped = true;
        // Do not move this console.log
        console.log(arr.join(","));
      }
    }

    // If you get to the end of the array and no swaps have occurred, return
    if(hasSwapped === false){
        return ;
    }

    // Otherwise, repeat from the beginning
    
  }
}
let arr = [2,4,6,8,1,3,5,7,9];
bubbleSort(arr)
module.exports = bubbleSort;