function getNeighbors(row, col, graph) {
  let neighbors = []
  // Check top
  if(row - 1 >= 0){
    if(graph[row -1][col] === 1) neighbors.push([row-1, col])
  }
  // Check bottom
  if(row +1 < graph.length){
    if(graph[row+1][col] === 1 ) neighbors.push([row +1, col])
  }
  // Check left
  if(col -1 >= 0){
    if(graph[row][col -1] ===1) neighbors.push([row, col -1])
  }
  // Check right
  if(col + 1 < graph[row].length){
    if(graph[row][col +1] === 1) neighbors.push([row, col +1])
  }
  // Return neighbors
  return neighbors
  // Your code here
}


function islandSize (row, col, graph) {
  console.log()
  // Create a visited set to store visited nodes
  let visited = new Set([[row, col].join('')])
  console.log(visited)
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
    getNeighbors(node[0], node[1], graph).forEach(el => {
      // Then push all the UNVISITED neighbors on top of the stack
      let cords = [el[0], el[1]]
      if(!visited.has(cords.join(''))){
        // and mark them as visited
        visited.add(cords.join(''))
        stack.push(cords)
      }

    })
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  }

  // return size
  return size
  // Your code here
}

module.exports = [getNeighbors, islandSize];