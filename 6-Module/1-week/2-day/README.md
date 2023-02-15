# `M6W1D2`

# Intro to Python

## Useful Links
- [Python Documentation](https://docs.python.org/3/)
- [PEP 8 Style Guide](https://peps.python.org/pep-0008/)

## Similarities between JavaScript and Python3
- Comparision operators are the same (`<, >, <=, >=, ==, )

## Key differences between JavaScript and Python3
- Whitespace-aware
    - Python prefers indentations to be 4 spaces long
    - When you create code blocks, you must indent the next line to align it properly within the code block
    - Nested code must be properly indented.
    ```python
    # Whitespace example
    # Incorrect!
    if(True):
    print('Hello World')

    # Correct!
    if(True):
        print('Hello World')
    ```
- No semi-colons
    - One statement per line
    - Semi-colons are necessary if you have multiple statements on one line (this is considered bad form)
- Logical Operators
    - `&&` : `and`
    - `||` : `or`
    - `!`  : `not`
- Equality comparision
    - Only "strict" equality.
    ```python
    print(5 == '5') # False
    print(5 == 5) # True
    ```
- Print to terminal
    - The `console.log()` equivalent is `print()`
- Comments
    - Single line comment: `# Comment goes here`
    - Multi-line comment: `""" Comment goes here """`
- Package Manager (npm equivalent)
    - `pipenv` to install packages
- Declaring functions
    - Since python is whitespace-aware you must indent the next line whenever a colon ends a line. Colons create new code blocks in Python
    ```python
    def doAThing(arg1, arg2):
        print(arg1, arg2)
    ```
