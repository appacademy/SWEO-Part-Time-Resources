// Write a function maxColumn(matrix) that takes 
// in a 2-dimensional array (matrix) and returns
//  an array containing the maximum value in each 
//  column.

function maxColumn(matrix) {
  // iterate through the matrix to get access to each subArr
  // create another loop and get access to each column element
  // will need a max variable
  // find max in column
  // return it
  let maxes = [];
  for (let i = 0; i < matrix.length; i++){
    let max = -Infinity;
    // console.log('----------this is the column', i)
    for (let j = 0; j < matrix.length; j++){
      // console.log('this is the row', j)
      let columnElement = matrix[j][i]
      // console.log('the element in the column is', columnElement)
      if (max < columnElement) max = columnElement;
    }
    maxes.push(max);
  }
  return maxes;
}



matrix = [[ 5,  8, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(maxColumn(matrix)); // [12, 19, 21]

