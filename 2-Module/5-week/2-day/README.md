# M2W5D2

## `Trees and Graphs`

`Trees` are a common data structure in computer science. You can think of them like a `singly-linked list`, except instead of having a single `.next` node, each node has one or more `child` nodes.

### `Graphs`

A `graph` is a collection of nodes and edges between those nodes. Each circle is a node and each arrow is an edge.
![graphs](https://raw.githubusercontent.com/appacademy/SWEO-Part-Time-Resources/2022-Jun-E/2-Module/5-week/2-day/graphs.png)


- In the picture above, examples 1 and 2 are both considered to be a `graph`, a `tree`, and a `linked list`.
- Example 3 is a `graph` and a `tree`, but not a `linked list` because it has nodes with more than 1 child node.
- Example 4 is a `graph`, but it's not a `linked list` or a `tree` because it has nodes with more than one parent.
- Example 5 is a `graph`, but it's not a `linked list` or a `tree` because it has a cycle.

### `Trees`

A `tree` is a `graph` with no cycles. A cycle is a path that starts and ends at the same node.

Looking at the above example, the blue circles are the `'root'` nodes. These are usually shown at the top of the `tree`. Just like the `head node` in a `linked list`, if you want to reference a `tree`, you can just pass the `root` node, and will have access to every item in that `tree` through that node.

### Terms

- Node: An element in a graph
- Edges: The connections between nodes, also called a pointer.
- Root: The ultimate parent, the node of a tree that can access all other nodes
  through edges. The root cannot have a parent.
- Parent/Child: A Parent node points to a child node.
- Neighbors: The connections to a given node.
- Subtree: A Tree whose root node is a child of another node in the tree.
- Internal Node: A node that has children and has a parent, also called a branch
  node.
- Leaf: A node that does not have any children. An outer node.
- Path: A series of nodes that can be traversed through edges.
- Level: The number of edges between a node and the root node.
- Height: The number of edges between the root node and the bottom-most node.


## `Binary Trees`

![graphs](https://raw.githubusercontent.com/appacademy/SWEO-Part-Time-Resources/2022-Jun-E/2-Module/5-week/2-day/graphs.png)

A `Binary tree` is a tree where the nodes have
**at most** 2 children. This means that examples 1, 2, and 3 are all `Binary Trees`.

- An empty `graph` of 0 nodes and 0 edges is technically a `binary tree`.
- A `graph` of 1 node and 0 edges is a `binary tree`.
- a `linked list` is a `binary tree`.

### `Binary trees in code`

As said before, a `tree` is just a collection of nodes, so first you would need a `treeNode` class.

```js
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode('a');
const b = new TreeNode('b');
const c = new TreeNode('c');

a.left = b;
a.right = c;

//     a
//    / \
//   b   c
```

Constructing a `tree` is just a matter of creating the nodes and setting the `.left` and `.right` to point to other nodes. `Trees` will only traverse in one direction, so `a` can access `b`, but `b` can't access `a`.


## `Binary Search Trees`
The key difference that makes a `Binary Search Tree` different from a `Binary Tree` is that the `Binary Search Tree` is sorted. Every node on the **left will be less** than the value of its `parent`, and every node on the **right will be greater** than the value of its `parent`. (if the value is the same for both, the duplicate is usually placed on the right side of the `parent`.)

- All `Binary Search Trees` are `Binary Trees`, but not all `Binary Trees` are `Binary Search Trees`.

In order to search a `BST`, your psuedo-code would look like this:

- If the `root` node is `null`, return false
- If the `root` node's value equals the `target`, return true.
- If the `target` is less than the `root` value, recursively search the left `subtree`
- If the `target` is greater than the `root` value, recursively search the right `subtree`

This can be done iteratively as well using a while loop.

- Traversal: The process of visiting or evaluating every node in a tree.
- Search: A traversal that stops when you find what you were looking for.
