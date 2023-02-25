# Knight's Travails Part 1

Even though there are four discrete parts to this project, read through all of
them, first, before starting this phase.

In this project we will create a class that will find the shortest path for a
Chess Knight from a starting position to an end position. Both the start and end
positions should be on a standard eight-by-eight chess board.

At the end of this project, you should be able to bring together lots that
you've learned, this week, as well as bringing back information you learned
earlier in the course, such as:

* declaring classes in Python
* creating and using lists in Python
* using list comprehensions in Python
* using loops in Python
* using conditionals in Python
* using the tree data structure
* using tree searches to find nodes

You'll also use unit tests for part of it to guide your development like you did
in Node.js-land.

## Getting started

Make sure that you're running a 3.9 version of Python by typing `python
--version` in your terminal.

Run the tests with the following command line. Note that you'll need to create a
`tree.py` file before being able to view the test errors. Run the following
command from the root directory of your project, not from within the `test`
directory.

```shell
python -m unittest
```

At the top of your test response, you'll see "EEEEEEEEEEEEEEEEE". This indicates 
that you have seventeen test errors. As you write code and pass tests, you'll 
see each `E` change to a `.` for a passed test or an `F` for a failed test. At 
the bottom, you can also see how many failed tests you have 
"FAILED (errors=17)".

## Write the tree node class

Create a file named `tree.py`. In there, declare a class named `Node`. Create
an initializer for `Node` that does the following things.

* Accepts a parameter named "value" and sets an instance variable named "_value"
  to that value
* Sets the "_parent" instance variable to `None`
* Sets the "_children" instance variable to a new empty list

Then, add the following to the class

* A getter property method named "value" that returns the value in "_value"
* A getter property method named "children" that returns the value of
  "_children"
* A method named "add_child" that takes a node to append it to the list in
  "_children" and update the node's "_parent", if the node is not already in 
  "_children"
* A method named "remove_child" that takes a node to remove it from the list
  in "_children" and reset its "_parent" to `None`
* A getter property method named "parent" that returns the value of "_parent"
* A setter property method named "parent" that sets the parent property _and_
  calls the "add_child" method of the parent node passing itself as the node to
  add to the list of children

Once you do that, you should be able to run the tests and see that all of the
tests for `__init__()` works and most of the ones for `parent()` should pass.
You'll finish the other tests for that method soon.

## Reassign parents

Currently, the `parent()` setter does not update a node's children when it is reassigned or removed as a parent. Add the following code to the bottom of 
your `tree.py` file and run `python3 tree.py` to manually test and examine the 
children.

```python
node1 = Node("root1")
node2 = Node("root2")
node3 = Node("root3")

node3.parent = node1
node3.parent = node2

print(node1.children)
print(node2.children)
```

You should see two lists containing `node3` with the same identifier:

```sh
[<__main__.Node object at 0x10ee02640>]
[<__main__.Node object at 0x10ee02640>]
```

When you assign `node1` as the parent of `node3`, `node3` adds itself to the 
children of `node1`. When you then assign the parent of `node3` to `node2`,
`node3` adds itself to the children of `node2`, but _is still in the children
of `node1`_! That doesn't make sense.

Modify the `parent()` setter to _remove_ the child from the existing parent (if
one exists) _before_ adding itself to the new parent's children list. You should
have already implemented the "remove_child" method. Use it.

After adding the condition to remove the child node from the parent if the child 
has a parent, you'll receive a new error:

```sh
AttributeError: 'NoneType' object has no attribute 'add_child'
```

Add a condition to make sure that the input parent `node` is not `None` before 
adding the child node to the parent. Now if you run `python3 tree.py` again, 
you'll notice that your script is running in an endless recursive loop with the 
following error:

```sh
RecursionError: maximum recursion depth exceeded
```

Think of how the `add_child` and `remove_child` methods are both invoking the
`parent()` setter. What would be the base case to prevent an endless recursive
call of the `parent()` setter?

Add the base case. Manually test your `parent()` setter. Once you are no longer
receiving errors, comment out the test cases and run the test suite with `python
-m unittest`. Now all of the `parent()` setter tests should pass. You should
have four remaining tests to pass.

## Searching

Write a method named `depth_search(value)` that takes a value to search for,
performs a depth-first search, and returns the node that contains the value,
if it exists. Otherwise, it should return `None`.

Write a method named `breadth_search(value)` that takes a value to search for,
performs a breadth-first search, and returns the node that contains the value,
if it exists. Otherwise, it should return `None`.

All of the tests should now pass.