// const adjList = {
//     1: [2, 5],
//     2: [1, 3, 5],
//     3: [2, 4],
//     4: [3, 5, 6],
//     5: [1, 2, 4],
//     6: [4]
//   }
  
//   function printBreadthFirst(start) {
// //     1. Create a queue and enqueue the starting node
//     const queue = [start]
//     const res = []
// //     2. Create a set to store visited nodes
//     const visited = new Set()
//     visited.add(start)
// //     3. While the queue is not empty, repeat steps 4-6
//     while(queue.length){
//         //     4. Dequeue the first node
//         const curr = queue.shift()
//         //     5. DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
//         // res.push(curr)
//         for(let neighbor of adjList[curr]){
//             //     6. For each unvisited neighbor, add it to the visited nodes and to the back of
//             //     the queue
//             if(!visited.has(neighbor)){
//                 visited.add(neighbor)
//                 queue.push(neighbor)
//             }

//         }

//     }
//     // console.log(Array.from(visited))
//     return res
//   }
  
//   console.log("First Test:")
//   console.log(printBreadthFirst(3)); // Prints 1 through 6 in Breadth-first order, starting with 3
//                         // One possible solution:  [ 3, 2, 4, 1, 5, 6 ]
//   console.log("Second Test:")
//   console.log(printBreadthFirst(6)); // Prints 1 through 6 in Breadth-first order, starting with 6
//                         // One possible solution:  [ 6, 4, 3, 5, 2, 1 ]
//   console.log("Third Test:")
//   console.log(printBreadthFirst(4)); // Prints 1 through 6 in Breadth-first order, starting with 4
//                         // One possible solution:  [ 4, 3, 5, 6, 2, 1 ]
  

// function printDepthFirst(start) {
//     // Create a stack and push the starting node
//     const stack = [start]
//     const res = []
//     // Create a set to store visited nodes, and add the starting node
//     const visited = new Set()
//     visited.add(start)
//     // While the stack is not empty, repeat steps 4-6
//     while(stack.length){
//         // Pop the node on the top of the stack.
//         const curr = stack.pop()
//         // For example, add it to a running total, print it, or save it in an array
//         res.push(curr)
//         // For each unvisited neighbor, add it to the visited nodes and to the top of the stack.
//         for(let neighbor of adjList[curr]){
//             if(!visited.has(neighbor)){
//                 visited.add(neighbor)
//                 stack.push(neighbor)
//             }
//         }

//     }
//     console.log(res)
//     return res
//   }
  
//   console.log("First Test:")
//   printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
//                       // One possible solution:  3, 4, 6, 5, 1, 2
//   console.log("Second Test:")
//   printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
//                       // One possible solution:  6, 4, 5, 2, 1, 3
//   console.log("Third Test:")
//   printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
                      // One possible solution:  4, 6, 5, 2, 1,


//   const adjList = {
//     1: [2, 5],
//     2: [1, 3, 5],
//     3: [2, 4],
//     4: [3, 5],
//     5: [1, 2, 4],
//     6: []
// }

// const adjList = {
//     A: ['B', 'C', 'E'],
//     B: [],
//     C: ['B', 'D'],
//     D: [],
//     E: ['A'],
//     F: ['E'],
//   }



// function breadthFirstSearch(start, end) {
//     // 1. Create a queue and enqueue the starting node\
//     const queue = [start]
//     // 2. Create a set to store visited nodes
//     const visited = new Set()
//     visited.add(start)
//     // 3. While the queue is not empty, repeat steps 4-6
//     while(queue.length){
//         // 4. Dequeue the first node
//         const curr = queue.shift()
//         // 5. DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
//         if(curr === end) return true

//         for(let neighbor of adjList[curr]){
//             // 6. For each unvisited neighbor, add it to the visited nodes and to the back of
//             //    the queue
//             if(!visited.has(neighbor)){
//                 visited.add(neighbor)
//                 queue.push(neighbor)
//             }

//         }
//     }
//     return false
// }

// // console.log("First Test:");
// // console.log(breadthFirstSearch(1, 3)); // -> true
// // console.log("Second Test:");
// // console.log(breadthFirstSearch(4, 1)); // -> true
// // console.log("Third Test:");
// // console.log(breadthFirstSearch(6, 1)); // -> false

// // console.log(breadthFirstSearch('A', 'F'))
// console.log(breadthFirstSearch('F', 'A'))


const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function breadthFirstSearch(start, end) {
  let queue = [[start]];
  let visited = new Set();
  visited.add(start);

  while (queue.length > 0) {
    let path = queue.shift()
    let curr = path[path.length - 1] 
    if (curr === end) return path
    for(let neighbor of adjList[curr]){
      if (!visited.has(neighbor)) {
        queue.push([...path, neighbor]);
        visited.add(neighbor);
      }
    }
  }
  return false;
}

console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // false


// const adjList = {
//     1: [2, 5],
//     2: [1, 3, 5],
//     3: [2, 4],
//     4: [3, 5],
//     5: [1, 2, 4],
//     6: []
// }

// function breadthFirstSearch(start, end) {
//   let queue = [[start]];
//   let visited = new Set();
//   visited.add(start);

//   while (queue.length) {
//     let path = queue.shift()
//     let curr = path[path.length - 1]
//     if (curr === end) return path.length - 1
    
//     for(let neighbor of adjList[curr]){
//       if (!visited.has(neighbor)) {
//         queue.push([...path, neighbor]);
//         visited.add(neighbor);
//       }
//     }
//   }
//   return false;
// }


// console.log("First Test:");
// console.log(breadthFirstSearch(1, 3)); // -> 2
// console.log("Second Test:");
// console.log(breadthFirstSearch(5, 1)); // -> 1
// console.log("Third Test:");
// console.log(breadthFirstSearch(6, 1)); // false