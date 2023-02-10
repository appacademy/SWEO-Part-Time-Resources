const matrix = [
    [ 0, 1, 0, 0, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
];

function getNeighbors(start, matrix) {
  let [row, col] = start;
  
  if (row > 0 && matrix[row - 1][col]) console.log('up',matrix[row - 1][col]);
  if (row < matrix.length - 1 && matrix[row + 1][col]) console.log('down', matrix[row + 1][col]);
  if (col > 0 && matrix[row][col - 1]) console.log('left', matrix[row][col - 1]);
  if (col < matrix[row].length -1 && matrix[row][col + 1]) console.log('right', matrix[row][col + 1]);
  console.log('------------')
}

getNeighbors([2,2], matrix) // returns [ [1,2], [3,2], [1,2], [3,2] ]
getNeighbors([0,0], matrix) // returns [ [1,0], [0,1] ]
getNeighbors([2,0], matrix) // returns [ [1,0], [3,0], [2,1] ]