function getNeighbors(row, col, graph) {

  const neighbors = [];

  if(row > 0 && graph[row - 1][col]) neighbors.push([row - 1, col]);

  if(row < graph.length - 1 && graph[row + 1][col]) neighbors.push([row + 1, col]);

  if(col > 0 && graph[row][col - 1]) neighbors.push([row, col - 1]);

  if(col < graph[0].length - 1 && graph[row][col + 1]) neighbors.push([row, col + 1]);


  return neighbors

  // Check top

  // Check bottom

  // Check left

  // Check right

  // Return neighbors

  // Your code here
}

// 4 * 4 = 16 nodes

// row * col
// n = row * col
// big time o(n) space o()
function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
	const visited = new Set();

  // Put the stringified starting node in visited
	visited.add([row, col].join(''));

  // Create a stack, put the starting node in the stack
	const stack = [[row, col]];

  // Initialize size to 0
	let size = 0;

  // While the stack is not empty,
	while(stack.length){ // o(rows)
		// Pop the first node

		const [currRow, currCol] = stack.pop(); // o(1)

		// DO THE THING (increment size by 1)
		size++;

		// Then push all the UNVISITED neighbors on top of the stack
		// and mark them as visited
		let visitedNodes = getNeighbors(currRow, currCol, graph)
		visitedNodes.forEach((neighbor)=>{  // o(columns)
			if(!visited.has(neighbor.join(''))){
				visited.add(neighbor.join(''))
				stack.push(neighbor)
			}
		})

		// HINT: This is what your helper function `getNeighbors` is for
		// HINT: Remember, you're storing your visited nodes as strings!

	}

	return size
  // Your code here
}

module.exports = [getNeighbors, islandSize];
