// const adjList = {
//   1: [2, 5],
//   2: [1, 3, 5],
//   3: [2, 4],
//   4: [3, 5, 6],
//   5: [1, 2, 4],
//   6: [4],
// };

// function printBreadthFirst(start) {
//   let queue = [];
//   let visited = new Set();
//   const finalArr = [];
//   queue.push(start);
//   visited.add(start);

//   while (queue.length > 0) {
//     // console.log(queue);
//     let currentNode = queue.shift();
//     // console.log('current node: ', currentNode);
//     finalArr.push(currentNode);
//     adjList[currentNode].forEach((neighbor) => {
//       if (!visited.has(neighbor)) {
//         visited.add(neighbor);
//         queue.push(neighbor);
//       }
//     });
//   }

//   console.log(finalArr);
// }

// console.log('First Test:');
// printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
// // One possible solution:  [ 3, 2, 4, 1, 5, 6 ]

// const adjList = {
//   1: [2, 5],
//   2: [1, 3, 5],
//   3: [2, 4],
//   4: [3, 5],
//   5: [1, 2, 4],
//   6: [],
// };

// function breadthFirstSearch(start, end) {
//   const queue = [start];
//   const visited = new Set(queue);

//   while (queue.length) {
//     const curr = queue.shift();

//     if (curr === end) return true;

//     adjList[curr].forEach((neighbor) =>
//       !visited.has(neighbor)
//         ? visited.add(neighbor) && queue.push(neighbor)
//         : null
//     );
//   }

//   return false;
// }

// console.log('First Test:');
// console.log(breadthFirstSearch(1, 3)); // -> true
// console.log('Second Test:');
// console.log(breadthFirstSearch(4, 1)); // -> true
// console.log('Third Test:');
// console.log(breadthFirstSearch(6, 1)); // -> false

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};

const aShortestPath = (start, end) => {
  const queue = [[start]];
  const visited = new Set([start]);

  while (queue.length) {
    debugger;
    const path = queue.shift();
    const curr = path[path.length - 1];

    if (curr === end) return path.length - 1

    // adjList[curr].forEach((el) =>
    //   !visited.has(el) ? visited.add(el) && queue.push(path.concat(el)) : null
    // );

    adjList[curr].forEach((neighbor) => {
      debugger;
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        let copyPath = [...path];
        copyPath.push(neighbor);
        queue.push(copyPath);
      }
    });
  }

  return false;
};

console.log('First Test:');
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log('Second Test:');
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log('Third Test:');
console.log(aShortestPath(6, 1)); // -> false

