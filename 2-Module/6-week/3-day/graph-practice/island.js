function getNeighbors(row, col, graph) {
  const neighbors = []
  // Check top
  if(row > 0 && graph[row - 1][col] === 1){
    neighbors.push([row -1, col])
  }
  // Check bottom
  if(row < graph.length - 1 && graph[row + 1][col] === 1){
    neighbors.push([row + 1, col])
  }
  // Check left
  if(col > 0 && graph[row][col - 1] === 1){
    neighbors.push([row, col - 1])
  }
  // Check right
  if(col < graph[0].length - 1 && graph[row][col + 1] === 1){
    neighbors.push([row, col + 1])
  }

  // Return neighbors
  return neighbors
  // Your code here
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set()
  // Create a stack, put the starting node in the stack
  const stack = [[row, col]]
  // console.log(stack[0])
  // Put the stringified starting node in visited
  visited.add(`${row},${col}`)
  // Initialize size to 0
  // let size = 0
  // While the stack is not empty,
  while(stack.length){
    // Pop the first node
    const curr = stack.pop()
    // size++
    const currRow = curr[0]
    const currCol = curr[1]
    // DO THE THING (increment size by 1)
    let neighbors = getNeighbors(currRow, currCol, graph)
    for(let neighbor of neighbors){
      console.log(visited)
      // for(let i = 0; i < neighbors.length; i++){
      //   let neighbor = neighbors[i]
      const nodeString = `${neighbor[0]},${neighbor[1]}`
      if(!visited.has(nodeString)){
        visited.add(nodeString)
        stack.push(neighbor)
      }
    }
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  }

  // return size
  return visited.size
  // Your code here
}

module.exports = [getNeighbors, islandSize];