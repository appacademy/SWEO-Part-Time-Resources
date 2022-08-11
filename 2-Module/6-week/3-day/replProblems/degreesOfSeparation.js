// Degrees of Separation
// Another common question is the degrees of 
// separation between two nodes.  In other words, 
// what is the shortest number of steps you can take 
// to get from one to another.

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function degreesOfSeparation(start, end) {
  const ele = {val: start, level: 0};
  const queue = [ele];
  const visited = new Set([start]);

  while (queue.length){
    const current = queue.shift();

    if (current.val === end) return current.level;
    
    const neighbors = adjList[current.val];
    neighbors.forEach(n => {
      if (!visited.has(n)){
        visited.add(n);
        const newEle = {val: n, level: current.level + 1}
        queue.push(newEle);
      }
    })
  }
  return false;
}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false