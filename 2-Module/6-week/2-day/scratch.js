// // const adjList = {
// //     1: [2, 5],
// //     2: [1, 3, 5],
// //     3: [2, 4],
// //     4: [3, 5, 6],
// //     5: [1, 2, 4],
// //     6: [4]
// //   }
  
// //   function printBreadthFirst(start) {
// //     // Create a queue and enqueue the starting node
//     const queue = [start]
//     const res = []
//     // Create a set to store visited nodes
//     const visited = new Set()
//     visited.add(start)
//     // While the queue is not empty, repeat steps 4-6
//     while(queue.length){
//         // Dequeue the first node
//         const curr = queue.shift()
//         debugger
//         // DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
//         // console.log(curr)
//         res.push(curr)
//         // For each unvisited neighbor, add it to the visited nodes and to the back of the queue
//         for(let neighbor of adjList[curr]){
//             if(!visited.has(neighbor)){
//                 debugger
//                 visited.add(neighbor)
//                 queue.push(neighbor)
//             }
//         }

//     }
//     console.log(res)
//   }
  
// //   console.log("First Test:")
// //   printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
//                         // One possible solution:  3, 2, 4, 1, 5, 6
// //   console.log("Second Test:")
// //   printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
// //                         // One possible solution:  6, 4, 3, 5, 2, 1
// //   console.log("Third Test:")
// //   printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
//                         // One possible solution:  4, 3, 5, 6, 2, 1

// const adjList = {
//   1: [2, 5],
//   2: [1, 3, 5],
//   3: [2, 4],
//   4: [3, 5, 6],
//   5: [1, 2, 4],
//   6: [4]
// }

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

//         res.push(curr)

//         for(let neighbor of adjList[curr]){
//             if(!visited.has(neighbor)){
//                 visited.add(neighbor)
//                 stack.push(neighbor)
//             }
//         }
//         // For example, add it to a running total, print it, or save it in an array
//         // For each unvisited neighbor, add it to the visited nodes and to the top of the stack.

//     }
//     console.log(res)
// }

// console.log("First Test:")
// printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
//                     // One possible solution:  3, 4, 6, 5, 1, 2
// console.log("Second Test:")
// printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
//                     // One possible solution:  6, 4, 5, 2, 1, 3
// console.log("Third Test:")
// printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
//                     // One possible solution:  4, 6, 5, 2, 1, 3
                          
  

// const adjList = {
//     1: [2, 5],
//     2: [1, 3, 5],
//     3: [2, 4],
//     4: [3, 5],
//     5: [1, 2, 4],
//     6: []
// }

// function breadthFirstSearch(start, end) {
//     const queue = [start]
//     const visited = new Set()
//     visited.add(start)
//     while(queue.length){
//         const curr = queue.shift()
//         if(curr === end) {
//             return true
//         }
//         for(let neighbor of adjList[curr]){
//             if(!visited.has(neighbor)){
//                 visited.add(neighbor)
//                 queue.push(neighbor)
//             }
//         }
//     }
//     return false
// }

// console.log("First Test:");
// console.log(breadthFirstSearch(1, 3)); // -> true
// console.log("Second Test:");
// console.log(breadthFirstSearch(4, 1)); // -> true
// console.log("Third Test:");
// console.log(breadthFirstSearch(6, 1)); // -> false

// const adjList = {
//     1: [2, 5],
//     2: [1, 3, 5],
//     3: [2, 4],
//     4: [3, 5],
//     5: [1, 2, 4],
//     6: []
// }

// function breadthFirstSearch(start, end) {
//     const queue = [[start]]

//     const visited = new Set()
//     visited.add(start)


//     while(queue.length){
//         const currentPath = queue.shift()
//         // console.log(currentPath)
//         const curr = currentPath[currentPath.length - 1]
//         // console.log(curr)
//         if(curr === end) {
//             // return currentPath
//             return currentPath
//         }
//         for(let neighbor of adjList[curr]){
//             if(!visited.has(neighbor)){
//                 visited.add(neighbor)
//                 queue.push([...currentPath, neighbor])
//             }
//         }
//     }
//     return false
// }
  
//   console.log("First Test:");
//   console.log(breadthFirstSearch(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
//   console.log("Second Test:");
//   console.log(breadthFirstSearch(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
//   console.log("Third Test:");
//   console.log(breadthFirstSearch(6, 1)); // -> false


//   function breadthFirstSearch(start, end) {
//     const queue = [[start]]

//     const visited = new Set()
//     visited.add(start)


//     while(queue.length){
//         const currentPath = queue.shift()
//         // console.log(currentPath)
//         const curr = currentPath[currentPath.length - 1]
//         // console.log(curr)
//         if(curr === end) {
//             // return currentPath
//             return currentPath.length - 1
//         }
//         for(let neighbor of adjList[curr]){
//             if(!visited.has(neighbor)){
//                 visited.add(neighbor)
//                 queue.push([...currentPath, neighbor])
//             }
//         }
//     }
//     return false
// }
  
//   console.log("First Test:");
//   console.log(breadthFirstSearch(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
//   console.log("Second Test:");
//   console.log(breadthFirstSearch(5, 1)); // -> [ 4, 5, 1 ] (One possible solution)
//   console.log("Third Test:");
//   console.log(breadthFirstSearch(6, 1)); // -> false
  