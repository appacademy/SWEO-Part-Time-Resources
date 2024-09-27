# List and Dictionary Comprehensions

## Overview

Comprehensions provide a concise way to create lists and dictionaries in Python. They can improve readability and reduce the number of lines of code.

## List Comprehensions

A list comprehension consists of brackets containing an expression followed by a `for` clause, then zero or more `for` or `if` clauses.

### Syntax
```py
[expression for item in iterable if condition]
```

Example
Create a list of squares for even numbers between 0 and 10:

```py
squares = [x**2 for x in range(11) if x % 2 == 0]
print(squares)  # Output: [0, 4, 16, 36, 64, 100]
```
## Dictionary Comprehensions

Similar to list comprehensions, dictionary comprehensions create dictionaries. The syntax includes a key-value pair.

### Syntax
```py
{key_expression: value_expression for item in iterable if condition}
```
Example
Create a dictionary mapping numbers to their squares for even numbers between 0 and 5:

```py
squares_dict = {x: x**2 for x in range(6) if x % 2 == 0}
print(squares_dict)  # Output: {0: 0, 2: 4, 4: 16}
```


# Some Builtins

1. `map()`

Applies a given function to all items in an iterable (e.g., a list) and returns a map object (which is an iterator).

### Example
```py
numbers = [1, 2, 3, 4]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # Output: [1, 4, 9, 16]
```
2. filter()

Filters items from an iterable based on a function that returns True or False.


```py
numbers = [1, 2, 3, 4, 5]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # Output: [2, 4]
```

3. zip()

Combines two or more iterables (e.g., lists) into a single iterable of tuples.


```py 
names = ["Alice", "Bob", "Charlie"]
scores = [85, 90, 95]
combined = list(zip(names, scores))
print(combined)  # Output: [('Alice', 85), ('Bob', 90), ('Charlie', 95)]
```
4. enumerate()

Adds a counter to an iterable and returns it as an enumerate object.

```py
items = ['apple', 'banana', 'cherry']
for index, item in enumerate(items):
    print(index, item)
# Output:
# 0 apple
# 1 banana
# 2 cherry
```