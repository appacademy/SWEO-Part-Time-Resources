function findPeak(matrix) {
  let highest = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[0].length; k++) {
      if (matrix[i][k] > highest) {
        highest = matrix[i][k];
      }
    }
  }

  return highest;
}

function findStarts(matrix) {
  let starts = [];

  // Top Row
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] == 0) {
      starts.push([0, i]);
    }
  }

  // Bottom Row
  for (let i = 0; i < matrix[matrix.length - 1].length; i++) {
    if (matrix[matrix.length - 1][i] == 0) {
      starts.push([matrix.length - 1, i]);
    }
  }

  // Left except first and last
  for (let i = 1; i < matrix.length - 1; i++) {
    if (matrix[i][0] == 0) {
      starts.push([i, 0]);
    }
  }

  // Right except first and last
  for (let i = 1; i < matrix.length - 1; i++) {
    if (matrix[i][matrix[0].length - 1] == 0) {
      starts.push([i, matrix[0].length - 1]);
    }
  }

  return starts;
}

function findNeighbors(node, matrix) {
  const neighbors = [];

  const [row, col] = node;
  // const row = node[0]
  // const col = node[1]

  // top
  if (row > 0) {
    if (Math.abs(matrix[row][col] - matrix[row - 1][col]) <= 1) {
      neighbors.push([row - 1, col]);
    }
  }

  // top right
  if (row > 0 && col < matrix[row].length - 1) {
    if (Math.abs(matrix[row][col] - matrix[row - 1][col + 1]) <= 1) {
      neighbors.push([row - 1, col + 1]);
    }
  }

  // top left
  if (row > 0 && col > 0) {
    if (Math.abs(matrix[row][col] - matrix[row - 1][col - 1]) <= 1) {
      neighbors.push([row - 1, col - 1]);
    }
  }

  // bottom
  if (row < matrix.length - 1) {
    if (Math.abs(matrix[row][col] - matrix[row + 1][col]) <= 1) {
      neighbors.push([row + 1, col]);
    }
  }

  // bottom right
  if (row < matrix.length - 1 && col < matrix[row].length - 1) {
    if (Math.abs(matrix[row][col] - matrix[row + 1][col + 1]) <= 1) {
      neighbors.push([row + 1, col + 1]);
    }
  }

  // bottom left
  if (row < matrix.length - 1 && col > 0) {
    if (Math.abs(matrix[row][col] - matrix[row + 1][col - 1]) <= 1) {
      neighbors.push([row + 1, col - 1]);
    }
  }

  // left
  if (col > 0) {
    if (Math.abs(matrix[row][col] - matrix[row][col - 1]) <= 1) {
      neighbors.push([row, col - 1]);
    }
  }

  // right
  if (col < matrix[row].length - 1) {
    if (Math.abs(matrix[row][col] - matrix[row][col + 1]) <= 1) {
      neighbors.push([row, col + 1]);
    }
  }

  return neighbors;
}

function pathTraversal(node, matrix, visited, peak) {
  const stack = [node];
  visited.add(node.toString());

  while (stack.length) {
    const currentNode = stack.pop();
    const [currentRow, currentCol] = currentNode;

    if (matrix[currentRow][currentCol] === peak) return true;

    const neighbors = findNeighbors(currentNode, matrix);

    for (let newNode of neighbors) {
      const nodeString = newNode.toString();

      if (!visited.has(nodeString)) {
        visited.add(nodeString);
        stack.push(newNode);
      }
    }
  }

  return false;
}

function identifyPath(mountain) {
  // Find the peak
  const peak = findPeak(mountain);
  // Find the start
  const startingValues = findStarts(mountain);

  const visited = new Set();

  // Traverse from the starts and try to get to the top
  for (let i = 0; i < startingValues.length; i++) {
    const currentStart = startingValues[i];
    if (pathTraversal(currentStart, mountain, visited, peak)) {
      return currentStart;
    }
  }

  return false;
}

// Uncomment for local testing

// // Example 0
// const mountain_0 = [
//     [1, 2, 4],
//     [4, 5, 9],
//     [5, 7, 6]
// ];

// console.log(findNeighbors([2,0], mountain_0)) // <- Expect '[ [ 1, 0 ], [ 1, 1 ] ]'

// // Example 1
// const mountain_1 = [
//         [1, 0, 1, 1],
//         [2, 3, 2, 1],
//         [0, 2, 4, 1],
//         [3, 2, 3, 1]
// ];

// test_visited = new Set()
// console.log(pathTraversal([0, 1], mountain_1, test_visited, 4)) // <- Expect 'true
// console.log(identifyPath(mountain_1)) // <- Expect '[ 0, 1 ]'

// // Example 2
// const mountain_2 = [
//         [0, 2, 1, 1],
//         [2, 2, 3, 1],
//         [1, 1, 1, 1],
//         [1, 0, 1, 1]
// ];

// console.log(identifyPath(mountain_2)) // <- Expect '[ 3, 1 ]'

// // Example 3
// const mountain_3 = [
//         [0, 1, 2, 0],
//         [5, 1, 3, 2],
//         [4, 1, 2, 1],
//         [3, 4, 3, 1]
// ];

// console.log(identifyPath(mountain_3)) // <- Expect '[ 0, 0 ]'

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyPath, findNeighbors, pathTraversal];
