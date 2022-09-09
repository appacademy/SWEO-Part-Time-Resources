const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function aShortestPath(start, end) {
  const queue = [[start]];
  const visited = new Set([start]);

  while (queue.length) {
    console.log(queue)
    const currPath = queue.shift();
    const lastNode = currPath[currPath.length - 1];

    if (lastNode === end) return currPath;

    const neighbors = adjList[lastNode];

    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        queue.push([...currPath, neighbor]);
        visited.add(neighbor);
      };
    });
  };
};

// console.log("First Test:");
// console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
// console.log("Second Test:");
// console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
// console.log("Third Test:");
// console.log(aShortestPath(6, 1)); // -> false

function degreesOfSeparation(start, end) {
  const queue = [[start]];
  const visited = new Set([start]);

  while (queue.length) {
    console.log(queue)
    const currPath = queue.shift();
    const lastNode = currPath[currPath.length - 1];

    if (lastNode === end) return currPath.length - 1;

    const neighbors = adjList[lastNode];

    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        queue.push([...currPath, neighbor]);
        visited.add(neighbor);
      };
    });
  };

  return false;
}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false
