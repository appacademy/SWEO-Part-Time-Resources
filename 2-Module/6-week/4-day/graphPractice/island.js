function getNeighbors(row, col, graph) {
  const neighbors = [];

  // Check top
  if (row > 0 && graph[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }

  // Check bottom
  if (row < graph.length - 1 && graph[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }

  // Check left
  if (col > 0 && graph[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }

  // Check right
  if (col < graph[0].length - 1 && graph[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }

  return neighbors;

  // Your code here
}

function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  const visited = new Set();

  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];

  // Put the stringified starting node in visited
  visited.add([row, col].toString());

  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while (stack.length) {
    // Pop the first node
    let node = stack.pop();
    let currentRow = node[0];
    let currentCol = node[1];

    // DO THE THING (increment size by 1)
    size++;

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    const neighborArray = getNeighbors(currentRow, currentCol, graph);

    for (let neighbor of neighborArray) {
      let nodeStr = neighbor.toString();
      if (!visited.has(nodeStr)) {
        stack.push(neighbor); visited.add(nodeStr);
      }
    }
  }
  // HINT: This is what your helper function `getNeighbors` is for
  // HINT: Remember, you're storing your visited nodes as strings!
  return size;
}

module.exports = [getNeighbors, islandSize];
