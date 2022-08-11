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
  let ele = {level: 0};
  ele.val = start;

  const queue = [ele];
  const visited = new Set([start]);

  while (queue.length){
    const current = queue.shift();
    if (current.val === end) return current.level;

    const neighbors = adjList[current.val];
    neighbors.forEach(n => {
      if (!visited.has(n)){
        let newEle = {}
        newEle.level = current.level + 1;
        newEle.val = n;
        visited.add(n);
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