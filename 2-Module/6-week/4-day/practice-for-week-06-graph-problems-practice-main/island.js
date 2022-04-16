function getNeighbors(row, col, graph) {
  let neighbors = []
  // Check top
  if(row -1 >=0){
    if(graph[row -1][col] ===1) neighbors.push([row -1, col])
  }
  // Check bottom
  if(row +1 < graph.length){
    if(graph[row +1][col] === 1) neighbors.push([row +1, col])
  }
  // Check left
  if(col - 1 >=0){
    if(graph[row][col -1] === 1) neighbors.push([row, col -1])
  }
  // Check right
  if(col + 1 < graph[row].length){
    if(graph[row][col +1] === 1) neighbors.push([row, col + 1])
  }
  // Return neighbors
  return neighbors
  // Your code here
}


function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  let visited = new Set([[row, col].join('')])
  // Create a stack, put the starting node in the stack
  let stack = [[row, col]]
  // Put the stringified starting node in visited

  // Initialize size to 0
  let size = 0
  // While the stack is not empty,
  while(stack.length){
    // Pop the first node
    let node = stack.pop()
    // DO THE THING (increment size by 1)
    size++
    // Then push all the UNVISITED neighbors on top of the stack
    let neighbors = getNeighbors(node[0], node[1], graph)
    neighbors.forEach(el => {
      // and mark them as visited
      if(!visited.has(el.join(''))){
        visited.add(el.join(''))
        stack.push(el)
      }
    })
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
  }

  return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];