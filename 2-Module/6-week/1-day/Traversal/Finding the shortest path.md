## Finding the Shortest Path in a Graph Using BFS

### Introduction to Graphs

A **graph** is a collection of **nodes** (also called **vertices**) connected by **edges**. Think of it like a map where places (nodes) are connected by roads (edges).

### What is the Shortest Path?

The **shortest path** between two nodes in a graph is the path that has the smallest number of edges or the least total cost in weighted graphs. For now, we'll focus on unweighted graphs, where the shortest path means the path with the fewest edges.

### How BFS Helps Find the Shortest Path

**Breadth-First Search (BFS)** is ideal for finding the shortest path in unweighted graphs. It explores all nodes at the present depth level before moving on to nodes at the next depth level.

### Example Graph

Let's represent a graph in JavaScript using an adjacency list (an object where each key is a node and its value is an array of connected nodes):





### Explanation of the Code

1. **Initialize** a queue with the starting node and an empty set to keep track of visited nodes.
2. **Create** a parent map to reconstruct the path once the target is found. This map keeps track of each node's predecessor.
3. **Mark** the starting node as visited.
4. **Loop** while the queue is not empty:
    - **Dequeue** a node from the queue.
    - If the node is the target, **reconstruct the path** from the target to the start using the parent map.
    - **Visit** the node and **enqueue all unvisited neighbors** while updating their parent.
5. If the queue is empty and the target hasn't been found, return null (no path exists).

### Example Run

Starting from node 'A' to find the shortest path to node 'F':
`const graph = {   'A': ['B', 'C'],   'B': ['A', 'D', 'E'],   'C': ['A', 'F'],   'D': ['B'],   'E': ['B', 'F'],   'F': ['C', 'E'] };`

```js 
const visited = ['A', 'B']
```
1. Queue: ['A']
2. Visit 'A', mark as visited.
3. Queue: ['B', 'C'] (enqueue neighbors of 'A'), Parent: { 'A': null, 'B': 'A', 'C': 'A' }
4. Dequeue 'B', visit 'B', mark as visited.
5. Queue: ['C', 'D', 'E'] (enqueue neighbors of 'B'), Parent: { 'A': null, 'B': 'A', 'C': 'A', 'D': 'B', 'E': 'B' }
6. Dequeue 'C', visit 'C', mark as visited.
7. Queue: ['D', 'E', 'F'] (enqueue neighbors of 'C'), Parent: { 'A': null, 'B': 'A', 'C': 'A', 'D': 'B', 'E': 'B', 'F': 'C' }
8. Dequeue 'D', visit 'D', mark as visited.
9. Queue: ['E', 'F'] (neighbors of 'D' already visited)
10. Dequeue 'E', visit 'E', mark as visited.
11. Queue: ['F'] (neighbors of 'E' already visited)
12. Dequeue 'F', visit 'F', mark as visited. 'F' is the target.
13. Reconstruct the path from 'F' to 'A' using the parent map: ['F', 'C', 'A'] and reverse it to get ['A', 'C', 'F'].

### Conclusion

Using BFS to find the shortest path in an unweighted graph is efficient and straightforward. By exploring all neighbors level by level, we ensure that the first time we reach the target node, we've taken the shortest path.


1. Create a queue. Create a separate array containing the starting node. Enqueue this array.
2. Create a set to store visited nodes 
3. While the queue is not empty, repeat steps 4-6
4. Dequeue the first path, and save it in a variable  // variable 
5. Save the last node in the path in a variable (don't pop it) // save last node in path 
6. Does this node match the target? If so, stop and return a result. Else, continue. 
7. For each unvisited neighbor of the last node: // 
	1. Add it to the unvisited neighbor of the last node: 
	2. Copy the saved path, and add the neighbor to the end. Enqueue this new path
8. If the queue has become empty without finding the thing, then the thing has not been found (So return False) 


Each loop starts the same way. While the queue is not empty, dequeue the first element. Instead of a single node, the first element is an array containing a list of nodes in the order in which they were discovered. 

Right now, it's just an array with the 1. Shift the first element in the queue and save it as `currentPath` 