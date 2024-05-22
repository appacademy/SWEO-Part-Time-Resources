# Binary Search Trees
- A binary search tree is like a linked list, but instead of every node pointing to the next node in a linear "line", a node can point to a left node and a right node

```js
//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   7
```

```js
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  toString() { // helper that can be used to print a simple tree to console for debugging, this is only readable for very short trees
    // [4:[2:[1:-,-],[3:-,-]],[6:[5:-,-],[7:-,-]]] looks like this
    let leftSub = this.left !== null ? this.left.toString() : "-";
    let rightSub = this.right !== null ? this.right.toString() : "-";
    return `[${this.val}:${leftSub},${rightSub}]`;
  }
}
```

## BST Characteristics
- Contains nodes with at most 2 children (a left and right pointer to the next node in the list)
- Every node in the left branch of any node will have a lower value than it's parent node
- Every node in the right branch of any node will have a higher value than it's parent node
- If value is equal, either discard it like a set, or place it to the left or the right (can implement it however you want as long as it's consistent)

## Inserting Data into a BST
- If root is null, then tree is empty, set root to new node
- If value is less than currentNode value
    - check if currentNode has a left pointer, if it doesn't then place newNode at the left pointer
    - if it does have a left pointer, recursively call insert again passing the value and currentNode.left pointer
- If value is higher than currentNode value
    - check if currentNode has a right pointer, if it doesn't then place newNode at right pointer
    - if it does have a right pointer, recursively call insert again passing the value and currentNode.right pointer

## Searching a BST for a specific value
- If root is null, return false because tree is empty
- Being a traversal loop
- If value is lower then currentNode value go left
- If value is higher than currentNode value go right
- if both cases above fail, then that means the value has been found
- If loops ends, value wasn't found, return false

## Traversing a BST using a DFS (Depth First Search)
- Normal traversing is always done in the same order, visit every left node before visiting every right node. So when we say traverse to the next node, we mean go the left first, if no left node, then go to the right node
- Sometimes you want to perform an operation on a node in a different order, or gather a nodes value in a different order such as console logging a node or pushing it's value to an array

- Pre-order
    - [4,2,1,3,6,5,7] pre-order
    - Begins traversal at root and ends at the right most node
    - Perform operation before traversing to the next node
        - Example use cases:
            - Cloning a tree
            - Searching for a specific value in the tree
- In-order
    - [1,2,3,4,5,6,7] in-order
    - Begins at the left mode node and ends at the right most node
    - Perform operation after traversing to all left most nodes of a given node
        - Example use cases:
            - Printing nodes in ascending order
- Post-order
    - [1,3,2,5,7,6,4] post-order
    - Begins at the left most node and ends at the root of the tree
    - Perform operation after traversing to all left and right nodes of a given node
        - Example use cases:
            - Deleting a tree
