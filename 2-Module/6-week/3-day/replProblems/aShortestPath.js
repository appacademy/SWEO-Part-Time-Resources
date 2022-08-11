// A Shortest Path
// One of the most common uses of a breadth-first 
// search is to find a shortest path from one node 
// to another.  Copy and paste your breadth-first 
// search here and refactor it to use the technique 
// from the reading.  If it is possible to reach end 
// from start, return a shortest path.  Otherwise, return false.

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

// 
// 
                      // 1     3
function aShortestPath(start, end) {
  const path = [start];
  const queue = [path];
  const visited = new Set([start]);

  // currentPath = [1, 2, 3];
  // lastEle = 3
  // copyOfPath = [1, 2, 3]

  while (queue.length){
    const currentPath = queue.shift();
    let lastEle = currentPath[currentPath.length - 1];

    if (lastEle === end) return currentPath;
    const neighbors = adjList[lastEle];
    for (let n of neighbors){
      if (!visited.has(n)){
        visited.add(n);
        let copyOfPath = currentPath.slice();
        copyOfPath.push(n)
        queue.push(copyOfPath)
      }
    }
  }
  return false;
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false