const matrix1 = [ 
    [  1,  2,  3,  4 ],
    [  5,  6,  7,  8 ],
    [  9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
];

// EXAMPLE TESTS #1. Tests for findNeighbors function
console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]

function findNeighbors(node, matrix) {
    //node looks like this: [rowNum, colNum]
    const neighborsArr = [];
    const row = node[0];
    const col = node[1];

    // Up i expect for [1,1] --> when we add north neighbor, [0,1] should be added!
    //we need matrix[row-1] first so that we can detect if the row exist or else we might run into an issue where matrix[row-1] = undefined. And if we do undefined[col] --> ERROR!!!
    if(matrix[row-1] !== undefined && typeof matrix[row-1][col] === "number"){
        neighborsArr.push([row-1, col])
    }

    // Down expect for [1,1] --> when we add south neighbor, [2,1] to be added
    if(matrix[row+1] !== undefined && typeof matrix[row+1][col] === "number"){
        neighborsArr.push([row+1, col])
    }


    // Left [1,1] --> then [1,0] should be added
    if(matrix[row] !== undefined && typeof matrix[row][col-1] === "number"){
        neighborsArr.push([row,col-1])
    }

    // Right[1,1] --> then [1,2] should be added
    if(matrix[row] !== undefined && typeof matrix[row][col+1] === "number"){
        neighborsArr.push([row,col+1])
    }

    // Your code here
    return neighborsArr;
}


// EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

[
    [ 0, 0 ], [ 1, 0 ],
    [ 0, 1 ], [ 2, 0 ],
    [ 1, 1 ], [ 0, 2 ],
    [ 3, 0 ], [ 2, 1 ],
    [ 1, 2 ], [ 0, 3 ],
    [ 3, 1 ], [ 2, 2 ],
    [ 1, 3 ], [ 3, 2 ],
    [ 2, 3 ], [ 3, 3 ]
 ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// value is located at start node
// [ [ 2, 2 ] ]

console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes 
// and end values
// [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 3 ] ]

function bfsPath(matrix, startNode, endValue) {
    //startNode = [num, num]
    //0) queue and then add start node to it
    const queue = [startNode];
    //1) we need to compare strings not arrays because sometimes we need to compare two different arrays, therefore we need to hash our array into a string
    const visitedSet = new Set();
    visitedSet.add(`${startNode[0]},${startNode[1]}`)
    //IMPORTANT: since we are adding to a set something very abstract, we should log the set to see the data and confirm it.
    console.log("firstSet", visitedSet); //Set(1) { '2,2' }

    //2) create a variable called path to keep track of all the nodes coords that we hit while traversing to get to the endValue (target)
    const path = [];

    //3) while loop until q is empty
    while(queue.length > 0){
        //4) dequeue the node 
        const currentNode = queue.shift(); //currentNode => [num,num]
        //5) do the thing w/ current node
        // console.log("currentNode", currentNode); //[2,2]
        //5.1) add the currentNode to the path!
        path.push(currentNode);
        // console.log("path:", path);
        //5.2) check to see if the VALUE of currentNode is the `endValue` (target)
        const currentVal = matrix[currentNode[0]][currentNode[1]]
        // console.log("currentVal", currentVal); //[2,2] passed to the matrix should give me 11!!

        //if currentVal === endValue
        if(currentVal === endValue){
            return path;
        }

        //6) find them neighbors arr through the helper func!!!
        const neighborsArr = findNeighbors(currentNode, matrix);
        // console.log("neighborsArr:", neighborsArr);
        //7) go through the neighbors, and 
        for(let i=0; i<neighborsArr.length; i++){
            let currentNeighbor = neighborsArr[i]; //i.e [0,1]
            // then determine if the neighbor exists in the set already, if it doesn't exist, add it to the set and the queue
            //IMPORTANT!!! Becareful, we need to make sure when we are checking the set, our element is converted to the string i.e. "0,2"
            const convertedToStrN = `${currentNeighbor[0]},${currentNeighbor[1]}`
            console.log("string neighbor", convertedToStrN) // i.e. "0,2"
            if(!visitedSet.has(convertedToStrN)){
                visitedSet.add(convertedToStrN);
                queue.push(currentNeighbor);
                // console.log("queue", queue)
            }
        }
    }

    //if we didn't find any match, then we return false by defaul at the end, after traversing every node!!!
    return false;

}


// ***** UNCOMMENT FOR LOCAL TESTING *****

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes 
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value 
// // is not found
// // false




/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];