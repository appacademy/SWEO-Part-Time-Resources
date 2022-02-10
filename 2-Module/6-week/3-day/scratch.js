// const adjList = {
//   1: [2, 5],
//   2: [1, 3, 5],
//   3: [2, 4],
//   4: [3, 5, 6],
//   5: [1, 2, 4],
//   6: [4]
// }

// /*
// Create a queue and enqueue the starting node
// Create a set to store visited nodes
// While the queue is not empty, repeat steps 4-6
// Dequeue the first node
// DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
// For each unvisited neighbor, add it to the visited nodes and to the back of the queue
// */


// function printBreadthFirst(start) {
//   const q = [start];
//   const visited = new Set().add(start);

//   while(q.length){
//     let current = q.shift();
//     console.log(current);

//     adjList[current].forEach(el => {
//       if(!visited.has(el)){
//         q.push(el);
//         visited.add(el);
//       }
//     })
//   }
// }

// console.log("First Test:")
// printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
//                       // One possible solution:  3, 2, 4, 1, 5, 6
// console.log("Second Test:")
// printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
//                       // One possible solution:  6, 4, 3, 5, 2, 1
// console.log("Third Test:")
// printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
//                       // One possible solution:  4, 3, 5, 6, 2, 1


// const adjList = {
//   1: [2, 5],
//   2: [1, 3, 5],
//   3: [2, 4],
//   4: [3, 5, 6],
//   5: [1, 2, 4],
//   6: [4]
// }


// /*
// Create a stack and push the starting node
// Create a set to store visited nodes, and add the starting node
// While the stack is not empty, repeat steps 4-6
// Pop the node on the top of the stack.
// For example, add it to a running total, print it, or save it in an array
// For each unvisited neighbor, add it to the visited nodes and to the top of the stack.

// */

// function printDepthFirst(start) {
//   let s = [start];
//   let visited = new Set().add(start);

//   while(s.length){
//     let current = s.pop();
//     console.log(current);

//     adjList[current].forEach(el => {
//       if(!visited.has(el)){
//         visited.add(el);
//         s.push(el);
//       }
//     })
//   }
// }

// console.log("First Test:")
// printDepthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
//                     // One possible solution:  3, 4, 6, 5, 1, 2
// console.log("Second Test:")
// printDepthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
//                     // One possible solution:  6, 4, 5, 2, 1, 3
// console.log("Third Test:")
// printDepthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
//                     // One possible solution:  4, 6, 5, 2, 1, 3


// const adjList = {
//   1: [2, 5],
//   2: [1, 3, 5],
//   3: [2, 4],
//   4: [3, 5, 6],
//   5: [1, 2, 4],
//   6: [4]
// }

// function printBreadthFirst(start) {
//   const q = [start];
//   const res = [start]
//   const visited = new Set().add(start);

//   while(q.length){
//     let current = q.shift();

//     adjList[current].forEach(el => {
//       if(!visited.has(el)){
//         q.push(el);
//         res.push(el)
//         visited.add(el);
//       }
//     })
//   }
//   // console.log(Array.from(visited));
//   console.log(res);
// }

// console.log("First Test:")
// printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
//                       // One possible solution:  [ 3, 2, 4, 1, 5, 6 ]
// console.log("Second Test:")
// printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
//                       // One possible solution:  [ 6, 4, 3, 5, 2, 1 ]
// console.log("Third Test:")
// printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
//                       // One possible solution:  [ 4, 3, 5, 6, 2, 1 ]

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function breadthFirstSearch(start, end) {
  const q = [start];
  const visited = new Set().add(start);

  while(q.length){
    let current = q.shift();

    if(current === end) return true;

    adjList[current].forEach(el => {
      if(!visited.has(el)){
        q.push(el);
        visited.add(el);
      }
    })
  }

  return false;
}

console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false
