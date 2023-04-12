// const matrix =
// 		[[1,2],
// 		[3,4]]
//    c
// r [1,2]
//   [3,4]
// console.log(matrix.length) // row
// console.log(matrix[0].length) // col

// starting point
//    			  row col
// console.log(matrix[0][0])
// console.log(matrix[0][1]) // from starting point -> moves right
// console.log(matrix[1][0]) // from staring we went down
// console.log(matrix[1][1])

// to move right we increment the column by 1
// to move left we decrement the column by 1
// to move down we increment our row by 1
// to move up we decrement our row by 1

const directions = [
	[0,1], // -> right
	[0,-1], // -> left
	[1,0], // -> down
	[-1,0] // -> up
]

// console.log(matrix[-1][0])

const isInBounds = (row, col) => {
	const rowLength = matrix.length // row
	const colLength = matrix[0].length // col
	if((row >= 0 && row < rowLength) && (col >= 0 && col < colLength)){
		return true // if in bounds
	}

	return false // if out bounds
}

const matrix = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
]

const dfsTraversal = (row, col) => {

	const visited = new Set()
	let currentVertex = [row, col]
	visited.add(`${currentVertex[0]},${currentVertex[1]}`)
	console.log(matrix[currentVertex[0]][currentVertex[1]])

	dfs(currentVertex, visited)
}

const dfs = (currentVertex, visited) => {
	for(let i = 0; i < directions.length; i++){
		const [newRow, newCol] = directions[i]
		const newVertex = [currentVertex[0] + newRow, currentVertex[1] + newCol]
		if(!visited.has(`${newVertex[0]},${newVertex[1]}`) && isInBounds(newVertex[0], newVertex[1])){
			console.log(matrix[newVertex[0]][newVertex[1]])
			visited.add(`${newVertex[0]},${newVertex[1]}`)
			dfs(newVertex, visited)
		}
	}
}

dfsTraversal(0,0)

const bfsTraversal = (row, col) => {
	const queue = [[row, col]]
	const visited = new Set()

	while(queue.length){
		let currentVertex = queue.shift() // [0,0]
		// let [row, col] = queue.shift()
		console.log(matrix[currentVertex[0]][currentVertex[1]])
		// console.log(matrix[row][col])
		visited.add(`${currentVertex[0]},${currentVertex[1]}`)

		for(let i = 0; i < directions.length; i++){
			// const currentDirection = directions[i]
			const [newRow, newCol] = directions[i]
			const newVertex = [currentVertex[0] + newRow, currentVertex[1] + newCol]

			if(!visited.has(`${newVertex[0]},${newVertex[1]}`) && isInBounds(newVertex[0], newVertex[1])){
				visited.add(`${newVertex[0]},${newVertex[1]}`)
				queue.push(newVertex)
			}
		}
	}
}
