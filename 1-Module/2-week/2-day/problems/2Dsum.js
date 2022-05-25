// your code here
let twoDimensionalSum = function(matrix){
  // first i need a sum variable 
  let sum = 0;
  // iterate through the outer array to grab each subarray
  for (let i = 0; i < matrix.length; i++){
    let subArray = matrix[i];
    console.log('-------', subArray)
    // iterate through each subarray to add up all the nums
    for (let j = 0; j < subArray.length; j++){
      let num = subArray[j];
      console.log(num);
      sum += num; // sum = sum + num
    }
  }

  // return the sum
  return sum;
}


let arr1 = [
  [1, 3],
  [-4, 7, 10],
  [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
  [],
  [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6