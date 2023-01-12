// const adjList = {
//   1: [2, 5],
//   2: [1, 3, 5],
//   3: [2, 4],
//   4: [3, 5, 6],
//   5: [1, 2, 4],
//   6: [4]
// }

/*
1. Create a queue and enqueue the starting node
2. Create a set to store visited nodes
3. While the queue is not empty, repeat steps 4-6
4. Dequeue the first node
5. DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
6. For each unvisited neighbor, add it to the visited nodes and to the back of
   the queue
*/

// function printBreadthFirst(start) {
//   const q = [start];
//   const visited = new Set().add(start);

//   while(q.length){
//     const curr = q.shift();

//     //start
//     console.log(curr);
//     //end

//     adjList[curr].forEach(el => {
//       if(!visited.has(el)){
//         visited.add(el);
//         q.push(el);
//       }
//     })
//   }
// }

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

/*
The output of your printBreadthFirst function is a bit messy.

Copy it here, and refactor it so that instead of printing each node on a
newline, the function adds each node to an array, then prints that array at the end.
*/

function printBreadthFirst(start) {
  const q = [start];
  const visited = new Set().add(start);

  while(q.length){
    const curr = q.shift();

    //start
    // console.log(curr);
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

    // start
    // console.log(curr);
    if(curr === end) return true;
    // end

    adjList[curr].forEach(el => {
      if(!visited.has(el)){
        visited.add(el);
        q.push(el);
      }
    })
  }

  return false;
}

function aShortestPath(start, end){
  const q = [[start]];
  const visited = new Set();

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
  const visited = new Set();

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
