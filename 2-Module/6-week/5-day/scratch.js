const numbers1 = [3, 1, 4, 1, 5];
const numbers2 = [3, 1, 4, 1, 5];
const sorted1 = numbers1.sort((a, b) => a - b); //least to greatest
const sorted2 = numbers2.sort((a, b) => b - a); //greatest to least


console.log(sorted1)
console.log(sorted2)
// console.log(numbers1[undefined][1])

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
            starts.push([0, i])
        }
    }

    // Bottom Row
    for (let i = 0; i < matrix[matrix.length-1].length; i++) {
        if (matrix[matrix.length-1][i] == 0) {
            starts.push([matrix.length-1, i])
        }
    }

    // Left except first and last
    for (let i = 1; i < matrix.length-1; i++) {
        if (matrix[i][0] == 0) {
            starts.push([i, 0])
        }
    }

    // Right except first and last
    for (let i = 1; i < matrix.length - 1; i++) {
        if (matrix[i][matrix[0].length - 1] == 0) {
            starts.push([i, matrix[0].length-1])
        }
    }

    return starts;
}

function findNeighbors(node, matrix) {
    // Don't forget to include diagonal neighbors!!!

    // Your code here
    let neighbors = []

    const [row, col] = node

    //top
    if(row > 0){
        if(Math.abs(matrix[row][col] - matrix[row - 1][col]) <= 1){
            neighbors.push([row - 1, col])
        }
    }
    //top right
    if(row > 0 && col < matrix[row].length - 1){
        if(Math.abs(matrix[row][col] - matrix[row - 1][col + 1]) <= 1){
            neighbors.push([row - 1, col + 1])
        }
    }
    //top left
    if(row > 0 && col > 0){
        if(Math.abs(matrix[row][col] - matrix[row - 1][col - 1]) <= 1){
            neighbors.push([row - 1, col - 1])
        }
    }
    //bottom
    if(row < matrix.length - 1){
        if(Math.abs(matrix[row][col] - matrix[row + 1][col]) <= 1){
            neighbors.push([row + 1, col])
        }
    }
    //bottom right
    if(row < matrix.length - 1 && col < matrix[row].length - 1){
        if(Math.abs(matrix[row][col] - matrix[row + 1][col + 1]) <= 1){
            neighbors.push([row + 1, col + 1])
        }
    }
    //bottom left
    if(row < matrix.length - 1 && col > 0){
        if(Math.abs(matrix[row][col] - matrix[row + 1][col - 1]) <= 1){
            neighbors.push([row + 1, col - 1])
        }
    }
    //left
    if(col > 0){
        if(Math.abs(matrix[row][col] - matrix[row][col - 1]) <= 1){
            neighbors.push([row, col - 1])
        }
    }
    //right
    if(col < matrix[row].length - 1){
        if(Math.abs(matrix[row][col] - matrix[row][col + 1]) <= 1){
            neighbors.push([row, col + 1])
        }
    }

    return neighbors

    // let nodeVal = matrix[node[0]][node[1]];
    // let neighbors = [];
    // const [row1, col1] = node;
    // for(let row = -1; row <= 1; row++){
    //     for(let col = -1; col <= 1; col++){
    //         let checkCoord = [row1 + row, col1 + col];
    //         if(matrix[checkCoord[0]]) {
    //             let curr = matrix[checkCoord[0]][checkCoord[1]];
    //             if(!(node.toString() === checkCoord.toString()) && (Math.abs(curr - nodeVal)  <= 1 )) neighbors.push(checkCoord);
    //         }
    //     }
    // }
    // return neighbors;


}

function pathTraversal(node, matrix, visited, peak) {
    // Your code here
    let stack = [node]
    visited.add(node.toString())

    while(stack.length){
        let currentNode = stack.pop()

        const [currRow, currCol] = currentNode

        if(matrix[currRow][currCol] === peak) return true;

        const neighbors = findNeighbors(currentNode, matrix)
        // console.log("NEIGHBORS", neighbors)
        for(let neighbor of neighbors){
            let neighborString = neighbor.toString()
            // console.log("NEIGHBOR", neighborString)
            if(!visited.has(neighborString)){
                visited.add(neighborString)
                stack.push(neighbor)
            }
        }
    }
    return false

}

function identifyPath(mountain) {
    // Find the peak
    // console.log(mountain)
    let peak = findPeak(mountain)
    // console.log("PEAK", peak)
    // Find the start
    let startingValues = findStarts(mountain)
    // console.log("STARTS", startingValues)
    let visited = new Set()
    // Traverse from the starts and try to get to the top
    for (let i = 0; i < startingValues.length; i++){
        let start = startingValues[i]
        console.log("START", start)
        if(pathTraversal(start, mountain, visited, peak)){
            return start
        }
    }
    return false
    // Your code here

}
