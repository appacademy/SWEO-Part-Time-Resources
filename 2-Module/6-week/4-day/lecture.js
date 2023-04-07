const matrix = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
]
//    c
// r  1  2
//    3  4
				// r  c
// console.log(matrix[0][0]) // starting point
// console.log(matrix[0][1])
// console.log(matrix[1][0])

const directions = [
 //  r  c
	[0, 1], // move right
	[0, -1], // move left
	[1, 0], // move down
	[-1, 0], // move up
]

function isInBounds(currRow, currCol){
	const rowLength = matrix[0].length // 2
	const colLength = matrix.length
	// 0 < 2 and 0 >- 0
	// -1
	// currRow 2
	// check rows
	// console.log(currRow, 'current row', currCol, 'current column')
	if(currRow < colLength && currRow >= 0 && currCol < rowLength && currCol >= 0){
		return true
	}

	return false
}

// if we wanna move to the right of our matrix we increment the column by 1
// if we wanna move to the left of our matrix we decrement the column by 1
// if we wanna move down of our matrix we increment the row by 1
// if we wanna move up of our matrix we decrement the row by 1

// matrix.forEach(row => row.forEach(col => console.log(col)))


const bfsTraversal = (row, col) => {
	const queue = [[row,col]] // 0, 0
	// const queue = [[0,0]]
	const visited = new Set()

	visited.add(`${row},${col}`)

	while(queue.length){
		const position = queue.shift()
		console.log('vertex ',matrix[position[0]][position[1]])
		for(let i = 0; i < directions.length; i++){
			const currentDirection = directions[i]

			const newPosition = [position[0] + currentDirection[0], position[1] + currentDirection[1]]

			if(!visited.has(`${newPosition[0]},${newPosition[1]}`)){
				if(isInBounds(newPosition[0],newPosition[1])){
					visited.add(`${newPosition[0]},${newPosition[1]}`)
					queue.push(newPosition)
				}
			}

		}
	}
}

bfsTraversal(0,0)
