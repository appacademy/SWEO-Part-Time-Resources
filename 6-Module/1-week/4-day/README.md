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

# Test Expectations

## Python test, no JS
- Know all of your math operators (+, -, *, /, **, //, %)
- Know your truthy values, and falsey values
- Know what keywords such as pass, continue, break, do
- Know how to create/use anonymous functions in python (JS arrow function equivalent)
- Know how to type cast basic data, str(1) would result in a string of '1', int(1.0) would result in an int of 1

- Know how to use if, else, elif and make sure you understand how the code jumps from block to block depending on if the statements get evaluated or not.
- Know how to implement for loops and perform operations on an iterable sequence
- Know how to implement while loops and perform operations on an iterable sequence
<!-- - Know how to use list comprehension  -->
