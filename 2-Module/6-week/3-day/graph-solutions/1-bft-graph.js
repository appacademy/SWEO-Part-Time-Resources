const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function printBreadthFirst(start) {
    //create a queue and set then onboard the first starting node/vertext in there
    const queue = [start];
    const visitedSet = new Set([start]);

    //while the queue is not empty
    while (queue.length > 0) {
        //dequeue the front of q and store it in a variable
        let currentNode = queue.shift();
        //do whatever we need to with the currentNode
        console.log(currentNode);

        //access the adjList (w/ the currentNode as the key) to get neighbors array. i.e. for currentNode = 1, neighborsArr = [2,5]
        const neighborsArr = adjList[currentNode];

        //for each neighbor node in neighbors array, 
        for (let i = 0; i < neighborsArr.length; i++) {
            const neighbor = neighborsArr[i];
            //if it's not in visitedSet (it hasn't been accessed yet),
            if (!visitedSet.has(neighbor)) {
                //then add it to visitedSet
                visitedSet.add(neighbor);
                //then add it to queue as well.
                queue.push(neighbor);
            }
        }

        //continue repeating the process of traversing the next items in the queue until the queue is empty
    }

}

console.log("First Test:")
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
// One possible solution:  3, 2, 4, 1, 5, 6
console.log("Second Test:")
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
// One possible solution:  6, 4, 3, 5, 2, 1
console.log("Third Test:")
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                        // One possible solution:  4, 3, 5, 6, 2, 1