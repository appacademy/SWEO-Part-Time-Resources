# M2W6D4

## Solving Matrix `Graph` Problems

**`3 Steps to solving almost any `graph` problem:`**

1. Identify the type of `graph`
2. Implement the getNeighbors function
3. Traverse the `graph`

## Matrices

A `graph` is essentially an ADT used to represent relationships among objects (vertices). An Adjacency list is a way of representing a `graph` with an object.

A `matrix` is a way of representing a `graph` as a 2d `array`. The matrix includes `nodes` (the actual elements in the `arrays`) and `edges` (represented as adjacent `nodes` within the 2d `array`).

- To access a `node` (`vertex`) you key into the outer `array` first, then the inner `array`. (matrix[row][col])

```js
// Adjacency List - represents relationships as an object data type
const adjacencyList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};
    // `Node` 1 has two neighbor `nodes` [2, 5]

// Matrix - represents relationships as a two-dimensional (2-D) `array` data type
const matrix = [
    [ 0, 1, 0, 0, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
];
    // The [0,0] `node` has three neighbor `nodes` [ [0,1], [1,0], [1,1] ],
    // if we are counting diagonals as valid neighbors
```

> It's important when choosing your variables for the indices to use **row** and **col** *instead of i and j or x and y* because you **WILL** get confused. matrix[row][col] is easier to understand than matrix[i][j] or matrix[x][y].

### 3 Steps

**`1. Identify the type of graph`**

Ask yourself the following questions when trying to identify the type of `graph`:

- What is the problem asking you to do?
- What does the `matrix` represent?
- What does each `node` represent?
- What relationship do the `edges` represent?
- What is considered a valid neighbor, in the context of this problem?
- Is this a search or traversal problem?
- Does this require a `depth-first` or `breadth-first` approach?

**`2. Implement the getNeighbors function`**

Here is the psuedocode for a getNeighbors function for an adjacency `matrix`:

```js
const matrix = [
[ 0, 1, 0, 0, 1 ],
[ 1, 0, 0, 0, 1 ],
[ 1, 1, 0, 1, 1 ],
[ 0, 1, 1, 0, 0 ],
[ 0, 0, 0, 0, 0 ]
];

function getNeighbors(`node`, matrix) {
    // Create an `array` to hold the valid neighbors

    // UP: 
        // Identify the `node` above the current `node`, if it exists
        // Push that `node` into the new `array`

    // DOWN: 
        // Identify the `node` below the current `node`, if it exists
        // Push that `node` into the new `array`

    // LEFT: 
        // Identify the `node` to the left of the current `node`, if it exists
        // Push that `node` into the new `array`

    // RIGHT: 
        // Identify the `node` to the right of the current `node`, if it exists
        // Push that `node` into the new `array`

    // Return the neighbors `array`
}

// returns the correct neighbors from an internal `node`
getNeighbors([2,2], matrix) // returns [ [1,2], [3,2], [1,2], [3,2] ]

// returns the correct neighbors from a corner `node`
getNeighbors([0,0], matrix) // returns [ [1,0], [0,1] ]

// returns the correct neighbors from an `edge` `node`
getNeighbors([2,0], matrix) // returns [ [1,0], [3,0], [2,1] ]
```

#### Let's think about how to achieve these steps

- How would you check to see if there is a `node` above the current `node`?
  - We have our current `node`'s row and column. So to find the `node` above the current `node`, we just need to decrement the row by 1. The column will stay the same.
- How would you check to see if there is a `node` to the right of the current `node`?
  - the `node` to the right would be in the same row, but it's column would be 1 greater than the current `node`'s column.

> Make sure you plan accordingly for corners and `edges`. Check that the index of the neighbor exists in your conditionals.

**`3. Traverse the graph`**

psuedocode:

- Create a `queue` and enqueue the starting `node`
- Create a `set` to store visited `nodes`
- While the `queue` is not empty, repeat steps 4-6
- Dequeue the first `node` and check if it's been visited
- If not, mark it as visited and DO THE THING
- Put all its neighbors in the back of the `queue`

Traversing is going to be pretty much the same as we've been doing. **HOWEVER**, when storing your `matrix` locations in a `set`, you **MUST** use a **string representation** of the `matrix` location to guarantee the comparison when checking if the item exists in your set will be correct.

```js
console.log([1,2].toString()) // returns '1,2'
```

Working with matrices is intimidating, but you can do it!

## Project Time

[Social `Graph` Practice](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-12---sorts-and-`graphs`/social-`graph`-practice-part-1)(45m)

## Discussion 1

[Solving `Graph` Problems](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-12---sorts-and-`graphs`/solving-`graph`-problems-practice-part-1)(2h)

## Discussion 2
