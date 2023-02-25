# Knight's Travails Part 4

Now that you have created your internal data structure (the move tree stored in
`self._root`), you can traverse it to find the shortest path to any position on
the board from the original position.

Create an instance method named `find_path(end_position)` to search for the
`end_position` in the move tree. You can use either the `depth_search(value)` or
`breadth_search(value)` method on the `Node` object stored in `self._root`. This
should return the tree node containing the value passed in through
`end_position`.

Now that you have a node, you can build a path from it. Add an instance method
named `trace_to_root(end_node)` to the `KnightPathFinder` class. This method
should take an instance of the `Node` class and create a list of the values from
that node back to the root node using the `parent` property on each `Node`
instance. The `trace_to_root(end_node)` should return the values in order from
the start position to the end position.

Use `trace_to_root(end_node)` to finish the `find_path(end_position)` method.

Here are some example paths that you can use for testing purposes. Your paths
might not be exactly the same, but should be the same number of steps.

```python
finder = KnightPathFinder((0, 0))
finder.build_move_tree()
print(finder.find_path((2, 1))) # => [(0, 0), (2, 1)]
print(finder.find_path((3, 3))) # => [(0, 0), (2, 1), (3, 3)]
print(finder.find_path((6, 2))) # => [(0, 0), (1, 2), (2, 4), (4, 3), (6, 2)]
print(finder.find_path((7, 6))) # => [(0, 0), (1, 2), (2, 4), (4, 3), (5, 5), (7, 6)]
```