function getNeighbors(row, col, matrix) {
  const neighbors = [];

  // Check top
  if (row > 0) {
    if (matrix[row - 1][col] === 1) {
      neighbors.push([row - 1, col]);
    }
  }

  // Check top right
  if (row > 0 && col < matrix[row].length - 1) {
    if (matrix[row - 1][col + 1] === 1) {
      neighbors.push([row - 1, col + 1]);
    }
  }

  // Check right
  if (col < matrix[row].length - 1) {
    if (matrix[row][col + 1] === 1) {
      neighbors.push([row, col + 1]);
    }
  }

  // Check bottom right
  if (row < matrix.length - 1 && col < matrix[row].length - 1) {
    if (matrix[row + 1][col + 1] === 1) {
      neighbors.push([row + 1, col + 1]);
    }
  }

  // Check bottom
  if (row < matrix.length - 1) {
    if (matrix[row + 1][col] === 1) {
      neighbors.push([row + 1, col]);
    }
  }

  // Check bottom left
  if (row < matrix.length - 1 && col > 0) {
    if (matrix[row + 1][col - 1] === 1) {
      neighbors.push([row + 1, col - 1]);
    }
  }

  // Check left
  if (col > 0) {
    if (matrix[row][col - 1] === 1) {
      neighbors.push([row, col - 1]);
    }
  }

  // Check top left
  if (row > 0 && col > 0) {
    if (matrix[row - 1][col - 1] === 1) {
      neighbors.push([row - 1, col - 1]);
    }
  }

  return neighbors;
}

function countIslands(matrix) {
  // Create a visited set to store visited nodes
  const visited = new Set();

  // Initialize count to 0
  let count = 0;

  // Iterate through all indices in matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const startString = [row, col].toString();

      // If an index contains a 1 and has not been visited,
      if (matrix[row][col] === 1 && !visited.has(startString)) {
        // increment island count and start traversing neighbors
        count++;

        // Initialize a stack with current index
        const stack = [[row, col]];

        // Add stringified version of current index to the visited set
        visited.add(startString);

        // While stack contains elements
        while (stack.length) {
          // Pop element from stack
          const currentNode = stack.pop();
          // console.log(currentNode) // [2, 1] example
          // const [currentRow, currentCol] = currentNode
          const currentRow = currentNode[0];
          const currentCol = currentNode[1];

					//! Method 1
          // // Get valid neighbors of current element
          // const neighbors = getNeighbors(currentRow, currentCol, matrix);

          // // Iterate over neighbors
          // for (let newNeighbor of neighbors) {
          //   const neighborString = newNeighbor.toString();

          //   // If neighbor has not been visited
          //   if (!visited.has(neighborString)) {
          //     // Add neighbor to stack
          //     stack.push(newNeighbor);
          //     // Mark neighbor as visited
          //     visited.add(neighborString);
          //   }
          // }

					//! Method 2
          // Get valid neighbors of current element
          getNeighbors(currentRow, currentCol, matrix).forEach(
            (newNeighbor) => {
              // Iterate over neighbors
              const neighborString = newNeighbor.toString();

              // If neighbor has not been visited
              if (!visited.has(neighborString)) {
                // Add neighbor to stack
                stack.push(newNeighbor);
                // Mark neighbor as visited
                visited.add(neighborString);
              }
            }
          );
        }
      }
    }
  }

  return count;
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
