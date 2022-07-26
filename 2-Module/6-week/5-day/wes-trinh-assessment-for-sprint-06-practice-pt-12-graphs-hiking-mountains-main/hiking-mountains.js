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
    for (let i = 0; i < matrix[matrix.length - 1].length; i++) {
        if (matrix[matrix.length - 1][i] == 0) {
            starts.push([matrix.length - 1, i])
        }
    }

    // Left except first and last
    for (let i = 1; i < matrix.length - 1; i++) {
        if (matrix[i][0] == 0) {
            starts.push([i, 0])
        }
    }

    // Right except first and last
    for (let i = 1; i < matrix.length - 1; i++) {
        if (matrix[i][matrix[0].length - 1] == 0) {
            starts.push([i, matrix[0].length - 1])
        }
    }

    return starts;
}


//single goal is given a node coords, find the neighbors directly n/s/w/e, nw/ne/sw/se under the restriction that the neighbor has to be within -1, 0, 1 of the current node's VALUE. (remember we still have the base case of the neighbors have to be inbound to be adde!).

//withinOne should take in a currentNode and the neighborNode and check if neighbotNode is within -1, 0, or 1 of the currentNode


// Example 0
const mountain_0 = [
    [1, 2, 4],
    [4, 5, 9],
    [5, 7, 6]
];


console.log(findNeighbors([2, 0], mountain_0)) // <- Expect '[ [ 1, 0 ], [ 1, 1 ] ]'

function withinOne(currentNodeVal, neighborNodeVal) {
    if (neighborNodeVal - 1 === currentNodeVal || neighborNodeVal + 1 === currentNodeVal || currentNodeVal === neighborNodeVal) {
        return true;
    }
    return false;
}

// console.log(withinOne(mountain_0[2][0], mountain_0[1][0])) //true
// console.log(withinOne(mountain_0[2][0], undefined)) //false
// console.log(withinOne(mountain_0[2][0], mountain_0[2][1])) //false because 7 is not +1 or -1 of 5.


function findNeighbors(node, matrix) {
    //fetch all the neighbors that meet requirements
    const neighborsArr = [];

    //prep work to get rows and cols from node and maybe value
    const row = node[0];
    const col = node[1];
    const currentNodeVal = matrix[row][col]; // for [2,0] the val of node should be 5!
    // console.log("test", currentNodeVal);

    //north [2,0] should be [1,0]
    if (matrix[row - 1] !== undefined && withinOne(currentNodeVal, matrix[row - 1][col])) {
        neighborsArr.push([row - 1, col])
    }

    //south of [2,0] should not add anything
    if (matrix[row + 1] !== undefined && withinOne(currentNodeVal, matrix[row + 1][col])) {
        neighborsArr.push([row + 1, col])
    }

    //west of [2,0] should add nothing since it's out of bounds
    //matrix[row] is the step to make sure that our sub array exist so that we can index into the subarray to get the value (if matrix[row] === undefined --> undefined[col]? this will give us an ERROR~!! )
    if (matrix[row] !== undefined && withinOne(currentNodeVal, matrix[row][col - 1])) {
        neighborsArr.push([row, col - 1])
    }

    //east of [2,0] should add nothing since 7 is not within +1 or -1 of 5.
    if (matrix[row] !== undefined && withinOne(currentNodeVal, matrix[row][col + 1])) {
        neighborsArr.push([row, col + 1])
    }


    //-----------------diagonals---------------------
    //north west SHOULDNT ADD ANYTHING FOR [2,0]
    if (matrix[row - 1] !== undefined && withinOne(currentNodeVal, matrix[row - 1][col - 1])) {
        neighborsArr.push([row - 1, col - 1]);
    }

    //north east, for [2,0] I should expect [1,1] to be added to neighbors as 5 === 5
    if (matrix[row - 1] !== undefined && withinOne(currentNodeVal, matrix[row - 1][col + 1])) {
        neighborsArr.push([row - 1, col + 1]);
    }
    //southwest should not add anything for matrix[2,0]
    if (matrix[row + 1] !== undefined && withinOne(currentNodeVal, matrix[row + 1][col - 1])) {
        neighborsArr.push([row + 1, col - 1]);
    }

    //southeast should not add anything for matrix[2,0]
    if (matrix[row + 1] !== undefined && withinOne(currentNodeVal, matrix[row + 1][col + 1])) {
        neighborsArr.push([row + 1, col + 1]);
    }
    return neighborsArr;
}

