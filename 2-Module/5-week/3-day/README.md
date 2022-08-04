# M2W5D3

## `Binary Search Trees Cont'd`

### `Preorder vs. Inorder vs Postorder`

The main difference between these three types of traversals is **when you take action** on the current node.

- `Preorder Traversal`:

```js
console.log(currentNode.val)
console.log(currentNode.left)
console.log(currentNode.right)
```

- `Inorder Traversal`:

```js
console.log(currentNode.left) 
console.log(currentNode.val) 
console.log(currentNode.right)
```

- `Postorder Traversal`:

```js
console.log(currentNode.left) 
console.log(currentNode.right)
console.log(currentNode.val)
```

### `Depth-First Search`

Even though the above traversal methods print different things, they are all still taking the same paths to get there. Each one starts at the `currentNode`, walks down the left `subtrees`, then back up to the `currentNode` and down the right `subtrees` and back up again. This method of traveling as deep as possible own the `branches` until reaching a dead-end, then backtracking is `Depth-First order`.

- `Pre`, `in` and `post-order` traversals are all **depth-first traversals** specific to `binary trees`.

### `Breadth-First Search`

While `Depth-First Search` will travel as deep as possible down each branch before moving on, `Breadth-First Search` will visit each node in a level before moving down to the next level.

```js
//     4
//    / \
//   2   6
//  / \   \
// 1   3   7
```

If we were traversing this tree in `Breadth-First Search`, we would visit the currentNode first, `4`, then move to the second level to visit `2` and `6`, then finish with the third level `1`, `3`, `7`.

- `Breadth-First Search` cannot be executed recursively, so we use a queue to implement.
  1. Put the starting node in a queue
  2. While the queue is not empty, repeat steps 3-4
  3. Dequeue a node and print it
  4. Put all of the node's children in the back of the queue

### `Depth-first traversal with a stack`

```js
//     4
//    / \
//   2   6
//  / \   \
// 1   3   7
```

You can perform a `depth-first traversal` with virtually the same algorithm as a `breadth-first traversal` by switching out the queue for a stack.

  1. Put the starting node on a STACK
  2. While the STACK is not empty, repeat steps 3-4
  3. POP a node and print it
  4. Put all of the node's children on the TOP of the STACK

The order in which the children are added to the stack doesn't matter, but usually would add from right to left so that it searches left first and then right.

## `Traversals Code`

## `Project Time!`

[Binary Search Tree Practice Part 3](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-11---binary-search-and-trees/binary-search-tree-practice-part-3) (30m)

- Binary Search Tree Part 3 Walkthru

[Binary Search Tree Practice Part 4](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-11---binary-search-and-trees/binary-search-tree-practice-part-4) (30m)

- Binary Search Tree Part 4 Walkthru

If you finish early, please go back to Saturday from last week and work on the whiteboarding problems!
