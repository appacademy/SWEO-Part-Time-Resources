# Linked List Project

This project contains a skeleton for you to implement a singly linked list. You
have done this in JavaScript and now it's time to practice implementing the data
structure in Python. It is important to get comfortable and confident in data
structures as you begin to ramp up for interviews. As with everything you have
learned at App Academy, you know that practice makes perfect!

## Phase 1

Following the instructions below, you'll implement a `Node` class and a
`LinkedList` class with methods to append, remove, and access the linked nodes
within the list.

### Node and LinkedList initialization

You'll begin by completing the Node `__init__` method so that each Node instance
has "_value" and "_next" properties. Remember that Python errors out if there
are empty method definitions, so you'll replace the `pass` in each block with
the code you write to complete the method. Next, you'll complete the LinkedList
`__init__` method so that each LinkedList instance has "_head", "_tail", and
"_length" properties. The "_length" property will be used to keep track of the
size of the list.

Take a moment to test the initialization of your `Node` and `LinkedList` class
instances by running `python3 linked_list.py`. There are commented out
statements to test each `LinkedList` method. As you finish writing each method,
comment in more statements to test your code. Note that you should not comment
out statements under "Phase 1 Manual Testing" until your have finished testing
all of your Phase 1 methods (`get_node`, `add_to_tail`, `add_to_head`,
`remove_head`, `remove_tail`, and `__len__`).

### get_node(position)

The `get_node` method will take care of getting a node by its position. It
should return `None` if the position is out of bounds. Note that although it is
_Pythonic_ to have explicit code, it is convention to implicitly return `None`
rather than explicitly.

Take a moment to notice how this method takes in a `position` instead of an
index. The parameter is intentionally named to create an explicit distinction
from arrays (or lists in Python). As you might remember, you are unable to _key_
into the middle of a linked list by its index to access an element. The method
will iterate through the list's nodes to return the node of the specified
position when get is called. Think of how you can make use of the node's "_next"
attribute. Comment in the following statement to test your code:

```python
# 2. Test getting a node by its position
print(linked_list.get_node(0))    # None
```

### add_to_tail(value)

The `add_to_tail` method should reassign the tail pointer when new nodes are
added to the tail. Begin by initializing a new node with the `value` to add. It
should then reassign both the "_head" and "_tail" pointers when a new node is
added.

If the head node is `None`, set the head to be the new node you just
initialized. Otherwise, set the "_next" node of the list's tail to be the new
node. Take a moment to visualize how you now are now either setting the root
"_head" node of your list or simply chaining onto the tail of the list.

You'll need to update the list's "_tail" to be the new node as well as increment
its "_length" after new nodes are added to the tail. The method should return
the updated list (`self`) after new nodes are added to the tail. Comment in the
following statements to test your code:

```python
# 3. Test adding a node to the list's tail
linked_list.add_to_tail('new tail node')
print(linked_list.get_node(0))          # <__main__.Node object at ...>
print(linked_list.get_node(0)._value)   # `new tail node`
```

### add_to_head(value)

The `add_to_head` method should take care of adding a node as the list's
"_head". It should reassign the head pointer when new nodes are added to the
head. Like in your `add_to_tail` method, the `add_to_head` method should
initialize a new node with the input `value` and reassign both the "_head" and
"_tail" pointers to the new node. When the list is empty, the head and tail
pointers should both be reassigned to the new node.

If the linked list has no head, set both the head and tail as the new node.
Otherwise, set the new node as the head and update the list to follow. The
method should also update the "_length" attribute and return the updated list
after new nodes are added to the head. Comment in the following statements to
test your code:

```python
# 4. Test adding a node to list's head
linked_list.add_to_head('new head node')
print(linked_list.get_node(0))          # <__main__.Node object at ...>
print(linked_list.get_node(0)._value)   # `new head node`
```

### remove_head()

The `remove_head` method will take care of removing the head node. should return
`None` if the list is empty. Otherwise, it should remove the head node from the
list by reassigning the head pointer to the next node in the list. It should
also decrement the list "_length" after removing the head node. If length of the
list is zero after decrementing, the tail pointer should be reassigned to `None`
when the head. The method should return the removed node when called. Comment in
the following statements to test your code:

```python
# 5. Test removing the head node
linked_list_node_head()
print(linked_list.get_node(0)._value)   # `new tail node`
print(linked_list.get_node(1))          # None
```

### remove_tail()

The `remove_tail` method  will take care of removing the tail node. It should
implicitly return `None` if the list head is `None`. Now, what if the `_tail`
node is the same as the `_head` node? What would you do to completely remove all
of the list's nodes and how might you test that?

If the list head is not `None`, set the current node as the removed node's head
and set the new tail as the current node. While the current node has a following
neighbor ("_next"), update the new tail and current nodes. Remember to update
the "_length" attribute and reassign the list's tail pointer to the new tail.
Make sure the list's tail doesn't have a neighbor ("_next"), otherwise it
wouldn't be a tail! The method should return the removed tail node when it is
called. Comment in the following statements to test your code:

```python
# 6. Test removing the tail node
print(linked_list.get_node(0)._value)   # `new tail node`
linked_list_node_tail()
print(linked_list.get_node(0))          # None
```

### __len__()

