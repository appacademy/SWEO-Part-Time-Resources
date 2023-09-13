// Fill an array with 1 million integers
n = 100000000;
arr = [];
for (let i = 0 ; i < n ; i ++) {
  arr.push(i);
}

// Pick 10 thousand random values to search for, from -n to n
valuesToSearch = [];
for (let i = 0 ; i < 10000 ; i++) {
  valuesToSearch.push(Math.floor(Math.random() * 2 * n) - n);
}

startTime = Date.now();
let linearSearch = function(arr, ...valuesToSearch) {
	for (let i = 0 ; i < valuesToSearch.length ; i++) { // Linear
		arr.includes(valuesToSearch[i]);
	}
}
linearSearch(arr, valuesToSearch)
endTime = Date.now();

console.log(`Linear Search: ${endTime - startTime}ms`);

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices

  // While high and low indices do not overlap...

    // Find the midpoint between high and low indices

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
      // Return the midpoint index

    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1

    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1

  // Return -1 if the loop exits with overlapping pointers

}

startTime = Date.now(); // Binary
for (let i = 0 ; i < valuesToSearch.length ; i++) {
  binarySearch(arr, valuesToSearch[i]);
}
endTime = Date.now();

console.log(`Binary Search: ${endTime - startTime}ms`); 
