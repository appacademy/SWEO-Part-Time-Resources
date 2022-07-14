const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function printDepthFirst(start) {
    //start with stack and set with start in it
    const stack = [start];
    const visitedSet = new Set([start]);

    //while stack is not empty
    while(stack.length > 0){
        //pop element from stack and store it in the currentNode
        let currentNode = stack.pop();

        //do whatever we want with the the currrentNode (i.e. print, add to result, etc.)
        console.log(currentNode);
        
        //get the neighbor list from the adjList with the currentNode as the key
        let neighborArr = adjList[currentNode]; //i.e. currentNode = 1; neighborArr = [2,5]

        //for each neighbor in neighborArr, 
        for(let i=0; i< neighborArr.length; i++){
            const neighbor = neighborArr[i];
            //if neighbor is not in visitedSet,
            if(!visitedSet.has(neighbor)){
                //add to set 
                visitedSet.add(neighbor);
                //add to stack
                stack.push(neighbor);
            }
        }
    }
}

console.log("Zero Test:")
printDepthFirst(1); //1,5,4,6,3,2

console.log("First Test:")
printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
// One possible solution:  3, 4, 6, 5, 1, 2
console.log("Second Test:")
printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
// One possible solution:  6, 4, 5, 2, 1, 3
console.log("Third Test:")
printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
                      // One possible solution:  4, 6, 5, 2, 1, 3