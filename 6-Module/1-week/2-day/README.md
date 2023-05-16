# M6-W1-D2

Python Introduction

## Useful Links
- [Python Documentation](https://docs.python.org/3/)
- [PEP 8 Style Guide](https://peps.python.org/pep-0008/)
- https://neetcode.io/courses/lessons/python-for-coding-interviews



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

## Similarities between JavaScript and Python3
- Comparision operators are the same (`<, >, <=, >=, ==, )

- Booleans
- Strings
- Numbers

## Booleans

```js
//JS
true && false
true || false
true && !false
```

```py
#Py
True and False
True or False
True and not False
```
```js
//falsy values for js
false
0
-0
0n
"",'',``
null
undefined
NaN
```

```py
#falsy values for py
None
False
0
0.0
''
[]
()
{}
set()
range(0)
```

Truthy and Falsy values (Boolean type coercion) differ in JS and Python. One common gotcha is empty
collections (reference types) are truthy in JS and falsy in Python.

## Strings

Strings are basically the same in python and JavaScript, but the methods
assosiated with strings are different.

```js
//JS
'hello'.length; //5
'hello'[4] //o
'hello'.slice(0,2) //he
'hello' + ' ' + 'world'
let word1 = 'hello';
let word2 = 'world';
let sentence = `${word1} ${word2}!`
```

```py
#Py
len('hello') #5
# negative indexing is a thing
'hello'[4] or 'hello'[-1] #o
# built in range functionality is a thing
'hello'[0:2] # he
'hello' + ' ' + 'world'
'hello ' * 3
word_1 = 'hello'
word_2 = 'world'
format_sentence = '{0} {1}!'.format(word1, word2)
fstring_sentence = f'{word1} {word2}!' #fstring, newest syntax introduced in python 3.6
questions = 20
num_correct = 10
score = f'You got {num_correct/questions:%}'
score = f'You got {num_correct/questions:.0%}'
```

[format spec](https://docs.python.org/3/library/string.html#formatspec)

## Numbers

int  -- whole numbers, both positive and negative
float -- numbers with a decimal point

integer division -- whole number division

```py
#Py
print(20 / 6) # 3.33333
print(20 // 6) # 3 integer division
```

++ and -- do not exist in python
