// const adjList = {
//   1: [2, 5],
//   2: [1, 3, 5],
//   3: [2, 4],
//   4: [3, 5, 6],
//   5: [1, 2, 4],
//   6: [4],
// };

// const printBreadthFirst = (start) => {
//   const queue = [start];
//   const visited = new Set(queue);
//   // visited.add(start)

//   while (queue.length) {
//     const curr = queue.shift();

//     console.log(curr);

//     // adjList[curr].forEach((el) =>
//     //   !visited.has(el) ? visited.add(el) && queue.push(el) : null
//     // );

//     const nextValues = adjList[curr];
//     nextValues.forEach((el) => {
//       if (!visited.has(el)) {
//         visited.add(el);
//         queue.push(el);
//       }
//     });
//   }
// };

// function getNeighbors(key, adjList) {
//   return adjList[key];
// }

// function printBreadthFirst(start) {
//   const queue = [start];
//   const visited = new Set();
//   const nodeArr = [];

//   while (queue.length) {
//     let currentNode = queue.shift();
//     if (!visited.has(currentNode)) {
//       visited.add(currentNode);
//       nodeArr.push(currentNode);

//       //console.log(currentNode);
//       let neighbors = getNeighbors(currentNode, adjList);
//       queue.push(...neighbors);
//     }
//   }
//   console.log(nodeArr.join(','));
// }

// console.log('First Test:');
// printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
// One possible solution:  3, 2, 4, 1, 5, 6
// console.log('Second Test:');
// printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
// // One possible solution:  6, 4, 3, 5, 2, 1
// console.log('Third Test:');
// printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
// // One possible solution:  4, 3, 5, 6, 2, 1

//! --------------------------------------------------------------------------

// const adjList = {
//   1: [2, 5],
//   2: [1, 3, 5],
//   3: [2, 4],
//   4: [3, 5, 6],
//   5: [1, 2, 4],
//   6: [4],
// };

// function printBreadthFirst(start) {
//   const queue = [start];
//   const visited = new Set(queue);
//   // visited.add(start)
// 	const finalArr = [];
//   while (queue.length) {
//     const curr = queue.shift();

//     finalArr.push(curr);

//     // adjList[curr].forEach((el) =>
//     //   !visited.has(el) ? visited.add(el) && queue.push(el) : null
//     // );

//     const nextValues = adjList[curr];
//     nextValues.forEach((el) => {
//       if (!visited.has(el)) {
//         visited.add(el);
//         queue.push(el);
//       }
//     });
//   }

// 	console.log(finalArr)
// }

// console.log('First Test:');
// printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
// // One possible solution:  [ 3, 2, 4, 1, 5, 6 ]
// console.log('Second Test:');
// printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
// // One possible solution:  [ 6, 4, 3, 5, 2, 1 ]
// console.log('Third Test:');
// printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
// // One possible solution:  [ 4, 3, 5, 6, 2, 1 ]

//! --------------------------------------------------------------------------

// const adjList = {
//   1: [2, 5],
//   2: [1, 3, 5],
//   3: [2, 4],
//   4: [3, 5],
//   5: [1, 2, 4],
//   6: [],
// };

// function breadthFirstSearch(start, end) {
// 	if (!start || !end) return
//   const queue = [start];
//   const visited = new Set(queue);
//   // visited.add(start)

//   while (queue.length) {
//     const curr = queue.shift();

//     if (curr === end) return true;

//     // adjList[curr].forEach((el) =>
//     //   !visited.has(el) ? visited.add(el) && queue.push(el) : null
//     // );

//     const nextValues = adjList[curr];
//     nextValues.forEach((el) => {
//       if (!visited.has(el)) {
//         visited.add(el);
//         queue.push(el);
//       }
//     });
//   }

// 	return false
// }

// console.log('First Test:');
// console.log(breadthFirstSearch(1, 3)); // -> true
// console.log('Second Test:');
// console.log(breadthFirstSearch(4, 1)); // -> true
// console.log('Third Test:');
// console.log(breadthFirstSearch(6, 1)); // -> false

//! --------------------------------------------------------------------------

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};
// [(1, 2, 5, 3, 4)];
// [1]
// [1, 2] = > [1, 2, 3]
// 					 [1, 2, 5]
// [1, 5]

const aShortestPath = (start, end) => {
  const queue = [[start]];
  const visited = new Set([start]);

  while (queue.length) {
    debugger;
    const path = queue.shift();
    const curr = path[path.length - 1];

    if (curr === end) return path.length - 1;

    adjList[curr].forEach((neighbor) => {
      debugger;
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        // let pathCopy = [...path, neighbor];
        // queue.push(pathCopy)
        queue.push(path.concat(neighbor));
      }
    });
  }

  return false;
};

console.log('First Test:');
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log('Second Test:');
// console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
// console.log('Third Test:');
// console.log(aShortestPath(6, 1)); // -> false
