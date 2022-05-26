/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

    console.log(sort([])) // prints []
    console.log(sort([9])) // prints [9]
    console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
    console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
*/
//helper for sort
const merge = (leftList, rightList) =>{
    let merge = [];
    while(leftList.length > 0 && rightList.length > 0){
        const firstLeft = leftList[0];
        const firstRight = rightList[0]; 
        //compare firstLeft and firstright and see which one is smaller
        if(firstLeft < firstRight){
            merge.push(firstLeft);
            leftList.shift();
        }
        else{
            merge.push(firstRight);
            rightList.shift();
        }

    }
    merge = [...merge, ...leftList, ...rightList]
    return merge;
}


function sort(nums) {
    //base case
    if(nums.length <= 1){
        return nums;
    }

    const midIndex = Math.floor(nums.length / 2)
    const leftList = nums.slice(0, midIndex)
    const rightList = nums.slice(midIndex)

    const sortedLeft = sort(leftList);
    const sortedRight = sort(rightList);

    const mergedList = merge(sortedLeft, sortedRight);
    return mergedList;

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