function getNeighbors(row, col, graph) {
  let neighbors = [];

  // Check top
  if (row > 0 && graph[row - 1][col] === 1) neighbors.push([row - 1, col])
  // Check bottom
  if (row < graph.length - 1 && graph[row + 1][col] === 1) neighbors.push([row + 1, col])
  // Check left
  if (col > 0 && graph[row][col - 1] === 1) neighbors.push([row, col - 1])
  // Check right
  if (col < graph[row].length - 1 && graph[row][col + 1]) neighbors.push([row, col + 1])
  // Return neighbors
  return neighbors;
}


function islandneighbors(row, col, graph) {
  let currentNode = [row, col];
  // Create a visited set to store visited nodes
  // Put the stringified starting node in visited
  const visited = new Set([currentNode.toString()])
  // Create a stack, put the starting node in the stack
  const stack = [currentNode];
  // Initialize neighbors to 0
  let neighbors = 0;
  // While the stack is not empty,
  while (stack.length){
    // Pop the first node
    currentNode = stack.pop();
    // DO THE THING (increment neighbors by 1)
    neighbors++;
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    const currentNeighbors = getNeighbors(currentNode[0], currentNode[1], graph);
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    for (let n of currentNeighbors){ // for..of for loop an array, for..in for loop object {}
      if (!visited.has(n.toString())){
        visited.add(n.toString());
        stack.push(n);
      }
    }
  }
  // return neighbors
  return neighbors;
}

module.exports = [getNeighbors, islandneighbors];