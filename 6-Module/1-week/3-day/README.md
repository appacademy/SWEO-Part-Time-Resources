# M6-W1-D3

## Duck Typing

If it looks like a duck, and it quacks like a duck, its probably a duck.

Duck typing is a philosophy of type checking that cares less about whether
something has the correct type, but whether something can use a particular
method.

## [EAFP](https://docs.python.org/3/glossary.html#term-EAFP) vs [LBYL](https://docs.python.org/3/glossary.html#term-LBYL)

### Easier to ask for forgiveness than permission

>Easier to ask for forgiveness than permission. This common Python coding style
>assumes the existence of valid keys or attributes and catches exceptions if the
>assumption proves false.
### Look before you leap

>Look before you leap. This coding style explicitly tests for pre-conditions before making calls or lookups.
```py
# will throw an error
a = 321
print(len(a))
# wont throw an error
if hasattr(a, '__len__'):
    print(len(a))
# the length will print out
b = "5555"
if hasattr(b, '__len__'):
    print(len(b))
```

```py
person = {'first_name': 'Ash', 'last_name': 'Ketchum'}
# person = {'first_name': 'Ash'}
# LBYL
if 'first_name' in person and 'last_name' in person:
  print(f'Hello, {person["first_name"]} {person["last_name"]}!')
else:
  print('Missing keys')
# EAFP
try:
   print(f'Hello, {person["first_name"]} {person["last_name"]}!')
except:
  print('Missing keys')
```

## Assigning and Manipulating Variables

no variable declaration keywords `variable = 0`

chaining declarations is possible `count = max = min = 0`

value and type of a variable can be reassinged at any time

NaN doesn't exist! Python throws an exception (error) when math operations are
attempted on types that dont support those operations.

## None Type

pythons version of null

## is vs == (identity vs equality / reference vs value)

```py
print (2 == '2')    # => False
print (2 is '2')    # => False
print ("2" == '2')    # => True
print ("2" is '2')    # => True
print (2 == 2.0)    # => True
print (2 is 2.0)    # => False
obj1 = {'hello': 'world'}
obj2 = {'hello': 'world'}
print(obj1 == obj2) # => True
print(obj1 is obj2) # => False
```

## If statements

If statements in python are made up of the following

- the `if` keyword
- an expression that evaluates to True or False (a condition) `a == b`
- a colon `:`
- an indented block to execute if the condition evaluates to True

```py
name = 'Tony'
if name == 'Tony':
  print('Hello Tony')
elif name == 'Peter':
  print('Hello Peter')
else:
  print('Hello')
```

## Loops

### While

```py
count = 0
while count < 5:
  print(count)
  count += 1
  #break
  #pass
```

### For

```py
# standard for loop
word = 'hello'
for letter in word:
  print(letter)
# if you need an index
for i in range(len(word)):
  print({i: word[i]})
```

## Error Handling

```py
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

```py
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