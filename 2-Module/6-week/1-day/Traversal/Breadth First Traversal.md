

### Introduction to Graphs

A **graph** is a collection of **nodes** (also called **vertices**) connected by **edges**. Think of it like a social network where people (nodes) are connected by friendships (edges).

### What is Breadth-First Traversal (BFS)?

**Breadth-First Traversal (BFS)** is a way to visit all the nodes in a graph. The idea is to start from a node and explore all its neighbors before moving on to the next level of neighbors. Imagine you're spreading a rumor in a crowd, and it spreads to all your friends first, then their friends, and so on.

### How BFS Works

1. **Start** at the initial node.
2. **Visit** the node and mark it as visited.
3. **Enqueue** all unvisited neighbors.
4. **Dequeue** a node and repeat the process until all nodes are visited or the queue is empty.

### BFS Using a Queue (Iterative Approach)

A **queue** is a data structure that follows the First-In-First-Out (FIFO) principle. Think of it like a line at a ticket counter: the first person in line is the first to get served.

### Example Graph

Let's represent a graph in JavaScript using an adjacency list (an object where each key is a node and its value is an array of connected nodes):



### BFS Implementation in JavaScript
### Explanation of the Code

1. **Initialize** a queue with the starting node and an empty set to keep track of visited nodes. // identify 
2. **Mark** the starting node as visited. // mark 
3. **Loop** while the queue is not empty: // process 
    - **Dequeue** a node from the queue.
    - **Visit** the node (print it out).
    - **Enqueue** all unvisited neighbors of the node and mark dequeued neighbor as visited -> enqueuing == visiting 

### Example Run

Starting from node 'A':
`const graph = {   'A': ['B', 'C'],   'B': ['C', 'D', 'E'],   'C': ['D', 'F'],   'D': ['B'],   'E': ['B', 'F'],   'F': ['C', 'E'] };` 


"F": ["C", "E"]
Node: F
Neighbors: ["C", "E"]
Dequeue: "C" -> "E"
1. Queue: ['A']
2. Visit 'A', mark as visited.
3. Queue: ['B', 'C'] (enqueue neighbors of 'A')
4. Dequeue 'B', visit 'B', mark as visited.
5. Queue: ['A', 'D', 'E'] (enqueue neighbors of 'B')
6. Dequeue 'A', visit 'A', mark as visited.
7. Queue: ['D', 'E', 'F'] (enqueue neighbors of 'C')
8. Dequeue 'D', visit 'D', mark as visited.
9. Queue: ['E', 'F'] (neighbors of 'D' already visited)
10. Dequeue 'E', visit 'E', mark as visited.
11. Queue: ['F'] (neighbors of 'E' already visited)
12. Dequeue 'F', visit 'F', mark as visited.
13. Queue: [] (all neighbors of 'F' already visited)

### Conclusion

BFS is a powerful way to explore all the nodes in a graph by visiting nodes level by level. By using a queue, we can implement BFS iteratively, ensuring that we explore all neighbors of a node before moving on to the next level.