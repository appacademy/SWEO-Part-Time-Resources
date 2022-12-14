# Intro to Python

## Today's objectives:
    - Learn python syntax
    - Learn differnces between JavaScript and Python

## Useful Links
- [Python Documentation](https://docs.python.org/3/)
- [PEP 8 Style Guide](https://peps.python.org/pep-0008/)

## Similarities between JavaScript and Python3
- Comparision operators are the same (`<, >, <=, >=, ==, )

## Key differences between JavaScript and Python3
- Whitespace-aware
    - Whitespace is very important in python and a very big change from JavaScript.
    - Python prefers indentations to be 4 spaces long.
    - When you create code blocks, you must indent the next line to align it properly within the code block.
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
    - So technically this is similar to JavaScript as the compiler does not care about semi-colons, however it is mostly preferred to use semi-colons in JavaScript, whereas in Python, you should not be using semi-colons. Semi-colons in python will not break your code however.
- Logical Operators
    - Python was meant to be read by humans. The current logical operators you use in JavaScript come from Java.
    - `&&` : `and`
    - `||` : `or`
    - `!`  : `not`
- Equality comparision
    - Python has no "strict" vs "loose" equality. There is only "strict" equality.
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
    - We will mostly be using `pipenv` to intall packages.
- Extra math operators
    - `**` is used for exponents `2 ** 3 = 8`
    - `//` is used for integer division (removes remainder `7 // 3 = 2`)
- Declaring functions
    - Since python is whitespace-aware you must indent the next line whenever a colon ends a line. Colons create new code blocks in Python.
    ```python
    def doAThing(arg1, arg2):
        print(arg1, arg2)
    ```
