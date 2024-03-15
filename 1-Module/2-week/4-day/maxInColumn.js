
// // Helper functin to find the largest value in an array
// function largestValInCol(array) {
// 	let largestVal = array[0]

//     for(let i = 1; i < array.length; i++) {
//       	let currentNumber = array[i]
//         if(largestVal < currentNumber) {
//           	largestVal = currentNumber
//         }
//     }

//   	return largestVal
// }


// // --------------------------------------------------------------------------------------
// // Solution 1: Nested for loop
// function maxColumn(matrix) {
//   	let maxValForEachCol = []

//     for(let col = 0; col < matrix.length; col++) {
//       	let tempCol = []

// 		for(let row = 0; row < matrix[col].length; row++) {
//           	tempCol.push(matrix[row][col])
//         }

//       	maxValForEachCol.push(largestValInCol(tempCol))
//     }

//   	return maxValForEachCol
// }

// // ----------------------------------------------------------------------------------------
// // Solution 2: Organize the matrix first by transposing the columns and rows
// function maxColumn(matrix) {
//   	let maxVals = [] // answer array, returning this

//   	let columnOrganizer = []

//     for(let i = 0; i < matrix[0].length; i++) {
//     	columnOrganizer.push([])
//     }

// 	for(let i = 0; i < matrix.length; i++) {
//         for(let j = 0; j < matrix[i].length; j++) {
//           	let currentEl = matrix[i][j]
// 			columnOrganizer[j].push(currentEl)
//         }
// 	}

//   	for(let i = 0; i < columnOrganizer.length; i++) {
//       	let currentCol = columnOrganizer[i]

//       	maxVals.push(largestValInCol(currentCol))
//     }

//   	return maxVals
// }


matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(maxColumn(matrix)); // [12, 19, 21]

// // Algorithm visualized:
// // How we'll move from one element in a column to another
// matrix[0][0] => 5
// matrix[1][0] => 9
// matrix[2][0] => 12

// matrix[0][1] => 9
// matrix[1][1] => 19
// matrix[2][1] => 14

// matrix[0][2] => 21
// matrix[1][2] => 6
// matrix[2][2] => 15