The `__len__` method will take care of returning the list length. You are
familiar with invoking the `len()` function for strings and lists. These
functions don't magically "work" for strings or lists as an inherent part of the
language, but are functions that have been implemented by developers just like
us, just like you will do for your `LinkedList` class! The method should act as
a getter to return the "_length" attribute of the list. Comment in the following
statements to test your code:

```python
# 7. Test returning the list length
print(len(linked_list))   # 2
```

Before moving on to Phase 2, make sure to test your code with the provided test
statements at the bottom of the `linked_list.py` file under "Phase 1 Manual
Testing". This is also a good point to commit your code. Once you have finished
manually testing the `get_node`, `add_to_tail`, `remove_tail`, `add_to_head`,
`remove_head`, and `__len__` methods, comment out all the Phase 1 test cases.

## Phase 2

In this phase, you'll be writing the code to complete your LinkedList's
`contains_value`, `insert_value`, `update_value`, `remove_node`, and `__str__`
methods. Take a moment to review the expected output of the test cases under
"Phase 2 Manual Testing". As you become a vetted software engineer, your mind
will automatically gravitate towards testing.

In your later projects, you'll take more ownership of testing your code, either
through manual testing like today's project or with actual test suites and
test-driven development. For now, focus on improving your manual testing and
debugging skills.

### contains_value(target)

The `contains_value` method will check whether the list contains a value and
return a boolean. It will check each linked node, starting from the head node,
and compare its "_value" to the `target` value. Make sure your Phase 1 cases are
commented out, then comment in the following statements to test your code:

```python
# 1. Test whether the list contains a value
linked_list = LinkedList()
linked_list.add_to_head('new head node')
print(linked_list.contains_value('new head node'))      # True
print(linked_list.contains_value('App Academy node'))   # False
```

### insert_value(position, value)

The `insert_value` method will take care of inserting a node value into the list
at a specific position. It should return `False` if the position is out of
bounds. If the position is zero, the method will use the `add_to_head` method to
insert the value. If the position is the same list's length, use the
`add_to_tail` method. 

If you are not simply returning `False` due to an invalid position, inserting a
head node, or inserting a tail node, you'll need to shift some nodes in your
insertion. Initialize a `new_node` with the given value. Use the given position
to reference a `previous_node`. Now you'll want to save the previous node's
"_next" node as a `node_to_move`. Your `new_node` will be inserted after the
`previous_node` and before the `node_to_move`. Think of how you need to change
the pointer references to achieve this.

The method should return `True` whenever the node is successfully inserted at a
specified position. The method should also update the list's "_length"
attribute. Comment in the following statements to test your code:

```python
# 2. Test inserting a node value into the list at a specific position
linked_list.insert_value(0, 'hello!')
print(linked_list.get_node(0)._value)   # `hello!`
```

### update_value(position, value)

The `update_value` method will take care of updating a list's node at a specific
position. You can use the `get_node` method you wrote in Phase 1 to reference
the `node_to_update`. If the `node_to_update` is successfully found, update its
value and return `True. Otherwise, return `False` when a node is not found at
the provided position. Comment in the following statements to test your code:

```python
# 3. Test updating a list node's value at a specific position
linked_list.update_value(0, 'goodbye!')
print(linked_list.get_node(0)._value)   # `goodbye!`
```

### remove_node(position)

The `remove_node` method will take care of removing a node from the list at a
specific position. It should implicitly return `None` if the position is out of
bounds. Otherwise, it will remove the node at the specified position from the
list. If the position is referencing the first node of the list, use the
`remove_head` method. If the position is referencing the last node of the list,
use the `remove_tail` method.

Similarly to the `insert_value` method, you'll need to shift some nodes if you
are not simply returning `None` due to an invalid position, removing the head
node, or removing the tail node. Use the given position to reference a
`previous_node`. Now you'll want to save the previous node's "_next" node as a
`node_to_remove`. The "_next" node your the `node_to_remove` will be set as
"_next" node of the `previous_node`.

This way, any pointers to the `node_to_remove` are unlinked and your
`node_to_remove` is removed from the list. Update the list's "_length" and
return the removed node when a node is removed. Comment in the following
statements to test your code:

```python
# 4. Test removing a node value from the list at a specific position
print(linked_list.get_node(1)._value)   # `new head node`
linked_list.remove_node(1)
print(linked_list.get_node(1))          # None
```

### __str__()

Congratulations! You've now implemented a fully functional linked list. The next
step is to make it easier for you to test and view the link list. Notice how you
needed to explicitly print each node's "_value" attribute in order to identify
it. You can overwrite the `__str__` method so that your linked list will be
automatically formatted as a string whenever `print()` is invoked. Start at the
"_head" node and check if it exists. If the list has no head node, simply return
`'Empty List'`. Otherwise, generate a `values_string` for which you will append
each node's "_value" string. Think of how you might add spacing or a comma
between each additional node value. After iterating through each node, return
the accumulated string of node values.

```python
# 5. Format the list as a string whenever `print()` is invoked
new_linked_list = LinkedList()
print(new_linked_list)                  # Empty List
new_linked_list.add_to_tail('puppies')
print(new_linked_list)                  # puppies
new_linked_list.add_to_tail('kittens')
print(new_linked_list)                  # puppies, kittens
```

The test cases provided for you in today's project have been overly simple. As a
developer, it is up to you to think of edge cases that might break your code.
Based on the simple test cases provided, take a moment to brainstorm and write
custom statements that test edge cases before requesting a code review from an
instructor.
