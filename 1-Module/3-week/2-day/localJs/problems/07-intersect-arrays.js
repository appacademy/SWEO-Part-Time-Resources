/******************************************************************************
Write a function intersect(arr1, arr2) that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Hint: use indexOf

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) => []
*******************************************************************************/

// const intersect = (arr1, arr2) => arr1.filter(ele => arr2.includes(ele))
function intersect(arr1, arr2) {
  // Your code here
  let filtered = [];
  for(let ele of arr1){
    if (arr2.includes(ele)) filtered.push(ele)
  }
  return filtered
}

/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = intersect;