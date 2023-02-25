# Knight's Travails Part 2

Now, you're going to build some methods that allow you to get valid moves for a
Knight from a given position.

Create a new file named **path_finder.py**. In it, import the `Node` class you
just created. Then, declare a class named `KnightPathFinder`. The initializer of
the `KnightPathFinder` should take a tuple that is the x and y coordinates on
the standard chess board.

```python
finder = KnightPathFinder((0, 0))
```

## End goal

Ultimately, you will want to be able to find paths to another position from the
start position you initialized the `KnightPathFinder` with.

```python
finder.find_path((2, 1)) # => [(0, 0), (2, 1)]
finder.find_path((3, 3)) # => [(0, 0), (2, 1), (3, 3)]
```

To help you find the paths, you will build a **move tree**. The values in the
tree will be positions. A node is a child of another node if a Knight can move
from the position stored in the parent node _directly_ to the position in the
child node.

For example, if the root node contains the value `(0, 0)`, then the direct
children of that node would nodes that contained the values `(2, 1)` and `(1,
2)`, the two moves that can be made from `(0, 0)`.

## Write the KnightPathFinder class

The root node of the tree should be the knight's starting position, the one
passed in through the initializer. You will use your `Node` class from the last
part to represent each position.

Start by creating an instance variable, `self._root` that stores the knight's
initial position in an instance of your `Node` class.

You'll want to keep track of all of the positions that the tree has already
seen, since you don't want to end up in an infinite loop of bouncing back and
forth between the same two positions. Add a new instance variable to the
initializer named `_considered_positions` and initialize it to a new `set` with
the knight's root start position.

## Valid and new move positions

Write a method named `get_valid_moves(pos)`. Remember that in Python, instance
methods need to take in `self` as the first parameter. From the value in `pos`,
there could be up to eight possible moves. The `get_valid_moves(pos)` method returns
all valid moves from the position passed to it.

Now, write a method named `new_move_positions(pos)`. From the value in
`pos`, use it to call `get_valid_moves(pos)`. Filter out the values returned
from `get_valid_moves(pos)` with the values in `_considered_positions`. Think
of what built-in `set` method you could use. Whatever is left over, add those
values to `_considered_positions`, then return them.

When you have completed both methods, take a moment to test your
`new_move_positions(pos)` method. Initialize an instance of the
`KnightPathFinder` class and invoke the `new_move_positions` method with a
position. You should receive a set of possible moves (valid positions that are
not already in the instance's "_considered_positions".)

```python
finder = KnightPathFinder((0, 0))
print(finder.new_move_positions((0, 0)))   # Expected outcome: {(1, 2), (2, 1)}
```

You're nearly there! Think of some edge cases to test your code with. Once your
methods are working, get a code review from an instructor. Next up, you can
build the move tree.