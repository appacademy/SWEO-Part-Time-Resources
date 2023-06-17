# `M6W1D3`

## Assigning Variables

- No variable declaration keywords such as let, const, or var
- Assigning a value automatically declares a variable
- Can chain variable assignment together if you are assigning the same value to multiple variables
```python
count = max = min = 0
print(count)
print(max)
print(min)
```
- Python lets you change the value and the type of the variable at any time.
```python
a = 17
print(a)         # => 17
a = 'seventeen'
print(a)         # => seventeen
```

## Python Datatypes
 - Integer numeric datatype without decimals
    - num = 1, num = int(1), isinstance(<variable_your_checking>, str)
 - Float numeric datatype with decimals
    - num = 1.2, num = float(1.2), isinstance(<variable_your_checking>, float)
 - String is a collection of alphabetic letters, words or other characters.
     - string = "string", string = 'string', isinstance(<variable_your_checking>, str) -- immutable
 - List (JS equivelant Array) is an ordered and changeable collection of data objects
    - lst = ['h', 'i'], lst = list('hi'), isinstance(<variable_your_checking>, list) -- mutable
 - Dictionary (Js equivelant Object) is a list of comma-separated key-value pairs wrapped around curly braces ({}).
    - dictionary = {},  dict(key = "value"), isinstance(<variable_your_checking>, dict) -- mutable
 - Tuple is an ordered and unchangeable collection of data objects
    - tup = ('h', 'i'), tup = tuple('hi), isinstance(<variable_your_checking>, tuple) -- immutable
 - Set (Js equivelant Set) an unordered and changeable collection of unique data objects
    - my_set = set('hi'), my_set.add('bye), my_set.discard('bye'), isinstance(<variable_your_checking>, set) -- mutable

## NaN (Not a Number)
- Python does not return `NaN` if you try and perform math between strings and numeric types
- You will get a TypeError
```python
a = '7'
a /= 2
print(a)
```

## The None Type
- Python uses the None type instead of null
- None represents an object of type NoneType, this means you can use NoneType in any place you would use another object
```python
my_var = None
print(my_var is None)
```


## Identity Operators
- Handles strict equality
  - `is` (strictly equal to)
  - `is not` (not strictly equal to)
- `is`/`is not` operators are usually preferred
```python
print (2 == '2')    # => False
print (2 is '2')    # => False

print ("2" == '2')    # => True
print ("2" is '2')    # => True

print (2 == 2.0)    # => True
print (2 is 2.0)    # => False
```

## Try Except
- Same as try/catch in JavaScript
- Can catch any error, or a specific error(s)
- Errors that occur while a program is executing are called exceptions
- `raise` keyword to throw error
```python
# simple error catching
a = 321
try:
    print(len(a))
except:
    print('Silently handle error here')
    # Optionally include a correction to the issue
    a = str(a)
    print(len(a))
```

```python
#catching named errors
a = 100
# b = "5"
# b = 0
# b = 5
try:
    print(a / b)
except ZeroDivisionError:
    pass
except (TypeError, NameError) as e:
    print("ERROR!", e)
finally:
    print("Finally...")
```

## While Loops
- Also perform identically to JavaScript while loops
```python
spam = 0
while spam < 5:
  print('Hello, world.')
  spam = spam + 1
```
- How to break out of a while loop early
```python
spam = 0
while True:
  print('Hello, world.')
  spam = spam + 1
  if spam >= 5:
    break
```
- Getting stuck in an infinite while loop:
```python
while True:
    print('Hello world!')
```

## For loops
- JavaScript has multiple for loops: for(let i = 0; i < someValue; i++), for in, and for of
- Python only has one for loop
- Creating a for looping Python:
    - `for` keyword
    - variable name
    - `in` keyword
    - something that's iterable
    - colon
    - an indented block of code on the next line
```python
for i in range(5):
   print('Hogwarts Legacy (' + str(i) + ')')
```

## If Statements
- Similar to JavaScript
- Difference is that you don't need parentheses `()`. If statements work the same way with or without parentheses
```python
if name == 'Jesse':
    print('Hi, Jesse.')
if (name == 'Jesse'):
    print('Hi, Jesse.')
```
## Else Statements
- Once again, identical logic to JavaScript, “If this condition is true, execute this code. Or else, execute that code.”
```python
if name == 'Jesse':
    print('Hi, Jesse.')
else:
    print('Hello, stranger.')
```

## Elif Statements
- Python equivalent to `else if` in JavaScript
- `elif` can be chained together, but only one of the if statements in the chain will execute
  - Once an if/elif statement executes, the rest are ignored.
- Order matters
```python
if name == 'Jesse':
    print('Hi, Jesse.')
elif name == 'Edward':
    print('You are not Jesse.')
elif name == 'Waldo':
    print('Where is Waldo?')
else:
    print('You are neither Jesse nor a little kid.')
```
