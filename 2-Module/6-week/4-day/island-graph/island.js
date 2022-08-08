// the goal of `getNeighbors` is to get all the neighbors that have the value of 1 in them and put them into an array.
const matrix = [
  [1,1,1,0,0],
  [0,1,1,0,1],
  [0,1,1,0,1],
]
console.log(getNeighbors(0, 1, matrix))

function getNeighbors(row, col, graph) {
  //we need an array to hold all of the node's neighbors that are 1
  const neighborsArr = [];


  // THIS ERROR: graph[row-1][col] -->  //graph[-1] ==> undefined // graph[-1][col] ==> undefined[col]

  // Check top, get neighbor from the top if it's equal to one
  // We need to check the bounds: we want row - 1 to always be greater than or equal to 0, so we have to make sure row > 0.
  if(row > 0  && graph[row-1][col] === 1){ //this will work too: if(graph[row-1] !== undefined &&  graph[row-1][col] === 1)
    neighborsArr.push([row-1, col]) //[0, 1]
  }

  // Check bottom 
  //graph[row-1] exists (does not equal to undefined)
  if(graph[row+1] !== undefined &&  graph[row+1][col] === 1){
    neighborsArr.push([row+1, col])
  }

  // Check left

  // Check right

  // Return neighbors

  // Your code here
  return neighborsArr;
}



function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];