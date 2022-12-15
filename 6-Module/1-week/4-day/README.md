# Intro To Python

## Functions
- Functions are defined, and then invoked
- Function definitions include:
    - def keyword
    - name of the function
    - list of parameters inside of parenthesis `()`
    - a colon at end of line
    - all code within the function definition is indented
- Functions in Python work the same way in JavaScript, you can pass in arguments, which are positional(order matters), and you can return a value from your function
- Default values may be specified in the parameters
```python
def printer(arg)
    print(arg)

printer('Hello World')
```

## Anonymous Functions
- Python has a special keyword lambda that allows you to create anonymous functions just like JavaScript

## Data Structures in Python
- Sequences (range() using in for loops return a sequence)
- Collections
    - Unordered data structures
    - No indexs
    -
- Iterables
    - Anything that can be "iterated", (has a clear start and finish, such as beginning of string, end of string or beginning of list, end of a list)
    - Any object can be iterated
- Mutability
    - Mutable
        - Iterators CAN change the value at the current position (lists are mutable, as you iterate through a list you may update its value at the current position)
    - Immutable
        - Iterators can NOT change the value at the current position (strings are immutable, you can iterate through strings, but you cannot change the value while iterating)

## Built in Data Types

- Lists
    - Very similar to arrays in JavaScript
    - Mutable
    - Usually used to store a sequence of items that are all the same type of data (strings, numerics)

    ```python
    list1 = [1, 2, 3]
    print(list1)
    ```
    - Test if a value is in a list very easily

    ```python
    print(1 in [1, 2, 3]) #> True
    print(4 in [1, 2, 3]) #> False
    ```
