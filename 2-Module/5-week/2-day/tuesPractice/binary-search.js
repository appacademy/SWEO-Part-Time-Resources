const linearSearch = (arr, target) => arr.indexOf(target);

const binarySearch = (arr, target) => {
  // Set integers pointing to the high and low range of possible indices
  let mid;
  let l = 0;
  let h = arr.length - 1;
  // While high and low indices do not overlap...
  while (l <= h) {
    // Find the midpoint between high and low indices
    mid = Math.floor((l + h) / 2);

    // Compare the target value to the midpoint value
    if (target === arr[mid]) return mid;
    // If the target equals the midpoint...
    // Return the midpoint index
    // If the target is higher than the midpoint...
    else if (target > arr[mid]) l = mid + 1;
    // Move the low pointer to midpoint + 1
    // If the target is less than the midpoint...
    else if (target < arr[mid]) h = mid - 1;
    // Move the high pointer to midpoint - 1
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;
};

module.exports = [linearSearch, binarySearch];





[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
