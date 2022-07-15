let matrix = [
    [1, 1, 1, 0, 0],
    [0, 1, 1, 0, 1],
    [0, 1, 1, 0, 1],
  ]
  
  console.log(getNeighbors(1, 1, matrix)) //[[0, 1], [1, 2], [2, 1]]
  
  //the goal of getNeighbors is to get all the neighbors of a given node into an array only if each neighbor value is 1.
  function getNeighbors(row, col, graph) {
    //crate an array to host the neighbors.
    const neighborArr = [];
    // we need to becareful and make sure the row doesn't go out of bounds as well as the value of the neighbor has to be 1.
    if (matrix[row - 1] !== undefined && graph[row - 1][col] === 1) {
      neighborArr.push([row - 1, col])
    }
  
    // Check bottom
    if (graph[row + 1] !== undefined && graph[row + 1][col] === 1) {
      neighborArr.push([row + 1, col])
    }
    // Check left
    if (graph[row][col - 1] !== undefined && graph[row][col - 1] === 1) {
      neighborArr.push([row, col - 1])
    }
  
    // Check right
    if (graph[row][col + 1] !== undefined && graph[row][col + 1] === 1) {
      neighborArr.push([row, col + 1])
    }
    // Return neighbors
    return neighborArr;
    // Your code here
  }
  
  
  function islandSize(row, col, graph) {
  
    // Create a visited set to store visited nodes
    const visitedSet = new Set();
  
  
    // Create a stack, put the starting node in the stack.
    // here we will create a stack and the item we add to the stack is an array that contains the coordinates for the node on the graph [row, col]
    const startNode = [row, col]
    const stack = [startNode]; //stack = [[row, col]]
  
    // Put the stringified starting node in visited
    //this is the tricky part, analyze why we CANNOT just add an array of [row,col] 
    //instead we have to create a hash like string w/ interpolation
    visitedSet.add(`${row},${col}`)
  
    // Initialize size to 0
    let size = 0;
    // While the stack is not empty,
    while (stack.length > 0) {
      // Pop the first node
      let currentNode = stack.pop(); //i.e. currentNode = [1,1]
      let currentRow = currentNode[0];
      let currentCol = currentNode[1];
  
      // DO THE THING (increment size by 1)
      size += 1;
      // HINT: This is what your helper function `getNeighbors` is for
      // GET NEIGHBORS!
      const neighborArr = getNeighbors(currentRow, currentCol, graph);

      // Then traverse neighbors array and push all the UNVISITED neighbors on top of the stack and set
      for (let i = 0; i < neighborArr.length; i++) {
        const neighborEl = neighborArr[i]; //i.e. neighborEl = [1,2]
        // HINT: Remember, you're storing your visited nodes as strings!
        // WHY will !visitedSet.has(neighborEl) fail?
        if (!visitedSet.has(`${neighborEl[0]},${neighborEl[1]}`)) {
          // and mark them as visited
          // WHY will  visitedSet.add(neighborEl) fail?
          visitedSet.add(`${neighborEl[0]},${neighborEl[1]}`);
          stack.push(neighborEl);
        }
      }
  
    }
    // return size
    return size;
  }
  
  module.exports = [getNeighbors, islandSize];