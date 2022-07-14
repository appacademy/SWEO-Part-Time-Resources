const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function aShortestPath(start, end) {
    //create a set to keep track of visited nodes
    const visitedSet = new Set([start])
    //create a queue 
    const queue = [];
    //add an array of start to the queue (queue should now have a nested array)
    queue.push([start]);

    //while queue is not empty
    while (queue.length > 0) {
        //dequeue the first array from the queue and store it in a variable
        const currentPath = queue.shift();
        //get the last ele in currentPath array
        const lastEl = currentPath[currentPath.length - 1];

        //checck if the lastEl from the currentPath is equal to the target, return current path
        if (lastEl === end) {
            return currentPath;
        }

        // get the neighbors array of lastEl from the adjList obj
        const neighborArr = adjList[lastEl];
        //for each neighbor element
        for (let i = 0; i < neighborArr.length; i++) {
            const copyPathArr = currentPath.slice();
            let neighborEl = neighborArr[i];
            //get the neighbors of lastEl if they are not in visitedSet yet and add it to the copyPathArr as well as the set.
            if (!visitedSet.has(neighborEl)) {
                visitedSet.add(neighborEl);
                copyPathArr.push(neighborEl);
                 // push the new coppied path with the newly added el into the queue
                queue.push(copyPathArr);
            }
        }
    }
    return false;
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false