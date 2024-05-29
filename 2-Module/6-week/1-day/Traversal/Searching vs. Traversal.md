The concepts of **searching** and **traversing** a graph are related but have distinct differences in purpose and implementation. Let's break down these differences:

### Traversal of a Graph

**Traversal** is the process of visiting all the nodes in a graph in a systematic manner. The goal is to explore all nodes and edges, ensuring that each node is visited at least once. Traversal is often used to:

1. Explore the entire graph.
2. Check connectivity (whether all nodes are reachable from a given node).
3. Perform operations on each node (e.g., calculating properties, collecting data).

Common traversal methods include:

- **Depth-First Search (DFS)**: Explores as far as possible along each branch before backtracking. Uses a stack (either explicitly or via recursion).
- **Breadth-First Search (BFS)**: Explores all neighbors of a node before moving to the next level. Uses a queue.

### Search in a Graph

**Search** in a graph typically refers to finding a specific node or verifying the existence of a path between two nodes. The search process might stop as soon as the target node is found, making it more efficient for such tasks. Search is often used to:

1. Find a specific node or value.
2. Determine the shortest path between nodes (in unweighted or weighted graphs).
3. Check for the existence of a path between nodes.


While both traversal and search use similar techniques, the key difference lies in the intent and stopping criteria.

### Summary

- **Traversal**: Visits all nodes in the graph. It's comprehensive and ensures every node is visited. Useful for exploring the entire graph and understanding its structure.

- **Search**: Looks for a specific node or path. It stops as soon as the target is found, making it more efficient for locating nodes or paths.


---

### Breadth-first-search Traversal Pseudocode: 

1. **Initialize the BFS Traversal**:
    - **Create Queue:** Create a queue and add the starting node to it.
    - **Create Visited Set:** Create a set to keep track of visited nodes and add the starting node to it.
2. **While the queue is not empty**:
    - **Dequeue:** Remove the first node from the queue (dequeue).
    -  **Visit Node:** Visit the node (e.g., print it or perform some operation on it).
    - For each neighbor of the current node:
        - If the neighbor has not been visited:
            - **Add to Visited:** Add the neighbor to the visited set.
            - **Add to Queue** Add the neighbor to the queue (enqueue).


### Depth-First-Search (DFS) Traversal Pseudocode

1. **Initialize the DFS Traversal**:
    -  **Create Stack:** Create a stack and add the starting node to it.
    - **Create Visited Set:** Create a set to keep track of visited nodes.
2. **While the stack is not empty**:
    - **Pop last node from Stack:** Remove the last node from the stack (pop).
    - If the node has not been visited:
        - **Visit:** Visit the node (e.g., print it).
        - **Mark as Visited:** Mark the node as visited (add to visited set)
        - For each neighbor of node:
	        - Push all unvisited neighbors of the current node onto the stack.


[[Matrix Graphs]]