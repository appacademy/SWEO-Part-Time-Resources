//Intro to graphs

//Again, a graph is a collection of nodes connected by edges

//Unlike trees, a graph doesn't have to have a root node & can have any number of 
//neighboring edges

//Directed vs Undirected

//Directed - Arrows on edges (One way relationship)
//Undirected - No arrows on edges (two way relationships)

//Cyclic - The graph has cycles
//Acyclic - The graph has no cycles

//Weighted vs Unweighted

//Weight - Refers to how long it takes to traverse certain edges

//Weighted - That different edges have different weights
//           Usually heavier weight (higher number) === slower traversal
//           Lower weight === faster traversal

//Unweighted - unweighted graphs give every edges a weight of 1


//Breadth First Traversal

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
        adjList[node].forEach((el) => {
            if (!visited.has(el)) {
                queue.push(el);
                visited.add(el);
            }
        })
    }

  }
  
  console.log("First Test:")
  printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                        // One possible solution:  3, 2, 4, 1, 5, 6
  console.log("Second Test:")
  printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                        // One possible solution:  6, 4, 3, 5, 2, 1
  console.log("Third Test:")
  printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                        // One possible solution:  4, 3, 5, 6, 2, 1