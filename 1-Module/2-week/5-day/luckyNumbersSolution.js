function findMinimum(array) {
	let lowest = array[0]
    for(let i = 0; i < array.length; i++) {
    	if(lowest > array[i]) {
        	lowest = array[i]
        }
    }
  	return lowest
}


function findMaximum(array) {
  	let highest = array[0]

    for(let i = 0; i < array.length; i++) {
    	if(highest < array[i]) {
        	highest = array[i]
        }
    }
  	return highest
}





function luckyNumbers(matrix) {
  // your code here...
  // we need the row (matrix[0], matrix[1])
  // we need the col
  let luckyNumbers = []

  let lowestRows = []
  let highestCols = []

  // for loop to find lowest value in each row
  for(let i = 0; i < matrix.length; i++) {
  		let subArray = matrix[i]
        lowestRows.push(findMinimum(subArray))
  }

  // nested for loop to find highest value in each col
  for(let i = 0; i < matrix[0].length; i++) {
    let tempCol = []

    for(let j = 0; j < matrix.length; j++) {
      tempCol.push(matrix[j][i])
    }

    highestCols.push(findMaximum(tempCol))
  }


  for(let i = 0; i < lowestRows.length; i++) {
    for(let j = 0; j < highestCols.length; j++) {
    	let lowestVal = lowestRows[i]
        let highestVal = highestCols[j]

      	if(highestVal === lowestVal) {
          luckyNumbers.push(lowestVal)
        }
    }
  }


  return luckyNumbers
}
