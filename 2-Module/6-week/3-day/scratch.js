/*
Graphs - abstract data type that represents a collection of nodes and edges;
  Each node represents one or more values and contains any number of edges pointing to other nodes.
  Graphs represent relationships between object.
  Graphs don't necessarily start at a 'root' and can have any number of neighbors.

  IRL
  - Street Maps
  - Social Networks
  - The Internet
  - Decisiions in a BoardGame

  Traversal and Search of graphs allows us to do things like finding the shortest route between locations, friend recommendations, web crawlers and scrapers, package routing, game AI....
  Directed or Undirected
  Cyclic or Acyclic
  Weighted or Unweighted
*/
// Adjacency List
const graph = {
  'A' : ['B', 'C'],
  'B' : ['A', 'C', 'D'],
  'C' : ['D'],
  'D' : ['B'],
}
const graph1 = {
  'A' : new Set(['B', 'C']),
  'B' : new Set(['A', 'C', 'D']),
  'C' : new Set(['D']),
  'D' : new Set(['B']),
}

console.log(graph['A'].includes('B')) //O(n)
console.log(graph1['A'].has('B'))     //O(1)

// class Node {
//   constructor(val) {
//     this.value = val;
//     this.left;
//     this.right;
//     this.up;
//     this.down;
//   }
// }
// let A = new Node('A');
// graph[A.value] = A;


/*
BREADTH FIRST GRAPH TRAVERSAL ALGO
1. Create a queue and enqueue the starting node;
2. Create a set of visited nodes
3. While the queue is not empty, repeat steps 4- 6
4. Dequeue the first node
5. DO THE THING
6. For each unvisited neighbor, add it to visited and to the back of the queue
DEPTH FIRST GRAPH TRAVERSAL ALGO
1. Create a stack and push the starting node;
2. Create a set of visited nodes
3. While the stack is not empty, repeat steps 4- 6
4. pop the first node
5. DO THE THING
6. For each unvisited neighbor, add it to visited and to the back of the stack
FINDING THE SHORTEST PATH ALGO
1. Create a queue. Create a separate array containing the starting node.
   Enqueue this array. The enqueued array is the current path.
2. Create a set to store visited nodes
3. While the queue is not empty, repeat steps 4-6
4. Dequeue the first path, and save it in a variable
5. Save the last node in the path in a variable (DO NOT pop it)
6. IS THIS NODE THE THING? If so, stop and return a result. Else, continue.
7. For each unvisited neighbor of the last node:
  1. Add it to the visited nodes set
  2. Copy the saved path, and add the neighbor to the end. Enqueue this new path
8. If the queue becomes empty and we didn't return, it doesn't exist in the graph.

Time  : O(n) n = number of edges
Space : O(n) n = number of nodes
*/