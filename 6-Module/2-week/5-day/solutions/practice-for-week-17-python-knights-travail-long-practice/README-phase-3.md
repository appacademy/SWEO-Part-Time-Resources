# Knight's Travails Part 3

Now, you're going to use the tree nodes that you created in the last section to
build a "move tree" that allows you to search for the shortest path that a Chess
Knight can take from a start position to an end position.

Create a method named `build_move_tree()`. The root node, right now, has the
value of the starting position. Starting with that value, use the
`new_move_positions(pos)` method to give you the moves that can occur from the
position in the root node. Add each of those positions as children. Continue
building the tree in a **breadth-first** manner. Take inspiration from your
`breadth_search` method in the `Node` class.

When you have completed and take a moment to manually test your
`build_move_tree()` method. Initialize an instance of the `KnightPathFinder`
class and call the `build_move_tree()` method. Then print the collection of
children nodes associated with the instance's "_root" node.

```python
finder = KnightPathFinder((0, 0))
finder.build_move_tree()
print(finder._root.children)
```

You should see a collection of child nodes. For example:

```sh
[<tree.Node object at 0x108fc6520>, <tree.Node object at 0x108fc6850>]
```

Think of some edge cases and test your code. After testing your code, get a
review from an instructor. Then, you can complete the project!