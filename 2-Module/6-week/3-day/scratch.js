// const adjList = {
//   1: [2, 5],
//   2: [1, 3, 5],
//   3: [2, 4],
//   4: [3, 5, 6],
//   5: [1, 2, 4],
//   6: [4]
// }

/*
Create a queue and enqueue the starting node
Create a set to store visited nodes
While the queue is not empty, repeat steps 4-6
Dequeue the first node
DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
For each unvisited neighbor, add it to the visited nodes and to the back of the queue
*/

function printBreadthFirst1(start) {
  const q = [start];
  const visited = new Set().add(start);

  while(q.length){
    const curr = q.shift();

    //start
    console.log(curr);
    //end

    adjList[curr].forEach(el => {
      if(!visited.has(el)){
        visited.add(el);
        q.push(el);
      }
    })
  }
}

function printDepthFirst(start) {
  const s = [start];
  const visited = new Set().add(start);

  while(s.length){
    const curr = s.pop();

    //start
    console.log(curr);
    //end

    adjList[curr].forEach(el => {
      if(!visited.has(el)){
        visited.add(el);
        s.push(el);
      }
    })
  }
}

function printBreadthFirst(start) {
  const q = [start];
  const visited = new Set().add(start);
  // const res = [];

  while(q.length){
    const curr = q.shift();

    //start
    // console.log(curr);
    // res.push(curr);
    //end

    adjList[curr].forEach(el => {
      if(!visited.has(el)){
        visited.add(el);
        q.push(el);
      }
    })
  }
  console.log(Array.from(visited));
}

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function breadthFirstSearch(start, end) {
  const q = [start];
  const visited = new Set().add(start);

  while(q.length){
    const curr = q.shift();

    //start
    // console.log(curr);
    if(curr === end) return true;
    //end

    adjList[curr].forEach(el => {
      if(!visited.has(el)){
        visited.add(el);
        q.push(el);
      }
    })
  }
  return false
}

function aShortestPath(start, end) {
  const q = [[start]];
  const visited = new Set()

  while(q.length){
    const currPath = q.shift();
    const currNode = currPath[currPath.length - 1];

    //start
    if(currNode === end) return currPath;
    //end

    adjList[currNode].forEach(el => {
      if(!visited.has(el)){
        visited.add(el);
        const newPath = [...currPath, el]
        q.push(newPath);
      }
    })
  }

  return false;
}

function degreesOfSeparation(start, end) {
  const q = [[start]];
  const visited = new Set()

  while(q.length){
    const currPath = q.shift();
    const currNode = currPath[currPath.length - 1];

    //start
    if(currNode === end) return currPath.length - 1;
    //end

    adjList[currNode].forEach(el => {
      if(!visited.has(el)){
        visited.add(el);
        const newPath = [...currPath, el]
        q.push(newPath);
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
