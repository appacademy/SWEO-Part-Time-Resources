// const adjList = {
//   1: [2, 5],
//   2: [1, 3, 5],
//   3: [2, 4],
//   4: [3, 5, 6],
//   5: [1, 2, 4],
//   6: [4]
// }

// // - Create a queue = array
// //   - add start to queue
// // - Create variable to keep track of visited = set
// //   - while loop(as long as something)
// //     - grab current val(dequeue) and print
// //     - grab neighbors (key into adj list)
// //     - iterate over neighbors
// //       - have i visited? no
// //         - add to visited
// //         - add to queue


// function printBreadthFirst(start) {
//   const queue = [start];
//   const visited = new Set([start]);

//   while (queue.length) {
//     console.log(queue)
//     const curr = queue.shift();

//     console.log(curr);

//     const neighbors = adjList[curr];

//     neighbors.forEach((neighbor) => {
//       if (!visited.has(neighbor)) {
//         queue.push(neighbor);
//         visited.add(neighbor);
//       };
//     });
//   };
// };

// console.log("First Test:")
// printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
// // One possible solution:  3, 2, 4, 1, 5, 6
// console.log("Second Test:")
// printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
// // One possible solution:  6, 4, 3, 5, 2, 1
// console.log("Third Test:")
// printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
//                       // One possible solution:  4, 3, 5, 6, 2, 1

// function printDepthFirst(start) {
//   const stack = [start];
//   const visited = new Set([start]);

//   while (stack.length) {
//     const curr = stack.pop();

//     console.log(curr);

//     const neighbors = adjList[curr];
//     console.log("curr", curr);
//     console.log("neighbors", neighbors)

//     neighbors.forEach((neighbor) => {
//       if (!visited.has(neighbor)) {
//         stack.push(neighbor);
//         visited.add(neighbor);
//       }
//     })
//   }
// }

// console.log("First Test:")
// printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
// One possible solution:  3, 4, 6, 5, 1, 2
// console.log("Second Test:")
// printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
// One possible solution:  6, 4, 5, 2, 1, 3
// console.log("Third Test:")
// printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
// One possible solution:  4, 6, 5, 2, 1, 3

function breadthFirstSearch(start, end) {
  const queue = [start];
  const visited = new Set([start]);

  while (queue.length) {
    console.log(queue)
    const curr = queue.shift();

    if (curr === end) return true;

    const neighbors = adjList[curr];

    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      };
    });
  };

  return false;
};

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false
