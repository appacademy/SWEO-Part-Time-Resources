
### Identifying and defining graphs: 
Vertex: A node in the graph. Vertex and node can be used interchangeably

Directed edge: A one-way connection from one vertex to another 

Undirected edge: A two-way connection between two vertices (or nodes). Functionally the same as a bidirectional edge. 

Bidirectional edge: A two-way connection between two vertices that can be traversed in either direction. 

Edge weight: The cost of traversing an edge 

Cyclic/acyclic: A cyclic graph is a graph with at least 1 cycle, or the potential to have a cycle 

Adjacency list: A way of representing a graph in code with an object. 




#### What is a Graph?:
Graphs are an abstract data type that can be coded in many ways. The most standard is the adjacency list. This is implemented as an object with a key for each node in the graph 
```js 
const graph = {
	"A": ["B", "C"],// unique A 
	"C": "D" // unique C  
}
```
Cyclic Graphs: 
![[cyclic_graphs.png]]

Directed Graph: 
![[1200px-Directed_graph_no_background.svg.png]]

![[6nodes-graph.jpg]]

Graphs do not have any particular ordering to their children.
Because each node's edges are unique, you could use a set to represent adjacencies instead. 

If a node has a list of neighbors, searching for those neighbors by iterating through them one by one would be an O(n) operation. 

Imagine that we have a pointer to each specified neighbor belonging to a node. This would require a O(1) lookup time, which is what makes using a set beneficial. 


Both bi-directional and undirected edges are represented by two directed edges in an adjacency list. For example, the above graph would be represented with the following adjacency list: 

```
const undirected = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};
```


Node-and-pointer data structures including linked lists, doubly linked lists, binary search trees, and binary trees are all forms of graphs, which is a name for the most general form of connected data structures. 

Graphs are an abstract data type that represent a collection of nodes and edges. Each node represents one or more values and contains any number of edges pointing to other nodes. Graphs represent relationships between objects. Since there are many types of relationships, there are many different types of graphs. 

Graphs make use of a lot of the computer science concepts you've learned so far. To solve graph problems, you will make use of arrays, hash tables and sets, stacks and queues, recursion, breadth and depth-first search, and more. Graph problems are tricky if you are shaky on any of these concepts, which is one reason why they show up commonly in advanced coding interviews. 

Street maps
Social network 
The internet 
Decisions in a board game 

Directed vs undirected graphs
There are a few properties you need to identify before solving graph problems. 
Directed vs. Undirected. 

### Importance in Algorithms 
Algorithm design 
Many fundamental algorithms in computer science are based on graph theory, including search algorithms (DFS, BFS), shortest path algorithms, and network flow algorithms. 

In short, directed graphs, and related data structures are crucial in computer science because they provide a versatile and powerful way to model relationships and solve complex problems across various domains. Their importance spans practical applications, algorithm design, data representation, and theoretical foundations. 


Pathfinding algorithms are crucial for navigating and solving problems in graphs, where you need to find a route from one node to another. Two fundamental pathfinding algorithms are Breadth-First Search (BFS) and Depth-First Search (DFS). 


Breadth-First Search (BFS) 
BFS explores nodes level by level. It starts at the source node and explores all its neighbors before moving on to the next level of neighbors. It uses a queue to keep track of the nodes to be explored next. 


BFS Algorithm Steps: 
1. Initialization. Start at the source node, mark it as visited, and enqueue it. 
2. Explore: Dequeue a node, mark all its unvisited neighbors as visited, and enqueue them.
3. Repeat: Continue until the queue is empty or the target node is found 

BFS Characteristics: 
Shortest Path: In unweighted graphs, BFS finds the shortest path from the source to any other node. 


### Depth-First Search (DFS)

**DFS** explores as far as possible along each branch before backtracking. It uses a stack (either explicitly or via recursion) to keep track of the nodes to be explored next.


#### DFS Algorithm Steps:

1. **Initialization**: Start at the source node, mark it as visited, and push it onto the stack.
2. **Explore**: Pop a node, mark all its unvisited neighbors as visited, and push them onto the stack.
3. **Repeat**: Continue until the stack is empty or the target node is found.


#### DFS Characteristics:

- **Path Found**: DFS does not guarantee the shortest path in unweighted graphs.

### Three Steps to solving Graph Problems 

1. Identify and define the type of graph 
2. Implement the `getNeighbors` function 
3. Traverse the graph

### Key Differences between BFS and DFS:

- **Traversal Order**: BFS explores nodes level by level, while DFS explores as far as possible along each branch before backtracking.
- **Shortest Path**: BFS guarantees the shortest path in unweighted graphs, whereas DFS does not.
- **Usage Scenarios**:
    - **BFS** is preferred for shortest path problems in unweighted graphs and when exploring nodes level by level is beneficial.
    - **DFS** is used for problems involving traversal of all nodes (e.g., checking connectivity), topological sorting, and solving puzzles with backtracking.