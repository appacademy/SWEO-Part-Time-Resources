const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function breadthFirstSearch(start, end) {
    //create a queue and set then onboard the first start vertex into there
    const queue = [start];
    const visitedSet = new Set([start]);

    //while the queue is not empty
    while (queue.length > 0) {
        //dequeue the front of q and store it in a variable
        let currentNode = queue.shift();
        //do whatever we need to with the currentNode
        if (currentNode === end) {
            return true;
        }

        //access the adjList w/ the currentNode as the key to get neighbors 
        const neighborsArr = adjList[currentNode];

        //for each node in neighbors array, 
        for (let i = 0; i < neighborsArr.length; i++) {
            const neighbor = neighborsArr[i];
            //if it's not in visitedSet, 
            if (!visitedSet.has(neighbor)) {
                //then add it to visitedSet
                visitedSet.add(neighbor);
                //then add it to queue as well.
                queue.push(neighbor);
            }
        }
    }
    //default to return false at the end if no true were hit (nothing was found)
    return false
}

console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false