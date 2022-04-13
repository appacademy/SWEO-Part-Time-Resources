function quicksort(arr) {

    // Check if the input is length 1 or less
    if (arr.length < 2) {
        // If so, it's already sorted: return
        return arr;
    }

    // Pick a pivot
    let pivot = arr[0];

    // Orient the pivot so that...
    // every number smaller than the pivot is to the left
    // every number larger (or equal) than the pivot is to the right
    let left = arr.filter(el => el < pivot)
    let right = arr.filter(el => el > pivot)
    // Recursively sort the left
    const leftSorted = quicksort(left); // []
    // Recursively sort the right
    const rightSorted = quicksort(right);

    // Return the left, pivot and right in sorted order
    return [...leftSorted, pivot, ...rightSorted]

}

quicksort([4,8,5,3])

module.exports = [quicksort];
