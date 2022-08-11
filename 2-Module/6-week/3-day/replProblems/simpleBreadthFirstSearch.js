// Simple Breadth-First Search
// Write a function called breadthFirstSearch that 
// takes two nodes as arguments and will traverse 
// the given graph breadth-first, returning true if 
// there is a path from the first node to the second, 
// and false if there is not.

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function breadthFirstSearch(start, end) {
  const queue = [start];
  const visited = new Set([start]);

  while (queue.length){
    const current = queue.shift();

    const neighbors = adjList[current];
    for (let n of neighbors){
      if (!visited.has(n)){
        if (n === end) return true;
        visited.add(n);
        queue.push(n);
      }
    }
  }
  return false;
}

console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false