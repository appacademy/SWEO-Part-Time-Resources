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
    // an array of valid neighbors
    let neighbors = []
   // dont forget diagonals 
   // loop through the entire matrix
   matrix.forEach((el, i) => {
       el.forEach((ele, j) => {
        let [x ,y] = node
        let nodeVal = matrix[node[0]][node[1]]
        // check each index to see if it is a valid neighbor 
        if(Math.abs(x - i) < 2 && Math.abs(y - j) < 2){
        // once I find a valid neighbor i will check that is is 1 different{
            if(Math.abs(ele - nodeVal) < 2){
                // check if the index is not my node
                if(!(x === i && j===y)){
                    // only then is an index a valid neighbor
                    neighbors.push([i, j])
                }
            }
        }
       })
   })
//    console.log(neighbors)
   return neighbors
}

function pathTraversal(node, matrix, visited, peak) {
    // // This is me accidentally creating paths
    // // create my queue
    // let queue = [[node]]
    // // while my queue is not empty
    // while(queue.length) {
    //     // classic path traversal 
    //     let path = queue.shift()
    //     // the current node will be the most recent thing added to the path
    //     let currentCord = path[path.length -1]
    //     // check if the value at the current cord is my peak
    //     if(matrix[currentCord[0]][currentCord[1]] === peak) return true
    //     // getting all of the neighbors my current node is able to traverse to
    //     findNeighbors(currentCord, matrix).forEach(el => {
    //         // check if we have visited a node
    //         // we need to pass a string to visited because [1] === [1] = false
    //         if(!visited.has(el.join(''))){
    //             // if it doesn't have it add it
    //             visited.add(el.join(''))
    //             // create a copy of my path, because
    //             // I need to create unique paths for every neighbor
    //             let pathCopy = [...path]
    //             //push the current ele(which is a cord) into the path
    //             pathCopy.push(el)
    //             // push the copy path into the queue
    //             queue.push(pathCopy)
    //         }
    //     })
    // }
    // return false
    // class BFS
    let queue = [node]
    while(queue.length){
        let node = queue.shift()
        // actual value of the current element of the matrix
        let currentVal = matrix[node[0]][node[1]]
        if(currentVal === peak) return true
        findNeighbors(node, matrix).forEach(el => {
            if(!visited.has(el.join(''))){
                visited.add(el.join(''))
                queue.push(el)
            }
        })
    }
    return false
}

function identifyPath(mountain) {
    // Find the peak
    let peak = findPeak(mountain)
    // Find the start
    let starts = findStarts(mountain)
    // Traverse from the starts and try to get to the top
    let validStart;
    starts.forEach(start => {
        if(pathTraversal(start, mountain, new Set(), peak)){
            validStart = start
        }
    })
    // Your code here
    return validStart
}

// Uncomment for local testing

// // Example 0
// const mountain_0 = [
//     [1, 2, 4],
//     [4, 5, 9],
//     [5, 7, 6]
// ];

// console.log(findNeighbors([2,0], mountain_0)) // <- Expect '[ [ 1, 0 ], [ 1, 1 ] ]'

// // Example 1
// const mountain_1 = [
//         [1, 0, 1, 1],
//         [2, 3, 2, 1],
//         [0, 2, 4, 1],
//         [3, 2, 3, 1]
// ];

// test_visited = new Set()
// console.log(pathTraversal([0, 1], mountain_1, test_visited, 4)) // <- Expect 'true
// console.log(identifyPath(mountain_1)) // <- Expect '[ 0, 1 ]'

// // Example 2
// const mountain_2 = [
//         [0, 2, 1, 1],
//         [2, 2, 3, 1],
//         [1, 1, 1, 1],
//         [1, 0, 1, 1]
// ];

// console.log(identifyPath(mountain_2)) // <- Expect '[ 3, 1 ]'

// // Example 3
// const mountain_3 = [
//         [0, 1, 2, 0],
//         [5, 1, 3, 2],
//         [4, 1, 2, 1],
//         [3, 4, 3, 1]
// ];

// console.log(identifyPath(mountain_3)) // <- Expect '[ 0, 0 ]'



/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyPath, findNeighbors, pathTraversal];