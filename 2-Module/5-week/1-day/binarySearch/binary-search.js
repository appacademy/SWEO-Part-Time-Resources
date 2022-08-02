function linearSearch (arr, target) {
  return arr.indexOf(target); // O(n) time complexity;
};

function binarySearch(arr, target) { // Constant O(1) space complexity and Logarithmic O(log n) time complexity!

  // Set integers pointing to the high and low range of possible indices
  let lowIdx = 0; 
  let highIdx = arr.length - 1;
  
  // While high and low indices do not overlap...
  while (lowIdx <= highIdx){ // logarithmic time O(log n)
    // Find the midpoint between high and low indices
    // Compare the target value to the midpoint value
    // If the target equals the midpoint...
      // Return the midpoint index
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
    let midIdx = Math.floor((lowIdx + highIdx) / 2);
    if (target === arr[midIdx]){
      return midIdx;
    } else if (target > arr[midIdx]){
      lowIdx = midIdx + 1
    } else {
      highIdx = midIdx - 1
    }
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;
}


module.exports = [linearSearch, binarySearch]