function isSorted(nums) {

    // Loop through each number
    for (let i = 0 ; i < nums.length ; i++) {

        // Check if the current number is less than
        // the previous number
        if (nums[i] > nums[i + 1]) {
            // If it's not, return false
            return false;
        }
    }

    // If every number is greater or equal to the previous number
    // in the array, it's sorted.
    return true;

}

console.log(isSorted([1, 2, 3, 4, 5]))  // true
isSorted([2, 2, 4, 4])  // true
isSorted([1, 2, 4, 3, 5, 6])  // false
