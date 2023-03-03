//Intro to graphs

//Again, a graph is a collection of nodes connected by edges
//Unlike trees, graphs don't always have a "root node" as they can have multiple "starting nodes"

//Directed vs Undirected

//Directed - Arrows on the edges (One way relationship)
//Undirected - No arrows on the edges (Two way relationship)

//Cylic - A graph w cycles
//Acylic - A graph no cycles

//Weighted - Edges can have weights. (usually, heavier weight = slower traversal, lighter = faster)
//Unweighted - Every edge has the same weight (normally a weight of 1);



//Simple Breadth

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }
  
  function printBreadthFirst(start) {
    // your code here
    let queue = [start];
    let visited = new Set();
    visited.add(start);

    while(queue.length) {
        let node = queue.shift();
        console.log(node);

        for (let neighbor of adjList[node]) {
            if(!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
  }
  
  console.log("First Test:")
  printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                        // One possible solution:  3, 2, 4, 1, 5, 6
  console.log("Second Test:")
  printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                        // One possible solution:  6, 4, 3, 5, 2, 1
  console.log("Third Test:") // Prints 1 through 6 in Breadth-first order, starting with 4
  printBreadthFirst(4); // One possible solution:  4, 3, 5, 6, 2, 1


  //Simple Depth

  const adjList2 = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }
  
  function printDepthFirst(start) {
    // your code here
    
  }
  
  /*
  console.log("First Test:")
  printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
                      // One possible solution:  3, 4, 6, 5, 1, 2
  console.log("Second Test:")
  printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
                      // One possible solution:  6, 4, 5, 2, 1, 3
  console.log("Third Test:")
  printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
                      // One possible solution:  4, 6, 5, 2, 1, 3
*/



//A shortest path
