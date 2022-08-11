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

function aShortestPath(start, end) {
                      // 1     3
  let path = [start];
  const queue = [path];
  const visited = new Set([start]);

  // path = [1, 2, 3];
  // lastEle = 3;
  // copy = [1, 2, 3]

  while (queue.length){
    // console.log('The queue is', queue);
    const currentPath = queue.shift();
    // console.log('Current path is', currentPath);
    let lastEle = currentPath[currentPath.length - 1];
    // console.log('LastEle is', lastEle);
    if (lastEle === end) return currentPath;
    
    const neighbors = adjList[lastEle];
    // neighbors.forEach(n => {
    //   if (!visited.has(n)){
    //     visited.add(n);
    //     const copyOfPath = currentPath.slice();
    //     copyOfPath.push(n)
    //     // console.log('new path being pushed is', copyOfPath);
    //     queue.push(copyOfPath);
    //   }
    // })
    for (let i = 0; i < neighbors.length; i++){
      let n = neighbors[i];
      if (!visited.has(n)){
            visited.add(n);
            const copyOfPath = currentPath.slice();
            copyOfPath.push(n)
            // console.log('new path being pushed is', copyOfPath);
            queue.push(copyOfPath);
          }
    }
  }
  return false;
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
// console.log("Second Test:");
// console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
// console.log("Third Test:");
// console.log(aShortestPath(6, 1)); // -> false