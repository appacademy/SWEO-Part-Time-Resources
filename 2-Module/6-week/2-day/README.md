<<<<<<< HEAD
# M2W3D3

## Graphs

### What is a graph?

**...EVERYTHING!**

- Linked Lists
- Trees
- anything with a node and a pointer!

### Graph Vocabulary

- Vertex: A node in the graph. Vertex and node can be used interchangeably
- Directed edge: A one-way connection from one vertex to another
- Undirected edge/Bidirectional edge: A two-way connection between two vertices
  that can be traversed in either direction
- Edge weight: The cost of traversing an edge. (This would be equivlent to the
  lines/edges in the whole graph having lengths)
- Cyclic/acyclic: A cyclic graph is a graph with at least 1 cycle, or the
  potential to have a cycle

### Adjacency Lists

![graphs](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/graphs/images/graphs.png)

```js
const graph1 = {
  T: ['V'],
  U: ['V'],
  V: [],
}

const graph2 = {
  X: ['Y'],
  Y: ['Z'],
  Z: ['X'],
}

const graph3 = {
  A: ['B', 'C', 'E'],
  B: [],
  C: ['B', 'D'],
  D: [],
  E: ['A'],
  F: ['E'],
}
```

![undirected](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/computer-science/images/basic_graph.svg)

```js
//an undirected graph may look like this:
const undirected = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
}
```

### Traversing Graphs

#### BFS

1. Create a queue and enqueue the starting node
2. Create a set to store visited nodes
3. While the queue is not empty, repeat steps 4-6
4. Dequeue the first node
5. DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
6. For each unvisited neighbor, add it to the visited nodes and to the back of
   the queue

#### DFS

1. Create a stack and push the starting node
2. Create a set to store visited nodes, and add the starting node
3. While the stack is not empty, repeat steps 4-6
4. Pop the node on the top of the stack.
5. For example, add it to a running total, print it, or save it in an array
6. For each unvisited neighbor, add it to the visited nodes and to the top
   of the stack.
=======
# M2W6D2

## Bubble Sort

- Bubble Sort is almost NEVER used because it is not efficient!!

- Every movement of an item requires an individual pass through the array.

- Bubble Sort works by moving the SMALLEST elements to the beginning of the array.

- Bubble Sort manipulates the array by swapping the position of two elements. To
  implement Bubble Sort in JS, you'll need to perform this operation. It helps to
  have a function to do that. A key detail in this function is that you need an
  extra variable to store one of the elements since you will be overwriting them
  in the array:

```js
;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
```

## Insertion Sort

Insertion Sort works similar to Selection Sort in that it gradually builds up a
larger and larger sorted region at the left-most end of the array. However, they
differ in that insertion sort focuses on sorting each element in the order they
appear from left to right, regardless of their value, and inserting them into
the most appropriate position in the already sorted region.

Steps of Insertion Sort:

1. If the min is the first element, it is already sorted. return 1
2. Pick next element
3. Compare with all elements in the sorted sub-list
4. Shift all the elements in the sorted sub-list that is greater than the value
   to be sorted
5. Insert the value
6. Repeat until list is sorted

## Selection Sort

Selection sort works very similar to Bubble Sort, but it works on sending the
smallest elements down to the beginning of the array instead of sending the
largest elements up. For the same reasons as Bubble Sort, Selection Sort is not
very efficient at all.

The algorithm can be summarized as follows:

1. Set MIN to location 0.
2. Search the minimum element in the list.
3. Swap with value at location MIN
4. Increment MIN to point to next element
5. Repeat until list is sorted

## Merge Sort

Merge sort is the first of the efficient algorithms you will learn.

Merge sort operates with a much better time complexity than the more naive
approaches we started with.

The main ideas of merge sort are:

1. It is easy to merge elements of two sorted arrays into a single sorted array
2. You can consider an array containing only a single element as already sorted
3. You can also consider an empty array as sorted

## Quick Sort

Just like Merge Sort, Quick Sort uses a divide and conquer strategy. The key
ideas of Quick Sort are:

1. It is easy to sort elements of an array relative to a particular target
   value.
2. An array of 0 or 1 elements is already sorted

There are some standard steps when implementing a quick sort algorithm:

1. choose an element called "the pivot", how that's done is up to the
   implementation
2. take two variables to point left and right of the list excluding pivot
3. left points to the low index
4. right points to the high
5. while value at left is less than pivot move right
6. while value at right is greater than pivot move left
7. if both step 5 and step 6 does not match swap left and right
8. if left ≥ right, the point where they met is new pivot
9. repeat, recursively calling this for smaller and smaller arrays
>>>>>>> 068e39f9864dacf5a348aadb94b67acf4110ead6
