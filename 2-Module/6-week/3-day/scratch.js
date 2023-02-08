// Graph - abstract data type that represents a collection of nodes and edges
// Each node represents one or more values and contain any number of edges pointing to other nodes.
// Graphs represent relationships between objects.
// Don't necessarily start from a root and can have any number of neighboring edges.

//find the shortest route between two map locations
//friend suggestions based on interests
//web crawler

//Adjacency Table
const graph = {
  'A': ['B', 'C'],
  'B': ['D'],
  'C': [],
  'D': []
}
const graph2 = {
  'A': new Set(['B', 'C']),
  'B': new Set(['D']),
  'C': new Set(),
  'D': new Set()
}

const ocean = [
  [5, 4, 4, 2, 5],
  [4, 3, 3, 1, 4],
  [3, 2, 2, 2, 3],
]

// BREADTH FIRST TRAVERSAL
  // 1. create a queue and enqueue starting node
  // 2. creata a set to store all visited nodes and add first node
  // 3. while the queue is not empty, repeat steps 4 - 6
  // 4. dequeue the first node
  // 5. DO THE THING
  // 6. for each unvisited neighbor, add to the visited nodes and to the back of the queue

// DEPTH FIRST TRAVERSAL
  // 1. create a stack and push starting node
  // 2. creata a set to store all visited nodes and add first node
  // 3. while the stack is not empty, repeat steps 4 - 6
  // 4. pop the back node
  // 5. DO THE THING
  // 6. for each unvisited neighbor, add to the visited nodes and to the back of the queue

// SHORTEST PATH ALGO
  //1. create a queue, create a separate array containing the starting node, enqueue that arr. 
  //2. create a set to store visited nodes;
  //3. while the queue is not empty...
  //4. dequeue first path, save to a var
  //5. save last node in the path, to a variable (DON'T POP)
  //6. is this last node the destination? If so, DO THE THING, else continue
  //7. for each unvisited neighbor of the last node...
    // 1. add to the visited set
    // 2. copy the saved path, and the neighbor to the end. enqueue the new path
  //8. if the queue becomes empty and we didn't return, return false or throw an error

  //Time: O(n)  : n is the number of edges;
  //Space: O(n) : n is the number of nodes;