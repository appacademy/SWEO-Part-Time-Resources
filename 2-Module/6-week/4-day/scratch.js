// This is NOT the default practice from Thursday. This was extra EOD of looking for hills


function findNeighbors(node, matrix) { // only returns neighbors that are greater then 1
	let row = node[0]
	let col = node[1]
	let neigh = []
	// Up
	if (matrix[row - 1]) {
			if (matrix[row - 1, col] > 1) neigh.push([row - 1, col])
	}
	// Down
	if (matrix[row + 1]) {
			if (matrix[row + 1, col] > 1) neigh.push([row + 1, col])
	}
	// Left
	if (matrix[row][col - 1]) {
			if (matrix[row, col - 1] > 1) neigh.push([row, col - 1])
	}
	// Right
	if (matrix[row][col + 1]) {
			if (matrix[row, col + 1] > 1) neigh.push([row, col + 1])
	}
	return neigh
}

function traverseHill(matrix, startNode, visited) {
	let queue = [startNode]
	while (queue.length) {
			let curr = queue.shift();
			let neigh = findNeighbors(curr, matrix)
			for (let n of neigh) {
					if (!visited.has(`${n}`)) {
							visited.add(`${n}`)
							queue.push(n)
					}
			}
	}
	return visited
}

function bfsPath(matrix, startNode) {
	let visited = new Set();
	visited.add(`${startNode}`)
	let numHills = 0

	for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
					if (matrix[i][j] > 1) {
							if (!visited.has(`${[i, j]}`)) {
									visited.add(`${[i, j]}`)
									console.log('v', visited)
									visited = traverseHill(matrix, [i, j], visited)
									console.log('v after', visited)
									numHills++
							}
					}
			}
	}
	return numHills
}


const matrix2 = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5]
];

console.log(bfsPath(matrix2, [0, 0])) // 4
// how many hills are there?

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
