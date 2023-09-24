function getNeighbors(row, col, matrix) {
  let n = [];
  // Check top left
  // Check top
  // Check top right
  if (row > 0) {
    if (matrix[row - 1][col - 1] === 1) n.push([row - 1, col - 1])
    if (matrix[row - 1][col] === 1) n.push([row - 1, col])
    if (matrix[row - 1][col + 1] === 1) n.push([row - 1, col + 1])
  }

  // Check left
  // Check right
  if (matrix[row][col - 1] === 1) n.push([row, col - 1])
  if (matrix[row][col + 1] === 1) n.push([row, col + 1])

  // Check bottom left
  // Check bottom
  // Check bottom right
  if (row < matrix.length - 1) {
    // row + 1
    if (matrix[row + 1][col - 1] === 1) n.push([row + 1, col - 1])
    if (matrix[row + 1][col] === 1) n.push([row + 1, col])
    if (matrix[row + 1][col + 1] === 1) n.push([row + 1, col + 1])
  }
  return n;
}

function countIslands(matrix) {
  let set = new Set();
  let count = 0;
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 1 && !set.has(`${[r, c]}`)) {
        count++
        let stack = [[r, c]];
        set.add(`${[r, c]}`)
        while (stack.length) {
          let curr = stack.pop();
          let n = getNeighbors(curr[0], curr[1], matrix)
          n.forEach(neigh => {
            if (!set.has(`${neigh}`)) {
              set.add(`${neigh}`)
              stack.push(neigh)
            }
          })
        }
      }
    }
  }
  // Return island count
  return count;
}

module.exports = [countIslands, getNeighbors];
