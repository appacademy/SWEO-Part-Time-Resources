const matrix = [
      [1, 1, 1, 0, 0], // 0
      [0, 1, 1, 0, 1], // 1        [0,2]       ROW AND COLUMN 2 2
      [0, 1, 1, 0, 1], // 2
    // 0  1  2  3  4
  ];


















  
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
  
  
  const adjList = {};
  
  matrix.forEach((el, row) => {
    el.forEach((value, col) => {
      value ? (adjList[`${row}, ${col}`] = getNeighbors(row, col, matrix)) : null;
    });
  });
  
  console.log(adjList);
  
  /*//!
  Don't worry about understanding the code in this file. If you run this file, 
  you'll see an adjacency list print to the console for every 1 in the matrix.
  This is to show you the relationship between an adjacency list and a matrix.
  Usually, one is better suited for a problem than the other.
  *///!