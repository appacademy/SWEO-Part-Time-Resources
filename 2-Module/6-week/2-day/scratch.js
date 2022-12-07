function printBreadthFirst(start) {
    const queue = [start];
    const visited = new Set([start]);

    while (queue.length){
      const current = queue.shift();
      console.log(current);
      const neighbors = adjList[current];
      neighbors.forEach(n => {
        if (!visited.has(n)){
          visited.add(n);
          queue.push(n);
        }
      })
    }
  }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function printDepthFirst(start) {
    const stack = [start];
    const visited = new Set([start]);

    while (stack.length){
      const current = stack.pop();
      console.log(current);
      const neighbors = adjList[current];
      neighbors.forEach(n => {
        if (!visited.has(n)){
          visited.add(n);
          stack.push(n);
        }
      })
    }
  }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function printBreadthFirst(start) {
    const queue = [start];
    const visited = new Set([start]);
    const arr = [];

    while (queue.length){
      const current = queue.shift();
      arr.push(current);
      const neighbors = adjList[current];
      neighbors.forEach(n => {
        if (!visited.has(n)){
          visited.add(n);
          queue.push(n);
        }
      })
    }
    console.log(arr);
  }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function breadthFirstSearch(start, end) {
    const queue = [start];
    const visited = new Set([start]);

    while (queue.length){
      const current = queue.shift();
      if (current === end) return true;

      const neighbors = adjList[current];
      neighbors.forEach(n => {
        if (!visited.has(n)){
          visited.add(n);
          queue.push(n);
        }
      })
    }
    return false;
  }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
