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

const isWithin1 = (current, possible, matrix) => {
    let currentEleRow = current[0]; // grab our current elements row
    let currentEleCol = current[1]; // grab our current elements col
    let possibleNeighborRow = possible[0]; // grab our possible neighbors row
    let possibleNeighborCol = possible[1]; // grab our possible neighbors col
    // subtract our possible neighbors value from our current value and get the absolulte value.
    // if it is 0 or 1, we know our neighbor's value is within 1 of our current, and it is a valid neighbor.
    if (Math.abs(matrix[currentEleRow][currentEleCol] - matrix[possibleNeighborRow][possibleNeighborCol]) <= 1) return true;
    // otherwise return false;
    return false;
}

// const elevation_data = [
//     [1, 2, 4],
//     [4, 5, 9],
//     [5, 7, 6]
//   ];

function findNeighbors(node, matrix) {
    // remember that our node, [1, 1] for example, is holding the [row, col] for our current element. HOWEVER if we want
    // to key into a matrix, we have to use 2 indeces. so it would be matrix[row][col] to grab the element in our 
    // location. that's why we say matrix[node[0]][node[1]] === matrix[1][1];
    
    // the following variables before the conditionals are not needed, but it makes our code more readable
    // if this confuses you then take the value of the variable and put it in the conditionals instead.
    const neighbors = []; 
    const row = node[0];
    const col = node[1];

    const validTop = row > 0; // check for a top row above our element
    const validBottom = row < matrix.length - 1; // check for a bottom row below our element
    const validLeft = col > 0; // check for a left column before our element
    const validRight = col < matrix[row].length - 1; // check for a right after our element

    const topRow = row - 1; // the row above our current row
    const leftCol = col - 1; // the col to the left of our current row
    const bottomRow = row + 1; // the row beneath our current row
    const rightCol = col + 1; // the col to the right of our current row

    if (validTop){ // do all of the tops (left center right)
        if (isWithin1(node, [topRow, col], matrix)) neighbors.push([topRow, col]); // if the element in the row above ours, in the same column is a valid neighbor, add it.
        if (validLeft && isWithin1(node, [topRow, leftCol], matrix)) neighbors.push([topRow, leftCol]); // if the element in the row above ours, in the column to the left (top left diagonal) is a valid neighbor, add it.
        if (validRight && isWithin1(node, [topRow, rightCol], matrix)) neighbors.push([topRow, rightCol]) // if the element in the row above ours, in the column to the right (top right diagonal) is a valid neighbor, add it.
    }
    if (validBottom){ // do all of the bottoms (left center right)
        if (isWithin1(node, [bottomRow, col], matrix)) neighbors.push([bottomRow, col]) // if the element in the row beneath ours, in the same column is a valid neighbor, add it.
        if (validLeft && isWithin1(node, [bottomRow, leftCol], matrix)) neighbors.push([bottomRow, leftCol]) // if the element in the row beneath ours, in the column to the left (bottom left diagonal) is a valid neighbor, add it.
        if (validRight && isWithin1(node, [bottomRow, rightCol], matrix)) neighbors.push([bottomRow, rightCol]) // if the element in the row beneath ours, in the column to the right (bottom right diagonal) is a valid neighbor, add it.
    }
    // check left and right
    if (validLeft && isWithin1(node, [row, leftCol], matrix)) neighbors.push([row, leftCol]) // if the element in the same row, in the column on the left is a valid neighbor, add it.
    if (validRight && isWithin1(node, [row, rightCol], matrix)) neighbors.push([row, rightCol]) // if the element in the same row, in the column on the right is a valid neighbor, add it.

    return neighbors;
}

function pathTraversal(node, matrix, visited, peak) {
    // this can be done without the path, just using the regular elements, I did it using a path

    const stack = [[node]]; // add our path to the stack
    visited.add(node.toString()); // add the stringified version of our node to our set

    while (stack.length){
        let currentPath = stack.pop();
        let lastLocation = currentPath[currentPath.length - 1]; // get the last location from the path (list of locations)

        if (matrix[lastLocation[0]][lastLocation[1]] === peak) return true; // if we find our peak return true;

        const neighbors = findNeighbors(lastLocation, matrix);

        for (let n of neighbors){
            if (!visited.has(n.toString())){
                visited.add(n.toString());
                stack.push(currentPath.concat([n])); // pushing a new array with our location into a new path array
            }
        }
    }
    return false;
}

function identifyPath(mountain) {
    // Find the peak
    const peak = findPeak(mountain);
    // Find the start
    const starts = findStarts(mountain);

    if (starts.length === 1) return starts[0];

    for (let s of starts){
        if (pathTraversal(s, mountain, new Set(), peak)) return s; // if this start will get us to the peak, return it.
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

// console.log(findNeighbors([2,0], mountain_0)) // <- console.log '[ [ 1, 0 ], [ 1, 1 ] ]'

// // Example 1
// const mountain_1 = [
//         [1, 0, 1, 1],
//         [2, 3, 2, 1],
//         [0, 2, 4, 1],
//         [3, 2, 3, 1]
// ];

// test_visited = new Set()
// console.log(pathTraversal([0, 1], mountain_1, test_visited, 4)) // <- console.log 'true
// console.log(identifyPath(mountain_1)) // <- console.log '[ 0, 1 ]'

// // Example 2
// const mountain_2 = [
//         [0, 2, 1, 1],
//         [2, 2, 3, 1],
//         [1, 1, 1, 1],
//         [1, 0, 1, 1]
// ];

// console.log(identifyPath(mountain_2)) // <- console.log '[ 3, 1 ]'

// // Example 3
// const mountain_3 = [
//         [0, 1, 2, 0],
//         [5, 1, 3, 2],
//         [4, 1, 2, 1],
//         [3, 4, 3, 1]
// ];

// console.log(identifyPath(mountain_3)) // <- console.log '[ 0, 0 ]'



/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyPath, findNeighbors, pathTraversal];