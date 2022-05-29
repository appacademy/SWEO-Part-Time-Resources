/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

function sort(nums, sorted = []) {

    // Base case: if empty or if all numbers are in the sorted array
    if (nums.length === 0) return sorted;


    // Find the smallest number in the nums array (can use a for loop for this)
    //[0, 1, -3]
    let smallestIndex = 0;
    let smallestNumber = nums[0]
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        if (currentNum < smallestNumber) {
            smallestIndex = i;
            smallestNumber = currentNum;
        }
    }

    // Remove the smallest number from the nums array (the one we just processed above) - utilize array.splice method to remove an element anywhere in the array!
    nums.splice(smallestIndex, 1); //splice MUTATE our original array, removing the smallest for us. So we are getting closer to our base case here. SPLICE IS OUR RECURSIVE STEP.


    // Add the smallest number to the sorted array
    sorted.push(smallestNumber);

    // Recursively call sort with the new array to do it again for the rest of the numbers to find the next shortest.
    sort(nums, sorted);

    return sorted; //return the answer after we built it.
}

// -------------brandon----------------

// function sort(nums, sorted = []) {

//     if (nums.length === 0) {
//         return sorted;
//     }
//     let smallest = Math.min(...nums);
//     sorted.push(smallest);
//     let i = nums.indexOf(smallest);
//     nums.splice(i, 1);

//    return sort(nums, sorted);
// }


// -------------Erena----------------
// function sort(nums, sorted = []) {
//     if (nums.length === 0) {
//         return sorted;
//     } else {
//         let minNum = Math.min(...nums);
//         sorted.push(minNum);
//         let i = nums.findIndex((el) => el === minNum);
//         nums.splice(i, 1);
//         return sort(nums, sorted);
//     }
// }

// -------------kevin luong---------------
// function sort(nums, sorted = []) {
//     // Your code here
//     if(nums.length === 0) return sorted;

//     let min = Math.min(...nums);

//     sorted.push(min);

//     let index = nums.indexOf(min);
//     console.log(index);

//     nums.splice(index,1);

//     return sort(nums,sorted)

// }



console.log(sort([4, 1, 6, 3, 1, 7])); // [1, 1, 3, 4, 6, 7]
console.log(sort([7, 4, 1, 6,])); // [1, 4, 6, 7]
console.log(sort([0, 1, -3])); // [-3, 0, 1]
console.log(sort([])); // []
