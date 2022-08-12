 // matrix = [
//   [1,1,1,0,0],
//   [0,1,1,0,1],
//   [0,1,1,0,1],
// ]

function getNeighbors(row, col, graph) { 
  let neighbors = [] // create an array to hold locations of neighbors in the matrix

  // Check top
  // Check to make sure there is a row above this one, then check the item in that row above our current element
  // to see if its a 1, and add to neighbors if it is.
  if (row > 0 && graph[row - 1][col] === 1) neighbors.push([row - 1, col])
  // Check bottom
  // Check to make sure there is a row beneath this one, then check the item in that row below our current element
  // to see if its a 1, and add to neighbors if it is.
  if (row < graph.length - 1 && graph[row + 1][col] === 1) neighbors.push([row + 1, col])
  // Check left
  // Check to make sure there is a col to the left, then check the item in that column next to our current element
  // to see if its a 1, and add to neighbors if it is.
  if (col > 0 && graph[row][col - 1] === 1) neighbors.push([row, col - 1])
  // Check right
  // Check to make sure there is a col to the right, then check the item in that column next to our current element
  // to see if its a 1, and add to neighbors if it is.
  if (col < graph[row].length - 1 && graph[row][col + 1] === 1) neighbors.push([row, col + 1])
  // Return neighbors
  return neighbors;
}


function islandSize(row, col, graph) {
  let currentNode = [row, col];
  let currentString = currentNode.toString(); // must be a string to compare
  // Create a visited set to store visited nodes
  // Put the stringified starting node in visited
  const visited = new Set([currentString]);
  // Create a stack, put the starting node in the stack
  const stack = [currentNode];
  // Initialize size to 0
  let size = 0; // how many 1s that are touching in the matrix
  // While the stack is not empty,
  while (stack.length){
    // Pop the first node
    currentNode = stack.pop();
    // DO THE THING (increment size by 1)
    size++;
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    const currentNeighbors = getNeighbors(currentNode[0], currentNode[1], graph);
    for (let neighbor of currentNeighbors){ // for..of works for arrays, for..in works for objects
      if (!visited.has(neighbor.toString())){ 
        visited.add(neighbor.toString());
        stack.push(neighbor);
      }
    }
    // for (let i = 0; i < currentNeighbors.length; i++){
    //   let neighbor = currentNeighbors[i];
    //   if (!visited.has(neighbor.toString())){ 
    //     visited.add(neighbor.toString());
    //     stack.push(neighbor);
    //   }
    // }
  }
  // return size
  return size;
  // Your code here
}

// let arr1 = [1, 1];
// let arr2 = [1, 1];
// let arr3 = [1, 1].toString();
// let arr4 = [1, 1].toString();
// console.log(arr1 === arr2);
// console.log(arr3);
// console.log(arr3 === arr4);

module.exports = [getNeighbors, islandSize];