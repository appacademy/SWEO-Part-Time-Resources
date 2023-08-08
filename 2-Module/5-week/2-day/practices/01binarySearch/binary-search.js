// function linearSearch (arr, target) {

//   // Can you solve this in one line?
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] === target) return i
//   }
//   return -1;
// };

const linearSearch = (arr, target) => arr.indexOf(target);

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = arr.length-1;
  // While high and low indices do not overlap...
  while (low <= high){
    // Find the midpoint between high and low indices
    const midIndex = Math.floor((low + high) / 2)
    // Compare the target value to the midpoint value
    const midVal = arr[midIndex];
    // If the target equals the midpoint...
    // Return the midpoint index
    if (target === midVal) return midIndex;
    // If the target is higher than the midpoint...
    // Move the low pointer to midpoint + 1
    else if (target > midVal) low = midIndex + 1;
    // If the target is less than the midpoint...
    // Move the high pointer to midpoint - 1
    else high = midIndex - 1;
  }
    // Return -1 if the loop exits with overlapping pointers
  return -1;  
  }
  
  
  module.exports = [linearSearch, binarySearch]