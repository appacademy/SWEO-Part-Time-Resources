function getNeighbors(row, col, graph) {
  let n = [];
  // Check top
  if (graph[row - 1] && graph[row - 1][col] === 1) {
    n.push([row - 1, col])
  }
  // Check bottom
  if (graph[row + 1] && graph[row + 1][col] === 1) {
    n.push([row + 1, col])
  }
  // Check left
  if (graph[row][col - 1] === 1) {
    n.push([row, col - 1])
  }
  // Check right
  if (graph[row][col + 1] === 1) {
    n.push([row, col + 1])
  }
  // Return neighbors
  return n
}


function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  let visited = new Set();
  // Create a stack, put the starting node in the stack
  let stack = [[row, col]];
  // Put the stringified starting node in visited
  visited.add(`${[row, col]}`)
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length) {
    // Pop the first node
    let curr = stack.pop();
    let currRow = curr[0];
    let currCol = curr[1];
    // DO THE THING (increment size by 1)
    size++
    // Then push all the UNVISITED neighbors on top of the stack
    let n = getNeighbors(currRow, currCol, graph)
    n.forEach(neigh => {
      if (!visited.has(`${neigh}`)) {
        // and mark them as visited
        visited.add(`${neigh}`);
        stack.push(neigh)
      }
    })
  }
  return size
}

module.exports = [getNeighbors, islandSize];
