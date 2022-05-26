/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

    console.log(sort([])) // prints []
    console.log(sort([9])) // prints [9]
    console.log(sort([5, 4, 3, 2, ])) // prints [1, 2, 3, 4, 5]
    console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
*/

// ---------------------------sort original----------------------
//recursive go through the nums array, find the smallest and add it to result. Then repeat until nums is empty. <-- need to break down this plan to get closer and closer to code.
function sort(nums, result=[]) {
    //base case is when our nums array is empty, return result
    if(nums.length === 0){
        return result;
    }

    //part 1: find the smallest number in our nums array
    //initially, smallest will be the first item in the array.
    let smallestVal = nums[0];
    let smallestIndx = 0; //if we need to access and remove the element, we will need the index as well.
    //we then iterate through the rest of the array, and check if anything else is smaller than our initial smallest.
    for(let i=1; i<nums.length; i++){
        const currentNum = nums[i];
        //if currentNum is smaller than smallestVal
        if(currentNum < smallestVal){
            //reassign smallestVal and smallestIndx to the current one if we hit this block.
            smallestIndx = i;
            smallestVal = currentNum; //new smallest 
        }
    }

    //part 2: after finding smallest value, add it to result, remove it from nums array, and then repeat the process for the REST of the elements in nums, and then return result

    //now after finding the smallest, push it to result array
    result.push(smallestVal);
    //remove the smallestVal from our nums array
    nums.splice(smallestIndx, 1) //(index we want to start removal, and how many items we want to remove)
    const totalResult = sort(nums, result); //get our result
    return totalResult;

}

console.log(sort([])) // prints []
console.log(sort([9])) // prints [9]
console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = sort;
} catch (e) {
    module.exports = null;
}