// Example 1
const mountain_1 = [
        [1, 0, 1, 1],
        [2, 3, 2, 1],
        [0, 2, 4, 1],
        [3, 2, 3, 1]
];

test_visited = new Set()
console.log(pathTraversal([0, 1], mountain_1, test_visited, 4)) // <- Expect 'true
// console.log(identifyPath(mountain_1)) // <- Expect '[ 0, 1 ]'

function pathTraversal(node, matrix, visited, peak) {
    //1) need stack with initial node
    const stack = [node];
    //2) need set to keep track of visited, initial node added
    visited.add(`${node[0]},${node[1]}`)
    //IMPORTANT: log and check to see if we added visited correct: set should look like {"0,1"}
    // console.log(visited)

    //3) while loop until stack is empty
    while(stack.length){
        //4) pop from stack
        const currentNode = stack.pop();
        //5) do the thing!! --> check if our peak === our currentNOde's VALUE
        // console.log("currentNode -->", currentNode)
        let currRow =currentNode[0];
        let currCol = currentNode[1]
        if(peak === matrix[currRow][currCol]){
            return true;
        }

        //6) we need our neighbors of the currentNode using findNeighbors
        const neighborsArr = findNeighbors(currentNode, matrix)
        // console.log("neighborsArr -->", neighborsArr);
        //7) iterate through our neighbors to get each neighbor 
        for(let i=0; i< neighborsArr.length; i++){
            let currentNeighbor = neighborsArr[i];
            //if our currentNeighbor exists in the visited set or not (infected) if not visisted yet, add to stack and to our set
            //when checking in the set, convert our node coordinates [num,num] --> "num,num"
            const convertedNode = `${currentNeighbor[0]},${currentNeighbor[1]}`
            // console.log("convertedNode-->", convertedNode); // i.e "0,2"
            if(!visited.has(convertedNode)){
                visited.add(convertedNode);
                //doubkle check set after add it in to make sure its good
                // console.log("after adding in node-->", visited) //{"num,num"...}
                stack.push([currentNeighbor[0], currentNeighbor[1]]) //[[num,num], ...]
                // console.log("after adding to stack-->", stack)
                

            }
        }
    }

    //default return false if notthing was found just in case
    return false;

}

// Example 3
const mountain_3 = [
        [0, 1, 2, 0],
        [5, 1, 3, 2],
        [4, 1, 2, 1],
        [3, 4, 3, 1]
];

console.log("mountain_3", identifyPath(mountain_3)) // <- Expect '[ 0, 0 ]'

// Example 2
const mountain_2 = [
        [0, 2, 1, 1],
        [2, 2, 3, 1],
        [1, 1, 1, 1],
        [1, 0, 1, 1]
];

console.log("mountain_3", identifyPath(mountain_2)) // <- Expect '[ 3, 1 ]'

function identifyPath(mountain) {
    // Find the peak
    const highestPeak = findPeak(mountain)
    // Find the start
    const starts = findStarts(mountain);

    // Traverse from the starts and try to get to the top
    //traverse through each starting node, for each starting node determine if it is the `path`, then return true!!!
    for(let i=0; i<starts.length; i++){
        const currentStart = starts[i];
        //call our traversal on this currentStart node
        //make sure we create visited to keep track of visited while traversing currentStart
        const visisted = new Set();
        const isCorrectPath = pathTraversal(currentStart, mountain, visisted, highestPeak);
        // console.log("path", isCorrectPath)
        if(isCorrectPath === true){
            return currentStart;
        }
    }
    //else default to returning false if we didn't find anything
    return false
}

// Uncomment for local testing

// // Example 0
// const mountain_0 = [
//     [1, 2, 4],
//     [4, 5, 9],
//     [5, 7, 6]
// ];

// console.log(findNeighbors([2,0], mountain_0)) // <- Expect '[ [ 1, 0 ], [ 1, 1 ] ]'





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