// Write a function maxInMatrix(matrix) that takes 
// in a 2-dimensional array (matrix) and returns the 
// largest value in the matrix. The matrix contains at 
// least one value.

// your code here

function maxInMatrix(matrix){
  // create max variable
  // iterate through outer array
  // iterate through inner array
  // compare each element with the max
  // if it's bigger, set it to be the max
  // return max;
  let max = -Infinity;

  for (let i = 0; i < matrix.length; i++){
    
    let subArr = matrix[i];
    console.log('---- this is our matrix[i]', subArr)
    for (let j = 0; j < matrix[i].length; j++){
    
      let ele = subArr[j]; // matrix[i][j]
      console.log('this is our element in the subArr (matrix[i][j])', ele)
      if (max < ele) max = ele;
    }
  }
  return max;
}


matrix = [[11,  2,-99],
          [20, 19, 10],
          [47, 72, 56]]

console.log(maxInMatrix(matrix)); // 72
