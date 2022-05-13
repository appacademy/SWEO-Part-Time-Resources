function getNeighbors(row, col, graph) {

	const neighbors = [];

	// Check top
	if (graph[row - 1] && graph[row - 1][col]) neighbors.push([row - 1, col]);
	// Check bottom
	if (graph[row + 1] && graph[row + 1][col]) neighbors.push([row + 1, col]);
	// Check left
	if (graph[row][col - 1]) neighbors.push([row, col - 1]);
	// Check right
	if (graph[row][col + 1]) neighbors.push([row, col + 1]);

	// Return neighbors
	return neighbors;
	// Your code here
  }

  // big time o(n) space o(n)
  // n = rows * columns
  function islandSize(row, col, graph) {

	// Create a visited set to store visited nodes
	// Put the stringified starting node in visited
	const visited = new Set([`${row}, ${col}`]); // space o(n)
	// Create a stack, put the starting node in the stack
	const stack = [[row, col]]; // space o(n)

	// Initialize size to 0
	let size = 0; // space o(1)

	// While the stack is not empty,
	while(stack.length){ // time o(r) r = rows

	  // Pop the first node
	  // let currNode = stack.pop()
	  const [currRow, currCol] = stack.pop(); // o(1)

	  // DO THE THING (increment size by 1)
	  size++

	  // Then push all the UNVISITED neighbors on top of the stack
	  // and mark them as visited
	  for (const [newRow, newCol] of getNeighbors(currRow, currCol, graph)) { // time o(c) c = columns
		  if (!visited.has(`${newRow}, ${newCol}`)) {
			visited.add(`${newRow}, ${newCol}`);
			stack.push([newRow, newCol]);
		  }
	  }

	  // HINT: This is what your helper function `getNeighbors` is for
	  // HINT: Remember, you're storing your visited nodes as strings!
	}

	return size
	// Your code here
  }

  module.exports = [getNeighbors, islandSize];
