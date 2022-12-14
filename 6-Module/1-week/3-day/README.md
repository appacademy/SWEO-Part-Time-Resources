# Intro to Python

## Assigning Variables

- Python has no keywords such as let, const, or var. Assigning a value automatically declares a variable.
- You can chain variable assignment together if you are assigning the same value to multiple variables
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
- Shorthand assignment operators are the same in Python as they are in JavaScript
    - +=
    - -=
    - *=
    - /=
- The new Python math operators we just learned also have shorthand assignment operators
    - **=
    - //=
    - %=

## NaN (Not a Number)
- Python does not return `NaN` if you try and perform math between strings and numeric types
- Instead you will get a TypeError
```python
a = '7'
a /= 2
print(a)
```

## The None Type
- Python uses the None type instead of null
- None represents an object of type NoneType, this means you can use NoneType in any place you would use another object.
```python
my_var = None
print(my_var is None)
```

## Duck-typing
- Other programming languages such as Java or C++ require you to specify the type of variable when you declare/assign it, whenever operations are performed it makes sure the type of the variable matches the methods/properties allowed types.
- Python has a different style, it does not check the variables type, and instead simply throws an error if the variable type does not have the method/property in its class definition, this is known as duck-typing
- The concept is commonly referred to as EAFP, or Easier to ask for forgiveness than permission
```python
string = 'hello'
number = 1
print(number.index(1))
```

## Identity Operators
- Yesterday, we covered how the equality comparision operators do not have a strict vs loose variation, as JavaScript does.
- Python handles this differently, using identity operators, this would be the equivalent of JavaScripts strict vs loos equality.
    - `is` (strictly equal to)
    - `is not` (not strictly equal to)
- The equality operators `==`/`!=` are not very consistent in doing 'strict' equality checks, so in Python, the `is`/`is not` operators are usually preferred.
```python
print (2 == '2')    # => False
print (2 is '2')    # => False

print ("2" == '2')    # => True
print ("2" is '2')    # => True

print (2 == 2.0)    # => True
print (2 is 2.0)    # => False
```

## Operator Practices in AAO (45 Minutes)
- Is Divisible by 5
- Calculate Exponent
- Remainder of Two Numbers
- First before Second
- Equality in Python
- Comparision in Python
- (Challenge) Largest Perimeter Triangle

## Operator Practices Discussion (10-15 Minutes)

## Try Except
- Same as try/catch in JavaScript
- Can catch any error, or a specific error/(s)
- Errors that occur while a program is executing are called exceptions. To detect these execution errors we call it "catching exceptions" or "catching errors"
```python
a = 321
print(len(a))
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
- JavaScript has multiple for loops: for(let i = 0; i < someValue; i++), for in, and for of.
- Python only has one for loop!
- Creating a for looping python:
    - `for` keyword
    - variable name
    - `in` keyword
    - something thats iterable
    - colon
    - an indented block of code on the next line
```python
print('My name is')
for i in range(5):
   print('Jesse Brooks (' + str(i) + ')')
```


## AAO Practices(15 Minutes)
- Try/Except
- Print List

## If Statements
- Identical to JavaScript, just using Pythons syntax
- A big difference in Python is that you don't need to provide the parenthesis `()`. If statements work the same way with or without parenthesis
```python
if name == 'Monica':
    print('Hi, Monica.')
if (name == 'Monica'):
    print('Hi, Monica.')
```
## Else Statements
- Once again, identical logic to JavaScript, “If this condition is true, execute this code. Or else, execute that code.”
```python
if name == 'Monica':
    print('Hi, Monica.')
else:
    print('Hello, stranger.')
```

## Elif Statements
- Python equivalent to `else if` in JavaScript
- Same logic as JavaScript, `elif` can be chained together, but only one of the if statements in the chain will execute. Once an if/elif statement executes, the rest are ignored.
- Elif statements, are read from top to bottom, so the order in which you place them does matter.
```python
if name == 'Monica':
    print('Hi, Monica.')
elif age < 12:
    print('You are not Monica, kiddo.')

if name == 'Monica':
    print('Hi, Monica.')
elif age < 12:
    print('You are not Monica, kiddo.')
elif age > 2000:
   print('Unlike you, Monica is not an undead, immortal vampire.')
elif age > 100:
   print('You are not Monica, grannie.')
```

## Putting if, elif, and else all together
- “If the first condition is true, do this. Else, if the second condition is true, do that. Otherwise, do something else.”
```python
if name == 'Monica':
    print('Hi, Monica.')
elif age < 12:
    print('You are not Monica, kiddo.')
else:
    print('You are neither Monica nor a little kid.')
```

## Continue statements
- Python equivalent to `break` in JavaScript
```python
spam = 0
while True:
  print('Hello, world.')
  spam = spam + 1
  if spam < 5:
    continue
  break
```
