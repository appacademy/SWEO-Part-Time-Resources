const matrix = [
  [ 0, 1, 0, 0, 1 ],
  [ 1, 0, 0, 0, 1 ],
  [ 1, 1, 0, 1, 1 ],
  [ 0, 1, 1, 0, 0 ],
  [ 0, 0, 0, 0, 0 ]
];

function getNeighbors(start, matrix) {
  let neighbors = [];
  
  let [row, col] = start;
  if (matrix[row][col - 1]) neighbors.push([row, col - 1]);
  if (matrix[row][col + 1]) neighbors.push([row, col + 1]);
  if (matrix[row - 1]) {
    if (matrix[row - 1][col]) neighbors.push([row - 1, col]);
    if (matrix[row - 1][col - 1]) neighbors.push([row - 1, col - 1]);
    if (matrix[row - 1][col + 1]) neighbors.push([row - 1, col + 1]);
  }
  if (matrix[row + 1]) {
    if (matrix[row + 1][col]) neighbors.push([row - 1, col]);
    if (matrix[row + 1][col - 1]) neighbors.push([row - 1, col - 1]);
    if (matrix[row + 1][col + 1]) neighbors.push([row - 1, col + 1]);
  }

  return neighbors;
}

console.log(getNeighbors([2,2], matrix)) // returns [ [1,2], [3,2], [1,2], [3,2] ]
console.log(getNeighbors([0,0], matrix)) // returns [ [1,0], [0,1] ]
console.log(getNeighbors([2,0], matrix)) // returns [ [1,0], [3,0], [2,1] ]